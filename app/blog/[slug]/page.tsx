import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { SAMPLE_BLOG_POSTS } from "@/lib/constants";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Share2 } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SAMPLE_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = SAMPLE_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — Engineering Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = SAMPLE_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <Container size="narrow">
        <FadeIn direction="up">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-studio-cyan transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Articles</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-studio-cyan" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-studio-lime">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl uppercase font-mono leading-tight">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Body */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-10 backdrop-blur-xl">
            <p className="text-lg font-medium text-zinc-200 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                In the modern landscape of high-performance web development, the boundary between design and computer engineering has dissolved. Creative technology is no longer just about visual embellishments; it is about building resilient, low-latency, scalable architectures that load instantly and leave an indelible impression.
              </p>
              <p>
                By strictly isolating client boundaries in Next.js App Router and offloading heavy 3D rendering to dynamic imports, we maintain maximum lighthouse performance without sacrificing spatial interactivity.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono text-muted-foreground">
                WRITTEN BY <span className="text-foreground font-bold">MECNUN STUDIO</span>
              </div>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <span>Discuss Engineering</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
