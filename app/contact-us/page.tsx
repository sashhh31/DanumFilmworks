import PageHeader from "@/components/page-header"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function ContactUs() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[1000px] overflow-hidden gap-12">
            <div>
              <div className="mb-8">
                <img
                  src="/6737586.jpg"
                  alt="Contact illustration"
                  className="w-[500px] h-[500px] mx-auto"
                />
              </div>
          
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">We'll Respond To You In An Hour.</h2>
              <p className="text-gray-600 mb-8">Neque porro est qui dolorem ipsum quia quaed inventor veritatis et</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Get in touch</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <textarea
                    placeholder="Write Message..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors flex items-center"
                  >
                    GET STARTED
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Map would go here - using placeholder for now */}
            <img
              src="/map1.png"
              alt="Location map"
              className="w-full h-full object-cover"
            />
            
    <section className="py-12 z-50 max-w-[500px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-cyan-500 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p>Courtyard Business Ctr,</p>
                  <p>Southwell Dr, Nottingham NG8 1PA, UK</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <p>+44 800 195 7512</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <p>team@webxcell.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
          
        </div>
      </section>
    </div>
  )
}
