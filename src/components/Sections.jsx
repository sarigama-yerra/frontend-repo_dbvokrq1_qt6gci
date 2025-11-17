import { Shield, Handshake, Users, FileText, BadgeCheck, LifeBuoy, Building2, Mail, Car, Search } from 'lucide-react'

const Section = ({ id, title, subtitle, children, alt }) => (
  <section id={id} className={`${alt ? 'bg-[#F5F5F5]' : 'bg-white'} py-16 sm:py-24`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">{title}</h2>
        {subtitle && <p className="mt-3 text-black/70">{subtitle}</p>}
      </div>
      <div className="mt-10">
        {children}
      </div>
    </div>
  </section>
)

export function WhatWeDo() {
  const items = [
    { icon: Shield, title: 'Accident Replacement', desc: 'Like-for-like premium vehicles delivered nationwide with zero hassle.' },
    { icon: Handshake, title: 'Claims Management', desc: 'End-to-end third party claims handling and recovery.' },
    { icon: BadgeCheck, title: 'Compliance & Quality', desc: 'Fully insured, FCA-compliant processes and documentation.' },
  ]
  return (
    <Section id="what-we-do" title="What We Do" subtitle="A complete service designed around people and performance." alt>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-[#C6A146]/15 text-[#C6A146] flex items-center justify-center">
              <Icon />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-black">{title}</h3>
            <p className="mt-2 text-black/70">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function OurPeople() {
  const people = [
    { name: 'Amelia Hart', role: 'Head of Operations' },
    { name: 'James Turner', role: 'Claims Lead' },
    { name: 'Priya Patel', role: 'Fleet Manager' },
  ]
  return (
    <Section id="people" title="Our People" subtitle="Experienced, accountable and ready to help.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.name} className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#F5F5F5]" />
            <h3 className="mt-4 text-lg font-semibold text-black">{p.name}</h3>
            <p className="text-black/60">{p.role}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function PersonalAssistance() {
  return (
    <Section id="personal-assistance" title="Personal Assistance" subtitle="Human-first support from first call to final handover." alt>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
          <div className="flex items-center gap-3 text-[#C6A146]"><LifeBuoy /> <span className="font-medium text-black">24/7 Support</span></div>
          <p className="mt-3 text-black/70">We arrange vehicles, recover costs, and keep you informed throughout.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
          <div className="flex items-center gap-3 text-[#C6A146]"><FileText /> <span className="font-medium text-black">Paperwork, Handled</span></div>
          <p className="mt-3 text-black/70">Simple digital forms and e-signature ready agreements.</p>
        </div>
      </div>
    </Section>
  )
}

export function IntroducerSupport() {
  return (
    <Section id="introducer-support" title="Introducer Support" subtitle="Tools and SLAs for bodyshops, brokers and partners.">
      <div className="grid md:grid-cols-3 gap-6">
        {['Fast SLAs','Transparent Tracking','Revenue Share'].map((t) => (
          <div key={t} className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
            <h3 className="text-lg font-semibold text-black">{t}</h3>
            <p className="mt-2 text-black/70">Dependable service that reflects well on your business.</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function InsuranceServices() {
  return (
    <Section id="insurance-services" title="Insurance Services" subtitle="Seamless collaboration with insurers and accident managers." alt>
      <div className="grid md:grid-cols-3 gap-6">
        {['Credit Hire','Credit Repair','FNOL Triage'].map((t) => (
          <div key={t} className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
            <h3 className="text-lg font-semibold text-black">{t}</h3>
            <p className="mt-2 text-black/70">Compliant processes designed to reduce cycle times and leakage.</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function ContactUs() {
  return (
    <Section id="contact" title="Contact Us" subtitle="Were here to help.">
      <form className="grid gap-4 max-w-2xl" onSubmit={(e)=>e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="rounded-xl border px-4 py-3 bg-white" placeholder="Name" required />
          <input className="rounded-xl border px-4 py-3 bg-white" placeholder="Email" type="email" required />
        </div>
        <input className="rounded-xl border px-4 py-3 bg-white" placeholder="Phone" />
        <textarea className="rounded-xl border px-4 py-3 bg-white" placeholder="Message" rows={4} required />
        <button className="w-fit bg-[#C6A146] text-black px-6 py-3 rounded-full font-semibold shadow">Send</button>
      </form>
    </Section>
  )
}
