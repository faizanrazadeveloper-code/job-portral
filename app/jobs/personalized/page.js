"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Award,
  Bell,
  Bookmark,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  Lightbulb,
  Lock,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  SlidersHorizontal,
  Star,
  User,
  History,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "JOB SEEKER",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Find Jobs", icon: Search, active: true },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Saved Jobs", icon: Star },
      { label: "Job Alerts", icon: Bell },
    ],
  },
  {
    section: "CAREER",
    items: [
      { label: "My Resume", icon: FileText },
      { label: "My Profile", icon: User },
      { label: "Skills Test", icon: Award },
      { label: "Career Advice", icon: Sparkles },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Messages", icon: MessageSquare, badge: 2 },
      { label: "Browsing History", icon: History },
      { label: "Settings", icon: Settings },
      { label: "Privacy", icon: Lock },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const jobTabs = ["Recommended for You (12)", "Trending Jobs", "Recent Postings"];

const whyReasons = [
  "Skills match your profile",
  "Similar to jobs you viewed",
  "In your preferred location",
  "Within your experience level",
];

const topSkills = [
  { label: "Drilling Operations", pct: 90 },
  { label: "Well Planning", pct: 88 },
  { label: "Mud Engineering", pct: 85 },
  { label: "Reservoir Engineering", pct: 80 },
  { label: "HSE Management", pct: 78 },
];

const jobs = [
  {
    title: "Senior Drilling Engineer",
    badge: "New",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    type: "Full-time",
    exp: "5-8 Years",
    posted: "2 hours ago",
    match: 92,
    tags: ["Drilling Operations", "Well Planning", "HSE"],
    extra: 3,
    logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]",
    mark: "✦",
  },
  {
    title: "Drilling Operations Engineer",
    badge: "New",
    company: "Baker Hughes",
    location: "Al Khobar, Saudi Arabia",
    type: "Full-time",
    exp: "3-6 Years",
    posted: "Yesterday",
    match: 89,
    tags: ["Drilling Operations", "Mud Engineering", "Directional Drilling"],
    extra: 2,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◆",
    markColor: "text-red-500",
  },
  {
    title: "Staff Drilling Engineer",
    company: "SLB",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    exp: "6-10 Years",
    posted: "2 days ago",
    match: 85,
    tags: ["Drilling Engineering", "Reservoir Engineering", "Well Integrity"],
    extra: 4,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "slb",
    markColor: "text-blue-600",
  },
  {
    title: "Reservoir Engineer",
    company: "Petrojet",
    location: "Jubail, Saudi Arabia",
    type: "Full-time",
    exp: "4-7 Years",
    posted: "3 days ago",
    match: 82,
    tags: ["Reservoir Modeling", "Simulation", "Petrel"],
    extra: 2,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◍",
    markColor: "text-emerald-600",
  },
  {
    title: "Production Engineer",
    company: "ADNOC Group",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    exp: "4-6 Years",
    posted: "5 days ago",
    match: 80,
    tags: ["Production Operations", "Well Testing", "Optimization"],
    extra: 3,
    logo: "bg-white border border-[#e2e8f2]",
    mark: "flame",
    markColor: "text-brand-500",
  },
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
                  {item.badge && (
                    <span className="chip bg-brand-100 px-2 text-brand-600">{item.badge}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <p className="text-[12.5px] font-bold">Need Help?</p>
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-ink-500">
          We&apos;re here to help you find the right opportunity.
        </p>
        <button className="btn-ghost mt-3 h-9 w-full bg-white px-3.5 text-[12.5px]">
          Contact Support
        </button>
      </div>
    </>
  );
}

export default function PersonalizedJobsPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const strength = 92;
  const circumference = 2 * Math.PI * 26;
  const offset = circumference - (strength / 100) * circumference;

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
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5">
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
            <button className="text-ink-500 hover:text-brand-500">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Job Seeker</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Home</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Find Jobs</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Personalized Jobs</span>
          </nav>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="flex items-center gap-2 text-[24px] font-extrabold tracking-tight">
                Personalised Job Listings <Sparkles className="h-5 w-5 text-brand-500" />
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Jobs recommended for you based on your profile, skills and activity.
              </p>
            </div>
            <button className="btn-ghost shrink-0">
              <SlidersHorizontal className="h-4 w-4" /> Update Preferences
            </button>
          </div>

          {/* Match banner */}
          <section className="card mt-6 grid gap-5 border-brand-100 bg-brand-50/30 p-5 sm:p-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-[68px] w-[68px] shrink-0">
                <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
                  <circle cx="30" cy="30" r="26" fill="none" stroke="#dbe6fe" strokeWidth="6" />
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center text-[15px] font-extrabold text-ink-900">
                  {strength}%
                </span>
              </div>
              <div>
                <p className="text-[14.5px] font-extrabold text-ink-900">Great match!</p>
                <p className="mt-0.5 text-[12.5px] text-ink-500">
                  Your profile matches well with these jobs.
                </p>
                <a
                  href="#"
                  className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-500"
                >
                  Improve matches <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, title: "Profile Complete", desc: "Increase your match rate", tone: "bg-emerald-50 text-emerald-600" },
                { icon: Award, title: "Add Skills", desc: "Get better recommendations", tone: "bg-brand-50 text-brand-500" },
                { icon: Bell, title: "Create Job Alert", desc: "Never miss a relevant job", tone: "bg-violet-50 text-violet-600" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-2.5">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${c.tone}`}>
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12.5px] font-bold text-ink-900">{c.title}</p>
                    <p className="text-[11px] text-ink-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eef2f7]">
                <div className="flex gap-6 overflow-x-auto">
                  {jobTabs.map((t, i) => (
                    <button
                      key={t}
                      onClick={() => setTab(i)}
                      className={`whitespace-nowrap border-b-2 pb-3 text-[13.5px] font-semibold transition ${
                        i === tab
                          ? "border-brand-500 text-brand-500"
                          : "border-transparent text-ink-500 hover:text-brand-500"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <select className="select mb-2 w-auto min-w-[170px]" defaultValue="Sort by: Most Relevant">
                  <option>Sort by: Most Relevant</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Match %</option>
                </select>
              </div>

              <div className="mt-4 space-y-4">
                {jobs.map((job) => (
                  <article key={job.title} className="card p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <span
                        className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl text-lg font-black ${job.logo} ${job.markColor || "text-white"}`}
                      >
                        {job.mark === "flame" ? "🔥" : job.mark}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-2 text-[16px] font-extrabold text-ink-900">
                          {job.title}
                          {job.badge && <span className="chip bg-emerald-50 text-emerald-600">{job.badge}</span>}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-ink-500">
                          <span className="font-semibold text-ink-700">{job.company}</span>
                          <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-500 text-white" />
                        </p>

                        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-ink-500">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" /> {job.location}
                          </span>
                          <span>|</span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" /> {job.type}
                          </span>
                          <span>|</span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {job.exp}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.tags.map((t) => (
                            <span key={t} className="chip bg-brand-50 text-brand-600">
                              {t}
                            </span>
                          ))}
                          {job.extra > 0 && (
                            <span className="chip bg-[#f4f7fd] text-ink-500">+{job.extra}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-row items-center gap-3 sm:flex-col sm:items-end">
                        <div className="text-right">
                          <p className="text-[13px] font-extrabold text-emerald-600">
                            {job.match}% Match
                          </p>
                          <p className="text-[11.5px] text-ink-500">{job.posted}</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button className="text-ink-500 hover:text-red-500" aria-label="Like job">
                            <Heart className="h-4 w-4" />
                          </button>
                          <button className="text-ink-500 hover:text-brand-500" aria-label="Save job">
                            <Bookmark className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="btn-primary h-9 px-4 text-[12.5px]">View Details</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <button className="btn-ghost h-9 px-3 text-[12.5px]">
                  <ChevronLeft className="h-4 w-4" /> Previous
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
                <span className="px-1 text-ink-500">...</span>
                <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-[12.5px] font-semibold text-ink-700 hover:bg-slate-50">
                  10
                </button>
                <button className="btn-ghost h-9 px-3 text-[12.5px]">
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Why these jobs?</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  These jobs match your profile and preferences.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {whyReasons.map((r) => (
                    <li key={r} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" /> {r}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500"
                >
                  Update preferences <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>

              <section className="card p-5">
                <h3 className="flex items-center gap-2 text-[14.5px] font-bold">
                  <Bell className="h-4 w-4 text-brand-500" /> Job Alerts
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Get notified for new jobs that match your profile.
                </p>
                <button className="btn-primary mt-3.5 w-full">Create Job Alert</button>
              </section>

              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Your Top Skills</h3>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>
                <div className="mt-4 space-y-4">
                  {topSkills.map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between text-[12.5px]">
                        <span className="font-semibold text-ink-900">{s.label}</span>
                        <span className="text-ink-500">{s.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#e6edf7]">
                        <div
                          className="h-full rounded-full bg-brand-500"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  View All Skills <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-amber-800">
                  <Lightbulb className="h-4 w-4" /> Tip
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-amber-800/90">
                  Keep your profile updated to get more relevant job recommendations.
                </p>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-amber-800">
                  Update Profile <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
