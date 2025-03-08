// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import BlogImage from "@/components/blog-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Tag,
  ChevronRight,
} from "lucide-react";
import rehypeHighlight from "rehype-highlight";

// Generate static params at build time
export async function generateStaticParams() {
  const paths = await getAllBlogSlugs();
  return paths;
}

// Optionally add rehype plugins for code syntax highlighting
const options = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
  },
};

// Create a custom component map for the MDX content
const components = {
  // Override the default img tag with our optimized image component
  img: ({
    src,
    alt,
    width,
    height,
  }: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }) => (
    <BlogImage
      src={src || ""}
      alt={alt || ""}
      width={width}
      height={height}
      className="rounded-lg my-6"
    />
  ),
  // Add other custom components here as needed
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
  ),
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => (
    <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-indigo-500 pl-4 italic my-4"
      {...props}
    />
  ),
  a: (props: any) => (
    <a className="text-indigo-600 hover:text-indigo-800 underline" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-6 text-sm"
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Article Header */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-white/90 text-sm">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              )}
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>By {post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-12">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <BlogImage
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={600}
            priority={true}
            className="w-full"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Use MDXRemote to render the Markdown content with our custom components */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={post.content}
                components={components}
                options={options}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="border-t border-b border-gray-200 py-6 my-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium">
                    Share this article:
                  </span>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-400 rounded-full hover:bg-blue-200 transition-colors">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
                <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                  <Bookmark className="h-4 w-4 mr-1" />
                  Save for later
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-indigo-50 rounded-xl p-6 flex items-start gap-4 my-10">
              <div className="flex-shrink-0">
                <BlogImage
                  src={post.author.picture || "/images/team/default-avatar.png"}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {post.author.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{post.author.role}</p>
                <p className="text-gray-700">
                  {post.author?.bio ||
                    `${post.author.name} is a contributor to the Sudo Web Solution blog.`}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Table of Contents
              </h3>

              <ul className="space-y-2 mb-6">
                {/* This would ideally be generated from the post content */}
                <li>
                  <a
                    href="#introduction"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#value-proposition"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    1. Clear, Compelling Value Proposition
                  </a>
                </li>
                <li>
                  <a
                    href="#mobile-friendly"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    2. Mobile-Friendly, Responsive Design
                  </a>
                </li>
                <li>
                  <a
                    href="#conclusion"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Conclusion
                  </a>
                </li>
              </ul>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Categories
                </h3>

                <ul className="space-y-2">
                  {[
                    { name: "Web Development", count: 24 },
                    { name: "Artificial Intelligence", count: 18 },
                    { name: "Design", count: 15 },
                    { name: "Business", count: 12 },
                  ].map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog?category=${category.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex items-center justify-between text-gray-700 hover:text-indigo-600 transition-colors"
                      >
                        <span className="flex items-center">
                          <ChevronRight className="h-4 w-4 mr-1" />
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Popular Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Design",
                    "UX",
                    "SEO",
                    "Responsive",
                    "AI",
                    "E-commerce",
                    "Performance",
                    "JavaScript",
                    "CSS",
                    "Analytics",
                  ].map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${tag.toLowerCase().replace(" ", "-")}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Subscribe to Updates
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest articles and insights delivered straight to
                  your inbox.
                </p>

                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-600"
                  />
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Next/Previous Articles */}
      <section className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <Link
              href="/blog/previous-slug"
              className="group flex flex-col md:items-start p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
            >
              <span className="text-sm text-gray-500 mb-2">
                Previous Article
              </span>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-1">
                The Psychology of Color in Web Design
              </h3>
              <span className="text-sm text-gray-600">February 20, 2025</span>
            </Link>

            <Link
              href="/blog/next-slug"
              className="group flex flex-col md:items-end p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
            >
              <span className="text-sm text-gray-500 mb-2">Next Article</span>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-1">
                5 Ways to Optimize Your Website for Voice Search
              </h3>
              <span className="text-sm text-gray-600">February 15, 2025</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gray-200">
                  <BlogImage
                    src={`/api/placeholder/400/240?text=Related${i}`}
                    alt={`Related Article ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Related Article Title
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Short excerpt from the related article to give context...
                  </p>
                  <Link
                    href="/blog/some-slug"
                    className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                  >
                    Read More <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Implementing These Features?"
        description="Our team of experts can help you build a website that incorporates all these essential features and more. Get in touch for a free consultation."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        showContactForm={false}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
