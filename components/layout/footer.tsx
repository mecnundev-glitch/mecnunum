import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { STUDIO_STATUS } from "@/lib/constants";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { BRAND } from "@/lib/design-system";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 dark:border-white/5 bg-background py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Studio Status & Engineering Roles */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <MecnunCatIcon size={24} />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-lime"></span>
            </span>
            <span className="font-mono font-medium text-foreground/90">{STUDIO_STATUS.badgeText}</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {BRAND.titles.join(" // ")}
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span>
            © {currentYear} {siteConfig.name}
          </span>
        </div>

        {/* Social / Studio Links */}
        <div className="flex items-center space-x-6 text-xs font-mono text-muted-foreground">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-studio-cyan transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-studio-lime transition-colors"
          >
            Twitter / X
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-studio-fuchsia transition-colors"
          >
            Instagram
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-studio-cyan transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
