"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Download,
  FileEdit,
  FilePlus2,
  FileText,
  Gift,
  HelpCircle,
  Landmark,
  LogOut,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  MoreVertical,
  Newspaper,
  Plus,
  Receipt,
  Search,
  Send,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  UploadCloud,
  User,
  UserCog,
  Users,
  Wallet,
  X,
  MapPin,
} from "lucide-react";

const sideNav = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Jobs", icon: BriefcaseBusiness },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Companies", icon: Building2 },
      { label: "Messages", icon: MessageSquare },
      { label: "Saved Candidates", icon: Users },
    ],
  },
  {
    section: "MANAGE",
    items: [
      { label: "Job Packages", icon: ClipboardList },
      { label: "Subscriptions", icon: Wallet },
      { label: "Payments", icon: Landmark },
      { label: "Invoices", icon: Receipt },
      { label: "Coupons", icon: Gift },
    ],
  },
  {
    section: "PROMOTE",
    items: [
      { label: "Advertisements", icon: Megaphone },
      { label: "Sponsored Articles", icon: FileText },
      { label: "Affiliate Placements", icon: Share2 },
    ],
  },
  {
    section: "COMMUNICATION",
    items: [
      { label: "Newsletter Subscription", icon: Mail, active: true },
      { label: "Email Campaigns", icon: Send },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Profile Settings", icon: UserCog },
      { label: "Notification Center", icon: Bell },
      { label: "Security Settings", icon: ShieldCheck },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const stats = [
  { icon: Users, tone: "bg-brand-500", label: "Total Subscribers", value: "2,458", sub: "All time" },
  { icon: Mail, tone: "bg-emerald-500", label: "Active Subscribers", value: "2,156", sub: "87.7% of total" },
  { icon: Send, tone: "bg-violet-500", label: "New This Month", value: "142", sub: "↑ 18.4%", subTone: "text-emerald-600" },
  { icon: User, tone: "bg-amber-500", label: "Unsubscribed", value: "302", sub: "12.3% of total" },
];

const tabs = ["All Subscribers", "Active", "Unsubscribed", "Bounced"];

const subscribers = [
  { initials: "AH", tone: "bg-brand-500", name: "Ahmed Khan", email: "ahmed.khan@example.com", status: "Active", source: "Website Signup", date: "May 31, 2025" },
  { initials: "SJ", tone: "bg-violet-500", name: "Sarah Johnson", email: "sarah.johnson@example.com", status: "Active", source: "Blog Subscription", date: "May 30, 2025" },
  { initials: "MA", tone: "bg-amber-500", name: "Michael Anderson", email: "michael.anderson@example.com", status: "Active", source: "Website Signup", date: "May 28, 2025" },
  { initials: "EM", tone: "bg-rose-500", name: "Emily Martinez", email: "emily.martinez@example.com", status: "Active", source: "Job Alert Signup", date: "May 27, 2025" },
  { initials: "DR", tone: "bg-emerald-500", name: "David Rodriguez", email: "david.rodriguez@example.com", status: "Unsubscribed", source: "Email Campaign", date: "May 25, 2025" },
  { initials: "LS", tone: "bg-teal-500", name: "Lisa Smith", email: "lisa.smith@example.com", status: "Active", source: "Website Signup", date: "May 24, 2025" },
  { initials: "WT", tone: "bg-slate-500", name: "William Taylor", email: "william.taylor@example.com", status: "Bounced", source: "Import", date: "May 22, 2025" },
  { initials: "JB", tone: "bg-purple-500", name: "James Brown", email: "james.brown@example.com", status: "Active", source: "Blog Subscription", date: "May 21, 2025" },
];

const statusTone = {
  Active: "bg-emerald-50 text-emerald-600",
  Unsubscribed: "bg-amber-50 text-amber-700",
  Bounced: "bg-red-50 text-red-500",
};

const topSources = [
  { label: "Website Signup", value: "1,452 (59.1%)", tone: "bg-brand-500" },
  { label: "Blog Subscription", value: "598 (24.3%)", tone: "bg-emerald-500" },
  { label: "Job Alert Signup", value: "256 (10.4%)", tone: "bg-amber-500" },
  { label: "Email Campaign", value: "102 (4.2%)", tone: "bg-violet-500" },
  { label: "Import", value: "50 (2.0%)", tone: "bg-[#cbd5e1]" },
];

const quickActions = [
  { icon: UploadCloud, title: "Import Subscribers", desc: "Upload a CSV file of subscribers" },
  { icon: FilePlus2, title: "Create Signup Form", desc: "Generate a newsletter signup form" },
  { icon: Mail, title: "Manage Email Templates", desc: "Create and edit email templates" },
  { icon: Send, title: "View Email Campaigns", desc: "See sent campaigns and performance" },
];

const newSub = [110, 130, 100, 145, 120, 155, 130, 160, 140, 150];
const unsub = [30, 40, 25, 45, 35, 42, 30, 44, 32, 38];

function LineChart() {
  const maxVal = 200;
  const w = 100 / (newSub.length - 1);
  const toPoints = (arr) => arr.map((v, i) => `${i * w},${100 - (v / maxVal) * 100}`).join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[180px] w-full">
      {[0, 25, 50, 75, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#eef2f7" strokeWidth="0.5" />
      ))}
      <polygon points={`0,100 ${toPoints(newSub)} 100,100`} fill="#2563eb" opacity="0.08" />
      <polyline points={toPoints(newSub)} fill="none" stroke="#2563eb" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <polyline points={toPoints(unsub)} fill="none" stroke="#ef4444" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {newSub.map((v, i) => (
        <circle key={i} cx={i * w} cy={100 - (v / maxVal) * 100} r="1.4" fill="#2563eb" />
      ))}
      {unsub.map((v, i) => (
        <circle key={i} cx={i * w} cy={100 - (v / maxVal) * 100} r="1.4" fill="#ef4444" />
      ))}
    </svg>
  );
}

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

export default function NewsletterSubscriptionPage() {
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
                placeholder="Search jobs, companies, articles..."
              />
            </div>
            <div className="hidden items-center gap-2 border-l border-[#e2e8f2] px-3.5 sm:flex">
              <MapPin className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-[140px] bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                defaultValue="Saudi Arabia"
              />
              <ChevronDown className="h-4 w-4 shrink-0 text-ink-500" />
            </div>
            <button className="btn-primary h-11 shrink-0 px-5">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                5
              </span>
            </button>
            <button className="text-ink-500 hover:text-brand-500">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Employer</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1680px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-brand-500">Newsletter Subscription</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Newsletter Subscription</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Manage newsletter subscribers and grow your audience.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Add Subscriber
            </button>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="card flex items-center gap-3.5 p-5">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-white ${s.tone}`}>
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12.5px] text-ink-500">{s.label}</p>
                      <p className="text-[19px] font-extrabold text-ink-900">{s.value}</p>
                      <p className={`text-[11px] ${s.subTone || "text-ink-500"}`}>{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <section className="card mt-5 p-5 sm:p-6">
                <div className="flex gap-6 overflow-x-auto border-b border-[#eef2f7]">
                  {tabs.map((t, i) => (
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

                {tab === 0 ? (
                  <>
                    <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
                      <div className="relative flex-1 lg:max-w-[240px]">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="Search by email or name..." />
                      </div>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Status">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Unsubscribed</option>
                        <option>Bounced</option>
                      </select>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Sources">
                        <option>All Sources</option>
                        <option>Website Signup</option>
                        <option>Blog Subscription</option>
                        <option>Job Alert Signup</option>
                      </select>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input
                          className="input w-auto min-w-[200px] pl-10"
                          defaultValue="May 1, 2025 - May 31, 2025"
                        />
                      </div>
                      <button className="btn-ghost h-11 shrink-0 px-4 text-[12.5px]">
                        <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
                      </button>
                    </div>

                    <div className="mt-5 overflow-x-auto">
                      <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                          <tr className="border-b border-[#eef2f7] text-left text-[11px] font-bold uppercase tracking-wide text-ink-500">
                            <th className="w-8 py-2.5">
                              <input type="checkbox" className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500" />
                            </th>
                            <th className="py-2.5 pr-3">Subscriber</th>
                            <th className="py-2.5 pr-3">Email</th>
                            <th className="py-2.5 pr-3">Status</th>
                            <th className="py-2.5 pr-3">Source</th>
                            <th className="py-2.5 pr-3">Subscribed On</th>
                            <th className="py-2.5 pr-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eef2f7]">
                          {subscribers.map((s) => (
                            <tr key={s.email} className="text-[13px]">
                              <td className="py-3.5">
                                <input type="checkbox" className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500" />
                              </td>
                              <td className="py-3.5 pr-3">
                                <div className="flex items-center gap-2.5">
                                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white ${s.tone}`}>
                                    {s.initials}
                                  </span>
                                  <span className="font-bold text-ink-900">{s.name}</span>
                                </div>
                              </td>
                              <td className="py-3.5 pr-3 text-ink-700">{s.email}</td>
                              <td className="py-3.5 pr-3">
                                <span className={`chip flex w-fit items-center gap-1.5 ${statusTone[s.status]}`}>
                                  {s.status === "Active" && <CheckCircle2 className="h-3 w-3" />}
                                  {s.status}
                                </span>
                              </td>
                              <td className="py-3.5 pr-3 text-ink-700">{s.source}</td>
                              <td className="py-3.5 pr-3 text-ink-700">{s.date}</td>
                              <td className="py-3.5 pr-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-brand-500 hover:bg-brand-50"
                                    aria-label={`Email ${s.name}`}
                                  >
                                    <Mail className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                    aria-label="More options"
                                  >
                                    <MoreVertical className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
                      <p className="text-[12.5px] text-ink-500">Showing 1 to 8 of 2,458 subscribers</p>
                      <div className="flex items-center gap-2">
                        <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                          <ChevronRight className="h-4 w-4 rotate-180" />
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
                        <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-[12.5px] font-semibold text-ink-700">
                          308
                        </button>
                        <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="grid min-h-[300px] place-items-center">
                    <div className="text-center">
                      <h2 className="text-[16.5px] font-extrabold">{tabs[tab]}</h2>
                      <p className="mt-2 text-[13px] text-ink-500">This tab will be designed next.</p>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Subscription Overview</h3>
                  <select className="select h-9 w-auto min-w-[110px] text-[12px]" defaultValue="Last 30 Days">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
                <div className="mt-3 flex items-center gap-4 text-[11.5px]">
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> New Subscribers
                  </span>
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Unsubscribed
                  </span>
                </div>
                <div className="mt-2">
                  <LineChart />
                </div>
                <div className="flex justify-between text-[10.5px] text-ink-500">
                  <span>May 1</span>
                  <span>May 8</span>
                  <span>May 15</span>
                  <span>May 22</span>
                  <span>May 31</span>
                </div>
                <a href="#" className="mt-3 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  View Detailed Analytics <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Top Sources</h3>
                <div className="mt-4 flex items-center gap-5">
                  <div className="relative h-[110px] w-[110px] shrink-0">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e6edf7" strokeWidth="4.5" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2563eb" strokeWidth="4.5" strokeDasharray="59.1 40.9" strokeDashoffset="0" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="4.5" strokeDasharray="24.3 75.7" strokeDashoffset="-59.1" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="10.4 89.6" strokeDashoffset="-83.4" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="4.5" strokeDasharray="4.2 95.8" strokeDashoffset="-93.8" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#cbd5e1" strokeWidth="4.5" strokeDasharray="2.0 98" strokeDashoffset="-98" />
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-center">
                      <span className="block text-[19px] font-extrabold text-ink-900">2,458</span>
                      <span className="block text-[10px] text-ink-500">Total</span>
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11.5px]">
                    {topSources.map((s) => (
                      <li key={s.label} className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.tone}`} />
                        <span className="text-ink-700">{s.label}</span>
                        <span className="ml-auto font-semibold text-ink-900">{s.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Quick Actions</h3>
                <div className="mt-3.5 space-y-1">
                  {quickActions.map((q) => (
                    <a key={q.title} href="#" className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[#f8fafc]">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                        <q.icon className="h-4 w-4 text-brand-500" />
                      </span>
                      <span>
                        <span className="block text-[12.5px] font-bold text-ink-900">{q.title}</span>
                        <span className="block text-[11px] text-ink-500">{q.desc}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <HelpCircle className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Learn how to grow your subscriber list and create engaging newsletters.
                </p>
                <a href="#" className="mt-2.5 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                  View Help Center <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
