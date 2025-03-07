// scripts/create-blog-post.js
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const slugify = require("slugify");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ensure content directory exists
const contentDir = path.join(process.cwd(), "content/blog");
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Main function to create a new blog post
async function createBlogPost() {
  console.log("\n🚀 Create a New Blog Post\n");

  // Get post title
  const title = await askQuestion("Title of the blog post: ");

  // Generate slug from title
  const slug = slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });

  // Get post details
  const excerpt = await askQuestion("Short excerpt (1-2 sentences): ");
  const coverImage = await askQuestion(
    "Cover image path (e.g., /images/blog/my-image.jpg): ",
    "/api/placeholder/800/400"
  );
  const category = await askQuestion(
    "Category (web-dev, ai, design, business): "
  );

  // Get author details
  const authorName = await askQuestion("Author name: ");
  const authorRole = await askQuestion("Author role: ");
  const authorPicture = await askQuestion(
    "Author picture path: ",
    "/api/placeholder/80/80"
  );

  // Get tags as comma-separated list
  const tagsInput = await askQuestion("Tags (comma separated): ");
  const tags = tagsInput
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  // Get initial content or use template
  const useTemplate = await askQuestion("Use template content? (y/n): ", "y");
  let content = "";

  if (useTemplate.toLowerCase() === "y") {
    content = `
In this article, we'll explore ${title.toLowerCase()}.

## Introduction

Start with an engaging introduction that explains why this topic matters and what readers will learn.

## Main Point 1

Expand on your first key point with details, examples, and evidence.

## Main Point 2

Continue with your second key point, building on the previous section.

## Main Point 3

Add your third key point, ensuring it flows logically from what came before.

## Conclusion

Summarize the main takeaways and provide actionable next steps for readers.
`;
  } else {
    console.log(
      'Enter the content of your blog post (type "EOF" on a new line when finished):'
    );
    content = await getMultilineInput();
  }

  // Create frontmatter
  const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
  const frontmatter = `---
title: "${title}"
excerpt: "${excerpt}"
coverImage: "${coverImage}"
date: "${date}"
author:
  name: "${authorName}"
  role: "${authorRole}"
  picture: "${authorPicture}"
category: "${category}"
tags: [${tags.map((tag) => `"${tag}"`).join(", ")}]
---`;

  // Combine frontmatter and content
  const fileContent = `${frontmatter}\n\n${content.trim()}`;

  // Create file
  const filePath = path.join(contentDir, `${slug}.md`);
  fs.writeFileSync(filePath, fileContent);

  console.log(`\n✅ Blog post created successfully at ${filePath}`);
  rl.close();
}

// Helper function to ask questions
function askQuestion(question, defaultValue = "") {
  return new Promise((resolve) => {
    rl.question(
      `${question}${defaultValue ? ` (${defaultValue})` : ""} `,
      (answer) => {
        resolve(answer || defaultValue);
      }
    );
  });
}

// Helper function to get multiline input
function getMultilineInput() {
  return new Promise((resolve) => {
    let content = "";
    const onLine = (line) => {
      if (line === "EOF") {
        rl.off("line", onLine);
        resolve(content);
      } else {
        content += line + "\n";
      }
    };
    rl.on("line", onLine);
  });
}

// Run the script
createBlogPost().catch((err) => {
  console.error("Error creating blog post:", err);
  rl.close();
});
