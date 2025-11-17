import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(() => { (async () => { const r = await fetch(`${baseUrl}/api/testimonials`); const d = await r.json(); setItems(d) })() }, [])

  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">Testimonials</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(t => (
            <div key={t.id} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="text-black/80">“{t.content}”</p>
              <div className="mt-4 text-sm text-black/60">{t.name} {t.role ? `• ${t.role}` : ''}</div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-black/60">Testimonials will appear here as they are added.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export function News() {
  const [posts, setPosts] = useState([])
  useEffect(() => { (async () => { const r = await fetch(`${baseUrl}/api/posts`); const d = await r.json(); setPosts(d) })() }, [])

  return (
    <section id="news" className="bg-[#F5F5F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">News & Blog</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm">
              {p.image && <div className="aspect-[16/9]"><img src={p.image} alt={p.title} className="w-full h-full object-cover" /></div>}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-black">{p.title}</h3>
                {p.excerpt && <p className="mt-2 text-black/70">{p.excerpt}</p>}
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-black/60">Latest updates will appear here.</div>
          )}
        </div>
      </div>
    </section>
  )
}
