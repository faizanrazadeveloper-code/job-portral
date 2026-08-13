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
  Download,
  Eye,
  FileEdit,
  FileText,
  FolderKanban,
  Gift,
  Info,
  Landmark,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  Mouse,
  MoreVertical,
  Newspaper,
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
      { label: "Sponsored Articles", icon: FileText, active: true },
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
  { icon: FileText, tone: "bg-brand-500", label: "Total Articles", value: "18", sub: "All time" },
  { icon: CheckCircle2, tone: "bg-emerald-500", label: "Active Articles", value: "11", sub: "Currently live" },
  { icon: Clock3, tone: "bg-amber-500", label: "Scheduled", value: "3", sub: "Not started yet" },
  { icon: Eye, tone: "bg-violet-500", label: "Total Views", value: "24,870", sub: "All articles" },
  { icon: Mouse, tone: "bg-teal-500", label: "Total Clicks", value: "1,953", sub: "All articles" },
];

const tabs = ["All Articles", "Active", "Scheduled", "Drafts", "Expired", "Archived"];

const articles = [
  {
    title: "Future of Clean Energy: Trends Shaping the Oil & Gas Industry",
    by: "By Energy Tail Team",
    id: "ID: SA-2025-00018",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80",
    category: "Industry Insights",
    catTone: "bg-brand-50 text-brand-600",
    status: "Active",
    views: "4,512",
    clicks: "356",
    ctr: "7.89%",
    start: "May 5, 2025",
    end: "May 31, 2025",
  },
  {
    title: "Top 10 In-Demand Jobs in Renewable Energy",
    by: "By Energy Tail Team",
    id: "ID: SA-2025-00017",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80",
    category: "Careers",
    catTone: "bg-emerald-50 text-emerald-600",
    status: "Active",
    views: "3,982",
    clicks: "287",
    ctr: "7.20%",
    start: "Apr 28, 2025",
    end: "May 24, 2025",
  },
  {
    title: "Digital Transformation in Oil & Gas: Technologies Driving Efficiency",
    by: "By Energy Tail Team",
    id: "ID: SA-2025-00016",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&q=80",
    category: "Technology",
    catTone: "bg-violet-50 text-violet-600",
    status: "Scheduled",
    views: "—",
    clicks: "—",
    ctr: "—",
    start: "Jun 1, 2025",
    end: "Jun 28, 2025",
  },
  {
    title: "LNG Market Outlook 2025: Key Opportunities & Challenges",
    by: "By Energy Tail Team",
    id: "ID: SA-2025-00015",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&q=80",
    category: "Market Analysis",
    catTone: "bg-sky-50 text-sky-600",
    status: "Active",
    views: "6,120",
    clicks: "512",
    ctr: "8.37%",
    start: "Apr 20, 2025",
    end: "May 20, 2025",
  },
  {
    title: "Sustainability in Energy: Building a Greener Tomorrow",
    by: "By Energy Tail Team",
    id: "ID: SA-2025-00014",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&q=80",
    category: "Sustainability",
    catTone: "bg-teal-50 text-teal-600",
    status: "Expired",
    views: "3,256",
    clicks: "210",
    ctr: "6.45%",
    start: "Mar 20, 2025",
    end: "Apr 20, 2025",
  },
];

const statusTone = {
  Active: "bg-emerald-50 text-emerald-600",
  Scheduled: "bg-amber-50 text-amber-700",
  Expired: "bg-red-50 text-red-500",
};

const topArticles = [
  { title: "LNG Market Outlook 2025", meta: "6,120 views  •  512 clicks", ctr: "8.37%", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&q=80" },
  { title: "Future of Clean Energy", meta: "4,512 views  •  356 clicks", ctr: "7.89%", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80" },
  { title: "Top 10 In-Demand Jobs", meta: "3,982 views  •  287 clicks", ctr: "7.20%", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80" },
];

const quickActions = [
  { icon: Plus, title: "Create New Article", desc: "Publish a new sponsored article" },
  { icon: FolderKanban, title: "Manage Categories", desc: "Organize article categories" },
  { icon: BarChart3, title: "View Article Reports", desc: "Detailed performance reports" },
  { icon: CreditCard, title: "Payment & Billing", desc: "Manage article payments and invoices" },
];

const views = [1500, 2100, 1800, 2500, 2000, 2700, 2300, 2900, 2100, 2600];
const clicksData = [400, 650, 500, 800, 620, 900, 700, 950, 680, 850];

function LineChart() {
  const maxVal = 3000;
  const w = 100 / (views.length - 1);
  const toPoints = (arr) => arr.map((v, i) => `${i * w},${100 - (v / maxVal) * 100}`).join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[170px] w-full">
      {[0, 25, 50, 75, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#eef2f7" strokeWidth="0.5" />
      ))}
      <polygon points={`0,100 ${toPoints(views)} 100,100`} fill="#2563eb" opacity="0.08" />
      <polyline points={toPoints(views)} fill="none" stroke="#2563eb" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <polyline points={toPoints(clicksData)} fill="none" stroke="#10b981" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {views.map((v, i) => (
        <circle key={i} cx={i * w} cy={100 - (v / maxVal) * 100} r="1.4" fill="#2563eb" />
      ))}
      {clicksData.map((v, i) => (
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

export default function SponsoredArticlesPage() {
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
                <span className="text-brand-500">Sponsored Articles</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                Sponsored Article Management
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Create, manage and track your sponsored articles.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Create New Article
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
                        <input className="input pl-10" placeholder="Search articles by title or keyword..." />
                      </div>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Status">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Scheduled</option>
                        <option>Expired</option>
                      </select>
                      <select className="select w-auto min-w-[140px]" defaultValue="All Categories">
                        <option>All Categories</option>
                        <option>Industry Insights</option>
                        <option>Careers</option>
                        <option>Technology</option>
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
                            <th className="py-2.5 pr-3">Article</th>
                            <th className="py-2.5 pr-3">Category</th>
                            <th className="py-2.5 pr-3">Status</th>
                            <th className="py-2.5 pr-3">Views</th>
                            <th className="py-2.5 pr-3">Clicks</th>
                            <th className="py-2.5 pr-3">CTR</th>
                            <th className="py-2.5 pr-3">Start Date</th>
                            <th className="py-2.5 pr-3">End Date</th>
                            <th className="py-2.5 pr-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eef2f7]">
                          {articles.map((a) => (
                            <tr key={a.id} className="text-[13px]">
                              <td className="max-w-[280px] py-4 pr-3">
                                <div className="flex items-start gap-2.5">
                                  <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-bold leading-snug text-ink-900">{a.title}</p>
                                    <p className="text-[11.5px] text-ink-500">{a.by}</p>
                                    <p className="text-[11px] text-ink-500">{a.id}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 pr-3">
                                <span className={`chip ${a.catTone}`}>{a.category}</span>
                              </td>
                              <td className="py-4 pr-3">
                                <span className={`chip flex w-fit items-center gap-1.5 ${statusTone[a.status]}`}>
                                  {a.status === "Active" && <CheckCircle2 className="h-3 w-3" />}
                                  {a.status === "Scheduled" && <Clock3 className="h-3 w-3" />}
                                  {a.status === "Expired" && <XCircle className="h-3 w-3" />}
                                  {a.status}
                                </span>
                              </td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.views}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.clicks}</td>
                              <td className="py-4 pr-3 font-semibold text-ink-900">{a.ctr}</td>
                              <td className="py-4 pr-3 text-ink-700">{a.start}</td>
                              <td className="py-4 pr-3 text-ink-700">{a.end}</td>
                              <td className="py-4 pr-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                    aria-label={`Export ${a.title}`}
                                  >
                                    <Download className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-brand-500 hover:bg-brand-50"
                                    aria-label={`Edit ${a.title}`}
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
                      <p className="text-[12.5px] text-ink-500">Showing 1 to 5 of 18 articles</p>
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
                  <p className="text-[13.5px] font-bold text-ink-900">How Sponsored Articles Work?</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                    Sponsored articles help you reach a targeted audience, build brand authority,
                    and drive more engagement. Your article will be displayed prominently across
                    our platform and email newsletters.
                  </p>
                  <a href="#" className="mt-2 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                    Learn more about sponsored articles <ChevronRight className="h-3.5 w-3.5" />
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
                    <p className="text-[11px] text-ink-500">Total Views</p>
                    <p className="text-[16px] font-extrabold text-ink-900">8,642</p>
                    <p className="flex items-center justify-center gap-0.5 text-[10.5px] font-semibold text-emerald-600">
                      <ArrowUp className="h-3 w-3" /> 12.5%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-500">Total Clicks</p>
                    <p className="text-[16px] font-extrabold text-ink-900">687</p>
                    <p className="flex items-center justify-center gap-0.5 text-[10.5px] font-semibold text-emerald-600">
                      <ArrowUp className="h-3 w-3" /> 8.3%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-500">Avg. CTR</p>
                    <p className="text-[16px] font-extrabold text-ink-900">7.94%</p>
                    <p className="flex items-center justify-center gap-0.5 text-[10.5px] font-semibold text-emerald-600">
                      <ArrowUp className="h-3 w-3" /> 2.1%
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-4 text-[11.5px]">
                  <span className="flex items-center gap-1.5 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> Views
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
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Top Performing Articles</h3>
                  <a href="#" className="text-[12px] font-semibold text-brand-500">
                    View All
                  </a>
                </div>
                <div className="mt-3.5 space-y-4">
                  {topArticles.map((a) => (
                    <div key={a.title} className="flex items-center gap-3">
                      <div className="h-12 w-14 shrink-0 overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12.5px] font-bold text-ink-900">{a.title}</p>
                        <p className="text-[11px] text-ink-500">{a.meta}</p>
                      </div>
                      <span className="shrink-0 text-[12.5px] font-bold text-emerald-600">{a.ctr}</span>
                    </div>
                  ))}
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
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
