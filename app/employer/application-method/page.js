"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import {
  AlertTriangle,
  Bell,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  CreditCard,
  ExternalLink,
  FileText,
  Globe,
  Headphones,
  Home,
  Info,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Star,
  X,
} from "lucide-react";

const sideNav = [
  { label: "Dashboard", icon: Home },
  { label: "My Company", icon: Briefcase },
  {
    label: "Post a Job",
    icon: Building2,
    open: true,
    children: [
      { label: "Create New Job" },
      { label: "My Jobs", active: true },
      { label: "Job Drafts" },
    ],
  },
  { label: "Applications", icon: FileText },
  { label: "Saved Candidates", icon: Star },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Billing", icon: CreditCard },
  { label: "Settings", icon: Settings },
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
              <div className="nav-item">
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
                      className={`block rounded-md px-2.5 py-2 text-[12.5px] font-semibold transition ${
                        child.active ? "text-brand-500" : "text-ink-500 hover:text-brand-500"
                      }`}
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
          We&apos;re here to help you anytime you need it.
        </p>
        <button className="btn-ghost mt-3 h-9 w-full bg-white px-3.5 text-[12.5px]">
          Contact Support
        </button>
      </div>
    </>
  );
}

export default function ApplicationMethodPage() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("website");
  const [websiteUrl, setWebsiteUrl] = useState("https://www.transarabian.com/careers");
  const [email, setEmail] = useState("jobs@transarabian.com");
  const [instructions, setInstructions] = useState(
    "Please submit your updated CV and relevant documents through our website. Only shortlisted candidates will be contacted."
  );

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
        <header className="sticky top-0 z-30 flex h-[74px] items-center gap-4 border-b border-[#e8edf5] bg-white px-4 sm:px-6">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-[600px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
            <input
              className="h-11 w-full rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pl-11 pr-16 text-[13px] outline-none focus:border-brand-500"
              placeholder="Search for jobs, companies, candidates..."
            />
            <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-[#e2e8f2] bg-white px-2 py-1 text-[10.5px] font-semibold text-ink-500 sm:block">
              Ctrl + K
            </kbd>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="hidden text-ink-500 hover:text-brand-500 sm:block">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-2.5">
              <Avatar size={34} />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Employer</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <nav className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>My Jobs</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Walk-In Interviews for Saudi Arabia</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Application Method</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                Application Method
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Choose how candidates will apply for this job. You can update this anytime.
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">
                <ChevronRight className="h-4 w-4 rotate-180" /> Back to Job
              </button>
              <button className="btn-primary px-6">Save &amp; Continue</button>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* Form */}
            <section className="card p-5 sm:p-6">
              <h2 className="text-[16.5px] font-extrabold">Choose Application Method</h2>
              <p className="mt-1.5 text-[12.5px] text-ink-500">
                Select the method through which candidates will apply for this job.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Website option */}
                <label
                  className={`cursor-pointer rounded-xl border-2 p-5 transition ${
                    method === "website"
                      ? "border-brand-500 bg-brand-50/40"
                      : "border-[#eef2f7] hover:border-[#dfe6f1]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100">
                      <Globe className="h-6 w-6 text-brand-500" />
                    </span>
                    <input
                      type="radio"
                      name="method"
                      className="mt-1 h-4 w-4 accent-brand-500"
                      checked={method === "website"}
                      onChange={() => setMethod("website")}
                    />
                  </div>
                  <p className="mt-4 text-center text-[14.5px] font-bold text-ink-900">
                    Apply on Company Website
                  </p>
                  <p className="mt-1.5 text-center text-[12px] leading-relaxed text-ink-500">
                    Redirect candidates to your company website where they can complete the
                    application.
                  </p>

                  {method === "website" && (
                    <div
                      className="mt-4 rounded-lg border border-brand-100 bg-white p-3.5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <label className="label req text-[12px]">Company Website URL</label>
                      <div className="relative">
                        <input
                          className="input pr-9 text-[12.5px]"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                        />
                        <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 fill-emerald-500 text-white" />
                      </div>
                      <p className="mt-1.5 text-[11px] text-ink-500">
                        Enter the full URL (https://...)
                      </p>
                    </div>
                  )}
                </label>

                {/* Email option */}
                <label
                  className={`cursor-pointer rounded-xl border-2 p-5 transition ${
                    method === "email"
                      ? "border-brand-500 bg-brand-50/40"
                      : "border-[#eef2f7] hover:border-[#dfe6f1]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet-100">
                      <Mail className="h-6 w-6 text-violet-600" />
                    </span>
                    <input
                      type="radio"
                      name="method"
                      className="mt-1 h-4 w-4 accent-brand-500"
                      checked={method === "email"}
                      onChange={() => setMethod("email")}
                    />
                  </div>
                  <p className="mt-4 text-center text-[14.5px] font-bold text-ink-900">
                    Apply via Email
                  </p>
                  <p className="mt-1.5 text-center text-[12px] leading-relaxed text-ink-500">
                    Candidates will apply by sending their CV to the specified email address.
                  </p>

                  {method === "email" && (
                    <div
                      className="mt-4 rounded-lg border border-brand-100 bg-white p-3.5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <label className="label req text-[12px]">Application Email</label>
                      <input
                        className="input text-[12.5px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  )}
                </label>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <div>
                  <p className="text-[13px] font-bold text-amber-700">Important</p>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-amber-700/90">
                    Applications will be handled outside the platform. Make sure your website or
                    email is updated regularly.
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#eef2f7] pt-6">
                <h3 className="text-[14.5px] font-bold">
                  Additional Settings <span className="font-normal text-ink-500">(Optional)</span>
                </h3>
                <p className="mt-1 text-[12.5px] text-ink-500">
                  Add custom instructions for candidates.
                </p>

                <div className="mt-4">
                  <label className="label">Application Instructions</label>
                  <div className="relative">
                    <textarea
                      className="input h-[90px] resize-none py-3 leading-relaxed"
                      maxLength={300}
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                    />
                    <span className="absolute bottom-2.5 right-3.5 text-[11px] text-ink-500">
                      {instructions.length}/300
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="label">
                    Application Deadline <span className="font-normal text-ink-500">(Optional)</span>
                  </label>
                  <div className="relative max-w-[280px]">
                    <input className="input pr-10" placeholder="Select deadline date" />
                    <Calendar className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                  </div>
                  <p className="mt-1.5 text-[11px] text-ink-500">
                    If set, this will be shown to candidates.
                  </p>
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    <b className="text-ink-900">Note</b> — The selected application method will be
                    displayed on the job details page for candidates.
                  </span>
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Job Preview</h3>
                  <a href="#" className="text-[12px] font-semibold text-brand-500">
                    View Full Preview
                    <ExternalLink className="ml-1 inline h-3 w-3" />
                  </a>
                </div>

                <div className="relative mt-4 h-[130px] overflow-hidden rounded-xl">
                  <div className="ph ph-rig-night h-full w-full" />
                  <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-full border-4 border-white bg-white shadow-card">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-brand-500 text-brand-500">
                      <path d="M12 2c3 4-2 5-1 9 1-1 2-1 3-3 1 3 0 6-3 8-4 2-8-1-8-5 0-3 2-5 4-6-1 2 0 3 1 3 1-2 1-4 4-6z" />
                    </svg>
                  </span>
                </div>

                <p className="mt-3 text-[15px] font-extrabold">
                  Walk-In Interviews for Saudi Arabia
                </p>

                <div className="mt-2.5 grid grid-cols-2 gap-y-2 text-[12px] text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> Full-time
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> 2 - 10 Years
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" /> Operations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" /> Oil, Gas &amp; Energy
                  </span>
                  <span className="col-span-2 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Islamabad, Sadiqabad
                  </span>
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Application Method Preview</h3>
                <p className="mt-1.5 text-[12px] text-ink-500">
                  This is how candidates will see the application information.
                </p>

                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white">
                      {method === "website" ? (
                        <Globe className="h-5 w-5 text-brand-500" />
                      ) : (
                        <Mail className="h-5 w-5 text-violet-600" />
                      )}
                    </span>
                    <span className="chip bg-emerald-500 text-white">Selected</span>
                  </div>
                  <p className="mt-3 text-[13.5px] font-bold text-ink-900">
                    {method === "website" ? "Apply on Company Website" : "Apply via Email"}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">
                    {method === "website"
                      ? "Candidates will be redirected to your company website to complete the application."
                      : "Candidates will apply by sending their CV to the email address below."}
                  </p>

                  <div className="mt-3 rounded-lg bg-white p-3">
                    <p className="text-[11px] font-semibold text-ink-500">
                      {method === "website" ? "Company Website" : "Application Email"}
                    </p>
                    <p className="mt-1 flex items-center justify-between gap-2 text-[12.5px] font-semibold text-brand-500">
                      <span className="truncate">{method === "website" ? websiteUrl : email}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  Candidates will click the &quot;Apply Now&quot; button and be redirected to the
                  above {method === "website" ? "website" : "email"}.
                </div>
              </section>

              <section className="card p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f4f7fd]">
                    <Headphones className="h-4 w-4 text-brand-500" />
                  </span>
                  <p className="text-[13px] font-bold">Need Help?</p>
                </div>
                <p className="mt-2.5 text-[12px] leading-relaxed text-ink-500">
                  If you need help choosing the right application method, contact our support
                  team.
                </p>
                <button className="btn-ghost mt-3 h-9 w-full px-3.5 text-[12.5px]">
                  Contact Support
                </button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
