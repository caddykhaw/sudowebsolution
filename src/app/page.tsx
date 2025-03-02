// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Web Hosting Solutions for Your Business
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Reliable, secure, and high-performance web hosting services tailored to your needs.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/services"
                className="px-8 py-3 rounded-md bg-white text-teal-600 font-medium hover:bg-gray-100"
              >
                View Plans
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-md border border-white text-white font-medium hover:bg-teal-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose SudoWebSolution
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              We provide top-notch hosting services with features designed for your success.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-500 rounded-md flex items-center justify-center text-white mb-4">
                {/* Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">High Performance</h3>
              <p className="mt-2 text-gray-600">
                Fast SSD storage and optimized servers ensure your website loads quickly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-500 rounded-md flex items-center justify-center text-white mb-4">
                {/* Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">99.9% Uptime</h3>
              <p className="mt-2 text-gray-600">
                We guarantee reliable service with redundant infrastructure.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-500 rounded-md flex items-center justify-center text-white mb-4">
                {/* Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                Our dedicated support team is available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hosting Plans
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Choose the perfect hosting solution for your website.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
              <p className="mt-4 text-gray-600">
                Perfect for personal websites and blogs.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$9.99</span>
                <span className="text-gray-500">/month</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">10GB SSD Storage</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">1 Website</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Free SSL Certificate</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Email Accounts</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/auth/register?plan=basic"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md font-medium hover:bg-teal-700 flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-teal-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional</h3>
              <p className="mt-4 text-gray-600">
                Ideal for businesses and e-commerce sites.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$19.99</span>
                <span className="text-gray-500">/month</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">50GB SSD Storage</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">10 Websites</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Free SSL Certificates</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Unlimited Email Accounts</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Daily Backups</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/auth/register?plan=professional"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md font-medium hover:bg-teal-700 flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-gray-600">
                For high-traffic sites and advanced applications.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$49.99</span>
                <span className="text-gray-500">/month</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">200GB SSD Storage</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Unlimited Websites</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Free SSL Certificates</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Unlimited Email Accounts</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Hourly Backups</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Dedicated Resources</span>
                  <li className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
  <span className="ml-2 text-gray-600">Dedicated Resources</span>
</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/auth/register?plan=enterprise"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md font-medium hover:bg-teal-700 flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Don't just take our word for it — hear from some of our satisfied clients.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Sarah Johnson</h4>
              <p className="text-gray-600">Designer at CreativeStudios</p>
            </div>
          </div>
          <p className="text-gray-700">
            "SudoWebSolution has completely transformed how my business operates online. The speed and reliability are outstanding, and their support team is always there when I need them."
          </p>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Mark Thompson</h4>
              <p className="text-gray-600">CEO at TechInnovate</p>
            </div>
          </div>
          <p className="text-gray-700">
            "Since moving our company's websites to SudoWebSolution, we've seen significant improvements in load times and overall performance. Their scalable solutions have grown with our business."
          </p>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Emily Rodriguez</h4>
              <p className="text-gray-600">Founder of EcoShop</p>
            </div>
          </div>
          <p className="text-gray-700">
            "As a small business owner, I needed reliable hosting that wouldn't break the bank. SudoWebSolution provided exactly that, plus their customer service is exceptional. Highly recommended!"
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-16 bg-teal-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        Ready to get started?
      </h2>
      <p className="mt-4 text-xl">
        Join thousands of satisfied customers today.
      </p>
      <div className="mt-8">
        <Link
          href="/auth/register"
          className="px-8 py-3 bg-white text-teal-600 rounded-md font-medium hover:bg-gray-100 inline-block"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  </section>
</>