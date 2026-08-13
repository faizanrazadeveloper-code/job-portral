"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Award,
  Bell,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Crown,
  DollarSign,
  FileEdit,
  Gift,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  LogOut,
  Megaphone,
  MessageSquare,
  Menu,
  Newspaper,
  Pencil,
  Percent,
  Plus,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  Star,
  Trash2,
  User,
  Users,
  X,
  BarChart3,
  Headset,
  Share2,
  FileText,
  Search,
  MapPin,
} from "lucide-react";

const sideNav = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Articles", icon: FileEdit },
      { label: "Companies", icon: Building2 },
      { label: "Jobs", icon: Briefcase },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Users", icon: Users },
    ],
  },
  {
    section: "MONETIZATION",
    items: [
      { label: "Job Packages / Pricing", icon: DollarSign, active: true },
      { label: "Subscriptions", icon: Newspaper },
      { label: "Payments", icon: Landmark },
      { label: "Coupons", icon: Gift },
    ],
  },
  {
    section: "PROMOTIONS",
    items: [
      { label: "Advertisements", icon: Megaphone },
      { label: "Sponsored Articles", icon: FileText },
      { label: "Affiliate Placements", icon: Share2 },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      { label: "Settings", icon: Settings },
      { label: "System Settings", icon: ShieldCheck },
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
    duration: "10 days listing",
    posted: "12 Jobs Posted",
    badge: "Active",
    badgeTone: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Standard",
    tagline: "Most popular choice",
    icon: Star,
    tone: "bg-brand-500",
    price: 99,
    duration: "20 days listing",
    posted: "45 Jobs Posted",
    badge: "Active",
    badgeTone: "bg-brand-50 text-brand-600",
    popular: true,
  },
  {
    name: "Premium",
    tagline: "More visibility for better reach",
    icon: Crown,
    tone: "bg-violet-500",
    price: 199,
    duration: "30 days listing",
    posted: "28 Jobs Posted",
    badge: "Active",
    badgeTone: "bg-violet-50 text-violet-600",
  },
  {
    name: "Enterprise",
    tagline: "Advanced features & priority",
    icon: Rocket,
    tone: "bg-amber-500",
    price: 399,
    duration: "60 days listing",
    posted: "9 Jobs Posted",
    badge: "Active",
    badgeTone: "bg-amber-50 text-amber-600",
  },
];

const features = [
  { label: "Job Posting Duration", icon: Clock3, values: ["10 Days", "20 Days", "30 Days", "60 Days"] },
  { label: "Featured Job", icon: Star, values: [false, true, true, true] },
  { label: "Top Job Listing", icon: BarChart3, values: [false, true, true, true] },
  { label: "Company Profile Highlight", icon: Building2, values: [false, true, true, true] },
  { label: "Jobs per Package", icon: Briefcase, values: ["1 Job", "3 Jobs", "5 Jobs", "10 Jobs"] },
  { label: "Resume Access", icon: FileText, values: ["Limited", "20 Resumes", "50 Resumes", "Unlimited"] },
  { label: "Applicant Contact Info", icon: Users, values: [false, true, true, true] },
  { label: "Priority Support", icon: Headset, values: ["-", "Standard", "Priority", "Dedicated"] },
  { label: "Analytics & Reports", icon: BarChart3, values: ["Basic", "Advanced", "Advanced", "Advanced"] },
  { label: "Social Media Promotion", icon: Megaphone, values: [false, false, true, true] },
];

const allPackages = [
  { name: "Basic", price: "$49", duration: "10 Days", jobs: 1, status: "Active", created: "May 10, 2025" },
  { name: "Standard", price: "$99", duration: "20 Days", jobs: 3, status: "Active", created: "May 10, 2025" },
  { name: "Premium", price: "$199", duration: "30 Days", jobs: 5, status: "Active", created: "May 10, 2025" },
  { name: "Enterprise", price: "$399", duration: "60 Days", jobs: 10, status: "Active", created: "May 10, 2025" },
];

const aboutPoints = [
  "Flexible packages for all business sizes",
  "Boost visibility and reach targeted talent",
  "Easy upgrade, downgrade or cancel",
];

const tips = [
  "Highlight popular packages to increase take rate.",
  "Offer discounts for long-term or bulk purchases.",
  "Use featured and top job to increase employer engagement.",
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

function FeatureCell({ value }) {
  if (value === true) return <Check className="h-4 w-4 text-emerald-500" />;
  if (value === false) return <X className="h-4 w-4 text-red-400" />;
  return <span className="text-ink-700">{value}</span>;
}

export default function JobPackagesPage() {
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
                <span className="block text-[11px] text-ink-500">Admin</span>
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
                <span className="text-ink-700">Job Packages / Pricing</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                Job Packages / Pricing
              </h1>
              <p className="mt-2 max-w-2xl text-[13px] text-ink-500">
                Create and manage job posting packages. Employers can choose a package that fits
                their hiring needs.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Add New Package
            </button>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            {/* Main */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {packages.map((p) => (
                  <div key={p.name} className="card relative p-5">
                    <button
                      className="absolute right-4 top-4 text-ink-500 hover:text-ink-700"
                      aria-label={`${p.name} options`}
                    >
                      <span className="text-[16px] leading-none">&#8942;</span>
                    </button>
                    <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${p.tone}`}>
                      <p.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-[16px] font-extrabold text-ink-900">{p.name}</p>
                    <p className="text-[11.5px] text-ink-500">{p.tagline}</p>

                    <p className="mt-4 flex items-baseline gap-1">
                      <span className="text-[26px] font-extrabold text-ink-900">${p.price}</span>
                      <span className="text-[12px] text-ink-500">/ per job</span>
                      <span className={`chip ml-auto ${p.badgeTone}`}>{p.badge}</span>
                    </p>
                    <p className="mt-1 text-[11.5px] text-ink-500">{p.duration}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-[#eef2f7] pt-3">
                      <span className="text-[12px] font-semibold text-ink-700">{p.posted}</span>
                      {p.popular && <span className="chip bg-brand-50 text-brand-600">Popular</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison table */}
              <section className="card mt-6 p-5 sm:p-6">
                <h2 className="text-[16px] font-extrabold">Package Comparison</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[820px] border-collapse text-[13px]">
                    <thead>
                      <tr className="border-b border-[#eef2f7] text-left">
                        <th className="py-3 pr-4 text-[12.5px] font-bold text-ink-700">Features</th>
                        <th className="py-3 pr-4">
                          <span className="block text-[13px] font-extrabold text-emerald-600">Basic</span>
                          <span className="text-[11.5px] text-ink-500">$49 / job</span>
                        </th>
                        <th className="py-3 pr-4">
                          <span className="flex items-center gap-2">
                            <span className="text-[13px] font-extrabold text-brand-500">Standard</span>
                            <span className="chip bg-brand-50 text-brand-600">Popular</span>
                          </span>
                          <span className="text-[11.5px] text-ink-500">$99 / job</span>
                        </th>
                        <th className="py-3 pr-4">
                          <span className="block text-[13px] font-extrabold text-violet-600">Premium</span>
                          <span className="text-[11.5px] text-ink-500">$199 / job</span>
                        </th>
                        <th className="py-3 pr-4">
                          <span className="block text-[13px] font-extrabold text-amber-600">Enterprise</span>
                          <span className="text-[11.5px] text-ink-500">$399 / job</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eef2f7]">
                      {features.map((f) => (
                        <tr key={f.label}>
                          <td className="py-3 pr-4">
                            <span className="flex items-center gap-2.5 text-ink-700">
                              <f.icon className="h-4 w-4 text-ink-500" /> {f.label}
                            </span>
                          </td>
                          {f.values.map((v, i) => (
                            <td key={i} className="py-3 pr-4">
                              <FeatureCell value={v} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 flex items-center gap-2 text-[11.5px] text-ink-500">
                  <Info className="h-3.5 w-3.5" /> All prices are in USD. Taxes may apply based on
                  location.
                </p>
              </section>

              {/* All Packages table */}
              <section className="card mt-6 p-5 sm:p-6">
                <h2 className="text-[16px] font-extrabold">All Packages</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#eef2f7] text-left text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                        <th className="py-2.5 pr-3">Package Name</th>
                        <th className="py-2.5 pr-3">Price (USD)</th>
                        <th className="py-2.5 pr-3">Duration</th>
                        <th className="py-2.5 pr-3">Jobs</th>
                        <th className="py-2.5 pr-3">Status</th>
                        <th className="py-2.5 pr-3">Created On</th>
                        <th className="py-2.5 pr-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eef2f7]">
                      {allPackages.map((p) => (
                        <tr key={p.name} className="text-[13px]">
                          <td className="py-3.5 pr-3 font-bold text-ink-900">{p.name}</td>
                          <td className="py-3.5 pr-3 text-ink-700">{p.price}</td>
                          <td className="py-3.5 pr-3 text-ink-700">{p.duration}</td>
                          <td className="py-3.5 pr-3 text-ink-700">{p.jobs}</td>
                          <td className="py-3.5 pr-3">
                            <span className="chip bg-emerald-50 text-emerald-600">{p.status}</span>
                          </td>
                          <td className="py-3.5 pr-3 text-ink-500">{p.created}</td>
                          <td className="py-3.5 pr-3">
                            <div className="flex items-center gap-2">
                              <button
                                className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-brand-500 hover:bg-brand-50"
                                aria-label={`Edit ${p.name}`}
                              >
                                <Pencil className="h-3.5 w-3.5" />
                              </button>
                              <button
                                className="grid h-8 w-8 place-items-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                                aria-label={`Delete ${p.name}`}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <p className="text-[12.5px] text-ink-500">Showing 1 to 4 of 4 packages</p>
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
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="flex items-center gap-2 text-[14.5px] font-bold">
                  <Info className="h-4 w-4 text-brand-500" /> About Packages
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-500">
                  Job packages help employers get maximum visibility for their job postings and
                  attract better candidates.
                </p>
                <ul className="mt-3.5 space-y-2.5">
                  {aboutPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      {p}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Package Status</h3>
                <div className="mt-3.5 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Total Packages</span>
                    <span className="font-bold text-ink-900">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Active Packages</span>
                    <span className="font-bold text-emerald-600">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Inactive Packages</span>
                    <span className="font-bold text-red-500">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Total Jobs Posted (This Month)</span>
                    <span className="font-bold text-ink-900">94</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-[#f4f7fd] py-2.5 text-[12.5px] font-semibold text-brand-500"
                >
                  View Job Posts <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-amber-800">
                  <Lightbulb className="h-4 w-4" /> Tips
                </p>
                <ul className="mt-3.5 space-y-3">
                  {tips.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-amber-800/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
