"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  Bell,
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileText,
  Headphones,
  ImagePlus,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  PlusCircle,
  Save,
  Search,
  Users,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "EMPLOYER",
    items: [
      { label: "Dashboard", icon: Building2 },
      { label: "My Company", icon: Briefcase },
      { label: "Post a Job", icon: PlusCircle, active: true },
      { label: "My Jobs", icon: FileText },
      { label: "Applicants", icon: Users },
      { label: "Resume Search", icon: Search },
    ],
  },
  {
    section: "TOOLS",
    items: [
      { label: "Saved Searches", icon: Bookmark },
      { label: "Job Alerts", icon: Bell },
    ],
  },
];

const wizardSteps = [
  { label: "Job Details" },
  { label: "Job Description" },
  { label: "Requirements" },
  { label: "Additional Info" },
  { label: "Review & Publish" },
];

const jobCategories = ["Engineering", "Health, Safety & Environment", "Operations", "Maintenance"];
const industries = ["Oil & Gas", "Renewable Energy", "Petrochemical", "Mining & Metals"];
const employmentTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Manager", "Director"];
const countries = ["Saudi Arabia", "United Arab Emirates", "Qatar", "Pakistan"];
const cities = ["Dhahran", "Riyadh", "Jeddah", "Dammam"];
const salaryTypes = ["Monthly", "Annual", "Hourly"];
const currencies = ["SAR (Saudi Riyal)", "USD (US Dollar)", "AED (UAE Dirham)"];
const jobVisibilities = ["Public", "Private", "Internal Only"];

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
                  className={`nav-item ${item.active ? "nav-item-active" : ""}`}
                >
                  <item.icon className="h-[18px] w-[18px]" />
                  <span className="flex-1">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white">
            <Headphones className="h-4 w-4 text-brand-500" />
          </span>
          <p className="text-[12.5px] font-bold">Need Help?</p>
        </div>
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-ink-500">
          We&apos;re here to help you post the perfect job.
        </p>
        <button className="btn-ghost mt-3 h-9 w-full bg-white px-3.5 text-[12.5px]">
          Contact Support
        </button>
      </div>
    </>
  );
}

export default function PostJobPage() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [remote, setRemote] = useState(false);
  const [showSalary, setShowSalary] = useState(true);
  const [featured, setFeatured] = useState(false);

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
          <BrandButton onClick={() => setOpen(true)} />

          <div className="relative order-2 w-full min-w-0 basis-full sm:max-w-[560px] lg:order-1 lg:flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
            <input
              className="h-11 w-full rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pl-11 pr-3 text-[13px] outline-none focus:border-brand-500"
              placeholder="Search jobs, companies..."
            />
          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] px-3.5 py-2.5 text-[13px] text-ink-700 lg:order-2 lg:flex">
            <MapPin className="h-4 w-4 text-ink-500" /> Saudi Arabia
          </div>

          <button className="btn-primary hidden h-11 px-5 lg:order-3 lg:flex">
            <Search className="h-4 w-4" /> Search
          </button>

          <TopbarActions
            bellCount={3}
            message
            avatar={
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-[12px] font-bold text-brand-600">
                SA
              </span>
            }
            name="Saudi Aramco"
            role="Employer"
          />
        </header>

        <main className="mx-auto max-w-[1100px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Home</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Post a Job</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Create Job</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Create Job</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Fill in the details below to post a new job. All fields marked with * are
                required.
              </p>
            </div>
            <button className="btn-ghost shrink-0">
              <Save className="h-4 w-4" /> Save as Draft
            </button>
          </div>

          {/* Stepper */}
          <div className="mb-7 flex items-center overflow-x-auto no-scrollbar">
            {wizardSteps.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center last:flex-none">
                <button onClick={() => setStep(i)} className="flex flex-col items-center gap-2">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full text-[13px] font-bold transition ${
                      i <= step
                        ? "bg-brand-500 text-white"
                        : "border-2 border-[#dbe4f2] bg-white text-ink-500"
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
                    className={`mx-1 mb-6 h-[2px] flex-1 rounded-full sm:mx-3 ${
                      i < step ? "bg-brand-500" : "bg-[#dbe4f2]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="space-y-5">
              {/* Basic Information */}
              <section className="card p-5 sm:p-6">
                <h2 className="flex items-center gap-2.5 text-[15px] font-extrabold">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50">
                    <ClipboardList className="h-4 w-4 text-brand-500" />
                  </span>
                  Basic Information
                </h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="label req">Job Title</label>
                    <input className="input" placeholder="e.g. Senior Drilling Engineer" />
                  </div>
                  <div>
                    <label className="label req">Job Category</label>
                    <select className="select" defaultValue="">
                      <option value="" disabled>
                        Select category
                      </option>
                      {jobCategories.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
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
                    <label className="label">Job Role / Position</label>
                    <input className="input" placeholder="e.g. Drilling Engineer" />
                  </div>
                  <div>
                    <label className="label req">Employment Type</label>
                    <select className="select" defaultValue="">
                      <option value="" disabled>
                        Select employment type
                      </option>
                      {employmentTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label req">Experience Level</label>
                    <select className="select" defaultValue="">
                      <option value="" disabled>
                        Select experience level
                      </option>
                      {experienceLevels.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              {/* Location & Salary */}
              <section className="card p-5 sm:p-6">
                <h2 className="flex items-center gap-2.5 text-[15px] font-extrabold">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50">
                    <MapPin className="h-4 w-4 text-brand-500" />
                  </span>
                  Location &amp; Salary
                </h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="label req">Country</label>
                    <select className="select" defaultValue={countries[0]}>
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
                  <div className="flex items-end pb-2.5">
                    <label className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-[#dfe6f1] accent-brand-500"
                        checked={remote}
                        onChange={(e) => setRemote(e.target.checked)}
                      />
                      <span>
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Remote Job
                        </span>
                        <span className="text-[11.5px] text-ink-500">
                          This is a remote position
                        </span>
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="label">Salary Type</label>
                    <select className="select" defaultValue="">
                      <option value="" disabled>
                        Select salary type
                      </option>
                      {salaryTypes.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label req">Salary Range (SAR)</label>
                    <div className="flex items-center gap-2">
                      <input className="input" placeholder="Minimum" />
                      <span className="text-ink-500">–</span>
                      <input className="input" placeholder="Maximum" />
                    </div>
                  </div>
                  <div>
                    <label className="label">Currency</label>
                    <select className="select" defaultValue={currencies[0]}>
                      {currencies.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <label className="mt-5 flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#dfe6f1] accent-brand-500"
                    checked={showSalary}
                    onChange={(e) => setShowSalary(e.target.checked)}
                  />
                  <span className="text-[13px] font-semibold text-ink-900">
                    Show salary on job listing
                  </span>
                </label>
              </section>

              {/* Job Banner */}
              <section className="card p-5 sm:p-6">
                <h2 className="flex items-center gap-2.5 text-[15px] font-extrabold">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50">
                    <ImagePlus className="h-4 w-4 text-brand-500" />
                  </span>
                  Job Banner / Image
                </h2>
                <p className="mt-1.5 text-[12.5px] text-ink-500">
                  Upload an attractive banner image for your job post. Recommended size: 1200 x
                  400px.
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="grid h-[190px] place-items-center rounded-xl border border-dashed border-[#dfe6f1] bg-[#f8fafc] text-center">
                    <div>
                      <ImagePlus className="mx-auto h-6 w-6 text-ink-500" />
                      <p className="mt-2 text-[13px] font-semibold text-ink-700">
                        Drag &amp; drop an image here
                      </p>
                      <p className="mt-1 text-[11.5px] text-ink-500">or</p>
                      <button className="btn-ghost mt-2.5 h-9 px-4 text-[12.5px]">
                        Choose File
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="label">Preview</p>
                    <div className="ph ph-rig-night relative h-[152px] rounded-xl">
                      <button className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-white/95 text-ink-700">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="mt-2 text-[11px] text-ink-500">JPG, PNG or WebP (Max. 2MB)</p>
                  </div>
                </div>
              </section>

              {/* Quick Info */}
              <section className="card p-5 sm:p-6">
                <h2 className="flex items-center gap-2.5 text-[15px] font-extrabold">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50">
                    <ListChecks className="h-4 w-4 text-brand-500" />
                  </span>
                  Quick Info
                </h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-4">
                  <div>
                    <label className="label">Application Deadline</label>
                    <div className="relative">
                      <input className="input pr-10" placeholder="Select date" />
                      <Calendar className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                    </div>
                  </div>
                  <div>
                    <label className="label">Vacancies</label>
                    <input className="input" defaultValue="1" type="number" min={1} />
                  </div>
                  <div>
                    <label className="label req">Job Visibility</label>
                    <select className="select" defaultValue={jobVisibilities[0]}>
                      {jobVisibilities.map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                    <p className="mt-1.5 text-[11px] text-ink-500">Anyone can see this job post</p>
                  </div>
                  <div>
                    <p className="label">Featured Job</p>
                    <label className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-[#dfe6f1] accent-brand-500"
                        checked={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                      />
                      <span className="text-[13px] font-semibold text-ink-900">
                        Promote this job
                      </span>
                    </label>
                  </div>
                </div>
              </section>

              <div className="flex items-center justify-between pt-1">
                <button className="btn-ghost">Cancel</button>
                <button
                  className="btn-primary px-7"
                  onClick={() => setStep((s) => Math.min(s + 1, wizardSteps.length - 1))}
                >
                  Save &amp; Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step > 0 && (
            <section className="card grid min-h-[420px] place-items-center p-6 text-center">
              <div>
                <h2 className="text-[16.5px] font-extrabold">{wizardSteps[step].label}</h2>
                <p className="mt-2 text-[13px] text-ink-500">This step will be designed next.</p>
                <button
                  className="btn-ghost mt-5"
                  onClick={() => setStep((s) => Math.max(s - 1, 0))}
                >
                  Back
                </button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
