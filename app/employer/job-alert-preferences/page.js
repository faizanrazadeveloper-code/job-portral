"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  AtSign,
  Bell,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  DollarSign,
  FileText,
  Gift,
  HelpCircle,
  Landmark,
  Layers,
  LogOut,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  Newspaper,
  Pencil,
  Receipt,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  Tag,
  UserCog,
  Users,
  Wallet,
  X,
  Check,
  Clock3,
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
      { label: "Job Alert Preferences", icon: Bell, active: true },
      { label: "Notification Center", icon: Bell },
      { label: "Security Settings", icon: ShieldCheck },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const jobTypes = [
  { label: "Full-time", checked: true },
  { label: "Part-time", checked: true },
  { label: "Contract", checked: true },
  { label: "Temporary", checked: false },
  { label: "Internship", checked: true },
];

const alertPreview = [
  {
    title: "Drilling Engineer",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    salary: "12,000 - 18,000 SAR",
    type: "Full-time",
  },
  {
    title: "HSE Officer",
    company: "ADNOC Group",
    location: "Abu Dhabi, UAE",
    salary: "8,000 - 14,000 SAR",
    type: "Full-time",
  },
  {
    title: "Project Manager",
    company: "QatarEnergy",
    location: "Doha, Qatar",
    salary: "15,000 - 22,000 SAR",
    type: "Full-time",
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

function FieldRow({ icon: Icon, tone, title, sub, optional, children }) {
  return (
    <div className="grid gap-4 border-b border-[#eef2f7] py-6 last:border-0 lg:grid-cols-[220px_minmax(0,1fr)]">
      <div className="flex items-start gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${tone}`}>
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <div>
          <p className="flex items-center gap-1.5 text-[13.5px] font-bold text-ink-900">
            {title}
            {optional && <span className="text-[11px] font-normal text-ink-500">(Optional)</span>}
          </p>
          <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-500">{sub}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function JobAlertPreferencesPage() {
  const [open, setOpen] = useState(false);
  const [freq, setFreq] = useState("Daily");
  const [types, setTypes] = useState(jobTypes);
  const [locations, setLocations] = useState(["Saudi Arabia", "UAE", "Qatar"]);
  const [categories, setCategories] = useState(["Oil & Gas", "Engineering", "Project Management"]);
  const [keywords, setKeywords] = useState(["Drilling", "Reservoir Engineering", "HSE"]);
  const [summaryEmail, setSummaryEmail] = useState(true);
  const [paused, setPaused] = useState(false);

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
                <span className="text-brand-500">Job Alert Preferences</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Job Alert Preferences</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Customize your job alerts and never miss relevant opportunities.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button className="btn-primary px-5">
                <Check className="h-4 w-4" /> Save Changes
              </button>
              <button className="btn-ghost px-5">
                <RotateCcw className="h-4 w-4" /> Reset to Default
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Form */}
            <section className="card p-5 sm:p-6">
              <FieldRow
                icon={Mail}
                tone="bg-brand-50 text-brand-500"
                title="Alert Frequency"
                sub="Choose how often you want to receive job alerts."
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { label: "Instant", desc: "As soon as jobs match" },
                    { label: "Daily", desc: "Once a day" },
                    { label: "Weekly", desc: "Once a week" },
                  ].map((f) => (
                    <button
                      key={f.label}
                      onClick={() => setFreq(f.label)}
                      className={`flex items-center gap-2.5 rounded-xl border-2 p-3.5 text-left transition ${
                        freq === f.label ? "border-brand-500 bg-brand-50/40" : "border-[#eef2f7]"
                      }`}
                    >
                      <span
                        className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 ${
                          freq === f.label ? "border-brand-500" : "border-[#cbd5e1]"
                        }`}
                      >
                        {freq === f.label && <span className="h-2 w-2 rounded-full bg-brand-500" />}
                      </span>
                      <span>
                        <span className="block text-[13px] font-bold text-ink-900">{f.label}</span>
                        <span className="block text-[11px] text-ink-500">{f.desc}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </FieldRow>

              <FieldRow
                icon={Briefcase}
                tone="bg-emerald-50 text-emerald-600"
                title="Job Types"
                sub="Select the types of jobs you're interested in."
              >
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {types.map((t, i) => (
                    <label key={t.label} className="flex items-center gap-2 text-[13px] font-medium text-ink-700">
                      <input
                        type="checkbox"
                        checked={t.checked}
                        onChange={() =>
                          setTypes((prev) => prev.map((x, idx) => (idx === i ? { ...x, checked: !x.checked } : x)))
                        }
                        className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500"
                      />
                      {t.label}
                    </label>
                  ))}
                </div>
              </FieldRow>

              <FieldRow
                icon={MapPin}
                tone="bg-violet-50 text-violet-600"
                title="Locations"
                sub="Choose preferred job locations."
              >
                <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#dfe6f1] p-2">
                  {locations.map((l) => (
                    <span key={l} className="chip bg-brand-50 text-brand-600">
                      {l}
                      <button onClick={() => setLocations(locations.filter((x) => x !== l))} aria-label={`Remove ${l}`}>
                        <X className="ml-1 h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <input
                    className="min-w-[140px] flex-1 bg-transparent px-1.5 py-1 text-[13px] outline-none placeholder:text-ink-500"
                    placeholder="Add more locations..."
                  />
                  <ChevronDown className="h-4 w-4 shrink-0 text-ink-500" />
                </div>
                <a href="#" className="mt-2.5 flex w-fit items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  <MapPin className="h-3.5 w-3.5" /> Set distance preference
                </a>
              </FieldRow>

              <FieldRow
                icon={Layers}
                tone="bg-amber-50 text-amber-600"
                title="Job Categories"
                sub="Select the job categories you want alerts for."
              >
                <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#dfe6f1] p-2">
                  {categories.map((c) => (
                    <span key={c} className="chip bg-brand-50 text-brand-600">
                      {c}
                      <button onClick={() => setCategories(categories.filter((x) => x !== c))} aria-label={`Remove ${c}`}>
                        <X className="ml-1 h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <span className="chip bg-[#f4f7fd] text-ink-500">+2 more</span>
                  <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-ink-500" />
                </div>
                <a href="#" className="mt-2.5 inline-block text-[12.5px] font-semibold text-brand-500">
                  View all categories
                </a>
              </FieldRow>

              <FieldRow
                icon={DollarSign}
                tone="bg-emerald-50 text-emerald-600"
                title="Salary Range"
                sub="Get alerts for jobs within your desired salary range."
                optional
              >
                <div className="flex flex-wrap items-center gap-4">
                  <select className="select w-auto min-w-[120px]" defaultValue="5,000 SAR">
                    <option>5,000 SAR</option>
                    <option>8,000 SAR</option>
                    <option>10,000 SAR</option>
                  </select>
                  <div className="relative h-1.5 min-w-[160px] flex-1 rounded-full bg-[#e6edf7]">
                    <div className="absolute inset-y-0 left-[15%] right-[10%] rounded-full bg-brand-500" />
                    <span className="absolute left-[15%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-white" />
                    <span className="absolute right-[10%] top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-white" />
                  </div>
                  <select className="select w-auto min-w-[120px]" defaultValue="20,000+ SAR">
                    <option>20,000+ SAR</option>
                    <option>25,000+ SAR</option>
                    <option>30,000+ SAR</option>
                  </select>
                </div>
              </FieldRow>

              <FieldRow
                icon={Building2}
                tone="bg-rose-50 text-rose-500"
                title="Companies"
                sub="Get alerts for jobs from specific companies."
                optional
              >
                <div className="flex items-center gap-2 rounded-lg border border-[#dfe6f1] px-3.5 py-2.5">
                  <input
                    className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                    placeholder="Search and select companies..."
                  />
                  <ChevronDown className="h-4 w-4 shrink-0 text-ink-500" />
                </div>
              </FieldRow>

              <FieldRow
                icon={Tag}
                tone="bg-amber-50 text-amber-600"
                title="Keywords / Skills"
                sub="Add keywords or skills to refine your alerts."
              >
                <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#dfe6f1] p-2">
                  {keywords.map((k) => (
                    <span key={k} className="chip bg-brand-50 text-brand-600">
                      {k}
                      <button onClick={() => setKeywords(keywords.filter((x) => x !== k))} aria-label={`Remove ${k}`}>
                        <X className="ml-1 h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <input
                    className="min-w-[140px] flex-1 bg-transparent px-1.5 py-1 text-[13px] outline-none placeholder:text-ink-500"
                    placeholder="Add more keywords..."
                  />
                  <ChevronDown className="h-4 w-4 shrink-0 text-ink-500" />
                </div>
              </FieldRow>

              <FieldRow
                icon={AtSign}
                tone="bg-violet-50 text-violet-600"
                title="Email Preferences"
                sub="Manage where you receive job alerts."
              >
                <p className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-ink-900">
                  john.smith@example.com <span className="chip bg-emerald-50 text-emerald-600">Verified</span>
                </p>
                <label className="mt-3 flex items-start gap-2.5 text-[13px] text-ink-700">
                  <input
                    type="checkbox"
                    checked={summaryEmail}
                    onChange={(e) => setSummaryEmail(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#cbd5e1] accent-brand-500"
                  />
                  Send me a summary of new jobs
                </label>
                <label className="mt-2.5 flex items-start gap-2.5 text-[13px] text-ink-700">
                  <input
                    type="checkbox"
                    checked={paused}
                    onChange={(e) => setPaused(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#cbd5e1] accent-brand-500"
                  />
                  <span>
                    Pause all job alerts
                    <span className="block text-[11.5px] text-ink-500">
                      You won&apos;t receive any job alerts until re-enabled.
                    </span>
                  </span>
                </label>
              </FieldRow>
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Alert Summary</h3>
                <div className="mt-3.5 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <Clock3 className="h-3.5 w-3.5" /> Frequency
                    </span>
                    <span className="font-bold text-ink-900">{freq}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <Briefcase className="h-3.5 w-3.5" /> Job Types
                    </span>
                    <span className="font-bold text-ink-900">
                      {types.filter((t) => t.checked).length} selected
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <MapPin className="h-3.5 w-3.5" /> Locations
                    </span>
                    <span className="font-bold text-ink-900">{locations.length} selected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <Layers className="h-3.5 w-3.5" /> Categories
                    </span>
                    <span className="font-bold text-ink-900">5 selected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <DollarSign className="h-3.5 w-3.5" /> Salary Range
                    </span>
                    <span className="font-bold text-ink-900">5,000 SAR - 20,000+ SAR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <Tag className="h-3.5 w-3.5" /> Keywords
                    </span>
                    <span className="font-bold text-ink-900">{keywords.length} keywords</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-ink-500">
                      <Mail className="h-3.5 w-3.5" /> Email
                    </span>
                    <span className="truncate font-bold text-ink-900">john.smith@example.com</span>
                  </div>
                </div>
                <a href="#" className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </a>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Alert Preview</h3>
                <p className="mt-1.5 text-[11.5px] text-ink-500">
                  Example of jobs you&apos;ll receive alerts for:
                </p>
                <div className="mt-3.5 space-y-3">
                  {alertPreview.map((j) => (
                    <div key={j.title} className="rounded-lg border border-[#eef2f7] p-3.5">
                      <p className="text-[13px] font-bold text-brand-600">{j.title}</p>
                      <p className="mt-1 text-[12px] font-semibold text-ink-900">{j.company}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-[11.5px] text-ink-500">
                        <MapPin className="h-3.5 w-3.5" /> {j.location}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[11px] text-ink-500">
                          <DollarSign className="h-3.5 w-3.5" /> {j.salary}
                        </span>
                        <span className="chip bg-emerald-50 text-emerald-600">{j.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <HelpCircle className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Learn more about job alerts and how to get the most relevant opportunities.
                </p>
                <a href="#" className="mt-2.5 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                  View Help Center <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
