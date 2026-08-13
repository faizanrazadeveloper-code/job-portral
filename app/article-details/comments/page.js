"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo, PublicFooter, Avatar } from "@/components/Shared";
import {
  Bell,
  Bold,
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  Filter,
  Heart,
  Image as ImageIcon,
  Italic,
  Link2,
  ListOrdered,
  List,
  Menu,
  MessageSquare,
  MoreVertical,
  Quote,
  Search,
  Share2,
  Smile,
  ThumbsUp,
  Underline,
  MapPin,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = ["Jobs", "Companies", "Articles", "Salaries", "Resources"];

const topics = [
  "Solar Energy",
  "Wind Energy",
  "Energy Storage",
  "Clean Energy",
  "Future Trends",
  "Sustainability",
];

const popularArticles = [
  {
    title: "Global Oil Market Outlook: Key Factors in 2025",
    date: "May 20, 2025",
    read: "6 min read",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&q=80",
  },
  {
    title: "ESG in Energy: Why Sustainability Drives Business Value",
    date: "May 18, 2025",
    read: "7 min read",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&q=80",
  },
  {
    title: "Green Hydrogen: The Next Big Thing in Clean Energy",
    date: "May 15, 2025",
    read: "5 min read",
    img: "h2",
  },
];

const comments = [
  {
    name: "Sarah Johnson",
    role: "Energy Analyst",
    time: "May 24, 2025 at 10:30 AM",
    verified: true,
    tone: "woman",
    text: "Excellent insights! The point about energy storage breakthrough is particularly important.\nDo you think solid-state batteries will be commercially viable by 2030?",
    likes: 12,
    replies: [
      {
        name: "John Smith",
        role: "Author",
        author: true,
        time: "May 24, 2025 at 10:45 AM",
        tone: "man",
        text: "Great question, Sarah! Solid-state batteries show great promise.\nI believe we'll see limited commercial use by 2030, with wider adoption in the early 2030s.",
        likes: 8,
      },
    ],
    moreReplies: 2,
  },
  {
    name: "Mohammed Ali",
    role: "Sustainability Consultant",
    time: "May 24, 2025 at 9:15 AM",
    tone: "man2",
    text: "Very comprehensive article. The statistics on renewable energy growth are impressive.",
    likes: 6,
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    time: "May 23, 2025 at 4:20 PM",
    tone: "woman",
    text: "Thanks for highlighting green hydrogen. It's an area that needs more attention and investment.",
    likes: 4,
  },
];

function CommentBody({ c, reply }) {
  return (
    <div className="flex gap-3">
      <Avatar size={reply ? 34 : 38} tone={c.tone} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-bold text-ink-900">
            {c.name}
            {c.verified && <CheckIcon />}
            {c.author && <span className="chip bg-brand-50 text-brand-600">Author</span>}
          </p>
          <button className="text-ink-500 hover:text-ink-700" aria-label="More options">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
        <p className="text-[11.5px] text-ink-500">
          {c.role} &nbsp;&middot;&nbsp; {c.time}
        </p>
        <p className="mt-2 whitespace-pre-line text-[13.5px] leading-relaxed text-ink-700">
          {c.text}
        </p>
        <div className="mt-2.5 flex items-center gap-5 text-[12.5px] font-semibold text-ink-500">
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="h-3.5 w-3.5" /> {c.likes}
          </span>
          <button className="flex items-center gap-1.5 hover:text-brand-500">
            <MessageSquare className="h-3.5 w-3.5" /> Reply
          </button>
          {!reply && (
            <button className="flex items-center gap-1.5 hover:text-brand-500">
              <Share2 className="h-3.5 w-3.5" /> Share
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-brand-500">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.28-9.72a.75.75 0 00-1.06-1.06L9 10.44 7.78 9.22a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
      />
    </svg>
  );
}

export default function ArticleCommentsPage() {
  const [open, setOpen] = useState(false);

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
                {l === "Resources" && <ChevronDown className="h-3.5 w-3.5" />}
                {l === "Articles" && (
                  <span className="absolute inset-x-0 -bottom-[13px] h-[2.5px] rounded-full bg-brand-500" />
                )}
              </Link>
            ))}
            <div className="ml-auto flex items-center gap-5">
              <button className="flex items-center gap-1 text-[13.5px] font-semibold text-ink-700 hover:text-brand-500">
                For Employers <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <span className="h-6 w-px bg-[#eef2f7]" />
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
          <span className="text-ink-700">The Future of Renewable Energy: Trends to Watch in 2025</span>
        </nav>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2.5 text-[24px] font-extrabold tracking-tight">
              Article Comments <span className="chip bg-brand-500 text-white">24</span>
            </h1>
            <p className="mt-2 text-[13px] text-ink-500">
              Share your thoughts, ask questions, and join the conversation.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <select className="select w-auto min-w-[140px]" defaultValue="Newest First">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Most Liked</option>
            </select>
            <button
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#dfe6f1] text-ink-500 hover:bg-slate-50"
              aria-label="Filter comments"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main */}
          <div>
            <section className="card p-5 sm:p-6">
              <h2 className="text-[14px] font-bold">Add a Comment</h2>
              <div className="mt-4 flex gap-3">
                <Avatar size={38} />
                <div className="min-w-0 flex-1">
                  <div className="rounded-xl border border-[#e2e8f2]">
                    <textarea
                      className="h-[90px] w-full resize-none rounded-t-xl px-4 py-3 text-[13.5px] outline-none placeholder:text-ink-500"
                      placeholder="Write your comment..."
                    />
                    <div className="flex items-center gap-1 border-t border-[#eef2f7] px-3 py-2">
                      <button className="toolbar-btn" aria-label="Bold"><Bold className="h-4 w-4" /></button>
                      <button className="toolbar-btn" aria-label="Italic"><Italic className="h-4 w-4" /></button>
                      <button className="toolbar-btn" aria-label="Underline"><Underline className="h-4 w-4" /></button>
                      <span className="mx-1 h-5 w-px bg-[#eef2f7]" />
                      <button className="toolbar-btn" aria-label="Bullet list"><List className="h-4 w-4" /></button>
                      <button className="toolbar-btn" aria-label="Numbered list"><ListOrdered className="h-4 w-4" /></button>
                      <span className="mx-1 h-5 w-px bg-[#eef2f7]" />
                      <button className="toolbar-btn" aria-label="Quote"><Quote className="h-4 w-4" /></button>
                      <button className="toolbar-btn" aria-label="Link"><Link2 className="h-4 w-4" /></button>
                      <span className="mx-1 h-5 w-px bg-[#eef2f7]" />
                      <button className="toolbar-btn" aria-label="Emoji"><Smile className="h-4 w-4" /></button>
                      <button className="toolbar-btn" aria-label="Image"><ImageIcon className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end gap-3">
                    <button className="btn-ghost h-10 px-4 text-[12.5px]">Cancel</button>
                    <button className="btn-primary h-10 px-5 text-[12.5px]">Post Comment</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="card mt-5 divide-y divide-[#eef2f7] p-5 sm:p-6">
              {comments.map((c) => (
                <div key={c.name} className={c.name === comments[0].name ? "pb-6" : "py-6"}>
                  <CommentBody c={c} />
                  {c.replies && (
                    <div className="ml-[52px] mt-4 space-y-4 border-l-2 border-[#eef2f7] pl-5">
                      {c.replies.map((r) => (
                        <CommentBody key={r.name + r.time} c={r} reply />
                      ))}
                      {c.moreReplies > 0 && (
                        <button className="flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500">
                          View {c.moreReplies} more replies <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </section>

            <div className="mt-5 text-center">
              <button className="btn-ghost px-6">
                Load More Comments <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <section className="card overflow-hidden p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80"
                alt="Wind turbines and solar panels"
                className="h-[140px] w-full object-cover"
              />
              <div className="p-5">
                <span className="chip bg-brand-50 text-[10.5px] uppercase tracking-wide text-brand-600">
                  Renewable Energy
                </span>
                <p className="mt-2.5 text-[15px] font-extrabold leading-snug text-ink-900">
                  The Future of Renewable Energy: Trends to Watch in 2025
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Avatar size={26} />
                  <span className="flex items-center gap-1 text-[12.5px] font-semibold text-ink-900">
                    John Smith <CheckIcon />
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-ink-500">
                  <span>May 24, 2025</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 8 min read</span>
                  <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> 12.4K views</span>
                </div>

                <h3 className="mt-4 text-[13px] font-bold text-ink-900">About the Article</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                  Renewable energy is no longer just an alternative—it&apos;s becoming the
                  foundation of our global energy future. As we move into 2025, several key
                  trends are shaping the industry and creating new opportunities for businesses,
                  investors, and professionals.
                </p>
                <a
                  href="#"
                  className="mt-3 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500"
                >
                  Read Full Article <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>

            <section className="card p-5">
              <h3 className="text-[14.5px] font-bold">Article Topics</h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {topics.map((t) => (
                  <span key={t} className="chip bg-brand-50 text-brand-600">
                    {t}
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
                      <p className="text-[12.5px] font-bold leading-snug text-ink-900">{a.title}</p>
                      <p className="mt-1 text-[11px] text-ink-500">
                        {a.date} &nbsp;&middot;&nbsp; {a.read}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-brand-50/60 p-5">
              <p className="flex items-center gap-2 text-[13.5px] font-bold text-ink-900">
                <MessageSquare className="h-4 w-4 text-brand-500" /> Join the Conversation
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-700">
                Your voice matters! Join the discussion and share your insights with the
                community.
              </p>
              <div className="mt-3.5 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <Avatar size={26} tone="woman" />
                  <Avatar size={26} tone="man2" />
                  <Avatar size={26} tone="man" />
                </div>
                <span className="text-[11.5px] font-semibold text-ink-700">
                  128 people are discussing this article
                </span>
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
