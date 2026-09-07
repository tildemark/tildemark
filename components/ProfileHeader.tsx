import Image from "next/image";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { ShieldCheck, Anchor } from "lucide-react";

export function ProfileHeader() {
  return (
    <header className="relative w-full text-center space-y-5 animate-fade-in pt-4">
      <div className="absolute top-0 right-0 z-10">
        <ThemeToggle />
      </div>

      <div className="relative inline-block mt-2">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-700 shadow-xl transition-all duration-500 hover:scale-105">
          <Image
            src={profileData.avatar}
            alt={profileData.name}
            fill
            sizes="(max-width: 640px) 112px, 128px"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>
        <span
          className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-md"
          title="Online / Available"
        />
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {profileData.name}
        </h1>
        <p className="text-sky-600 dark:text-accent font-medium text-base sm:text-lg flex items-center justify-center gap-1.5">
          <Anchor className="w-4 h-4 inline-block text-sky-500" />
          <span>{profileData.tagline}</span>
        </p>
      </div>

      <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto space-y-2 px-2">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
          <span className="bg-slate-200/80 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-300 dark:border-slate-700 text-xs">
            {profileData.role}
          </span>
          <span className="text-slate-400 dark:text-slate-600">&bull;</span>
          <span className="bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 px-2.5 py-0.5 rounded-md border border-sky-200 dark:border-sky-800 text-xs inline-flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            {profileData.dpoRole}
          </span>
        </div>
        <p className="text-slate-700 dark:text-slate-300 font-medium">
          {profileData.company}
        </p>

        {profileData.bioParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            {paragraph}
          </p>
        ))}

        <p className="italic text-slate-500 dark:text-slate-500 text-[11px] sm:text-xs">
          {profileData.spottingNote}
        </p>
      </div>
    </header>
  );
}
