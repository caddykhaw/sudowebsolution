import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { supabase } from "@/utils/supabase";

interface FrontMatter {
  title: string;
  description?: string;
  publishedDate?: string;
  coverImage?: string;
  coverImageUrl?: string;
  [key: string]: any;
}

interface MDXData {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}

interface SerializedMDX {
  slug: string;
  frontMatter: FrontMatter;
  mdxSource: any;
}

// Assuming you have a posts directory where your MDX files are stored
const postsDirectory = path.join(process.cwd(), "posts");

// Update this function to handle saving MDX with image
export async function saveMdxPost(
  slug: string,
  { frontMatter, content }: { frontMatter: FrontMatter; content: string }
): Promise<{ slug: string }> {
  // Create full front matter with the image data
  const mdxContent = `---
title: ${frontMatter.title}
description: ${frontMatter.description || ""}
publishedDate: ${
    frontMatter.publishedDate || new Date().toISOString().split("T")[0]
  }
coverImage: ${frontMatter.coverImage?.path || ""}
coverImageUrl: ${frontMatter.coverImageUrl || ""}
---

${content}`;

  // Write to file system
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  fs.writeFileSync(filePath, mdxContent, "utf8");

  return { slug };
}

// Get MDX file by slug
export function getMdxBySlug(slug: string): MDXData {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as FrontMatter,
    content,
  };
}

// Get all MDX files
export function getAllMdx(): FrontMatter[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const { frontMatter } = getMdxBySlug(slug);

      return {
        slug,
        ...frontMatter,
      };
    })
    .sort((post1, post2) => {
      const date1 = new Date(post1.publishedDate || 0);
      const date2 = new Date(post2.publishedDate || 0);
      return date2.getTime() - date1.getTime();
    });

  return posts;
}

// Update this function to include MDX serialization with image handling
export async function getSerializedMdx(slug: string): Promise<SerializedMDX> {
  const { frontMatter, content } = getMdxBySlug(slug);

  // Handle cases where coverImage exists but we need the URL from Supabase
  if (frontMatter.coverImage && !frontMatter.coverImageUrl) {
    // Get the public URL from Supabase if not already in frontMatter
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(frontMatter.coverImage);

    frontMatter.coverImageUrl = data.publicUrl;
  }

  const mdxSource = await serialize(content, {
    // MDX options here
    scope: frontMatter,
  });

  return {
    slug,
    frontMatter,
    mdxSource,
  };
}
