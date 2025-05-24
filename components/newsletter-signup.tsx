import { ArrowRight } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <div className="bg-cyan-400 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-cyan-400 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative w-24 h-24 mr-4">
              <img
                src="/10.jpg"
                alt="Customer support"
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative">
              <svg
                className="absolute -left-8 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <img src="/1.jpg" alt="Email icon" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <h3 className="text-white text-xl font-semibold mb-2">
              Stay Abreast of The Latest in Digital with Our Curated Content Every Week in Your Inbox
            </h3>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-4 py-2 rounded-l-full focus:outline-none"
              />
              <button
                className="bg-orange-500 text-white p-2 rounded-full -ml-6 hover:bg-orange-600 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
