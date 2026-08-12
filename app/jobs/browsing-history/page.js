"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Award,
  Bell,
  Bookmark,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  GraduationCap,
  Heart,
  History,
  Lightbulb,
  Lock,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  MoreVertical,
  Search,
  Settings,
  Sparkles,
  Star,
  Trash2,
  User,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "JOB SEEKER",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Find Jobs", icon: Search },
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
      { label: "Browsing History", icon: History, active: true },
      { label: "Settings", icon: Settings },
      { label: "Privacy", icon: Lock },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const historyTabs = ["Jobs (12)", "Companies (6)"];

const viewedJobs = [
  {
    title: "Senior Drilling Engineer",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    type: "Full-time",
    exp: "5-8 Years",
    when: "2 hours ago",
    logo: "bg-gradient-to-br from-[#8fd14f] to-[#0f9d58]",
    mark: "✦",
  },
  {
    title: "Drilling Engineer",
    company: "Baker Hughes",
    location: "Al Khobar, Saudi Arabia",
    type: "Full-time",
    exp: "3-6 Years",
    when: "Yesterday",
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
    when: "2 days ago",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "slb",
    markColor: "text-blue-600",
  },
  {
    title: "Drilling Engineer",
    company: "Petrojet",
    location: "Jubail, Saudi Arabia",
    type: "Full-time",
    exp: "2-5 Years",
    when: "3 days ago",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "◍",
    markColor: "text-emerald-600",
  },
  {
    title: "Reservoir Engineer",
    company: "ADNOC Group",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    exp: "4-7 Years",
    when: "5 days ago",
    logo: "bg-white border border-[#e2e8f2]",
    mark: "flame",
    markColor: "text-brand-500",
  },
];

const recentActivity = [
  { title: "Senior Drilling Engineer", company: "Saudi Aramco", when: "2 hours ago", current: true },
  { title: "Drilling Engineer", company: "Baker Hughes", when: "Yesterday" },
  { title: "Staff Drilling Engineer", company: "SLB", when: "2 days ago" },
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

export default function BrowsingHistoryPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

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
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Browsing History</span>
          </nav>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-[24px] font-extrabold tracking-tight">Browsing History</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Jobs and companies you recently viewed.
              </p>
            </div>
            <button className="btn-ghost shrink-0 border-red-200 text-red-600 hover:bg-red-50">
              <Trash2 className="h-4 w-4" /> Clear All History
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-5 flex gap-6 overflow-x-auto border-b border-[#eef2f7]">
            {historyTabs.map((t, i) => (
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

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div>
              {tab === 0 && (
                <section className="card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-[15px] font-extrabold">Recently Viewed Jobs</h2>
                    <select className="select w-auto min-w-[140px]" defaultValue="All Time">
                      <option>All Time</option>
                      <option>Last 24 hours</option>
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                    </select>
                  </div>

                  <div className="mt-4 divide-y divide-[#eef2f7]">
                    {viewedJobs.map((job) => (
                      <div
                        key={job.title + job.company}
                        className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center"
                      >
                        <span
                          className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-base font-black ${job.logo} ${job.markColor || "text-white"}`}
                        >
                          {job.mark === "flame" ? "🔥" : job.mark}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="flex items-center gap-1.5 text-[14px] font-bold text-ink-900">
                            {job.title}
                          </p>
                          <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-ink-500">
                            <span className="font-semibold text-ink-700">{job.company}</span>
                            <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-500 text-white" />
                          </p>
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-ink-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" /> {job.type}
                            </span>
                            <span>|</span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" /> {job.location}
                            </span>
                            <span>|</span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" /> {job.exp}
                            </span>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          <span className="text-[11.5px] text-ink-500">{job.when}</span>
                          <button
                            className="text-ink-500 hover:text-brand-500"
                            aria-label="Save job"
                          >
                            <Bookmark className="h-4 w-4" />
                          </button>
                          <button
                            className="text-ink-500 hover:text-brand-500"
                            aria-label="More"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-2">
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
                    <button className="btn-ghost h-9 px-3 text-[12.5px]">
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </section>
              )}

              {tab === 1 && (
                <section className="card grid min-h-[300px] place-items-center p-6 text-center">
                  <div>
                    <h2 className="text-[16.5px] font-extrabold">Companies (6)</h2>
                    <p className="mt-2 text-[13px] text-ink-500">
                      This tab will be designed next.
                    </p>
                  </div>
                </section>
              )}

              <div className="mt-5 flex flex-col gap-3 rounded-xl bg-[#f4f7fd] p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <p className="flex items-center gap-2 text-[12.5px] text-ink-700">
                  <Eye className="h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    <b>Your browsing history is private</b>
                    <br />
                    Only you can see the jobs and companies you&apos;ve viewed.
                  </span>
                </p>
                <button className="btn-ghost shrink-0 bg-white">Manage Privacy</button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="flex items-center gap-2 text-[14.5px] font-bold">
                  <Clock className="h-4 w-4 text-brand-500" /> History Summary
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: "Jobs Viewed", value: 12, icon: Eye, tone: "bg-brand-50 text-brand-500" },
                    { label: "Companies Viewed", value: 6, icon: Building2, tone: "bg-blue-50 text-blue-600" },
                    { label: "Days Active", value: 7, icon: Calendar, tone: "bg-violet-50 text-violet-600" },
                    { label: "Total Views", value: 18, icon: History, tone: "bg-emerald-50 text-emerald-600" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-[#eef2f7] p-3.5 text-center">
                      <span className={`mx-auto grid h-9 w-9 place-items-center rounded-full ${s.tone}`}>
                        <s.icon className="h-4 w-4" />
                      </span>
                      <p className="mt-2 text-[19px] font-extrabold text-ink-900">{s.value}</p>
                      <p className="text-[11px] text-ink-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-amber-800">
                  <Lightbulb className="h-4 w-4" /> Tip
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-amber-800/90">
                  Save jobs you&apos;re interested in so you can apply later.
                </p>
                <button className="btn-ghost mt-3.5 w-full bg-white">Browse Jobs</button>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Recent Activity</h3>
                <div className="mt-4 space-y-4 border-l-2 border-[#eef2f7] pl-4">
                  {recentActivity.map((a) => (
                    <div key={a.title} className="relative">
                      <span
                        className={`absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white ${
                          a.current ? "bg-brand-500 ring-2 ring-brand-100" : "bg-[#dbe4f2]"
                        }`}
                      />
                      <p className="text-[12.5px] font-bold text-ink-900">{a.title}</p>
                      <p className="text-[11.5px] text-ink-500">{a.company}</p>
                      <p className="text-[11px] text-ink-500">{a.when}</p>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-4 inline-block text-[12.5px] font-semibold text-brand-500">
                  View All History
                </a>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
