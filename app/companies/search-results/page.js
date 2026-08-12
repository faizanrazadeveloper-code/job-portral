"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import {
  Bell,
  BellRing,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Heart,
  MapPin,
  Search,
  Sparkles,
  Trash2,
  Users,
  X,
} from "lucide-react";

const industries = [
  { label: "Oil, Gas & Energy", count: 156, checked: true },
  { label: "Engineering Services", count: 82 },
  { label: "Construction", count: 54 },
  { label: "Renewables", count: 29 },
  { label: "Utilities", count: 18 },
];

const companySizes = [
  { label: "1 – 50 employees", count: 46 },
  { label: "51 – 200 employees", count: 78 },
  { label: "201 – 1000 employees", count: 92 },
  { label: "1000+ employees", count: 36 },
];

const sortOptions = [
  { label: "Most Relevant", value: "relevant", checked: true },
  { label: "Most Jobs", value: "jobs" },
  { label: "Company Name (A - Z)", value: "az" },
  { label: "Company Name (Z - A)", value: "za" },
];

const topHiring = [
  { name: "Saudi Aramco", jobs: 28, logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]", mark: "✦" },
  { name: "Baker Hughes", jobs: 16, logo: "bg-white border border-[#e2e8f2]", mark: "◆", markColor: "text-red-500" },
  { name: "SLB", jobs: 14, logo: "bg-white border border-[#e2e8f2]", mark: "slb", markColor: "text-blue-600" },
  { name: "NEOM", jobs: 11, logo: "bg-white border border-[#e2e8f2]", mark: "◈", markColor: "text-slate-700" },
  { name: "ACWA Power", jobs: 9, logo: "bg-white border border-[#e2e8f2]", mark: "◍", markColor: "text-emerald-600" },
];

const companies = [
  {
    name: "Saudi Aramco",
    industry: "Oil, Gas & Energy",
    location: "Dhahran, Saudi Arabia",
    size: "10,001+ employees",
    desc: "Saudi Aramco is a leading, fully integrated energy and chemicals company with operations around the world.",
    jobs: 28,
    logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]",
    mark: "✦",
    featured: true,
  },
  {
    name: "Baker Hughes",
    industry: "Oilfield Services",
    location: "Al Khobar, Saudi Arabia",
    size: "5,001 – 10,000 employees",
    desc: "Baker Hughes provides energy technology and services that drive performance for customers worldwide.",
    jobs: 16,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◆",
    markColor: "text-red-500",
  },
  {
    name: "SLB",
    industry: "Oilfield Services",
    location: "Dammam, Saudi Arabia",
    size: "10,001+ employees",
    desc: "SLB (Schlumberger) is a global technology company driving energy innovation for a balanced planet.",
    jobs: 14,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "slb",
    markColor: "text-blue-600",
  },
  {
    name: "NEOM",
    industry: "Construction",
    location: "Tabuk, Saudi Arabia",
    size: "5,001 – 10,000 employees",
    desc: "NEOM is an epicentre of innovation and a destination for global talent and investments.",
    jobs: 11,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◈",
    markColor: "text-slate-700",
  },
  {
    name: "ACWA Power",
    industry: "Utilities",
    location: "Riyadh, Saudi Arabia",
    size: "2,001 – 5,000 employees",
    desc: "ACWA Power develops, invests in and operates power generation and desalinated water production plants.",
    jobs: 9,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◍",
    markColor: "text-emerald-600",
  },
];

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#eef2f7] py-4 first:pt-0 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-[13px] font-bold text-ink-900"
      >
        {title}
        {open ? <ChevronUp className="h-4 w-4 text-ink-500" /> : <ChevronDown className="h-4 w-4 text-ink-500" />}
      </button>
      {open && <div className="mt-3 space-y-2.5">{children}</div>}
    </div>
  );
}

export default function CompanySearchResultsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <header className="sticky top-0 z-30 border-b border-[#e8edf5] bg-white">
        <div className="mx-auto flex min-h-[74px] max-w-[1440px] flex-wrap items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Logo compact />

          <div className="ml-4 flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-3.5">
              <Search className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-full bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                placeholder="Search companies..."
              />
            </div>
            <div className="hidden items-center gap-2 border-l border-[#e2e8f2] px-3.5 sm:flex">
              <MapPin className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-[160px] bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                defaultValue="Saudi Arabia"
              />
            </div>
            <button className="btn-primary h-11 shrink-0 px-5">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="text-ink-500 hover:text-brand-500">
              <Heart className="h-[21px] w-[21px]" />
            </button>
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-2.5">
              <Avatar size={34} />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Job Seeker</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
          <span>Home</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Companies</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-ink-700">Search Results</span>
        </nav>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-[24px] font-extrabold tracking-tight">Company Search Results</h1>
            <p className="mt-2 text-[13px] text-ink-500">
              Showing results for &quot;Oil &amp; Gas&quot; in Saudi Arabia
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[12.5px] text-ink-500">1–20 of 186 companies</span>
            <select className="select w-auto min-w-[170px]" defaultValue="Sort by: Most Relevant">
              <option>Sort by: Most Relevant</option>
              <option>Sort by: Most Jobs</option>
              <option>Sort by: Name</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[260px_minmax(0,1fr)_300px]">
          {/* Filters */}
          <aside className="card h-full p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-[14.5px] font-bold">Filter Companies</h3>
              <button className="text-[12px] font-semibold text-brand-500">Clear All</button>
            </div>

            <FilterSection title="Keywords">
              <div className="relative">
                <input className="input pr-9" placeholder="Company name or industry..." />
                <Search className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
              </div>
            </FilterSection>

            <FilterSection title="Location">
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                <input className="input pl-10 pr-8" defaultValue="Saudi Arabia" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <label className="flex items-center gap-2.5 pt-1 text-[12.5px] text-ink-700">
                <input type="checkbox" className="h-4 w-4 rounded border-[#dfe6f1] accent-brand-500" />
                Work from anywhere
              </label>
            </FilterSection>

            <FilterSection title="Industry">
              {industries.map((f) => (
                <label key={f.label} className="flex items-center justify-between gap-2 text-[12.5px] text-ink-700">
                  <span className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      defaultChecked={f.checked}
                      className="h-4 w-4 rounded border-[#dfe6f1] accent-brand-500"
                    />
                    {f.label}
                  </span>
                  <span className="text-ink-500">{f.count}</span>
                </label>
              ))}
              <button className="pt-1 text-[12px] font-semibold text-brand-500">Show More</button>
            </FilterSection>

            <FilterSection title="Company Size">
              {companySizes.map((f) => (
                <label key={f.label} className="flex items-center justify-between gap-2 text-[12.5px] text-ink-700">
                  <span className="flex items-center gap-2.5">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#dfe6f1] accent-brand-500" />
                    {f.label}
                  </span>
                  <span className="text-ink-500">{f.count}</span>
                </label>
              ))}
            </FilterSection>

            <FilterSection title="Sort By">
              {sortOptions.map((s) => (
                <label key={s.value} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                  <input
                    type="radio"
                    name="sortBy"
                    defaultChecked={s.checked}
                    className="h-4 w-4 accent-brand-500"
                  />
                  {s.label}
                </label>
              ))}
            </FilterSection>

            <button className="btn-ghost mt-4 w-full text-brand-500">
              <Bookmark className="h-4 w-4" /> Save Search
            </button>
          </aside>

          {/* Results */}
          <div className="space-y-4">
            {companies.map((c) => (
              <article
                key={c.name}
                className={`card p-5 sm:p-6 ${c.featured ? "border-brand-200 bg-brand-50/30" : ""}`}
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl text-center leading-none ${c.logo} ${c.markColor || "text-white"} ${c.mark === "slb" ? "text-[13px] font-black italic" : "text-lg font-black"}`}
                  >
                    {c.mark}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 text-[16px] font-extrabold text-ink-900">
                      {c.name}
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-white">
                        <ChevronRight className="h-2.5 w-2.5 rotate-90" />
                      </span>
                    </p>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-ink-500">
                      <span>{c.industry}</span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {c.location}
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" /> {c.size}
                      </span>
                    </div>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-ink-500">{c.desc}</p>

                    <p className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-brand-500">
                      <Sparkles className="h-3.5 w-3.5" /> {c.jobs} Open Jobs
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-row items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-between">
                    {c.featured ? (
                      <span className="chip bg-brand-500 text-white">Featured</span>
                    ) : (
                      <span />
                    )}
                    <button className={`h-10 px-5 ${c.featured ? "btn-primary" : "btn-ghost"}`}>
                      View Company
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <button className="btn-ghost h-9 px-3 text-[12.5px]" disabled>
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  className={`grid h-9 w-9 place-items-center rounded-lg text-[12.5px] font-semibold ${
                    p === 1 ? "bg-brand-500 text-white" : "border border-[#e2e8f2] text-ink-700 hover:bg-slate-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="px-1 text-ink-500">...</span>
              <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-[12.5px] font-semibold text-ink-700 hover:bg-slate-50">
                10
              </button>
              <button className="btn-ghost h-9 px-3 text-[12.5px]">
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right rail */}
          <aside className="space-y-5">
            <section className="card p-5 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-50">
                <BellRing className="h-5 w-5 text-brand-500" />
              </span>
              <h3 className="mt-3 text-[14.5px] font-bold">Get company updates</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                Create an alert and get notified when new jobs are posted by these companies.
              </p>
              <button className="btn-ghost mt-4 w-full">Create Company Alert</button>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Search Summary</h3>
              <dl className="mt-3.5 space-y-3 text-[12.5px]">
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Keywords</dt>
                  <dd className="text-right font-semibold text-ink-900">Oil &amp; Gas</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Location</dt>
                  <dd className="text-right font-semibold text-ink-900">Saudi Arabia</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Industry</dt>
                  <dd className="text-right font-semibold text-ink-900">Oil, Gas &amp; Energy</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Company Size</dt>
                  <dd className="text-right font-semibold text-ink-900">All Sizes</dd>
                </div>
              </dl>
              <button className="mt-3.5 flex items-center gap-1.5 text-[12px] font-semibold text-brand-500">
                <Trash2 className="h-3.5 w-3.5" /> Clear All
              </button>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Top Hiring Companies</h3>
              <div className="mt-3.5 space-y-3">
                {topHiring.map((c) => (
                  <a key={c.name} href="#" className="flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-center leading-none ${c.logo} ${c.markColor || "text-white"} ${c.mark === "slb" ? "text-[9px] font-black italic" : "text-[13px] font-black"}`}
                    >
                      {c.mark}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[12.5px] font-semibold text-ink-900">{c.name}</span>
                      <span className="block text-[11px] text-ink-500">{c.jobs} Jobs</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-ink-500" />
                  </a>
                ))}
              </div>
              <button className="mt-3.5 text-[12px] font-semibold text-brand-500">View All Companies</button>
            </section>

            <div className="rounded-lg bg-amber-50 p-4 text-[11.5px] leading-relaxed text-amber-800">
              <b className="text-amber-900">Tip:</b> Save your search to get notified about new
              companies that match your criteria.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
