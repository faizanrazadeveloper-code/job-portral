"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import {
  Bell,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  ExternalLink,
  FileText,
  Flame,
  Globe,
  HelpCircle,
  Image as ImageIcon,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Star,
  UploadCloud,
  Users,
  X,
} from "lucide-react";

const sideNav = [
  { label: "Dashboard", icon: Building2 },
  {
    label: "My Company",
    icon: Briefcase,
    children: [
      { label: "Profile Setup", active: true },
      { label: "Manage Profile" },
    ],
  },
  { label: "Post a Job", icon: FileText },
  { label: "My Jobs", icon: FileText },
  { label: "Applications", icon: Users },
  { label: "Saved Candidates", icon: Star },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Billing", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

const wizardSteps = [
  { label: "Company Info" },
  { label: "About Company" },
  { label: "Social Links" },
  { label: "Review & Submit" },
];

const industries = [
  "Oil, Gas & Energy",
  "Renewable Energy",
  "Petrochemical",
  "Mining & Metals",
  "Utilities",
];

const companySizes = [
  "1 – 50 Employees",
  "51 – 200 Employees",
  "201 – 500 Employees",
  "501 – 1000 Employees",
  "1000+ Employees",
];

const countries = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Pakistan", "United States"];

const cities = ["Dubai", "Abu Dhabi", "Riyadh", "Doha", "Karachi", "Houston"];

const openPositionsPreview = [
  { title: "Senior Drilling Engineer", location: "Dubai, UAE", type: "Full-time" },
  { title: "Reservoir Engineer", location: "Remote", type: "Full-time" },
  { title: "HSE Officer", location: "Abu Dhabi, UAE", type: "Full-time" },
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
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
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

      <div className="border-t border-[#eef2f7] p-3">
        <a
          href="#"
          className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-500"
        >
          <HelpCircle className="h-[18px] w-[18px]" /> Help Center
        </a>
      </div>
    </>
  );
}

export default function CompanyRegistrationPage() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");

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

        <main className="mx-auto max-w-[1320px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-[24px] font-extrabold tracking-tight">
              Company Registration / Profile Setup
            </h1>
            <nav className="mt-2 flex items-center gap-2 text-[12.5px] text-ink-500">
              <span>Dashboard</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-ink-700">Profile Setup</span>
            </nav>
            <p className="mt-2.5 text-[13px] text-ink-500">
              Set up your company profile to attract the right candidates.
            </p>
          </div>

          {/* Stepper */}
          <div className="mb-6 flex items-center">
            {wizardSteps.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center last:flex-none">
                <button onClick={() => setStep(i)} className="flex flex-col items-center gap-2">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full text-[13px] font-bold transition ${
                      i <= step ? "bg-brand-500 text-white" : "border-2 border-[#dbe4f2] bg-white text-ink-500"
                    }`}
                  >
                    {i < step ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[12.5px] font-semibold ${
                      i === step ? "text-brand-500" : "text-ink-500"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
                {i < wizardSteps.length - 1 && (
                  <span
                    className={`mx-3 mb-6 h-[2px] flex-1 rounded-full ${
                      i < step ? "bg-brand-500" : "bg-[#dbe4f2]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* Form */}
            <section className="card p-5 sm:p-6">
              {step === 0 && (
                <>
                  <h2 className="text-[16.5px] font-extrabold">Company Information</h2>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="label">Company Logo *</p>
                      <div className="grid h-[150px] w-full place-items-center rounded-xl border border-dashed border-[#dfe6f1] bg-[#f8fafc] text-center">
                        <div>
                          <UploadCloud className="mx-auto h-6 w-6 text-ink-500" />
                          <p className="mt-2 text-[13px] font-semibold text-ink-700">Upload Logo</p>
                          <p className="mt-1 text-[11px] text-ink-500">PNG, JPG or SVG (Max 2MB)</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="label">Company Cover Image</p>
                      <div className="grid h-[150px] w-full place-items-center rounded-xl border border-dashed border-[#dfe6f1] bg-[#f8fafc] text-center">
                        <div>
                          <ImageIcon className="mx-auto h-6 w-6 text-ink-500" />
                          <p className="mt-2 text-[13px] font-semibold text-ink-700">
                            Upload Cover Image
                          </p>
                          <p className="mt-1 text-[11px] text-ink-500">
                            Recommended size: 1200x400px (Max 5MB)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label req">Company Name</label>
                      <input
                        className="input"
                        placeholder="Enter company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="label">Website</label>
                      <div className="relative">
                        <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="https://www.yourcompany.com" />
                      </div>
                    </div>

                    <div>
                      <label className="label req">Industry</label>
                      <select className="select" defaultValue="">
                        <option value="" disabled>
                          Select industry
                        </option>
                        {industries.map((i) => (
                          <option key={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Company Size</label>
                      <select className="select" defaultValue="">
                        <option value="" disabled>
                          Select company size
                        </option>
                        {companySizes.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label req">Headquarters (Country)</label>
                      <select className="select" defaultValue="">
                        <option value="" disabled>
                          Select country
                        </option>
                        {countries.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label req">City</label>
                      <select className="select" defaultValue="">
                        <option value="" disabled>
                          Select city
                        </option>
                        {cities.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label req">Company Email</label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="info@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="label req">Phone Number</label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="label req">Short Description</label>
                    <div className="relative">
                      <textarea
                        className="input h-[110px] resize-none py-3 leading-relaxed"
                        placeholder="Write a short description about your company..."
                        maxLength={250}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <span className="absolute bottom-2.5 right-3.5 text-[11px] text-ink-500">
                        {description.length}/250
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#eef2f7] pt-5">
                    <button className="btn-ghost">Cancel</button>
                    <button
                      className="btn-primary px-7"
                      onClick={() => setStep((s) => Math.min(s + 1, wizardSteps.length - 1))}
                    >
                      Save &amp; Continue <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}

              {step > 0 && (
                <div className="grid min-h-[420px] place-items-center text-center">
                  <div>
                    <h2 className="text-[16.5px] font-extrabold">{wizardSteps[step].label}</h2>
                    <p className="mt-2 text-[13px] text-ink-500">
                      This step will be designed next.
                    </p>
                    <button
                      className="btn-ghost mt-5"
                      onClick={() => setStep((s) => Math.max(s - 1, 0))}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* Preview */}
            <aside className="card h-fit p-5">
              <h3 className="text-[14.5px] font-bold">Profile Preview</h3>
              <p className="mt-1.5 text-[12px] text-ink-500">
                This is how your company profile will appear to job seekers.
              </p>

              <div className="ph ph-rig mt-4 h-[130px] rounded-xl" />

              <div className="relative -mt-8 ml-3">
                <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-white shadow-card">
                  <Flame className="h-7 w-7 fill-brand-500 text-brand-500" strokeWidth={1} />
                </span>
              </div>

              <div className="mt-3">
                <p className="flex items-center gap-1.5 text-[15px] font-extrabold">
                  {companyName || "Company Name"}
                  <CheckCircle2 className="h-4 w-4 fill-brand-500 text-white" />
                </p>
                <p className="mt-1 text-[12px] text-ink-500">
                  Industry · City, Country · 201 – 500 Employees
                </p>
              </div>

              <div className="mt-4 border-t border-[#eef2f7] pt-4">
                <p className="text-[12.5px] font-bold">About Company</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                  {description ||
                    "Your short company description will appear here. It gives job seekers an overview of your company and work culture."}
                </p>
              </div>

              <div className="mt-4 border-t border-[#eef2f7] pt-4">
                <p className="text-[12.5px] font-bold">Open Positions (Preview)</p>
                <ul className="mt-3 space-y-3">
                  {openPositionsPreview.map((job) => (
                    <li key={job.title} className="flex gap-2.5 text-[12px]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>
                        <span className="block font-semibold text-ink-900">{job.title}</span>
                        <span className="text-ink-500">
                          {job.location} · {job.type}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                You can update all information later from your company dashboard.
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
