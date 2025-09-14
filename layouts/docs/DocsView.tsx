'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import { allDocumentations, type Documentation } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Sidebar from '@/components/Sidebar'
import siteMetadata from '@/data/siteMetadata'
import DocsLanding from '@/components/DocsLanding'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  docs: CoreContent<Documentation>[]
  title: string
  initialDisplayDocs?: CoreContent<Documentation>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  docs,
  title,
  initialDisplayDocs = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogDocs = docs.filter((doc) => {
    const searchContent = doc.title + doc.summary + doc.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayDocs exist, display it if no searchValue is specified
  const displayDocs =
    initialDisplayDocs.length > 0 && !searchValue ? initialDisplayDocs : filteredBlogDocs

  return (
    <div className="flex">
      {/* Sidebar (30% width) */}
      <nav className="w-1/3 bg-gray-100 px-4 py-6">
        <Sidebar />
      </nav>

      {/* Main content (70% width) */}
      <div className="w-2/3 bg-gray-50 p-6 dark:divide-gray-700 dark:bg-gray-900">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          {/* Search Bar */}
          <div className="">
            <label>
              <span className="sr-only">Search articles</span>
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {/* Docs Landing/into */}
        <div className="">
          <DocsLanding />
        </div>
      </div>
    </div>
  )
}
