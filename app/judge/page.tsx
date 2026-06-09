"use client";
import { useState } from "react";
import { judges, projects } from "@/lib/data";
import { CheckCircle2, LockKeyhole } from "lucide-react";

export default function JudgePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [judgeName, setJudgeName] = useState(judges[0].name);
  const judge = judges.find(j => j.name === judgeName)!;
  const assigned = projects.filter(p => judge.assigned.includes(p.id));

  if (!unlocked) return <main className="flex min-h-screen items-center justify-center bg-diamond-black p-6 text-white"><div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"><LockKeyhole className="mb-4 text-diamond-blush"/><h1 className="text-3xl font-black">Judging Portal</h1><p className="mt-3 text-white/60">POC password: <span className="text-white">diamond</span></p><input className="mt-6 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none" placeholder="Enter password" onChange={(e)=> setUnlocked(e.target.value === "diamond")}/></div></main>;

  return <main className="min-h-screen bg-diamond-black p-6 text-white"><section className="mx-auto max-w-5xl"><p className="text-diamond-blush">Black Diamonds CX Awards</p><h1 className="mt-2 text-5xl font-black">Judging Portal</h1><div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5"><label className="text-sm text-white/50">Select judge</label><select value={judgeName} onChange={(e)=>setJudgeName(e.target.value)} className="mt-2 w-full rounded-2xl bg-black p-3">{judges.map(j => <option key={j.name}>{j.name}</option>)}</select></div><div className="mt-8 grid gap-4">{assigned.map(p => { const done = judge.completed.includes(p.id); return <article key={p.id} className="rounded-3xl border border-white/10 bg-white/5 p-5"><div className="flex items-start justify-between"><div><p className="text-sm uppercase tracking-[.2em] text-white/40">{p.category}</p><h2 className="mt-2 text-2xl font-black">{p.client}</h2><p className="text-white/60">{p.title}</p></div>{done && <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-200"><CheckCircle2 size={16}/> Complete</span>}</div><div className="mt-5 grid gap-3 md:grid-cols-4"><input className="rounded-xl bg-black p-3" placeholder="Strategy 1-5"/><input className="rounded-xl bg-black p-3" placeholder="Craft 1-5"/><input className="rounded-xl bg-black p-3" placeholder="Impact 1-5"/><button className="rounded-xl bg-diamond-coral p-3 font-semibold">Save Score</button></div></article>})}</div></section></main>;
}
