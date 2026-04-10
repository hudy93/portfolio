import Link from "next/link";
import { Button } from "./ui/button";
import BlogCard from "@/components/blogCard";
import { blogData } from "@/data/blogData";

const Blog = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12">
          <h2 className="section-title mb-4">Blog</h2>
          <p className="subtitle mb-8">
            Thoughts on engineering leadership, AI-driven development, and
            building high-performance teams.
          </p>
          <Link href="/blog">
            <Button>All posts</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
