"use client"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { ArrowRight } from "lucide-react"
import { MdVideocam, MdMovie, MdPhotoCamera, MdEdit, MdColorLens, MdLiveTv } from "react-icons/md"
import React, { useEffect, useState } from "react"

export default function Services() {
  const services = [
    {
      title: "Cinematography",
      description: "Professional camera work and visual storytelling for your film projects",
      image: "/8.jpg",
      icon: MdVideocam,
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Film Production",
      description: "End-to-end film production services from pre to post-production",
      image: "/7.jpg",
      icon: MdMovie,
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Documentary Filmmaking",
      description: "Capturing real stories with artistic vision and professional expertise",
      image: "/6.jpg",
      icon: MdPhotoCamera,
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Video Editing",
      description: "Professional post-production and editing services for your footage",
      image: "/5.jpg",
      icon: MdEdit,
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Color Grading",
      description: "Expert color correction and grading to enhance your visual story",
      image: "/4.jpg",
      icon: MdColorLens,
      borderColor: "border-orange-400",
      gradientFrom: "from-orange-400/90",
      gradientTo: "to-orange-600/90",
    },
    {
      title: "Live Event Coverage",
      description: "Professional filming and streaming services for live events",
      image: "/3.jpg",
      icon: MdLiveTv,
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
      icon: "🎬"
    },
    {
      number: 2,
      title: "Strategy Development", 
      description: "From research to strategy approval and team briefing.",
      icon: "📋"
    },
    {
      number: 3,
      title: "Design & Development",
      description: "From concept creation to wireframing to design, development, and integration.",
      icon: "🎨"
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description: "From internal testing to client review, revisions, and final QA.",
      icon: "🔍"
    },
    {
      number: 5,
      title: "Launch & Post-Launch Support",
      description: "From pre-launch checks and deployment to training, optimization, and ongoing support.",
      icon: "🚀"
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
        ]}
        backgroundImage="/7.jpg"
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
                    {React.createElement(service.icon, { className: "w-10 h-10 text-orange-400" })}
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
      <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
              Work Process
            </span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Working
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Process
            </span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {workProcess.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 transform translate-x-8 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                </div>
              )}
              
              {/* Step circle */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 ease-out relative z-10">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-inner">
                    <span className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 rounded-full w-24 h-24 mx-auto opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform scale-105"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/9.jpg"
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
                  <img src="/10.jpg" alt="Client" className="w-full h-full object-cover" />
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
