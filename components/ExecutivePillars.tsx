import { Shield, Ship, Server, Lock, Layers, Cpu } from "lucide-react";

export function ExecutivePillars() {
  const pillars = [
    {
      title: "IT Leadership & Infrastructure",
      desc: "Directing enterprise IT strategy, cloud architectures, network resiliency, and multi-site technology operations.",
      icon: Server,
      badge: "Strategy & Ops",
    },
    {
      title: "Data Privacy & Governance",
      desc: "Leading NPC compliance, statutory Data Privacy Act policies, internal security audits, and risk management.",
      icon: Shield,
      badge: "DPO & Compliance",
    },
    {
      title: "Maritime Systems & Fleet IoT",
      desc: "Deploying ruggedized vessel communications, IoT telemetry, engine data capture, and offline-first shipboard apps.",
      icon: Ship,
      badge: "Industrial IoT",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
      {pillars.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 p-5 flex flex-col justify-between transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-200/60 dark:border-zinc-700/60">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
