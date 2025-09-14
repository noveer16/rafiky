'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from '@/components/Image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Header = () => {
  let headerClass =
    'flex items-center justify-between w-screen bg-white dark:bg-gray-950 py-6 px-4 sm:px-8'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  // Handle theme switching
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className={headerClass}>
      {/* Logo + Title */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          <div className="mr-3">
            {mounted && resolvedTheme === 'dark' ? (
              <Image
                src="/static/images/logo-dark.png"
                alt="Rafiky Logo Dark"
                width="150"
                height="190"
              />
            ) : (
              <Image
                src="/static/images/logo-light.png"
                alt="Rafiky Logo Light"
                width="150"
                height="190"
              />
            )}
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-2xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      {/* Navbar + Controls */}
      <div className="flex items-center space-x-4 sm:space-x-8">
        {/* Nav Links + Launch App */}
        <div className="hidden items-center space-x-6 sm:flex md:space-x-8">
          {/* Launch App Button */}
          <Link
            href="https://app.clynto.com"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#faa32d] p-0.5 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:text-white dark:focus:ring-yellow-400"
          >
            <span className="relative rounded-md bg-white px-8 py-3 font-bold transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
              Launch App
            </span>
          </Link>

          {/* Nav Links */}
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-lg font-semibold text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>

        {/* Right controls */}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
