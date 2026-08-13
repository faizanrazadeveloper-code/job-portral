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
  Copy,
  FileText,
  Gift,
  Headset,
  Lightbulb,
  Landmark,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  MoreVertical,
  Newspaper,
  Plus,
  Receipt,
  Search,
  Share2,
  SlidersHorizontal,
  Tag,
  UserCog,
  Users,
  Wallet,
  X,
  MapPin,
  XCircle,
  BarChart3,
  History,
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
      { label: "Coupons", icon: Tag, active: true },
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
    section: "ACCOUNT",
    items: [
      { label: "Profile Settings", icon: UserCog },
      { label: "Notification Settings", icon: Bell },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const stats = [
  { icon: Tag, tone: "bg-brand-500", label: "Total Coupons", value: "12", sub: "All coupons" },
  { icon: CheckCircle2, tone: "bg-emerald-500", label: "Active Coupons", value: "7", sub: "Currently active" },
  { icon: Clock3, tone: "bg-amber-500", label: "Scheduled", value: "2", sub: "Not started yet" },
  { icon: XCircle, tone: "bg-rose-500", label: "Expired", value: "3", sub: "No longer valid" },
];

const tabs = ["All Coupons", "Active", "Scheduled", "Expired", "Usage History"];

const coupons = [
  {
    code: "WELCOME20",
    codeTone: "bg-brand-50 text-brand-600",
    name: "Welcome Offer",
    discount: "20% OFF",
    discountSub: "Percentage",
    applies: "Job Packages",
    appliesSub: "All Packages",
    used: 45,
    total: 100,
    pct: 45,
    period: "May 1, 2025",
    periodEnd: "May 31, 2025",
    status: "Active",
    barTone: "bg-brand-500",
  },
  {
    code: "SAVE50",
    codeTone: "bg-emerald-50 text-emerald-600",
    name: "Flat 50 off",
    discount: "$50 OFF",
    discountSub: "Fixed Amount",
    applies: "Job Packages",
    appliesSub: "Premium & Above",
    used: 12,
    total: 50,
    pct: 24,
    period: "Apr 20, 2025",
    periodEnd: "May 20, 2025",
    status: "Active",
    barTone: "bg-emerald-500",
  },
  {
    code: "NEWBIZ15",
    codeTone: "bg-violet-50 text-violet-600",
    name: "New Business Special",
    discount: "15% OFF",
    discountSub: "Percentage",
    applies: "Subscriptions",
    appliesSub: "All Plans",
    used: 8,
    total: 100,
    pct: 8,
    period: "May 15, 2025",
    periodEnd: "Jun 15, 2025",
    status: "Scheduled",
    barTone: "bg-violet-500",
  },
  {
    code: "SPRING25",
    codeTone: "bg-amber-50 text-amber-700",
    name: "Spring Campaign",
    discount: "25% OFF",
    discountSub: "Percentage",
    applies: "Job Packages",
    appliesSub: "All Packages",
    used: 120,
    total: 120,
    pct: 100,
    period: "Mar 1, 2025",
    periodEnd: "Mar 31, 2025",
    status: "Expired",
    barTone: "bg-red-500",
  },
  {
    code: "FREEMONTH",
    codeTone: "bg-teal-50 text-teal-600",
    name: "Free Month Trial",
    discount: "1 MONTH",
    discountSub: "Free",
    applies: "Subscriptions",
    appliesSub: "Monthly Plans",
    used: 32,
    total: 200,
    pct: 16,
    period: "Feb 1, 2025",
    periodEnd: "May 1, 2025",
    status: "Expired",
    barTone: "bg-teal-500",
  },
];

const statusTone = {
  Active: "bg-emerald-50 text-emerald-600",
  Scheduled: "bg-amber-50 text-amber-700",
  Expired: "bg-red-50 text-red-500",
};

const popularCoupons = [
  { rank: 1, code: "WELCOME20", uses: "45 uses", tone: "bg-brand-500" },
  { rank: 2, code: "SAVE50", uses: "12 uses", tone: "bg-emerald-500" },
  { rank: 3, code: "FREEMONTH", uses: "32 uses", tone: "bg-amber-500" },
];

const tips = [
  { icon: Clock3, text: "Create time-limited coupons for special campaigns." },
  { icon: SlidersHorizontal, text: "Set usage limits to control coupon distribution." },
  { icon: Share2, text: "Share coupons to attract more employers." },
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

export default function CouponsPage() {
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
                <span className="text-brand-500">Coupons</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Discount Coupons</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Create and manage discount coupons to save on job packages and subscriptions.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Create New Coupon
            </button>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
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
                      <p className="text-[11px] text-ink-500">{s.sub}</p>
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
                      <div className="relative flex-1 lg:max-w-[280px]">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="Search coupons by code or name..." />
                      </div>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Types">
                        <option>All Types</option>
                        <option>Percentage</option>
                        <option>Fixed Amount</option>
                        <option>Free</option>
                      </select>
                      <select className="select w-auto min-w-[120px]" defaultValue="All Status">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Scheduled</option>
                        <option>Expired</option>
                      </select>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input w-auto min-w-[110px] pl-10" defaultValue="All Time" />
                      </div>
                      <button className="btn-ghost h-11 shrink-0 px-4 text-[12.5px]">
                        <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
                      </button>
                    </div>

                    <div className="mt-5 overflow-x-auto">
                      <table className="w-full min-w-[980px] border-collapse">
                        <thead>
                          <tr className="border-b border-[#eef2f7] text-left text-[11px] font-bold uppercase tracking-wide text-ink-500">
                            <th className="py-2.5 pr-3">Coupon</th>
                            <th className="py-2.5 pr-3">Discount</th>
                            <th className="py-2.5 pr-3">Applies To</th>
                            <th className="py-2.5 pr-3">Usage</th>
                            <th className="py-2.5 pr-3">Valid Period</th>
                            <th className="py-2.5 pr-3">Status</th>
                            <th className="py-2.5 pr-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eef2f7]">
                          {coupons.map((c) => (
                            <tr key={c.code} className="text-[13px]">
                              <td className="py-4 pr-3">
                                <span className={`chip font-mono ${c.codeTone}`}>{c.code}</span>
                                <p className="mt-1.5 text-[12px] text-ink-500">{c.name}</p>
                              </td>
                              <td className="py-4 pr-3">
                                <p className="font-bold text-ink-900">{c.discount}</p>
                                <p className="text-[11.5px] text-ink-500">{c.discountSub}</p>
                              </td>
                              <td className="py-4 pr-3">
                                <p className="font-semibold text-ink-900">{c.applies}</p>
                                <p className="text-[11.5px] text-ink-500">{c.appliesSub}</p>
                              </td>
                              <td className="w-[140px] py-4 pr-3">
                                <p className="text-ink-700">
                                  {c.used} / {c.total}
                                </p>
                                <p className="text-[11.5px] text-ink-500">{c.pct}% used</p>
                                <div className="mt-1.5 h-1.5 w-full max-w-[110px] rounded-full bg-[#e6edf7]">
                                  <div
                                    className={`h-full rounded-full ${c.barTone}`}
                                    style={{ width: `${c.pct}%` }}
                                  />
                                </div>
                              </td>
                              <td className="py-4 pr-3 text-ink-700">
                                {c.period}
                                <br />- {c.periodEnd}
                              </td>
                              <td className="py-4 pr-3">
                                <span className={`chip flex w-fit items-center gap-1.5 ${statusTone[c.status]}`}>
                                  {c.status === "Active" ? (
                                    <CheckCircle2 className="h-3 w-3" />
                                  ) : c.status === "Scheduled" ? (
                                    <Clock3 className="h-3 w-3" />
                                  ) : (
                                    <XCircle className="h-3 w-3" />
                                  )}
                                  {c.status}
                                </span>
                              </td>
                              <td className="py-4 pr-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                    aria-label={`Copy ${c.code}`}
                                  >
                                    <Copy className="h-3.5 w-3.5" />
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
                      <p className="text-[12.5px] text-ink-500">Showing 1 to 5 of 12 coupons</p>
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
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Coupon Summary</h3>
                <div className="mt-3.5 space-y-3.5 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Total Savings Given</span>
                    <span className="font-bold text-emerald-600">$1,845.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Total Redemptions</span>
                    <span className="font-bold text-ink-900">217</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Average Discount</span>
                    <span className="font-bold text-ink-900">23%</span>
                  </div>
                </div>
              </section>

              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Popular Coupons</h3>
                  <a href="#" className="text-[12px] font-semibold text-brand-500">
                    View All
                  </a>
                </div>
                <div className="mt-3.5 space-y-3.5">
                  {popularCoupons.map((c) => (
                    <div key={c.code} className="flex items-center gap-3">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[12px] font-bold text-white ${c.tone}`}>
                        {c.rank}
                      </span>
                      <div>
                        <p className="font-mono text-[12.5px] font-bold text-ink-900">{c.code}</p>
                        <p className="text-[11px] text-ink-500">{c.uses}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-amber-800">
                  <Lightbulb className="h-4 w-4" /> Tips
                </p>
                <ul className="mt-3.5 space-y-3">
                  {tips.map((t) => (
                    <li key={t.text} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-amber-800/90">
                      <t.icon className="mt-0.5 h-4 w-4 shrink-0" />
                      {t.text}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <Headset className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  If you need help with coupons, our support team is here for you.
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
