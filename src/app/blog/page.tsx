import BlogCard from "@/components/blogCard";
import { blogData } from "@/data/blogData";

const BlogPage = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
