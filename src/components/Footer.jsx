export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-blue-100/80">© {new Date().getFullYear()} GrenTech. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-blue-100/80 hover:text-white">Services</a>
            <a href="#about" className="text-blue-100/80 hover:text-white">About</a>
            <a href="#contact" className="text-blue-100/80 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
