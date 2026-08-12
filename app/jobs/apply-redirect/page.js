"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import {
  Bell,
  Bookmark,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Flame,
  Headphones,
  Home,
  Hourglass,
  LayoutGrid,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";

const sideNav = [
  { label: "Dashboard", icon: Home },
  { label: "Jobs", icon: Briefcase, active: true },
  { label: "Applications", icon: FileText },
  { label: "Saved Jobs", icon: Star },
  { label: "Profile", icon: User },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Settings", icon: Settings },
];

function SidebarContent() {
  return (
    <>
      <div className="flex h-[74px] items-center border-b border-[#eef2f7] px-5">
        <Logo compact />
      </div>

      <nav className="mt-4 flex-1 space-y-1 overflow-y-auto px-3">
        {sideNav.map((item) => (
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
        ))}
      </nav>

      <div className="border-t border-[#eef2f7] p-3">
        <a
          href="#"
          className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-semibold text-red-600 hover:bg-red-50 rounded-lg"
        >
          <LogOut className="h-[18px] w-[18px]" /> Logout
        </a>
      </div>
    </>
  );
}

export default function ApplyRedirectPage() {
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
                <span className="block text-[11px] text-ink-500">Job Seeker</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
            <span>Home</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Jobs</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Walk-In Interviews for Saudi Arabia</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Apply</span>
          </nav>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Main */}
            <div className="space-y-5">
              {/* Job header */}
              <section className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-50">
                    <Flame className="h-7 w-7 fill-brand-500 text-brand-500" strokeWidth={1} />
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-ink-700">Trans Arabian</p>
                    <p className="text-[11.5px] text-ink-500">Employment Company</p>
                    <h1 className="mt-1 text-[18px] font-extrabold">
                      Walk-In Interviews for Saudi Arabia
                    </h1>
                    <span className="chip mt-1.5 bg-emerald-50 text-emerald-600">VERIFIED</span>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-ink-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> Full-time
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> 2 - 10 Years
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> Operations
                      </span>
                    </div>
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-ink-500">
                      <MapPin className="h-3.5 w-3.5" /> Islamabad, Sadiqabad
                    </p>
                  </div>
                </div>

                <button className="btn-ghost shrink-0">
                  View Job Details <ExternalLink className="h-4 w-4" />
                </button>
              </section>

              {/* Redirect illustration */}
              <section className="card overflow-hidden">
                <div className="relative overflow-hidden bg-emerald-50/60 px-6 py-10 text-center">
                  <span className="absolute left-10 top-8 h-2 w-2 rounded-full bg-brand-300" />
                  <span className="absolute right-14 top-14 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="absolute bottom-10 left-16 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="absolute bottom-14 right-10 h-2 w-2 rounded-full bg-brand-300" />

                  <div className="relative mx-auto flex w-[220px] items-center justify-center">
                    <div className="w-full rounded-xl border border-[#dfe6f1] bg-white p-3 shadow-card">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-300" />
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-3/4 rounded bg-[#eef2f7]" />
                        <div className="h-2 w-full rounded bg-[#eef2f7]" />
                        <div className="h-2 w-1/2 rounded bg-[#eef2f7]" />
                      </div>
                    </div>
                    <span className="absolute -right-8 grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-white shadow-card">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </div>

                  <h2 className="relative mt-8 text-[20px] font-extrabold text-ink-900">
                    You&apos;re about to apply on the company website
                  </h2>
                  <p className="relative mx-auto mt-2 max-w-[460px] text-[13px] leading-relaxed text-ink-500">
                    You will be redirected to the company&apos;s career page to complete your
                    application.
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white">
                        <Sparkles className="h-4.5 w-4.5" />
                      </span>
                      <p className="text-[12px] font-semibold text-ink-500">Application Method</p>
                    </div>
                    <p className="mt-3 text-[15px] font-extrabold text-ink-900">
                      Apply on Company Website
                    </p>
                    <p className="mt-1.5 text-[12.5px] text-ink-700">
                      You will be leaving Energy Tail and visiting the employer&apos;s website.
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-2 rounded-lg bg-white px-4 py-3">
                      <span className="truncate text-[13px] font-semibold text-brand-500">
                        https://www.transarabian.com/careers
                      </span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-brand-500" />
                    </div>

                    <p className="mt-3 flex items-center justify-center gap-1.5 text-[11.5px] text-ink-500">
                      <ShieldCheck className="h-3.5 w-3.5" /> Your information is safe and secure.
                    </p>
                  </div>

                  <button className="btn-primary mt-5 w-full">
                    Continue to Company Website <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="btn-ghost mt-3 w-full">Go Back</button>

                  <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    Please make sure to complete your application on the company website.
                    Applications completed outside the company website will not be considered.
                  </div>
                </div>
              </section>

              <div className="card flex flex-col items-center gap-3 p-4 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="flex items-center gap-2 text-[12.5px] text-ink-500">
                  <Headphones className="h-4 w-4 text-brand-500" /> Need help with your
                  application? Contact our support team.
                </p>
                <button className="btn-ghost shrink-0">
                  <Headphones className="h-4 w-4" /> Contact Support
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div>
                <h3 className="text-[14.5px] font-bold">Application States</h3>
                <p className="mt-1.5 text-[12px] text-ink-500">
                  Different states a candidate will see during the application process.
                </p>
              </div>

              <section className="card p-6 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50">
                  <Hourglass className="h-7 w-7 text-brand-500" />
                </span>
                <h4 className="mt-4 text-[16px] font-extrabold">Redirecting...</h4>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
                  Please wait while we redirect you to the company website.
                </p>
                <div className="mt-4 h-2 w-full rounded-full bg-[#e6edf7]">
                  <div className="h-full w-[70%] rounded-full bg-brand-500" />
                </div>
                <p className="mt-2.5 text-[11.5px] text-ink-500">Redirecting in 3 seconds...</p>
              </section>

              <section className="card border-amber-200 bg-amber-50/60 p-6 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-amber-100">
                  <Clock className="h-7 w-7 text-amber-600" />
                </span>
                <h4 className="mt-4 text-[16px] font-extrabold">Taking too long?</h4>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">
                  It looks like the redirect is taking longer than expected.
                </p>
                <div className="mt-4 flex gap-2.5">
                  <button className="btn-ghost h-10 flex-1 bg-white px-3 text-[12.5px]">
                    <RefreshCw className="h-3.5 w-3.5" /> Try Again
                  </button>
                  <button className="btn-ghost h-10 flex-1 bg-white px-3 text-[12.5px]">
                    Go Back
                  </button>
                </div>
                <p className="mt-2.5 text-[11.5px] text-ink-500">
                  You will be redirected automatically.
                </p>
              </section>

              <section className="card border-emerald-200 bg-emerald-50/60 p-6 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h4 className="mt-4 text-[16px] font-extrabold">Application Redirected!</h4>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">
                  You have been successfully redirected to the company website.
                </p>
                <p className="mt-2.5 text-[12.5px] font-semibold text-emerald-700">
                  Thank you and best of luck!
                </p>
              </section>

              <section className="card p-5">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <div>
                    <p className="text-[13px] font-bold">Important Note</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                      Your application will be processed by the employer. Energy Tail does not
                      handle applications for this job.
                    </p>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
