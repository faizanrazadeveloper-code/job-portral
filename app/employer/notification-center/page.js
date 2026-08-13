"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  ClipboardList,
  DollarSign,
  FileText,
  Filter,
  Gift,
  Headset,
  Landmark,
  LineChart,
  Lock,
  LogOut,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  MoreVertical,
  Newspaper,
  Receipt,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Share2,
  Smartphone,
  UserCog,
  Users,
  Wallet,
  X,
  MapPin,
  HelpCircle,
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
    section: "ACCOUNT",
    items: [
      { label: "Profile Settings", icon: UserCog },
      { label: "Notification Center", icon: Bell, active: true },
      { label: "Security Settings", icon: ShieldCheck },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const filterTabs = [
  { label: "All", count: 28 },
  { label: "Unread", count: 5 },
  { label: "Jobs", count: 7 },
  { label: "Applications", count: 6 },
  { label: "Billing", count: 4 },
  { label: "System", count: 11 },
  { label: "Promotions", count: 0 },
];

const notifications = [
  {
    title: "New application received",
    desc: "Ahmed Khan applied for Senior Drilling Engineer",
    sub: "Job ID: JD-2025-00024",
    time: "Just now",
    badge: "New",
    unread: true,
    icon: CheckCircle2,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Job posting is now live",
    desc: 'Your job "HSE Specialist" has been published successfully.',
    sub: "Job ID: JD-2025-00027",
    time: "15 minutes ago",
    unread: true,
    icon: BriefcaseBusiness,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Subscription will expire soon",
    desc: "Your Job Seeker Pro plan will expire on May 28, 2025.",
    link: "Renew your subscription",
    time: "1 hour ago",
    unread: true,
    icon: Clock3,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    title: "New message from Sarah Johnson",
    desc: "Regarding your job post: Process Engineer",
    time: "3 hours ago",
    icon: Mail,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Payment received",
    desc: "We have received your payment of $299.00 for Job Package Pro.",
    sub: "Invoice ID: INV-2025-00125",
    time: "5 hours ago",
    icon: DollarSign,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Your ad performance report is ready",
    desc: "View the latest performance report for your active advertisement.",
    link: "View report",
    time: "Yesterday, 9:30 AM",
    icon: LineChart,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Security alert",
    desc: "A new login was detected from Chrome on Windows.",
    link: "Review activity",
    time: "May 20, 2025",
    icon: ShieldAlert,
    tone: "bg-slate-100 text-ink-500",
  },
  {
    title: "Special promotion for you!",
    desc: "Get 20% off on Sponsored Articles this week only.",
    link: "View offer",
    time: "May 19, 2025",
    icon: Gift,
    tone: "bg-rose-50 text-rose-500",
  },
];

const summary = [
  { icon: Bell, label: "Total Notifications", value: 28 },
  { icon: MessageSquare, label: "Unread", value: 5 },
  { icon: ClipboardList, label: "This Week", value: 16 },
  { icon: ClipboardList, label: "This Month", value: 43 },
];

const preferences = [
  { icon: Mail, title: "Email Notifications", desc: "Manage email preferences" },
  { icon: Bell, title: "Push Notifications", desc: "Manage push preferences" },
  { icon: Smartphone, title: "SMS Notifications", desc: "Manage SMS preferences" },
  { icon: MessageSquare, title: "In-App Notifications", desc: "Manage in-app preferences" },
];

const quickActions = [
  { icon: CheckCircle2, title: "Mark all as read", desc: "Clear all unread notifications" },
  { icon: Settings, title: "Notification Settings", desc: "Customize your notification preferences" },
  { icon: HelpCircle, title: "Help & Support", desc: "Need help with notifications?" },
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

export default function NotificationCenterPage() {
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
                <span className="text-brand-500">Notification Center</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Notification Center</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Stay updated with important activities and alerts.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">Mark all as read</button>
              <button
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                aria-label="Notification settings"
              >
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div>
              <div className="flex gap-6 overflow-x-auto border-b border-[#eef2f7]">
                {filterTabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setTab(i)}
                    className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 text-[13.5px] font-semibold transition ${
                      i === tab
                        ? "border-brand-500 text-brand-500"
                        : "border-transparent text-ink-500 hover:text-brand-500"
                    }`}
                  >
                    {t.label}
                    <span className={`chip ${i === tab ? "bg-brand-50 text-brand-600" : "bg-[#f4f7fd] text-ink-500"}`}>
                      {t.count}
                    </span>
                  </button>
                ))}
              </div>

              <section className="card mt-5 p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-2.5 text-[12.5px] font-semibold text-ink-700">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500" />
                    Select all
                  </label>
                  <div className="flex gap-3">
                    <select className="select w-auto min-w-[150px]" defaultValue="Sort by: Newest first">
                      <option>Sort by: Newest first</option>
                      <option>Sort by: Oldest first</option>
                      <option>Sort by: Unread first</option>
                    </select>
                    <button className="btn-ghost h-11 shrink-0 px-4 text-[12.5px]">
                      <Filter className="h-3.5 w-3.5" /> Filter
                    </button>
                  </div>
                </div>

                <div className="mt-4 divide-y divide-[#eef2f7]">
                  {notifications.map((n) => (
                    <div key={n.title} className="flex items-start gap-3.5 py-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full">
                        {n.unread && <span className="block h-2 w-2 rounded-full bg-brand-500" />}
                      </span>
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${n.tone}`}>
                        <n.icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="flex flex-wrap items-center gap-2 text-[13.5px] font-bold text-ink-900">
                          {n.title}
                          {n.badge && <span className="chip bg-brand-50 text-brand-600">{n.badge}</span>}
                        </p>
                        <p className="mt-0.5 text-[12.5px] text-ink-500">{n.desc}</p>
                        {n.sub && <p className="text-[11.5px] text-ink-500">{n.sub}</p>}
                        {n.link && (
                          <a href="#" className="mt-1 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                            {n.link} <ChevronRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="whitespace-nowrap text-[11.5px] text-ink-500">{n.time}</span>
                        <button className="text-ink-500 hover:text-ink-700" aria-label="More options">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <p className="text-[12.5px] text-ink-500">Showing 1 to 8 of 28 notifications</p>
                  <div className="flex items-center gap-2">
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
                    <button className="btn-ghost h-9 px-3 text-[12.5px]">
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Notification Summary</h3>
                  <a href="#" className="text-[12px] font-semibold text-brand-500">
                    View all
                  </a>
                </div>
                <div className="mt-3.5 space-y-3.5">
                  {summary.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f4f7fd] text-ink-500">
                        <s.icon className="h-4 w-4" />
                      </span>
                      <span className="text-[12.5px] text-ink-700">{s.label}</span>
                      <span className="ml-auto text-[13px] font-bold text-ink-900">{s.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Notification Preferences</h3>
                <div className="mt-3.5 space-y-1">
                  {preferences.map((p) => (
                    <a key={p.title} href="#" className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[#f8fafc]">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                        <p.icon className="h-4 w-4 text-brand-500" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[12.5px] font-bold text-ink-900">{p.title}</span>
                        <span className="block text-[11px] text-ink-500">{p.desc}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink-500" />
                    </a>
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

              <section className="rounded-xl bg-brand-50/60 p-5 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white">
                  <Bell className="h-5 w-5 text-brand-500" />
                </span>
                <p className="mt-3 text-[14px] font-bold text-ink-900">Never miss an update!</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">
                  Enable all notification channels to stay informed about important activities.
                </p>
                <button className="btn-primary mt-3.5 w-full">Enable All</button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
