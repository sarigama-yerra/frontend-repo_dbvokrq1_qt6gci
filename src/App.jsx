import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import Claims from './components/Claims'
import { WhatWeDo, OurPeople, PersonalAssistance, IntroducerSupport, InsuranceServices, ContactUs } from './components/Sections'
import { Testimonials, News } from './components/ContentSections'

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Prestige Car Hire Management LTD. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#claim" className="hover:text-white">Make a Claim</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <OurPeople />
        <WhatWeDo />
        <PersonalAssistance />
        <IntroducerSupport />
        <InsuranceServices />
        <Claims />
        <Fleet />
        <Testimonials />
        <News />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
