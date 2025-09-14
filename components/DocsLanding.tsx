import { useState } from 'react'
import Link from './Link'
import { DocumentTextIcon } from '@heroicons/react/24/solid' // Import Heroicons for switching views
import ClyntoTriviaChallenge from './ClyntoTriviaChallenge'

const DocsLanding = () => {
  const [isTileView, setIsTileView] = useState(false) // State to switch between views

  const toggleView = () => {
    setIsTileView(!isTileView)
  }

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-10 text-center text-gray-900 dark:text-amber-100">
        <div className="container mx-auto">
          <p className="text-lg">
            Everything you need to know about using Clynto to unlock liquidity with your crypto and
            NFTs as collateral.
          </p>
        </div>
        <div className="container mx-auto overflow-hidden">
          <ClyntoTriviaChallenge />
        </div>
      </section>

      {/* Featured Docs Section */}
    </div>
  )
}

export default DocsLanding
