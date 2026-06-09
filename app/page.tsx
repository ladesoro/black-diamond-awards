"use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Trophy, Upload, LockKeyhole, ArrowRight } from "lucide-react";
import { ProjectDrawer } from "@/components/ProjectDrawer";
import { categories, currentPhase, deliverableTypes, projects } from "@/lib/data";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  const filtered = useMemo(() => projects.filter((p) => {
    const text = [p.title, p.client, p.industry, p.market, p.category, p.status, ...p.tags, ...p.deliverables].join(" ").toLowerCase();
    return text.includes(query.toLowerCase()) && (category === "All" || p.category === category) && (status === "All" || p.status === status);
  }), [query, category, status]);

  const submissionOpen = currentPhase === "submissionOpen";
  const judgingOpen = currentPhase === "judgingOpen";

  return <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,rgba(255,63,95,.28),transparent_28%),linear-gradient(180deg,#090807,#121111_35%,#090807)] text-diamond-bone">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3"><div className="h-8 w-5 rotate-45 bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,.18)]"/><span className="font-display text-xl tracking-tight">BLACK DIAMONDS</span></div>
      <nav className="hidden items-center gap-3 md:flex"><button className="rounded-full px-4 py-2 text-sm text-white/70 hover:text-white">Archive</button><button className="rounded-full px-4 py-2 text-sm text-white/70 hover:text-white">Categories</button><button className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">Admin</button></nav>
    </header>

    <section className="mx-auto max-w-7xl px-6 pb-10 pt-8">
      <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-diamond-coral/40 bg-diamond-coral/10 px-4 py-2 text-xs uppercase tracking-[.24em] text-diamond-blush">CX Awards Archive</p>
          <h1 className="font-display text-6xl uppercase leading-[.88] tracking-[-.05em] text-white md:text-8xl">Black Diamond Awards</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">A searchable gallery of bold CX strategy, design, research, and transformation work — preserving the craft, proof, and people behind Slalom CX’s best work.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button disabled={!submissionOpen} className="inline-flex items-center gap-2 rounded-full bg-diamond-coral px-5 py-3 font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40"><Upload size={18}/> Submit a Project</button>
            <button disabled={!judgingOpen} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:text-white/35"><LockKeyhole size={18}/> Judging Portal</button>
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 shadow-2xl">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-diamond-coral" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[length:36px_36px] opacity-20" />
          <div className="relative z-10 max-w-sm"><p className="text-sm uppercase tracking-[.24em] text-white/50">Current Cycle</p><h2 className="mt-4 text-4xl font-black text-white">2026 submissions are open</h2><p className="mt-4 text-white/65">Launch the form from this site while the submission window is active. When judging opens, this space switches to the judging portal CTA.</p></div>
          <div className="absolute bottom-8 right-10 h-40 w-40 rotate-45 rounded-xl bg-zinc-950 shadow-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-5 flex items-center justify-between"><h2 className="text-2xl font-black uppercase tracking-tight">Featured Winners</h2><button className="inline-flex items-center gap-2 text-sm text-diamond-blush">View all <ArrowRight size={16}/></button></div>
      <div className="grid gap-4 md:grid-cols-3">{projects.filter(p => p.status === "Winner").slice(0,3).map(p => <button key={p.id} onClick={() => setSelected(p)} className={`group min-h-56 rounded-3xl bg-gradient-to-br ${p.accent} p-5 text-left shadow-xl ring-1 ring-white/10 transition hover:-translate-y-1`}><p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">{p.category} Award Winner</p><h3 className="mt-16 text-3xl font-black text-white">{p.client}</h3><p className="mt-2 text-white/75">{p.title}</p></button>)}</div>
    </section>

    <section className="sticky top-0 z-20 border-y border-white/10 bg-diamond-black/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 md:grid-cols-[1fr_auto_auto_auto]">
        <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4"><Search size={18} className="text-white/40"/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by client, tag, deliverable, industry..." className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-white/35"/></label>
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="rounded-full border border-white/10 bg-zinc-950 px-4 text-sm"><option>All</option>{categories.map(c => <option key={c}>{c}</option>)}</select>
        <select value={status} onChange={(e)=>setStatus(e.target.value)} className="rounded-full border border-white/10 bg-zinc-950 px-4 text-sm"><option>All</option><option>Winner</option><option>Finalist</option></select>
        <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 text-sm"><SlidersHorizontal size={16}/> Filters</button>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-end justify-between"><div><h2 className="text-3xl font-black uppercase">Explore the Archive</h2><p className="mt-2 text-white/50">{filtered.length} projects shown · {deliverableTypes.length} deliverable types available</p></div></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(p => <button key={p.id} onClick={() => setSelected(p)} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] text-left shadow-xl transition hover:-translate-y-1 hover:bg-white/[.07]"><div
  className={`h-56 bg-cover bg-center ${!p.thumbnail ? `bg-gradient-to-br ${p.accent}` : ""}`}
  style={p.thumbnail ? { backgroundImage: `url(${p.thumbnail})` } : undefined}
/><div className="p-5"><div className="mb-3 flex items-center justify-between"><span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[.15em] text-white/70">{p.status}</span><Trophy size={16} className="text-diamond-blush"/></div><h3 className="text-2xl font-black text-white">{p.client}</h3><p className="mt-1 text-white/65">{p.title}</p><div className="mt-4 flex flex-wrap gap-2">{p.deliverables.slice(0,2).map(d => <span key={d} className="rounded-full bg-black/35 px-3 py-1 text-xs text-white/60">{d}</span>)}</div></div></button>)}</div>
    </section>
    <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
  </main>;
}
