import React from 'react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

const portfolioItems = [
  {
    title: "DANUM",
    description: "A revolutionary film production platform that streamlines the entire filmmaking process. From pre-production planning to post-production management, DANUM integrates cutting-edge technology with creative workflow solutions. Features include script management, casting coordination, location scouting, budget tracking, and real-time collaboration tools for film crews.",
    image: "/6.jpg",
    link: "/portfolio/danum",
    category: "Film Production Technology",
    technologies: ["React", "Node.js", "Cloud Infrastructure", "AI Integration"],
    highlights: [
      "Streamlined production workflow management",
      "Real-time collaboration for film crews",
      "Integrated budget and resource tracking",
      "Advanced scheduling and location management"
    ]
  },
  {
    title: "CINEMATIC VISION",
    description: "A groundbreaking visual effects and post-production studio project that showcases our expertise in high-end film finishing. This project demonstrates our capabilities in color grading, visual effects, sound design, and final delivery for major motion pictures and streaming content.",
    image: "/5.jpg",
    link: "/portfolio/cinematic-vision",
    category: "Post-Production Excellence",
    technologies: ["DaVinci Resolve", "Nuke", "Pro Tools", "Houdini"],
    highlights: [
      "Award-winning color grading suite",
      "Advanced VFX pipeline integration",
      "Dolby Atmos sound mixing",
      "4K/8K mastering capabilities"
    ]
  },
  {
    title: "STUDIO HUB",
    description: "A state-of-the-art film studio management system that revolutionizes how production houses operate. This comprehensive solution handles everything from studio booking and equipment management to crew scheduling and production logistics, making it the backbone of modern film production facilities.",
    image: "/7.jpg",
    link: "/portfolio/studio-hub",
    category: "Studio Management",
    technologies: ["Python", "AWS", "IoT Integration", "Blockchain"],
    highlights: [
      "Smart studio space optimization",
      "Automated equipment tracking",
      "Real-time resource allocation",
      "Integrated security and access control"
    ]
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
        backgroundImage="/2.jpg"
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
                  <span className="text-sm font-semibold text-orange-200 mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="mb-4 text-white text-sm">{item.description}</p>
                  {item.technologies && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-orange-400/20 text-orange-200 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.highlights && (
                    <ul className="mb-4 text-white text-sm space-y-1">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={item.link}
                    className="mt-auto flex items-center justify-end text-lg font-semibold text-white hover:text-orange-200 transition-colors"
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
