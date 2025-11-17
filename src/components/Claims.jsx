import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Claims() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/claim`, { method: 'POST', body: data })
      if (!res.ok) throw new Error('Submission failed')
      const json = await res.json()
      setStatus(`Submitted. Reference: ${json.id}`)
      form.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="claim" className="bg-[#F5F5F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">Make a Claim</h2>
        <p className="mt-2 text-black/70 max-w-2xl">Upload incident details and supporting documents. Our team will respond within one business hour.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-3xl bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="full_name" placeholder="Full name" className="rounded-xl border px-4 py-3 bg-white" required />
            <input name="email" type="email" placeholder="Email" className="rounded-xl border px-4 py-3 bg-white" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone" className="rounded-xl border px-4 py-3 bg-white" required />
            <input name="policy_number" placeholder="Policy Number (optional)" className="rounded-xl border px-4 py-3 bg-white" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="vehicle_reg" placeholder="Vehicle Registration" className="rounded-xl border px-4 py-3 bg-white" />
            <input name="incident_date" type="date" placeholder="Incident Date" className="rounded-xl border px-4 py-3 bg-white" required />
          </div>
          <input name="incident_location" placeholder="Incident Location" className="rounded-xl border px-4 py-3 bg-white" required />
          <textarea name="description" placeholder="Describe what happened" rows={4} className="rounded-xl border px-4 py-3 bg-white" required />
          <div>
            <label className="block text-sm font-medium text-black mb-2">Upload files (photos, reports)</label>
            <input name="files" type="file" multiple className="block w-full" />
          </div>
          <button className="w-fit bg-[#C6A146] text-black px-6 py-3 rounded-full font-semibold shadow">Submit Claim</button>
          {status && <p className="text-sm text-black/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}
