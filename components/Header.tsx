import Link from "next/link";
import { Send } from "lucide-react";
import Logo from "./Logo";
import TopBar from "./TopBar";

const navItems = [
  "Jobs",
  "Companies",
  "Categories",
  "Articles",
  "Locations",
  "Packages",
  "About Us",
];

export default function Header() {
  return (
    <header>
      <TopBar />
      <div className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-3.5 flex items-center justify-between gap-6">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-blue-600">
                {item}
              </a>
            ))}
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
              className="text-sm font-medium text-blue-600 border border-blue-200 rounded-md px-4 py-2 hover:bg-blue-50"
            >
              Register
            </Link>
            <Link
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700"
            >
              <Send className="w-3.5 h-3.5" />
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
