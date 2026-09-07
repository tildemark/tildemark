import Image from "next/image";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { ShieldCheck, Anchor, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Profile Details */}
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700/80 flex-shrink-0 bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={profileData.avatar}
              alt={profileData.name}
              fill
              sizes="(max-width: 640px) 64px, 80px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {profileData.name}
              </h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/80 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active
              </span>
            </div>

            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {profileData.role} &amp; {profileData.dpoRole}
            </p>

            <p className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1.5 pt-0.5">
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">{profileData.company}</span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" /> Manila, PH
              </span>
            </p>
          </div>
        </div>

        {/* Theme Toggle & Primary Action */}
        <div className="flex items-center gap-2 self-end sm:self-start">
          <a
            href="https://resume.sanchez.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Executive CV
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Leadership summary / Bio */}
      <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-2">
        <p>
          {profileData.bioParagraphs[0]}
        </p>
        <p className="text-xs text-zinc-500 italic">
          {profileData.spottingNote}
        </p>
      </div>
    </section>
  );
}
