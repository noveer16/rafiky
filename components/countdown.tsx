'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {
  const targetDate = new Date('2025-12-01T00:00:00')

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  })

  useEffect(() => {
    function updateCountdown() {
      const now = new Date()
      let diff = Math.max(0, targetDate.getTime() - now.getTime())

      const sec = 1000
      const min = 60 * sec
      const hr = 60 * min
      const day = 24 * hr

      const days = Math.floor(diff / day)
      diff -= days * day
      const hours = Math.floor(diff / hr)
      diff -= hours * hr
      const mins = Math.floor(diff / min)
      diff -= mins * min
      const secs = Math.floor(diff / sec)

      setTimeLeft({ days, hours, mins, secs })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      className="relative h-[50vh] w-screen overflow-hidden bg-cover bg-center brightness-125"
      style={{ backgroundImage: "url('/static/images/launching.png')" }}
    >
      {/* Overlay to increase contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Launching Soon top-left */}
      <div className="absolute left-8 top-8 z-10">
        <h1 className="text-4xl font-bold text-[#ff6200] drop-shadow-lg">LAUNCHING SOON</h1>
      </div>

      {/* Countdown bottom-right */}
      <div className="absolute bottom-8 right-2 z-10 flex space-x-2">
        {[
          { label: 'DAYS', value: pad(timeLeft.days), color: 'bg-teal-700' },
          { label: 'HRS', value: pad(timeLeft.hours), color: 'bg-slate-700' },
          { label: 'MINS', value: pad(timeLeft.mins), color: 'bg-amber-700' },
          { label: 'SECS', value: pad(timeLeft.secs), color: 'bg-red-900' },
        ].map((box, i) => (
          <div
            key={i}
            className={`${box.color} flex h-20 w-20 flex-col items-center justify-center rounded-xl text-white shadow-lg`}
          >
            <span className="font-mono text-2xl font-bold">{box.value}</span>
            <span className="text-xs">{box.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
