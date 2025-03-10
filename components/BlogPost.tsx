import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "@/components/MDXComponents";

interface BlogFrontMatter {
  title: string;
  description?: string;
  publishedDate?: string;
  coverImage?: string;
  coverImageUrl?: string;
}

interface BlogPostProps {
  post: {
    frontMatter: BlogFrontMatter;
    mdxSource: MDXRemoteSerializeResult;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { frontMatter, mdxSource } = post;

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{frontMatter.title}</h1>

      {frontMatter.publishedDate && (
        <p className="text-gray-500 mb-4">
          {new Date(frontMatter.publishedDate).toLocaleDateString()}
        </p>
      )}

      {frontMatter.coverImageUrl && (
        <div className="relative w-full h-80 mb-8">
          <img
            src={frontMatter.coverImageUrl}
            alt={frontMatter.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}

      <MDXRemote {...mdxSource} components={mdxComponents} />
    </article>
  );
};

export default BlogPost;
