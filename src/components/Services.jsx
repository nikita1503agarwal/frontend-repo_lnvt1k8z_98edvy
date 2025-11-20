import { Code, Globe, Bot, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    desc: 'Robust, scalable applications crafted to your business needs using modern stacks.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Fast, responsive websites that convert — designed for SEO and performance.',
  },
  {
    icon: Bot,
    title: 'Automation',
    desc: 'Streamline operations with AI and workflow automation that saves time and cost.',
  },
  {
    icon: Rocket,
    title: 'SEO',
    desc: 'Content and technical SEO to help you rank higher and get discovered.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(400px_150px_at_90%_10%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What We Do</h2>
          <p className="mt-3 text-blue-100/90">End-to-end digital solutions tailored for Grenadian businesses.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
