"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050508] text-white min-h-screen flex items-center justify-center font-mono p-6">
        <div className="max-w-md text-center space-y-6">
          <div className="h-12 w-12 mx-auto rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xl">
            !
          </div>
          <h1 className="text-2xl font-bold uppercase tracking-tight text-white">
            CRITICAL APPLICATION ERROR
          </h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            A root level rendering exception occurred. You can attempt to reset the application state.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-colors"
          >
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}
