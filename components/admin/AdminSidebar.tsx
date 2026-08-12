"use client";

import Link from "next/link";
import {
  Home,
  Users as UsersIcon,
  Building2,
  Briefcase,
  FileText,
  LayoutGrid,
  Factory,
  Globe,
  MapPin,
  Wrench,
  Tag,
  Shield,
  Settings,
  ClipboardList,
  ExternalLink,
  Trash2,
  Activity,
  Flame,
} from "lucide-react";

export type AdminNavKey =
  | "dashboard"
  | "users"
  | "companies"
  | "jobs"
  | "articles"
  | "categories"
  | "industries"
  | "countries"
  | "cities"
  | "skills"
  | "tags"
  | "roles"
  | "settings"
  | "audit-logs";

const mainNav: { key: AdminNavKey; label: string; href: string; icon: typeof Home }[] = [
  { key: "dashboard", label: "Dashboard", href: "/admin/dashboard", icon: Home },
  { key: "users", label: "Users", href: "/admin/users", icon: UsersIcon },
  { key: "companies", label: "Companies", href: "/admin/companies", icon: Building2 },
  { key: "jobs", label: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { key: "articles", label: "Articles", href: "/admin/articles", icon: FileText },
];

const managementNav: { key: AdminNavKey; label: string; href: string; icon: typeof Home }[] = [
  { key: "categories", label: "Job Categories", href: "/admin/job-categories", icon: LayoutGrid },
  { key: "industries", label: "Industries", href: "/admin/industries", icon: Factory },
  { key: "countries", label: "Countries", href: "/admin/countries", icon: Globe },
  { key: "cities", label: "Cities", href: "/admin/cities", icon: MapPin },
  { key: "skills", label: "Skills", href: "/admin/skills", icon: Wrench },
  { key: "tags", label: "Tags", href: "/admin/tags", icon: Tag },
];

const systemNav: { key: AdminNavKey; label: string; href: string; icon: typeof Home }[] = [
  { key: "roles", label: "Roles & Permissions", href: "/admin/roles-permissions", icon: Shield },
  { key: "settings", label: "Settings", href: "/admin/settings", icon: Settings },
  { key: "audit-logs", label: "Audit Logs", href: "/admin/audit-logs", icon: ClipboardList },
];

function NavSection({
  title,
  items,
  active,
}: {
  title: string;
  items: typeof mainNav;
  active: AdminNavKey;
}) {
  return (
    <div>
      <div className="px-3 text-[11px] font-semibold tracking-wider text-slate-400">{title}</div>
      <div className="mt-2 space-y-0.5">
        {items.map((item) => {
          const isActive = item.key === active;
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function AdminSidebar({
  active,
  sticky = true,
}: {
  active: AdminNavKey;
  sticky?: boolean;
}) {
  return (
    <aside
      className={`w-64 shrink-0 border-r border-slate-100 bg-white flex flex-col ${
        sticky ? "h-screen sticky top-0" : "self-start"
      }`}
    >
      <div className="h-[65px] flex items-center gap-2.5 px-5 border-b border-slate-100 shrink-0">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          <Flame className="w-5 h-5 text-white" />
        </div>
        <div className="leading-tight">
          <div className="font-extrabold text-slate-900 text-sm tracking-tight">ENERGY TAIL</div>
          <div className="text-[10px] text-slate-400 font-medium">Oil, Gas &amp; Energy Jobs</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
        <NavSection title="MAIN" items={mainNav} active={active} />
        <NavSection title="MANAGEMENT" items={managementNav} active={active} />
        <NavSection title="SYSTEM" items={systemNav} active={active} />
      </nav>

      <div className="border-t border-slate-100 px-3 pt-2.5 pb-3 space-y-3 shrink-0">
        <div className="flex items-center gap-2.5 px-2">
          <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-500 text-xs font-semibold">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-slate-800 truncate">Super Admin</div>
            <div className="text-xs text-slate-400 truncate">admin@energytail.com</div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-100 p-2.5">
          <div className="text-[11px] font-semibold text-slate-400 px-1 mb-1.5">Quick Links</div>
          <a href="#" className="flex items-center justify-between px-1.5 py-1.5 rounded-md text-sm text-slate-600 hover:bg-slate-50">
            View Site
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a href="#" className="flex items-center justify-between px-1.5 py-1.5 rounded-md text-sm text-slate-600 hover:bg-slate-50">
            Clear Cache
            <Trash2 className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a href="#" className="flex items-center justify-between px-1.5 py-1.5 rounded-md text-sm text-slate-600 hover:bg-slate-50">
            System Status
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
          </a>
        </div>
      </div>
    </aside>
  );
}
