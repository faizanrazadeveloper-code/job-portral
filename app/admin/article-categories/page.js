"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Bell,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  FileEdit,
  Grid3x3,
  Heart,
  Landmark,
  Lightbulb,
  LogOut,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Newspaper,
  Pencil,
  Plug,
  Plus,
  RotateCw,
  Search,
  Settings,
  Sprout,
  Trash2,
  User,
  Users,
  Zap,
  Info,
  GripVertical,
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
      { label: "Companies", icon: Building2 },
      { label: "Users", icon: Users },
      { label: "Settings", icon: Settings },
    ],
  },
  {
    section: "MANAGEMENT",
    items: [
      { label: "Article Categories", icon: Grid3x3, active: true },
      { label: "Comments", icon: MessageSquare },
      { label: "Advertisements", icon: Megaphone },
      { label: "Subscribers", icon: Newspaper },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Profile", icon: User },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const iconOptions = [
  { icon: Sprout, tone: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { icon: Plug, tone: "bg-violet-50 text-violet-600 border-[#e2e8f2]" },
  { icon: Landmark, tone: "bg-amber-50 text-amber-600 border-[#e2e8f2]" },
  { icon: Zap, tone: "bg-teal-50 text-teal-600 border-[#e2e8f2]" },
  { icon: Landmark, tone: "bg-blue-50 text-blue-600 border-[#e2e8f2]" },
  { icon: Grid3x3, tone: "bg-amber-50 text-amber-600 border-[#e2e8f2]" },
  { icon: Lightbulb, tone: "bg-pink-50 text-pink-500 border-[#e2e8f2]" },
];

const categories = [
  {
    n: 1,
    name: "Renewable Energy",
    desc: "News and insights about solar, wind, hydro and other renewable sources.",
    articles: 42,
    status: "Active",
    order: 1,
    icon: Sprout,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    n: 2,
    name: "Oil & Gas",
    desc: "Updates and analysis on oil, gas, exploration and production.",
    articles: 38,
    status: "Active",
    order: 2,
    icon: Plug,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    n: 3,
    name: "Energy Markets",
    desc: "Market trends, price analysis and energy sector reports.",
    articles: 25,
    status: "Active",
    order: 3,
    icon: Landmark,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    n: 4,
    name: "Technology",
    desc: "Innovations, technologies and digital transformation in energy.",
    articles: 31,
    status: "Active",
    order: 4,
    icon: Zap,
    tone: "bg-teal-50 text-teal-600",
  },
  {
    n: 5,
    name: "Policy & Regulation",
    desc: "Government policies, regulations and energy laws.",
    articles: 19,
    status: "Active",
    order: 5,
    icon: Landmark,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    n: 6,
    name: "Sustainability",
    desc: "Sustainability practices, ESG and clean energy initiatives.",
    articles: 27,
    status: "Active",
    order: 6,
    icon: Grid3x3,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    n: 7,
    name: "Energy Tips",
    desc: "Useful tips and guides to save energy and improve efficiency.",
    articles: 14,
    status: "Inactive",
    order: 7,
    icon: Lightbulb,
    tone: "bg-pink-50 text-pink-500",
  },
  {
    n: 8,
    name: "Other",
    desc: "Miscellaneous articles and general information.",
    articles: 8,
    status: "Inactive",
    order: 8,
    icon: MoreHorizontal,
    tone: "bg-slate-100 text-ink-500",
  },
];

const tips = [
  "Drag and drop categories to change the order.",
  "The order will be shown on the website.",
  "Inactive categories will be hidden from public view.",
  "You can edit or delete categories anytime.",
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

export default function ArticleCategoriesPage() {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(0);

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
                <span className="block text-[11px] text-ink-500">Admin</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1520px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Articles</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Article Categories</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                Article Categories Management
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Create, edit and manage article categories to organize your content.
              </p>
            </div>
            <button className="btn-primary shrink-0 px-5">
              <Plus className="h-4 w-4" /> Add New Category
            </button>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Table */}
            <section className="card p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                  <input className="input pl-10" placeholder="Search categories..." />
                </div>
                <select className="select w-auto min-w-[140px]" defaultValue="All Status">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <button
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                  aria-label="Filter"
                >
                  <Filter className="h-4 w-4" />
                </button>
                <button
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
                  aria-label="Refresh"
                >
                  <RotateCw className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[820px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#eef2f7] text-left text-[11.5px] font-bold uppercase tracking-wide text-ink-500">
                      <th className="w-8 py-2.5"></th>
                      <th className="py-2.5 pr-3">#</th>
                      <th className="py-2.5 pr-3">Category</th>
                      <th className="py-2.5 pr-3">Description</th>
                      <th className="py-2.5 pr-3">Articles</th>
                      <th className="py-2.5 pr-3">Status</th>
                      <th className="py-2.5 pr-3">Order</th>
                      <th className="py-2.5 pr-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eef2f7]">
                    {categories.map((c) => (
                      <tr key={c.n} className="text-[13px]">
                        <td className="py-3.5 text-ink-500">
                          <GripVertical className="h-4 w-4 cursor-grab" />
                        </td>
                        <td className="py-3.5 pr-3 text-ink-500">{c.n}</td>
                        <td className="py-3.5 pr-3">
                          <span className="flex items-center gap-2.5">
                            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${c.tone}`}>
                              <c.icon className="h-4 w-4" />
                            </span>
                            <span className="font-bold text-ink-900">{c.name}</span>
                          </span>
                        </td>
                        <td className="max-w-[240px] py-3.5 pr-3 text-[12.5px] leading-relaxed text-ink-500">
                          {c.desc}
                        </td>
                        <td className="py-3.5 pr-3 font-semibold text-ink-900">{c.articles}</td>
                        <td className="py-3.5 pr-3">
                          <span
                            className={`chip ${
                              c.status === "Active"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-red-50 text-red-500"
                            }`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td className="py-3.5 pr-3 text-ink-500">{c.order}</td>
                        <td className="py-3.5 pr-3">
                          <div className="flex items-center gap-2">
                            <button
                              className="grid h-8 w-8 place-items-center rounded-lg border border-[#dfe6f1] text-brand-500 hover:bg-brand-50"
                              aria-label={`Edit ${c.name}`}
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </button>
                            <button
                              className="grid h-8 w-8 place-items-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                              aria-label={`Delete ${c.name}`}
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

              <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-[12.5px] text-ink-500">Showing 1 to 8 of 8 categories</p>
                <div className="flex items-center gap-2">
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-[12.5px] font-semibold text-white">
                    1
                  </button>
                  <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Form */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Add New Category</h3>

                <label className="label req mt-4">Category Name</label>
                <input className="input" placeholder="Enter category name" />

                <label className="label mt-4">Description</label>
                <textarea
                  className="input h-24 resize-none py-2.5 leading-relaxed"
                  placeholder="Enter category description"
                />

                <p className="label mt-4">Icon</p>
                <p className="text-[11.5px] text-ink-500">Choose an icon to represent this category</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {iconOptions.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIcon(i)}
                      className={`grid h-10 w-10 place-items-center rounded-lg border transition ${
                        selectedIcon === i
                          ? "border-brand-500 ring-2 ring-brand-500/20"
                          : "border-[#e2e8f2]"
                      } ${opt.tone.split(" ").slice(0, 2).join(" ")}`}
                      aria-label={`Icon option ${i + 1}`}
                    >
                      <opt.icon className="h-4 w-4" />
                    </button>
                  ))}
                  <button
                    className="grid h-10 w-10 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500"
                    aria-label="More icons"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                <label className="label mt-4">Status</label>
                <select className="select" defaultValue="Active">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

                <button className="btn-primary mt-5 w-full">Save Category</button>
              </section>

              <section className="rounded-xl border border-brand-100 bg-brand-50/40 p-5">
                <p className="flex items-center gap-2 text-[13.5px] font-bold text-brand-600">
                  <Info className="h-4 w-4" /> Tips
                </p>
                <ul className="mt-3.5 space-y-3">
                  {tips.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
