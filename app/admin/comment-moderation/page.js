"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  AlertTriangle,
  Bell,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Eye,
  ExternalLink,
  FileEdit,
  Filter,
  Grid3x3,
  LogOut,
  Mail,
  Megaphone,
  MessageSquare,
  Menu,
  RotateCw,
  ScrollText,
  Search,
  Settings,
  ShieldCheck,
  Trash2,
  User,
  Users,
  MapPin,
  X,
} from "lucide-react";

const sideNav = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Articles", icon: FileEdit },
      { label: "Companies", icon: Building2 },
      { label: "Jobs", icon: Briefcase },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Users", icon: Users },
    ],
  },
  {
    section: "CONTENT MANAGEMENT",
    items: [
      { label: "Articles", icon: FileEdit },
      { label: "Comment Moderation", icon: MessageSquare, active: true },
      { label: "Advertisements", icon: Megaphone },
      { label: "Newsletter", icon: Mail },
    ],
  },
  {
    section: "SYSTEM",
    items: [
      { label: "Settings", icon: Settings },
      { label: "Roles & Permissions", icon: ShieldCheck },
      { label: "Audit Logs", icon: ScrollText },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const statusTabs = [
  { label: "All Comments", count: 124, tone: "text-brand-500" },
  { label: "Pending", count: 18, tone: "text-amber-600" },
  { label: "Approved", count: 92, tone: "text-emerald-600" },
  { label: "Spam", count: 9, tone: "text-red-500" },
  { label: "Trash", count: 5, tone: "text-ink-500" },
];

const rows = [
  {
    text: "Excellent insights! The point about energy storage breakthroughs is particularly important.",
    article: "The Future of Renewable Energy: Trends to Watch in 2025",
    author: "Sarah Johnson",
    role: "Energy Analyst",
    status: "Pending",
    date: "May 24, 2025",
    time: "10:30 AM",
    tone: "woman",
    selected: true,
  },
  {
    text: "Great article! Do you think green hydrogen will be cost-competitive by 2030?",
    article: "Green Hydrogen: The Next Big Thing in Clean Energy",
    author: "Mohammed Ali",
    role: "Sustainability Consultant",
    status: "Pending",
    date: "May 24, 2025",
    time: "09:15 AM",
    tone: "man2",
  },
  {
    text: "This is exactly what the industry needed. Well explained!",
    article: "Global Oil Market Outlook: Key Factors in 2025",
    author: "Emma Wilson",
    role: "Project Manager",
    status: "Approved",
    date: "May 23, 2025",
    time: "04:20 PM",
    tone: "woman",
  },
  {
    text: "Buy cheap solar panels here https://cheap-solar.example.com",
    article: "The Future of Renewable Energy: Trends to Watch in 2025",
    author: "James Carter",
    role: "Guest",
    status: "Spam",
    date: "May 23, 2025",
    time: "02:10 PM",
    tone: "man",
    flagged: true,
  },
  {
    text: "I disagree with the point about nuclear energy. It's still a reliable source.",
    article: "Nuclear Energy: Still a Critical Part of the Mix",
    author: "Olivia Brown",
    role: "Researcher",
    status: "Pending",
    date: "May 23, 2025",
    time: "11:45 AM",
    tone: "woman",
  },
  {
    text: "Very informative and well-structured article.",
    article: "ESG in Energy: Why Sustainability Drives Business Value",
    author: "Daniel Lee",
    role: "Investor",
    status: "Approved",
    date: "May 22, 2025",
    time: "08:30 PM",
    tone: "man2",
  },
  {
    text: "Check this out!!! Amazing deals available now!!!",
    article: "Energy Storage Breakthroughs in 2025",
    author: "Ethan White",
    role: "Guest",
    status: "Spam",
    date: "May 22, 2025",
    time: "07:05 PM",
    tone: "man",
    flagged: true,
  },
];

const statusTone = {
  Pending: "bg-amber-50 text-amber-700",
  Approved: "bg-emerald-50 text-emerald-600",
  Spam: "bg-red-50 text-red-500",
};

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

export default function CommentModerationPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(0);
  const [panelOpen, setPanelOpen] = useState(true);
  const [checked, setChecked] = useState(() => rows.map((r) => !!r.selected));

  const toggleRow = (i) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const selectedCount = checked.filter(Boolean).length;
  const current = rows[selected];

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
                placeholder="Search jobs, companies, articles..."
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
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                5
              </span>
            </button>
            <button className="text-ink-500 hover:text-brand-500">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Admin</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1680px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">Comment Moderation</span>
          </nav>

          <h1 className="mt-2 flex items-center gap-2.5 text-[24px] font-extrabold tracking-tight">
            Comment Moderation <span className="chip bg-brand-50 text-brand-600">124</span>
          </h1>
          <p className="mt-2 text-[13px] text-ink-500">
            Review, manage and moderate comments across the platform.
          </p>

          <div className={`mt-6 grid gap-5 ${panelOpen ? "xl:grid-cols-[minmax(0,1fr)_360px]" : ""}`}>
            {/* Table */}
            <section className="card p-5 sm:p-6">
              <div className="flex gap-6 overflow-x-auto border-b border-[#eef2f7]">
                {statusTabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setTab(i)}
                    className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 text-[13.5px] font-semibold transition ${
                      i === tab
                        ? "border-brand-500 text-brand-500"
                        : "border-transparent text-ink-500 hover:text-brand-500"
                    }`}
                  >
                    {t.label}
                    <span className={`chip bg-[#f4f7fd] ${t.tone}`}>{t.count}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                  <input className="input pl-10" placeholder="Search comments..." />
                </div>
                <select className="select w-auto min-w-[130px]" defaultValue="All Articles">
                  <option>All Articles</option>
                  <option>Renewable Energy</option>
                  <option>Oil & Gas</option>
                </select>
                <select className="select w-auto min-w-[130px]" defaultValue="All Authors">
                  <option>All Authors</option>
                  <option>Guests</option>
                  <option>Members</option>
                </select>
                <select className="select w-auto min-w-[120px]" defaultValue="All Status">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Spam</option>
                </select>
                <button className="btn-ghost h-11 shrink-0 px-4 text-[12.5px]">
                  <Filter className="h-3.5 w-3.5" /> Filters
                </button>
                <button
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                  aria-label="Refresh"
                >
                  <RotateCw className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#eef2f7] text-left text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                      <th className="w-8 py-2.5">
                        <input type="checkbox" className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500" />
                      </th>
                      <th className="py-2.5 pr-3">Comment</th>
                      <th className="py-2.5 pr-3">Article</th>
                      <th className="py-2.5 pr-3">Author</th>
                      <th className="py-2.5 pr-3">Status</th>
                      <th className="py-2.5 pr-3">Date</th>
                      <th className="py-2.5 pr-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eef2f7]">
                    {rows.map((r, i) => (
                      <tr
                        key={r.text}
                        onClick={() => {
                          setSelected(i);
                          setPanelOpen(true);
                        }}
                        className={`cursor-pointer text-[13px] ${
                          selected === i && panelOpen ? "bg-brand-50/40" : ""
                        }`}
                      >
                        <td className="py-3.5 align-top" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={checked[i]}
                            onChange={() => toggleRow(i)}
                            className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500"
                          />
                        </td>
                        <td className="max-w-[230px] py-3.5 pr-3 align-top">
                          <div className="flex items-start gap-2.5">
                            <span className={`grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-b ${
                              r.tone === "woman" ? "from-[#d8a48f] to-[#8a5a49]" : r.tone === "man2" ? "from-[#a3b6c9] to-[#4d637a]" : "from-[#c58a63] to-[#7b4a2f]"
                            }`} />
                            <div className="min-w-0">
                              <p className="text-[12.5px] leading-snug text-ink-700">{r.text}</p>
                              {r.flagged && (
                                <span className="chip mt-1.5 bg-red-50 text-red-500">Spam Detected</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="max-w-[170px] py-3.5 pr-3 align-top text-[12.5px] font-semibold text-brand-600">
                          {r.article}
                        </td>
                        <td className="py-3.5 pr-3 align-top">
                          <p className="text-[12.5px] font-bold text-ink-900">{r.author}</p>
                          <p className="text-[11.5px] text-ink-500">{r.role}</p>
                        </td>
                        <td className="py-3.5 pr-3 align-top">
                          <span className={`chip ${statusTone[r.status]}`}>{r.status}</span>
                        </td>
                        <td className="py-3.5 pr-3 align-top text-[12px] text-ink-500">
                          {r.date}
                          <br />
                          {r.time}
                        </td>
                        <td className="py-3.5 pr-3 align-top" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-1.5">
                            <button
                              className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                              aria-label="View comment"
                              onClick={() => {
                                setSelected(i);
                                setPanelOpen(true);
                              }}
                            >
                              <Eye className="h-3.5 w-3.5" />
                            </button>
                            {r.status !== "Approved" ? (
                              <button
                                className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                                aria-label="Approve comment"
                              >
                                <CheckCircle2 className="h-3.5 w-3.5" />
                              </button>
                            ) : (
                              <button
                                className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                                aria-label="More options"
                              >
                                <span className="text-[14px] leading-none">&hellip;</span>
                              </button>
                            )}
                            <button
                              className="grid h-8 w-8 place-items-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                              aria-label="Delete comment"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-[#eef2f7] pt-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2.5 text-[12.5px] text-ink-500">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#cbd5e1] accent-brand-500" />
                  Select All
                  <span className="text-ink-700">{selectedCount} selected</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  <button className="btn-ghost h-9 border-emerald-200 bg-emerald-50 px-4 text-[12.5px] text-emerald-700 hover:bg-emerald-100">
                    Approve
                  </button>
                  <button className="btn-ghost h-9 border-red-200 bg-red-50 px-4 text-[12.5px] text-red-600 hover:bg-red-100">
                    Mark as Spam
                  </button>
                  <button className="btn-ghost h-9 px-4 text-[12.5px]">Move to Trash</button>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-[12.5px] text-ink-500">Showing 1 to 7 of 124 comments</p>
                <div className="flex items-center gap-2">
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                    <ChevronRight className="h-4 w-4 rotate-180" />
                  </button>
                  {[1, 2, 3].map((p) => (
                    <button
                      key={p}
                      className={`grid h-9 w-9 place-items-center rounded-lg text-[12.5px] font-semibold ${
                        p === 1
                          ? "bg-brand-500 text-white"
                          : "border border-[#e2e8f2] text-ink-700 hover:bg-slate-50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <span className="px-1 text-ink-500">...</span>
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-[12.5px] font-semibold text-ink-700">
                    13
                  </button>
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Detail panel */}
            {panelOpen && (
              <aside className="card h-fit p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-extrabold">Comment Details</h3>
                  <button
                    className="text-ink-500 hover:text-ink-900"
                    onClick={() => setPanelOpen(false)}
                    aria-label="Close panel"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-[#f4f7fd] p-3">
                  {current.status === "Pending" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  ) : current.status === "Spam" ? (
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 fill-red-500 text-white" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />
                  )}
                  <div>
                    <p className="text-[13px] font-bold text-ink-900">
                      {current.status === "Pending" ? "Pending Review" : current.status}
                    </p>
                    <p className="text-[11.5px] text-ink-500">
                      {current.status === "Pending"
                        ? "This comment is awaiting moderation."
                        : current.status === "Spam"
                          ? "This comment has been flagged as spam."
                          : "This comment has been approved."}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                    Comment
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-700">{current.text}</p>
                </div>

                <hr className="my-5 border-[#eef2f7]" />

                <p className="text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                  Article
                </p>
                <div className="mt-2.5 flex items-start gap-3">
                  <div className="h-14 w-16 shrink-0 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80"
                      alt={current.article}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold leading-snug text-ink-900">
                      {current.article}
                    </p>
                    <a
                      href="#"
                      className="mt-1.5 flex items-center gap-1 text-[12px] font-semibold text-brand-500"
                    >
                      View Article <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <hr className="my-5 border-[#eef2f7]" />

                <p className="text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                  Author
                </p>
                <div className="mt-2.5 flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-b ${
                      current.tone === "woman"
                        ? "from-[#d8a48f] to-[#8a5a49]"
                        : current.tone === "man2"
                          ? "from-[#a3b6c9] to-[#4d637a]"
                          : "from-[#c58a63] to-[#7b4a2f]"
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-ink-900">{current.author}</p>
                    <p className="text-[11.5px] text-ink-500">{current.role}</p>
                    <p className="truncate text-[11.5px] text-ink-500">
                      {current.author.toLowerCase().replace(" ", ".")}@example.com
                    </p>
                    <p className="text-[11.5px] text-ink-500">IP: 203.0.113.45</p>
                  </div>
                </div>

                <hr className="my-5 border-[#eef2f7]" />

                <p className="text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                  Comment Information
                </p>
                <div className="mt-2.5 space-y-2.5 text-[12.5px]">
                  <p className="flex items-center gap-2 text-ink-700">
                    <Clock3 className="h-3.5 w-3.5 text-ink-500" />
                    {current.date} at {current.time}
                  </p>
                  <p className="flex items-center gap-2 text-ink-700">
                    <MessageSquare className="h-3.5 w-3.5 text-ink-500" />
                    Source: Article Page
                  </p>
                  <p className="flex items-center gap-2 text-ink-700">
                    <ShieldCheck className="h-3.5 w-3.5 text-ink-500" />
                    Status: <span className={`chip ${statusTone[current.status]}`}>{current.status}</span>
                  </p>
                </div>

                <hr className="my-5 border-[#eef2f7]" />

                <p className="text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                  Actions
                </p>
                <div className="mt-3 space-y-2.5">
                  <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-50 text-[13px] font-semibold text-emerald-700 hover:bg-emerald-100">
                    <CheckCircle2 className="h-4 w-4" /> Approve Comment
                  </button>
                  <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-red-50 text-[13px] font-semibold text-red-600 hover:bg-red-100">
                    <AlertTriangle className="h-4 w-4" /> Mark as Spam
                  </button>
                  <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#dfe6f1] text-[13px] font-semibold text-ink-700 hover:bg-slate-50">
                    <Trash2 className="h-4 w-4" /> Move to Trash
                  </button>
                </div>
              </aside>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
