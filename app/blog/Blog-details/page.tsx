import Link from "next/link"
import PageHeader from "@/components/page-header"
import { Search, Calendar, MessageSquare } from "lucide-react"

export default function BlogStandard() {
  return (
    <div>
      <PageHeader
        title="Blog Standard"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog Standard", href: "/blog/standard" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="mb-12">
                  <div className="relative mb-6">
                    <img
                      src={`/placeholder.svg?height=400&width=800&text=Blog+Image+${i + 1}`}
                      alt={`Blog post ${i + 1}`}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
                      BLOG
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Jan 14th, 2024</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>2 Comments</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {i % 2 === 0
                      ? "How To Grow A Sustainable Business In 2025"
                      : "Lead Generation 101 For Your Business: How Attract New Leads"}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    Risque Porta Est Eu Dui Diam Lorem Ipsum Quae Quaed Inventor Veritatis Et Quasi Architecto Beatae
                    Vitae Dicta Sunt Explicabo. Aenean Port Luctus Quam Vel Sed Efficitur Fugiat Gilla Sed Sit.
                  </p>

                  <Link
                    href={`/blog/post-${i + 1}`}
                    className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              ))}

              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-1">
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-left"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white"
                  >
                    01
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  >
                    02
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  >
                    03
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Latest Posts</h3>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-3">
                      <div className="flex-shrink-0 w-16 h-16">
                        <img
                          src={`/placeholder.svg?height=64&width=64&text=Post+${i + 1}`}
                          alt={`Latest post ${i + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="text-xs text-orange-500">By Dan Urkov</span>
                        </div>
                        <Link
                          href={`/blog/post-${i + 1}`}
                          className="text-sm font-medium hover:text-orange-500 transition-colors"
                        >
                          How To Grow A Sustainable Business
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Pay-Per-Click (PPC)</span>
                    <span className="text-gray-500">(6)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Social Media Marketing</span>
                    <span className="text-gray-500">(8)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Email Marketing</span>
                    <span className="text-gray-500">(4)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Ecommerce</span>
                    <span className="text-gray-500">(9)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Affiliate Marketing</span>
                    <span className="text-gray-500">(5)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors"
                  >
                    Agency
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Search Engine
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Influencer
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Advertising
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Branding
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Comments</h3>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor Veritatis Et
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
