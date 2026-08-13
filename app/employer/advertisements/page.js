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
  Clock3,
  ClipboardList,
  Download,
  DollarSign,
  FileText,
  Gift,
  Landmark,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  Mouse,
  MoreVertical,
  Newspaper,
  Plus,
  Receipt,
  Search,
  Settings2,
  Share2,
  SlidersHorizontal,
  Sparkle,
  Target,
  TrendingUp,
  User,
  UserCog,
  Users,
  Wallet,
  Wrench,
  X,
  MapPin,
  Wind,
  Flame,
  Droplet,
  BarChart3,
  Receipt as ReceiptIcon,
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
      { label: "Advertisements", icon: Megaphone, active: true },
      { label: "Sponsored Articles", icon: FileText },
      { label: "Affiliate Placements", icon: Share2 },
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
  { icon: Megaphone, tone: "bg-brand-500", label: "Total Spend", value: "$2,745.60", sub: "All time" },
  { icon: BarChart3, tone: "bg-emerald-500", label: "Total Impressions", value: "128,540", sub: "All ads" },
  { icon: Mouse, tone: "bg-violet-500", label: "Total Clicks", value: "4,892", sub: "All ads" },
  { icon: User, tone: "bg-amber-500", label: "Total Applications", value: "356", sub: "From ads" },
  { icon: DollarSign, tone: "bg-teal-500", label: "Avg. Cost per Apply", value: "$7.72", sub: "All ads" },
];

const tabs = ["All Advertisements", "Active", "Paused", "Completed", "Drafts", "Scheduled"];

const ads = [
  {
    title: "Senior Drilling Engineer",
    sub: "Drilling Operations",
    posted: "Posted on May 10, 2025",
    icon: BriefcaseBusiness,
    tone: "bg-brand-50 text-brand-500",
    status: "Active",
    budget: "$600.00",
    budgetType: "Daily",
    spend: "$285.40",
    spendPct: "47% used",
    pct: 47,
    barTone: "bg-brand-500",
    impressions: "18,450",
    clicks: "742",
    applications: "52",
    ctr: "4.02%",
  },
  {
    title: "HSE Officer",
    sub: "Health & Safety",
    posted: "Posted on May 8, 2025",
    icon: Flame,
    tone: "bg-violet-50 text-violet-500",
    status: "Active",
    budget: "$400.00",
    budgetType: "Daily",
    spend: "$196.75",
    spendPct: "49% used",
    pct: 49,
    barTone: "bg-brand-500",
    impressions: "12,840",
    clicks: "512",
    applications: "38",
    ctr: "3.99%",
  },
  {
    title: "Mechanical Technician",
    sub: "Maintenance",
    posted: "Posted on May 5, 2025",
    icon: Wrench,
    tone: "bg-amber-50 text-amber-600",
    status: "Paused",
    budget: "$350.00",
    budgetType: "Daily",
    spend: "$150.30",
    spendPct: "43% used",
    pct: 43,
    barTone: "bg-amber-500",
    impressions: "9,320",
    clicks: "361",
    applications: "21",
    ctr: "3.87%",
  },
  {
    title: "Production Operator",
    sub: "Production",
    posted: "Posted on Apr 28, 2025",
    icon: Droplet,
    tone: "bg-teal-50 text-teal-600",
    status: "Completed",
    budget: "$300.00",
    budgetType: "Total",
    spend: "$300.00",
    spendPct: "100% used",
    pct: 100,
    barTone: "bg-emerald-500",
    impressions: "24,610",
    clicks: "1,022",
    applications: "85",
    ctr: "4.15%",
  },
  {
    title: "Civil Engineer",
    sub: "Engineering",
    posted: "Scheduled for May 15, 2025",
    icon: BarChart3,
    tone: "bg-rose-50 text-rose-500",
    status: "Scheduled",
    budget: "$250.00",
    budgetType: "Daily",
    spend: "$0.00",
    spendPct: "0% used",
    pct: 0,
    barTone: "bg-[#cbd5e1]",
    impressions: "0",
    clicks: "0",
    applications: "0",
    ctr: "0%",
  },
];

const statusTone = {
  Active: "bg-emerald-50 text-emerald-600",
  Paused: "bg-amber-50 text-amber-700",
  Completed: "bg-brand-50 text-brand-600",
  Scheduled: "bg-violet-50 text-violet-600",
};

const highlights = [
  { icon: Target, title: "Targeted Reach", desc: "Reach qualified candidates" },
  { icon: TrendingUp, title: "Better Visibility", desc: "Stand out from competitors" },
  { icon: BarChart3, title: "More Applications", desc: "Get more relevant responses" },
];

const quickActions = [
  { icon: Plus, title: "Create New Advertisement", desc: "Promote your job to reach more candidates" },
  { icon: DollarSign, title: "Manage Budgets", desc: "Set daily or total budgets for your ads" },
  { icon: BarChart3, title: "View Ad Analytics", desc: "Track performance and optimize ads" },
  { icon: ReceiptIcon, title: "Payment History", desc: "View all transactions related to ads" },
];

const impressions = [3400, 4600, 4100, 5200, 4700, 5600, 5100, 6100, 5800, 6600];
const clicks = [900, 1300, 1050, 1500, 1250, 1700, 1450, 1900, 1650, 2050];

function LineChart() {
  const maxVal = 8000;
  const w = 100 / (impressions.length - 1);
  const toPoints = (arr) => arr.map((v, i) => `${i * w},${100 - (v / maxVal) * 100}`).join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[170px] w-full">
      {[0, 25, 50, 75, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#eef2f7" strokeWidth="0.5" />
      ))}
      <polygon points={`0,100 ${toPoints(impressions)} 100,100`} fill="#2563eb" opacity="0.08" />
      <polyline points={toPoints(impressions)} fill="none" stroke="#2563eb" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <polyline points={toPoints(clicks)} fill="none" stroke="#10b981" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {impressions.map((v, i) => (
        <circle key={i} cx={i * w} cy={100 - (v / maxVal) * 100} r="1.4" fill="#2563eb" />
      ))}
      {clicks.map((v, i) => (
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

export default function AdvertisementsPage() {
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
                <span className="text-brand-500">Advertisements</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Advertising Management</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Create, manage and track your job advertisements.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Create New Advertisement
            </button>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {stats.map((s) => (
                  <div key={s.label} className="card flex items-center gap-3 p-4">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white ${s.tone}`}>
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="text-[11.5px] text-ink-500">{s.label}</p>
                      <p className="text-[17px] font-extrabold text-ink-900">{s.value}</p>
                      <p className="text-[10.5px] text-ink-500">{s.sub}</p>
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
                        <input className="input pl-10" placeholder="Search ads by title or job..." />
                      </div>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Status">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Paused</option>
                        <option>Completed</option>
                      </select>
                      <select className="select w-auto min-w-[130px]" defaultValue="All Job Types">
                        <option>All Job Types</option>
                        <option>Full-time</option>
                        <option>Contract</option>
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
                      <table className="w-full min-w-[1000px] border-collapse">
                        <thead>
                          <tr className="border-b border-[#eef2f7] text-left text-[11px] font-bold uppercase tracking-wide text-ink-500">
                            <th className="py-2.5 pr-3">Advertisement</th>
                            <th className="py-2.5 pr-3">Status</th>
                            <th className="py-2.5 pr-3">Budget</th>
                            <th className="py-2.5 pr-3">Spend</th>
                            <th className="py-2.5 pr-3">Impressions</th>
                            <th className="py-2.5 pr-3">Clicks</th>
                            <th className="py-2.5 pr-3">Applications</th>
                            <th className="py-2.5 pr-3">CTR</th>
                            <th className="py-2.5 pr-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eef2f7]">
                          {ads.map((a) => (
                            <tr key={a.title} className="text-[13px]">
                              <td className="py-4 pr-3">
                                <div className="flex items-start gap-2.5">
                                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${a.tone}`}>
                                    <a.icon className="h-4 w-4" />
                                  </span>
                                  <div>
                                    <p className="font-bold text-ink-900">{a.title}</p>
                                    <p className="text-[11.5px] text-ink-500">{a.sub}</p>
                                    <p className="text-[11px] text-ink-500">{a.posted}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 pr-3">
                                <span className={`chip flex w-fit items-center gap-1.5 ${statusTone[a.status]}`}>
                                  {a.status === "Active" && <CheckCircle2 className="h-3 w-3" />}
                                  {a.status === "Paused" && <Clock3 className="h-3 w-3" />}
                                  {a.status}
                                </span>
                              </td>
                              <td className="py-4 pr-3 text-ink-700">
                                {a.budget}
                                <br />
                                <span className="text-[11px] text-ink-500">{a.budgetType}</span>
                              </td>
                              <td className="w-[140px] py-4 pr-3">
                                <p className="font-semibold text-ink-900">{a.spend}</p>
                                <p className="text-[11px] text-ink-500">{a.spendPct}</p>
                                <div className="mt-1.5 h-1.5 w-full max-w-[110px] rounded-full bg-[#e6edf7]">
                                  <div className={`h-full rounded-full ${a.barTone}`} style={{ width: `${a.pct}%` }} />
                                </div>
                              </td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.impressions}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.clicks}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.applications}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.ctr}</td>
                              <td className="py-4 pr-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                    aria-label={`Export ${a.title}`}
                                  >
                                    <Download className="h-3.5 w-3.5" />
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
                      <p className="text-[12.5px] text-ink-500">Showing 1 to 5 of 15 advertisements</p>
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

              <section className="card mt-5 flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                  <Megaphone className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="text-[14.5px] font-bold text-ink-900">Reach the right candidates faster</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
                    Our advertising platform helps you target the right audience and get more
                    qualified applications.
                  </p>
                  <a href="#" className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                    Learn how advertising works <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {highlights.map((h) => (
                    <div key={h.title} className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4f7fd] text-brand-500">
                        <h.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[12.5px] font-bold text-ink-900">{h.title}</p>
                        <p className="text-[11px] text-ink-500">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Ad Performance Overview</h3>
                  <select className="select h-9 w-auto min-w-[110px] text-[12px]" defaultValue="Last 30 Days">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
                <div className="mt-3 flex items-center gap-4 text-[11.5px]">
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> Impressions
                  </span>
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Clicks
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
                <h3 className="text-[14.5px] font-bold">Budget Summary</h3>
                <div className="mt-4 flex items-center gap-5">
                  <div className="relative h-[110px] w-[110px] shrink-0">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e6edf7" strokeWidth="4.5" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="4.5" strokeDasharray="36 64" strokeDashoffset="0" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="9 91" strokeDashoffset="-36" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2563eb" strokeWidth="4.5" strokeDasharray="43 57" strokeDashoffset="-45" />
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-center">
                      <span className="block text-[16px] font-extrabold text-ink-900">$1,732.45</span>
                      <span className="block text-[9.5px] text-ink-500">Total Spend</span>
                      <span className="block text-[9.5px] text-ink-500">(This Month)</span>
                    </span>
                  </div>
                  <ul className="space-y-2 text-[12px]">
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Active Ads
                      <span className="ml-auto font-semibold text-ink-900">$632.15</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Paused Ads
                      <span className="ml-auto font-semibold text-ink-900">$150.30</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> Completed Ads
                      <span className="ml-auto font-semibold text-ink-900">$749.00</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-500" /> Scheduled Ads
                      <span className="ml-auto font-semibold text-ink-900">$0.00</span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  Manage Budgets <ChevronRight className="h-3.5 w-3.5" />
                </a>
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
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
