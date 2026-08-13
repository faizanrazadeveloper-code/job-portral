"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  Award,
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Download,
  Eye,
  ExternalLink,
  FileText,
  GraduationCap,
  Heart,
  Info,
  ListChecks,
  Lock,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  MoreVertical,
  Pencil,
  Search,
  Settings,
  Sparkles,
  Star,
  Target,
  UploadCloud,
  User,
  EyeOff,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "JOB SEEKER",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Find Jobs", icon: Search },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Saved Jobs", icon: Star },
      { label: "Job Alerts", icon: Bell },
    ],
  },
  {
    section: "CAREER",
    items: [
      {
        label: "My Resume",
        icon: FileText,
        open: true,
        children: [
          { label: "Resume Management", active: true },
          { label: "Cover Letters" },
          { label: "Profile Visibility" },
        ],
      },
      { label: "My Profile", icon: User },
      { label: "Skills Test", icon: Award },
      { label: "Career Advice", icon: Sparkles },
    ],
  },
  {
    section: "ACCOUNT",
    items: [{ label: "Messages", icon: MessageSquare, badge: 2 }],
  },
];

const resumeTabs = ["My Resumes (3)", "Resume Details", "Visibility Settings"];

const resumes = [
  {
    name: "John_Smith_Resume.pdf",
    type: "PDF",
    uploaded: "May 10, 2024",
    size: "312 KB",
    current: true,
    visible: true,
  },
  {
    name: "John_Smith_Resume.docx",
    type: "DOCX",
    uploaded: "Apr 20, 2024",
    size: "245 KB",
    visible: true,
  },
  {
    name: "John_Smith_Resume_Old.pdf",
    type: "PDF",
    uploaded: "Jan 15, 2024",
    size: "289 KB",
    visible: false,
  },
];

const resumeDetails = [
  { label: "Title", value: "Senior Drilling Engineer Resume" },
  { label: "Total Experience", value: "8+ Years" },
  { label: "Current Job Title", value: "Senior Drilling Engineer" },
  { label: "Industry", value: "Oil & Gas" },
  { label: "Job Type", value: "Full-time" },
  { label: "Preferred Location", value: "Dammam, Saudi Arabia" },
  { label: "Career Level", value: "Mid Level" },
  { label: "Notice Period", value: "30 Days" },
  { label: "Open to Relocation", value: "Yes" },
];

const tips = [
  { title: "Add a professional summary", desc: "A strong summary increases your chances of getting noticed." },
  { title: "List relevant skills", desc: "Skills help employers match you with the right jobs." },
  { title: "Quantify your achievements", desc: "Use numbers and results to show your impact." },
  { title: "Keep it updated", desc: "Update your resume regularly to stay relevant." },
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
              {section.items.map((item) =>
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
                  <a
                    key={item.label}
                    href="#"
                    className={`nav-item ${item.active ? "nav-item-active" : ""}`}
                  >
                    <item.icon className="h-[18px] w-[18px]" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="chip bg-brand-100 px-2 text-brand-600">{item.badge}</span>
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <p className="text-[12.5px] font-bold">Need Help?</p>
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-ink-500">
          We&apos;re here to help you find the right opportunity.
        </p>
        <button className="btn-ghost mt-3 h-9 w-full bg-white px-3.5 text-[12.5px]">
          Contact Support
        </button>
      </div>
    </>
  );
}

export default function ResumeManagementPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [visibility, setVisibility] = useState("visible");

  const strength = 85;
  const circumference = 2 * Math.PI * 46;
  const offset = circumference - (strength / 100) * circumference;

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

          <div className="order-2 flex w-full min-w-0 basis-full items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5 lg:order-1 lg:flex-1">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-3.5">
              <Search className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-full bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                placeholder="Search jobs, companies..."
              />
            </div>
            <div className="hidden items-center gap-2 border-l border-[#e2e8f2] px-3.5 sm:flex">
              <MapPin className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-[140px] bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                defaultValue="Saudi Arabia"
              />
            </div>
            <button className="btn-primary h-11 shrink-0 px-5">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>

          <TopbarActions
            heart
            bellCount={3}
            message
            avatar={
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
            }
            name="John Smith"
            role="Job Seeker"
          />
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Home</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>My Resume</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Resume Management</span>
          </nav>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-[24px] font-extrabold tracking-tight">Resume Management</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Create, manage and update your resumes. Keep your resumes up-to-date to increase
                your chances.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-6">
              <UploadCloud className="h-4 w-4" /> Upload New Resume
            </button>
          </div>

          {/* Current resume banner */}
          <section className="card mt-6 grid gap-6 border-brand-100 bg-brand-50/30 p-5 sm:p-6 lg:grid-cols-[130px_minmax(0,1fr)_260px]">
            <div className="h-[170px] w-[130px] justify-self-start overflow-hidden rounded-lg border border-[#dfe6f1] bg-white shadow-card">
              <div className="relative h-full w-full p-3">
                <span className="absolute right-2 top-2 chip bg-emerald-500 px-1.5 py-0.5 text-[9px] text-white">
                  CURRENT
                </span>
                <p className="text-[9px] font-extrabold text-ink-900">JOHN SMITH</p>
                <div className="mt-2 space-y-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[3px] rounded-full bg-[#e6edf7]"
                      style={{ width: i % 3 === 0 ? "60%" : "90%" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <p className="flex flex-wrap items-center gap-2.5 text-[15px] font-extrabold text-ink-900">
                John_Smith_Resume.pdf
                <span className="chip bg-brand-100 text-brand-600">Current Resume</span>
              </p>
              <p className="mt-1.5 text-[12px] text-ink-500">
                Uploaded on May 10, 2024 &nbsp;&middot;&nbsp; 312 KB &nbsp;&middot;&nbsp; PDF
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-[12.5px] font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4 fill-emerald-500 text-white" /> Resume is visible
                to employers
              </p>
              <p className="mt-1 text-[11.5px] text-ink-500">Last updated on May 10, 2024</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn-primary h-10 px-5 text-[12.5px]">
                  <Eye className="h-3.5 w-3.5" /> Preview Resume
                </button>
                <button className="btn-ghost h-10 bg-white px-5 text-[12.5px]">
                  <Pencil className="h-3.5 w-3.5" /> Edit Details
                </button>
              </div>
            </div>

            <div className="lg:justify-self-end lg:text-right">
              <h3 className="text-[13.5px] font-bold text-ink-900">Resume Strength</h3>
              <div className="relative mx-auto mt-3 h-[110px] w-[110px] lg:ml-auto lg:mr-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#e6edf7" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center text-[20px] font-extrabold text-ink-900">
                  {strength}%
                </span>
              </div>
              <p className="mt-2 text-[12.5px] font-bold text-emerald-600">Strong Resume</p>
              <p className="mt-0.5 text-[11.5px] text-ink-500">You&apos;re almost there!</p>
              <a
                href="#"
                className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-500"
              >
                Improve your resume <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <section className="card p-5 sm:p-6">
              <div className="-mx-5 flex gap-6 overflow-x-auto border-b border-[#eef2f7] px-5 sm:-mx-6 sm:px-6">
                {resumeTabs.map((t, i) => (
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
                  <h2 className="text-[15px] font-extrabold">All Resumes</h2>
                  <div className="mt-4 divide-y divide-[#eef2f7]">
                    {resumes.map((r) => (
                      <div
                        key={r.name}
                        className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center"
                      >
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-[10px] font-bold text-white ${
                            r.type === "PDF" ? "bg-red-500" : "bg-blue-600"
                          }`}
                        >
                          {r.type}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="flex flex-wrap items-center gap-2 text-[13.5px] font-bold text-ink-900">
                            {r.name}
                            {r.current && (
                              <span className="chip bg-emerald-50 text-emerald-600">Current</span>
                            )}
                          </p>
                          <p className="mt-0.5 text-[11.5px] text-ink-500">
                            Uploaded on {r.uploaded} &nbsp;&middot;&nbsp; {r.size}
                          </p>
                          <p className="text-[11.5px] text-ink-500">{r.type}</p>
                        </div>
                        <span
                          className={`flex shrink-0 items-center gap-1.5 text-[12px] font-semibold ${
                            r.visible ? "text-emerald-600" : "text-ink-500"
                          }`}
                        >
                          {r.visible ? (
                            <Eye className="h-3.5 w-3.5" />
                          ) : (
                            <EyeOff className="h-3.5 w-3.5" />
                          )}
                          {r.visible ? "Visible to Employers" : "Hidden from Employers"}
                        </span>
                        <div className="flex shrink-0 items-center gap-2">
                          <button className="btn-ghost h-9 px-3.5 text-[12.5px]">
                            <Eye className="h-3.5 w-3.5" /> Preview
                          </button>
                          <button
                            className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500 hover:text-brand-500"
                            aria-label="More"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === 1 && (
                <div className="pt-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[15px] font-extrabold">Resume Details</h2>
                    <button className="flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                  </div>
                  <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-3">
                    {resumeDetails.map((d) => (
                      <div key={d.label}>
                        <p className="text-[11.5px] text-ink-500">{d.label}</p>
                        <p className="mt-1 text-[13.5px] font-bold text-ink-900">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === 2 && (
                <div className="pt-6">
                  <h2 className="text-[15px] font-extrabold">Visibility Settings</h2>
                  <p className="mt-1.5 text-[12.5px] text-ink-500">
                    Control who can view your resume on the platform.
                  </p>
                  <div className="mt-5 space-y-3">
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 ${
                        visibility === "visible" ? "border-brand-500 bg-brand-50/40" : "border-[#eef2f7]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="visibility"
                        className="mt-1 h-4 w-4 accent-brand-500"
                        checked={visibility === "visible"}
                        onChange={() => setVisibility("visible")}
                      />
                      <span>
                        <span className="block text-[13.5px] font-bold text-ink-900">
                          Visible to Employers
                        </span>
                        <span className="block text-[12px] text-ink-500">
                          Employers can find and view your resume.
                        </span>
                      </span>
                    </label>
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 ${
                        visibility === "hidden" ? "border-brand-500 bg-brand-50/40" : "border-[#eef2f7]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="visibility"
                        className="mt-1 h-4 w-4 accent-brand-500"
                        checked={visibility === "hidden"}
                        onChange={() => setVisibility("hidden")}
                      />
                      <span>
                        <span className="block text-[13.5px] font-bold text-ink-900">
                          Hidden from Employers
                        </span>
                        <span className="block text-[12px] text-ink-500">
                          Your resume will not be visible in search results.
                        </span>
                      </span>
                    </label>
                  </div>
                  <button className="btn-primary mt-5">
                    <Settings className="h-4 w-4" /> Manage Visibility
                  </button>
                </div>
              )}
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="flex items-center gap-2 text-[14.5px] font-bold">
                  <Target className="h-4 w-4 text-brand-500" /> Tips for a Strong Resume
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {tips.map((t) => (
                    <li key={t.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      <span>
                        <span className="block text-[12.5px] font-bold text-ink-900">
                          {t.title}
                        </span>
                        <span className="block text-[11.5px] leading-relaxed text-ink-500">
                          {t.desc}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500"
                >
                  View Resume Guide <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Resume Visibility</h3>
                <p className="mt-1.5 text-[12px] text-ink-500">
                  Control who can view your resume on the platform.
                </p>
                <div className="mt-4 space-y-3">
                  <label className="flex items-start gap-2.5">
                    <input
                      type="radio"
                      name="visibilitySidebar"
                      className="mt-1 h-4 w-4 accent-brand-500"
                      checked={visibility === "visible"}
                      onChange={() => setVisibility("visible")}
                    />
                    <span>
                      <span className="block text-[13px] font-bold text-ink-900">
                        Visible to Employers
                      </span>
                      <span className="block text-[11.5px] leading-relaxed text-ink-500">
                        Employers can find and view your resume.
                      </span>
                    </span>
                  </label>
                  <label className="flex items-start gap-2.5">
                    <input
                      type="radio"
                      name="visibilitySidebar"
                      className="mt-1 h-4 w-4 accent-brand-500"
                      checked={visibility === "hidden"}
                      onChange={() => setVisibility("hidden")}
                    />
                    <span>
                      <span className="block text-[13px] font-bold text-ink-900">
                        Hidden from Employers
                      </span>
                      <span className="block text-[11.5px] leading-relaxed text-ink-500">
                        Your resume will not be visible in search results.
                      </span>
                    </span>
                  </label>
                </div>
                <button className="btn-ghost mt-4 w-full">
                  <Settings className="h-4 w-4" /> Manage Visibility
                </button>
              </section>
            </aside>
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-xl bg-[#f4f7fd] p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="flex items-center gap-2 text-[12.5px] text-ink-700">
              <Info className="h-4 w-4 shrink-0 text-brand-500" />
              <span>
                <b>Your current resume is visible to employers.</b>
                <br />
                Employers can find and contact you based on your resume.
              </span>
            </p>
            <button className="btn-ghost shrink-0 bg-white">
              View Public Profile <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
