"use client";

import { useState, useMemo } from "react";
import { toolboxData, toolboxCategories, ToolItem } from "@/data/toolbox";
import {
  Wrench,
  Search,
  ExternalLink,
  Code,
  Terminal,
  Layers,
  Palette,
  Edit,
  Wallet,
  CreditCard,
  Shield,
  Key,
  Lock,
  Database,
  Folder,
  Rocket,
  Network,
  Cloud,
  Server,
  Network as SitemapIcon,
  ListTodo,
  CheckCircle2,
  Sparkles,
  Bot,
  Brain,
  Keyboard,
  FileText,
  Sliders,
  Image as ImageIcon,
  Cpu,
} from "lucide-react";
import Image from "next/image";

export function ToolboxSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("languages");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTools = useMemo(() => {
    return toolboxData.filter((tool) => {
      const matchesCategory =
        selectedCategory === "all" || tool.categories.includes(selectedCategory);

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        tool.name.toLowerCase().includes(query) ||
        tool.desc.toLowerCase().includes(query) ||
        (tool.subgroup && tool.subgroup.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderIcon = (tool: ToolItem) => {
    if (tool.iconSlug) {
      return (
        <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
          <Image
            src={`https://cdn.simpleicons.org/${tool.iconSlug}/71717a`}
            alt={tool.name}
            width={18}
            height={18}
            className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            unoptimized
          />
        </div>
      );
    }

    const iconProps = { className: "w-4 h-4 text-zinc-500 flex-shrink-0" };

    switch (tool.iconType) {
      case "terminal":
        return <Terminal {...iconProps} />;
      case "code":
        return <Code {...iconProps} />;
      case "edit":
        return <Edit {...iconProps} />;
      case "vector":
      case "palette":
        return <Palette {...iconProps} />;
      case "layers":
      case "stream":
        return <Layers {...iconProps} />;
      case "wallet":
        return <Wallet {...iconProps} />;
      case "card":
        return <CreditCard {...iconProps} />;
      case "shield":
        return <Shield {...iconProps} />;
      case "key":
        return <Key {...iconProps} />;
      case "lock":
        return <Lock {...iconProps} />;
      case "database":
        return <Database {...iconProps} />;
      case "folder":
        return <Folder {...iconProps} />;
      case "rocket":
        return <Rocket {...iconProps} />;
      case "network":
        return <Network {...iconProps} />;
      case "cloud":
        return <Cloud {...iconProps} />;
      case "server":
        return <Server {...iconProps} />;
      case "sitemap":
      case "diagram":
        return <SitemapIcon {...iconProps} />;
      case "tasks":
        return <ListTodo {...iconProps} />;
      case "sparkles":
        return <Sparkles {...iconProps} />;
      case "robot":
        return <Bot {...iconProps} />;
      case "brain":
        return <Brain {...iconProps} />;
      case "keyboard":
        return <Keyboard {...iconProps} />;
      case "check":
        return <CheckCircle2 {...iconProps} />;
      case "pdf":
      case "file":
      case "draw":
        return <FileText {...iconProps} />;
      case "sliders":
        return <Sliders {...iconProps} />;
      case "image":
        return <ImageIcon {...iconProps} />;
      case "microchip":
        return <Cpu {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  return (
    <section className="rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 p-5 sm:p-6 transition-colors space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-zinc-500" />
            <span>Technology Stack &amp; Tooling</span>
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Core enterprise technologies, systems, and platforms utilized in production.
          </p>
        </div>
        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 self-start sm:self-auto bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700/60">
          {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
        </span>
      </div>

      {/* Filter and Search */}
      <div className="space-y-2.5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search tools, platforms, or systems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-1">
          {toolboxCategories.map((category) => {
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

      {/* Structured Tool Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
        {filteredTools.map((tool, idx) => {
          const CardInner = (
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-800/20 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800/60 transition-colors">
              <div>{renderIcon(tool)}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-medium text-xs text-zinc-900 dark:text-zinc-100 truncate">
                    {tool.name}
                  </span>
                  {tool.url && (
                    <ExternalLink className="w-2.5 h-2.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </div>
                <span className="block text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                  {tool.desc}
                </span>
              </div>
            </div>
          );

          if (tool.url) {
            return (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block no-underline"
              >
                {CardInner}
              </a>
            );
          }

          return (
            <div key={idx} className="group block">
              {CardInner}
            </div>
          );
        })}

        {filteredTools.length === 0 && (
          <div className="col-span-full text-center py-6 text-xs text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
            No tools found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </div>
    </section>
  );
}
