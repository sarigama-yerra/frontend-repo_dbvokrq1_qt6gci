import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Accident Replacement Vehicles
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            UK-wide delivery of premium courtesy cars when you need them most. Fast, fair, and fully managed by specialists.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#claim" className="bg-[#C6A146] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition">Make a Claim</a>
            <a href="#fleet" className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/15 transition">Explore Fleet</a>
          </div>
        </div>
      </div>
    </section>
  )
}
