import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/blog/breadcrumb";
import { RelatedPosts } from "@/components/blog/related-posts";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  Terminal,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article Not Found // MECNUN",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.tags,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      url: `https://mecnun.dev/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
    },
    alternates: {
      canonical: `https://mecnun.dev/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category, post.tags, 2);

  // Article Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.url || "https://mecnun.dev/about",
    },
    publisher: {
      "@type": "Organization",
      name: "MECNUN Studio",
      url: "https://mecnun.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mecnun.dev/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mecnun.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mecnun.dev/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: "https://mecnun.dev/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `https://mecnun.dev/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="py-16 sm:py-24 bg-background text-foreground">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Container size="narrow">
        <FadeIn direction="up">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.category, href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>

          {/* Article Header Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-studio-lime/40 bg-studio-lime/10 px-3 py-1 text-studio-lime font-bold">
              <MecnunCatIcon size={16} />
              <span>{post.category}</span>
            </span>

            <div className="flex items-center gap-3 text-zinc-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-studio-cyan" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-studio-cyan">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Main Article Title */}
          <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl md:text-6xl uppercase font-mono leading-[1.08]">
            {post.title}
          </h1>

          {/* Lead Excerpt Card */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <p className="text-base sm:text-lg font-medium text-zinc-200 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Author Byline */}
          <div className="mt-8 flex items-center justify-between border-y border-white/10 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-studio-cyan/40 bg-studio-cyan/10 flex items-center justify-center font-mono text-xs font-bold text-studio-cyan">
                TP
              </div>
              <div className="text-xs font-mono">
                <div className="font-bold text-foreground">{post.author.name}</div>
                <div className="text-zinc-400 text-[11px]">{post.author.role}</div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-xs font-mono text-studio-cyan hover:underline hidden sm:inline"
            >
              View Author Bio →
            </Link>
          </div>

          {/* Article Main Body Content */}
          <div className="mt-10 space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            {/* Introduction */}
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              {post.content.introduction}
            </p>

            {/* Subsections */}
            {post.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-foreground tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-zinc-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Optional Quote Callout */}
                {section.quote && (
                  <div className="my-6 rounded-2xl border-l-4 border-studio-cyan bg-studio-cyan/[0.04] p-6 text-zinc-200 font-mono text-sm sm:text-base italic">
                    <Quote className="h-5 w-5 text-studio-cyan mb-2 not-italic" />
                    &ldquo;{section.quote}&rdquo;
                  </div>
                )}

                {/* Optional Code Snippet Block */}
                {section.codeSnippet && (
                  <div className="my-6 rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden font-mono text-xs shadow-2xl">
                    {section.codeSnippet.caption && (
                      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2 text-zinc-400 text-[11px]">
                        <div className="flex items-center gap-2">
                          <Terminal className="h-3.5 w-3.5 text-studio-lime" />
                          <span>{section.codeSnippet.caption}</span>
                        </div>
                        <span className="text-studio-cyan font-bold uppercase">
                          {section.codeSnippet.language}
                        </span>
                      </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-zinc-200 scrollbar-thin">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-xl font-bold font-mono uppercase text-foreground mb-3">
                Architectural Summary
              </h2>
              <p className="text-zinc-300 leading-relaxed font-normal">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 mr-2">TAGS:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-zinc-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Contextual Studio Capability Card (Blog -> Service -> Contact) */}
          <div className="mt-8 rounded-2xl border border-studio-cyan/30 bg-studio-cyan/[0.03] p-6 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-studio-cyan uppercase font-bold flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" />
                <span>STUDIO CAPABILITY // {post.category}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                Interested in implementing this architecture in your business? Explore our specialized studio offering.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={
                  post.category.includes("3D")
                    ? "/services/3d-experiences"
                    : post.category.includes("Design")
                    ? "/services/web-design"
                    : post.category.includes("Performance")
                    ? "/services/seo"
                    : post.category.includes("Commerce")
                    ? "/services/ecommerce"
                    : "/services/web-development"
                }
              >
                <Button variant="accent" size="sm" className="font-mono text-xs uppercase font-bold text-black gap-1.5">
                  <span>Explore Service</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>


          {/* Author Bio Card */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl border border-studio-cyan/30 bg-studio-cyan/10 flex items-center justify-center font-mono text-sm font-bold text-studio-cyan shrink-0">
                TP
              </div>
              <div>
                <div className="font-mono text-xs text-studio-lime">ARTICLE AUTHOR</div>
                <div className="text-lg font-bold font-mono text-foreground">{post.author.name}</div>
                <p className="text-xs text-muted-foreground mt-0.5 max-w-sm">
                  Computer engineer specializing in Next.js architectures, real-time WebGL, and high-impact digital experiences.
                </p>
              </div>
            </div>

            <Link href="/about">
              <Button variant="outline" size="sm" className="font-mono text-xs uppercase border-white/20 hover:border-studio-cyan">
                <span>About Engineer</span>
                <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </Link>
          </div>

          {/* Related Posts Section */}
          <RelatedPosts posts={relatedPosts} />

          {/* Final CTA Banner */}
          <div className="mt-16 rounded-3xl border border-studio-cyan/30 bg-gradient-to-br from-studio-cyan/10 via-zinc-950 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/40 bg-studio-lime/10 px-3 py-1 text-xs font-mono text-studio-lime mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>HAVE AN ENGINEERING CHALLENGE?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase text-foreground">
              Ready to engineer your next digital platform?
            </h2>
            <p className="mt-3 max-w-md mx-auto text-xs sm:text-sm text-zinc-300">
              Let&apos;s discuss architecture, performance budgets, or bespoke 3D WebGL requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="accent"
                  size="lg"
                  className="gap-2 font-bold text-black font-mono uppercase text-sm shadow-[0_0_25px_rgba(163,255,18,0.3)] h-12 px-6"
                >
                  <span>Start Technical Consultation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-mono uppercase text-sm border-white/20 h-12 px-6 hover:border-studio-cyan"
                >
                  <span>Browse All Articles</span>
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}
