"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  BadgeCheck,
  Bell,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Download,
  Grid2X2,
  Heart,
  HelpCircle,
  Home,
  LayoutGrid,
  List,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Scale,
  Search,
  Settings,
  Trash2,
  User,
  Users,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: Home },
      { label: "Profile", icon: User },
      { label: "Applications", icon: Briefcase },
      { label: "Saved Jobs", icon: Heart, active: true },
      { label: "Job Alerts", icon: Bell },
    ],
  },
  {
    section: "EXPLORE",
    items: [
      { label: "Browse Jobs", icon: Search },
      { label: "Companies", icon: Building2 },
      { label: "Categories", icon: Grid2X2 },
      { label: "Resume Search", icon: Search },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Account Settings", icon: Settings },
      { label: "Help & Support", icon: HelpCircle },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const savedJobs = [
  {
    title: "Senior Drilling Engineer",
    badge: "New",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    type: "Full-time",
    salary: "SAR 18,000 - 25,000",
    exp: "5-8 Years",
    posted: "Posted 2 days ago",
    saved: "Saved 2 days ago",
    tags: ["Drilling Engineering", "Well Planning", "HSE"],
    logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]",
    mark: "✦",
  },
  {
    title: "Process Safety Engineer",
    company: "Wintershall Dea",
    location: "The Hague, Netherlands",
    type: "Full-time",
    salary: "€70,000 - 90,000",
    exp: "3-6 Years",
    posted: "Posted 5 days ago",
    saved: "Saved 5 days ago",
    tags: ["Process Safety", "HAZOP", "Risk Assessment"],
    logo: "bg-white border border-[#e2e8f2]",
    textLogo: "wintershall dea",
    textLogoColor: "text-[#0a3a66]",
  },
  {
    title: "Reservoir Engineer",
    company: "Schlumberger",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "AED 22,000 - 28,000",
    exp: "4-7 Years",
    posted: "Posted 1 week ago",
    saved: "Saved 1 week ago",
    tags: ["Reservoir Modeling", "Simulation", "Petroleum Engineering"],
    logo: "bg-white border border-[#e2e8f2]",
    textLogo: "Schlumberger",
    textLogoColor: "text-[#0a3a66] italic font-serif",
  },
  {
    title: "Project Manager",
    company: "ExxonMobil",
    location: "Houston, USA",
    type: "Full-time",
    salary: "$110,000 - 130,000",
    exp: "7-10 Years",
    posted: "Posted 1 week ago",
    saved: "Saved 1 week ago",
    tags: ["Project Management", "Oil & Gas", "Leadership"],
    logo: "bg-white border border-[#e2e8f2]",
    textLogo: "ExxonMobil",
    textLogoColor: "text-[#e11d48] font-serif",
  },
  {
    title: "Mechanical Engineer",
    company: "TotalEnergies",
    location: "Paris, France",
    type: "Full-time",
    salary: "€60,000 - 75,000",
    exp: "3-5 Years",
    posted: "Posted 2 weeks ago",
    saved: "Saved 2 weeks ago",
    tags: ["Mechanical", "Rotating Equipment", "Maintenance"],
    logo: "bg-white border border-[#e2e8f2]",
    mark: "✺",
    markColor: "text-[#e2231a]",
    textLogo: "TOTAL",
    textLogoColor: "text-[#e2231a]",
  },
];

const statusTabs = [
  { label: "All Saved Jobs", count: 12 },
  { label: "Applied", count: 3 },
  { label: "Expired", count: 1 },
];

function SidebarContent() {
  return (
    <>
      <div className="flex h-[74px] items-center border-b border-[#eef2f7] px-5">
        <Logo compact />
      </div>

      <nav className="mt-4 flex-1 space-y-5 overflow-y-auto px-3">
        {sideNav.map((section) => (
          <div key={section.section}>
            <p className="px-3.5 text-[11px] font-bold tracking-wide text-ink-500">
              {section.section}
            </p>
            <div className="mt-1.5 space-y-1">
              {section.items.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`nav-item ${item.active ? "nav-item-active" : ""} ${
                    item.danger ? "text-red-600 hover:bg-red-50 hover:text-red-600" : ""
                  }`}
                >
                  <item.icon className="h-[18px] w-[18px]" />
                  <span className="flex-1">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
}

export default function SavedJobsPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [view, setView] = useState("list");

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] flex-col border-r border-[#e8edf5] bg-white lg:flex">
        <SidebarContent />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink-900/40" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-[280px] flex-col bg-white">
            <button
              className="absolute right-4 top-6 text-ink-500"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="lg:pl-[240px]">
        <header className="sticky top-0 z-30 flex min-h-[74px] flex-wrap items-center gap-4 border-b border-[#e8edf5] bg-white px-4 py-3 sm:px-6">
          <BrandButton onClick={() => setOpen(true)} />

          <div className="order-2 flex w-full min-w-0 basis-full items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5 lg:order-1 lg:flex-1">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-3.5">
              <Search className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-full bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                placeholder="Search jobs, companies..."
              />
            </div>
            <div className="hidden items-center gap-2 border-l border-[#e2e8f2] px-3.5 sm:flex">
              <MapPin className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-[140px] bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                defaultValue="Saudi Arabia"
              />
            </div>
            <button className="btn-primary h-11 shrink-0 px-5">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>

          <TopbarActions
            heart
            heartCount={12}
            bellCount={3}
            message
            avatar={
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
            }
            name="John Smith"
            role="Job Seeker"
          />
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Home</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Saved Jobs</span>
          </nav>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="flex items-center gap-2.5 text-[24px] font-extrabold tracking-tight">
                <Heart className="h-6 w-6 fill-brand-500 text-brand-500" /> Saved Jobs
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Jobs you have saved for later. You can compare and apply anytime.
              </p>
            </div>
            <div className="flex flex-wrap shrink-0 items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-[12.5px] text-ink-500">Sort by</span>
                <select className="select w-full sm:w-auto sm:min-w-[160px]" defaultValue="Recently Saved">
                  <option>Recently Saved</option>
                  <option>Salary: High to Low</option>
                  <option>Job Title (A-Z)</option>
                </select>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-[#e2e8f2] bg-white p-1">
                <button
                  onClick={() => setView("list")}
                  className={`grid h-8 w-8 place-items-center rounded-md ${
                    view === "list" ? "bg-brand-50 text-brand-500" : "text-ink-500"
                  }`}
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setView("grid")}
                  className={`grid h-8 w-8 place-items-center rounded-md ${
                    view === "grid" ? "bg-brand-50 text-brand-500" : "text-ink-500"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Status tabs */}
          <div className="mt-5 flex gap-6 overflow-x-auto border-b border-[#eef2f7]">
            {statusTabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setTab(i)}
                className={`whitespace-nowrap border-b-2 pb-3 text-[13.5px] font-semibold transition ${
                  i === tab
                    ? "border-brand-500 text-brand-500"
                    : "border-transparent text-ink-500 hover:text-brand-500"
                }`}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Job list */}
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <article key={job.title} className="card p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span
                      className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl text-lg font-black ${job.logo} ${job.markColor || "text-white"}`}
                    >
                      {job.mark ? (
                        job.mark
                      ) : (
                        <span
                          className={`px-1 text-center text-[9px] font-bold leading-tight ${job.textLogoColor}`}
                        >
                          {job.textLogo}
                        </span>
                      )}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-2 text-[16px] font-extrabold text-ink-900">
                        {job.title}
                        {job.badge && <span className="chip bg-brand-50 text-brand-600">{job.badge}</span>}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-ink-500">
                        <span className="font-semibold text-ink-700">{job.company}</span>
                        &middot; {job.location}
                      </p>

                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-ink-500">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5" /> {job.exp}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> {job.posted}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <span key={t} className="chip bg-[#f4f7fd] text-ink-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-row items-center gap-2.5 sm:flex-col sm:items-end sm:justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          className="grid h-9 w-9 place-items-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                          aria-label="Remove from saved"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="btn-primary h-9 px-4 text-[12.5px]">View Job</button>
                      </div>
                      <span className="text-[11.5px] text-ink-500">{job.saved}</span>
                    </div>
                  </div>
                </article>
              ))}

              <div className="mt-2 flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-[12.5px] text-ink-500">Showing 1 to 5 of 12 jobs</p>
                <div className="flex items-center gap-2">
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {[1, 2, 3].map((p) => (
                    <button
                      key={p}
                      className={`grid h-9 w-9 place-items-center rounded-lg text-[12.5px] font-semibold ${
                        p === 1
                          ? "bg-brand-500 text-white"
                          : "border border-[#e2e8f2] text-ink-700 hover:bg-slate-50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Manage Saved Jobs</h3>
                <div className="mt-4 space-y-1">
                  {[
                    { label: "Create Job Alert", desc: "Get notified for similar jobs", icon: Bell },
                    { label: "Compare Jobs", desc: "Compare up to 3 jobs", icon: Scale },
                    { label: "Export List", desc: "Download your saved jobs", icon: Download },
                  ].map((a) => (
                    <a
                      key={a.label}
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[#f8fafc]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                        <a.icon className="h-4 w-4 text-brand-500" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[12.5px] font-bold text-ink-900">
                          {a.label}
                        </span>
                        <span className="block text-[11px] text-ink-500">{a.desc}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink-500" />
                    </a>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Saved Jobs Overview</h3>
                <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row">
                  <div className="relative h-[110px] w-[110px] shrink-0">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e6edf7" strokeWidth="4" />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="4"
                        strokeDasharray="25 75"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="4"
                        strokeDasharray="67 33"
                        strokeDashoffset="-25"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeDasharray="8 92"
                        strokeDashoffset="-92"
                      />
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-center">
                      <span className="block text-[20px] font-extrabold text-ink-900">12</span>
                      <span className="block text-[10px] text-ink-500">Total</span>
                    </span>
                  </div>
                  <ul className="space-y-2 text-[12.5px]">
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Applied
                      <span className="ml-auto font-semibold text-ink-900">3 (25%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> Not Applied
                      <span className="ml-auto font-semibold text-ink-900">8 (67%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Expired
                      <span className="ml-auto font-semibold text-ink-900">1 (8%)</span>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="rounded-xl bg-brand-50/60 p-4">
                <p className="flex items-center gap-2 text-[13px] font-bold text-ink-900">
                  <Heart className="h-4 w-4 fill-brand-500 text-brand-500" /> Tip
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-700">
                  Bookmark jobs you&apos;re interested in and apply when you&apos;re ready.
                  Don&apos;t miss out on great opportunities!
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
