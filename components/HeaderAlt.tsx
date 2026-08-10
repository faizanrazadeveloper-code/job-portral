import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function HeaderAlt() {
  return (
    <header className="border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600">Jobs</a>
          <a href="#" className="hover:text-blue-600">Companies</a>
          <a href="#" className="hover:text-blue-600">Articles</a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">
            For Employers <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700 border border-slate-200 rounded-md px-4 py-2 hover:border-blue-400 hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
