"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo, PublicFooter, Avatar, Linkedin, Twitter } from "@/components/Shared";
import {
  Award,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  GraduationCap,
  Globe,
  Heart,
  MapPin,
  Menu,
  MessageSquare,
  Search,
  Share2,
  UserPlus,
  Users,
  X,
} from "lucide-react";

const navLinks = ["Jobs", "Companies", "Articles", "Categories", "Salaries", "Resources"];

const tabs = ["Articles", "About", "Categories", "Media Mentions"];

const stats = [
  { icon: FileText, value: "58", label: "Articles Published" },
  { icon: Eye, value: "256K", label: "Total Reads" },
  { icon: Users, value: "12.5K", label: "Followers" },
  { icon: Clock, value: "3", label: "Years Writing" },
];

const articles = [
  {
    tag: "Renewable Energy",
    tone: "bg-brand-50 text-brand-500",
    title: "The Future of Renewable Energy: Trends to Watch in 2025",
    desc: "Key trends shaping the renewable energy landscape and what businesses should expect in the coming year.",
    date: "May 24, 2025",
    read: "8 min read",
    views: "12.4K views",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80",
  },
  {
    tag: "Oil & Gas",
    tone: "bg-violet-50 text-violet-600",
    title: "Global Oil Market Outlook: Key Factors in 2025",
    desc: "An in-depth look at supply-demand dynamics, geopolitics, and price forecast for the global oil market.",
    date: "May 10, 2025",
    read: "6 min read",
    views: "9.8K views",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
  },
  {
    tag: "Sustainability",
    tone: "bg-emerald-50 text-emerald-600",
    title: "ESG in Energy: Why Sustainability Drives Business Value",
    desc: "How energy companies are integrating ESG strategies to improve performance and build a sustainable future.",
    date: "Apr 28, 2025",
    read: "7 min read",
    views: "7.6K views",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
  },
];

const credentials = [
  { icon: GraduationCap, title: "MSc in Energy Economics", desc: "University of Houston" },
  { icon: BriefcaseBusiness, title: "Former Energy Analyst at GlobalData", desc: "" },
  { icon: Award, title: "Published in Energy Voice, Oil & Gas Journal,", desc: "S&P Global, and more" },
];

const categoriesCovered = [
  "Renewable Energy",
  "Oil & Gas",
  "Sustainability",
  "Energy Markets",
  "Technology",
  "Policy & Regulation",
];

const popularArticles = [
  {
    title: "Wind Energy Growth: Opportunities and Challenges Ahead",
    date: "Apr 15, 2025",
    read: "6 min read",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80",
  },
  {
    title: "LNG Market Trends: What to Expect in 2025",
    date: "Apr 02, 2025",
    read: "5 min read",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&q=80",
  },
  {
    title: "Green Hydrogen: The Next Big Thing in Clean Energy",
    date: "Mar 18, 2025",
    read: "7 min read",
    img: "h2",
  },
];

export default function AuthorProfilePage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <header className="sticky top-0 z-40 border-b border-[#e8edf5] bg-white">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="ml-2 hidden flex-1 items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5 lg:flex">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-3.5">
              <Search className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-full bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                placeholder="Search jobs, companies, articles..."
              />
            </div>
            <div className="flex items-center gap-2 border-l border-[#e2e8f2] px-3.5">
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
            <button className="hidden text-ink-500 hover:text-brand-500 sm:block">
              <Heart className="h-[21px] w-[21px]" />
            </button>
            <button className="relative hidden text-ink-500 hover:text-brand-500 sm:block">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button className="hidden text-ink-500 hover:text-brand-500 sm:block">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <div className="hidden items-center gap-2.5 sm:flex">
              <Avatar size={38} />
              <span className="hidden leading-tight md:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Employer</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className="hidden border-t border-[#eef2f7] lg:block">
          <div className="mx-auto flex h-[54px] max-w-[1440px] items-center gap-7 px-4 sm:px-6 lg:px-8">
            {navLinks.map((l) => (
              <Link
                key={l}
                href={l === "Articles" ? "/articles" : l === "Companies" ? "/companies" : l === "Jobs" ? "/jobs" : "#"}
                className={`relative flex items-center gap-1 py-2 text-[13.5px] font-semibold transition ${
                  l === "Articles" ? "text-brand-500" : "text-ink-700 hover:text-brand-500"
                }`}
              >
                {l}
                {(l === "Categories" || l === "Resources") && <ChevronDown className="h-3.5 w-3.5" />}
                {l === "Articles" && (
                  <span className="absolute inset-x-0 -bottom-[13px] h-[2.5px] rounded-full bg-brand-500" />
                )}
              </Link>
            ))}
            <div className="ml-auto flex items-center gap-5">
              <button className="flex items-center gap-1 text-[13.5px] font-semibold text-ink-700 hover:text-brand-500">
                For Employers <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <button className="btn-primary h-10 px-5 text-[12.5px]">Post a Job</button>
            </div>
          </div>
        </div>

        {open && (
          <div className="border-t border-[#e8edf5] bg-white px-4 pb-5 pt-3 lg:hidden">
            {navLinks.map((l) => (
              <a key={l} href="#" className="block border-b border-[#f1f5f9] py-3 text-[14px] font-semibold text-ink-700">
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
          <span>Home</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Articles</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Authors</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-ink-700">John Smith</span>
        </nav>

        {/* Hero */}
        <section className="relative mt-4 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80"
            alt="Wind turbines and solar panels"
            className="h-[260px] w-full object-cover sm:h-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b3d]/85 via-[#0a1b3d]/55 to-transparent" />

          <div className="absolute inset-0 flex items-center px-6 sm:px-10">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <span className="h-[110px] w-[110px] shrink-0 overflow-hidden rounded-full border-4 border-white bg-gradient-to-b from-[#c58a63] to-[#7b4a2f] shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                  alt="John Smith"
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="flex items-center gap-2 text-[26px] font-extrabold text-white">
                  John Smith
                  <CheckCircle2 className="h-5 w-5 fill-brand-400 text-white" />
                </p>
                <p className="mt-1 text-[14px] font-medium text-white/85">
                  Energy Writer &amp; Research Analyst
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-4 text-[12.5px] text-white/75">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Dubai, UAE
                  </span>
                  <span className="flex items-center gap-2.5">
                    <a href="#" className="grid h-7 w-7 place-items-center rounded-md bg-white/15 hover:bg-white/25">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href="#" className="grid h-7 w-7 place-items-center rounded-md bg-white/15 hover:bg-white/25">
                      <Twitter className="h-3.5 w-3.5" />
                    </a>
                    <a href="#" className="grid h-7 w-7 place-items-center rounded-md bg-white/15 hover:bg-white/25">
                      <Globe className="h-3.5 w-3.5" />
                    </a>
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-white/80">
                  John covers the latest trends, innovations, and market insights in renewable
                  energy, oil &amp; gas, and sustainability. Passionate about creating
                  data-driven, easy to understand content for energy professionals and businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="card relative z-10 -mt-8 mx-2 flex flex-col gap-5 p-5 sm:mx-6 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f4f7fd] text-ink-700">
                  <s.icon className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-[18px] font-extrabold text-ink-900">{s.value}</p>
                  <p className="text-[11.5px] text-ink-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-3">
            <button className="btn-primary px-5">
              <UserPlus className="h-4 w-4" /> Follow
            </button>
            <button
              className="grid h-11 w-11 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
              aria-label="Share profile"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </section>

        <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main */}
          <div>
            <div className="flex gap-6 overflow-x-auto border-b border-[#eef2f7]">
              {tabs.map((t, i) => (
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
              <section className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-[15px] font-extrabold">Latest Articles</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-[12.5px] text-ink-500">Sort by:</span>
                    <select className="select w-auto min-w-[110px]" defaultValue="Latest">
                      <option>Latest</option>
                      <option>Most Read</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>

                <div className="card mt-4 divide-y divide-[#eef2f7] p-2 sm:p-3">
                  {articles.map((a) => (
                    <article key={a.title} className="flex flex-col gap-4 p-3 sm:flex-row sm:items-start">
                      <div className="h-[110px] w-full shrink-0 overflow-hidden rounded-lg sm:w-[150px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`chip ${a.tone}`}>{a.tag}</span>
                        <p className="mt-2 text-[15px] font-extrabold text-ink-900">{a.title}</p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">{a.desc}</p>
                        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-ink-500">
                          <span>{a.date}</span>
                          <span>&middot;</span>
                          <span>{a.read}</span>
                          <span>&middot;</span>
                          <span>{a.views}</span>
                        </div>
                      </div>
                      <button
                        className="shrink-0 text-ink-500 hover:text-brand-500"
                        aria-label="Bookmark article"
                      >
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </article>
                  ))}
                </div>

                <div className="mt-5 text-center">
                  <button className="btn-ghost px-6">Load More Articles</button>
                </div>
              </section>
            )}

            {tab !== 0 && (
              <section className="card mt-5 grid min-h-[300px] place-items-center p-6 text-center">
                <div>
                  <h2 className="text-[16.5px] font-extrabold">{tabs[tab]}</h2>
                  <p className="mt-2 text-[13px] text-ink-500">This tab will be designed next.</p>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">About the Author</h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-500">
                John Smith is an energy writer and research analyst with 5+ years of experience in
                covering the oil, gas, renewable energy, and sustainability sectors.
              </p>
              <div className="mt-4 space-y-3.5">
                {credentials.map((c) => (
                  <div key={c.title} className="flex items-start gap-2.5">
                    <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                    <span>
                      <span className="block text-[12.5px] font-semibold text-ink-900">
                        {c.title}
                      </span>
                      {c.desc && <span className="block text-[11.5px] text-ink-500">{c.desc}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[14.5px] font-bold">Categories Covered</h3>
                <a href="#" className="text-[12px] font-semibold text-brand-500">
                  View all
                </a>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {categoriesCovered.map((c) => (
                  <span key={c} className="chip bg-brand-50 text-brand-600">
                    {c}
                  </span>
                ))}
              </div>
            </section>

            <section className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[14.5px] font-bold">Popular Articles</h3>
                <a href="#" className="text-[12px] font-semibold text-brand-500">
                  View all
                </a>
              </div>
              <div className="mt-3.5 space-y-4">
                {popularArticles.map((a) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <div className="grid h-14 w-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-[#0a3a66]">
                      {a.img === "h2" ? (
                        <span className="text-[15px] font-extrabold text-white">H₂</span>
                      ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-bold leading-snug text-ink-900">
                        {a.title}
                      </p>
                      <p className="mt-1 text-[11px] text-ink-500">
                        {a.date} &nbsp;&middot;&nbsp; {a.read}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      <div className="mt-10">
        <PublicFooter />
      </div>
    </div>
  );
}
