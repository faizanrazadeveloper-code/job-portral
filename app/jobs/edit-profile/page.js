"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  Award,
  Bell,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  GraduationCap,
  Heart,
  Lock,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  User,
  Users,
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

const tabs = [
  { label: "Basic Information", icon: User },
  { label: "Work Experience", icon: Briefcase },
  { label: "Education", icon: GraduationCap },
  { label: "Skills", icon: Sparkles },
  { label: "Resume & Documents", icon: FileText },
  { label: "Preferences", icon: Settings },
];

const profileChecks = ["Basic Information", "Work Experience", "Skills Added", "Resume Uploaded"];

const tips = [
  {
    title: "Add a professional photo",
    desc: "Profiles with photos get 3x more views.",
    icon: Camera,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Write a strong summary",
    desc: "A clear summary helps employers know you better.",
    icon: Sparkles,
    tone: "bg-brand-50 text-brand-500",
  },
  {
    title: "Add more skills",
    desc: "Skills increase your chances of matching relevant jobs.",
    icon: Award,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Keep your profile updated",
    desc: "Regular updates show employers you are active.",
    icon: Users,
    tone: "bg-amber-50 text-amber-600",
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

export default function EditProfilePage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [about, setAbout] = useState(
    "Experienced drilling engineer with 8+ years in oil & gas industry. Skilled in well planning, drilling operations and team leadership."
  );
  const [summary, setSummary] = useState(
    "Results-driven Senior Drilling Engineer with over 8 years of experience in onshore and offshore drilling operations. Proven track record in executing complex drilling projects safely, efficiently and within budget. Strong leadership, problem-solving and technical skills with a focus on operational excellence."
  );
  const [relocation, setRelocation] = useState(true);

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
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>My Profile</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Edit Profile</span>
          </nav>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-[24px] font-extrabold tracking-tight">Edit Profile</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Update your information and keep your profile up to date.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">Cancel</button>
              <button className="btn-primary px-6">Save Changes</button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Form */}
            <section className="card p-5 sm:p-6">
              <div className="-mx-5 flex gap-6 overflow-x-auto border-b border-[#eef2f7] px-5 sm:-mx-6 sm:px-6">
                {tabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setTab(i)}
                    className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 text-[13.5px] font-semibold transition ${
                      i === tab
                        ? "border-brand-500 text-brand-500"
                        : "border-transparent text-ink-500 hover:text-brand-500"
                    }`}
                  >
                    <t.icon className="h-4 w-4" /> {t.label}
                  </button>
                ))}
              </div>

              {tab === 0 && (
                <div className="pt-6">
                  <h2 className="text-[16.5px] font-extrabold">Basic Information</h2>

                  <div className="mt-5 grid gap-5 lg:grid-cols-[150px_minmax(0,1fr)]">
                    <div>
                      <p className="label">Profile Photo</p>
                      <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]">
                        <button className="absolute bottom-1.5 right-1.5 grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-white shadow-card">
                          <Camera className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-2.5 text-[11px] text-ink-500">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>

                    <div className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="label req">Full Name</label>
                          <input className="input" defaultValue="John Smith" />
                        </div>
                        <div>
                          <label className="label req">Headline</label>
                          <input className="input" defaultValue="Senior Drilling Engineer" />
                        </div>
                      </div>

                      <div>
                        <label className="label req">About Me</label>
                        <div className="relative">
                          <textarea
                            className="input h-[90px] resize-none py-3 leading-relaxed"
                            maxLength={500}
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                          />
                          <span className="absolute bottom-2.5 right-3.5 text-[11px] text-ink-500">
                            {about.length}/500
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-3">
                    <div>
                      <label className="label req">Email Address</label>
                      <input className="input" defaultValue="john.smith@email.com" />
                    </div>
                    <div>
                      <label className="label req">Phone Number</label>
                      <div className="flex gap-2">
                        <select className="select w-[74px] shrink-0 px-2" defaultValue="🇸🇦">
                          <option>🇸🇦</option>
                          <option>🇦🇪</option>
                          <option>🇶🇦</option>
                        </select>
                        <input className="input" defaultValue="+966 50 123 4567" />
                      </div>
                    </div>
                    <div>
                      <label className="label">LinkedIn Profile</label>
                      <input className="input" defaultValue="linkedin.com/in/johnsmith" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label req">Current Location</label>
                      <div className="relative">
                        <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input className="input pl-10 pr-8" defaultValue="Dammam, Saudi Arabia" />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500">
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <label className="mt-2.5 flex items-center gap-2.5 text-[12.5px] text-ink-700">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#dfe6f1] accent-brand-500"
                          checked={relocation}
                          onChange={(e) => setRelocation(e.target.checked)}
                        />
                        Open to Relocation
                      </label>
                    </div>
                    <div>
                      <label className="label">Date of Birth</label>
                      <div className="relative">
                        <input className="input pr-10" defaultValue="15 Mar 1988" />
                        <Calendar className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#eef2f7] pt-5">
                    <h3 className="text-[14.5px] font-bold">Professional Summary</h3>
                    <div className="relative mt-3">
                      <textarea
                        className="input h-[100px] resize-none py-3 leading-relaxed"
                        maxLength={1000}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                      />
                      <span className="absolute bottom-2.5 right-3.5 text-[11px] text-ink-500">
                        {summary.length}/1000
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#eef2f7] pt-5">
                    <h3 className="text-[14.5px] font-bold">Work Status</h3>
                    <div className="mt-3 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label req">Availability Status</label>
                        <select className="select" defaultValue="Actively looking">
                          <option>Actively looking</option>
                          <option>Open to offers</option>
                          <option>Not looking</option>
                        </select>
                      </div>
                      <div>
                        <label className="label req">Notice Period</label>
                        <select className="select" defaultValue="30 Days">
                          <option>Immediate</option>
                          <option>15 Days</option>
                          <option>30 Days</option>
                          <option>60 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#eef2f7] pt-5">
                    <h3 className="text-[14.5px] font-bold">Contact Information</h3>
                    <div className="mt-3">
                      <label className="label">Address</label>
                      <input className="input" defaultValue="Al Khobar, Eastern Province, Saudi Arabia" />
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-3">
                      <div>
                        <label className="label req">Nationality</label>
                        <select className="select" defaultValue="Saudi Arabia">
                          <option>Saudi Arabia</option>
                          <option>Pakistan</option>
                          <option>United Arab Emirates</option>
                        </select>
                      </div>
                      <div>
                        <label className="label req">Visa Status</label>
                        <select className="select" defaultValue="Resident">
                          <option>Resident</option>
                          <option>Visit Visa</option>
                          <option>Sponsorship Required</option>
                        </select>
                      </div>
                      <div>
                        <label className="label">Preferred Contact Method</label>
                        <select className="select" defaultValue="Email">
                          <option>Email</option>
                          <option>Phone</option>
                          <option>WhatsApp</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-5 max-w-[280px]">
                      <label className="label">Alternate Phone Number</label>
                      <input className="input" defaultValue="+966 55 987 6543" />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3 border-t border-[#eef2f7] pt-5">
                    <button className="btn-ghost">Cancel</button>
                    <button className="btn-primary px-7">Save Changes</button>
                  </div>
                </div>
              )}

              {tab > 0 && (
                <div className="grid min-h-[420px] place-items-center text-center">
                  <div>
                    <h2 className="text-[16.5px] font-extrabold">{tabs[tab].label}</h2>
                    <p className="mt-2 text-[13px] text-ink-500">
                      This tab will be designed next.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-6 text-center">
                <h3 className="text-[14.5px] font-bold">Profile Completion</h3>

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
                  Complete your profile to increase job opportunities.
                </p>

                <ul className="mt-5 space-y-2.5 text-left">
                  {profileChecks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" /> {c}
                    </li>
                  ))}
                  <li className="flex items-center justify-between text-[12.5px] font-semibold text-brand-500">
                    <span className="flex items-center gap-2.5">
                      <Plus className="h-4 w-4 shrink-0" /> Add Certifications
                    </span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </li>
                </ul>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Tips to Improve Profile</h3>
                <div className="mt-4 space-y-4">
                  {tips.map((t) => (
                    <div key={t.title} className="flex items-start gap-3">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${t.tone}`}>
                        <t.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[12.5px] font-bold text-ink-900">{t.title}</p>
                        <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-500">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-5">
                <p className="text-[13px] font-bold">Need Help?</p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Contact our support team if you need assistance.
                </p>
                <button className="btn-ghost mt-3.5 w-full">Contact Support</button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
