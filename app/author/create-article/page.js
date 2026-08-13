"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bell,
  Bold,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code,
  DollarSign,
  Eye,
  FileEdit,
  Film,
  Heart,
  Image as ImageIcon,
  Info,
  Italic,
  Link2,
  List,
  ListOrdered,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  MoreVertical,
  Pencil,
  Quote,
  Redo2,
  Search,
  Settings,
  Star,
  Strikethrough,
  Table,
  Underline,
  Undo2,
  UploadCloud,
  User,
  Wallet,
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
const tags = ["solar energy", "wind energy", "clean energy", "future trends", "energy storage"];

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

export default function CreateEditArticlePage() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("The Future of Renewable Energy: Trends to Watch in 2025");
  const [status, setStatus] = useState("Draft");
  const [visibility, setVisibility] = useState("public");
  const [cats, setCats] = useState(categories);
  const [tagList, setTagList] = useState(tags);

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

        <main className="mx-auto max-w-[1520px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Articles</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Create / Edit Article</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Create / Edit Article</h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Write high-quality content and share your knowledge.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-end gap-3">
              <button className="btn-ghost">
                <Eye className="h-4 w-4" /> Preview
              </button>
              <button className="btn-ghost border-brand-500 text-brand-500">Save as Draft</button>
              <button className="btn-primary px-5">
                Publish Article <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="mt-1 flex justify-end items-center gap-1.5 text-[12px] text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" /> Last saved: 2 minutes ago
          </p>

          <div className="mt-3 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Main editor column */}
            <section className="card p-5 sm:p-6">
              <label className="label req">Article Title</label>
              <div className="relative">
                <input
                  className="input pr-16"
                  maxLength={150}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-ink-500">
                  {title.length}/150
                </span>
              </div>

              <p className="mt-3 text-[12.5px] text-ink-500">
                Permalink: https://energytail.com/articles/
              </p>
              <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
                <input
                  className="input flex-1"
                  defaultValue="the-future-of-renewable-energy-trends-2025"
                />
                <button className="btn-ghost h-11 shrink-0 px-4 text-brand-500">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
              </div>

              <label className="label req mt-6 block">Content</label>
              <div className="rounded-xl border border-[#e2e8f2]">
                <div className="flex flex-wrap items-center gap-1 border-b border-[#eef2f7] px-3 py-2">
                  <button className="toolbar-btn" aria-label="Undo"><Undo2 className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Redo"><Redo2 className="h-4 w-4" /></button>
                  <span className="mx-1.5 h-5 w-px bg-[#eef2f7]" />
                  <select className="h-8 rounded-md border border-[#e2e8f2] bg-white px-2 text-[12px]" defaultValue="Paragraph">
                    <option>Paragraph</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                  </select>
                  <span className="mx-1.5 h-5 w-px bg-[#eef2f7]" />
                  <button className="toolbar-btn" aria-label="Bold"><Bold className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Italic"><Italic className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Underline"><Underline className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Strikethrough"><Strikethrough className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Code"><Code className="h-4 w-4" /></button>
                  <span className="mx-1.5 h-5 w-px bg-[#eef2f7]" />
                  <button className="toolbar-btn" aria-label="Link"><Link2 className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Quote"><Quote className="h-4 w-4" /></button>
                  <span className="mx-1.5 h-5 w-px bg-[#eef2f7]" />
                  <button className="toolbar-btn" aria-label="Bullet list"><List className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Numbered list"><ListOrdered className="h-4 w-4" /></button>
                  <span className="mx-1.5 h-5 w-px bg-[#eef2f7]" />
                  <button className="toolbar-btn" aria-label="Align left"><AlignLeft className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Align center"><AlignCenter className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Align right"><AlignRight className="h-4 w-4" /></button>
                  <span className="mx-1.5 h-5 w-px bg-[#eef2f7]" />
                  <button className="toolbar-btn" aria-label="Image"><ImageIcon className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Video"><Film className="h-4 w-4" /></button>
                  <button className="toolbar-btn" aria-label="Table"><Table className="h-4 w-4" /></button>
                  <button className="toolbar-btn ml-auto" aria-label="More"><MoreVertical className="h-4 w-4" /></button>
                </div>

                <div className="max-h-[520px] overflow-y-auto p-5">
                  <div className="overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80"
                      alt="Wind turbines and solar panels at sunset"
                      className="h-[300px] w-full object-cover"
                    />
                  </div>

                  <p className="mt-5 text-[14px] leading-relaxed text-ink-700">
                    Renewable energy is no longer just an alternative—it&apos;s becoming the
                    foundation of our global energy future. As we move into 2025, several key
                    trends are shaping the industry and creating new opportunities for
                    businesses, investors, and professionals.
                  </p>

                  <h3 className="mt-5 text-[16px] font-extrabold text-ink-900">
                    1. Rapid Growth in Solar and Wind Energy
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-700">
                    Solar and wind continue to lead the renewable energy transition. Falling
                    costs, technological advancements, and supportive government policies are
                    accelerating their adoption worldwide.
                  </p>

                  <h3 className="mt-5 text-[16px] font-extrabold text-ink-900">
                    2. Energy Storage Breakthroughs
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-700">
                    Innovations in battery technology and energy storage solutions are solving
                    intermittency challenges and enabling a more reliable and stable clean energy
                    grid.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#eef2f7] px-4 py-2.5 text-[11.5px] text-ink-500">
                  <span>Words: 320</span>
                  <span>Characters: 2,156</span>
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <h3 className="flex items-center gap-1.5 text-[14.5px] font-bold">
                  Featured Image <Info className="h-3.5 w-3.5 text-ink-500" />
                </h3>
                <div className="relative mt-3 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
                    alt="Featured"
                    className="h-[170px] w-full object-cover"
                  />
                  <button
                    className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-ink-700 shadow-card"
                    aria-label="Remove image"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button className="btn-ghost mt-3 w-full">
                  <UploadCloud className="h-4 w-4" /> Change Image
                </button>
                <p className="mt-2.5 text-[11px] text-ink-500">
                  Recommended size: 1200x630px (16:9) &nbsp;&middot;&nbsp; Max file size: 5MB
                </p>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold req">Categories</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cats.map((c) => (
                    <span key={c} className="chip bg-brand-50 text-brand-600">
                      {c}
                      <button
                        onClick={() => setCats(cats.filter((x) => x !== c))}
                        aria-label={`Remove ${c}`}
                      >
                        <X className="ml-1 h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <select className="select mt-3" defaultValue="">
                  <option value="" disabled>
                    Add another category
                  </option>
                  <option>Policy</option>
                  <option>Drilling</option>
                  <option>Safety</option>
                </select>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tagList.map((t) => (
                    <span key={t} className="chip bg-[#f4f7fd] text-ink-700">
                      {t}
                      <button
                        onClick={() => setTagList(tagList.filter((x) => x !== t))}
                        aria-label={`Remove ${t}`}
                      >
                        <X className="ml-1 h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <input className="input mt-3" placeholder="Add tag and press Enter" />
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Article Settings</h3>
                <div className="mt-4 grid grid-cols-2 gap-5">
                  <div>
                    <label className="label">Status</label>
                    <select
                      className="select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Draft</option>
                      <option>Published</option>
                      <option>Scheduled</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Visibility</label>
                    <div className="mt-1.5 space-y-2">
                      <label className="flex items-start gap-2">
                        <input
                          type="radio"
                          name="visibility"
                          className="mt-1 h-4 w-4 accent-brand-500"
                          checked={visibility === "public"}
                          onChange={() => setVisibility("public")}
                        />
                        <span>
                          <span className="block text-[12.5px] font-semibold text-ink-900">
                            Public
                          </span>
                          <span className="block text-[11px] text-ink-500">
                            Visible to everyone
                          </span>
                        </span>
                      </label>
                      <label className="flex items-start gap-2">
                        <input
                          type="radio"
                          name="visibility"
                          className="mt-1 h-4 w-4 accent-brand-500"
                          checked={visibility === "private"}
                          onChange={() => setVisibility("private")}
                        />
                        <span>
                          <span className="block text-[12.5px] font-semibold text-ink-900">
                            Private
                          </span>
                          <span className="block text-[11px] text-ink-500">Only visible to me</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Publish At</h3>
                <div className="relative mt-3">
                  <input className="input pr-10" placeholder="Select date & time (optional)" />
                  <Calendar className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
