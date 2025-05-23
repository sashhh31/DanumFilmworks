import Link from "next/link"
import PageHeader from "@/components/page-header"
import { ArrowRight } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"

export default function BlogGrid() {
  // Blog post data
  const posts = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=400&text=Business",
      category: "Business",
      date: "MARCH 24, 2024",
      title: "Business Strategy For Marketing System",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=400&text=Corporate",
      category: "Corporate",
      date: "APRIL 16, 2024",
      title: "Why Is Supply Chain Visibility So Important?",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=400&text=Goals",
      category: "Marketing",
      date: "MARCH 22, 2024",
      title: "Discover A Better Way Of Redefining Company Goals",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=400&text=Business",
      category: "Business",
      date: "MARCH 24, 2024",
      title: "Business Strategy For Marketing System",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 5,
      image: "/placeholder.svg?height=200&width=400&text=Corporate",
      category: "Corporate",
      date: "APRIL 16, 2024",
      title: "Why Is Supply Chain Visibility So Important?",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 6,
      image: "/placeholder.svg?height=200&width=400&text=Goals",
      category: "Marketing",
      date: "MARCH 22, 2024",
      title: "Discover A Better Way Of Redefining Company Goals",
      author: {
        name: "Devin Lurke",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 7,
      image: "/placeholder.svg?height=200&width=400&text=Business",
      category: "Business",
      date: "MARCH 24, 2024",
      title: "Business Strategy For Marketing System",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 8,
      image: "/placeholder.svg?height=200&width=400&text=Corporate",
      category: "Corporate",
      date: "APRIL 16, 2024",
      title: "Why Is Supply Chain Visibility So Important?",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
    {
      id: 9,
      image: "/placeholder.svg?height=200&width=400&text=Goals",
      category: "Marketing",
      date: "MARCH 22, 2024",
      title: "Discover A Better Way Of Redefining Company Goals",
      author: {
        name: "Dan Urkov",
        image: "/placeholder.svg?height=40&width=40",
        role: "Managing Consultant",
      },
    },
  ]

  return (
    <div>
      <PageHeader
        title="Blog Grid/Archive Page"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog Grid", href: "/blog" },
        ]}
        backgroundImage="/Rectangle 6.png"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/post-${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-xs ${
                        post.category === "Business"
                          ? "text-blue-600"
                          : post.category === "Corporate"
                            ? "text-purple-600"
                            : "text-green-600"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>

                  <Link href={`/blog/post-${post.id}`}>
                    <h3 className="font-bold mb-3 hover:text-orange-500 transition-colors">{post.title}</h3>
                  </Link>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img
                          src={post.author.image || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs text-gray-600">{post.author.role}</span>
                        <p className="text-xs text-gray-500">{post.author.name}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/post-${post.id}`}
                      className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white">
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
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white">
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
      </section>

    </div>
  )
}
