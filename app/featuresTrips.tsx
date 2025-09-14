'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedTrips() {
  const trips = [
    { src: '/static/images/gradution.png', title: 'Graduation trip', href: '/Graduationtrip' },
    { src: '/static/images/honeymoon.png', title: 'Honeymoon trip', href: '/Honeymoontrip' },
    { src: '/static/images/nuba.png', title: 'Nuba trip', href: '/Nubatrip' },
    { src: '/static/images/cooking.png', title: 'Cooking trip', href: '/Cookingtrip' },
  ]

  return (
    <section className="py-16">
      <h2 className="mb-8 text-left text-3xl font-bold text-[#ffa500]">Featured Trips</h2>
      <p className="mb-12 text-xl font-semibold text-white sm:text-2xl">
        Experience what Rafiky has to offer
      </p>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {trips.map((trip, i) => (
          <div key={i} className="group text-center">
            <Link href={trip.href}>
              <div className="relative aspect-square w-full transform cursor-pointer overflow-hidden rounded-xl shadow-md transition group-hover:scale-105">
                <Image src={trip.src} alt={trip.title} fill className="object-cover" />
              </div>
              <p className="mt-3 text-xl font-bold text-[#f6e4a6] hover:underline">{trip.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
