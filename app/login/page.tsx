import { Search, Building2, ClipboardList, Mail, Lock, LogIn, ShieldCheck, Headphones, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RefineryIllustration from "@/components/RefineryIllustration";
import { GoogleIcon, LinkedinIcon, FacebookIcon, AppleIcon } from "@/components/SocialIcons";

const perks = [
  {
    icon: Search,
    title: "Find the Right Job",
    desc: "Search and apply for the best oil, gas and energy jobs worldwide.",
  },
  {
    icon: Building2,
    title: "Connect with Top Companies",
    desc: "Explore leading energy companies hiring top talent like you.",
  },
  {
    icon: ClipboardList,
    title: "Track Applications",
    desc: "Manage your applications and get notified about updates.",
  },
];

export default function LoginPage() {
  return (
    <>
      <Header />
      <Breadcrumb current="Login" />

      <main className="mx-auto max-w-7xl px-4 pb-14 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
          {/* Left panel */}
          <div className="relative bg-gradient-to-br from-[#0a1a35] to-[#122a5c] p-10 flex flex-col overflow-hidden min-h-[560px]">
            <h1 className="text-3xl font-extrabold text-white">Welcome Back!</h1>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed max-w-sm">
              Login to your Energy Tail account and access thousands of jobs, companies and career resources.
            </p>
            <div className="space-y-5 relative z-10 mt-8">
              {perks.map((p) => (
                <div key={p.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{p.title}</div>
                    <div className="text-slate-400 text-sm mt-0.5 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <RefineryIllustration className="absolute bottom-0 left-0 w-full h-44 pointer-events-none" />
          </div>

          {/* Right panel */}
          <div className="bg-white p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-900">Login to Your Account</h2>
            <p className="text-sm text-slate-500 mt-1">Enter your credentials to continue</p>

            <form className="mt-6 space-y-5">
              <div>
                <label className="text-sm text-slate-700 font-medium">Email Address</label>
                <div className="relative mt-1.5">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-700 font-medium">Password</label>
                <div className="relative mt-1.5">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-slate-200 rounded-lg pl-9 pr-14 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-600 font-medium">
                    Show
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 text-sm"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex-1 h-px bg-slate-200" />
                or continue with
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <GoogleIcon className="w-4 h-4" /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
                </button>
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" /> Facebook
                </button>
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <AppleIcon className="w-4 h-4" /> Apple
                </button>
              </div>

              <p className="text-center text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-blue-600 font-medium hover:underline">
                  Register Now
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Secure login row */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border border-slate-100 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="font-semibold text-slate-800 text-sm">Secure Login</div>
              <div className="text-xs text-slate-500">We use industry-standard encryption to keep your data safe and secure.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <Headphones className="w-5 h-5 text-blue-600" />
            <div>
              <div className="font-semibold text-slate-800 text-sm">Need Help?</div>
              <a href="#" className="text-xs text-blue-600 hover:underline">Contact our support team</a>
            </div>
          </div>
        </section>

        {/* Employer banner */}
        <section className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-800 text-sm">Are you a company looking to hire?</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Post jobs, search resumes and connect with top energy professionals.
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white border border-blue-200 text-blue-600 font-medium rounded-lg px-4 py-2.5 text-sm hover:bg-blue-100 shrink-0">
            <Building2 className="w-4 h-4" />
            Register as Employer
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}

