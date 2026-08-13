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
  CreditCard,
  Download,
  FileText,
  Gift,
  Landmark,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  MoreVertical,
  Newspaper,
  PieChart,
  Receipt,
  Search,
  Settings,
  Share2,
  User,
  UserCog,
  Users,
  Wallet,
  X,
  MapPin,
  Headset,
  Eye,
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
      { label: "Invoices", icon: Receipt, active: true },
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

const stats = [
  { icon: Wallet, tone: "bg-brand-500", label: "Total Spent", value: "$1,468.00", sub: "All time" },
  { icon: CreditCard, tone: "bg-emerald-500", label: "Paid", value: "$1,328.00", sub: "12 invoices" },
  { icon: PieChart, tone: "bg-amber-500", label: "Pending", value: "$140.00", sub: "1 invoice" },
  { icon: Receipt, tone: "bg-violet-500", label: "Overdue", value: "$0.00", sub: "0 invoices" },
];

const tabs = ["Invoices", "Receipts", "Payment Methods", "Billing History"];

const invoices = [
  {
    id: "INV-2025-00045",
    date: "May 10, 2025",
    desc: "Standard Plan",
    sub: "Job Posting Subscription",
    cycle: "May 10, 2025 - Jun 10, 2025",
    freq: "Monthly",
    amount: "$59.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00044",
    date: "Apr 10, 2025",
    desc: "Standard Plan",
    sub: "Job Posting Subscription",
    cycle: "Apr 10, 2025 - May 10, 2025",
    freq: "Monthly",
    amount: "$59.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00043",
    date: "Mar 10, 2025",
    desc: "Standard Plan",
    sub: "Job Posting Subscription",
    cycle: "Mar 10, 2025 - Apr 10, 2025",
    freq: "Monthly",
    amount: "$59.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00042",
    date: "Feb 10, 2025",
    desc: "Standard Plan",
    sub: "Job Posting Subscription",
    cycle: "Feb 10, 2025 - Mar 10, 2025",
    freq: "Monthly",
    amount: "$59.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00041",
    date: "May 20, 2025",
    desc: "Premium Add-on",
    sub: "Featured Jobs (3)",
    cycle: "One-time",
    freq: "",
    amount: "$140.00",
    status: "Pending",
  },
];

const statusTone = {
  Paid: "bg-emerald-50 text-emerald-600",
  Pending: "bg-amber-50 text-amber-700",
};

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

export default function BillingInvoicesPage() {
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
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-500">Billing &amp; Invoices</span>
          </nav>

          <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Billing &amp; Invoices</h1>
          <p className="mt-2 text-[13px] text-ink-500">
            View and download your invoices, receipts, and billing history.
          </p>

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

                {tab === 0 && (
                  <>
                    <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
                      <select className="select w-auto min-w-[130px]" defaultValue="All Status">
                        <option>All Status</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Overdue</option>
                      </select>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input
                          className="input w-auto min-w-[220px] pl-10"
                          defaultValue="May 1, 2025 - May 31, 2025"
                        />
                      </div>
                      <div className="relative flex-1 lg:max-w-[240px]">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="Search invoices..." />
                      </div>
                      <button className="btn-ghost h-11 shrink-0 px-4 text-[12.5px] lg:ml-auto">
                        <Download className="h-3.5 w-3.5" /> Export
                      </button>
                    </div>

                    <div className="mt-5 overflow-x-auto">
                      <table className="w-full min-w-[880px] border-collapse">
                        <thead>
                          <tr className="border-b border-[#eef2f7] bg-[#f8fafc] text-left text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                            <th className="rounded-l-lg py-3 px-3">Invoice ID</th>
                            <th className="py-3 px-3">Description</th>
                            <th className="py-3 px-3">Billing Cycle</th>
                            <th className="py-3 px-3">Amount</th>
                            <th className="py-3 px-3">Status</th>
                            <th className="rounded-r-lg py-3 px-3">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eef2f7]">
                          {invoices.map((inv) => (
                            <tr key={inv.id} className="text-[13px]">
                              <td className="py-3.5 px-3">
                                <p className="font-bold text-ink-900">{inv.id}</p>
                                <p className="text-[11.5px] text-ink-500">{inv.date}</p>
                              </td>
                              <td className="py-3.5 px-3">
                                <p className="font-semibold text-ink-900">{inv.desc}</p>
                                <p className="text-[11.5px] text-ink-500">{inv.sub}</p>
                              </td>
                              <td className="py-3.5 px-3">
                                <p className="text-ink-700">{inv.cycle}</p>
                                {inv.freq && <p className="text-[11.5px] text-ink-500">{inv.freq}</p>}
                              </td>
                              <td className="py-3.5 px-3">
                                <p className="font-bold text-ink-900">{inv.amount}</p>
                                <p className="text-[11.5px] text-ink-500">USD</p>
                              </td>
                              <td className="py-3.5 px-3">
                                <span className={`chip flex w-fit items-center gap-1.5 ${statusTone[inv.status]}`}>
                                  {inv.status === "Paid" ? (
                                    <CheckCircle2 className="h-3 w-3" />
                                  ) : (
                                    <Clock3 className="h-3 w-3" />
                                  )}
                                  {inv.status}
                                </span>
                              </td>
                              <td className="py-3.5 px-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                    aria-label={`Download ${inv.id}`}
                                  >
                                    <Download className="h-3.5 w-3.5" />
                                  </button>
                                  <button className="btn-ghost h-8 px-3 text-[12px]">
                                    <Eye className="h-3.5 w-3.5" /> View
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
                      <p className="text-[12.5px] text-ink-500">Showing 1 to 5 of 5 invoices</p>
                      <div className="flex items-center gap-2">
                        <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                          <ChevronRight className="h-4 w-4 rotate-180" />
                        </button>
                        <button className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-[12.5px] font-semibold text-white">
                          1
                        </button>
                        <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {tab !== 0 && (
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
                <h3 className="flex items-center gap-2 text-[14.5px] font-bold">
                  <Settings className="h-4 w-4 text-brand-500" /> Billing Settings
                </h3>
                <div className="mt-3.5 space-y-1">
                  <a href="#" className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[#f8fafc]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                      <CreditCard className="h-4 w-4 text-brand-500" />
                    </span>
                    <span>
                      <span className="block text-[12.5px] font-bold text-ink-900">Payment Methods</span>
                      <span className="block text-[11px] text-ink-500">Manage your saved cards</span>
                    </span>
                  </a>
                  <a href="#" className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[#f8fafc]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                      <User className="h-4 w-4 text-brand-500" />
                    </span>
                    <span>
                      <span className="block text-[12.5px] font-bold text-ink-900">Billing Information</span>
                      <span className="block text-[11px] text-ink-500">View or update your details</span>
                    </span>
                  </a>
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Payment Summary</h3>
                <div className="mt-3.5 space-y-3.5 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Last Payment</span>
                    <span className="text-right">
                      <span className="block font-semibold text-ink-900">May 10, 2025</span>
                      <span className="block font-bold text-emerald-600">$59.00</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Next Billing Date</span>
                    <span className="font-semibold text-ink-900">Jun 10, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Payment Method</span>
                    <span className="flex items-center gap-1.5 font-semibold text-ink-900">
                      <span className="grid h-6 w-9 place-items-center rounded border border-[#e2e8f2] text-[9px] font-black italic text-blue-700">
                        VISA
                      </span>
                      &bull;&bull;&bull;&bull; 4242
                    </span>
                  </div>
                </div>
                <button className="btn-ghost mt-4 w-full">View Payment History</button>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <Headset className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  If you have any questions about your invoices or payments, our support team is
                  here to help.
                </p>
                <button className="btn-primary mt-3.5 w-full">Contact Support</button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
