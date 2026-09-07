import { visualGalleries } from "@/data/visuals";
import { Camera, Ship, Plane, ExternalLink } from "lucide-react";

export function VisualsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "ship":
        return <Ship className="w-4 h-4" />;
      case "plane":
        return <Plane className="w-4 h-4" />;
      default:
        return <Camera className="w-4 h-4" />;
    }
  };

  return (
    <section className="rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 p-5 sm:p-6 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Maritime &amp; Fleet Spotting
          </h2>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
            Photographic documentation of commercial vessels and fleet operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {visualGalleries.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-800/20 hover:bg-white dark:hover:bg-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                {getIcon(item.icon)}
              </span>
              <div>
                <h3 className="font-medium text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors ml-2" />
          </a>
        ))}
      </div>
    </section>
  );
}
