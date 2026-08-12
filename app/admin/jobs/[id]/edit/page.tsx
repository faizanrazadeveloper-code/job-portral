"use client";

import { useState } from "react";
import Link from "next/link";
import Shell from "@/components/admin/Shell";
import { PageHeader } from "@/components/admin/ShellUI";
import { Facebook, Twitter, Linkedin } from "@/components/Shared";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Image as ImageIcon,
  AlignLeft,
  Indent,
  UploadCloud,
  MapPin,
  Trash2,
  Plus,
  Pencil,
  Calendar,
  Copy,
  ExternalLink,
  Save,
  Briefcase,
  Layers,
  Building2,
  Route,
  CheckCircle2,
  MessageCircle,
  Share2,
  Info,
} from "lucide-react";

const employmentTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels = ["Entry Level", "1 - 2 Years", "2 - 10 Years", "10+ Years"];
const departments = ["Operations", "Engineering", "HSE", "Maintenance"];
const jobCategories = ["Field Operations", "Office / Admin", "Technical"];

const walkInLocations = [
  {
    city: "Islamabad",
    date: "07-AUGUST-2026",
    venue: "G-7/1 Building No. 23 Street No. 31",
    tone: "bg-[#5b2a86]",
  },
  {
    city: "Sadiqabad",
    date: "13-AUGUST-2026",
    venue: "Midway Hotel, Main G.T. Road,",
    tone: "bg-[#0f1b33]",
  },
];

const positions = [
  { title: "NDT FITTER / نڈٹی فٹر", exp: "2-5 Years", salary: "1200-1800" },
  { title: "RIGGER / رگر", exp: "2-5 Years", salary: "1200-1800" },
  { title: "SCAFFOLDER / سکیفولڈر", exp: "2-5 Years", salary: "1200-1800" },
  { title: "PIPE FABRICATOR / پائپ فیبریکیٹر", exp: "3-6 Years", salary: "1500-2000" },
  { title: "WELDER (6G TIG & ARC) / ویلڈر", exp: "2-5 Years", salary: "1200-1800" },
];

const requirements = [
  "Relevant experience in Oil & Gas / Industrial Projects",
  "Diploma / Trade Test Certificate (Relevant Field)",
  "Original Documents with CV",
  "Medical Fitness Certificate",
];

export default function EditJobDetailsPage() {
  const [title, setTitle] = useState("Walk-In Job Interviews for Saudi Arabia");
  const [role, setRole] = useState("Various Positions");
  const [featured, setFeatured] = useState(false);

  return (
    <Shell>
      <PageHeader
        title="Job Details"
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Jobs", href: "/admin/jobs" },
          { label: "Job Details" },
        ]}
        actions={
          <>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50">
              View Public Page <ExternalLink size={14} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50">
              <Copy size={14} /> Duplicate
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-3.5 py-2 text-[13px] font-medium text-white hover:bg-brand-700">
              Save Changes
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-5">
          {/* Banner */}
          <Panel title="Job Banner / Image" subtitle="(Recommended size: 1200x628px)">
            <div className="grid h-[180px] place-items-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-center">
              <div>
                <UploadCloud className="mx-auto h-6 w-6 text-gray-400" />
                <p className="mt-2 text-[13.5px] font-semibold text-gray-800">
                  Click to upload image
                </p>
                <p className="mt-1 text-[11.5px] text-gray-400">PNG, JPG or WEBP (Max 5MB)</p>
              </div>
            </div>
            <p className="mt-2.5 flex items-center gap-1.5 text-[11.5px] text-gray-400">
              <Info size={13} />
              This image will be shown on the job details page and in job listings as thumbnail.
            </p>
          </Panel>

          {/* Basic Information */}
          <Panel title="Basic Information" accent>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Job Title" required>
                <input
                  className="field"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Field>
              <Field label="Job Position / Role" required>
                <input className="field" value={role} onChange={(e) => setRole(e.target.value)} />
              </Field>
              <Field label="Employment Type" required>
                <select className="field" defaultValue={employmentTypes[0]}>
                  {employmentTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Experience Level" required>
                <select className="field" defaultValue={experienceLevels[2]}>
                  {experienceLevels.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </Field>
              <Field label="Department / Category" required>
                <select className="field" defaultValue={departments[0]}>
                  {departments.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </Field>
              <Field label="Job Category" required>
                <select className="field" defaultValue={jobCategories[0]}>
                  {jobCategories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>
          </Panel>

          {/* Walk-In Locations */}
          <Panel title="Walk-In Locations" subtitle="(Multiple Locations)">
            <p className="-mt-2 mb-4 text-[12.5px] text-gray-500">
              Add one or more walk-in interview locations
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {walkInLocations.map((loc) => (
                <div key={loc.city} className="rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white ${loc.tone}`}
                    >
                      <MapPin size={13} /> {loc.city}
                    </span>
                    <button
                      className="grid h-8 w-8 place-items-center rounded-lg border border-red-100 text-red-500 hover:bg-red-50"
                      aria-label="Remove location"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="mt-3.5">
                    <label className="mb-1 block text-[12px] font-semibold text-gray-700">
                      Walk-In Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input className="field pr-9" defaultValue={loc.date} />
                      <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="mt-3.5">
                    <label className="mb-1 block text-[12px] font-semibold text-gray-700">
                      Venue / Address <span className="text-red-500">*</span>
                    </label>
                    <textarea className="field h-[54px] resize-none py-2" defaultValue={loc.venue} />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-600">
              <Plus size={14} /> Add Another Location
            </button>
          </Panel>

          {/* Positions / Vacancies */}
          <Panel title="Positions / Vacancies">
            <p className="-mt-2 mb-4 text-[12.5px] text-gray-500">
              Add all positions with required experience and salary range
            </p>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[520px] border-collapse text-left text-[12.5px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                    <th className="px-3 py-2.5">#</th>
                    <th className="px-3 py-2.5">Position / Job Title</th>
                    <th className="px-3 py-2.5">Experience</th>
                    <th className="px-3 py-2.5">Salary Range (PKR)</th>
                    <th className="px-3 py-2.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {positions.map((p, i) => (
                    <tr key={p.title}>
                      <td className="px-3 py-2.5 font-bold text-red-500">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="px-3 py-2.5 font-semibold text-gray-800">{p.title}</td>
                      <td className="px-3 py-2.5 text-gray-600">{p.exp}</td>
                      <td className="px-3 py-2.5 text-gray-600">{p.salary}</td>
                      <td className="px-3 py-2.5">
                        <div className="flex justify-end gap-1.5">
                          <button
                            className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-gray-100"
                            aria-label="Edit position"
                          >
                            <Pencil size={13} />
                          </button>
                          <button
                            className="grid h-7 w-7 place-items-center rounded-md text-red-500 hover:bg-red-50"
                            aria-label="Remove position"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-600">
              <Plus size={14} /> Add More Position
            </button>
          </Panel>

          {/* Job Description */}
          <Panel title="Job Description">
            <div className="rounded-xl border border-gray-200">
              <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 px-2.5 py-2">
                {[Bold, Italic, Underline, List, ListOrdered, AlignLeft, Indent, Link2, ImageIcon].map(
                  (Icon, i) => (
                    <button
                      key={i}
                      className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-gray-200"
                    >
                      <Icon size={14} />
                    </button>
                  )
                )}
              </div>
              <div className="space-y-3 px-4 py-4 text-[13px] leading-relaxed text-gray-700">
                <p>
                  Trans Arabian Employment Company is conducting Walk-In Job Interviews for our
                  leading client in <b>Saudi Arabia</b> for various positions in Oil &amp; Gas
                  Industry.
                </p>
                <p>
                  Candidates must have relevant experience in Oil &amp; Gas / Industrial Projects.
                  Attractive salary package with other benefits as per company policy.
                </p>
                <p>
                  Interested candidates are requested to attend the walk-in interview on the given
                  dates along with required documents.
                </p>
              </div>
            </div>
          </Panel>

          {/* Requirements */}
          <Panel title="Requirements">
            <ul className="space-y-2.5">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-[13px] text-gray-700">
                  <CheckCircle2 size={16} className="shrink-0 text-brand-600" />
                  {r}
                </li>
              ))}
            </ul>

            <label className="mt-5 flex items-center gap-2.5 border-t border-gray-100 pt-4">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 accent-brand-600"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <span className="text-[13px] font-semibold text-gray-800">Mark as Featured Job</span>
            </label>

            <div className="mt-5 flex justify-end gap-3">
              <Link
                href="/admin/jobs"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-[13px] font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-medium text-white hover:bg-brand-700">
                <Save size={14} /> Save Changes
              </button>
            </div>
          </Panel>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <Panel title="Job Preview" subtitle="This is how the job will appear to job seekers.">
            <div className="relative grid h-[150px] place-items-center overflow-hidden rounded-xl bg-gray-100">
              <ImageIcon className="h-7 w-7 text-gray-300" />
              <span className="absolute bottom-2.5 right-2.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-bold text-gray-700 shadow-sm">
                Full-time
              </span>
            </div>
            <p className="mt-3.5 text-[15px] font-bold leading-snug text-gray-900">{title}</p>
            <ul className="mt-3 space-y-2 text-[12.5px] text-gray-500">
              <li className="flex items-center gap-2">
                <MapPin size={13} /> Islamabad &nbsp;·&nbsp; Sadiqabad
              </li>
              <li className="flex items-center gap-2">
                <Briefcase size={13} /> {role}
              </li>
              <li className="flex items-center gap-2">
                <Layers size={13} /> Full-time
              </li>
              <li className="flex items-center gap-2">
                <Route size={13} /> 2 - 10 Years
              </li>
              <li className="flex items-center gap-2">
                <Building2 size={13} /> Trans Arabian Employment Company
              </li>
            </ul>
          </Panel>

          <Panel title="Job Summary">
            <dl className="space-y-3.5 text-[13px]">
              <SummaryRow icon={Briefcase} label="Employment Type" value="Full-time" />
              <SummaryRow icon={Route} label="Experience Level" value="2 - 10 Years" />
              <SummaryRow icon={Building2} label="Department" value="Operations" />
              <SummaryRow icon={Layers} label="Job Category" value="Field Operations" />
            </dl>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="mb-2.5 flex items-center gap-1.5 text-[12.5px] font-semibold text-gray-500">
                <MapPin size={13} /> Walk-In Locations
              </p>
              <div className="space-y-3">
                {walkInLocations.map((loc) => (
                  <div key={loc.city} className="pl-1 text-[12.5px]">
                    <p className="flex items-center gap-1.5 font-semibold text-gray-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {loc.city}
                    </p>
                    <p className="ml-3 mt-0.5 text-gray-500">{loc.date}</p>
                    <p className="ml-3 text-gray-500">
                      {loc.venue} No. {loc.city === "Islamabad" ? "23, Street No. 31" : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel title="Share Job">
            <div className="flex flex-wrap gap-2">
              <SocialBtn color="bg-[#1877F2]">
                <Facebook className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn color="bg-[#1DA1F2]">
                <Twitter className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn color="bg-[#0A66C2]">
                <Linkedin className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn color="bg-[#25D366]">
                <MessageCircle size={16} />
              </SocialBtn>
              <SocialBtn color="bg-gray-500">
                <Share2 size={16} />
              </SocialBtn>
            </div>
          </Panel>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-[12px] leading-relaxed text-blue-700">
            <p className="mb-1 flex items-center gap-1.5 font-semibold">
              <Info size={13} /> Note
            </p>
            Make sure all information is correct before publishing the job.
          </div>
        </div>
      </div>

      <style jsx global>{`
        .field {
          width: 100%;
          height: 40px;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          background: #fff;
          padding: 0 0.75rem;
          font-size: 13px;
          color: #374151;
          outline: none;
          transition: border-color 0.15s;
        }
        .field:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
      `}</style>
    </Shell>
  );
}

function Panel({
  title,
  subtitle,
  accent,
  children,
}: {
  title: string;
  subtitle?: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-card sm:p-6">
      <h3
        className={`mb-4 text-[15px] font-bold ${accent ? "text-brand-700" : "text-brand-700"}`}
      >
        {title} {subtitle && <span className="font-normal text-gray-400">{subtitle}</span>}
      </h3>
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[12.5px] font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SummaryRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Briefcase;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="flex items-center gap-1.5 text-gray-500">
        <Icon size={13} /> {label}
      </span>
      <span className="text-right font-semibold text-gray-800">{value}</span>
    </div>
  );
}

function SocialBtn({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <button
      className={`flex h-9 w-9 items-center justify-center rounded-lg text-white ${color} hover:opacity-90`}
    >
      {children}
    </button>
  );
}
