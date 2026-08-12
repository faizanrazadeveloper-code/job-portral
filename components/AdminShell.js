"use client";

import { useState } from "react";
import { Logo, Avatar } from "./Shared";
import {
  Bell,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  FileText,
  Gauge,
  KeyRound,
  Menu,
  MessageSquare,
  Search,
  Settings,
  ScrollText,
  ShieldCheck,
  Users,
  X,
  HelpCircle,
} from "lucide-react";

const nav = [
  { label: "Dashboard", icon: Gauge },
  { label: "Users", icon: Users },
  { label: "Companies", icon: Building2, caret: true },
  {
    label: "Jobs",
    icon: Briefcase,
    open: true,
    children: ["All Jobs", "Add New Job", "Job Categories"],
  },
  { label: "Articles", icon: FileText },
  { label: "Applications", icon: ClipboardList },
  { label: "Reports", icon: ScrollText },
  { label: "Settings", icon: Settings },
  { label: "Roles & Permissions", icon: KeyRound },
  { label: "System Settings", icon: ShieldCheck },
  { label: "Audit Logs", icon: ScrollText },
];

function SidebarContent() {
  const [jobsOpen, setJobsOpen] = useState(true);
  return (
    <>
      <div className="flex h-[74px] items-center border-b border-[#eef2f7] px-5">
        <Logo />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
        {nav.map((item) => {
          const Icon = item.icon;
          const isJobs = item.label === "Jobs";
          return (
            <div key={item.label}>
              <button
                onClick={() => isJobs && setJobsOpen(!jobsOpen)}
                className={`nav-item w-full ${isJobs ? "nav-item-active" : ""}`}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.caret && <ChevronDown className="h-4 w-4 text-ink-500" />}
                {isJobs &&
                  (jobsOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </button>

              {isJobs && jobsOpen && (
                <div className="mb-1 mt-1 space-y-1 pl-11">
                  {item.children.map((c, i) => (
                    <a
                      key={c}
                      href="#"
                      className={`block py-1.5 text-[13px] font-semibold ${
                        i === 2 ? "text-ink-300" : "text-ink-700 hover:text-brand-500"
                      }`}
                    >
                      {c}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <div className="mb-1.5 flex items-center gap-2 text-[13px] font-bold">
          <HelpCircle className="h-4 w-4 text-brand-500" /> Need Help?
        </div>
        <p className="mb-3.5 text-[12px] leading-relaxed text-ink-500">
          Check our docs or contact support.
        </p>
        <button className="h-9 w-full rounded-lg border border-[#dbe4f2] bg-white text-[12.5px] font-semibold text-ink-700 hover:bg-slate-50">
          Visit Help Center
        </button>
      </div>
    </>
  );
}

export default function AdminShell({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[262px] flex-col border-r border-[#e8edf5] bg-white lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
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

      <div className="lg:pl-[262px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-[74px] items-center gap-4 border-b border-[#e8edf5] bg-white px-4 sm:px-6">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-[390px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
            <input
              className="h-11 w-full rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pl-11 pr-16 text-[13px] outline-none focus:border-brand-500"
              placeholder="Search jobs, companies, candidates..."
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
              <Avatar size={38} />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Admin</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1320px] px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
