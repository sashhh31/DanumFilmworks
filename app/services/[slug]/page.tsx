import Link from "next/link"
import PageHeader from "@/components/page-header"
import { ArrowRight, ArrowLeft, Facebook, Twitter, Linkedin, Instagram, Phone } from "lucide-react"

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PageHeader
        title="Digital Marketing Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
          { label: "Digital Marketing", href: `/services/${params.slug}` },
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
                  alt="Digital Marketing Service"
                  className="w-full rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-bold mb-4">Comprehensive Digital Marketing Solutions</h2>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  Our digital marketing services are designed to help your business grow and reach its full potential in the digital landscape. We combine strategic thinking with cutting-edge technology to deliver measurable results that drive your business forward.
                </p>
                <p>
                  From search engine optimization to social media management, we provide end-to-end digital marketing solutions tailored to your specific business needs and goals. Our team of experts stays ahead of industry trends to ensure your business maintains a competitive edge.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Service Features</h3>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  Our comprehensive digital marketing service includes a wide range of features designed to maximize your online presence and drive business growth. We focus on creating sustainable, long-term results through data-driven strategies and continuous optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Search Engine Optimization (SEO)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Social Media Marketing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Content Marketing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Pay-Per-Click Advertising</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Service+Image+1"
                    alt="Service image 1"
                    className="w-full"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Service+Image+2"
                    alt="Service image 2"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  We believe in transparent communication and regular reporting to keep you informed about your campaign's performance. Our team works closely with you to understand your business objectives and develop strategies that align with your goals.
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-b border-gray-200 py-4">
                <Link
                  href="/services/previous"
                  className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  <span>Previous Service</span>
                </Link>
                <Link
                  href="/services/next"
                  className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span>Next Service</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-indigo-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Service Information</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/80 mb-1">Service Type:</h4>
                    <p>Digital Marketing</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Category:</h4>
                    <p>Marketing & Advertising</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Duration:</h4>
                    <p>Ongoing</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Starting Price:</h4>
                    <p>From $999/month</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Delivery Time:</h4>
                    <p>Immediate Start</p>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-white/80 mb-2">Follow us:</h4>
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

              <div className="bg-indigo-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-center flex-col">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Need Help? Call Here</h3>
                  <p className="text-center">+208-555-0112</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
