import React, { useState } from "react";
import { useRouter } from "next/router";
import BlogEditor from "@/components/BlogEditor";
import { saveMdxPost } from "@/lib/mdx";

// Define ImageData to match the one in BlogEditor
interface ImageData {
  path: string;
  url: string;
}

// This interface should match what BlogEditor expects
interface BlogMetadata {
  title?: string; // Match the optional nature in BlogEditor
  description?: string;
  publishedDate?: string;
  coverImage?: ImageData | null; // Match the type in BlogEditor
  coverImageUrl?: string;
}

// This is for your saveMdxPost function
interface BlogData {
  frontMatter: {
    title: string;
    description?: string;
    publishedDate?: string;
    coverImage?: {
      path: string;
      url: string;
    } | null;
    coverImageUrl?: string;
  };
  content: string;
}

export default function NewPost() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSave = async (editorData: {
    frontMatter: BlogMetadata;
    content: string;
  }) => {
    try {
      setIsSubmitting(true);
      setError("");

      // Make sure title exists
      if (!editorData.frontMatter.title) {
        throw new Error("Title is required");
      }

      // Generate a slug from the title
      const slug = editorData.frontMatter.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-"); // Remove consecutive hyphens

      // Convert the editor data to your BlogData format
      const postData: BlogData = {
        frontMatter: {
          title: editorData.frontMatter.title,
          description: editorData.frontMatter.description,
          publishedDate: editorData.frontMatter.publishedDate,
          // The coverImage is already in the correct format
          coverImage: editorData.frontMatter.coverImage,
          coverImageUrl: editorData.frontMatter.coverImageUrl,
        },
        content: editorData.content,
      };

      // Save the post
      await saveMdxPost(slug, postData);

      // Redirect to the post or admin dashboard
      router.push(`/blog/${slug}`);
    } catch (err) {
      console.error("Error saving post:", err);
      setError("Failed to save the post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <BlogEditor onSave={handleSave} />
    </div>
  );
}
