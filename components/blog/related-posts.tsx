import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { ArrowUpRight, Clock, Calendar, Sparkles } from "lucide-react";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section aria-labelledby="related-posts-heading" className="mt-20 pt-12 border-t border-white/10">
      <div className="flex items-center gap-2 text-xs font-mono text-studio-cyan mb-3">
        <Sparkles className="h-3.5 w-3.5" />
        <span>RECOMMENDED READING</span>
      </div>
      <h2
        id="related-posts-heading"
        className="text-2xl sm:text-3xl font-bold font-mono uppercase tracking-tight"
      >
        Related <span className="text-studio-cyan">Architectures</span>
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-studio-cyan/50 hover:bg-studio-cyan/[0.02] hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="rounded-md bg-white/5 px-2 py-0.5 text-studio-lime font-bold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-studio-cyan" />
                  {post.readingTime}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold font-mono text-foreground group-hover:text-studio-cyan transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1 text-[11px]">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1 text-studio-cyan font-semibold group-hover:translate-x-1 transition-transform">
                <span>Read Essay</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
