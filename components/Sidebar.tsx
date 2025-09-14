'use client' // Mark this component as a Client Component

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { allDocumentations } from 'contentlayer/generated'
import Link from './Link'

const Sidebar = () => {
  const pathname = usePathname() // Use usePathname instead of useRouter

  const getIndentationClass = (indentation) => {
    switch (indentation) {
      case 0:
        return 'ml-0'
      case 1:
        return 'ml-4'
      case 2:
        return 'ml-8'
      case 3:
        return 'ml-12'
      default:
        return `ml-${indentation * 4}`
    }
  }

  return (
    <nav className="h-full w-64 px-4 py-6">
      <ul>
        {allDocumentations
          .sort((a, b) => a.index - b.index)
          .map((doc) => {
            const isActive = pathname === `/${doc.path}` // Use pathname to check if active
            return (
              <li key={doc.path} className={`mb-2 ${getIndentationClass(doc.indentation)}`}>
                <Link
                  href={`/${doc.path}`}
                  className={`block text-sm transition-colors duration-300 hover:underline ${
                    doc.indentation === 0
                      ? 'font-xl hover:text-amber-950 dark:text-gray-500'
                      : 'pl-4 hover:text-amber-950 dark:text-gray-500'
                  } ${isActive ? 'font-bold underline' : ''}`}
                >
                  {doc.title}
                </Link>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default Sidebar
