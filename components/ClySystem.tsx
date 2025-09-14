'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Gear = ({ cx, cy, r, label, fillColor, textColor }) => (
  <g>
    <circle cx={cx} cy={cy} r={r - 2} fill={fillColor} />
    <path
      d={`M ${cx},${cy} 
        m -${r},0 
        a ${r},${r} 0 1,0 ${r * 2},0 
        a ${r},${r} 0 1,0 -${r * 2},0`}
      fill="none"
      stroke="black"
      strokeWidth="2"
    />
    {/* Teeth */}
    {[...Array(8)].map((_, i) => (
      <rect
        key={i}
        x={cx + Math.cos((i * Math.PI) / 4) * r - 2}
        y={cy + Math.sin((i * Math.PI) / 4) * r - 6}
        width="4"
        height="12"
        fill="black"
        transform={`rotate(${i * 45} ${cx} ${cy})`}
      />
    ))}
    <text
      x={cx}
      y={cy}
      fill={textColor}
      textAnchor="middle"
      dy=".3em"
      fontSize="12"
      fontWeight="bold"
    >
      {label}
    </text>
  </g>
)

const GoldCoinLogo = ({ cx, cy, r }) => (
  <g>
    {/* Outer Circle */}
    <circle cx={cx} cy={cy} r={r} fill="gold" stroke="#DAA520" strokeWidth="4" />
    {/* Inner Circle for the Shiny Effect */}
    <circle cx={cx} cy={cy} r={r - 6} fill="goldenrod" />
    {/* Text on Coin */}
    <text x={cx} y={cy} fill="#fff" textAnchor="middle" dy=".3em" fontSize="20" fontWeight="bold">
      CLY
    </text>
    {/* Coin Shading */}
    <ellipse cx={cx} cy={cy - 5} rx={r - 10} ry={r / 2} fill="rgba(255, 255, 255, 0.3)" />
  </g>
)

const GearsWithCoinLogo = () => {
  const gearRefs = useRef<(SVGGElement | null)[]>([]) // Properly typed ref

  useEffect(() => {
    const gears = gearRefs.current
    const rotationSpeed = 12

    const spinGears = () => {
      gears.forEach((gear, index) => {
        gsap.to(gear, {
          rotation: '+=360',
          transformOrigin: 'center center',
          duration: rotationSpeed + index * 2,
          ease: 'linear',
          repeat: -1,
        })
      })
    }

    spinGears()
  }, [])

  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      {/* Center Coin Logo */}
      <GoldCoinLogo cx={200} cy={150} r={40} />

      {/* Gears around the logo */}
      <g className="gears">
        {/* Top Gear */}
        <g
          ref={(el) => {
            gearRefs.current[0] = el
          }}
        >
          <Gear cx={200} cy={70} r={30} label="APR" fillColor="#FF6F61" textColor="#fff" />
        </g>

        {/* Right Gear */}
        <g
          ref={(el) => {
            gearRefs.current[1] = el
          }}
        >
          <Gear cx={290} cy={150} r={30} label="LTV" fillColor="#1E90FF" textColor="#fff" />
        </g>

        {/* Bottom Gear */}
        <g
          ref={(el) => {
            gearRefs.current[2] = el
          }}
        >
          <Gear cx={200} cy={230} r={30} label="BTC" fillColor="#FFD700" textColor="#000" />
        </g>

        {/* Left Gear */}
        <g
          ref={(el) => {
            gearRefs.current[3] = el
          }}
        >
          <Gear cx={110} cy={150} r={30} label="USDC" fillColor="#6CFFB8" textColor="#000" />
        </g>
      </g>

      <style jsx>{`
        svg {
          width: 400px;
          height: 300px;
        }
      `}</style>
    </svg>
  )
}

export default GearsWithCoinLogo
