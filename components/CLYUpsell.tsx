'use client'

import Image from 'next/image' // Import Image from next/image
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const CLYUpsell = () => {
  return (
    <div className="flex flex-col items-center space-x-2 pt-8">
      <Image
        src={'/static/images/ico/coin_logo_basic.png'}
        alt="CLY Token Logo"
        width={192}
        height={192}
        className="h-48 w-48 rounded-full"
      />
      <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">CLY LBP Token Sale</h3>
      <div className="text-gray-500 dark:text-gray-500">20 million CLYs in 2025 </div>
      <div className="text-gray-500 dark:text-amber-300">
        Secure a seat to vote on APR and LTV on the DeFi!
        <br />
        <p className="text-right text-xs text-amber-200">
          <a
            href="https://clynto.com/docs/Protocol-Components/Governance-Documentation"
            className=""
          >
            learn more
          </a>
        </p>
      </div>
      <div className="flex space-x-3 pt-6"></div>
    </div>
  )
}

export default CLYUpsell
