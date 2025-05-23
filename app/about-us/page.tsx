import React from 'react'

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative w-full h-56 flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-30 blur-2xl" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">About Us</h1>
          <nav className="flex items-center justify-center gap-2 text-white text-sm">
            <a href="/" className="hover:underline opacity-80">Home</a>
            <span className="mx-1">&gt;</span>
            <span className="font-semibold opacity-100">About Us</span>
          </nav>
        </div>
      </section>
      {/* About Us Hero Section */}
      <section className="w-full py-16 bg-gradient-to-br from-white via-purple-50 to-purple-100 flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-12 rounded-3xl max-w-6xl mx-auto shadow-lg mb-16">
        <div className="max-w-xl w-full">
          <p className="text-sm text-blue-700 font-semibold mb-2 tracking-wide">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            We're A Leading <span className="text-orange-500">Digital</span> Consulting Agency
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            In Order to Scale New Customer Acquisition And Retention For E-Commerce Brands, We Work Across The Entire Customer Journey. Our Team Has A Successful Track Record Of Helping Brands Scale.
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold text-gray-800">94%</span>
              <p className="text-xs text-gray-500">SMS MARKETING</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-800">65%</span>
              <p className="text-xs text-gray-500">GROWTH MARKETING</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold shadow-lg">ABOUT US</button>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl" />
            <img src="/images/office.jpg" alt="About Us Hero" className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-2xl border-8 border-white" />
          </div>
        </div>
      </section>
      {/* Why Choose Us & Testimonials Section */}
      <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Why Choose Us */}
          <div className="order-2 md:order-1">
            <p className="text-sm text-blue-700 font-semibold mb-2 tracking-wide">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Why Choose Us</h2>
            <p className="text-gray-600 mb-8 text-lg">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
            <div className="flex gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-2 shadow">
                  <span role="img" aria-label="growth" className="text-2xl">📈</span>
                </div>
                <span className="font-semibold">Business Growth</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full mb-2 shadow">
                  <span role="img" aria-label="tech" className="text-2xl">💻</span>
                </div>
                <span className="font-semibold">Technology Consultancy</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow">
                <img src="/images/people.jpg" alt="Dr. Dan Jatau" className="rounded-full w-10 h-10 object-cover" />
              </div>
              <div>
                <p className="font-semibold">Dr. Dan Jatau</p>
                <p className="text-xs text-gray-500">Founder/Chief Technology</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">Call Us Now</span>
              <span className="font-semibold text-gray-700">+44 800 795 7512</span>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-2xl" />
              <img src="/images/business.jpg" alt="Why Choose Us" className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-2xl border-8 border-white" />
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="relative bg-gradient-to-r from-blue-50 to-purple-100 rounded-3xl p-10 md:p-16 overflow-hidden max-w-6xl mx-auto shadow-xl">
          <div className="absolute left-0 bottom-0 w-1/3 hidden md:block">
            <img src="/images/people.jpg" alt="Testimonial Person" className="w-64 object-cover rounded-2xl opacity-90" />
          </div>
          <div className="md:ml-72">
            <p className="text-sm text-blue-700 font-semibold mb-2 tracking-wide">TESTIMONIALS</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-10">
              What <span className="text-blue-900">Happy Clients Say</span> <span className="text-orange-500">About Us</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1,2,3].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition">
                  <div className="flex gap-1 mb-2">
                    {Array(5).fill(0).map((_, idx) => (
                      <span key={idx} className="text-orange-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    when an unknown printer took away galley of type & scrambled it to make a type many but also the leap into
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <img src="/images/people.jpg" alt="Avatar" className="rounded-full w-10 h-10 object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Kristin Watson</p>
                      <p className="text-xs text-gray-500">Web Designer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
