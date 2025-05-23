"use client"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "SEO Link Building Optimization",
      description: "Boost Your Rankings with Strategic Link Building",
      image: "/laptop.jpg",
      icon: "/Group.png",
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Web Development",
      description: "We Can Help You & Routine Audits To Determine An SEO",
      image: "/laptop.jpg",
      icon: "/Group 1.png",
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Digital Strategy",
      description: "Achieve Business Success with a Data-Driven Approach",
      image: "/laptop.jpg",
      icon: "/Group 2.png",
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Brand Design Identity",
      description: "We Can Help You & Routine Audits To Determine An SEO",
      image: "/laptop.jpg",
      icon: "/Group 10.png",
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Email Marketing",
      description: "Engage Your Audience & Boost Conversions",
      image: "/laptop.jpg",
      icon: "/Vector 2.png",
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Video Production",
      description: "We Can Help You & Routine Audits To Determine An SEO",
      image: "/laptop.jpg",
      icon: "/Group.png",
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
  ]

  const workProcess = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "From customer planning to kick-off, alignment and project scoping.",
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "From research to strategy approval and team briefing.",
    },
    {
      number: 3,
      title: "Design & Development",
      description: "From concept creation to wireframing to design, development, and integration.",
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description: "From internal testing to client review, revisions, and final QA.",
    },
    {
      number: 5,
      title: "Launch & post-Launch Support",
      description: "From pre-launch checks and deployment to training, optimization, and ongoing support.",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative  flex flex-col items-center text-center px-6 pt-60  rounded-[200px] border-4 ${service.borderColor} bg-white transition-all duration-300 shadow-none hover:shadow-2xl hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:${service.borderColor}`}
                style={{ minHeight: 520 }}
              >
                {/* Main Image */}
                <div className="w-80 h-80 rounded-full overflow-hidden mt-28 border-8 border-white shadow-lg absolute -top-28 left-1/2 -translate-x-1/2 z-10 bg-white">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                {/* Icon in Hexagon */}
                <div className="absolute left-1/2  -translate-x-1/2 top-64 z-20">
                  <div className="bg-white hexagon flex items-center justify-center shadow-lg p-3 border-2 border-blue-200 w-20 h-20">
                    <img src={service.icon} alt="" className="w-10 h-10" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="mt-32 text-2xl font-bold mb-2 text-neutral-900 group-hover:text-white transition-colors">{service.title}</h3>
                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 mb-6">{service.description}</p>
                {/* Arrow Button */}
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}> 
                  <div className="mx-auto mt-24 w-12 h-12 flex items-center justify-center bg-white hexagon border-2 border-orange-400  group-hover:border-white transition-all">
                    <ArrowRight className="h-6 w-6 text-orange-400 " />
                  </div>
                </Link>
                {/* Hexagon shape with CSS */}
                <style jsx>{`
                  .hexagon {
                    clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-400 to-blue-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white uppercase mb-2">WORK PROCESS</h2>
            <h3 className="text-4xl font-bold text-white">Our Working Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-cyan-500 mx-auto mb-4 z-10 relative">
                  {step.number}
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/30 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600&text=Testimonial+Image"
                alt="Client testimonial"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-sm text-gray-500 uppercase mb-2">TESTIMONIALS</h2>
                <h3 className="text-3xl font-bold mb-4">DanumFilmworks Digital Services Solved Our Business Challenges</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFA500"
                      stroke="#FFA500"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Sed ante est, fringilla vitae laoreet et amet, tempus et Etiam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce eget quam lobortis odio sit amet, integer gravida purus dolor. Pellentesque
                finibus et dui in sagittis. Sed semper dignissim.
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/placeholder.svg?height=48&width=48" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">John Luca</h4>
                  <p className="text-sm text-gray-500">Co-Founder - Denim Filmworks</p>
                </div>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFA500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
