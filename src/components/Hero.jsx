import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/90"></div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90">
              Grenada • Caribbean Tech
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Blue-Driven Software, Websites and Automation
            </h1>
            <p className="mt-4 text-lg text-blue-100/90">
              We design and build modern digital experiences for ambitious brands in Grenada and beyond.
              From custom software to SEO and intelligent automation — we deliver results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors">
                Start a Project
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
