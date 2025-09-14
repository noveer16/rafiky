'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  ChartEvent,
  ActiveElement,
} from 'chart.js'
import Image from 'next/image'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Dynamically import the Doughnut component from 'react-chartjs-2' to avoid SSR issues
const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
})

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels)

const TokenomicsChart: React.FC = () => {
  // Updated tokenomics data based on your specified distribution
  const tokenomicsData = [
    {
      category: 'Investors (Private Sale)',
      percentage: 15,
      description: 'Attract early funding, align long-term goals, vested over 2 years.',
      color: 'rgba(255, 99, 132, 0.8)',
    },
    {
      category: 'Public Sale (LBP)',
      percentage: 20,
      description: 'Enable fair community access via LBP, fully available at TGE.',
      color: 'rgba(54, 162, 235, 0.8)',
    },
    {
      category: 'Community Treasury',
      percentage: 40,
      description: 'Fund development, marketing, grants with gradual minting.',
      color: 'rgba(255, 206, 86, 0.8)',
    },
    {
      category: 'Governance Rewards',
      percentage: 10,
      description: 'Incentivize governance participation, activity-based rewards.',
      color: 'rgba(75, 192, 192, 0.8)',
    },
    {
      category: 'Team',
      percentage: 15,
      description: 'Retain and motivate core team, vested over 4 years with cliff.',
      color: 'rgba(153, 102, 255, 0.8)', // Adjusted Team color for variety
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [tooltipContent, setTooltipContent] = useState<{
    category: string
    description: string
    color: string
  } | null>(null)

  const data = {
    labels: tokenomicsData.map((item) => item.category),
    datasets: [
      {
        data: tokenomicsData.map((item) => item.percentage),
        backgroundColor: tokenomicsData.map((item) => item.color),
        hoverBackgroundColor: tokenomicsData.map((item) => item.color.replace('0.8', '1')),
        borderWidth: 1,
        offset: Array(tokenomicsData.length)
          .fill(0)
          .map((_, i) => (i === activeIndex ? 20 : 0)),
      },
    ],
  }

  const onClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const elementIndex = elements[0].index
      const selectedData = tokenomicsData[elementIndex]
      const color = selectedData.color

      setActiveIndex(elementIndex)
      setTooltipContent({
        category: selectedData.category,
        description: selectedData.description,
        color,
      })
    }
  }

  return (
    <div>
      <p>
        Clynto token (CLY) fuels the <strong>Clynto DeFi platform</strong>, driving staking,
        governance, collateralization, and fee cuts. Dive into the refreshed CLY tokenomics,
        detailing total supply, distribution tactics, and allocations for rewards and growth.
      </p>
      <h2>CLY Tokenomics</h2>
      <div style={{ position: 'relative', width: '500px', margin: '0 auto', minHeight: '400px' }}>
        <div style={chart3DContainer}>
          <Doughnut
            data={data}
            options={{
              onClick: onClick,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem: { dataIndex: number }) {
                      const dataIndex = tooltipItem.dataIndex
                      const category = tokenomicsData[dataIndex].category
                      const percentage = tokenomicsData[dataIndex].percentage
                      return `${category}: ${percentage}%`
                    },
                  },
                },
                datalabels: {
                  color: '#fff',
                  formatter: function (value: number) {
                    return value + '%'
                  },
                  font: {
                    weight: 'bold',
                    size: 16,
                  },
                },
              },
              cutout: '70%',
            }}
          />
          <Image
            src="/static/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            style={centerImageStyles}
          />
        </div>
      </div>

      {tooltipContent && (
        <div style={popupStyles}>
          <p style={{ color: tooltipContent.color, fontWeight: 'bold' }}>
            {tooltipContent.category}
          </p>
          <p style={{ color: 'black' }}>{tooltipContent.description}</p>
          <button
            style={{ color: tooltipContent.color }}
            onClick={() => {
              setTooltipContent(null)
              setActiveIndex(null)
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

const centerImageStyles = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100px',
  height: '100px',
}

const chart3DContainer = {
  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
  padding: '20px',
  borderRadius: '50%',
  transform: 'rotateX(15deg)',
}

const popupStyles = {
  position: 'fixed' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  border: '1px solid black',
  zIndex: 1000,
  borderRadius: '8px',
  width: '300px',
}

export default TokenomicsChart
