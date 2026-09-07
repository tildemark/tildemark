import { navLinks } from "@/data/links";
import { Briefcase, Laptop, PenTool, ExternalLink } from "lucide-react";

export function NavLinks() {
  const getIcon = (type: string) => {
    switch (type) {
      case "briefcase":
        return <Briefcase className="w-4 h-4" />;
      case "laptop-code":
        return <Laptop className="w-4 h-4" />;
      case "pen-tool":
        return <PenTool className="w-4 h-4" />;
      case "github":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        );
      default:
        return <Laptop className="w-4 h-4" />;
    }
  };

  return (
    <section className="rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 p-5 sm:p-6 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Executive Properties &amp; Portals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-800/30 hover:bg-white dark:hover:bg-zinc-800/70 transition-all duration-150"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors flex-shrink-0">
                {getIcon(link.icon)}
              </span>
              <div className="truncate">
                <h3 className="font-medium text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
                  {link.title}
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                  {link.subtitle}
                </p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors flex-shrink-0 ml-2" />
          </a>
        ))}
      </div>
    </section>
  );
}
