import { Briefcase, Building2, ClipboardList, Bell, User, Mail, Lock, Eye, UserPlus, ShieldCheck, BadgeCheck, TrendingUp, Building, Lock as LockIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RefineryIllustration from "@/components/RefineryIllustration";
import { GoogleIcon, LinkedinIcon, FacebookIcon } from "@/components/SocialIcons";

const perks = [
  {
    icon: Briefcase,
    title: "Find the Right Opportunities",
    desc: "Search and apply for the best jobs from top energy companies.",
  },
  {
    icon: Building2,
    title: "Connect with Top Employers",
    desc: "Build your profile and get noticed by leading companies hiring now.",
  },
  {
    icon: ClipboardList,
    title: "Manage Applications",
    desc: "Track your applications and stay updated on your job status.",
  },
  {
    icon: Bell,
    title: "Get Notified",
    desc: "Receive instant alerts for new jobs and important updates.",
  },
];

const accountTypes = [
  { icon: User, title: "Job Seeker", desc: "I want to find a job", selected: true },
  { icon: Building, title: "Employer", desc: "I want to hire talent", selected: false },
  { icon: ClipboardList, title: "Article Author", desc: "I want to write articles", selected: false },
];

const whyJoin = [
  { icon: BadgeCheck, title: "Trusted by Top Companies", desc: "Connect with leading oil, gas & energy companies worldwide." },
  { icon: ShieldCheck, title: "Verified Opportunities", desc: "Access verified jobs and opportunities from trusted employers." },
  { icon: LockIcon, title: "Safe & Secure", desc: "Your data is protected with industry-standard security measures." },
  { icon: TrendingUp, title: "Career Growth", desc: "Enhance your career with the best opportunities in the energy sector." },
];

export default function RegisterPage() {
  return (
    <>
      <Header />
      <Breadcrumb current="Register" />

      <main className="mx-auto max-w-7xl px-4 pb-14 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
          {/* Left panel */}
          <div className="relative bg-gradient-to-br from-[#0a1a35] to-[#122a5c] p-10 flex flex-col overflow-hidden min-h-[600px]">
            <h1 className="text-3xl font-extrabold text-white">Create Your Account</h1>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed max-w-sm">
              Join Energy Tail and unlock thousands of oil, gas &amp; energy opportunities worldwide.
            </p>
            <div className="border-t border-white/10 my-6" />
            <div className="space-y-5 relative z-10">
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
            <RefineryIllustration className="absolute bottom-0 left-0 w-full h-40 pointer-events-none" />
          </div>

          {/* Right panel */}
          <div className="bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">Register for a New Account</h2>
            <p className="text-sm text-slate-500 mt-1">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Login
              </a>
            </p>

            <form className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold text-slate-800 text-sm mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-700 font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700 font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-700 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1.5">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-700 font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full border border-slate-200 rounded-lg pl-9 pr-9 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                    />
                    <Eye className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-700 font-medium">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full border border-slate-200 rounded-lg pl-9 pr-9 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                    />
                    <Eye className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 -mt-3">
                Password must be at least 8 characters with uppercase, lowercase, number &amp; special character.
              </p>

              <div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">Account Type</h3>
                <label className="text-sm text-slate-700 font-medium">
                  Join as <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  {accountTypes.map((a) => (
                    <button
                      type="button"
                      key={a.title}
                      className={`text-left rounded-xl border p-4 transition ${
                        a.selected
                          ? "border-blue-500 bg-blue-50/60 ring-1 ring-blue-500"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <a.icon className={`w-6 h-6 ${a.selected ? "text-blue-600" : "text-slate-400"}`} />
                        <span
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            a.selected ? "border-blue-600" : "border-slate-300"
                          }`}
                        >
                          {a.selected && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-slate-800 mt-3">{a.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{a.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 text-sm"
              >
                <UserPlus className="w-4 h-4" />
                Create Account
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex-1 h-px bg-slate-200" />
                or register with
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <GoogleIcon className="w-4 h-4" /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
                </button>
                <button type="button" className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" /> Facebook
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Why join */}
        <section className="mt-10 bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10">
          <h2 className="text-xl font-bold text-slate-900 text-center">Why Join Energy Tail?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {whyJoin.map((w) => (
              <div key={w.title} className="text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-3">
                  <w.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-semibold text-slate-800 text-sm">{w.title}</div>
                <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">{w.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy banner */}
        <section className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-800 text-sm">Your privacy is important to us</div>
              <div className="text-xs text-slate-500 mt-0.5">
                We will never share your personal information with third parties.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
            <LockIcon className="w-4 h-4 text-blue-600" />
            <div>
              Secure Registration
              <div className="text-xs text-slate-500 font-normal">SSL Encrypted</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

