"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Download,
  FileText,
  Gift,
  Headset,
  Landmark,
  LayoutGrid,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  Newspaper,
  Receipt,
  Search,
  Share2,
  ShieldCheck,
  Sparkle,
  UserCog,
  Users,
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

const paymentDetails = [
  { label: "Payment Method", value: "card" },
  { label: "Amount Paid", value: "$59.00 USD" },
  { label: "Billing Cycle", value: "Monthly" },
  { label: "Payment Date", value: "May 10, 2025, 10:24 AM" },
  { label: "Transaction ID", value: "TRX-2025-0510-7842" },
];

const nextSteps = [
  {
    icon: BriefcaseBusiness,
    title: "Post Jobs",
    desc: "Start posting jobs and reach thousands of qualified candidates.",
    cta: "Post a Job",
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Manage Candidates",
    desc: "Browse applications and manage your candidate pipeline.",
    cta: "View Candidates",
    tone: "bg-violet-50 text-violet-600",
  },
  {
    icon: BarChart3,
    title: "Track Performance",
    desc: "Monitor job performance and access helpful analytics.",
    cta: "View Analytics",
    tone: "bg-amber-50 text-amber-600",
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
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
}

export default function PaymentResultPage() {
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

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Subscriptions</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Checkout</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-500">Payment Result</span>
          </nav>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <div className="space-y-5">
              <section className="card p-8 text-center sm:p-10">
                <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center">
                  <span className="absolute -left-2 top-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="absolute right-1 top-6 h-2.5 w-2.5 rounded-full border-2 border-brand-400" />
                  <span className="absolute left-4 bottom-1 h-2 w-2 rotate-45 bg-amber-400" />
                  <span className="absolute right-3 bottom-4 h-2 w-2 rotate-45 bg-violet-400" />
                  <span className="grid h-[100px] w-[100px] place-items-center rounded-full bg-emerald-50">
                    <CheckCircle2 className="h-14 w-14 fill-emerald-500 text-white" />
                  </span>
                </div>

                <h1 className="mt-5 text-[24px] font-extrabold text-ink-900">Payment Successful!</h1>
                <p className="mx-auto mt-2.5 max-w-md text-[13.5px] leading-relaxed text-ink-500">
                  Your payment has been processed successfully and your subscription is now
                  active.
                </p>

                <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2.5 rounded-lg bg-emerald-50 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                  <p className="text-[13px] text-emerald-800">
                    Transaction ID: <span className="font-bold">TRX-2025-0510-7842</span>
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button className="btn-primary px-6">
                    <LayoutGrid className="h-4 w-4" /> Go to Dashboard
                  </button>
                  <button className="btn-ghost px-6">
                    <FileText className="h-4 w-4" /> View Subscription
                  </button>
                </div>
              </section>

              <section className="card p-5 sm:p-6">
                <h2 className="flex items-center gap-2 text-[15px] font-extrabold">
                  <CreditCard className="h-4 w-4 text-brand-500" /> Payment Details
                </h2>
                <div className="mt-4 divide-y divide-[#eef2f7]">
                  <div className="flex items-center justify-between py-3 text-[13px]">
                    <span className="text-ink-500">Payment Method</span>
                    <span className="flex items-center gap-1.5 font-semibold text-ink-900">
                      <span className="grid h-6 w-9 place-items-center rounded border border-[#e2e8f2] text-[9px] font-black italic text-blue-700">
                        VISA
                      </span>
                      &bull;&bull;&bull;&bull; 4242
                    </span>
                  </div>
                  {paymentDetails.slice(1).map((d) => (
                    <div key={d.label} className="flex items-center justify-between py-3 text-[13px]">
                      <span className="text-ink-500">{d.label}</span>
                      <span className="font-semibold text-ink-900">{d.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-3 text-[13px]">
                    <span className="text-ink-500">Receipt</span>
                    <a href="#" className="flex items-center gap-1.5 font-semibold text-brand-500">
                      Download Receipt <Download className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </section>

              <section className="card p-5 sm:p-6">
                <h2 className="text-[15px] font-extrabold">What&apos;s Next?</h2>
                <div className="mt-5 grid gap-6 sm:grid-cols-3">
                  {nextSteps.map((n, i) => (
                    <div
                      key={n.title}
                      className={`${i > 0 ? "sm:border-l sm:border-[#eef2f7] sm:pl-6" : ""}`}
                    >
                      <span className={`grid h-11 w-11 place-items-center rounded-full ${n.tone}`}>
                        <n.icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 text-[14px] font-bold text-ink-900">{n.title}</p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">{n.desc}</p>
                      <a
                        href="#"
                        className="mt-2.5 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500"
                      >
                        {n.cta} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card flex flex-col items-center gap-5 p-5 text-center sm:flex-row sm:text-left">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-ink-900">30-Day Money-Back Guarantee</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
                    If you&apos;re not satisfied with our service, you can request a full refund
                    within 30 days of your purchase.
                  </p>
                  <a href="#" className="mt-1.5 inline-block text-[12.5px] font-semibold text-brand-500">
                    Learn More
                  </a>
                </div>
                <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-dashed border-brand-300 text-brand-500">
                  <span className="text-center leading-none">
                    <span className="block text-[16px] font-extrabold">30</span>
                  </span>
                </span>
              </section>

              <p className="flex items-center justify-center gap-1.5 text-center text-[13px] text-ink-500">
                Thank you for choosing Energy Tail. We&apos;re excited to help you hire the best!{" "}
                <Sparkle className="h-3.5 w-3.5 fill-brand-400 text-brand-400" />
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Order Summary</h3>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-ink-900">Standard Plan</p>
                    <p className="text-[11.5px] text-ink-500">Monthly Subscription</p>
                  </div>
                  <span className="ml-auto text-[13px] font-bold text-ink-900">$59.00</span>
                </div>

                <div className="mt-4 space-y-2.5 border-t border-[#eef2f7] pt-4 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Subtotal</span>
                    <span className="font-semibold text-ink-900">$59.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Tax (0%)</span>
                    <span className="font-semibold text-ink-900">$0.00</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[#eef2f7] pt-3">
                  <span className="text-[14px] font-bold text-ink-900">Total Paid</span>
                  <span className="text-right">
                    <span className="block text-[20px] font-extrabold text-emerald-600">$59.00</span>
                    <span className="block text-[11px] text-ink-500">USD</span>
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                  <p className="text-[12px] text-emerald-800">
                    You saved $14.00 with monthly billing
                  </p>
                </div>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <Headset className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Our support team is here to help you with any billing questions.
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
