import { useEffect, useState, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Fleet() {
  const [vehicles, setVehicles] = useState([])
  const [q, setQ] = useState('')
  const [filters, setFilters] = useState({ type: '', fuel: '', transmission: '', seats: '' })

  useEffect(() => { fetchFleet() }, [])

  async function fetchFleet() {
    const params = new URLSearchParams()
    if (q) params.append('q', q)
    Object.entries(filters).forEach(([k, v]) => { if (v) params.append(k, v) })
    const res = await fetch(`${baseUrl}/api/fleet?${params.toString()}`)
    const data = await res.json()
    setVehicles(data)
  }

  useEffect(() => { const id = setTimeout(fetchFleet, 300); return () => clearTimeout(id) }, [q, filters])

  const unique = useMemo(() => {
    return {
      types: Array.from(new Set(vehicles.map(v => v.type))).filter(Boolean),
      fuels: Array.from(new Set(vehicles.map(v => v.fuel))).filter(Boolean),
      transmissions: Array.from(new Set(vehicles.map(v => v.transmission))).filter(Boolean),
      seats: Array.from(new Set(vehicles.map(v => v.seats))).filter(Boolean).sort((a,b)=>a-b),
    }
  }, [vehicles])

  return (
    <section id="fleet" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Our Fleet</h2>
            <p className="mt-2 text-black/70">Search and filter to find your like-for-like replacement.</p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" size={18} />
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search make or model" className="w-full pl-9 pr-3 py-2 rounded-xl border bg-white" />
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-4 gap-3">
          <select value={filters.type} onChange={e=>setFilters(s=>({...s,type:e.target.value}))} className="rounded-xl border px-3 py-2 bg-white">
            <option value="">All Types</option>
            {unique.types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={filters.fuel} onChange={e=>setFilters(s=>({...s,fuel:e.target.value}))} className="rounded-xl border px-3 py-2 bg-white">
            <option value="">All Fuel</option>
            {unique.fuels.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={filters.transmission} onChange={e=>setFilters(s=>({...s,transmission:e.target.value}))} className="rounded-xl border px-3 py-2 bg-white">
            <option value="">All Transmissions</option>
            {unique.transmissions.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={filters.seats} onChange={e=>setFilters(s=>({...s,seats:e.target.value}))} className="rounded-xl border px-3 py-2 bg-white">
            <option value="">Any Seats</option>
            {unique.seats.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map(v => (
            <div key={v.id} className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/9] bg-[#F5F5F5]">
                {v.image ? (
                  <img src={v.image} alt={`${v.make} ${v.model}`} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{v.make} {v.model}</h3>
                  <span className="text-[#C6A146] font-semibold">£{v.daily_rate}/day</span>
                </div>
                <p className="text-sm text-black/60 mt-1">{v.year} • {v.type} • {v.fuel} • {v.transmission} • {v.seats} seats</p>
              </div>
            </div>
          ))}
          {vehicles.length === 0 && (
            <div className="col-span-full text-center text-black/60">No vehicles found. Try adjusting filters.</div>
          )}
        </div>
      </div>
    </section>
  )
}
