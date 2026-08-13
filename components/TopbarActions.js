"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Heart,
  Menu,
  MessageSquare,
  X,
} from "lucide-react";

export default function TopbarActions({
  heart = false,
  heartCount,
  bellCount = 0,
  message = false,
  messageCount,
  avatar,
  name = "",
  role = "",
}) {
  const [open, setOpen] = useState(false);

  const badge = (count) =>
    count > 0 && (
      <span className="absolute -right-1.5 -top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
        {count}
      </span>
    );

  return (
    <>
      <div className="order-1 ml-auto flex items-center gap-3 lg:order-last sm:gap-4">
        {heart && (
          <button
            className="relative hidden text-ink-500 hover:text-brand-500 lg:flex"
            aria-label="Saved jobs"
          >
            <Heart className="h-[21px] w-[21px]" />
            {badge(heartCount)}
          </button>
        )}

        {bellCount > 0 && (
          <button
            className="relative hidden text-ink-500 hover:text-brand-500 lg:flex"
            aria-label="Notifications"
          >
            <Bell className="h-[21px] w-[21px]" />
            {badge(bellCount)}
          </button>
        )}

        {message && (
          <button
            className="relative hidden text-ink-500 hover:text-brand-500 lg:flex"
            aria-label="Messages"
          >
            <MessageSquare className="h-[21px] w-[21px]" />
            {badge(messageCount)}
          </button>
        )}

        {avatar && (
          <div className="hidden items-center gap-2.5 lg:flex">
            {avatar}
            {(name || role) && (
              <span className="hidden leading-tight md:block">
                {name && <span className="block text-[13px] font-bold">{name}</span>}
                {role && <span className="block text-[11px] text-ink-500">{role}</span>}
              </span>
            )}
            {(name || role) && <ChevronDown className="h-4 w-4 text-ink-500" />}
          </div>
        )}

        <button
          className="relative text-ink-500 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="order-last flex w-full flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#e8edf5] pt-3 pb-2 lg:hidden">
          {heart && (
            <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
              <Heart className="h-[18px] w-[18px] text-ink-500" /> Saved Jobs
              {heartCount > 0 && <span className="chip bg-red-50 text-red-500">{heartCount}</span>}
            </a>
          )}
          {bellCount > 0 && (
            <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
              <Bell className="h-[18px] w-[18px] text-ink-500" /> Notifications
              {bellCount > 0 && <span className="chip bg-red-50 text-red-500">{bellCount}</span>}
            </a>
          )}
          {message && (
            <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
              <MessageSquare className="h-[18px] w-[18px] text-ink-500" /> Messages
              {messageCount > 0 && <span className="chip bg-red-50 text-red-500">{messageCount}</span>}
            </a>
          )}
          {avatar && (
            <span className="ml-auto flex items-center gap-2.5">
              {avatar}
              {(name || role) && (
                <span className="leading-tight">
                  {name && <span className="block text-[13px] font-bold">{name}</span>}
                  {role && <span className="block text-[11px] text-ink-500">{role}</span>}
                </span>
              )}
            </span>
          )}
        </div>
      )}
    </>
  );
}