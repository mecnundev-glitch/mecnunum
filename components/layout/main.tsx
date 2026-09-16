import React from "react";
import { cn } from "@/lib/utils";

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Main({ children, className, ...props }: MainProps) {
  return (
    <main
      className={cn("min-h-[calc(100vh-4rem-6rem)] flex-1 flex flex-col", className)}
      {...props}
    >
      {children}
    </main>
  );
}
