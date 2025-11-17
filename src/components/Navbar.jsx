import { useState } from 'react'
import { Menu, X, Car, Phone } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Our People', href: '#people' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Personal Assistance', href: '#personal-assistance' },
  { name: 'Introducer Support', href: '#introducer-support' },
  { name: 'Insurance Services', href: '#insurance-services' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Make a Claim', href: '#claim' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#C6A146] flex items-center justify-center shadow-md">
              <Car size={18} className="text-black" />
            </div>
            <span className="font-semibold tracking-wide">Prestige Car Hire</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-white/90 hover:text-[#C6A146] transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#claim" className="ml-4 inline-flex items-center gap-2 bg-[#C6A146] text-black px-4 py-2 rounded-full font-medium hover:brightness-110 transition-shadow shadow-md">
              <Phone size={16} /> Make a Claim
            </a>
          </nav>

          <button className="lg:hidden p-2 rounded-md border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-white/90 hover:text-[#C6A146]">
                {item.name}
              </a>
            ))}
            <a href="#claim" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-[#C6A146] text-black px-4 py-2 rounded-full font-medium">
              <Phone size={16} /> Make a Claim
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
