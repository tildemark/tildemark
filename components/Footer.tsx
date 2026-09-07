import { profileData } from "@/data/profile";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-12 w-full text-center space-y-4">
      <div className="flex justify-center items-center gap-4 text-zinc-500 dark:text-zinc-400">
        {/* LinkedIn */}
        <a
          href={profileData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5V10.13H5.07V18.5h2.79Z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href={profileData.socials.email}
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
          aria-label="Direct Email"
          title="Direct Email"
        >
          <Mail className="w-4 h-4" />
        </a>

        {/* GitHub */}
        <a
          href={profileData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
          aria-label="GitHub Profile"
          title="GitHub"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href={profileData.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
          aria-label="Facebook Profile"
          title="Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>
      </div>

      <div className="text-[11px] text-zinc-500 dark:text-zinc-500 space-y-1">
        <p>
          &copy; {currentYear} {profileData.name} &bull; Head of IT &amp; Data Protection Officer
        </p>
        <p className="text-[10px] text-zinc-400 dark:text-zinc-600">
          Built with Next.js &bull; Static Export &bull; Hosted on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
