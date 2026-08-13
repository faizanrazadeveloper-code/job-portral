"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  ArrowLeftRight,
  Award,
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Download,
  FileText,
  Gift,
  Headset,
  Info,
  Landmark,
  List,
  LogOut,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  Newspaper,
  Pause,
  Plus,
  Receipt,
  Search,
  Share2,
  Star,
  UserCog,
  Users,
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
      { label: "Subscriptions", icon: Newspaper, active: true },
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
    section: "ACCOUNT",
    items: [
      { label: "Profile Settings", icon: UserCog },
      { label: "Notification Settings", icon: Bell },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const usage = [
  { label: "Active Jobs", icon: BriefcaseBusiness, used: 3, total: 3, pct: 100, tone: "bg-emerald-500", link: "Manage Jobs", iconTone: "bg-brand-50 text-brand-500" },
  { label: "Job Listings (30 Days)", icon: List, used: 18, total: 30, pct: 60, tone: "bg-blue-500", link: "View Job Listings", iconTone: "bg-blue-50 text-blue-600" },
  { label: "Resume Access", icon: Users, used: 56, total: 100, pct: 56, tone: "bg-violet-500", link: "View Resumes", iconTone: "bg-violet-50 text-violet-600" },
  { label: "Featured Jobs", icon: Star, used: 1, total: 3, pct: 33, tone: "bg-amber-500", link: "Manage Featured Jobs", iconTone: "bg-amber-50 text-amber-600" },
];

const actions = [
  { icon: ArrowLeftRight, title: "Change Plan", desc: "Upgrade or downgrade your plan to match your hiring needs.", cta: "Change Plan", tone: "bg-brand-50 text-brand-500" },
  { icon: Pause, title: "Pause Subscription", desc: "Temporarily pause your subscription and resume anytime.", cta: "Pause Subscription", tone: "bg-violet-50 text-violet-600" },
  { icon: XCircle, title: "Cancel Subscription", desc: "Cancel your subscription. You'll lose access after the billing period.", cta: "Cancel Subscription", tone: "bg-red-50 text-red-500" },
  { icon: Headset, title: "Need Help?", desc: "Our support team is here to help you with any billing questions.", cta: "Contact Support", tone: "bg-emerald-50 text-emerald-600" },
];

const invoices = [
  { id: "INV-2025-00045", date: "May 10, 2025", amount: "$59.00" },
  { id: "INV-2025-00014", date: "Apr 10, 2025", amount: "$59.00" },
  { id: "INV-2025-00001", date: "Mar 10, 2025", amount: "$59.00" },
];

const planFeatures = [
  "Up to 3 Active Jobs",
  "30-Day Job Listing",
  "100 Resume Access / month",
  "Priority Email Support",
  "Analytics & Reports",
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

export default function SubscriptionManagementPage() {
  const [open, setOpen] = useState(false);

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
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Subscriptions</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-500">Management</span>
          </nav>

          <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Subscription Management</h1>
          <p className="mt-2 text-[13px] text-ink-500">
            View and manage your subscription details, usage, billing and payment methods.
          </p>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div className="space-y-5">
              {/* Current plan */}
              <section className="card p-5 sm:p-6">
                <h2 className="text-[15px] font-extrabold">Current Plan</h2>
                <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                      <Star className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="flex items-center gap-2 text-[16px] font-extrabold text-ink-900">
                        Standard Plan <span className="chip bg-emerald-50 text-emerald-600">Active</span>
                      </p>
                      <p className="text-[12px] text-ink-500">Best for growing teams</p>
                      <p className="mt-1.5 flex items-baseline gap-1">
                        <span className="text-[22px] font-extrabold text-ink-900">$59</span>
                        <span className="text-[12px] text-ink-500">/ month</span>
                      </p>
                      <p className="text-[11.5px] text-ink-500">Billed monthly</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex items-start gap-2.5">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                      <div>
                        <p className="text-[11.5px] text-ink-500">Current Billing Cycle</p>
                        <p className="text-[12.5px] font-semibold text-ink-900">
                          May 10, 2025 - Jun 10, 2025
                        </p>
                        <p className="text-[11px] text-brand-500">31 days remaining</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                      <div>
                        <p className="text-[11.5px] text-ink-500">Next Billing Date</p>
                        <p className="text-[12.5px] font-semibold text-ink-900">Jun 10, 2025</p>
                        <p className="text-[11px] text-ink-500">Auto renews</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                      <div>
                        <p className="text-[11.5px] text-ink-500">Payment Method</p>
                        <p className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink-900">
                          &bull;&bull;&bull;&bull; 4242
                          <span className="text-[10px] font-black italic text-blue-700">VISA</span>
                        </p>
                        <a href="#" className="text-[11px] font-semibold text-brand-500">
                          Update
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-[#eef2f7] pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <button className="btn-ghost h-10 w-fit border-brand-500 px-4 text-[12.5px] text-brand-500">
                    Change Plan
                  </button>
                  <button className="h-10 w-fit rounded-lg border border-red-200 bg-red-50 px-4 text-[12.5px] font-semibold text-red-600 hover:bg-red-100">
                    Cancel Subscription
                  </button>
                </div>
              </section>

              {/* Usage overview */}
              <section className="card p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-extrabold">Usage Overview</h2>
                  <a href="#" className="text-[12.5px] font-semibold text-brand-500">
                    View All Usage
                  </a>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {usage.map((u) => (
                    <div key={u.label} className="rounded-xl border border-[#eef2f7] p-4">
                      <span className={`grid h-9 w-9 place-items-center rounded-lg ${u.iconTone}`}>
                        <u.icon className="h-4 w-4" />
                      </span>
                      <p className="mt-3 text-[12.5px] font-semibold text-ink-700">{u.label}</p>
                      <p className="mt-1 flex items-baseline justify-between">
                        <span className="text-[19px] font-extrabold text-ink-900">
                          {u.used} / {u.total}
                        </span>
                        <span className="text-[12px] font-semibold text-ink-500">{u.pct}%</span>
                      </p>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-[#e6edf7]">
                        <div className={`h-full rounded-full ${u.tone}`} style={{ width: `${u.pct}%` }} />
                      </div>
                      <p className="mt-1.5 text-[11px] text-ink-500">
                        {u.used} used of {u.total} allowed
                      </p>
                      <a href="#" className="mt-1.5 inline-block text-[11.5px] font-semibold text-brand-500">
                        {u.link}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-[#f4f7fd] p-3.5 text-[12.5px] text-ink-700">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  Usage resets on Jun 10, 2025 (next billing date).
                </div>
              </section>

              {/* Payment method */}
              <section className="card p-5 sm:p-6">
                <h2 className="text-[15px] font-extrabold">Payment Method</h2>
                <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-14 shrink-0 place-items-center rounded-md border border-[#e2e8f2] text-[11px] font-black italic text-blue-700">
                      VISA
                    </span>
                    <div>
                      <p className="flex items-center gap-2 text-[13.5px] font-bold text-ink-900">
                        Visa ending in 4242
                        <span className="chip bg-emerald-50 text-emerald-600">Default</span>
                      </p>
                      <p className="text-[11.5px] text-ink-500">Expires 04 / 2027</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-ink-900">Billing Address</p>
                    <p className="text-[12px] leading-relaxed text-ink-500">
                      John Smith
                      <br />
                      123 Energy St, Houston, TX 77002
                      <br />
                      United States
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-3">
                    <button className="btn-ghost h-10 px-4 text-[12.5px]">Update</button>
                    <button className="btn-primary h-10 px-4 text-[12.5px]">
                      <Plus className="h-3.5 w-3.5" /> Add New Card
                    </button>
                  </div>
                </div>
              </section>

              {/* Subscription actions */}
              <section>
                <h2 className="text-[15px] font-extrabold">Subscription Actions</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {actions.map((a) => (
                    <div key={a.title} className="card p-4">
                      <span className={`grid h-10 w-10 place-items-center rounded-full ${a.tone}`}>
                        <a.icon className="h-[18px] w-[18px]" />
                      </span>
                      <p className="mt-3 text-[13.5px] font-bold text-ink-900">{a.title}</p>
                      <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-500">{a.desc}</p>
                      <a
                        href="#"
                        className="mt-2.5 flex items-center gap-1 text-[12px] font-semibold text-brand-500"
                      >
                        {a.cta} <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Billing Summary</h3>
                <div className="mt-3.5 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Plan</span>
                    <span className="font-bold text-ink-900">Standard</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Billing Cycle</span>
                    <span className="font-bold text-ink-900">Monthly</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Amount</span>
                    <span className="font-bold text-ink-900">$59.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Next Billing Date</span>
                    <span className="font-bold text-ink-900">Jun 10, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Next Amount</span>
                    <span className="font-bold text-ink-900">$59.00</span>
                  </div>
                </div>
                <button className="btn-primary mt-4 w-full">View Invoices</button>
              </section>

              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Recent Invoices</h3>
                  <a href="#" className="text-[12px] font-semibold text-brand-500">
                    View All
                  </a>
                </div>
                <div className="mt-3.5 space-y-3">
                  {invoices.map((inv) => (
                    <div key={inv.id} className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f4f7fd] text-ink-500">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12.5px] font-bold text-ink-900">{inv.id}</p>
                        <p className="text-[11px] text-ink-500">{inv.date}</p>
                      </div>
                      <span className="shrink-0 text-[12.5px] font-bold text-ink-900">
                        {inv.amount}
                      </span>
                      <button
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                        aria-label={`Download ${inv.id}`}
                      >
                        <Download className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Your Plan Features</h3>
                <ul className="mt-3.5 space-y-2.5">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-4 inline-block text-[12.5px] font-semibold text-brand-500">
                  View All Features
                </a>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
