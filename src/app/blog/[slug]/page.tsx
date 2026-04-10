import { blogData } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="flex items-center gap-x-2 text-primary mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>
        <h1 className="h2 mb-4">{post.title}</h1>
        <div className="flex items-center gap-x-2 text-muted-foreground mb-8">
          <Calendar size={16} />
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="relative w-full h-[400px] mb-12 rounded-[30px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:mt-10 prose-headings:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-muted-foreground
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
            prose-strong:text-foreground
            prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href={post.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 text-primary hover:underline"
          >
            Read on Medium
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;
