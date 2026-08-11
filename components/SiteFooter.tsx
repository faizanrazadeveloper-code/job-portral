import Link from "next/link";
import { Flame } from "lucide-react";
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "@/components/Shared";

const columns = [
  {
    title: "For Job Seekers",
    links: ["Browse Jobs", "Create Profile", "Saved Jobs", "Job Alerts", "Career Advice"],
  },
  {
    title: "For Employers",
    links: ["Post a Job", "Packages & Pricing", "Employer Dashboard", "Company Profile", "Search Resumes"],
  },
  {
    title: "Resources",
    links: ["Articles", "Industry News", "Salary Guide", "Companies", "Categories"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Terms of Use", "Privacy Policy", "Sitemap"],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a1b3d] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-blue-600 text-white">
              <Flame size={16} />
            </span>
            <span className="text-base font-extrabold text-white">
              ENERGY <span className="text-blue-400">TAIL</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 mt-2">Oil, Gas &amp; Energy Jobs</p>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Connecting energy professionals with top employers worldwide.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="w-8 h-8 grid place-items-center rounded-full border border-slate-600 hover:border-blue-400 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white text-sm font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© 2024 Energy Tail. All rights reserved.</p>
          <p>
            Made with <span className="text-red-400">♥</span> for the Energy Community
          </p>
        </div>
      </div>
    </footer>
  );
}