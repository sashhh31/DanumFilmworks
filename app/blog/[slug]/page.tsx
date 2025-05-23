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
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img
                  src="/placeholder.svg?height=500&width=800"
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
                    src="/placeholder.svg?height=300&width=400&text=AI+Development"
                    alt="AI Development"
                    className="w-full"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Web+Performance"
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
              <div className="bg-indigo-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>

                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <img
                      src="/placeholder.svg?height=80&width=80&text=JD"
                      alt="Author"
                      className="w-20 h-20 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-white/80">Senior Web Developer</p>
                    </div>
                  </div>

                  <p className="text-white/80">
                    With over 10 years of experience in web development, John specializes in modern JavaScript frameworks and AI integration in web applications.
                  </p>

                  <div className="pt-4">
                    <h4 className="text-white/80 mb-2">Follow on:</h4>
                    <div className="flex space-x-2">
                      <Link
                        href="#"
                        className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Facebook className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Instagram className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  <Link href="#" className="block hover:text-orange-500 transition-colors">
                    <h4 className="font-medium">The Rise of AI in Web Development</h4>
                    <p className="text-sm text-gray-600">March 10, 2024</p>
                  </Link>
                  <Link href="#" className="block hover:text-orange-500 transition-colors">
                    <h4 className="font-medium">Optimizing Web Performance in 2024</h4>
                    <p className="text-sm text-gray-600">March 5, 2024</p>
                  </Link>
                  <Link href="#" className="block hover:text-orange-500 transition-colors">
                    <h4 className="font-medium">The Future of JavaScript Frameworks</h4>
                    <p className="text-sm text-gray-600">February 28, 2024</p>
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