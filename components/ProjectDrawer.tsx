"use client";
import { X, ExternalLink, Trophy } from "lucide-react";
import { projects } from "@/lib/data";

type Project = typeof projects[number];
export function ProjectDrawer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  return <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm" onClick={onClose}>
    <aside className="h-full w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-diamond-charcoal p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[.18em] text-white/70"><Trophy size={14}/>{project.status}</p>
          <h2 className="text-4xl font-black tracking-tight text-white">{project.client}</h2>
          <p className="mt-2 text-xl text-white/75">{project.title}</p>
        </div>
        <button className="rounded-full border border-white/10 p-2 hover:bg-white/10" onClick={onClose}><X size={20}/></button>
      </div>
      <div className={`mt-6 h-64 rounded-3xl bg-gradient-to-br ${project.accent} shadow-glow`} />
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div><h3 className="text-sm uppercase tracking-[.2em] text-diamond-blush">Overview</h3><p className="mt-3 leading-7 text-white/75">{project.summary}</p></div>
        <div><h3 className="text-sm uppercase tracking-[.2em] text-diamond-blush">Impact</h3><p className="mt-3 leading-7 text-white/75">{project.impact}</p></div>
      </section>
      <section className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-5">
        <h3 className="text-sm uppercase tracking-[.2em] text-white/60">Metadata</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/75">
          <p><span className="block text-white/40">Year</span>{project.year}</p>
          <p><span className="block text-white/40">Industry</span>{project.industry}</p>
          <p><span className="block text-white/40">Market</span>{project.market}</p>
          <p><span className="block text-white/40">Award</span>{project.category}</p>
        </div>
      </section>
      <section className="mt-8"><h3 className="text-sm uppercase tracking-[.2em] text-white/60">Deliverables</h3><div className="mt-4 grid gap-3">{project.deliverables.map((d) => <a key={d} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white hover:bg-white/10" href="#"><span>{d}</span><ExternalLink size={16}/></a>)}</div></section>
      <section className="mt-8"><h3 className="text-sm uppercase tracking-[.2em] text-white/60">Tags</h3><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((t) => <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/75">{t}</span>)}</div></section>
    </aside>
  </div>;
}
