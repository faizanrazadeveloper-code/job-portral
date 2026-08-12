"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Award,
  Bell,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Info,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MoreVertical,
  Pencil,
  Phone,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  User,
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
      { label: "My Resume", icon: FileText },
      { label: "My Profile", icon: User, active: true },
      { label: "Skills Test", icon: Award },
      { label: "Career Advice", icon: Sparkles },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Messages", icon: MessageSquare, badge: 2 },
      { label: "Settings", icon: Settings },
      { label: "Privacy", icon: Lock },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const skills = [
  { label: "Well Planning", pct: 90 },
  { label: "Drilling Operations", pct: 88 },
  { label: "Mud Engineering", pct: 85 },
  { label: "Directional Drilling", pct: 80 },
  { label: "HSE Management", pct: 78 },
];

const experience = [
  {
    title: "Senior Drilling Engineer",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    period: "Jan 2020 – Present",
    desc: "Leading drilling operations for onshore and offshore projects. Responsible for well planning, risk assessment and ensuring HSE compliance.",
    points: [
      "Planned and executed 30+ successful drilling operations.",
      "Reduced non-productive time by 18% through process improvements.",
      "Managed cross-functional teams of up to 25 members.",
    ],
  },
  {
    title: "Drilling Engineer",
    company: "Baker Hughes",
    location: "Al Khobar, Saudi Arabia",
    period: "Jun 2016 – Dec 2019",
    desc: "Worked on directional drilling projects and real-time operations monitoring.",
    points: [
      "Assisted in well planning and trajectory design.",
      "Monitored drilling performance and prepared daily reports.",
      "Collaborated with geologists and field teams for better outcomes.",
    ],
  },
  {
    title: "Field Engineer",
    company: "Nabors Drilling",
    location: "Dammam, Saudi Arabia",
    period: "Jul 2013 – May 2016",
    desc: "Supported drilling activities and maintained equipment performance.",
    points: [
      "Conducted equipment inspections and troubleshooting.",
      "Assisted senior engineers in drilling operations.",
      "Ensured compliance with safety and quality standards.",
    ],
  },
];

const profileChecks = [
  "Basic Information",
  "Work Experience",
  "Skills Added",
  "Resume Uploaded",
];

const languages = [
  { label: "English", level: "Fluent", dots: 5, filled: 5 },
  { label: "Arabic", level: "Professional", dots: 5, filled: 4 },
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
                  {item.badge && (
                    <span className="chip bg-brand-100 px-2 text-brand-600">{item.badge}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white">
            <Info className="h-4 w-4 text-brand-500" />
          </span>
          <p className="text-[12.5px] font-bold">Need Help?</p>
        </div>
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

export default function MyProfilePage() {
  const [open, setOpen] = useState(false);

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
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5">
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

          <div className="ml-auto flex items-center gap-4">
            <button className="text-ink-500 hover:text-brand-500">
              <Heart className="h-[21px] w-[21px]" />
            </button>
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button className="text-ink-500 hover:text-brand-500">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Job Seeker</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Home</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Profile</span>
          </nav>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-[24px] font-extrabold tracking-tight">My Profile</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Manage your professional profile and career preferences.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">
                <Globe className="h-4 w-4" /> View Public Profile
              </button>
              <button className="btn-primary px-5">
                <Pencil className="h-4 w-4" /> Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main column */}
            <div className="space-y-5">
              {/* Header card */}
              <section className="card p-5 sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="relative shrink-0">
                    <span className="grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f] ring-4 ring-white" />
                    <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 text-[19px] font-extrabold text-ink-900">
                      John Smith
                      <CheckCircle2 className="h-4 w-4 fill-brand-500 text-white" />
                    </p>
                    <p className="mt-1 text-[13.5px] font-semibold text-ink-700">
                      Senior Drilling Engineer
                    </p>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-ink-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> Dammam, Saudi Arabia
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Open to
                        Relocation
                      </span>
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
                      Experienced drilling engineer with 8+ years in oil &amp; gas industry.
                      Skilled in well planning, drilling operations and team leadership.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#eef2f7] pt-4 text-[12.5px]">
                  <span className="flex items-center gap-2 text-brand-500">
                    <Mail className="h-4 w-4" /> john.smith@email.com
                  </span>
                  <span className="flex items-center gap-2 text-ink-700">
                    <Phone className="h-4 w-4 text-ink-500" /> +966 50 123 4567
                  </span>
                  <span className="flex items-center gap-2 text-brand-500">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                    linkedin.com/in/johnsmith
                  </span>
                </div>
              </section>

              {/* Professional Summary */}
              <section className="card p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-[15px] font-extrabold">
                    <User className="h-4 w-4 text-brand-500" /> Professional Summary
                  </h2>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-700">
                  Results-driven Senior Drilling Engineer with over 8 years of experience in
                  onshore and offshore drilling operations. Proven track record in executing
                  complex drilling projects safely, efficiently and within budget. Strong
                  leadership, problem-solving and technical skills with a focus on operational
                  excellence.
                </p>
              </section>

              {/* Work Experience */}
              <section className="card p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-[15px] font-extrabold">
                    <Briefcase className="h-4 w-4 text-brand-500" /> Work Experience
                  </h2>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>

                <div className="mt-5 space-y-6 border-l-2 border-[#eef2f7] pl-5">
                  {experience.map((job) => (
                    <div key={job.title} className="relative">
                      <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-white bg-brand-500 ring-2 ring-brand-100" />
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="text-[14px] font-bold text-ink-900">{job.title}</p>
                          <p className="mt-0.5 text-[12.5px] text-ink-500">
                            <span className="font-semibold text-ink-700">{job.company}</span>
                            &nbsp;&middot;&nbsp;{job.location}
                          </p>
                        </div>
                        <span className="chip bg-brand-50 text-brand-600">{job.period}</span>
                      </div>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-ink-500">{job.desc}</p>
                      <ul className="mt-2.5 space-y-1.5">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-[12.5px] text-ink-600">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="card p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-[15px] font-extrabold">
                    <GraduationCap className="h-4 w-4 text-brand-500" /> Education
                  </h2>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-50">
                      <GraduationCap className="h-5 w-5 text-emerald-600" />
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold text-ink-900">
                        Bachelor of Science in Petroleum Engineering
                      </p>
                      <p className="mt-0.5 text-[12.5px] text-ink-500">
                        King Fahd University of Petroleum &amp; Minerals
                      </p>
                    </div>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-ink-500">
                    <Calendar className="h-3.5 w-3.5" /> 2009 – 2013
                  </span>
                </div>
              </section>

              {/* Resume */}
              <section className="card p-5 sm:p-6">
                <h2 className="flex items-center gap-2 text-[15px] font-extrabold">
                  <FileText className="h-4 w-4 text-brand-500" /> Resume
                </h2>
                <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-[#eef2f7] p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-red-50">
                    <FileText className="h-5 w-5 text-red-500" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 text-[13.5px] font-bold text-ink-900">
                      John_Smith_Resume.pdf
                      <span className="chip bg-emerald-50 text-emerald-600">Current Resume</span>
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-ink-500">
                      Uploaded on May 10, 2024 &nbsp;&middot;&nbsp; 312 KB
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button className="btn-ghost h-9 px-3.5 text-[12.5px]">
                      <Eye className="h-3.5 w-3.5" /> Preview
                    </button>
                    <button className="btn-ghost h-9 px-3.5 text-[12.5px]">
                      <Download className="h-3.5 w-3.5" /> Download
                    </button>
                    <button
                      className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500 hover:text-brand-500"
                      aria-label="More"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>

              <div className="flex flex-col items-center gap-3 rounded-xl bg-[#f4f7fd] p-4 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="flex items-center gap-2 text-[12.5px] text-ink-700">
                  <Info className="h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    <b>Your profile is visible to employers</b>
                    <br />
                    Employers can find and view your profile in search results.
                  </span>
                </p>
                <button className="btn-ghost shrink-0 bg-white">
                  <Globe className="h-4 w-4" /> View Public Profile
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-6 text-center">
                <h3 className="text-[14.5px] font-bold">Profile Strength</h3>

                <div className="relative mx-auto mt-4 h-[120px] w-[120px]">
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
                  <span className="absolute inset-0 grid place-items-center text-[22px] font-extrabold text-ink-900">
                    {strength}%
                  </span>
                </div>

                <p className="mt-3 text-[13px] font-bold text-emerald-600">Strong Profile</p>
                <p className="mt-1 text-[12px] text-ink-500">
                  Great! Your profile is looking good.
                </p>

                <ul className="mt-5 space-y-2.5 text-left">
                  {profileChecks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" /> {c}
                    </li>
                  ))}
                  <li className="flex items-center gap-2.5 text-[12.5px] font-semibold text-brand-500">
                    <Plus className="h-4 w-4 shrink-0" /> Add Certifications
                  </li>
                </ul>
              </section>

              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Top Skills</h3>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>
                <div className="mt-4 space-y-4">
                  {skills.map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between text-[12.5px]">
                        <span className="font-semibold text-ink-900">{s.label}</span>
                        <span className="text-ink-500">{s.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#e6edf7]">
                        <div
                          className="h-full rounded-full bg-brand-500"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                  <Plus className="h-4 w-4" /> Add More Skills
                </button>
              </section>

              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Availability</h3>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>
                <dl className="mt-3.5 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-500">Availability Status</dt>
                    <dd className="font-semibold text-emerald-600">Actively looking</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-500">Notice Period</dt>
                    <dd className="font-semibold text-ink-900">30 Days</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-500">Preferred Job Type</dt>
                    <dd className="font-semibold text-ink-900">Full-time</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-500">Preferred Location</dt>
                    <dd className="font-semibold text-ink-900">Dammam, Saudi Arabia</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-500">Open to Relocation</dt>
                    <dd className="font-semibold text-ink-900">Yes</dd>
                  </div>
                </dl>
              </section>

              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Languages</h3>
                  <button className="text-[12.5px] font-semibold text-brand-500">Edit</button>
                </div>
                <div className="mt-3.5 space-y-3">
                  {languages.map((l) => (
                    <div key={l.label} className="flex items-center justify-between">
                      <span>
                        <span className="block text-[12.5px] font-semibold text-ink-900">
                          {l.label}
                        </span>
                        <span className="block text-[11px] text-ink-500">{l.level}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        {Array.from({ length: l.dots }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i < l.filled ? "bg-brand-500" : "bg-[#e2e8f2]"
                            }`}
                          />
                        ))}
                      </span>
                    </div>
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
