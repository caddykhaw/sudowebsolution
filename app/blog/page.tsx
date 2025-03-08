// app/blog/page.tsx
import { getBlogPosts } from "@/lib/blog";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import BlogImage from "@/components/blog-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  Code,
  Brain,
} from "lucide-react";

// This makes the page dynamic
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  // Fetch blog posts from the Markdown files
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl opacity-90 mb-8">
              Insights, tips, and trends from our experts in web development,
              AI, and digital marketing.
            </p>

            {/* Search bar with white background and gray text */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <Search className="absolute right-4 top-3 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Category Filter */}
      <section className="py-4 bg-white border-b border-gray-200 sticky top-14 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {/* We'll handle this with client components later */}
            <a
              href="/blog"
              className="px-4 py-2 rounded-lg transition-colors duration-300 font-medium bg-indigo-600 text-white"
            >
              All Posts
            </a>
            <a
              href="/blog?category=web-dev"
              className="px-4 py-2 rounded-lg transition-colors duration-300 font-medium bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Web Development
            </a>
            <a
              href="/blog?category=ai"
              className="px-4 py-2 rounded-lg transition-colors duration-300 font-medium bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              AI
            </a>
            <a
              href="/blog?category=design"
              className="px-4 py-2 rounded-lg transition-colors duration-300 font-medium bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Design
            </a>
            <a
              href="/blog?category=business"
              className="px-4 py-2 rounded-lg transition-colors duration-300 font-medium bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Business
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 bg-gray-200">
                    <BlogImage
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          post.category === "web-dev"
                            ? "bg-blue-100 text-blue-800"
                            : post.category === "ai"
                            ? "bg-purple-100 text-purple-800"
                            : post.category === "design"
                            ? "bg-pink-100 text-pink-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {post.category === "web-dev"
                          ? "Web Development"
                          : post.category === "ai"
                          ? "AI"
                          : post.category === "design"
                          ? "Design"
                          : "Business"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      {post.readTime && (
                        <>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>By {post.author.name}</span>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Button
                      className="w-full bg-indigo-600 hover:bg-indigo-700 mt-auto"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post - Use the first post if available */}
      {blogPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Featured Article
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most insightful and popular content
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <BlogImage
                    src={blogPosts[0].coverImage}
                    alt={blogPosts[0].title}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-10">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{blogPosts[0].date}</span>
                    {blogPosts[0].readTime && (
                      <>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{blogPosts[0].readTime}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {blogPosts[0].title}
                  </h3>

                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span>By {blogPosts[0].author.name}</span>
                  </div>

                  <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Subscription */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights, tips,
              and trends in web development, AI, and digital marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      {blogPosts.length > 1 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Most Recent Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fresh insights and knowledge from our experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.slice(0, 4).map((post) => (
                <div
                  key={post.slug}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-40 bg-gray-200">
                    <BlogImage
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 hover:text-indigo-700 text-sm font-medium inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rest of the content remains the same */}

      {/* Topic Categories */}
      <section className="py-16 bg-gray-50">
        {/* ... (keeping this section the same) ... */}
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Topic You'd Like Us to Cover?"
        description="Let us know what topics you're interested in, and our experts will create in-depth content to help you succeed."
        primaryButtonText="Suggest a Topic"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Articles"
        secondaryButtonLink="#"
        showContactForm={false}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
