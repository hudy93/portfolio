// src/components/blogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import { BlogPost } from "@/data/blogData";

const BlogCard = ({ slug, title, description, date, image }: BlogPost) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            fill
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="flex items-center gap-x-2 text-sm text-primary mb-2">
          <Calendar size={14} />
          <span>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h4 className="h4 mb-2 hover:text-primary transition-all duration-300">
            {title}
          </h4>
        </Link>
        <p className="text-muted-foreground text-lg line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default BlogCard;
