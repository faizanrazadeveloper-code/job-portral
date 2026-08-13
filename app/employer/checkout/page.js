"use client";

import { useState } from "react";
import { Logo } from "@/components/Shared";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CreditCard,
  FileText,
  Gift,
  Headset,
  HelpCircle,
  Landmark,
  Lock,
  LogOut,
  Megaphone,
  Menu,
  MessageSquare,
  Newspaper,
  Receipt,
  Search,
  Share2,
  ShieldCheck,
  Star,
  UserCog,
  Users,
  X,
  MapPin,
} from "lucide-react";

const sideNav = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: Search },
      { label: "Jobs", icon: BriefcaseBusiness },
      { label: "Applications", icon: CheckCircle2 },
      { label: "Companies", icon: Building2 },
      { label: "Messages", icon: MessageSquare },
      { label: "Saved Candidates", icon: Users },
    ],
  },
  {
    section: "MANAGE",
    items: [
      { label: "Job Packages", icon: ClipboardList },
      { label: "Subscriptions", icon: Newspaper, active: true },
      { label: "Payments", icon: Landmark },
      { label: "Invoices", icon: Receipt },
      { label: "Coupons", icon: Gift },
    ],
  },
  {
    section: "PROMOTE",
    items: [
      { label: "Advertisements", icon: Megaphone },
      { label: "Sponsored Articles", icon: FileText },
      { label: "Affiliate Placements", icon: Share2 },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "Profile Settings", icon: UserCog },
      { label: "Notification Settings", icon: Bell },
      { label: "Logout", icon: LogOut, danger: true },
    ],
  },
];

const steps = ["Select Plan", "Checkout / Payment", "Confirmation"];

const planFeatures = [
  "3 Active Jobs",
  "30-Day Job Listing",
  "Resume Access (Up to 100 resumes / month)",
  "Priority Email Support",
];

const whyPlan = [
  "Post up to 3 active jobs",
  "30-day job listing duration",
  "Access up to 100 resumes per month",
  "Priority email support",
  "Cancel or change plan anytime",
];

function SidebarContent() {
  return (
    <>
      <div className="flex h-[74px] items-center border-b border-[#eef2f7] px-5">
        <Logo compact />
      </div>

      <nav className="mt-4 flex-1 space-y-5 overflow-y-auto px-3">
        {sideNav.map((section) => (
          <div key={section.section}>
            <p className="px-3.5 text-[11px] font-bold tracking-wide text-ink-500">
              {section.section}
            </p>
            <div className="mt-1.5 space-y-1">
              {section.items.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`nav-item ${item.active ? "nav-item-active" : ""} ${
                    item.danger ? "text-red-600 hover:bg-red-50 hover:text-red-600" : ""
                  }`}
                >
                  <item.icon className="h-[18px] w-[18px]" />
                  <span className="flex-1">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
}

export default function CheckoutPage() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("card");
  const [agree, setAgree] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] flex-col border-r border-[#e8edf5] bg-white lg:flex">
        <SidebarContent />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink-900/40" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-[280px] flex-col bg-white">
            <button
              className="absolute right-4 top-6 text-ink-500"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="lg:pl-[240px]">
        <header className="sticky top-0 z-30 flex min-h-[74px] flex-wrap items-center gap-4 border-b border-[#e8edf5] bg-white px-4 py-3 sm:px-6">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#e2e8f2] bg-[#f8fafc] pr-1.5">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-3.5">
              <Search className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-full bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                placeholder="Search jobs, companies, articles..."
              />
            </div>
            <div className="hidden items-center gap-2 border-l border-[#e2e8f2] px-3.5 sm:flex">
              <MapPin className="h-4 w-4 shrink-0 text-ink-500" />
              <input
                className="h-11 w-[140px] bg-transparent text-[13px] outline-none placeholder:text-ink-500"
                defaultValue="Saudi Arabia"
              />
              <ChevronDown className="h-4 w-4 shrink-0 text-ink-500" />
            </div>
            <button className="btn-primary h-11 shrink-0 px-5">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="relative text-ink-500 hover:text-brand-500">
              <Bell className="h-[21px] w-[21px]" />
              <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                5
              </span>
            </button>
            <button className="text-ink-500 hover:text-brand-500">
              <MessageSquare className="h-[21px] w-[21px]" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#c58a63] to-[#7b4a2f]" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-bold">John Smith</span>
                <span className="block text-[11px] text-ink-500">Employer</span>
              </span>
              <ChevronDown className="h-4 w-4 text-ink-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1680px] px-4 py-7 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <span>Dashboard</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Subscriptions</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-500">Checkout</span>
          </nav>

          <h1 className="mt-2 text-[24px] font-extrabold tracking-tight">Checkout / Payment</h1>
          <p className="mt-2 text-[13px] text-ink-500">
            Complete your purchase and start posting jobs right away.
          </p>

          {/* Stepper */}
          <div className="mt-6 flex items-center">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center last:flex-none">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white ${
                      i < 1 ? "bg-brand-500" : i === 1 ? "bg-brand-500" : "bg-[#cbd5e1]"
                    }`}
                  >
                    {i < 1 ? <Check className="h-4 w-4" /> : i + 1}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[13.5px] font-semibold ${
                      i <= 1 ? "text-ink-900" : "text-ink-500"
                    }`}
                  >
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <span className={`mx-4 h-px flex-1 ${i < 1 ? "bg-brand-500" : "bg-[#e2e8f2]"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_1fr_320px]">
            {/* Review plan + billing */}
            <div className="space-y-5">
              <section className="card p-5 sm:p-6">
                <h2 className="text-[15px] font-extrabold">1. Review Your Plan</h2>
                <div className="mt-4 flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                    <Star className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 text-[15px] font-extrabold text-ink-900">
                      Standard Plan <span className="chip bg-brand-50 text-brand-600">Most Popular</span>
                    </p>
                    <p className="text-[11.5px] text-ink-500">Best for growing teams</p>
                    <ul className="mt-3 space-y-2">
                      {planFeatures.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[12.5px] text-ink-700">
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-brand-500">
                      View all features <ChevronDown className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5 border-t border-[#eef2f7] pt-4">
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="text-ink-500">Billing Cycle</span>
                    <span className="font-semibold text-ink-900">Monthly</span>
                  </div>
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="text-ink-500">Plan Price</span>
                    <span className="font-semibold text-ink-900">$59.00</span>
                  </div>
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="text-ink-500">Tax (0%)</span>
                    <span className="font-semibold text-ink-900">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#eef2f7] pt-2.5">
                    <span className="text-[13px] font-bold text-ink-900">Total</span>
                    <span className="text-right">
                      <span className="block text-[20px] font-extrabold text-ink-900">$59.00</span>
                      <span className="block text-[11px] text-ink-500">USD</span>
                    </span>
                  </div>
                </div>
              </section>

              <section className="card p-5 sm:p-6">
                <h2 className="text-[15px] font-extrabold">2. Billing Information</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label">Full Name</label>
                    <input className="input" defaultValue="John Smith" />
                  </div>
                  <div>
                    <label className="label">Business / Company Name</label>
                    <input className="input" defaultValue="Energy Tail Inc." />
                  </div>
                  <div>
                    <label className="label">Email Address</label>
                    <input className="input" defaultValue="john.smith@energytail.com" />
                  </div>
                  <div>
                    <label className="label">Phone Number</label>
                    <div className="flex gap-2">
                      <select className="select w-[76px] shrink-0 px-2" defaultValue="US">
                        <option value="US">🇺🇸</option>
                        <option value="SA">🇸🇦</option>
                        <option value="AE">🇦🇪</option>
                      </select>
                      <input className="input" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label">Billing Address</label>
                    <input className="input" defaultValue="123 Energy St, Houston, TX 77002" />
                  </div>
                  <div>
                    <label className="label">Country</label>
                    <select className="select" defaultValue="United States">
                      <option>United States</option>
                      <option>Saudi Arabia</option>
                      <option>United Arab Emirates</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">State / Province</label>
                    <select className="select" defaultValue="Texas">
                      <option>Texas</option>
                      <option>California</option>
                      <option>New York</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">ZIP / Postal Code</label>
                    <input className="input" defaultValue="77002" />
                  </div>
                </div>
              </section>
            </div>

            {/* Payment method */}
            <div>
              <section className="card p-5 sm:p-6">
                <h2 className="text-[15px] font-extrabold">3. Payment Method</h2>
                <p className="mt-1 text-[12px] text-ink-500">Choose a secure payment option</p>

                <div className="mt-4 space-y-3">
                  <div
                    className={`rounded-xl border-2 p-4 ${
                      method === "card" ? "border-brand-500 bg-brand-50/30" : "border-[#eef2f7]"
                    }`}
                  >
                    <button
                      onClick={() => setMethod("card")}
                      className="flex w-full items-center justify-between"
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                            method === "card" ? "border-brand-500" : "border-[#cbd5e1]"
                          }`}
                        >
                          {method === "card" && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                        </span>
                        <span className="text-[13.5px] font-bold text-ink-900">Credit / Debit Card</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="grid h-6 w-9 place-items-center rounded border border-[#e2e8f2] text-[9px] font-black italic text-blue-700">VISA</span>
                        <span className="grid h-6 w-9 place-items-center rounded border border-[#e2e8f2]">
                          <span className="flex -space-x-1"><span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-amber-400" /></span>
                        </span>
                        <span className="grid h-6 w-9 place-items-center rounded bg-[#1a73e8] text-[7px] font-black text-white">AMEX</span>
                        <span className="grid h-6 w-9 place-items-center rounded border border-[#e2e8f2] text-[7px] font-black text-orange-500">DISCOVER</span>
                      </span>
                    </button>

                    {method === "card" && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="label">Card Number</label>
                          <div className="relative">
                            <input className="input pr-10" placeholder="1234 5678 9012 3456" />
                            <CreditCard className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                          </div>
                        </div>
                        <div>
                          <label className="label">Cardholder Name</label>
                          <input className="input" defaultValue="John Smith" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="label">Expiry Date</label>
                            <input className="input" placeholder="MM / YY" />
                          </div>
                          <div>
                            <label className="label">CVC</label>
                            <div className="relative">
                              <input className="input pr-9" defaultValue="123" />
                              <HelpCircle className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setMethod("paypal")}
                    className={`flex w-full items-center justify-between rounded-xl border-2 p-4 ${
                      method === "paypal" ? "border-brand-500 bg-brand-50/30" : "border-[#eef2f7]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                          method === "paypal" ? "border-brand-500" : "border-[#cbd5e1]"
                        }`}
                      >
                        {method === "paypal" && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                      </span>
                      <span className="text-[13.5px] font-bold text-ink-900">PayPal</span>
                    </span>
                    <span className="text-[15px] font-black italic text-[#003087]">PayPal</span>
                  </button>

                  <button
                    onClick={() => setMethod("apple")}
                    className={`flex w-full items-center justify-between rounded-xl border-2 p-4 ${
                      method === "apple" ? "border-brand-500 bg-brand-50/30" : "border-[#eef2f7]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                          method === "apple" ? "border-brand-500" : "border-[#cbd5e1]"
                        }`}
                      >
                        {method === "apple" && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                      </span>
                      <span className="text-[13.5px] font-bold text-ink-900">Apple Pay</span>
                    </span>
                    <span className="text-[15px] font-bold text-ink-900"> Pay</span>
                  </button>

                  <button
                    onClick={() => setMethod("google")}
                    className={`flex w-full items-center justify-between rounded-xl border-2 p-4 ${
                      method === "google" ? "border-brand-500 bg-brand-50/30" : "border-[#eef2f7]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                          method === "google" ? "border-brand-500" : "border-[#cbd5e1]"
                        }`}
                      >
                        {method === "google" && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                      </span>
                      <span className="text-[13.5px] font-bold text-ink-900">Google Pay</span>
                    </span>
                    <span className="text-[13px] font-bold">
                      <span className="text-blue-500">G</span>
                      <span className="text-red-500">o</span>
                      <span className="text-amber-500">o</span>
                      <span className="text-blue-500">g</span>
                      <span className="text-emerald-500">l</span>
                      <span className="text-red-500">e</span> Pay
                    </span>
                  </button>
                </div>

                <p className="mt-4 flex items-center gap-2 text-[11.5px] text-ink-500">
                  <Lock className="h-3.5 w-3.5" /> Your payment is secure and encrypted.
                </p>
              </section>

              <div className="mt-5 flex flex-col gap-4">
                <label className="flex items-start gap-2.5 text-[12.5px] text-ink-700">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#cbd5e1] accent-brand-500"
                  />
                  I agree to the{" "}
                  <a href="#" className="font-semibold text-brand-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold text-brand-500">
                    Privacy Policy
                  </a>
                  .
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button className="btn-ghost w-fit">
                    <ChevronLeft className="h-4 w-4" /> Back to Plan Selection
                  </button>
                  <div className="text-center sm:text-right">
                    <button className="btn-primary px-6">
                      <Lock className="h-4 w-4" /> Pay $59.00 Securely
                    </button>
                    <p className="mt-2 text-[11.5px] font-semibold text-emerald-600">
                      30-Day Money-Back Guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <section className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-bold">Order Summary</h3>
                  <a href="#" className="text-[12px] font-semibold text-brand-500">
                    Edit Plan
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                    <Star className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-ink-900">Standard Plan</p>
                    <p className="text-[11.5px] text-ink-500">Monthly Subscription</p>
                  </div>
                  <span className="ml-auto text-[13px] font-bold text-ink-900">$59.00</span>
                </div>

                <div className="mt-4 space-y-2.5 border-t border-[#eef2f7] pt-4 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Subtotal</span>
                    <span className="font-semibold text-ink-900">$59.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Tax (0%)</span>
                    <span className="font-semibold text-ink-900">$0.00</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[#eef2f7] pt-3">
                  <span className="text-[14px] font-bold text-ink-900">Total</span>
                  <span className="text-right">
                    <span className="block text-[20px] font-extrabold text-ink-900">$59.00</span>
                    <span className="block text-[11px] text-ink-500">USD</span>
                  </span>
                </div>
                <p className="mt-2 text-[11.5px] font-semibold text-emerald-600">
                  You save $14.00 with monthly billing
                </p>
              </section>

              <section className="card p-5">
                <h3 className="text-[14.5px] font-bold">Why Choose Standard Plan?</h3>
                <ul className="mt-3.5 space-y-2.5">
                  {whyPlan.map((w) => (
                    <li key={w} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" />
                      {w}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <ShieldCheck className="h-4 w-4 text-brand-500" /> Secure Checkout
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  We use industry-standard encryption to keep your data safe.
                </p>
                <div className="mt-3.5 flex gap-2">
                  <span className="flex items-center gap-1.5 rounded-lg border border-[#e2e8f2] px-2.5 py-1.5 text-[10.5px] font-bold text-emerald-600">
                    <ShieldCheck className="h-3.5 w-3.5" /> SSL SECURED
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg border border-[#e2e8f2] px-2.5 py-1.5 text-[10.5px] font-bold text-brand-600">
                    PCI DSS
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg border border-[#e2e8f2] px-2.5 py-1.5 text-[10.5px] font-bold text-violet-600">
                    256-bit ENCRYPTION
                  </span>
                </div>
              </section>

              <section className="card p-5">
                <p className="flex items-center gap-2.5 text-[13.5px] font-bold text-ink-900">
                  <Headset className="h-4 w-4 text-brand-500" /> Need Help?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Our support team is here to help you.
                </p>
                <a href="#" className="mt-2.5 flex items-center gap-1 text-[12.5px] font-semibold text-brand-500">
                  Contact Support <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
