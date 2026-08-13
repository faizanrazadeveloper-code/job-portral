"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  Bell,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Copy,
  CreditCard,
  FileText,
  HardHat,
  Headphones,
  Home,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Plane,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wallet,
  X,
} from "lucide-react";

const sideNav = [
  { label: "Dashboard", icon: Home },
  { label: "My Company", icon: Briefcase },
  {
    label: "Post a Job",
    icon: Building2,
    active: true,
    open: true,
    children: [
      { label: "Create New Job" },
      { label: "My Jobs" },
      { label: "Job Drafts" },
    ],
  },
  { label: "Applications", icon: FileText },
  { label: "Saved Candidates", icon: Star },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Billing", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

const jobSummary = [
  { label: "Employment Type", value: "Full-time", icon: Calendar },
  { label: "Experience Level", value: "2 - 10 Years", icon: Layers },
  { label: "Department", value: "Operations", icon: Briefcase },
  { label: "Industry", value: "Oil, Gas & Energy", icon: Building2 },
  { label: "Location", value: "Islamabad, Sadiqabad", icon: MapPin },
  { label: "Application Method", value: "Apply via Email", icon: Mail },
  { label: "Application Email", value: "jobs@transarabian.org", icon: Mail },
];

const walkInDetails = [
  {
    city: "Islamabad",
    date: "07-AUGUST-2026",
    venue: "G-7/1 Building No. 23, Street No. 31",
  },
  {
    city: "Sadiqabad",
    date: "13-AUGUST-2026",
    venue: "Midway Hotel, Main G.T. Road, Sadiqabad",
  },
];

const responsibilities = [
  "Perform assigned tasks as per requirements",
  "Ensure safety and quality standards",
  "Work closely with the team to meet project goals",
  "Follow company policies and procedures",
];

const requirements = [
  "Relevant experience in Oil & Gas / Industrial Projects",
  "Diploma / Trade Test Certificate (Relevant Field)",
  "Original Documents with CV",
  "Medical Fitness Certificate",
];

const benefits = [
  { label: "Competitive Salary", icon: Wallet, tone: "bg-brand-50 text-brand-500" },
  { label: "Medical Coverage", icon: ShieldCheck, tone: "bg-emerald-50 text-emerald-600" },
  { label: "Accommodation Provided", icon: Home, tone: "bg-amber-50 text-amber-600" },
  { label: "Transportation Provided", icon: Plane, tone: "bg-violet-50 text-violet-600" },
  { label: "Other Benefits as per company policy", icon: HardHat, tone: "bg-sky-50 text-sky-600" },
];

function SidebarContent() {
  return (
    <>
      <div className="flex h-[74px] items-center border-b border-[#eef2f7] px-5">
        <Logo compact />
      </div>

      <nav className="mt-4 flex-1 space-y-1 overflow-y-auto px-3">
        {sideNav.map((item) =>
          item.children ? (
            <div key={item.label}>
              <div className={`nav-item ${item.active ? "nav-item-active" : ""}`}>
                <item.icon className="h-[18px] w-[18px]" />
                <span className="flex-1">{item.label}</span>
                {item.open ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </div>
              {item.open && (
                <div className="ml-7 mt-1 space-y-1 border-l border-[#eef2f7] pl-3">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href="#"
                      className="block rounded-md px-2.5 py-2 text-[12.5px] font-semibold text-ink-500 transition hover:text-brand-500"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a key={item.label} href="#" className="nav-item">
              <item.icon className="h-[18px] w-[18px]" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="chip bg-brand-100 px-2 text-brand-600">{item.badge}</span>
              )}
            </a>
          )
        )}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white">
            <Headphones className="h-4 w-4 text-brand-500" />
          </span>
          <p className="text-[12.5px] font-bold">Need Help?</p>
        </div>
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-ink-500">
          We&apos;re here to help you create the perfect job.
        </p>
        <button className="btn-ghost mt-3 h-9 w-full bg-white px-3.5 text-[12.5px]">
          Contact Support
        </button>
      </div>
    </>
  );
}

export default function JobPreviewPage() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col border-r border-[#e8edf5] bg-white lg:flex">
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

      <div className="lg:pl-[260px]">
        <header className="sticky top-0 z-30 flex min-h-[74px] flex-wrap items-center gap-4 border-b border-[#e8edf5] bg-white px-4 py-3 sm:px-6">
          <BrandButton onClick={() => setOpen(true)} />

          <div className="relative order-2 w-full min-w-0 basis-full sm:max-w-[600px] lg:order-1 lg:flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
            <input
              className="h-11 w-full rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pl-11 pr-16 text-[13px] outline-none focus:border-brand-500"
              placeholder="Search for jobs, companies, candidates..."
            />
            <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-[#e2e8f2] bg-white px-2 py-1 text-[10.5px] font-semibold text-ink-500 sm:block">
              Ctrl + K
            </kbd>
          </div>

          <TopbarActions
            bellCount={3}
            message
            avatar={<Avatar size={34} />}
            name="John Smith"
            role="Employer"
          />
        </header>

        <main className="mx-auto max-w-[1320px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Post a Job</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Job Preview</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Job Preview</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Review your job details before publishing. You can go back and edit any
                information.
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">
                <ChevronRight className="h-4 w-4 rotate-180" /> Edit Job
              </button>
              <button className="btn-primary px-6">
                <Send className="h-4 w-4" /> Publish Job
              </button>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* Main */}
            <section className="card overflow-hidden">
              <div className="ph ph-rig-night h-[220px]" />

              <div className="p-5 sm:p-6">
                <div className="-mt-16 flex items-end gap-4">
                  <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border-4 border-white bg-white shadow-card">
                    <svg viewBox="0 0 24 24" className="h-9 w-9 fill-brand-500 text-brand-500">
                      <path d="M12 2c3 4-2 5-1 9 1-1 2-1 3-3 1 3 0 6-3 8-4 2-8-1-8-5 0-3 2-5 4-6-1 2 0 3 1 3 1-2 1-4 4-6z" />
                    </svg>
                  </span>
                  <div className="pb-1">
                    <p className="text-[15px] font-extrabold">Trans Arabian</p>
                    <p className="text-[12px] text-ink-500">Employment Company</p>
                  </div>
                  <span className="chip mb-1 ml-auto bg-emerald-50 text-emerald-600">
                    <Check className="mr-1 h-3.5 w-3.5" /> VERIFIED COMPANY
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <h2 className="text-[21px] font-extrabold">Walk-In Interviews for Saudi Arabia</h2>
                  <span className="chip bg-brand-50 text-brand-600">Full-time</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" /> Operations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" /> Various Positions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> 2 - 10 Years
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Islamabad, Sadiqabad
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> Posted 2 days ago
                  </span>
                </div>

                <div className="mt-6 border-t border-[#eef2f7] pt-6">
                  <h3 className="text-[14.5px] font-bold">Job Description</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-700">
                    Trans Arabian Employment Company is conducting walk-in interviews for our
                    leading client in Saudi Arabia for various positions in Oil &amp; Gas
                    Industry.
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-700">
                    Candidates must have relevant experience in Oil &amp; Gas / Industrial
                    Projects. Attractive salary package with other benefits as per company policy.
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-700">
                    Interested candidates are requested to attend the walk-in interview on the
                    given dates along with required documents.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-[14.5px] font-bold">Responsibilities</h3>
                  <ul className="mt-2.5 space-y-2">
                    {responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-[13px] text-ink-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-[14.5px] font-bold">Requirements</h3>
                  <ul className="mt-2.5 space-y-2">
                    {requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-[13px] text-ink-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 fill-brand-500 text-white" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-[14.5px] font-bold">Benefits</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {benefits.map((b) => (
                      <div
                        key={b.label}
                        className="flex flex-col items-start gap-2.5 rounded-xl border border-[#eef2f7] p-3.5"
                      >
                        <span className={`grid h-9 w-9 place-items-center rounded-lg ${b.tone}`}>
                          <b.icon className="h-4 w-4" />
                        </span>
                        <span className="text-[12px] font-semibold leading-snug text-ink-900">
                          {b.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  This is a preview of how your job will appear to candidates.
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Job Summary</h3>
                <ul className="mt-4 space-y-3.5">
                  {jobSummary.map((s) => (
                    <li key={s.label} className="flex items-start gap-2.5">
                      <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                      <span>
                        <span className="block text-[11.5px] text-ink-500">{s.label}</span>
                        <span className="block text-[12.5px] font-semibold text-ink-900">
                          {s.value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Walk-In Interview Details</h3>
                <div className="mt-4 divide-y divide-[#eef2f7]">
                  {walkInDetails.map((w, i) => (
                    <div key={w.city} className={i > 0 ? "pt-4" : "pb-4"}>
                      <p className="flex items-center gap-1.5 text-[13px] font-bold text-brand-500">
                        <MapPin className="h-3.5 w-3.5" /> {w.city}
                      </p>
                      <p className="mt-2 text-[11.5px] text-ink-500">Walk-In Date</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[12.5px] font-semibold text-ink-900">
                        <Calendar className="h-3.5 w-3.5 text-ink-500" /> {w.date}
                      </p>
                      <p className="mt-2 text-[11.5px] text-ink-500">Venue / Address</p>
                      <p className="mt-0.5 text-[12.5px] text-ink-700">{w.venue}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Application Method</h3>
                <p className="mt-3 flex items-center gap-1.5 text-[13px] font-bold text-ink-900">
                  <Mail className="h-4 w-4 text-brand-500" /> Apply via Email
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Candidates can apply by sending their CV to the email address.
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText("jobs@transarabian.org");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="mt-3 flex w-full items-center justify-between rounded-lg border border-[#dfe6f1] bg-[#f8fafc] px-3.5 py-2.5 text-[12.5px] font-semibold text-brand-500"
                >
                  jobs@transarabian.org
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-ink-500" />
                  )}
                </button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
