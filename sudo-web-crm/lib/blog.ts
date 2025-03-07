// lib/blog.ts
"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    role: string;
    picture: string;
    bio?: string;
  };
  category: string;
  tags: string[];
  content: string;
  readTime?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Get all files in the blog content directory
    const filenames = await fs.readdir(contentDirectory);

    const postsPromises = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        // Remove ".md" from filename to get slug
        const slug = filename.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(contentDirectory, filename);
        const fileContents = await fs.readFile(fullPath, "utf8");

        // Parse metadata section
        const { data, content } = matter(fileContents);

        // Calculate read time based on content length
        const readTime = calculateReadTime(content);

        // Ensure author object has all required properties
        const author = {
          name: data.author?.name || "",
          role: data.author?.role || "",
          picture: data.author?.picture || "/api/placeholder/80/80",
          bio: data.author?.bio || "",
        };

        return {
          slug,
          title: data.title || "",
          excerpt: data.excerpt || "",
          coverImage: data.coverImage || "/api/placeholder/800/400",
          date: data.date || new Date().toISOString().split("T")[0],
          author,
          category: data.category || "uncategorized",
          tags: data.tags || [],
          content,
          readTime: data.readTime || readTime,
        };
      });

    // Wait for all promises to resolve
    const allPostsData = await Promise.all(postsPromises);

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return []; // Return empty array if directory doesn't exist or is empty
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Calculate read time based on content length
    const readTime = calculateReadTime(content);

    // Ensure author object has all required properties
    const author = {
      name: data.author?.name || "",
      role: data.author?.role || "",
      picture: data.author?.picture || "/api/placeholder/80/80",
      bio: data.author?.bio || "",
    };

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "/api/placeholder/800/400",
      date: data.date || new Date().toISOString().split("T")[0],
      author,
      category: data.category || "uncategorized",
      tags: data.tags || [],
      content,
      readTime: data.readTime || readTime,
    };
  } catch (err) {
    console.error(`Error getting blog post for slug ${slug}:`, err);
    return undefined;
  }
}

export async function getAllBlogSlugs() {
  try {
    const filenames = await fs.readdir(contentDirectory);

    return filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => ({
        params: {
          slug: filename.replace(/\.md$/, ""),
        },
      }));
  } catch (error) {
    console.error("Error reading blog slugs:", error);
    return [];
  }
}

// Helper function to calculate approximate read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${readTimeMinutes} min read`;
}
