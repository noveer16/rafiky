'use client'
import Link from '@/components/Link'
import React from 'react'
import Tag from '@/components/Tag'
import Typed from 'typed.js'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
import supportedAssets from '@/components/supportedAssets.json'

const MAX_DISPLAY = 5

// Function to run Greetings logic on load
const greetings = () => {
  const el = document.querySelector('#greeting-text')
  if (el) {
    const options = {
      strings: supportedAssets.list,
      typeSpeed: 300,
      backSpeed: 150,
      loop: true,
    }
    const typed = new Typed(el, options)
    return () => {
      typed.destroy()
    }
  }
}

export default function Home({ posts }) {
  // Use useEffect to run greetings on load
  React.useEffect(() => {
    greetings()
  }, [])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-7xl md:leading-14">
            Rafiky: Egypt’s AI-Powered Tourism Marketplace
          </h1>
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Discover, book, and experience Egypt with authentic local guides, AR adventures, and
            smart AI trip planning. For travelers and providers—Rafiky is your travel crew!
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Rafiky connects you to Egypt’s best experiences. Book instantly, post custom trip
            requests, and let local experts craft your dream itinerary. Providers grow their
            business with low commissions and AI-powered marketing. Join the movement and make
            travel in Egypt sexy, smart, and unforgettable!
          </p>
        </div>

        {/* Blog Posts */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {/* ICO HERO */}
        <div className="flex flex-col-reverse md:flex-row">
          {/* Left Section with Text (will appear second on mobile, first on larger screens) */}
          <div className="block rounded-lg md:w-1/2 md:flex-row">
            <div className="px-8 py-5 text-center md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-gray-500">Rafiky App Launch!</h1>
              <p className="mb-6 text-lg">
                Step into the future of travel! Rafiky’s AI-powered marketplace lets you discover,
                book, and experience Egypt with authentic local guides, AR adventures, and seamless
                payments. No more boring trips—unlock epic adventures and connect with the real
                Egypt. For travelers and providers, Rafiky is your ticket to a new era of tourism.
              </p>
              <a
                href="https://rafikyapp.com"
                target="_blank"
                className="hover:#FFB19A inline-block rounded-md px-6 py-3 text-white shadow transition duration-300"
                style={{ backgroundColor: '#FA8072' }}
              >
                Launch Rafiky App!
              </a>
            </div>
          </div>

          {/* Right Section with Image (will appear first on mobile, second on larger screens) */}
          <div className="block rounded-lg md:w-1/2 md:flex-row">
            <Image
              src="/static/images/home/rafiky-mobile-sc.svg"
              alt="Rafiky Launch"
              width="600"
              height="100"
              className="h-auto w-full pt-10"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="container mx-auto p-6">
          {/* Section 1 */}
          <div className="mb-12 flex flex-wrap items-center">
            <div className="p-6 md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-amber-600">
                AI-Powered Trip Planning & AR Experiences
              </h2>
              <p>
                Rafiky’s smart AI tools help you plan the perfect trip, discover hidden gems, and
                optimize your route. AR features make every adventure immersive and unforgettable.
                Whether you’re a traveler or provider, Rafiky’s tech makes travel easy, fun, and
                totally next-level.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/static/images/home/group.svg"
                alt={''}
                width="600"
                height="100"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12 flex flex-wrap items-center">
            <div className="hidden p-6 md:block md:w-1/2">
              <Image
                src="/static/images/home/community.svg"
                alt={''}
                width="600"
                height="100"
                className="w-full max-w-md"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-amber-600">
                Dual Marketplace: Book or Request
              </h2>
              <p>
                Instantly book verified services or post a custom trip request—local experts bid to
                craft your dream itinerary. Providers get access to a global audience and smart
                marketing tools. Rafiky is all about authentic connections and epic adventures.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12 flex flex-wrap items-center">
            <div className="block p-6 md:hidden md:w-1/2">
              <Image
                src="/static/images/home/flexible.svg"
                alt={''}
                width="600"
                height="100"
                className="w-full max-w-md"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-amber-600">
                No Applications, Just Adventure
              </h2>
              <p>
                Anyone can join Rafiky—no lengthy applications or credit checks. Travelers and
                providers sign up, connect, and start exploring or earning right away. It’s travel
                made simple, smart, and accessible for everyone.
              </p>
            </div>
            <div className="hidden md:block md:w-1/2">
              <Image
                src="/static/images/home/flexible.svg"
                alt={''}
                width="600"
                height="100"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12 flex flex-wrap items-center">
            <div className="md:w-1/2">
              <Image
                src="/static/images/home/flow.svg"
                alt={''}
                width="600"
                height="100"
                className="w-full max-w-md"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="text2xl mb-4 font-bold text-amber-600">Flexible Booking & Payment</h2>
              <p>
                Rafiky’s seamless booking and payment system makes travel easy and secure. Providers
                get transparent payouts, and travelers enjoy peace of mind with secure gateways and
                customer protection. Your adventure, your way!
              </p>
            </div>
          </div>
        </div>

        {/* Show All Posts Link */}
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}

        {/* Newsletter Form */}
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
