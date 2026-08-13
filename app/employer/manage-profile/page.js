"use client";

import { useState } from "react";
import { Logo, Avatar } from "@/components/Shared";
import TopbarActions from "@/components/TopbarActions";
import BrandButton from "@/components/BrandButton";
import {
  Bell,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  ExternalLink,
  FileText,
  Flame,
  Globe,
  HelpCircle,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Save,
  Search,
  Settings,
  Star,
  Trash2,
  UploadCloud,
  Users,
  X,
} from "lucide-react";

const sideNav = [
  { label: "Dashboard", icon: Building2 },
  {
    label: "My Company",
    icon: Briefcase,
    children: [
      { label: "Profile Setup" },
      { label: "Manage Profile", active: true },
    ],
  },
  { label: "Post a Job", icon: FileText },
  { label: "My Jobs", icon: FileText },
  { label: "Applications", icon: Users },
  { label: "Saved Candidates", icon: Star },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Billing", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

const tabs = [
  "Company Information",
  "About Company",
  "Social Links",
  "Contact & Location",
  "Account Settings",
];

const industries = [
  "Oil & Gas Industry",
  "Renewable Energy",
  "Petrochemical",
  "Mining & Metals",
  "Utilities",
];

const companySizes = [
  "1 – 50 Employees",
  "51 – 200 Employees",
  "201 – 500 Employees",
  "501 – 1000 Employees",
  "1000+ Employees",
];

const countries = ["Saudi Arabia", "United Arab Emirates", "Qatar", "Pakistan", "United States"];

const cities = ["Dammam", "Riyadh", "Jubail", "Dubai", "Doha"];

const openPositionsPreview = [
  { title: "Drilling Engineer", location: "Dammam, Saudi Arabia", type: "Full-time" },
  { title: "HSE Supervisor", location: "Jubail, Saudi Arabia", type: "Full-time" },
  { title: "Mechanical Technician", location: "Riyadh, Saudi Arabia", type: "Full-time" },
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
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
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
        <p className="text-[12.5px] font-bold">Complete your company profile</p>
        <p className="mt-2 text-[11.5px] text-ink-500">70% Completed</p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-[#dde6f3]">
          <div className="h-full w-[70%] rounded-full bg-brand-500" />
        </div>
      </div>

      <div className="border-t border-[#eef2f7] p-3">
        <a
          href="#"
          className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-500"
        >
          <HelpCircle className="h-[18px] w-[18px]" /> Help Center
        </a>
      </div>
    </>
  );
}

export default function ManageProfilePage() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [companyName, setCompanyName] = useState("Trans Arabian Employment Company");
  const [website, setWebsite] = useState("https://www.transarabian.org");
  const [email, setEmail] = useState("info@transarabian.org");
  const [phone, setPhone] = useState("+966 12 345 6789");
  const [description, setDescription] = useState(
    "Trans Arabian Employment Company is a leading recruitment and staffing company specializing in Oil & Gas, Industrial & Energy sector across the Middle East."
  );

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

        <main className="mx-auto max-w-[1320px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-start">
            <div>
              <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <span>Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>My Company</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-ink-700">Manage Profile</span>
              </nav>
              <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">
                Manage Company Profile
              </h1>
              <p className="mt-2 text-[13px] text-ink-500">
                Update your company information and settings. Keep your profile up to date to
                attract the best talent.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 xl:ml-auto">
              <button className="btn-ghost">
                View Public Profile <ExternalLink className="h-4 w-4" />
              </button>
              <button className="btn-primary px-6">Save Changes</button>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* Form */}
            <section className="card p-5 sm:p-6">
              {/* Tabs */}
              <div className="-mx-5 flex gap-6 overflow-x-auto border-b border-[#eef2f7] px-5 sm:-mx-6 sm:px-6">
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
                <div className="pt-6">
                  <h2 className="text-[16.5px] font-extrabold">Company Images</h2>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="label">Company Logo *</p>
                      <div className="grid h-[150px] w-full place-items-center rounded-xl border border-dashed border-[#dfe6f1] bg-[#f8fafc] text-center">
                        <div>
                          <UploadCloud className="mx-auto h-6 w-6 text-ink-500" />
                          <p className="mt-2 text-[13px] font-semibold text-ink-700">
                            Click to upload logo
                          </p>
                          <p className="mt-1 text-[11px] text-ink-500">
                            PNG, JPG or SVG (Max 2MB)
                          </p>
                        </div>
                      </div>
                      <button className="btn-ghost mt-3 h-9 gap-1.5 border-red-200 px-3.5 text-[12.5px] text-red-600 hover:bg-red-50">
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                    <div>
                      <p className="label">Cover Image</p>
                      <div className="grid h-[150px] w-full place-items-center rounded-xl border border-dashed border-[#dfe6f1] bg-[#f8fafc] text-center">
                        <div>
                          <UploadCloud className="mx-auto h-6 w-6 text-ink-500" />
                          <p className="mt-2 text-[13px] font-semibold text-ink-700">
                            Click to upload cover image
                          </p>
                          <p className="mt-1 text-[11px] text-ink-500">
                            Recommended size: 1200x400px (Max 5MB)
                          </p>
                        </div>
                      </div>
                      <button className="btn-ghost mt-3 h-9 gap-1.5 border-red-200 px-3.5 text-[12.5px] text-red-600 hover:bg-red-50">
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label req">Company Name</label>
                      <input
                        className="input"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="label">Website</label>
                      <div className="relative">
                        <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input
                          className="input pl-10"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label req">Industry</label>
                      <select className="select" defaultValue={industries[0]}>
                        {industries.map((i) => (
                          <option key={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Company Size</label>
                      <select className="select" defaultValue={companySizes[2]}>
                        {companySizes.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label req">Headquarters (Country)</label>
                      <select className="select" defaultValue={countries[0]}>
                        {countries.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label req">City</label>
                      <select className="select" defaultValue={cities[0]}>
                        {cities.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label req">Company Email</label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input
                          className="input pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label req">Phone Number</label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                        <input
                          className="input pl-10"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="label req">Short Description</label>
                    <div className="relative">
                      <textarea
                        className="input h-[110px] resize-none py-3 leading-relaxed"
                        maxLength={250}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <span className="absolute bottom-2.5 right-3.5 text-[11px] text-ink-500">
                        {description.length}/250
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end border-t border-[#eef2f7] pt-5">
                    <button className="btn-primary gap-2 px-7">
                      <Save className="h-4 w-4" /> Save Changes
                    </button>
                  </div>
                </div>
              )}

              {tab > 0 && (
                <div className="grid min-h-[420px] place-items-center text-center">
                  <div>
                    <h2 className="text-[16.5px] font-extrabold">{tabs[tab]}</h2>
                    <p className="mt-2 text-[13px] text-ink-500">
                      This tab will be designed next.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Preview */}
            <aside className="card h-fit p-5">
              <h3 className="text-[14.5px] font-bold">Profile Preview</h3>
              <p className="mt-1.5 text-[12px] text-ink-500">
                This is how your company profile appears to job seekers.
              </p>

              <div className="ph ph-rig mt-4 h-[130px] rounded-xl" />

              <div className="relative -mt-8 ml-3">
                <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-white shadow-card">
                  <Flame className="h-7 w-7 fill-brand-500 text-brand-500" strokeWidth={1} />
                </span>
              </div>

              <div className="mt-3">
                <p className="flex items-center gap-1.5 text-[15px] font-extrabold">
                  {companyName}
                  <CheckCircle2 className="h-4 w-4 fill-brand-500 text-white" />
                </p>
                <p className="mt-1 text-[12px] text-ink-500">
                  Oil &amp; Gas Industry · Dammam, Saudi Arabia · 201 – 500 Employees
                </p>
                {website && (
                  <a href="#" className="mt-1.5 flex items-center gap-1.5 text-[12px] text-brand-500">
                    <Globe className="h-3.5 w-3.5" /> {website.replace("https://", "")}
                  </a>
                )}
              </div>

              <div className="mt-4 border-t border-[#eef2f7] pt-4">
                <p className="text-[12.5px] font-bold">About Company</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">{description}</p>
                <a href="#" className="mt-1.5 inline-block text-[12px] font-semibold text-brand-500">
                  View More
                </a>
              </div>

              <div className="mt-4 border-t border-[#eef2f7] pt-4">
                <p className="text-[12.5px] font-bold">Open Positions (Preview)</p>
                <ul className="mt-3 space-y-3">
                  {openPositionsPreview.map((job) => (
                    <li key={job.title} className="flex gap-2.5 text-[12px]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>
                        <span className="block font-semibold text-ink-900">{job.title}</span>
                        <span className="text-ink-500">
                          {job.location} · {job.type}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-lg bg-[#f4f7fd] p-3.5 text-[11.5px] leading-relaxed text-ink-500">
                Changes you make here will be reflected on your public company profile.
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
