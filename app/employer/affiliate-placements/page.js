"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  ArrowUp,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  ClipboardList,
  CreditCard,
  Eye,
  FileText,
  Gift,
  Headset,
  Info,
  Landmark,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  MonitorPlay,
  MoreVertical,
  Newspaper,
  Pause,
  Pencil,
  Plus,
  Receipt,
  Search,
  Share2,
  SlidersHorizontal,
  UserCog,
  Users,
  Wallet,
  X,
  MapPin,
  XCircle,
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
      { label: "Affiliate Placements", icon: Share2, active: true },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Profile Settings", icon: UserCog },
      { label: "Notification Settings", icon: Bell },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const stats = [
  { icon: MonitorPlay, tone: "bg-brand-500", label: "Total Placements", value: "24", sub: "All time" },
  { icon: CheckCircle2, tone: "bg-emerald-500", label: "Active Placements", value: "16", sub: "Currently active" },
  { icon: Clock3, tone: "bg-amber-500", label: "Pending Approval", value: "2", sub: "Awaiting approval" },
  { icon: Pause, tone: "bg-violet-500", label: "Paused Placements", value: "3", sub: "Paused" },
  { icon: BarChart3, tone: "bg-teal-500", label: "Total Clicks", value: "12,450", sub: "All time" },
  { icon: CreditCard, tone: "bg-orange-500", label: "Total Conversions", value: "842", sub: "All time" },
];

const tabs = ["All Placements", "Active", "Pending", "Paused", "Expired", "Rejected", "Archived"];

const placements = [
  {
    initials: "OE",
    tone: "bg-brand-500",
    name: "Top Banner - Homepage",
    id: "ID: PL-2025-00024",
    affiliate: "OilEnergy Hub",
    url: "oilenergyhub.com",
    type: "Banner",
    typeTone: "bg-brand-50 text-brand-600",
    status: "Active",
    clicks: "2,345",
    conversions: "156",
    ctr: "6.65%",
    start: "Apr 15, 2025",
    end: "Jun 15, 2025",
  },
  {
    initials: "SB",
    tone: "bg-emerald-500",
    name: "Sidebar Square Ad",
    id: "ID: PL-2025-00023",
    affiliate: "Saudi Energy News",
    url: "saudienergynews.com",
    type: "Sidebar",
    typeTone: "bg-sky-50 text-sky-600",
    status: "Active",
    clicks: "1,892",
    conversions: "98",
    ctr: "5.18%",
    start: "Apr 10, 2025",
    end: "Jun 10, 2025",
  },
  {
    initials: "LE",
    tone: "bg-amber-500",
    name: "Leaderboard - Jobs Page",
    id: "ID: PL-2025-00022",
    affiliate: "LinkedEnergy",
    url: "linkedenergy.com",
    type: "Leaderboard",
    typeTone: "bg-violet-50 text-violet-600",
    status: "Pending",
    clicks: "782",
    conversions: "45",
    ctr: "5.75%",
    start: "May 20, 2025",
    end: "Jun 20, 2025",
  },
  {
    initials: "EE",
    tone: "bg-violet-500",
    name: "Article In-Content Ad",
    id: "ID: PL-2025-00021",
    affiliate: "Energy Exploration",
    url: "energyexploration.com",
    type: "In-Content",
    typeTone: "bg-teal-50 text-teal-600",
    status: "Active",
    clicks: "3,210",
    conversions: "210",
    ctr: "6.54%",
    start: "Apr 1, 2025",
    end: "May 31, 2025",
  },
  {
    initials: "RF",
    tone: "bg-slate-600",
    name: "Footer Banner",
    id: "ID: PL-2025-00020",
    affiliate: "Rig Finder",
    url: "rigfinder.com",
    type: "Banner",
    typeTone: "bg-brand-50 text-brand-600",
    status: "Paused",
    clicks: "654",
    conversions: "32",
    ctr: "4.89%",
    start: "Mar 20, 2025",
    end: "May 20, 2025",
  },
  {
    initials: "OG",
    tone: "bg-slate-600",
    name: "Mobile Interstitial Ad",
    id: "ID: PL-2025-00019",
    affiliate: "Oil & Gas Global",
    url: "oilandgasglobal.com",
    type: "Interstitial",
    typeTone: "bg-rose-50 text-rose-500",
    status: "Expired",
    clicks: "1,567",
    conversions: "76",
    ctr: "4.85%",
    start: "Feb 1, 2025",
    end: "Apr 30, 2025",
  },
  {
    initials: "OG",
    tone: "bg-slate-600",
    name: "Category Page Banner",
    id: "ID: PL-2025-00018",
    affiliate: "OG Community",
    url: "ogcommunity.com",
    type: "Banner",
    typeTone: "bg-brand-50 text-brand-600",
    status: "Rejected",
    clicks: "—",
    conversions: "—",
    ctr: "—",
    start: "May 12, 2025",
    end: "May 12, 2025",
  },
];

const statusTone = {
  Active: "bg-emerald-50 text-emerald-600",
  Pending: "bg-amber-50 text-amber-700",
  Paused: "bg-violet-50 text-violet-600",
  Expired: "bg-red-50 text-red-500",
  Rejected: "bg-red-50 text-red-500",
};

const quickActions = [
  { icon: Plus, title: "Create New Placement", desc: "Add a new affiliate placement" },
  { icon: Users, title: "Manage Affiliates", desc: "View and manage your affiliates" },
  { icon: BarChart3, title: "Placement Reports", desc: "View detailed performance reports" },
  { icon: CreditCard, title: "Payment & Commissions", desc: "Manage affiliate payments" },
];

const clicksData = [1900, 2600, 2200, 2900, 2300, 2450, 2100, 2700, 2500, 2300];
const conversionsData = [700, 950, 800, 1100, 850, 900, 780, 1000, 900, 850];

function LineChart() {
  const maxVal = 3000;
  const w = 100 / (clicksData.length - 1);
  const toPoints = (arr) => arr.map((v, i) => `${i * w},${100 - (v / maxVal) * 100}`).join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[170px] w-full">
      {[0, 25, 50, 75, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#eef2f7" strokeWidth="0.5" />
      ))}
      <polygon points={`0,100 ${toPoints(clicksData)} 100,100`} fill="#2563eb" opacity="0.08" />
      <polyline points={toPoints(clicksData)} fill="none" stroke="#2563eb" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <polyline points={toPoints(conversionsData)} fill="none" stroke="#10b981" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {clicksData.map((v, i) => (
        <circle key={i} cx={i * w} cy={100 - (v / maxVal) * 100} r="1.4" fill="#2563eb" />
      ))}
      {conversionsData.map((v, i) => (
        <circle key={i} cx={i * w} cy={100 - (v / maxVal) * 100} r="1.4" fill="#10b981" />
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

export default function AffiliatePlacementsPage() {
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
                <span className="text-brand-500">Affiliate Placements</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                Affiliate Placement Management
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Create, manage and track your affiliate placements and performance.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Create New Placement
            </button>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {stats.map((s) => (
                  <div key={s.label} className="card flex items-center gap-3 p-4">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white ${s.tone}`}>
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="text-[11px] text-ink-500">{s.label}</p>
                      <p className="text-[16px] font-extrabold text-ink-900">{s.value}</p>
                      <p className="text-[10px] text-ink-500">{s.sub}</p>
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
                      <div className="relative flex-1 lg:max-w-[260px]">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="Search by placement name or affiliate..." />
                      </div>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Status">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Paused</option>
                      </select>
                      <select className="select w-auto min-w-[110px]" defaultValue="All Types">
                        <option>All Types</option>
                        <option>Banner</option>
                        <option>Sidebar</option>
                        <option>Leaderboard</option>
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
                      <table className="w-full min-w-[1080px] border-collapse">
                        <thead>
                          <tr className="border-b border-[#eef2f7] text-left text-[11px] font-bold uppercase tracking-wide text-ink-500">
                            <th className="py-2.5 pr-3">Placement</th>
                            <th className="py-2.5 pr-3">Affiliate / Website</th>
                            <th className="py-2.5 pr-3">Type</th>
                            <th className="py-2.5 pr-3">Status</th>
                            <th className="py-2.5 pr-3">Clicks</th>
                            <th className="py-2.5 pr-3">Conversions</th>
                            <th className="py-2.5 pr-3">CTR</th>
                            <th className="py-2.5 pr-3">Start Date</th>
                            <th className="py-2.5 pr-3">End Date</th>
                            <th className="py-2.5 pr-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eef2f7]">
                          {placements.map((p) => (
                            <tr key={p.id} className="text-[13px]">
                              <td className="py-4 pr-3">
                                <div className="flex items-start gap-2.5">
                                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white ${p.tone}`}>
                                    {p.initials}
                                  </span>
                                  <div>
                                    <p className="font-bold text-ink-900">{p.name}</p>
                                    <p className="text-[11px] text-ink-500">{p.id}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 pr-3">
                                <p className="font-semibold text-ink-900">{p.affiliate}</p>
                                <p className="text-[11.5px] text-brand-500">{p.url}</p>
                              </td>
                              <td className="py-4 pr-3">
                                <span className={`chip ${p.typeTone}`}>{p.type}</span>
                              </td>
                              <td className="py-4 pr-3">
                                <span className={`chip flex w-fit items-center gap-1.5 ${statusTone[p.status]}`}>
                                  {p.status === "Active" && <CheckCircle2 className="h-3 w-3" />}
                                  {p.status === "Pending" && <Clock3 className="h-3 w-3" />}
                                  {p.status === "Paused" && <Pause className="h-3 w-3" />}
                                  {(p.status === "Expired" || p.status === "Rejected") && <XCircle className="h-3 w-3" />}
                                  {p.status}
                                </span>
                              </td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{p.clicks}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{p.conversions}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{p.ctr}</td>
                              <td className="py-4 pr-3 text-ink-700">{p.start}</td>
                              <td className="py-4 pr-3 text-ink-700">{p.end}</td>
                              <td className="py-4 pr-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                    aria-label={`View ${p.name}`}
                                  >
                                    <Eye className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-brand-500 hover:bg-brand-50"
                                    aria-label={`Edit ${p.name}`}
                                  >
                                    <Pencil className="h-3.5 w-3.5" />
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
                      <p className="text-[12.5px] text-ink-500">Showing 1 to 7 of 24 placements</p>
                      <div className="flex items-center gap-2">
                        <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                          <ChevronRight className="h-4 w-4 rotate-180" />
                        </button>
                        {[1, 2, 3, 4].map((p) => (
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

              <div className="card mt-5 flex items-start gap-3 p-4 sm:p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <div>
                  <p className="text-[13.5px] font-bold text-ink-900">About Affiliate Placements</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                    Affiliate placements allow partner websites to display your ads and earn
                    commissions for clicks or conversions.
                  </p>
                  <a href="#" className="mt-2 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                    Learn more about affiliate program <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Performance Overview</h3>
                  <select className="select h-9 w-auto min-w-[110px] text-[12px]" defaultValue="Last 30 Days">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-[11px] text-ink-500">Clicks</p>
                    <p className="text-[16px] font-extrabold text-ink-900">2,845</p>
                    <p className="flex items-center justify-center gap-0.5 text-[10.5px] font-semibold text-emerald-600">
                      <ArrowUp className="h-3 w-3" /> 12.6%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-500">Conversions</p>
                    <p className="text-[16px] font-extrabold text-ink-900">186</p>
                    <p className="flex items-center justify-center gap-0.5 text-[10.5px] font-semibold text-emerald-600">
                      <ArrowUp className="h-3 w-3" /> 8.2%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-500">CTR</p>
                    <p className="text-[16px] font-extrabold text-ink-900">6.54%</p>
                    <p className="flex items-center justify-center gap-0.5 text-[10.5px] font-semibold text-emerald-600">
                      <ArrowUp className="h-3 w-3" /> 5.7%
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-4 text-[11.5px]">
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> Clicks
                  </span>
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Conversions
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
                  <span>May 29</span>
                </div>
                <a href="#" className="mt-3 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  View Detailed Reports <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Placement Status</h3>
                <div className="mt-4 flex items-center gap-5">
                  <div className="relative h-[110px] w-[110px] shrink-0">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e6edf7" strokeWidth="4.5" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="4.5" strokeDasharray="66.7 33.3" strokeDashoffset="0" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="8.3 91.7" strokeDashoffset="-66.7" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="4.5" strokeDasharray="12.5 87.5" strokeDashoffset="-75" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ef4444" strokeWidth="4.5" strokeDasharray="8.3 91.7" strokeDashoffset="-87.5" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#cbd5e1" strokeWidth="4.5" strokeDasharray="4.2 95.8" strokeDashoffset="-95.8" />
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-center">
                      <span className="block text-[20px] font-extrabold text-ink-900">24</span>
                      <span className="block text-[10px] text-ink-500">Total</span>
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[12px]">
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Active
                      <span className="ml-auto font-semibold text-ink-900">16 (66.7%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Pending
                      <span className="ml-auto font-semibold text-ink-900">2 (8.3%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-500" /> Paused
                      <span className="ml-auto font-semibold text-ink-900">3 (12.5%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Expired
                      <span className="ml-auto font-semibold text-ink-900">2 (8.3%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#cbd5e1]" /> Rejected
                      <span className="ml-auto font-semibold text-ink-900">1 (4.2%)</span>
                    </li>
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
                  <Headset className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Our support team is here to help you with affiliate placements.
                </p>
                <button className="btn-ghost mt-3.5 w-full">Contact Support</button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
