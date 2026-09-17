"use client";

import { useState, useRef, useEffect, useId } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  RotateCcw,
  Terminal,
} from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { STUDIO_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Dynamic load 3D background to prevent SSR blocking
const ContactSpatialNode = dynamic(
  () =>
    import("@/components/three/ContactSpatialNode").then(
      (mod) => mod.ContactSpatialNode
    ),
  { ssr: false }
);

export type FormStatus = "idle" | "focus" | "validation" | "loading" | "success" | "error";

export interface ContactState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  hp_token: string;
}

const PROJECT_TYPES = [
  "Web Development",
  "3D & WebGL Experience",
  "Corporate Website",
  "E-Commerce Platform",
  "SEO & Performance",
  "Custom Engineering",
];

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
  "To be scoped",
];

const INITIAL_FORM: ContactState = {
  name: "",
  email: "",
  company: "",
  projectType: "Web Development",
  budget: "$5,000 - $15,000",
  message: "",
  hp_token: "",
};

export function ContactSection() {
  const formId = useId();
  const [formData, setFormData] = useState<ContactState>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [receipt, setReceipt] = useState<{ id: string; time: string } | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const validateField = (field: keyof ContactState, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
          return "Please provide a valid email address.";
        }
        return "";
      case "message":
        if (!value.trim()) return "Project description is required.";
        if (value.trim().length < 15) return "Please provide at least 15 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (field: keyof ContactState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "validation" || errors[field]) {
      const fieldError = validateField(field, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (!fieldError) delete next[field];
        else next[field] = fieldError;
        return next;
      });
    }
  };

  const handleBlur = (field: keyof ContactState) => {
    setActiveField(null);
    const fieldError = validateField(field, formData[field]);
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleFocus = (field: string) => {
    setActiveField(field);
    if (status !== "loading" && status !== "success") {
      setStatus("focus");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("validation");

    // Client-side pre-flight validation
    const newErrors: Record<string, string> = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;
    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;
    const msgErr = validateField("message", formData.message);
    if (msgErr) newErrors.message = msgErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first erroneous input
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementById(`${formId}-${firstErrorField}`);
      el?.focus();
      return;
    }

    setErrors({});
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: startTimeRef.current,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setReceipt({
          id: data.transmissionId || `MEC-${Date.now().toString(36).toUpperCase()}`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
      } else {
        setStatus("error");
        if (data.errors) {
          setErrors(data.errors);
        }
        setErrorMessage(
          data.message || "An error occurred during submission. Please verify inputs."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error: Unable to reach transmission gateway. Please retry.");
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setStatus("idle");
    setReceipt(null);
    setErrorMessage("");
    startTimeRef.current = Date.now();
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
    >
      {/* Background Ambience & Spatial Node */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ContactSpatialNode />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-studio-cyan/5 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <MecnunCatIcon size={18} />
            <span>{"05 // DIRECT TRANSMISSION & INQUIRY"}</span>
          </div>

          <h2
            id="contact-heading"
            className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono"
          >
            Have a project <span className="text-studio-cyan">in mind?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you need a high-performance web platform, an immersive 3D spatial experience,
            or an architectural code audit — let&apos;s build something exceptional together.
          </p>
        </div>

        {/* Grid: Form + Contact Channels */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-start">
          {/* Main Interactive Form Column */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative">
            {/* Live Telemetry Status Bar */}
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-400">
                <Terminal className="h-4 w-4 text-studio-cyan" />
                <span>FORM PIPELINE:</span>
                <span
                  className={cn(
                    "font-bold uppercase tracking-wider",
                    status === "idle" && "text-zinc-400",
                    status === "focus" && "text-studio-cyan animate-pulse",
                    status === "validation" && "text-amber-400",
                    status === "loading" && "text-studio-lime animate-pulse",
                    status === "success" && "text-studio-lime",
                    status === "error" && "text-rose-400"
                  )}
                >
                  [{status}
                  {activeField ? ` // ${activeField}` : ""}]
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 text-studio-lime" />
                <span>TLS 1.3 // SPAM SHIELD ACTIVE</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" && receipt ? (
                /* Success State Card */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="py-8 text-center space-y-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-studio-lime/40 bg-studio-lime/10 text-studio-lime shadow-[0_0_30px_rgba(163,255,18,0.25)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-mono uppercase text-foreground">
                      Transmission Confirmed
                    </h3>
                    <p className="max-w-md mx-auto text-sm text-muted-foreground leading-relaxed">
                      Thank you, <span className="text-foreground font-semibold">{formData.name}</span>.
                      Your project inquiry has been securely queued. We review all technical submissions
                      within 24 business hours.
                    </p>
                  </div>

                  {/* Submission Telemetry Digest */}
                  <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-4 text-left font-mono text-xs space-y-2 text-zinc-300">
                    <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                      <span>TRANSMISSION ID</span>
                      <span className="text-studio-cyan font-bold">{receipt.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                      <span>PROJECT SCOPE</span>
                      <span className="text-white">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                      <span>ESTIMATED BUDGET</span>
                      <span className="text-studio-lime">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>CONFIRMATION DISPATCHED TO</span>
                      <span className="text-white truncate max-w-[200px]">{formData.email}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="lg"
                      className="gap-2 border-white/20 hover:border-studio-cyan"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>Send Another Transmission</span>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Form Form */
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-7"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Honeypot Spam Protection (Off-screen & tabindex -1) */}
                  <div
                    className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    <label htmlFor={`${formId}-hp`}>Security Check</label>
                    <input
                      id={`${formId}-hp`}
                      type="text"
                      name="hp_token"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp_token}
                      onChange={(e) => handleInputChange("hp_token", e.target.value)}
                    />
                  </div>

                  {/* General Error Banner */}
                  {status === "error" && errorMessage && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300 flex items-start gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-bold font-mono text-xs uppercase">Transmission Error</div>
                        <div>{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor={`${formId}-name`}
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        01. Your Name <span className="text-studio-cyan" aria-hidden="true">*</span>
                      </label>
                      <input
                        id={`${formId}-name`}
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                        placeholder="e.g. Tayfur Parmak"
                        disabled={status === "loading"}
                        value={formData.name}
                        onFocus={() => handleFocus("NAME")}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={cn(
                          "w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-zinc-600 transition-all duration-200 outline-none",
                          "focus:bg-white/[0.07] focus:ring-2",
                          errors.name
                            ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/20 text-rose-100"
                            : "border-white/10 focus:border-studio-cyan focus:ring-studio-cyan/20"
                        )}
                      />
                      {errors.name && (
                        <p
                          id={`${formId}-name-error`}
                          role="alert"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono"
                        >
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor={`${formId}-email`}
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        02. Email Address <span className="text-studio-cyan" aria-hidden="true">*</span>
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                        placeholder="e.g. tayfur@mecnun.dev"
                        disabled={status === "loading"}
                        value={formData.email}
                        onFocus={() => handleFocus("EMAIL")}
                        onBlur={() => handleBlur("email")}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={cn(
                          "w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-zinc-600 transition-all duration-200 outline-none",
                          "focus:bg-white/[0.07] focus:ring-2",
                          errors.email
                            ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/20 text-rose-100"
                            : "border-white/10 focus:border-studio-cyan focus:ring-studio-cyan/20"
                        )}
                      />
                      {errors.email && (
                        <p
                          id={`${formId}-email-error`}
                          role="alert"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono"
                        >
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company */}
                  <div>
                    <label
                      htmlFor={`${formId}-company`}
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2"
                    >
                      03. Company / Brand <span className="text-zinc-500 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id={`${formId}-company`}
                      type="text"
                      placeholder="e.g. Acme Labs or Studio"
                      disabled={status === "loading"}
                      value={formData.company}
                      onFocus={() => handleFocus("COMPANY")}
                      onBlur={() => handleBlur("company")}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-zinc-600 transition-all duration-200 outline-none focus:border-studio-cyan focus:bg-white/[0.07] focus:ring-2 focus:ring-studio-cyan/20"
                    />
                  </div>

                  {/* Row 3: Project Type (Interactive Accessible Chips) */}
                  <fieldset className="space-y-2">
                    <legend className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      04. Project Type <span className="text-studio-cyan">*</span>
                    </legend>
                    <div
                      role="radiogroup"
                      aria-label="Project Type"
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                    >
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            disabled={status === "loading"}
                            onClick={() => {
                              handleInputChange("projectType", type);
                              handleFocus("PROJECT_TYPE");
                            }}
                            className={cn(
                              "text-left p-3 rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer flex flex-col justify-between gap-1",
                              isSelected
                                ? "border-studio-cyan bg-studio-cyan/10 text-white shadow-[0_0_15px_rgba(0,242,254,0.15)] ring-1 ring-studio-cyan/40"
                                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                            )}
                          >
                            <span className="font-semibold">{type}</span>
                            <span className="text-[10px] text-zinc-500">
                              {isSelected ? "● SELECTED" : "○ SELECT"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Row 4: Budget (Interactive Accessible Chips) */}
                  <fieldset className="space-y-2">
                    <legend className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      05. Estimated Budget Bracket <span className="text-studio-cyan">*</span>
                    </legend>
                    <div
                      role="radiogroup"
                      aria-label="Estimated Budget"
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2"
                    >
                      {BUDGET_OPTIONS.map((budget) => {
                        const isSelected = formData.budget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            disabled={status === "loading"}
                            onClick={() => {
                              handleInputChange("budget", budget);
                              handleFocus("BUDGET");
                            }}
                            className={cn(
                              "p-2.5 rounded-xl border text-xs font-mono text-center transition-all duration-200 cursor-pointer",
                              isSelected
                                ? "border-studio-lime bg-studio-lime/10 text-studio-lime font-bold ring-1 ring-studio-lime/40"
                                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                            )}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Row 5: Message */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor={`${formId}-message`}
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                      >
                        06. Project Objectives & Timeline <span className="text-studio-cyan" aria-hidden="true">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {formData.message.length} / 3000
                      </span>
                    </div>
                    <textarea
                      id={`${formId}-message`}
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                      placeholder="Outline your project scope, core deliverables, technical goals, and desired launch deadline..."
                      disabled={status === "loading"}
                      value={formData.message}
                      onFocus={() => handleFocus("MESSAGE")}
                      onBlur={() => handleBlur("message")}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={cn(
                        "w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-zinc-600 transition-all duration-200 outline-none resize-y min-h-[110px]",
                        "focus:bg-white/[0.07] focus:ring-2",
                        errors.message
                          ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/20 text-rose-100"
                          : "border-white/10 focus:border-studio-cyan focus:ring-studio-cyan/20"
                      )}
                    />
                    {errors.message && (
                      <p
                        id={`${formId}-message-error`}
                        role="alert"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono"
                      >
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full gap-2.5 font-bold text-black uppercase tracking-wider font-mono h-14 text-sm shadow-[0_0_25px_rgba(163,255,18,0.25)] hover:shadow-[0_0_35px_rgba(163,255,18,0.45)] transition-all cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-black" />
                          <span>Transmitting Payload...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-black" />
                          <span>Send Project Transmission</span>
                        </>
                      )}
                    </Button>
                    <p className="mt-2.5 text-center text-[11px] font-mono text-zinc-500">
                      Encrypted transport • Direct to engineering lead • No spam or agency delegation
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Contact Info & Engineering Status */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Studio Channels */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-studio-cyan">
                <Sparkles className="h-4 w-4" />
                <span>DIRECT CHANNELS</span>
              </div>
              <h3 className="mt-3 text-xl font-bold font-mono uppercase tracking-tight">
                Direct Engineering Lead
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Prefer direct email or architectural discussion? Reach out without going through sales intermediaries.
              </p>

              <div className="mt-6 space-y-5">
                {/* Email Channel */}
                <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-studio-cyan/30 hover:bg-studio-cyan/[0.02]">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-studio-cyan/10 text-studio-cyan">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-mono text-zinc-400">ENGINEERING DIRECT</div>
                      <a
                        href="mailto:contact@mecnunum.com"
                        className="mt-0.5 block text-sm font-semibold text-foreground group-hover:text-studio-cyan transition-colors"
                      >
                        contact@mecnunum.com
                      </a>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-studio-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Location */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-studio-lime/10 text-studio-lime">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400">LOCATION & TIMEZONE</div>
                      <div className="mt-0.5 text-sm font-semibold text-foreground">
                        {STUDIO_STATUS.location} <span className="text-zinc-500 font-normal">/ UTC+3</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        Global Remote Deployment Ready
                      </div>
                    </div>
                  </div>
                </div>

                {/* SLA Response */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-studio-magenta/10 text-studio-magenta">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400">RESPONSE SLA</div>
                      <div className="mt-0.5 text-sm font-semibold text-foreground">
                        Within 24 Hours
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        Includes feasibility assessment & timeline estimate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Availability Pulse Card */}
            <div className="rounded-2xl border border-studio-lime/30 bg-studio-lime/5 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-studio-lime font-bold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-lime opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-studio-lime" />
                  </span>
                  <span>{STUDIO_STATUS.badgeText}</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Q3 / Q4 INTAKE</span>
              </div>
              <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                Currently accepting selective high-impact web design, creative 3D development, and enterprise Next.js engagements.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
