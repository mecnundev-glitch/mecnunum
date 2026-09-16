import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { getAllPosts, getAllCategories } from "@/lib/blog-data";
import { ArrowUpRight, BookOpen, Clock, Calendar, Sparkles, Tag } from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";

export const metadata: Metadata = {
  title: "Engineering & Creative Tech Insights // Blog - MECNUN",
  description:
    "Technical writeups on Next.js 14 App Router, 3D WebGL architecture, design systems, Core Web Vitals, and headless commerce by MECNUN.",
  openGraph: {
    title: "Engineering & Creative Tech Insights - MECNUN Blog",
    description:
      "Essays, architectural breakdowns, and engineering insights on modern WebGL, Next.js, and digital experiences.",
    type: "website",
    url: "https://mecnun.dev/blog",
  },
  alternates: {
    canonical: "https://mecnun.dev/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MECNUN Engineering & Creative Technology Blog",
    description:
      "In-depth technical writeups and architectural insights on modern WebGL, Next.js, and high-fashion digital experiences.",
    url: "https://mecnun.dev/blog",
    publisher: {
      "@type": "Organization",
      name: "MECNUN Studio",
      url: "https://mecnun.dev",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://mecnun.dev/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="py-16 sm:py-24 bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        {/* Header */}
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-studio-cyan/5 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <MecnunCatIcon size={18} />
            <span>{"KNOWLEDGE BASE // TECHNICAL WRITING"}</span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono leading-none">
            ENGINEERING <span className="text-studio-cyan">INSIGHTS</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Essays, architectural breakdowns, and engineering case studies on WebGL, React Server Components, high-fashion typography, and performance optimization.
          </p>

          {/* Category Chips Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 text-xs font-mono">
            <span className="text-zinc-500 uppercase flex items-center gap-1 mr-2">
              <Tag className="h-3 w-3" />
              <span>DISCIPLINES:</span>
            </span>
            <span className="rounded-full border border-studio-cyan bg-studio-cyan/10 px-3 py-1 text-studio-cyan font-bold">
              ALL ({posts.length})
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Featured Hero Article */}
        {featuredPost && (
          <FadeIn direction="up" delay={0.15} className="mt-12">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-8 sm:p-12 backdrop-blur-2xl transition-all duration-300 hover:border-studio-cyan/60 hover:shadow-[0_0_40px_rgba(0,242,254,0.15)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/40 bg-studio-lime/10 px-3 py-1 text-studio-lime font-bold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>FEATURED ESSAY // {featuredPost.category}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-studio-cyan">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readingTime}
                  </span>
                </div>
              </div>

              <h2 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-black font-mono uppercase tracking-tight text-foreground group-hover:text-studio-cyan transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="mt-4 max-w-3xl text-sm sm:text-base text-zinc-300 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full border border-studio-cyan/40 bg-studio-cyan/10 flex items-center justify-center font-mono text-xs font-bold text-studio-cyan">
                    TP
                  </div>
                  <div className="text-xs font-mono">
                    <div className="font-bold text-foreground">{featuredPost.author.name}</div>
                    <div className="text-zinc-500 text-[10px]">{featuredPost.author.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-studio-cyan group-hover:translate-x-1 transition-transform">
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Regular Articles Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post, i) => (
            <FadeIn key={post.slug} direction="up" delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-studio-cyan/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.12)] hover:-translate-y-1 h-full"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-studio-lime font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Clock className="h-3 w-3 text-studio-cyan" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold font-mono text-foreground group-hover:text-studio-cyan transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-foreground transition-transform group-hover:bg-studio-cyan group-hover:text-black group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
