import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground overflow-x-auto whitespace-nowrap py-1 scrollbar-none"
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-muted-foreground hover:text-studio-cyan transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-studio-cyan transition-colors uppercase"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-foreground uppercase font-semibold truncate max-w-[240px] sm:max-w-[380px]"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
