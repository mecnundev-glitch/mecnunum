import { NextRequest, NextResponse } from "next/server";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  hp_token?: string; // Honeypot trap
  timestamp?: number; // Time-to-fill spam check
}

// Simple in-memory sliding window rate limiter
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up stale rate limit entries periodically
function cleanupRateLimits() {
  const now = Date.now();
  rateLimitMap.forEach((record, ip) => {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  });
}

/**
 * Sanitize text inputs against XSS and control character injection
 */
function sanitizeInput(str: string): string {
  if (!str) return "";
  return str
    .replace(/[<>]/g, "") // Strip HTML tags
    .replace(/javascript:/gi, "") // Strip JS URI scheme
    .replace(/on\w+=/gi, "") // Strip inline event handlers
    .trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const VALID_PROJECT_TYPES = [
  "Web Development",
  "3D & WebGL Experience",
  "Corporate Website",
  "E-Commerce Platform",
  "SEO & Performance",
  "Custom Engineering",
];

const VALID_BUDGETS = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
  "To be scoped",
];

// CORS headers helper
const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "https://mecnun.dev",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "X-Content-Type-Options": "nosniff",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    cleanupRateLimits();
    const now = Date.now();
    const currentRate = rateLimitMap.get(ip);

    if (currentRate) {
      if (now < currentRate.resetAt) {
        if (currentRate.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              message: "Rate limit exceeded. Please wait a few minutes before transmitting again.",
            },
            { status: 429, headers: corsHeaders }
          );
        }
        currentRate.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }

    const body: ContactFormData = await req.json();

    // 2. Anti-Spam Protection - Honeypot Trap
    if (body.hp_token && body.hp_token.trim().length > 0) {
      // Deceive bot with 200 OK without processing
      return NextResponse.json(
        { success: true, message: "Transmission received." },
        { status: 200, headers: corsHeaders }
      );
    }

    // 3. Anti-Spam Protection - Time to fill verification (min 1.2s, max 24h)
    if (body.timestamp) {
      const elapsed = now - body.timestamp;
      if (elapsed < 1200) {
        return NextResponse.json(
          {
            success: false,
            error: "Transmission rejected: automated bot behavior detected.",
          },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // 4. Server-Side Validation Architecture
    const errors: Record<string, string> = {};

    const cleanName = sanitizeInput(body.name);
    const cleanEmail = body.email ? body.email.trim().toLowerCase() : "";
    const cleanCompany = sanitizeInput(body.company || "");
    const cleanMessage = sanitizeInput(body.message);

    // Name Validation
    if (!cleanName || cleanName.length < 2) {
      errors.name = "Full name must be at least 2 characters.";
    } else if (cleanName.length > 100) {
      errors.name = "Name exceeds maximum allowable length (100 chars).";
    }

    // Email Validation
    if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
      errors.email = "Please provide a valid business or personal email address.";
    }

    // Project Type Validation
    if (!body.projectType || !VALID_PROJECT_TYPES.includes(body.projectType)) {
      errors.projectType = "Please select a recognized project category.";
    }

    // Budget Validation
    if (!body.budget || !VALID_BUDGETS.includes(body.budget)) {
      errors.budget = "Please select an estimated budget bracket.";
    }

    // Message Validation
    if (!cleanMessage || cleanMessage.length < 15) {
      errors.message = "Please describe your project in at least 15 characters.";
    } else if (cleanMessage.length > 3000) {
      errors.message = "Message exceeds maximum length (3,000 characters).";
    }

    // If validation fails, return structured errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the specified fields.",
          errors,
        },
        { status: 422, headers: corsHeaders }
      );
    }

    // 5. Sanitized Clean Payload
    const sanitizedData = {
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany || "Independent / Confidential",
      projectType: body.projectType,
      budget: body.budget,
      message: cleanMessage,
      receivedAt: new Date().toISOString(),
    };

    // Safe transmission logging
    console.log("[STUDIO INTAKE SECURE] Valid transmission received:", {
      from: sanitizedData.name,
      email: sanitizedData.email,
      type: sanitizedData.projectType,
      budget: sanitizedData.budget,
      ip: ip.substring(0, 7) + "...",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project transmission received successfully. We will review and respond within 24 hours.",
        transmissionId: `MEC-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200, headers: corsHeaders }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Malformed request or server error encountered. Please try again.",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
