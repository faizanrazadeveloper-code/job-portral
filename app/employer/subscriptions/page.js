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
  Check,
  Crown,
  Gift,
  Info,
  Landmark,
  LogOut,
  Menu,
  MessageSquare,
  Newspaper,
  Receipt,
  Search,
  ShieldCheck,
  Star,
  Users,
  Send,
  MapPin,
  X,
  ClipboardList,
  FileText,
  Megaphone,
  Share2,
  UserCog,
  Users2,
  BarChart3,
  Headset,
  Building,
  LayoutDashboard,
  Activity,
  CreditCard,
  Mail,
  Clock,
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

const plans = [
  {
    name: "Basic",
    tagline: "Perfect for getting started",
    icon: Send,
    tone: "bg-emerald-500",
    price: 29,
    features: [
      { label: "1 Active Job", info: true, on: true },
      { label: "30-Day Job Listing", on: true },
      { label: "Resume Access", sub: "Up to 20 resumes / month", on: true },
      { label: "Applicant Contact Info", sub: "Up to 20 contacts / month", on: true },
      { label: "Analytics & Reports", on: false },
      { label: "Priority Support", on: false },
      { label: "Featured Company Profile", on: false },
    ],
    cta: "Get Started",
    ctaTone: "border border-emerald-500 text-emerald-600 hover:bg-emerald-50",
  },
  {
    name: "Standard",
    tagline: "Best for growing teams",
    icon: Star,
    tone: "bg-brand-500",
    price: 59,
    popular: true,
    features: [
      { label: "3 Active Jobs", info: true, on: true },
      { label: "30-Day Job Listing", on: true },
      { label: "Resume Access", sub: "Up to 100 resumes / month", on: true },
      { label: "Applicant Contact Info", sub: "Up to 100 contacts / month", on: true },
      { label: "Analytics & Reports", on: true },
      { label: "Priority Support", on: true },
      { label: "Featured Company Profile", on: false },
    ],
    cta: "Get Started",
    ctaTone: "bg-brand-500 text-white hover:bg-brand-600 border border-brand-500",
  },
  {
    name: "Premium",
    tagline: "Advanced tools for better hiring",
    icon: Crown,
    tone: "bg-violet-500",
    price: 99,
    features: [
      { label: "10 Active Jobs", on: true },
      { label: "45-Day Job Listing", on: true },
      { label: "Resume Access", sub: "Up to 500 resumes / month", on: true },
      { label: "Applicant Contact Info", sub: "Up to 500 contacts / month", on: true },
      { label: "Analytics & Reports", on: true },
      { label: "Priority Support", on: true },
      { label: "Featured Company Profile", on: true },
    ],
    cta: "Get Started",
    ctaTone: "border border-violet-500 text-violet-600 hover:bg-violet-50",
  },
  {
    name: "Enterprise",
    tagline: "For large organizations",
    icon: Building,
    tone: "bg-amber-500",
    price: 199,
    features: [
      { label: "Unlimited Active Jobs", info: true, on: true },
      { label: "60-Day Job Listing", on: true },
      { label: "Resume Access", sub: "Unlimited", on: true },
      { label: "Applicant Contact Info", sub: "Unlimited", on: true },
      { label: "Advanced Analytics", on: true },
      { label: "Dedicated Account Manager", on: true },
      { label: "Featured Company Profile", on: true },
    ],
    cta: "Contact Sales",
    ctaTone: "border border-amber-500 text-amber-600 hover:bg-amber-50",
  },
];

const whyUpgrade = [
  { icon: BriefcaseBusiness, label: "Post more jobs and reach qualified candidates" },
  { icon: FileText, label: "Access more resumes and applicant information" },
  { icon: BarChart3, label: "Get insights with advanced analytics" },
  { icon: Headset, label: "Priority support when you need it" },
  { icon: Building2, label: "Feature your company and attract top talent" },
];

const allPlansInclude = [
  "Access to employer dashboard",
  "Job performance tracking",
  "Secure payments",
  "Email notifications",
  "24/7 Platform access",
];

const faqs = [
  "Can I change my plan later?",
  "Is there a setup fee?",
  "How does billing work?",
  "Can I cancel anytime?",
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

export default function SubscriptionsPage() {
  const [open, setOpen] = useState(false);
  const [billing, setBilling] = useState("Monthly");
  const [faqOpen, setFaqOpen] = useState(null);

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
            <span className="text-ink-700">Subscriptions</span>
          </nav>

          <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Subscription Plans</h1>
          <p className="mt-2 text-[13px] text-ink-500">
            Choose a plan that fits your hiring needs and unlock premium features.
          </p>

          <div className="mt-4 flex items-center gap-1 rounded-lg border border-[#dfe6f1] bg-white p-1 w-fit">
            <button
              onClick={() => setBilling("Monthly")}
              className={`h-9 rounded-md px-4 text-[13px] font-semibold transition ${
                billing === "Monthly" ? "bg-brand-500 text-white" : "text-ink-700"
              }`}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setBilling("Yearly")}
              className={`flex h-9 items-center gap-1.5 rounded-md px-4 text-[13px] font-semibold transition ${
                billing === "Yearly" ? "bg-brand-500 text-white" : "text-ink-700"
              }`}
            >
              Yearly Plans{" "}
              <span
                className={`chip ${
                  billing === "Yearly" ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"
                }`}
              >
                Save up to 20%
              </span>
            </button>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            {/* Main */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((p) => (
                  <div
                    key={p.name}
                    className={`card relative flex flex-col p-5 ${
                      p.popular ? "border-brand-500 ring-2 ring-brand-500/15" : ""
                    }`}
                  >
                    {p.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-500 text-white">
                        MOST POPULAR
                      </span>
                    )}
                    <span className={`grid h-12 w-12 place-items-center rounded-full text-white ${p.tone}`}>
                      <p.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-[16.5px] font-extrabold text-ink-900">{p.name}</p>
                    <p className="text-[11.5px] text-ink-500">{p.tagline}</p>

                    <p className="mt-3 flex items-baseline gap-1">
                      <span className="text-[26px] font-extrabold text-ink-900">${p.price}</span>
                      <span className="text-[12px] text-ink-500">/ month</span>
                    </p>
                    <p className="text-[11px] text-ink-500">Billed monthly</p>

                    <ul className="mt-4 flex-1 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f.label}>
                          <span
                            className={`flex items-center gap-2 text-[12.5px] ${
                              f.on ? "text-ink-700" : "text-ink-500 line-through"
                            }`}
                          >
                            {f.on ? (
                              <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                            ) : (
                              <X className="h-4 w-4 shrink-0 text-red-400" />
                            )}
                            {f.label}
                            {f.info && <Info className="h-3 w-3 shrink-0 text-ink-500" />}
                          </span>
                          {f.sub && (
                            <span className="ml-6 block text-[11px] text-ink-500">{f.sub}</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`mt-5 h-11 rounded-lg text-[13px] font-semibold transition ${p.ctaTone}`}
                    >
                      {p.cta}
                    </button>
                    <p className="mt-3 text-center text-[11.5px] text-ink-500">Cancel anytime</p>
                  </div>
                ))}
              </div>

              <div className="card mt-6 flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <p className="flex items-start gap-3 text-[12.5px] leading-relaxed text-ink-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span>
                    <span className="block font-bold text-ink-900">Secure &amp; Risk-Free</span>
                    Your payment is 100% secure. Cancel or change your plan anytime without any
                    hassle.
                  </span>
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="grid h-8 w-12 place-items-center rounded-md border border-[#e2e8f2] text-[10px] font-black italic text-blue-700">
                    VISA
                  </span>
                  <span className="grid h-8 w-12 place-items-center rounded-md border border-[#e2e8f2] bg-white">
                    <span className="flex -space-x-1.5">
                      <span className="h-4 w-4 rounded-full bg-red-500" />
                      <span className="h-4 w-4 rounded-full bg-amber-400" />
                    </span>
                  </span>
                  <span className="grid h-8 w-12 place-items-center rounded-md border border-[#e2e8f2] bg-[#1a73e8] text-[9px] font-black text-white">
                    AMEX
                  </span>
                  <span className="grid h-8 w-14 place-items-center rounded-md border border-[#e2e8f2] text-[10px] font-black italic text-[#003087]">
                    PayPal
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Why Upgrade?</h3>
                <ul className="mt-3.5 space-y-3.5">
                  {whyUpgrade.map((w) => (
                    <li key={w.label} className="flex items-start gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <w.icon className="h-4 w-4" />
                      </span>
                      <span className="text-[12.5px] leading-snug text-ink-700">{w.label}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">All Plans Include</h3>
                <ul className="mt-3.5 space-y-2.5">
                  {allPlansInclude.map((a) => (
                    <li key={a} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Billing FAQ</h3>
                <div className="mt-3.5 divide-y divide-[#eef2f7]">
                  {faqs.map((q, i) => (
                    <button
                      key={q}
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="flex w-full items-center justify-between gap-2 py-3 text-left text-[12.5px] font-semibold text-ink-700"
                    >
                      {q}
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-ink-500 transition ${
                          faqOpen === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
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
