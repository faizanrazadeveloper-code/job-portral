import { MailIcon, Clock, ShieldCheck, Mail, Send, Info, Headphones, Lock, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RefineryIllustration from "@/components/RefineryIllustration";

const perks = [
  { icon: MailIcon, title: "Secure & Safe", desc: "We use industry-standard security to protect your account." },
  { icon: Clock, title: "Quick & Easy", desc: "Reset your password in just a few simple steps." },
  { icon: ShieldCheck, title: "Account Protection", desc: "Keep your account secure and update your password regularly." },
];

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <Breadcrumb current="Forgot Password" />

      <main className="mx-auto max-w-7xl px-4 pb-14 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
          {/* Left panel */}
          <div className="relative bg-gradient-to-br from-[#0a1a35] to-[#122a5c] p-10 flex flex-col overflow-hidden min-h-[560px]">
            <h1 className="text-3xl font-extrabold text-white">Reset Your Password</h1>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed max-w-sm">
              No worries! Enter your email address and we&apos;ll send you instructions to reset your password.
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
            <RefineryIllustration className="absolute bottom-0 left-0 w-full h-44 pointer-events-none" />
          </div>

          {/* Right panel */}
          <div className="bg-white p-8 sm:p-10 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-5">
              <Lock className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Forgot Password?</h2>
            <p className="text-sm text-slate-500 mt-2 max-w-sm">
              Enter your registered email address and we will send you a link to reset your password.
            </p>

            <form className="mt-6 w-full max-w-sm space-y-4 text-left">
              <div>
                <label className="text-sm text-slate-700 font-medium">Email Address</label>
                <div className="relative mt-1.5">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your registered email address"
                    className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                Send Reset Link
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex-1 h-px bg-slate-200" />
                or
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3.5">
                <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-800">Check your inbox</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    We&apos;ll send password reset instructions to your email. Don&apos;t forget to check your spam or junk folder.
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-slate-500">
                Remember your password?{" "}
                <a href="/login" className="text-blue-600 font-medium hover:underline">
                  Login Now
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Need help */}
        <section className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <Headphones className="w-5 h-5 text-blue-600" />
            <div>
              <div className="font-semibold text-slate-800 text-sm">Need Help?</div>
              <div className="text-xs text-slate-500">
                If you&apos;re having trouble accessing your account, our support team is here to help.
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 shrink-0">
            <Headphones className="w-4 h-4" />
            Contact Support
          </button>
        </section>

        {/* Security */}
        <section className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-800 text-sm">Your security is our priority</div>
              <div className="text-xs text-slate-500 mt-0.5">
                We never share your information with third parties. All data is encrypted and securely stored.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 shrink-0">
            <div className="flex flex-col items-center gap-1.5 text-xs text-slate-600 font-medium">
              <Lock className="w-5 h-5 text-blue-600" />
              SSL Encrypted
            </div>
            <div className="flex flex-col items-center gap-1.5 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Secure Authentication
            </div>
            <div className="flex flex-col items-center gap-1.5 text-xs text-slate-600 font-medium">
              <UserCheck className="w-5 h-5 text-blue-600" />
              Privacy Protected
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
