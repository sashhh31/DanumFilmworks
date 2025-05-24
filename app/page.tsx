"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { List } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-white text-white">
   
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className=" gap-8 items-center">
            <div className="flex flex-row gap-28">
              <h1 className="text-4xl md:text-5xl w-[800px] text-black font-semibold mb-4">
                Innovating the Film Industry - Our Dynamic Approach to Film Production
              </h1>
              <p className="text-gray-900 mb-6 max-w-lg">
                Delivering creative solutions and exceptional results for your film production needs. Our team of
                experts brings your vision to life with cutting-edge technology and artistic excellence.
              </p>
            </div>
            <div className="hidden md:block">
              <img src="./image.png" alt="" className="relative " />{/* This space is intentionally left empty to match the layout */}</div>
          </div>
        </div>
      </section>

      {/* Passionate Filmmakers Section */}
      <section className="bg-black  text-white py-16">
        <div className="container mx-auto mt-96 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-[450px]">
              <h2 className="text-3xl w-[450px] font-bold mb-4">
                Passionate Filmmakers Dedicated to Bringing Your Vision to Life
              </h2>
              <p className="text-gray-300 w-[440px] mb-6">
                Our team of experienced professionals is committed to delivering high-quality film production services
                that exceed your expectations. We combine technical expertise with creative vision to tell compelling
                stories.
              </p>
              <Link
                href="/about-us"
                className="inline-block mt-20 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-all"
              >
                About Us
              </Link>
              <div className="mt-20">
                <p className="text-xl text-gray-400 text-bold mb-4">Our Partners & Collaborators</p>
                <div className="flex flex-wrap gap-6 h-full w-full" >
                 <Image src="./Group 10.png" alt="" width={100} height={10} className="w-full h-full"/>
                </div>
              </div>
            </div>
            <div className="bg-red-500 h-[660px] w-[670px] rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
  <section className="py-16 bg-gray-100 items-center justify-center">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-4">
      Comprehensive Film Production Services
      <br />- From Script to Screen
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Tailored solutions for every stage of your film production journey
    </p>

  <div className="flex gap-16 justify-center items-center">
    <div className="max-w-96">
    <img
    src='./Group 2.png'
    className="w-96 h-96"
    />
    <div className="relative justify-center items-center p-10 -top-96">
      <img src="Group 25.png" className="h-12 w-12 bg-white p-2 mb-3" alt="" />
      <h3 className="text-xl font-bold text-white mb-4">Pre-Production</h3>
      <p className="text-white mb-8 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae qui possimus sunt,  Quis eos rerum rem reprehenderit tempora aliquam eum obcaecati ratione.
      </p>
      <Button className="bg-white text-black text-xs">
        Learn More
      </Button>
    </div>
    </div>

    <div className="max-w-96">
    <img
    src='./Group 1.png'
    className="w-96 h-96"
    />
    <div className="relative justify-center items-center p-10 -top-96">
      <img src="Group 26.png" className="h-12 w-12 bg-white p-2 mb-3" alt="" />
      <h3 className="text-xl font-bold text-white mb-4">Production</h3>
      <p className="text-white mb-8 text-sm">
        Our production team brings your vision to life with state-of-the-art equipment and experienced crew members. We ensure every shot captures the essence of your story.
      </p>
      <Button className="bg-white text-black text-xs">
        Learn More
      </Button>
    </div>
    </div>

    <div className="max-w-96">
    <img
    src='./Vector 2.png'
    className="w-96 h-96"
    />
    <div className="relative justify-center items-center p-10 -top-96">
      <img src="Group 27.png" className="h-12 w-12 bg-white p-2 mb-3" alt="" />
      <h3 className="text-xl font-bold text-white mb-4">Post-Production</h3>
      <p className="text-white mb-8 text-sm">
        Transform your raw footage into a masterpiece with our expert editing, color grading, and sound design services. We polish every detail to perfection.
      </p>
      <Button className="bg-white text-black text-xs">
        Learn More
      </Button>
    </div>
    </div>
  </div>
  </div>
</section>


      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="flex justify-between ">
          <h2 className="text-3xl w-[450px] font-bold mb-2">
            Dozens of Successful Projects - Leading the Way in Film Production
          </h2>
          <p className="text-gray-600 w-[450px] mb-8">
            Our portfolio showcases our expertise and commitment to excellence in film production
          </p>
          </div>
            

          <div className="relative grid grid-cols-1 gap-8 mb-0 items-center ">
            <div className="flex justify-center w-full h-full">
              <Image
                src="Rectangle 5.png"
                alt="Film project"
                width={1600}
                height={500}
                className="rounded-lg shadow-md "
              />
            </div>
            {/* Left: News Box */}
            {/* Right: Image */}
          </div>
          {/* Stats Row */}
            <div className="flex justify-center md:justify-end ml-20  relative z-10">
              <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-80 w-full md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:ml-[-60px]">
                <h3 className="text-xl font-bold mb-2 text-black">
                  Upcoming Film Nears Completion with Final Editing and Sound Mixing Underway
                </h3>
              </div>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-4 ml-96 gap-4 bg-white rounded-lg shadow mt-8 py-8 px-4 md:px-12 w-full max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">15+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">350+</div>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">35+</div>
              <p className="text-gray-600">Partners Joined</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">10+</div>
              <p className="text-gray-600">Awards Winning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/Rectangle 6.png"
                alt="Film team working"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience, Excellence, and a Passion for Storytelling</h2>
              <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur. Volutpat pharetra leo amet lacus dignissim metus. Feugiat leo facilisi nunc iaculis fringilla tortor.</p>
              {/* Accordion State */}
              {(() => {
                const [openIndex, setOpenIndex] = useState(0);
                const items = [
                  {
                    label: "Expertise",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 16v-4" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="8" r="1" fill="currentColor"/></svg>
                    ),
                    content: "A professional film production service has the expertise and experience necessary to handle all aspects of the filmmaking process, from pre-production to post-production"
                  },
                  {
                    label: "Quality",
                    icon: (
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-gray-200 rounded font-bold text-xs text-black">HQ</span>
                    ),
                    content: ""
                  },
                  {
                    label: "Creativity",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Zm0 0v-4m0 0c-2.21 0-4-1.79-4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ),
                    content: ""
                  }
                ];
                return (
                  <div className="space-y-4">
                    {items.map((item, idx) => (
                      <div key={item.label} className="border border-gray-200 rounded-lg p-4">
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="font-semibold text-lg">{item.label}</span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={
                              (openIndex === idx ? "rotate-180 " : "") + "text-black transition-transform duration-200"
                            }
                          >
                            <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {openIndex === idx && item.content && (
                          <div className="mt-3 text-gray-600 text-sm">{item.content}</div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Stay Informed - The Latest News and Trends in Film Production
          </h2>
          <p className="text-gray-600 text-center mb-12">Insights and updates from our experts in the field</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="h-96 rounded-t-lg overflow-hidden">
                  <Image
                    src="/Group.png"
                    alt={`Blog post ${i}`}
                    width={384}
                    height={600}
                    className="w-full h-full  transition-transform duration-300"
                  />
                </div>
                <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg">
                  <h3 className="font-bold mb-2">
                    {i === 1 && "10 Things You Need to Know About Film Production"}
                    {i === 2 && "From Script to Screen: The Evolution of Film Production"}
                    {i === 3 && "The Business of Film Production: Balancing Creativity and Profitability"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis.
                  </p>
                  <Link
                    href={`/blog/post-${i}`}
                    className="inline-block bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
