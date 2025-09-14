import TokenomicsChart from '@/components/TokenomicsChart'
import { genPageMetadata } from 'app/seo'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import ClySystem from '@/components/ClySystem'
import MilestonesTimeline from '@/components/MilestonesTimeline'
import CLYUpsell from '@/components/CLYUpsell'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Page Title */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            CLY Roadmap
          </h1>

          <div className="flex flex-col-reverse items-center justify-center md:flex-row">
            {/* Right Section with Image (will appear first on mobile, second on larger screens) */}
            <div className="hidden overflow-hidden rounded-lg md:block md:w-1/2 md:flex-row">
              <div className="h-screen">
                <Image
                  src="/static/images/cly/clynto_launch_CLY_token.png"
                  alt="CLY Launch"
                  width="6000"
                  height="1000"
                  style={{ transform: 'scale(2.5) translate(-70px, 130px)' }}
                />
              </div>
            </div>
            {/* Left Section with Text (will appear second on mobile, first on larger screens) */}
            <div className="block rounded-lg md:w-1/2 md:flex-row">
              <MilestonesTimeline />
            </div>
          </div>
        </div>

        {/* 60/40 Split Section */}
        <div className="flex flex-col-reverse items-center justify-center py-10 md:flex-row">
          {/* Section with Text - 60% width on larger screens */}
          <div className="flex w-full flex-col items-center justify-center p-4 text-center md:w-3/5 md:text-left">
            <h1 className="text-transparent-400 text-4xl font-bold">Why CLYs?</h1>
            <p className="mt-4 text-lg text-gray-700">
              CLY tokens play a crucial role in shaping the Clynto protocol through governance. By
              holding CLY tokens, you gain the power to vote on key aspects that directly impact the
              platform’s financial ecosystem. This includes setting LTV risk levels for low, medium,
              and high-risk loans, and defining the maximum allowable interest rates for each risk
              category. Beyond that, CLY token holders influence critical factors like the minimum
              duration required for investment liquidation, the early liquidation notice periods for
              loans, and ultimately, the Liquidation Point that determines when collateral is
              liquidated across the entire protocol. Through governance, CLY holders ensure that the
              platform remains fair, transparent, and driven by the community’s collective
              decisions.
            </p>
          </div>

          {/* Section with Image - 40% width on larger screens */}
          <div className="flex w-full items-center justify-center p-4 md:w-2/5">
            <ClySystem />
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <CLYUpsell />
          {/* Right Column with Tokenomics Chart */}
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <TokenomicsChart />
          </div>
        </div>

        {/* ICO Docs */}
        <section className="rounded-lg bg-gray-50 p-8 shadow-lg dark:bg-gray-900">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Basics</h2>
          <ul className="list-inside list-disc space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Total Supply:</strong> 100,000,000 CLY tokens
            </li>
            <li>
              <strong>Initial Circulating Supply:</strong> 20,000,000 CLY tokens (20% of total
              supply)
            </li>
            <li>
              <strong>Supported Networks:</strong> Solana and Ethereum (Base)
            </li>
            <li>
              <strong>Public Sale Method:</strong> Liquidity Bootstrapping Pool (LBP)
            </li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Token Distribution
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            The CLY token distribution strategy is designed to promote long-term engagement and
            ensure alignment of incentives for all participants in the ecosystem. Below is the
            updated breakdown of the total supply of 100 million CLY tokens:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg bg-white shadow-md dark:bg-gray-800">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">Category</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
                    Percentage (%)
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
                    Amount (CLY)
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
                    Vesting Period (Years)
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
                    Minting Schedule
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <strong>Investors (Private Sale)</strong>
                  </td>
                  <td className="px-4 py-2">15%</td>
                  <td className="px-4 py-2">15,000,000</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Vested over 2 years</td>
                  <td className="px-4 py-2">Attract early funding, align long-term goals</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <strong>Public Sale (LBP)</strong>
                  </td>
                  <td className="px-4 py-2">20%</td>
                  <td className="px-4 py-2">20,000,000</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2">Fully available at TGE</td>
                  <td className="px-4 py-2">Enable fair community access via LBP</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <strong>Community Treasury</strong>
                  </td>
                  <td className="px-4 py-2">40%</td>
                  <td className="px-4 py-2">40,000,000</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2">Gradual minting</td>
                  <td className="px-4 py-2">Fund development, marketing, grants</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <strong>Governance Rewards</strong>
                  </td>
                  <td className="px-4 py-2">10%</td>
                  <td className="px-4 py-2">10,000,000</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2">Activity-based</td>
                  <td className="px-4 py-2">Incentivize governance participation</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <strong>Team</strong>
                  </td>
                  <td className="px-4 py-2">15%</td>
                  <td className="px-4 py-2">15,000,000</td>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">Vested over 4 years with cliff</td>
                  <td className="px-4 py-2">Retain and motivate core team</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
            4. Detailed Allocation Breakdown
          </h2>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
            4.1 Investors (Private Sale): 15% (15,000,000 CLY)
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            This allocation attracts early funding and aligns long-term goals with investors. These
            tokens are vested over 2 years to ensure commitment to the platform’s success.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
            4.2 Public Sale (LBP): 20% (20,000,000 CLY)
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Reserved for the public via Liquidity Bootstrapping Pool (LBP), these tokens enable fair
            community access and are fully available at the Token Generation Event (TGE).
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
            4.3 Community Treasury: 40% (40,000,000 CLY)
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Allocated to fund development, marketing, and grants, this portion is gradually minted
            to support ongoing ecosystem growth and community initiatives without vesting.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
            4.4 Governance Rewards: 10% (10,000,000 CLY)
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Designed to incentivize governance participation, these tokens are distributed based on
            activity, with no vesting period, rewarding active community involvement.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
            4.5 Team: 15% (15,000,000 CLY)
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Reserved for team members and advisors, this allocation is vested over 4 years with a
            cliff to retain and motivate the core team for the platform’s long-term success.
          </p>
        </section>
      </div>
    </>
  )
}
