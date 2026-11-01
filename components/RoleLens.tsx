"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { roleLens, type Role } from "@/lib/content";
import { ChipRow, roleColor } from "./ui";

const roles = Object.keys(roleLens) as Role[];

export function RoleLens({ initial = "SDE" }: { initial?: Role }) {
  const [active, setActive] = useState<Role>(initial);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const data = roleLens[active];
  const c = roleColor[active];

  // Arrow-key navigation per the WAI-ARIA tabs pattern.
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + roles.length) % roles.length;
    setActive(roles[next]);
    tabs.current[next]?.focus();
  };

  return (
    <div className="rounded-[20px] border border-border bg-surface p-5 md:px-10 md:pt-8 md:pb-10">
      <div className="mb-6 flex items-center justify-between gap-4 md:mb-9">
        <div
          role="tablist"
          aria-label="View this portfolio as"
          className="flex w-full gap-1 rounded-full border border-border bg-surface-2 p-1 md:w-auto"
        >
          {roles.map((r, i) => {
            const on = r === active;
            return (
              <button
                key={r}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`lens-tab-${r}`}
                aria-selected={on}
                aria-controls="lens-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(r)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium transition-colors md:flex-none md:px-[18px] md:py-2.5 md:text-sm ${
                  on ? `${roleColor[r].solid} text-ink` : "text-muted hover:text-text"
                }`}
              >
                <span className={`hidden size-[7px] rounded-full md:block ${on ? "bg-ink" : roleColor[r].dot}`} aria-hidden />
                <span className="md:hidden">{roleLens[r].short}</span>
                <span className="hidden md:inline">{roleLens[r].tab}</span>
              </button>
            );
          })}
        </div>
        <p className="hidden shrink-0 font-mono text-xs tracking-[0.02em] text-subtle md:block">{`// viewing as: ${data.full}`}</p>
      </div>

      <div
        id="lens-panel"
        role="tabpanel"
        aria-labelledby={`lens-tab-${active}`}
        className="grid gap-6 md:grid-cols-[1fr_500px] md:gap-14"
      >
        <div className="flex flex-col gap-5">
          <p className={`font-mono text-[12px] font-medium tracking-[0.08em] uppercase ${c.text}`}>{data.label}</p>
          <p className="text-[22px] leading-[1.25] font-semibold tracking-[-0.02em] text-balance md:text-[30px]">{data.pitch}</p>
          <div className="hidden md:block">
            <ChipRow items={data.keywords} />
          </div>
        </div>
        <ol>
          {data.proofs.map(([title, body], i) => (
            <li key={title} className="flex gap-4 border-border py-[18px] first:pt-0 md:first:pt-[18px] [&+&]:border-t">
              <span className={`font-mono text-[13px] font-medium ${c.text}`}>0{i + 1}</span>
              <div className="flex flex-col gap-1">
                <p className="text-[17px] font-semibold">{title}</p>
                <p className="text-[15px] leading-[1.5] text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
