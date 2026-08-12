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
  Clock,
  Heart,
  MapPin,
  Search,
  Trash2,
  X,
} from "lucide-react";

const filters = {
  experience: [
    { label: "Entry Level (0-2 Years)", count: 18 },
    { label: "Mid Level (2-5 Years)", count: 126, checked: true },
    { label: "Senior Level (5-10 Years)", count: 82 },
    { label: "Expert Level (10+ Years)", count: 22 },
  ],
  jobType: [
    { label: "Full-time", count: 210, checked: true },
    { label: "Part-time", count: 14 },
    { label: "Contract", count: 16 },
    { label: "Temporary", count: 8 },
    { label: "Internship", count: 0 },
  ],
};

const datePosted = [
  { label: "Any time", value: "any" },
  { label: "Last 24 hours", value: "24h", count: 6 },
  { label: "Last 7 days", value: "7d", count: 34 },
  { label: "Last 30 days", value: "30d", count: 128 },
];

const skillsInDemand = [
  { label: "Drilling Operations", count: 142 },
  { label: "Well Planning", count: 98 },
  { label: "Mud Engineering", count: 87 },
  { label: "Well Control", count: 76 },
  { label: "Data Analysis", count: 64 },
];

const companiesHiring = [
  { name: "Saudi Aramco", jobs: 28, mark: "✦", logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]" },
  { name: "Baker Hughes", jobs: 16, mark: "◆", logo: "bg-white border border-[#e2e8f2] text-red-500" },
  { name: "SLB", jobs: 14, mark: "slb", logo: "bg-white border border-[#e2e8f2]" },
];

const jobs = [
  {
    company: "Saudi Aramco",
    industry: "Energy & Utilities",
    logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]",
    mark: "✦",
    title: "Senior Drilling Engineer",
    level: "Mid Level",
    location: "Dhahran, Saudi Arabia",
    posted: "2 days ago",
    desc: "Lead drilling operations and ensure safe, efficient and cost-effective drilling activities across onshore and offshore projects.",
    tags: ["Full-time", "5-8 Years", "Engineering"],
    featured: true,
  },
  {
    company: "Baker Hughes",
    industry: "Oil & Gas",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◆",
    markColor: "text-red-500",
    title: "Drilling Engineer",
    level: "Mid Level",
    location: "Al Khobar, Saudi Arabia",
    posted: "3 days ago",
    desc: "Plan and execute drilling operations while optimizing performance and maintaining compliance with safety standards.",
    tags: ["Full-time", "3-6 Years", "Drilling"],
  },
  {
    company: "SLB",
    industry: "Oilfield Services",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "slb",
    markColor: "text-blue-600",
    title: "Staff Drilling Engineer",
    level: "Senior Level",
    location: "Dammam, Saudi Arabia",
    posted: "5 days ago",
    desc: "Provide technical expertise in drilling engineering and support complex well construction projects.",
    tags: ["Full-time", "6-10 Years", "Engineering"],
  },
  {
    company: "PETROJET",
    industry: "Energy Services",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◍",
    markColor: "text-emerald-600",
    title: "Drilling Engineer",
    level: "Mid Level",
    location: "Jubail, Saudi Arabia",
    posted: "1 week ago",
    desc: "Monitor drilling activities and coordinate with cross-functional teams to achieve operational goals.",
    tags: ["Full-time", "2-5 Years", "Operations"],
  },
  {
    company: "ADNOC Group",
    industry: "Energy & Utilities",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "flame",
    markColor: "text-brand-500",
    title: "Drilling Engineer",
    level: "Senior Level",
    location: "Riyadh, Saudi Arabia",
    posted: "1 week ago",
    desc: "Oversee drilling programs and ensure alignment with project timelines and budget.",
    tags: ["Full-time", "5-10 Years", "Drilling"],
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

export default function JobSearchResultsPage() {
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
                defaultValue="Drilling Engineer"
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

          <button className="hidden items-center gap-1 text-[13px] font-semibold text-brand-500 lg:flex">
            Advanced Search <ChevronDown className="h-4 w-4" />
          </button>

          <div className="ml-auto flex items-center gap-4">
            <button className="text-ink-500 hover:text-brand-500">
              <Heart className="h-[21px] w-[21px]" />
            </button>
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                2
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
          <span>Jobs</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-ink-700">Search Results</span>
        </nav>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-[24px] font-extrabold tracking-tight">Job Search Results</h1>
            <p className="mt-2 text-[13px] text-ink-500">
              Showing results for &quot;Drilling Engineer&quot; in Saudi Arabia
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[12.5px] text-ink-500">1–20 of 248 jobs</span>
            <select className="select w-auto min-w-[170px]" defaultValue="Sort by: Most Relevant">
              <option>Sort by: Most Relevant</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Salary</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[260px_minmax(0,1fr)_300px]">
          {/* Filters */}
          <aside className="card h-fit p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-[14.5px] font-bold">Filter Jobs</h3>
              <button className="text-[12px] font-semibold text-brand-500">Clear All</button>
            </div>

            <FilterSection title="Keywords">
              <input className="input" placeholder="Job title, skills, or company" />
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
                Work from home
              </label>
            </FilterSection>

            <FilterSection title="Experience Level">
              {filters.experience.map((f) => (
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
            </FilterSection>

            <FilterSection title="Job Type">
              {filters.jobType.map((f) => (
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
            </FilterSection>

            <FilterSection title="Date Posted">
              {datePosted.map((d) => (
                <label key={d.value} className="flex items-center justify-between gap-2 text-[12.5px] text-ink-700">
                  <span className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="datePosted"
                      defaultChecked={d.value === "any"}
                      className="h-4 w-4 accent-brand-500"
                    />
                    {d.label}
                  </span>
                  {d.count && <span className="text-ink-500">{d.count}</span>}
                </label>
              ))}
            </FilterSection>

            <button className="btn-ghost mt-4 w-full">Show More Filters</button>
            <button className="btn-ghost mt-2.5 w-full text-brand-500">
              <Bookmark className="h-4 w-4" /> Save Search
            </button>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="chip flex items-center gap-1.5 bg-brand-50 text-brand-600">
                Drilling Engineer
                <button aria-label="Remove filter">
                  <X className="h-3 w-3" />
                </button>
              </span>
              <span className="chip flex items-center gap-1.5 bg-brand-50 text-brand-600">
                Saudi Arabia
                <button aria-label="Remove filter">
                  <X className="h-3 w-3" />
                </button>
              </span>
              <button className="btn-ghost h-8 gap-1.5 px-3 text-[12px]">
                <Trash2 className="h-3.5 w-3.5" /> Clear All
              </button>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <article
                  key={job.title + job.company}
                  className={`card p-5 sm:p-6 ${job.featured ? "border-brand-200 bg-brand-50/30" : ""}`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl text-lg font-black ${job.logo} ${job.markColor || "text-white"}`}
                    >
                      {job.mark === "flame" ? "🔥" : job.mark === "slb" ? "slb" : job.mark}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="flex items-center gap-1.5 text-[13.5px] font-bold text-ink-900">
                            {job.company}
                            <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-white">
                              <ChevronRight className="h-2.5 w-2.5 rotate-90" />
                            </span>
                          </p>
                          <p className="text-[11.5px] text-ink-500">{job.industry}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {job.featured && <span className="chip bg-brand-500 text-white">Featured</span>}
                        </div>
                      </div>

                      <h3 className="mt-2.5 text-[16px] font-extrabold text-ink-900">{job.title}</h3>

                      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-ink-500">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> {job.level}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" /> {job.location}
                        </span>
                      </div>

                      <p className="mt-2.5 text-[13px] leading-relaxed text-ink-500">{job.desc}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <span key={t} className="chip bg-[#f4f7fd] text-ink-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-row items-center gap-2.5 sm:flex-col sm:items-end">
                      <div className="order-2 flex items-center gap-2 sm:order-1">
                        <span className="text-[11.5px] text-ink-500">{job.posted}</span>
                        <button className="text-ink-500 hover:text-brand-500" aria-label="Save job">
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                      <button className="btn-primary order-1 h-10 px-5 sm:order-2">View Job</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <button className="btn-ghost h-9 px-3 text-[12.5px]">
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
                13
              </button>
              <button className="btn-ghost h-9 px-3 text-[12.5px]">
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right rail */}
          <aside className="space-y-5">
            <section className="card p-5">
              <h3 className="flex items-center gap-2 text-[14.5px] font-bold">
                <BellRing className="h-4 w-4 text-brand-500" /> Create Job Alert
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                Get notified when new jobs match your search criteria.
              </p>
              <button className="btn-ghost mt-4 w-full">Create Alert</button>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Search Summary</h3>
              <dl className="mt-3.5 space-y-3 text-[12.5px]">
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Keywords</dt>
                  <dd className="text-right font-semibold text-ink-900">Drilling Engineer</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Location</dt>
                  <dd className="text-right font-semibold text-ink-900">Saudi Arabia</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Experience Level</dt>
                  <dd className="text-right font-semibold text-ink-900">Mid Level, Senior Level</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-ink-500">Job Type</dt>
                  <dd className="text-right font-semibold text-ink-900">Full-time</dd>
                </div>
              </dl>
              <button className="mt-3.5 flex items-center gap-1.5 text-[12px] font-semibold text-brand-500">
                <Trash2 className="h-3.5 w-3.5" /> Clear All
              </button>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Top Skills in Demand</h3>
              <div className="mt-3.5 space-y-2.5">
                {skillsInDemand.map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-[12.5px]">
                    <span className="text-ink-700">{s.label}</span>
                    <span className="chip bg-brand-50 text-brand-600">{s.count}</span>
                  </div>
                ))}
              </div>
              <button className="mt-3.5 text-[12px] font-semibold text-brand-500">View More Skills</button>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Companies Hiring</h3>
              <div className="mt-3.5 space-y-3">
                {companiesHiring.map((c) => (
                  <a key={c.name} href="#" className="flex items-center gap-3">
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[13px] font-black text-white ${c.logo}`}>
                      {c.mark === "slb" ? <span className="text-[10px] text-blue-600">slb</span> : c.mark}
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
          </aside>
        </div>
      </div>
    </div>
  );
}
