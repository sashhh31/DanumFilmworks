import Link from "next/link"
import PageHeader from "@/components/page-header"
import { ArrowRight, ArrowLeft, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PageHeader
        title="Generation Of Wealth"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Portfolio", href: "/portfolio" },
          { label: "Generation of Wealth", href: `/portfolio/${params.slug}` },
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
                  alt="Digital Marketing Project"
                  className="w-full rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-bold mb-4">Digital Marketing Agency</h2>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  At tempor aenean sapien sagittis torquent sed diam class efficitur nulla mollis dras dictum auctor
                  augue ac leo erat ligula blandit in commodo nisl nec fermentum nisl sed placerat consequat justo duis
                  turpis lorem elit sed consectetur magna lacus sed per placerat vestibulum molestie mauris mollis
                  primis imperdiet posuere erat enim gravida cras congue.
                </p>
                <p>
                  pellentesque vulputate malesuada dictum et fames interdum cursus ut in tellus porta ullamcorper
                  accumsan non eu pulvining integer venenatis cursus nibh sed cursus finibus sed lacus augue vel
                  lobortis semper sed vitae sollicitudin in consectetur ultrices dictum parturient pede nisl sapibus
                  habitant metus quisque eleifentum nceptos nam feugiat.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Project Goals</h3>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  At tempor aenean sapien sagittis torquent sed diam class efficitur nulla mollis dras dictum auctor
                  augue ac leo erat ligula blandit in commodo nisl nec fermentum nisl sed placerat consequat justo duis
                  turpis lorem elit sed consectetur magna lacus sed per placerat vestibulum molestie mauris mollis
                  primis imperdiet posuere erat enim gravida cras congue.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Various analysis options.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Page Load time, size, number of requests).</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Advance Data analysis operation.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                  <span>Advance Data analysis operation.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Project+Image+1"
                    alt="Project image 1"
                    className="w-full"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Project+Image+2"
                    alt="Project image 2"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  At tempor aenean sapien sagittis torquent sed diam class efficitur nulla mollis dras dictum auctor
                  augue ac leo erat ligula blandit in commodo nisl nec fermentum nisl sed placerat consequat justo duis
                  turpis lorem elit sed consectetur magna lacus sed per placerat vestibulum molestie mauris mollis
                  primis imperdiet posuere erat enim gravida cras congue.
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-b border-gray-200 py-4">
                <Link
                  href="/portfolio/previous"
                  className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  <span>Previous</span>
                </Link>
                <Link
                  href="/portfolio/next"
                  className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-indigo-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Information</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/80 mb-1">Client:</h4>
                    <p>Ryan Sam Smith</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Category:</h4>
                    <p>Building Constructions</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Start Date:</h4>
                    <p>10 June, 2023</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">End Date:</h4>
                    <p>10 October, 2023</p>
                  </div>

                  <div>
                    <h4 className="text-white/80 mb-1">Project Budget:</h4>
                    <p>$25000.99</p>
                  </div>

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

import { Phone } from "lucide-react"
