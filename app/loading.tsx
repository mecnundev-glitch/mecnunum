import React from "react";
import { Container } from "@/components/ui/container";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[60vh]">
      <Container className="flex flex-col items-center justify-center text-center">
        {/* Animated Cyber Core Loader */}
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-2 border-dashed border-studio-cyan/40 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-studio-lime animate-pulse">
            <MecnunCatIcon size={24} />
          </div>
        </div>

        <div className="mt-6 space-y-1">
          <div className="font-mono text-xs font-bold text-studio-cyan tracking-widest uppercase">
            STREAMING PROTOCOL ACTIVE
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">
            Synchronizing spatial assets & modules...
          </p>
        </div>
      </Container>
    </div>
  );
}
