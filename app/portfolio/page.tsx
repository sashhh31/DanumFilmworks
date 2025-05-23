import React from 'react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

const portfolioItems = [
  {
    title: "DANUM",
    description: "Innovating the Film Industry - Our Dynamic Approach to Film Production",
    image: "/Rectangle 6.png",
    link: "#",
  },
  {
    title: "CLCK",
    description: "Custom Web Applications",
    image: "/Rectangle 5.png",
    link: "#",
  },
  {
    title: "Pathsecure",
    description: "Empowering Secure Digital Transformation",
    image: "/image.png",
    link: "#",
  },
]

const Page = () => {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
        backgroundImage="/Rectangle 6.png"
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="relative rounded-3xl overflow-hidden flex flex-col justify-end bg-gray-100 text-black shadow-lg transition-transform hover:scale-105 duration-300 group"
                style={{ minHeight: 400 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
                />
                <div className="absolute inset-0 z-10 pointer-events-none transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-orange-500 group-hover:to-orange-300 group-hover:opacity-90 opacity-0"></div>
                <div className="relative z-20 p-8 flex flex-col justify-end h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="mb-4 text-white">{item.description}</p>
                  <a
                    href={"/portfolio/1"}
                    className="mt-auto flex items-center justify-end text-lg font-semibold text-white"
                  >
                    <span className="mr-2">View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
