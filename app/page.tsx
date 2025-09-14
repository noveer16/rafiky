import Link from 'next/link'
import VideoSection from './HeroVideo'
import Countdown from '@/components/countdown'
import FeaturedTrips from './featuresTrips'
import HeroVideo from './HeroVideo'

export default function Page() {
  return (
    <>
      {/* Hero Video Section */}
      <section className="relative h-[80vh] w-screen">
        <HeroVideo />
      </section>
      {/* Hero Section */}
      <section className="w-screen bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Rafiky – AI-Powered Travel Marketplace for Egypt
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Discover Egypt like never before. Personalized itineraries, trusted providers, and a
            smarter way to travel.
          </p>
          <Link
            href="/about"
            className="rounded-xl bg-[#133c67] px-6 py-3 text-white shadow-md transition hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-screen bg-gray-50 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">AI Travel Planning</h3>
            <p className="text-gray-600">
              Get custom itineraries powered by AI — designed just for you.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Trusted Providers</h3>
            <p className="text-gray-600">
              Connect with verified local guides, tours, and services.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Unique Experiences</h3>
            <p className="text-gray-600">
              Discover hidden gems of Egypt beyond the usual tourist spots.
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="w-screen bg-white py-16">
        <div className="mx-auto  ">
          <Countdown />
        </div>

        {/* Featured Trips Section */}

        <div className="mx-auto   w-screen bg-[#01356a] px-9 py-1">
          <FeaturedTrips />
        </div>
      </section>
    </>
  )
}
