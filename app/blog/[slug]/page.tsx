import Link from "next/link"
import PageHeader from "@/components/page-header"
import { ArrowRight, ArrowLeft, Facebook, Twitter, Linkedin, Instagram, Calendar, User, Tag } from "lucide-react"

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PageHeader
        title="The Future of Web Development"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "The Future of Web Development", href: `/blog/${params.slug}` },
        ]}
        backgroundImage="/3.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img
                  src="/2.jpg"
                  alt="Blog Post Image"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>By John Doe</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  <span>Technology</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">The Future of Web Development: Trends to Watch in 2024</h2>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  The landscape of web development continues to evolve at a rapid pace, bringing new technologies and methodologies that shape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that are set to define web development in 2024 and beyond.
                </p>
                <p>
                  From the rise of AI-powered development tools to the increasing importance of performance optimization, developers need to stay ahead of these trends to remain competitive in the industry. Let's dive into what's shaping the future of web development.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Key Trends in Web Development</h3>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  As we move further into 2024, several key trends are emerging that will significantly impact how we approach web development. These include the growing adoption of AI and machine learning in development workflows, the continued evolution of JavaScript frameworks, and the increasing focus on web performance and user experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>AI-Powered Development Tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Progressive Web Apps (PWAs)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>WebAssembly Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Enhanced Security Measures</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/4.jpg"
                    alt="AI Development"
                    className="w-full"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/5.jpg"
                    alt="Web Performance"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  The integration of AI in web development is revolutionizing how we write and debug code. Tools like GitHub Copilot and similar AI assistants are becoming increasingly sophisticated, helping developers write better code faster and identify potential issues before they become problems.
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-b border-gray-200 py-4">
                <Link
                  href="/blog/previous"
                  className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  <span>Previous Post</span>
                </Link>
                <Link
                  href="/blog/next"
                  className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span>Next Post</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">About the Author</h3>

                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <img
                      src="/6.jpg"
                      alt="Author"
                      className="w-20 h-20 rounded-full mr-4 ring-4 ring-indigo-50"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">John Doe</h4>
                      <p className="text-gray-500">Senior Web Developer</p>
                    </div>
                  </div>

                  <p className="text-gray-600">
                    With over 10 years of experience in web development, John specializes in modern JavaScript frameworks and AI integration in web applications.
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-gray-500 text-sm font-medium mb-2">Follow on:</h4>
                    <div className="flex space-x-2">
                      <Link
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 text-gray-600 transition-colors"
                      >
                        <Facebook className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 text-gray-600 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 text-gray-600 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 text-gray-600 transition-colors"
                      >
                        <Instagram className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Posts</h3>
                <div className="space-y-4">
                  <Link href="#" className="block group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">The Rise of AI in Web Development</h4>
                    <p className="text-sm text-gray-500">March 10, 2024</p>
                  </Link>
                  <Link href="#" className="block group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">Optimizing Web Performance in 2024</h4>
                    <p className="text-sm text-gray-500">March 5, 2024</p>
                  </Link>
                  <Link href="#" className="block group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">The Future of JavaScript Frameworks</h4>
                    <p className="text-sm text-gray-500">February 28, 2024</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 