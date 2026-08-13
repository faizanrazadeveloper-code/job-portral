"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  AlertTriangle,
  Bell,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Clock3,
  DollarSign,
  Eye,
  FileEdit,
  FileText,
  Globe,
  Heart,
  Info,
  Lightbulb,
  Mail,
  MessageSquare,
  Send,
  Settings,
  ShieldCheck,
  Star,
  User,
  UserCheck,
  Wallet,
  Search,
  LogOut,
  MapPin,
  Menu,
  ChevronRight,
  AlertCircle,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Articles", icon: FileEdit, active: true },
      { label: "My Jobs", icon: Briefcase },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Saved Jobs", icon: Star },
      { label: "Profile", icon: User },
    ],
  },
  {
    section: "AUTHOR TOOLS",
    items: [
      { label: "Earnings", icon: DollarSign },
      { label: "Payouts", icon: Wallet },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Settings", icon: Settings },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const categories = ["Renewable Energy", "Sustainability", "Technology"];
const tags = ["solar energy", "wind energy", "clean energy", "energy storage", "future trends"];

const summary = [
  { label: "Word Count", value: "2,156 words", icon: FileText },
  { label: "Reading Time", value: "8 min read", icon: Clock3 },
  { label: "Visibility", value: "Public", icon: Eye },
];

const guidelines = [
  "Ensure your article is original and not copied from other sources.",
  "Add relevant images to make your article more engaging.",
  "Use correct grammar and check spelling.",
  "Articles will be reviewed within 24-48 hours.",
];

const steps = [
  { icon: Send, title: "Submit", desc: "You submit your article for review.", tone: "bg-brand-500" },
  { icon: UserCheck, title: "Editorial Review", desc: "Our editorial team will review your content.", tone: "bg-brand-500" },
  { icon: Mail, title: "Feedback / Approval", desc: "We will notify you regarding approval or changes.", tone: "bg-brand-500" },
  { icon: Globe, title: "Published", desc: "Once approved, your article goes live!", tone: "bg-emerald-500" },
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

export default function ArticleSubmissionPage() {
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
                <span className="block text-[11px] text-ink-500">Author</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Articles</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Article Submission</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Article Submission</h1>
              <p className="mt-2 max-w-2xl text-[13px] text-ink-500">
                Review your article and submit it for editorial review. Our team will review your
                content and notify you once it&apos;s approved or if any changes are required.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button className="btn-ghost">
                <ChevronLeft className="h-4 w-4" /> Back to Editor
              </button>
              <button className="btn-ghost border-brand-500 text-brand-500">
                <Eye className="h-4 w-4" /> Preview Article
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main */}
            <section className="card p-5 sm:p-6">
              <h2 className="text-[15px] font-extrabold">Submission Checklist</h2>

              <div className="mt-5 space-y-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  <div>
                    <p className="text-[13.5px] font-bold text-ink-900">Article Title</p>
                    <p className="mt-0.5 text-[13px] text-ink-500">
                      The Future of Renewable Energy: Trends to Watch in 2025
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  <div>
                    <p className="text-[13.5px] font-bold text-ink-900">Content</p>
                    <p className="mt-0.5 text-[13px] text-ink-500">2,156 words</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13.5px] font-bold text-ink-900">Featured Image</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80"
                          alt="Featured"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[12.5px] font-semibold text-ink-900">
                          renewable-energy-hero.jpg
                        </p>
                        <p className="text-[11.5px] text-ink-500">1600 x 900 px</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  <div>
                    <p className="text-[13.5px] font-bold text-ink-900">Categories</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {categories.map((c) => (
                        <span key={c} className="chip bg-brand-50 text-brand-600">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  <div>
                    <p className="text-[13.5px] font-bold text-ink-900">Tags</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="chip bg-[#f4f7fd] text-ink-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  <div>
                    <p className="text-[13.5px] font-bold text-ink-900">Excerpt / Summary</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      Renewable energy is no longer just an alternative—it&apos;s becoming the
                      foundation of our global energy future. As we move into 2025, several key
                      trends are shaping the industry and creating new opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 fill-amber-400 text-white" />
                  <div>
                    <p className="text-[13.5px] font-bold text-ink-900">Status</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="chip bg-amber-100 text-amber-700">Draft</span>
                      <span className="text-[12.5px] text-ink-500">
                        This article will be changed to &ldquo;Under Review&rdquo; after
                        submission.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-[#eef2f7]" />

              <h3 className="text-[14.5px] font-bold text-ink-900">What happens next?</h3>
              <div className="mt-6 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                {steps.map((s, i) => (
                  <div key={s.title} className="relative flex flex-col items-center text-center px-2">
                    {i < steps.length - 1 && (
                      <span className="absolute left-1/2 top-6 hidden h-px w-full border-t-2 border-dashed border-[#dfe6f1] sm:block" />
                    )}
                    <span
                      className={`relative z-10 grid h-12 w-12 place-items-center rounded-full text-white ${s.tone}`}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-[13px] font-bold text-ink-900">{s.title}</p>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#eef2f7] pt-6 sm:flex-row sm:justify-between">
                <button className="btn-ghost w-full sm:w-auto">Cancel</button>
                <div className="w-full text-center sm:w-auto sm:text-right">
                  <button className="btn-primary w-full px-6 sm:w-auto">
                    <Send className="h-4 w-4" /> Submit Article for Review
                  </button>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-[11.5px] text-emerald-600 sm:justify-end">
                    <ShieldCheck className="h-3.5 w-3.5" /> Your article will be safe and secure.
                  </p>
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Article Summary</h3>
                <div className="mt-4 space-y-3.5">
                  {summary.map((s) => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[12.5px] text-ink-500">
                        <s.icon className="h-4 w-4" /> {s.label}
                      </span>
                      <span className="text-[12.5px] font-bold text-ink-900">{s.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[12.5px] text-ink-500">
                      <AlertCircle className="h-4 w-4" /> Status
                    </span>
                    <span className="chip bg-amber-100 text-amber-700">Draft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[12.5px] text-ink-500">
                      <FileEdit className="h-4 w-4" /> Last Saved
                    </span>
                    <span className="text-[12.5px] font-bold text-ink-900">2 minutes ago</span>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-brand-100 bg-brand-50/40 p-5">
                <p className="flex items-center gap-2 text-[13.5px] font-bold text-brand-600">
                  <Info className="h-4 w-4" /> Submission Guidelines
                </p>
                <ul className="mt-3.5 space-y-3">
                  {guidelines.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      {g}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-amber-800">
                  <Lightbulb className="h-4 w-4" /> Tip
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-amber-800/90">
                  High quality, unique content has a higher chance of approval and better
                  visibility on our platform.
                </p>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
