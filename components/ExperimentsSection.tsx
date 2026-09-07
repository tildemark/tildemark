"use client";

import { useState, useMemo } from "react";
import { experimentsData, experimentCategories } from "@/data/experiments";
import { ExternalLink, Code2, Download, BookOpen, Search, FolderGit2 } from "lucide-react";

export function ExperimentsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("privacy");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredExperiments = useMemo(() => {
    return experimentsData.filter((exp) => {
      const matchesCategory =
        selectedCategory === "all" || exp.categories.includes(selectedCategory);

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        exp.title.toLowerCase().includes(query) ||
        (exp.subtitle && exp.subtitle.toLowerCase().includes(query)) ||
        exp.description.toLowerCase().includes(query) ||
        exp.tags.some((tag) => tag.name.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 p-5 sm:p-6 transition-colors space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-zinc-500" />
            <span>Key Projects &amp; Systems</span>
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Offline-first apps, enterprise tools, and privacy systems built and deployed.
          </p>
        </div>
        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 self-start sm:self-auto bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700/60">
          {filteredExperiments.length} {filteredExperiments.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Search & Category Filter Pills */}
      <div className="space-y-2.5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Filter by keyword, tech stack, or problem domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-1">
          {experimentCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100"
                    : "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Compact, clean project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {filteredExperiments.map((exp) => {
          const status = exp.status || (exp.demoUrl ? "released" : "wip");
          const isReleased = status === "released";

          return (
            <div
              key={exp.id}
              className="flex flex-col justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-800/20 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
                    {exp.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                      isReleased
                        ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60"
                        : "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60"
                    }`}
                  >
                    {isReleased ? "Production" : "In Dev"}
                  </span>
                </div>

                {exp.subtitle && (
                  <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-2 line-clamp-1">
                    {exp.subtitle}
                  </p>
                )}

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  {exp.description}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 flex-wrap mb-3">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200/80 dark:border-zinc-700/60"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs">
                  {exp.demoUrl && (
                    <a
                      href={exp.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-zinc-900 dark:text-zinc-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {exp.docsUrl && (
                    <a
                      href={exp.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Docs</span>
                    </a>
                  )}
                  {exp.codeUrl && (
                    <a
                      href={exp.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors ml-auto"
                      title="Source Code"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {exp.downloadUrl && (
                    <a
                      href={exp.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                      title="Download binaries"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filteredExperiments.length === 0 && (
          <div className="col-span-full text-center py-6 text-xs text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
            No projects found matching &quot;{searchQuery}&quot; in this category.
          </div>
        )}
      </div>
    </section>
  );
}
