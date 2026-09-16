import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SAMPLE_BLOG_POSTS } from "@/lib/constants";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Design Insights // Blog",
  description: "Read technical writeups on Next.js, 3D WebGL architecture, design systems, and frontend engineering by MECNUN.",
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <BookOpen className="h-3.5 w-3.5 text-studio-lime" />
            <span>{"INSIGHTS // TECHNICAL WRITING"}</span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono">
            ENGINEERING <span className="text-studio-cyan">BLOG</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Essays, architectural case studies, and engineering breakdowns on modern WebGL, React Three Fiber, and high-fashion digital experiences.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {SAMPLE_BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} direction="up" delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-studio-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:-translate-y-1 h-full"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-studio-lime">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-foreground group-hover:text-studio-cyan transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-foreground transition-transform group-hover:bg-studio-cyan group-hover:text-black group-hover:scale-110">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
