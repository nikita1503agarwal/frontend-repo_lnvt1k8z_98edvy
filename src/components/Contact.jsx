import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! We will reach out shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Build Something</h2>
          <p className="mt-3 text-blue-100/90">Tell us about your project and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <textarea name="message" required rows={5} placeholder="Tell us about your goals" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors">Send Message</button>
            <span className="text-sm text-blue-100/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
