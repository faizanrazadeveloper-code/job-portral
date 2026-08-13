"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Bell,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DollarSign,
  Eye,
  FileEdit,
  Heart,
  Info,
  Lightbulb,
  Monitor,
  Save,
  Send,
  Settings,
  Smartphone,
  Star,
  UploadCloud,
  User,
  Wallet,
  Search,
  LogOut,
  MessageSquare,
  MapPin,
  Menu,
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

const articleDetails = [
  { label: "Category", value: "Renewable Energy" },
  { label: "Sub Categories", value: "Solar Energy, Wind Energy" },
  { label: "Tags", value: "solar energy, wind energy, clean energy, energy storage, future trends" },
];

const checklist = [
  { label: "Title", value: "Looks good" },
  { label: "Content", value: "1,256 words" },
  { label: "Featured Image", value: "Added" },
  { label: "Categories", value: "3 selected" },
  { label: "Tags", value: "5 added" },
];

const bodyTags = ["Solar Energy", "Wind Energy", "Clean Energy", "Energy Storage", "Future Trends"];

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

export default function PreviewArticlePage() {
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState("desktop");

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
              <nav className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Articles</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Create / Edit Article</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Preview</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Preview Article</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                This is how your article will appear to readers.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button className="btn-ghost">
                <ChevronLeft className="h-4 w-4" /> Back to Editor
              </button>
              <button className="btn-ghost border-brand-500 text-brand-500">
                <Save className="h-4 w-4" /> Save as Draft
              </button>
              <button className="btn-primary px-5">
                <Send className="h-4 w-4" /> Submit for Review
              </button>
            </div>
          </div>

          <div className="mt-3 flex justify-end">
            <div className="flex items-center gap-1 rounded-lg border border-[#e2e8f2] bg-white p-1">
              <button
                onClick={() => setDevice("desktop")}
                className={`flex h-9 items-center gap-1.5 rounded-md px-3 text-[12.5px] font-semibold ${
                  device === "desktop" ? "bg-brand-50 text-brand-500" : "text-ink-500"
                }`}
              >
                <Monitor className="h-4 w-4" /> Desktop
              </button>
              <button
                onClick={() => setDevice("mobile")}
                className={`flex h-9 items-center gap-1.5 rounded-md px-3 text-[12.5px] font-semibold ${
                  device === "mobile" ? "bg-brand-50 text-brand-500" : "text-ink-500"
                }`}
              >
                <Smartphone className="h-4 w-4" /> Mobile
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            {/* Article preview */}
            <article
              className={`card p-6 sm:p-8 ${device === "mobile" ? "mx-auto max-w-[420px]" : ""}`}
            >
              <span className="chip bg-brand-50 text-[10.5px] uppercase tracking-wide text-brand-600">
                Renewable Energy
              </span>
              <h1 className="mt-3 text-[26px] font-extrabold leading-tight text-ink-900 sm:text-[30px]">
                The Future of Renewable Energy: Trends to Watch in 2025
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-ink-500">
                <span className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
                  <span className="flex items-center gap-1 font-semibold text-ink-900">
                    John Smith <CheckCircle2 className="h-3.5 w-3.5 fill-brand-500 text-white" />
                  </span>
                </span>
                <span>&middot; May 24, 2025</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> 8 min read
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" /> 1.2K views
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80"
                  alt="Wind turbines and solar panels at sunset"
                  className="h-[320px] w-full object-cover"
                />
              </div>

              <p className="mt-6 text-[14.5px] leading-relaxed text-ink-700">
                Renewable energy is no longer just an alternative—it&apos;s becoming the
                foundation of our global energy future. As we move into 2025, several key trends
                are shaping the industry and creating new opportunities for businesses, investors,
                and professionals.
              </p>

              <hr className="my-6 border-[#eef2f7]" />

              <h2 className="text-[18px] font-extrabold text-ink-900">
                1. Rapid Growth in Solar and Wind Energy
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700">
                Solar and wind continue to lead the renewable energy transition. Falling costs,
                technological advancements, and supportive government policies are accelerating
                their adoption worldwide.
              </p>

              <div className="mt-5 flex gap-3 rounded-xl bg-[#f4f7fd] p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <Lightbulb className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-bold text-ink-900">Key Insight</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-700">
                    By 2025, global solar capacity is expected to grow by over 20%, while wind
                    energy will see record installations, especially offshore projects.
                  </p>
                </div>
              </div>

              <h2 className="mt-6 text-[18px] font-extrabold text-ink-900">
                2. Energy Storage Breakthroughs
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700">
                Innovations in battery technology and energy storage solutions are solving
                intermittency challenges and enabling a more reliable and stable clean energy
                grid.
              </p>

              <h2 className="mt-6 text-[18px] font-extrabold text-ink-900">
                3. Green Hydrogen on the Rise
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700">
                Green hydrogen is gaining traction as a clean fuel for industries and
                transportation. Countries are investing heavily in infrastructure and research to
                make it a commercial reality.
              </p>

              <h2 className="mt-6 text-[18px] font-extrabold text-ink-900">Conclusion</h2>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700">
                The renewable energy landscape in 2025 is full of opportunities. Staying informed
                about these trends will help businesses and professionals make smarter decisions
                and contribute to a sustainable future.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {bodyTags.map((t) => (
                  <span key={t} className="chip bg-[#f4f7fd] text-ink-700">
                    {t}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Article Details</h3>
                <div className="mt-4 space-y-3.5">
                  {articleDetails.map((d) => (
                    <div key={d.label}>
                      <p className="text-[11.5px] text-ink-500">{d.label}</p>
                      <p className="mt-0.5 text-[13px] font-semibold text-ink-900">{d.value}</p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[11.5px] text-ink-500">Status</p>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-ink-900">
                      <span className="h-2 w-2 rounded-full bg-brand-500" /> Draft
                    </p>
                  </div>
                  <div>
                    <p className="text-[11.5px] text-ink-500">Visibility</p>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-ink-900">
                      <span className="grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-brand-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      </span>
                      Public
                    </p>
                  </div>
                  <div>
                    <p className="text-[11.5px] text-ink-500">Word Count</p>
                    <p className="mt-0.5 text-[13px] font-semibold text-ink-900">1,256 words</p>
                  </div>
                  <div>
                    <p className="text-[11.5px] text-ink-500">Reading Time</p>
                    <p className="mt-0.5 text-[13px] font-semibold text-ink-900">8 min read</p>
                  </div>
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Featured Image</h3>
                <div className="mt-3 overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
                    alt="Featured"
                    className="h-[110px] w-full object-cover"
                  />
                </div>
                <button className="btn-ghost mt-3 w-full">
                  <UploadCloud className="h-4 w-4" /> Change Image
                </button>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Checklist</h3>
                <ul className="mt-4 space-y-3">
                  {checklist.map((c) => (
                    <li key={c.label} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      <span>
                        <span className="block text-[12.5px] font-bold text-ink-900">
                          {c.label}
                        </span>
                        <span className="block text-[11.5px] text-ink-500">{c.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-amber-800">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" /> Tip
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-amber-800/90">
                  Looks good! You can submit this article for review or go back to make more
                  changes.
                </p>
              </section>
            </aside>
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[#f4f7fd] p-4 text-[12.5px] text-ink-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            After submission, our editorial team will review your article. You&apos;ll be
            notified once it&apos;s approved or if any changes are required.
          </div>
        </main>
      </div>
    </div>
  );
}
