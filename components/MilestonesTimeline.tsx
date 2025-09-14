'use client'
import React from 'react'

const milestones = [
  {
    phase: 'H2 2024: Build Phase',
    timeline: 'July - December 2024',
    milestone: '',
    details: 'Build the core functionality of the smart contracts and UX Studies.',
  },
  {
    phase: 'Q1 2025',
    timeline: 'Launch Clynto on Testnet',
    milestone: 'Start Building Community',
    details: 'Gather feedback and release enhancments for all usecases.',
  },
  {
    phase: 'Q2 2025: Community Round',
    timeline: 'March - May 2025',
    milestone: 'LBP token sale',
    details: '2-Day Community LBP Release for 20% of token total supply.',
  },
  {
    phase: 'H2 2025: Mainnet Launch',
    timeline: 'June 2025',
    milestone: 'First Governance Event on Mainnet (GA)',
    details: 'DeFi goes live and kick off the first governance event!',
  },
]

export default function MilestonesTimeline() {
  return (
    <section className="bg-transparent-100 text-sltransparentate-200 p-8">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-8">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="border-transparent-500 relative border-l-4 pb-6 pl-4 md:pb-8 md:pl-6"
            >
              <div className="bg-transparent-500 absolute -left-2.5 -top-1 h-5 w-5 rounded-full"></div>
              {item.phase && (
                <h2 className="text-transparent-400 mb-2 text-2xl font-semibold">{item.phase}</h2>
              )}
              <div className="text-transparent-300 mb-1 text-lg">{item.timeline}</div>
              <h3 className="text-transparent-300 text-xl font-medium">{item.milestone}</h3>
              <p className="text-transparent-400">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
