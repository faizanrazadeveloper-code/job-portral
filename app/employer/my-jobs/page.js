"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  Bell,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock3,
  CreditCard,
  Edit3,
  FileText,
  Filter,
  Flame,
  Globe,
  Headphones,
  Home,
  Mail,
  Menu,
  MessageSquare,
  MoreVertical,
  Plus,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

const sideNav = [
  { label: "Dashboard", icon: Home },
  { label: "My Company", icon: Briefcase },
  { label: "Post a Job", icon: Building2 },
  {
    label: "My Jobs",
    icon: FileText,
    open: true,
    children: [
      { label: "All Jobs", active: true },
      { label: "Drafts" },
      { label: "Published" },
      { label: "Closed" },
      { label: "Expired" },
    ],
  },
  { label: "Applications", icon: Users },
  { label: "Saved Candidates", icon: Star },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Billing", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

const statusTabs = [
  { label: "All Jobs", count: 24, icon: Briefcase },
  { label: "Draft", count: 4, icon: Edit3 },
  { label: "Published", count: 12, icon: ShieldCheck },
  { label: "Closed", count: 4, icon: Clock3 },
  { label: "Expired", count: 4, icon: ShieldAlert },
];

const statusStyles = {
  Published: "bg-emerald-50 text-emerald-600",
  Closed: "bg-amber-50 text-amber-600",
  Expired: "bg-red-50 text-red-600",
  Draft: "bg-slate-100 text-ink-500",
};

const jobs = [
  {
    title: "Walk-In Interviews for Saudi Arabia",
    dept: "Operations",
    location: "Islamabad, Pakistan",
    posted: "Aug 07, 2026",
    postedAgo: "2 days ago",
    method: "Apply via Email",
    contact: "jobs@transarabian.org",
    methodIcon: Mail,
    status: "Published",
  },
  {
    title: "Drilling Engineer",
    dept: "Drilling",
    location: "Dammam, Saudi Arabia",
    posted: "Aug 05, 2026",
    postedAgo: "4 days ago",
    method: "Apply on Website",
    contact: "www.transarabian.com",
    methodIcon: Globe,
    status: "Published",
  },
  {
    title: "HSE Supervisor",
    dept: "HSE",
    location: "Jubail, Saudi Arabia",
    posted: "Jul 30, 2026",
    postedAgo: "10 days ago",
    method: "Apply via Email",
    contact: "jobs@transarabian.org",
    methodIcon: Mail,
    status: "Closed",
  },
  {
    title: "Mechanical Technician",
    dept: "Maintenance",
    location: "Riyadh, Saudi Arabia",
    posted: "Jul 25, 2026",
    postedAgo: "15 days ago",
    method: "Apply via Email",
    contact: "jobs@transarabian.org",
    methodIcon: Mail,
    status: "Expired",
  },
  {
    title: "Electrical Engineer",
    dept: "Engineering",
    location: "Abu Dhabi, UAE",
    posted: "Jul 22, 2026",
    postedAgo: "18 days ago",
    method: "Apply on Website",
    contact: "www.transarabian.com",
    methodIcon: Globe,
    status: "Draft",
  },
  {
    title: "Instrumentation Technician",
    dept: "Instrumentation",
    location: "Qatar",
    posted: "Jul 18, 2026",
    postedAgo: "22 days ago",
    method: "Apply via Email",
    contact: "jobs@transarabian.org",
    methodIcon: Mail,
    status: "Draft",
  },
  {
    title: "Process Engineer",
    dept: "Engineering",
    location: "Bahrain",
    posted: "Jul 10, 2026",
    postedAgo: "30 days ago",
    method: "Apply on Website",
    contact: "www.transarabian.com",
    methodIcon: Globe,
    status: "Published",
  },
];

function SidebarContent() {
  return (
    <>
      <div className="flex h-[74px] items-center border-b border-[#eef2f7] px-5">
        <Logo compact />
      </div>

      <nav className="mt-4 flex-1 space-y-1 overflow-y-auto px-3">
        {sideNav.map((item) =>
          item.children ? (
            <div key={item.label}>
              <div className="nav-item">
                <item.icon className="h-[18px] w-[18px]" />
                <span className="flex-1">{item.label}</span>
                {item.open ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </div>
              {item.open && (
                <div className="ml-7 mt-1 space-y-1 border-l border-[#eef2f7] pl-3">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href="#"
                      className={`block rounded-md px-2.5 py-2 text-[12.5px] font-semibold transition ${
                        child.active ? "text-brand-500" : "text-ink-500 hover:text-brand-500"
                      }`}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a key={item.label} href="#" className="nav-item">
              <item.icon className="h-[18px] w-[18px]" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="chip bg-brand-100 px-2 text-brand-600">{item.badge}</span>
              )}
            </a>
          )
        )}
      </nav>

      <div className="m-3 rounded-xl bg-[#f4f7fd] p-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white">
            <Headphones className="h-4 w-4 text-brand-500" />
          </span>
          <p className="text-[12.5px] font-bold">Need Help?</p>
        </div>
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-ink-500">
          We&apos;re here to help you anytime you need it.
        </p>
        <button className="btn-ghost mt-3 h-9 w-full bg-white px-3.5 text-[12.5px]">
          Contact Support
        </button>
      </div>
    </>
  );
}

export default function MyJobsPage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const visibleJobs =
    tab === 0 ? jobs : jobs.filter((j) => j.status === statusTabs[tab].label);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col border-r border-[#e8edf5] bg-white lg:flex">
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

      <div className="lg:pl-[260px]">
        <header className="sticky top-0 z-30 flex min-h-[74px] flex-wrap items-center gap-4 border-b border-[#e8edf5] bg-white px-4 py-3 sm:px-6">
          <BrandButton onClick={() => setOpen(true)} />

          <div className="relative order-2 w-full min-w-0 basis-full sm:max-w-[600px] lg:order-1 lg:flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
            <input
              className="h-11 w-full rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pl-11 pr-16 text-[13px] outline-none focus:border-brand-500"
              placeholder="Search for jobs, companies, candidates..."
            />
            <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-[#e2e8f2] bg-white px-2 py-1 text-[10.5px] font-semibold text-ink-500 sm:block">
              Ctrl + K
            </kbd>
          </div>

          <TopbarActions
            bellCount={3}
            message
            avatar={<Avatar size={34} />}
            name="John Smith"
            role="Employer"
          />
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">My Jobs</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                My Jobs / Job Management
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                View and manage all your job postings. You can edit, close or repost your jobs
                anytime.
              </p>
            </div>

            <button className="btn-primary shrink-0 px-6">
              <Plus className="h-4 w-4" /> Post a New Job
            </button>
          </div>

          <section className="card">
            {/* Status tabs */}
            <div className="flex gap-6 overflow-x-auto border-b border-[#eef2f7] px-5 pt-2 sm:px-6">
              {statusTabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTab(i)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-3.5 text-[13.5px] font-semibold transition ${
                    i === tab
                      ? "border-brand-500 text-brand-500"
                      : "border-transparent text-ink-500 hover:text-brand-500"
                  }`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                  <span
                    className={`chip px-2 ${
                      i === tab ? "bg-brand-100 text-brand-600" : "bg-slate-100 text-ink-500"
                    }`}
                  >
                    {t.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 px-5 py-4 sm:px-6">
              <div className="relative w-full sm:w-auto sm:min-w-[220px] sm:flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                <input className="input pl-10" placeholder="Search by job title, role..." />
              </div>
              <select className="select w-full sm:w-auto sm:min-w-[160px]" defaultValue="All Departments">
                <option>All Departments</option>
                <option>Operations</option>
                <option>Engineering</option>
                <option>HSE</option>
              </select>
              <select className="select w-full sm:w-auto sm:min-w-[150px]" defaultValue="All Locations">
                <option>All Locations</option>
                <option>Saudi Arabia</option>
                <option>UAE</option>
                <option>Qatar</option>
              </select>
              <button className="btn-ghost">
                <Filter className="h-4 w-4" /> More Filters
              </button>
              <select className="select w-full sm:w-auto sm:min-w-[150px]" defaultValue="Sort by: Newest">
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
                <option>Sort by: Title A-Z</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="border-y border-[#eef2f7] bg-[#f8fafc] text-[11px] font-bold uppercase tracking-wide text-ink-500">
                    <th className="px-5 py-3 sm:px-6">Job Title</th>
                    <th className="px-3 py-3">Department / Location</th>
                    <th className="px-3 py-3">Posted</th>
                    <th className="px-3 py-3">Application Method</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3 text-right sm:pr-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eef2f7]">
                  {visibleJobs.map((job) => (
                    <tr key={job.title} className="text-[13px]">
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50">
                            <Flame className="h-4 w-4 fill-brand-500 text-brand-500" strokeWidth={1} />
                          </span>
                          <div>
                            <p className="font-bold text-ink-900">{job.title}</p>
                            <p className="text-[11.5px] text-ink-500">
                              Trans Arabian Employment Company
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <p className="font-semibold text-ink-900">{job.dept}</p>
                        <p className="text-[11.5px] text-brand-500">{job.location}</p>
                      </td>
                      <td className="px-3 py-4">
                        <p className="font-semibold text-ink-900">{job.posted}</p>
                        <p className="text-[11.5px] text-ink-500">{job.postedAgo}</p>
                      </td>
                      <td className="px-3 py-4">
                        <p className="flex items-center gap-1.5 font-semibold text-ink-900">
                          <job.methodIcon className="h-3.5 w-3.5 text-ink-500" /> {job.method}
                        </p>
                        <p className="text-[11.5px] text-ink-500">{job.contact}</p>
                      </td>
                      <td className="px-3 py-4">
                        <span className={`chip ${statusStyles[job.status]}`}>
                          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                          {job.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 sm:pr-6">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            className="grid h-8 w-8 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500 hover:text-brand-500"
                            aria-label="View"
                          >
                            <Users className="h-3.5 w-3.5" />
                          </button>
                          <button
                            className="grid h-8 w-8 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500 hover:text-brand-500"
                            aria-label="Edit"
                          >
                            <Edit3 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            className="grid h-8 w-8 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500 hover:text-brand-500"
                            aria-label="More"
                          >
                            <MoreVertical className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-3 border-t border-[#eef2f7] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-[12.5px] text-ink-500">
                Showing 1 to {visibleJobs.length} of {statusTabs[tab].count} jobs
              </p>
              <div className="flex items-center gap-2">
                <button className="grid h-8 w-8 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`grid h-8 w-8 place-items-center rounded-lg text-[12.5px] font-semibold ${
                      p === 1
                        ? "bg-brand-500 text-white"
                        : "border border-[#e2e8f2] text-ink-700 hover:bg-slate-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <span className="px-1 text-ink-500">...</span>
                <button className="grid h-8 w-8 place-items-center rounded-lg border border-[#e2e8f2] text-[12.5px] font-semibold text-ink-700 hover:bg-slate-50">
                  4
                </button>
                <button className="grid h-8 w-8 place-items-center rounded-lg border border-[#e2e8f2] text-ink-500">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <select className="select ml-1 h-8 w-auto py-0 text-[12.5px]" defaultValue="10 / page">
                  <option>10 / page</option>
                  <option>25 / page</option>
                  <option>50 / page</option>
                </select>
              </div>
            </div>
          </section>

          <div className="mt-5 flex flex-col gap-2 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500 sm:flex-row sm:items-center sm:justify-between">
            <span>Jobs will automatically move to Expired after the deadline or when closed by you.</span>
            <a href="#" className="font-semibold text-brand-500">
              Learn more about job statuses
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
