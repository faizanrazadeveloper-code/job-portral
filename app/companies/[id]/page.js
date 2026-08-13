"use client";

import { useState } from "react";
import {
  MarketingTopStrip,
  MarketingHeader,
  DarkFooter,
  Twitter,
  Facebook,
  Youtube,
} from "@/components/Shared";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  Globe,
  Heart,
  Layers,
  Link2,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const company = {
  name: "Saudi Aramco",
  industry: "Oil & Gas Exploration & Production",
  location: "Dhahran, Saudi Arabia",
  website: "www.aramco.com",
  phone: "+966 13 874 1111",
  founded: "1933",
  size: "10,001+ employees",
  type: "Public Company",
  tagline:
    "Saudi Aramco is a global integrated energy and chemicals company. We are one of the world's leading producers of energy and chemicals, and a leading provider of energy-enhancing products and services.",
  about:
    "Saudi Aramco is a global integrated energy and chemicals company. We are one of the world's leading producers of energy and chemicals, and a leading provider of energy-enhancing products and services. Our team is dedicated to powering the global economy while minimizing our environmental impact.",
  highlights: [
    { icon: TrendingUp, text: "Leading energy producer and exporter" },
    { icon: ShieldCheck, text: "Committed to innovation and sustainability" },
    { icon: Users, text: "Powering communities and economies" },
  ],
  perks: [
    "Competitive salary & benefits",
    "Career growth & development",
    "Global opportunities",
    "Innovative & collaborative culture",
  ],
};

const jobs = [
  {
    title: "Senior Drilling Engineer",
    icon: Users,
    location: "Dhahran, Saudi Arabia",
    type: "Full-time",
    posted: "Posted 2 days ago",
    tags: ["Drilling Engineering", "Well Planning", "HSE"],
  },
  {
    title: "Process Safety Engineer",
    icon: Building2,
    location: "Dhahran, Saudi Arabia",
    type: "Full-time",
    posted: "Posted 3 days ago",
    tags: ["Process Safety", "HAZOP", "Risk Assessment"],
  },
  {
    title: "Reservoir Engineer",
    icon: TrendingUp,
    location: "Dhahran, Saudi Arabia",
    type: "Full-time",
    posted: "Posted 5 days ago",
    tags: ["Reservoir Modeling", "Simulation", "Petroleum Engineering"],
  },
];

const tabs = [
  { label: "Overview", icon: MapPin },
  { label: "Jobs (24)", icon: Calendar },
  { label: "About Us", icon: ClipboardList },
  { label: "Benefits", icon: Heart },
  { label: "Reviews (128)", icon: Star },
];

export default function CompanyDetailsPage() {
  const [tab, setTab] = useState(0);
  const [following, setFollowing] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <MarketingTopStrip />
      <MarketingHeader active="Companies" />

      <div className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
          <span>Home</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Companies</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-ink-900">{company.name}</span>
        </nav>
      </div>

      {/* Banner */}
      <div className="mx-auto mt-4 max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="ph ph-city relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-ink-900/40 to-transparent" />
          <div className="relative flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border-4 border-white/90 bg-gradient-to-br from-[#8fd14f] to-[#0f9d58] text-3xl font-black text-white shadow-card">
                  ✦
                </span>
                <div className="text-white">
                  <p className="flex items-center gap-2 text-[24px] font-extrabold">
                    {company.name}
                    <BadgeCheck className="h-5 w-5 fill-emerald-500 text-white" />
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-white/80">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {company.industry}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {company.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5" /> {company.website}
                    </span>
                  </div>
                  <p className="mt-3 max-w-[620px] text-[12.5px] leading-relaxed text-white/85">
                    {company.tagline}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <button
                  onClick={() => setFollowing((f) => !f)}
                  className="btn-ghost bg-white/95"
                >
                  <Heart className={`h-4 w-4 ${following ? "fill-red-500 text-red-500" : ""}`} />
                  {following ? "Following" : "Follow Company"}
                </button>
                <button className="btn-primary">
                  View Website <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5 sm:grid-cols-4">
              {[
                { label: "Founded", value: company.founded, icon: Calendar },
                { label: "Company Size", value: company.size, icon: Users },
                { label: "Industry", value: "Oil & Gas", icon: Layers },
                { label: "Headquarters", value: company.location, icon: MapPin },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 text-white">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] text-white/70">{s.label}</span>
                    <span className="block text-[13px] font-bold">{s.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6 flex gap-6 overflow-x-auto border-b border-[#e8edf5]">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setTab(i)}
              className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 text-[13.5px] font-semibold transition ${
                i === tab
                  ? "border-brand-500 text-brand-500"
                  : "border-transparent text-ink-500 hover:text-brand-500"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* Main column */}
          <div className="space-y-5">
            {tab === 0 && (
              <>
                <section className="card p-5 sm:p-6">
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50">
                      <Building2 className="h-5 w-5 text-brand-500" />
                    </span>
                    <div>
                      <h2 className="text-[16.5px] font-extrabold">About {company.name}</h2>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-ink-500">
                        {company.about}
                      </p>

                      <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {company.highlights.map((h) => (
                          <div key={h.text} className="flex items-center gap-2.5">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f4f7fd]">
                              <h.icon className="h-4 w-4 text-brand-500" />
                            </span>
                            <span className="text-[12.5px] text-ink-700">{h.text}</span>
                          </div>
                        ))}
                      </div>

                      {showMore && (
                        <p className="mt-4 text-[13px] leading-relaxed text-ink-500">
                          Saudi Aramco operates across the full hydrocarbon value chain, from
                          exploration and production through refining, chemicals, and global
                          distribution, investing heavily in R&amp;D to reduce carbon intensity
                          across operations.
                        </p>
                      )}

                      <button
                        onClick={() => setShowMore((s) => !s)}
                        className="mt-3 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500"
                      >
                        {showMore ? "Show Less" : "Show More"}
                        <ChevronRight
                          className={`h-3.5 w-3.5 transition-transform ${
                            showMore ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </section>

                <section className="card p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-[16.5px] font-extrabold">Open Jobs (24)</h2>
                    <a href="#" className="flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                      View All Jobs <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="divide-y divide-[#eef2f7]">
                    {jobs.map((job) => (
                      <div key={job.title} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f4f7fd]">
                          <job.icon className="h-5 w-5 text-brand-500" />
                        </span>
                        <div className="flex-1">
                          <p className="text-[14px] font-bold text-ink-900">{job.title}</p>
                          <p className="mt-1 text-[12px] text-ink-500">
                            {job.location} &nbsp;·&nbsp; {job.type} &nbsp;·&nbsp; {job.posted}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {job.tags.map((t) => (
                              <span key={t} className="chip bg-[#f4f7fd] text-ink-700">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="btn-ghost h-10 shrink-0 px-5">View Job</button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <a href="#" className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                      View All Jobs <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </section>
              </>
            )}

            {tab > 0 && (
              <section className="card grid min-h-[420px] place-items-center p-6 text-center">
                <div>
                  <h2 className="text-[16.5px] font-extrabold">{tabs[tab].label}</h2>
                  <p className="mt-2 text-[13px] text-ink-500">This tab will be designed next.</p>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Company Details</h3>
              <ul className="mt-4 space-y-3.5">
                {[
                  { label: "Industry", value: company.industry, icon: Briefcase },
                  { label: "Company Size", value: company.size, icon: Users },
                  { label: "Founded", value: company.founded, icon: Calendar },
                  { label: "Headquarters", value: company.location, icon: MapPin },
                  { label: "Website", value: company.website, icon: Globe },
                  { label: "Phone", value: company.phone, icon: Phone },
                  { label: "Type", value: company.type, icon: Sparkles },
                ].map((d) => (
                  <li key={d.label} className="flex items-start gap-2.5">
                    <d.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                    <span>
                      <span className="block text-[11.5px] text-ink-500">{d.label}</span>
                      <span className="block text-[12.5px] font-semibold text-ink-900">
                        {d.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Follow Us</h3>
              <div className="mt-4 flex gap-2.5">
                {[
                  { icon: Link2, bg: "bg-ink-500" },
                  { icon: Twitter, bg: "bg-[#1da1f2]" },
                  { icon: Facebook, bg: "bg-[#1877f2]" },
                  { icon: Youtube, bg: "bg-[#ff0000]" },
                  { icon: Link2, bg: "bg-slate-300" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`grid h-9 w-9 place-items-center rounded-full text-white ${s.bg}`}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Why Work With Us</h3>
              <ul className="mt-4 space-y-3">
                {company.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#f4f7fd]">
                      <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Company Location</h3>
              <div className="mt-4 grid h-[130px] place-items-center rounded-xl bg-[#eef2f7]">
                <MapPin className="h-6 w-6 text-ink-500" />
              </div>
              <p className="mt-3 text-[12.5px] font-semibold text-ink-900">{company.location}</p>
              <a href="#" className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-500">
                Get Directions <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </section>
          </aside>
        </div>
      </main>

      <DarkFooter />
    </div>
  );
}
