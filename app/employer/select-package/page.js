"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Award,
  Bell,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Check,
  Crown,
  Gift,
  Landmark,
  Lock,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Newspaper,
  Receipt,
  Rocket,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Send,
  MapPin,
  X,
  ClipboardList,
  FileText,
  Megaphone,
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
      { label: "Job Packages", icon: ClipboardList, active: true },
      { label: "Subscriptions", icon: Newspaper },
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

const packages = [
  {
    name: "Basic",
    tagline: "Great for small hiring needs",
    icon: Send,
    tone: "bg-emerald-500",
    price: 49,
    features: [
      { label: "10 Days Listing", on: true },
      { label: "Top Job Listing", on: false },
      { label: "Company Profile Highlight", on: false },
      { label: "1 Job Post", on: true },
      { label: "Limited Resume Access", on: true },
      { label: "Email Support", on: true },
    ],
    posted: "12 Jobs Posted",
    btnTone: "border-emerald-500 text-emerald-600 hover:bg-emerald-50",
  },
  {
    name: "Standard",
    tagline: "Most popular choice",
    icon: Star,
    tone: "bg-brand-500",
    price: 99,
    popular: true,
    features: [
      { label: "20 Days Listing", on: true },
      { label: "Top Job Listing", on: true },
      { label: "Company Profile Highlight", on: true },
      { label: "3 Job Posts", on: true },
      { label: "20 Resume Access", on: true },
      { label: "Priority Email Support", on: true },
    ],
    posted: "45 Jobs Posted",
    btnTone: "bg-brand-500 text-white hover:bg-brand-600 border-brand-500",
  },
  {
    name: "Premium",
    tagline: "More visibility for better reach",
    icon: Crown,
    tone: "bg-violet-500",
    price: 199,
    features: [
      { label: "30 Days Listing", on: true },
      { label: "Top Job Listing", on: true },
      { label: "Company Profile Highlight", on: true },
      { label: "5 Job Posts", on: true },
      { label: "50 Resume Access", on: true },
      { label: "Priority Support", on: true },
      { label: "Job Highlight (Featured)", on: true },
    ],
    posted: "28 Jobs Posted",
    btnTone: "border-violet-500 text-violet-600 hover:bg-violet-50",
  },
  {
    name: "Enterprise",
    tagline: "Advanced features & priority",
    icon: Rocket,
    tone: "bg-amber-500",
    price: 399,
    features: [
      { label: "60 Days Listing", on: true },
      { label: "Top Job Listing", on: true },
      { label: "Company Profile Highlight", on: true },
      { label: "10 Job Posts", on: true },
      { label: "Unlimited Resume Access", on: true },
      { label: "Dedicated Account Manager", on: true },
      { label: "Job Highlight (Featured)", on: true },
      { label: "Featured in Newsletter", on: true },
    ],
    posted: "9 Jobs Posted",
    btnTone: "border-amber-500 text-amber-600 hover:bg-amber-50",
  },
];

const highlights = [
  { icon: TrendingUp, title: "Maximum Visibility", desc: "Get your job in front of more qualified candidates.", tone: "text-brand-500" },
  { icon: Target, title: "Targeted Reach", desc: "Reach professionals with the right skills and experience.", tone: "text-emerald-500" },
  { icon: TrendingUp, title: "Better Applications", desc: "Attract more relevant and qualified applicants.", tone: "text-violet-500" },
  { icon: Clock3, title: "Save Time", desc: "Our tools help you hire faster and more efficiently.", tone: "text-amber-500" },
];

const whyUpgrade = [
  { icon: Users, label: "Reach more qualified candidates" },
  { icon: Target, label: "Increase your job visibility" },
  { icon: FileText, label: "Get more relevant applications" },
  { icon: ShieldCheck, label: "Manage jobs more effectively" },
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

export default function SelectPackagePage() {
  const [open, setOpen] = useState(false);
  const [billing, setBilling] = useState("Monthly");
  const [selected, setSelected] = useState(null);

  const chosen = selected !== null ? packages[selected] : null;

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
            <span>Job Packages</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-500">Select Package</span>
          </nav>

          <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Select a Job Package</h1>
          <p className="mt-2 text-[13px] text-ink-500">
            Choose the right package to post your job and reach top energy professionals.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[13px] font-semibold text-ink-700">Billing Cycle:</span>
            <div className="flex items-center gap-1 rounded-lg border border-[#dfe6f1] bg-white p-1">
              <button
                onClick={() => setBilling("Monthly")}
                className={`h-8 rounded-md px-3.5 text-[12.5px] font-semibold ${
                  billing === "Monthly" ? "bg-brand-50 text-brand-600" : "text-ink-500"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("Yearly")}
                className={`flex h-8 items-center gap-1.5 rounded-md px-3.5 text-[12.5px] font-semibold ${
                  billing === "Yearly" ? "bg-brand-50 text-brand-600" : "text-ink-500"
                }`}
              >
                Yearly <span className="chip bg-emerald-50 text-emerald-600">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            {/* Main */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {packages.map((p, i) => (
                  <div
                    key={p.name}
                    className={`card relative flex flex-col p-5 ${
                      selected === i ? "border-brand-500 ring-2 ring-brand-500/15" : ""
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
                    <p className="mt-3 text-[17px] font-extrabold text-ink-900">{p.name}</p>
                    <p className="text-[11.5px] text-ink-500">{p.tagline}</p>

                    <p className="mt-3 flex items-baseline gap-1">
                      <span className="text-[26px] font-extrabold text-ink-900">${p.price}</span>
                      <span className="text-[12px] text-ink-500">/ per job</span>
                    </p>

                    <ul className="mt-4 flex-1 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f.label} className="flex items-center gap-2 text-[12.5px] text-ink-700">
                          {f.on ? (
                            <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                          ) : (
                            <X className="h-4 w-4 shrink-0 text-red-400" />
                          )}
                          {f.label}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-2.5">
                      <button
                        onClick={() => setSelected(i)}
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                          selected === i ? "border-brand-500" : "border-[#cbd5e1]"
                        }`}
                        aria-label={`Select ${p.name}`}
                      >
                        {selected === i && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                      </button>
                      <button
                        onClick={() => setSelected(i)}
                        className={`h-11 flex-1 rounded-lg border text-[13px] font-semibold transition ${
                          p.popular
                            ? "bg-brand-500 text-white hover:bg-brand-600 border-brand-500"
                            : p.btnTone
                        }`}
                      >
                        Select Package
                      </button>
                    </div>

                    <p className="mt-4 border-t border-[#eef2f7] pt-3 text-[12px] font-semibold text-ink-500">
                      {p.posted}
                    </p>
                  </div>
                ))}
              </div>

              <div className="card mt-5 flex items-start gap-3 p-4 sm:p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <p className="text-[12.5px] leading-relaxed text-ink-700">
                  All packages include access to our employer dashboard, applicant management, and
                  analytics.
                  <br />
                  Need a custom solution?{" "}
                  <a href="#" className="font-semibold text-brand-500">
                    Contact our team
                  </a>{" "}
                  for Enterprise plans.
                </p>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-3">
                    <h.icon className={`mt-0.5 h-5 w-5 shrink-0 ${h.tone}`} />
                    <div>
                      <p className="text-[13px] font-bold text-ink-900">{h.title}</p>
                      <p className="mt-1 text-[12px] leading-relaxed text-ink-500">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card border-brand-100 bg-brand-50/30 p-5 text-center">
                <h3 className="text-left text-[14.5px] font-bold">Your Selection</h3>

                {!chosen ? (
                  <>
                    <div className="mx-auto mt-4 flex h-[100px] w-[110px] items-center justify-center">
                      <ClipboardList className="h-16 w-16 text-brand-200" strokeWidth={1.2} />
                      <BriefcaseBusiness className="-ml-6 mt-8 h-9 w-9 text-brand-400" strokeWidth={1.5} />
                    </div>
                    <p className="mt-3 text-[14px] font-extrabold text-ink-900">
                      No package selected
                    </p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                      Please select a package to continue.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mt-4 rounded-xl bg-white p-4 text-left">
                      <div className="flex items-center gap-2.5">
                        <span className={`grid h-9 w-9 place-items-center rounded-full text-white ${chosen.tone}`}>
                          <chosen.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[13.5px] font-extrabold text-ink-900">{chosen.name}</p>
                          <p className="text-[11px] text-ink-500">{chosen.tagline}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-[22px] font-extrabold text-ink-900">
                        ${chosen.price}
                        <span className="text-[12px] font-medium text-ink-500"> / per job</span>
                      </p>
                    </div>
                    <button className="btn-primary mt-4 w-full">Continue to Payment</button>
                  </>
                )}
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Why Upgrade?</h3>
                <ul className="mt-3.5 space-y-3.5">
                  {whyUpgrade.map((w) => (
                    <li key={w.label} className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <w.icon className="h-4 w-4" />
                      </span>
                      <span className="text-[12.5px] font-semibold text-ink-700">{w.label}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13px] font-bold text-ink-900">
                  <Lock className="h-4 w-4 text-brand-500" /> Secure Payment
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Your payment information is encrypted and safe.
                </p>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
