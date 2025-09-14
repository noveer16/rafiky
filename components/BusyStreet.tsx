'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { DocumentTextIcon, PlusIcon } from '@heroicons/react/solid'

const buzzwords = [
  'APR',
  'LTV',
  'Vote',
  '%',
  'Liquidation',
  'Interest',
  'Collateral',
  'Clynto',
  'CLY',
  'Max',
  'Min',
]

const BusyStreet = () => {
  useEffect(() => {
    // Move lane lines to give the illusion of driving
    gsap.to('.lane-line', {
      x: '-=3200',
      duration: 5,
      repeat: -1,
      ease: 'linear',
      modifiers: {
        x: (x) => `${parseFloat(x) % 3200}px`,
      },
    })

    // Move all buildings continuously across the screen
    gsap.to('.building-green, .building-blue', {
      x: '-=3200', // Extend to cover larger number of buildings
      duration: 10,
      repeat: -1,
      ease: 'linear',
    })

    // Move waves continuously across the river section
    gsap.to('.wave', {
      x: '-=3200',
      duration: 20,
      repeat: -1,
      ease: 'linear',
    })

    // Animate falling icons and buzzwords
    const elements = document.querySelectorAll('.falling-item')
    elements.forEach((element) => {
      const randomDelay = Math.random() * 5
      const randomDuration = Math.random() * 3 + 2
      const randomX = Math.random() * 650

      gsap.fromTo(
        element,
        { x: randomX, y: -100 },
        {
          y: 300 + 100,
          duration: randomDuration,
          delay: randomDelay,
          ease: 'linear',
          repeat: -1,
          onRepeat() {
            gsap.set(element, { x: Math.random() * 650 })
          },
        }
      )
    })
  }, [])
  // Generates random windows for a building, drawn upwards
  const generateWindows = (
    buildingX: number,
    buildingY: number,
    buildingWidth: number,
    buildingHeight: number
  ): JSX.Element[] => {
    const windows: JSX.Element[] = []
    const windowSize = 8
    const windowGap = 6

    // Iterate over the X axis for each window column
    for (
      let x = buildingX + windowGap;
      x < buildingX + buildingWidth - windowGap;
      x += windowSize + windowGap
    ) {
      // Iterate over the Y axis for each window row, drawing from bottom to top
      for (
        let y = buildingY - windowGap - windowSize;
        y > buildingY - buildingHeight + windowGap;
        y -= windowSize + windowGap
      ) {
        windows.push(
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={windowSize}
            height={windowSize}
            fill="rgba(255, 255, 255, 0.6)"
            rx="1.5"
          />
        )
      }
    }

    return windows
  }

  // Generates a random number between 20 and 100
  const getRandomNumber = () => Math.floor(Math.random() * (100 - 20 + 1)) + 20

  return (
    <div className="relative h-auto w-full">
      <svg
        width="3200"
        height="600"
        viewBox="0 0 3200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Trees stationary behind the buildings, using random cx and cy */}
        {[...Array(5)].map((_, index) => {
          const randomPosition = getRandomNumber() // Get random number between 20 and 100
          return (
            <g key={index} className="tree">
              <circle cx={index * 120 + 50} cy={randomPosition} r="30" fill="#228B22" />
              <rect x={index * 120 + 45} y={randomPosition} width="10" height="40" fill="#8B4513" />
            </g>
          )
        })}

        {/* Trees stationary behind the buildings, using random cx and cy */}
        {[...Array(5)].map((_, index) => {
          const randomPosition = getRandomNumber() // Get random number between 20 and 100
          return (
            <g key={index} className="tree">
              <circle cx={index * 180 + 50} cy={randomPosition + 90} r="30" fill="#228B22" />
              <rect
                x={index * 180 + 45}
                y={randomPosition + 90}
                width="10"
                height="40"
                fill="#8B4513"
              />
            </g>
          )
        })}

        {/* CLY Hexagon Coin in the Top Left */}
        <g transform="translate(50, 30)">
          <polygon points="60,0 120,30 120,90 60,120 0,90 0,30" fill="url(#gold-gradient)" />
          <text x="40" y="70" fontSize="24" fontWeight="bold" fill="#333">
            CLY
          </text>
        </g>

        {/* Shiny effect for the CLY Coin */}
        <defs>
          <radialGradient id="gold-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFAA00', stopOpacity: 1 }} />
          </radialGradient>
        </defs>

        {/* Buildings */}
        {[...Array(65)].map((_, index) => {
          const randomPosition = getRandomNumber() // Get random number between 20 and 100
          return (
            <g key={index} className={`building-${index % 2 === 0 ? 'blue' : 'green'}`}>
              <rect
                x={index * 100}
                y={200 - randomPosition}
                width={60}
                height={randomPosition}
                fill={
                  index % 4 === 0
                    ? '#4A90E2' // Blue
                    : index % 4 === 1
                      ? '#3BB273' // Green
                      : index % 4 === 2
                        ? '#A9A9A9' // Modern Gray
                        : '#F5A623' // Orange
                }
                rx="3"
                className="align-bottom"
              />
              {generateWindows(index * 100, 200, 60, randomPosition - 20)}
            </g>
          )
        })}

        {/* Street above the buildings */}
        <rect x="0" y="200" width="3200" height="100" fill="#707070" />

        {/* Lane lines */}
        <line
          className="lane-line"
          x1="0"
          y1="250"
          x2="13200"
          y2="250"
          stroke="white"
          strokeDasharray="15, 15"
          strokeWidth="3"
        />

        {/* Cars */}
        <g className="car1-group">
          <rect x="0" y="220" width="100" height="40" fill="#E74C3C" rx="5" />
          <circle className="tire1" cx="20" cy="265" r="10" fill="black" />
          <circle className="tire1" cx="80" cy="265" r="10" fill="black" />
        </g>

        <g className="car2-group">
          <rect x="100" y="180" width="100" height="40" fill="#3498DB" rx="5" />
          <circle className="tire2" cx="120" cy="225" r="10" fill="black" />
          <circle className="tire2" cx="180" cy="225" r="10" fill="black" />
        </g>

        {/* River Below the Street */}
        <rect x="0" y="300" width="3200" height="100" fill="#87CEEB" />

        {/* Waves in the River */}
        {[...Array(62)].map((_, index) => (
          <path
            key={index}
            className="wave"
            d={`M${index * 100},350 Q${index * 100 + 50},330 ${index * 100 + 100},350 T${index * 100 + 200},350`}
            stroke="lightblue"
            strokeWidth="3"
            fill="none"
          />
        ))}
      </svg>

      {/* Falling Icons and Buzzwords */}
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="falling-item absolute h-10 w-10 text-gray-700">
          <DocumentTextIcon />
        </div>
        <div className="falling-item absolute h-10 w-10 text-gray-700">
          <PlusIcon />
        </div>
        <div className="falling-item absolute h-10 w-10 text-gray-700">
          <DocumentTextIcon />
        </div>

        {/* Falling Buzzwords */}
        {buzzwords.map((word, index) => (
          <div key={index} className="falling-item absolute text-2xl font-bold text-gray-700">
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusyStreet
