import Link from "next/link";

const links = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
  { href: "/reset-password", label: "Reset Password" },
  { href: "/verify-email", label: "Email Verification" },
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 p-10">
      <h1 className="text-2xl font-bold text-slate-900">Energy Tail — Auth Screens</h1>
      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-blue-600 font-medium hover:underline">
            {l.label} →
          </Link>
        ))}
      </div>
    </main>
  );
}
