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

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // 1. Spam Protection - Honeypot Trap
    if (body.hp_token && body.hp_token.trim().length > 0) {
      // Deceive bot with 200 OK without processing
      return NextResponse.json(
        { success: true, message: "Transmission received." },
        { status: 200 }
      );
    }

    // 2. Spam Protection - Time to fill verification (min 1.2 seconds)
    const currentTime = Date.now();
    if (body.timestamp && currentTime - body.timestamp < 1200) {
      return NextResponse.json(
        {
          success: false,
          error: "Transmission rejected: automated bot behavior detected.",
        },
        { status: 400 }
      );
    }

    // 3. Server-Side Validation Architecture
    const errors: Record<string, string> = {};

    // Name Validation
    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Full name must be at least 2 characters.";
    } else if (body.name.trim().length > 100) {
      errors.name = "Name exceeds maximum allowable length (100 chars).";
    }

    // Email Validation
    if (!body.email || !EMAIL_REGEX.test(body.email.trim())) {
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
    if (!body.message || body.message.trim().length < 15) {
      errors.message = "Please describe your project in at least 15 characters.";
    } else if (body.message.trim().length > 3000) {
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
        { status: 422 }
      );
    }

    // 4. Sanitize and Process Clean Payload
    const sanitizedData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company ? body.company.trim() : "Independent / Confidential",
      projectType: body.projectType,
      budget: body.budget,
      message: body.message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // In production, this dispatches to Resend/SendGrid/Slack Webhook/Database
    // Log transmission safely in server console
    console.log("[STUDIO INTAKE] Valid transmission received:", {
      from: sanitizedData.name,
      email: sanitizedData.email,
      type: sanitizedData.projectType,
      budget: sanitizedData.budget,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project transmission received successfully. We will review and respond within 24 hours.",
        transmissionId: `MEC-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Malformed request or server error encountered. Please try again.",
      },
      { status: 500 }
    );
  }
}
