import Logo from "./Logo";
import { LinkedinIcon as Linkedin, FacebookIcon as Facebook, InstagramIcon as Instagram, YoutubeIcon as Youtube, XIcon } from "./SocialIcons";

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

export default function Footer() {
  return (
    <footer className="bg-[#0a1a35] text-slate-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-1 space-y-4">
          <Logo light />
          <p className="text-sm text-slate-400 leading-relaxed">
            Connecting energy professionals with top employers worldwide.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Linkedin className="w-4 h-4 hover:text-white cursor-pointer" />
            <Facebook className="w-4 h-4 hover:text-white cursor-pointer" />
            <XIcon className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-white cursor-pointer" />
            <Youtube className="w-4 h-4 hover:text-white cursor-pointer" />
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-400">
          © 2024 Energy Tail. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
