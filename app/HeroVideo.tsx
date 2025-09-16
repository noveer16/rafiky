'use client'

export default function HeroVideo() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Optional overlay text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-4xl font-bold text-white">Welcome to Rafiky</h1>
      </div>
    </div>
  )
}
