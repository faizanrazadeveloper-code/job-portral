"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import {
  Bell,
  Briefcase,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  CreditCard,
  Eye,
  ExternalLink,
  FileText,
  Headphones,
  Home,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Save,
  Search,
  Settings,
  Star,
  Users,
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

const tabs = ["Job Information", "Walk-In Locations", "Job Requirements", "Benefits", "Application Settings"];

const employmentTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels = ["Entry Level", "1 - 2 Years", "2 - 10 Years", "10+ Years"];
const departments = ["Operations", "Engineering", "HSE", "Maintenance"];
const industries = ["Oil, Gas & Energy", "Renewable Energy", "Petrochemical"];
const jobCategories = ["Field Operations", "Office / Admin", "Technical"];

const jobSummary = [
  { label: "Employment Type", value: "Full-time", icon: Calendar },
  { label: "Experience Level", value: "2 - 10 Years", icon: Clock },
  { label: "Department", value: "Operations", icon: Briefcase },
  { label: "Industry", value: "Oil, Gas & Energy", icon: Layers },
  { label: "Job Category", value: "Field Operations", icon: Building2 },
  { label: "Vacancies", value: "15", icon: Users },
  { label: "Posted Date", value: "Aug 07, 2026", icon: Calendar },
  { label: "Application Method", value: "Apply via Email", icon: Mail },
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

export default function EditJobPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [title, setTitle] = useState("Walk-In Interviews for Saudi Arabia");
  const [role, setRole] = useState("Various Positions");
  const [summary, setSummary] = useState(
    "Trans Arabian Employment Company is conducting walk-in interviews for our leading client in Saudi Arabia for various positions in Oil & Gas Industry."
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
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>My Jobs</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Edit Job</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Edit Job</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Update your job information and click save changes.
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">
                <ChevronRight className="h-4 w-4 rotate-180" /> Back to My Jobs
              </button>
              <button className="btn-primary px-6">
                <Save className="h-4 w-4" /> Save Changes
              </button>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Form */}
            <section className="card p-5 sm:p-6">
              <div className="-mx-5 flex gap-6 overflow-x-auto border-b border-[#eef2f7] px-5 sm:-mx-6 sm:px-6">
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
                <div className="pt-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label req">Job Title</label>
                      <input
                        className="input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="label req">Job Position / Role</label>
                      <input
                        className="input"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="label req">Employment Type</label>
                      <select className="select" defaultValue={employmentTypes[0]}>
                        {employmentTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label req">Experience Level</label>
                      <select className="select" defaultValue={experienceLevels[2]}>
                        {experienceLevels.map((l) => (
                          <option key={l}>{l}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label req">Department / Category</label>
                      <select className="select" defaultValue={departments[0]}>
                        {departments.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label req">Industry</label>
                      <select className="select" defaultValue={industries[0]}>
                        {industries.map((i) => (
                          <option key={i}>{i}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label req">Job Category</label>
                      <select className="select" defaultValue={jobCategories[0]}>
                        {jobCategories.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label req">Number of Vacancies</label>
                      <input className="input" type="number" defaultValue={15} min={1} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="label req">Job Summary / Short Description</label>
                    <div className="relative">
                      <textarea
                        className="input h-[100px] resize-none py-3 leading-relaxed"
                        maxLength={250}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                      />
                      <span className="absolute bottom-2.5 right-3.5 text-[11px] text-ink-500">
                        {summary.length}/250
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="label">Job Banner / Image</label>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="relative h-[150px] overflow-hidden rounded-xl">
                        <div className="ph ph-rig-night h-full w-full" />
                        <button className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-white/95 text-ink-700">
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="grid h-[150px] place-items-center rounded-xl border border-dashed border-[#dfe6f1] bg-[#f8fafc] text-center">
                        <div>
                          <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6 text-ink-500" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="mt-2 text-[13px] font-semibold text-ink-700">
                            Click to upload new image
                          </p>
                          <p className="mt-1 text-[11px] text-ink-500">PNG, JPG or WEBP (Max 5MB)</p>
                          <p className="mt-0.5 text-[11px] text-ink-500">
                            Recommended size: 1200x400px
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2.5 text-[11px] text-ink-500">
                      This image will appear on the job details page and job listings.
                    </p>
                  </div>
                </div>
              )}

              {tab > 0 && (
                <div className="grid min-h-[420px] place-items-center text-center">
                  <div>
                    <h2 className="text-[16.5px] font-extrabold">{tabs[tab]}</h2>
                    <p className="mt-2 text-[13px] text-ink-500">
                      This tab will be designed next.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Preview */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Job Preview</h3>
                  <a href="#" className="flex items-center gap-1 text-[12px] font-semibold text-brand-500">
                    <Eye className="h-3.5 w-3.5" /> View Public Page
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="relative mt-4 h-[130px] overflow-hidden rounded-xl">
                  <div className="ph ph-rig-night h-full w-full" />
                </div>

                <div className="relative -mt-8 ml-3">
                  <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-white shadow-card">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-brand-500 text-brand-500">
                      <path d="M12 2c3 4-2 5-1 9 1-1 2-1 3-3 1 3 0 6-3 8-4 2-8-1-8-5 0-3 2-5 4-6-1 2 0 3 1 3 1-2 1-4 4-6z" />
                    </svg>
                  </span>
                </div>

                <p className="mt-3 text-[15px] font-extrabold">{title}</p>

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
                  <span className="col-span-2 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> Posted 2 days ago
                  </span>
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Job Summary</h3>
                <ul className="mt-4 space-y-3.5">
                  {jobSummary.map((s) => (
                    <li key={s.label} className="flex items-center justify-between gap-2.5">
                      <span className="flex items-center gap-2 text-[12px] text-ink-500">
                        <s.icon className="h-3.5 w-3.5" /> {s.label}
                      </span>
                      <span className="text-[12.5px] font-semibold text-ink-900">{s.value}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                Make sure all information is correct before updating the job.
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
