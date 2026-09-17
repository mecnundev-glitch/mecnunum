"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to monitoring service in production
    console.error("Studio Unhandled Exception:", error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center justify-center min-h-[70vh] py-16">
      <Container className="text-center max-w-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/40 bg-rose-500/10 text-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.25)]">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <div className="mt-6 font-mono text-xs font-bold text-rose-400 tracking-wider uppercase">
          APPLICATION EXCEPTION DETECTED
        </div>

        <h1 className="mt-3 text-3xl sm:text-4xl font-black font-mono uppercase text-foreground">
          Runtime Circuit Interrupted
        </h1>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          An unexpected anomaly occurred during state execution. The incident has been captured by studio telemetry.
        </p>

        {error.digest && (
          <div className="mt-4 inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-400">
            DIGEST: {error.digest}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="accent"
            size="lg"
            className="gap-2 font-extrabold text-black"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Pipeline</span>
          </Button>

          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/20 font-mono text-xs uppercase"
            >
              <Home className="h-4 w-4" />
              <span>Return to Base</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
