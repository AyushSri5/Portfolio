import type { ReactNode } from "react";
import type { Role } from "@/lib/content";

export const roleColor: Record<Role, { text: string; bg: string; dot: string; solid: string }> = {
  SDE: { text: "text-info", bg: "bg-info/15", dot: "bg-info", solid: "bg-info" },
  AI: { text: "text-accent", bg: "bg-accent/15", dot: "bg-accent", solid: "bg-accent" },
  FDE: { text: "text-warn", bg: "bg-warn/15", dot: "bg-warn", solid: "bg-warn" },
};

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-[13px] text-text">
      {children}
    </span>
  );
}

export function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <Chip key={i}>{i}</Chip>
      ))}
    </div>
  );
}

export function RoleBadge({ role }: { role: Role }) {
  const c = roleColor[role];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.08em] ${c.bg} ${c.text}`}>
      <span className={`size-1.5 rounded-full ${c.dot}`} aria-hidden />
      {role}
    </span>
  );
}

export function RoleBadges({ roles }: { roles: Role[] }) {
  return (
    <div className="flex gap-1.5" aria-label={`Relevant for: ${roles.join(", ")}`}>
      {roles.map((r) => (
        <RoleBadge key={r} role={r} />
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: boolean;
  external?: boolean;
  download?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", icon = true, external, download, className = "" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-accent text-ink hover:bg-[#d2ff63]"
      : "border border-border text-text hover:border-muted hover:bg-surface";
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-[10px] px-[22px] py-3.5 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${styles} ${className}`}
    >
      {children}
      {icon && <Arrow />}
    </a>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10 lg:px-[120px] lg:py-[120px] ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({ index, title, className = "" }: { index: string; title: string; className?: string }) {
  return (
    <header className={`mb-10 flex max-w-[960px] flex-col gap-3.5 lg:mb-14 ${className}`}>
      <p className="font-mono text-[13px] tracking-[0.02em] text-accent">{index}</p>
      <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance md:text-[44px]">{title}</h2>
    </header>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[20px] border border-border bg-surface ${className}`}>{children}</div>;
}

export function Mono({ children, className = "text-accent" }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-[12px] tracking-[0.04em] uppercase ${className}`}>{children}</p>;
}
