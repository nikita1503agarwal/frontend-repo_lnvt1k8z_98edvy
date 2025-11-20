export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built in Grenada, for the Caribbean</h2>
            <p className="mt-4 text-blue-100/90">
              We are a technology partner rooted in the Spice Isle. Our team blends global best practices with local insight to deliver software that moves businesses forward.
            </p>
            <ul className="mt-6 space-y-3 text-blue-100/90">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span> Transparent pricing and clear communication</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span> Reliable delivery with modern tooling</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span> Long-term support and growth partnerships</li>
            </ul>
          </div>
          <div>
            <div className="relative aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-blue-400/10 p-1">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(400px_150px_at_60%_30%,rgba(59,130,246,0.15),transparent)]" />
              <div className="relative h-full w-full rounded-2xl bg-slate-900/80 backdrop-blur">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl bg-blue-600/30 border border-white/10 shadow-2xl shadow-blue-500/20" />
                  <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-xl bg-blue-500/40 border border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
