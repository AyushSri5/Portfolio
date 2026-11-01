import { Nav } from "@/components/Nav";
import { RoleLens } from "@/components/RoleLens";
import { Button, Card, ChipRow, Mono, RoleBadges, Section, SectionHeader } from "@/components/ui";
import {
  about,
  consoleLog,
  experience,
  featured,
  hero,
  moreWork,
  principles,
  profile,
  stack,
  stats,
} from "@/lib/content";

function Console() {
  return (
    <div
      aria-hidden
      className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_60px_-10px_rgb(0_0_0/0.5)] lg:w-[520px] lg:shrink-0"
    >
      <div className="flex items-center gap-2 border-b border-border px-[18px] py-3.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-2.5 rounded-full bg-border" />
        ))}
        <span className="ml-1 font-mono text-xs text-subtle">~/ayush — tail -f events.log</span>
      </div>
      <div className="flex flex-col gap-2.5 px-5 pt-5 pb-[22px] font-mono text-xs">
        {consoleLog.map((g) => (
          <div key={g.group} className="flex flex-col gap-2.5">
            <p className="tracking-[0.06em] text-subtle">{g.group}</p>
            {g.lines.map((l) => (
              <p key={l.ts} className="flex gap-3">
                <span className="text-subtle">{l.ts}</span>
                <span className="w-[118px] shrink-0 text-info">{l.svc}</span>
                <span className="flex-1 truncate">{l.msg}</span>
                <span className={l.tone === "warn" ? "text-warn" : "text-accent"}>{l.status}</span>
              </p>
            ))}
          </div>
        ))}
        <p className="flex items-center gap-3">
          <span className="text-subtle">02.540</span>
          <span className="w-[118px] shrink-0 text-info">llm.stream</span>
          <span className="truncate">“Backpressure is when a consumer…</span>
          <span className="cursor inline-block h-3.5 w-[7px] shrink-0 bg-accent" />
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-12 md:px-10 lg:flex-row lg:gap-16 lg:px-[120px] lg:py-24">
      <div className="flex flex-1 flex-col gap-6 lg:gap-7">
        <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-2 font-mono text-[11px] text-muted md:text-[13px]">
          <span className="pulse-dot size-2 rounded-full bg-accent" aria-hidden />
          {hero.status}
        </p>
        <p className="font-mono text-[13px] tracking-[0.01em] text-accent md:text-[15px]">
          {profile.name} — {profile.title}
        </p>
        <h1 className="text-[38px] leading-[1.06] font-semibold tracking-[-0.04em] text-balance md:text-[56px] xl:text-[64px] xl:leading-[1.04]">
          {hero.headline}
        </h1>
        <p className="max-w-[600px] text-base leading-[1.55] text-muted md:text-[19px]">{hero.intro}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="#projects">View my work</Button>
          <Button href={profile.resume} variant="ghost" icon={false} external>
            Résumé (PDF)
          </Button>
          <Button href={profile.links.github} variant="ghost" icon={false} external>
            GitHub
          </Button>
        </div>
      </div>
      <Console />
    </section>
  );
}

function Stats() {
  return (
    <div className="border-y border-border">
      <dl className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:px-10 lg:grid-cols-4 lg:px-[120px]">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse gap-2 py-6 lg:py-9 ${i % 2 ? "pl-5" : "pr-5"} lg:pr-6 ${
              i ? "lg:border-l lg:border-border lg:pl-8" : "lg:pl-0"
            }`}
          >
            <dt className="text-[13px] leading-[1.45] text-muted md:text-sm">{s.label}</dt>
            <dd className="text-[28px] font-semibold tracking-[-0.03em] md:text-[40px]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeader title={about.title} />
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-1 flex-col gap-5">
          <p className="text-lg leading-[1.55] md:text-xl">{about.lead}</p>
          <p className="text-base leading-[1.6] text-muted md:text-[17px]">{about.body}</p>
          <p className="font-mono text-[13px] text-subtle">{about.education}</p>
        </div>
        <Card className="flex flex-col gap-4 p-7 lg:w-[440px]">
          <h3 className="text-[17px] font-semibold">Currently sharpening</h3>
          <ul className="flex flex-col gap-4">
            {about.sharpening.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[15px]">
                <span className="size-1.5 bg-accent" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function FlowArrow() {
  return (
    <svg width="36" height="12" viewBox="0 0 36 12" fill="none" aria-hidden className="hidden shrink-0 text-accent lg:block">
      <path d="M2 6h30M27 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Where I ship." />
      <div className="flex flex-col gap-6">
        {experience.map((job) => (
          <Card key={job.company} className="flex flex-col gap-8 p-6 md:p-10">
            <div className="flex flex-col-reverse items-start justify-between gap-4 md:flex-row">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] md:text-[28px]">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <p className="text-[15px] text-muted md:text-base">{job.context}</p>
                <p className="font-mono text-[13px] text-subtle">{job.meta}</p>
                <div className="mt-2">
                  <RoleBadges roles={job.roles} />
                </div>
              </div>
              {job.current && (
                <span className="rounded-full bg-accent/12 px-3 py-1.5 font-mono text-xs font-medium tracking-[0.08em] text-accent">
                  CURRENT
                </span>
              )}
            </div>

            {job.flow && (
              <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:items-center lg:gap-0" aria-label="System overview">
                {job.flow.map(([k, v], i) => (
                  <li key={k} className="contents">
                    <div className="flex flex-col gap-1.5 rounded-xl border border-border bg-surface-2 px-4 py-3.5 lg:flex-1">
                      <span className="font-mono text-[11px] tracking-[0.06em] text-subtle">{k}</span>
                      <span className="text-sm font-medium">{v}</span>
                    </div>
                    {i < job.flow!.length - 1 && <FlowArrow />}
                  </li>
                ))}
              </ol>
            )}

            <ul className="flex flex-col gap-3.5">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-3.5 text-[15px] leading-[1.55] text-muted md:text-base">
                  <span className="font-mono text-accent" aria-hidden>
                    →
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <ChipRow items={job.stack} />
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <SectionHeader title="AI that answers from your material — not from thin air." />
      <div className="flex flex-col gap-6">
        <article className="flex flex-col gap-9 rounded-[20px] border border-border bg-[linear-gradient(135deg,#171c14,#111413)] p-6 md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            <div className="flex flex-1 flex-col gap-4">
              <RoleBadges roles={featured.roles} />
              <Mono>{featured.tag}</Mono>
              <h3 className="text-[30px] font-semibold tracking-[-0.03em] md:text-[40px]">{featured.title}</h3>
              <p className="text-base leading-[1.6] text-muted md:text-[17px]">{featured.summary}</p>
            </div>
            <dl className="flex flex-col gap-[18px] lg:w-[340px]">
              {featured.meta.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 border-b border-border pb-3.5">
                  <dt className="font-mono text-[11px] tracking-[0.08em] text-subtle uppercase">{k}</dt>
                  <dd className="text-[15px] font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6" aria-label="RAG pipeline">
            {featured.pipeline.map(([t, d], i) => {
              const hi = i === featured.highlightStep;
              return (
                <li
                  key={t}
                  className={`flex flex-col gap-2.5 rounded-xl p-4 pb-[18px] ${hi ? "bg-accent text-ink" : "border border-border bg-surface-2"}`}
                >
                  <span className={`font-mono text-xs ${hi ? "text-ink" : "text-subtle"}`}>0{i + 1}</span>
                  <span className="text-base font-semibold">{t}</span>
                  <span className={`text-[13px] leading-[1.45] ${hi ? "text-ink" : "text-muted"}`}>{d}</span>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <ChipRow items={featured.stack} />
            <Button href={profile.links.github} external>
              See it on GitHub
            </Button>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-3">
          {moreWork.map((w) => (
            <Card key={w.title} className="flex flex-col gap-4 p-8">
              <RoleBadges roles={w.roles} />
              <Mono>{w.tag}</Mono>
              <h3 className="text-[22px] font-semibold tracking-[-0.01em]">{w.title}</h3>
              <p className="flex-1 text-[15px] leading-[1.55] text-muted">{w.body}</p>
              <ChipRow items={w.stack} />
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stack() {
  return (
    <Section id="stack">
      <SectionHeader title="Tools I reach for." />
      <div className="grid overflow-hidden rounded-[20px] border border-border sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((g) => (
          <div key={g.group} className={`-mt-px -ml-px flex flex-col gap-4 border-t border-l border-border p-7 ${g.ai ? "bg-surface" : ""}`}>
            <p className={`font-mono text-[13px] tracking-[0.02em] ${g.ai ? "text-accent" : "text-subtle"}`}>{g.group}</p>
            <ul className="flex flex-col gap-2.5">
              {g.items.map((i) => (
                <li key={i} className="text-[17px] font-medium">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Systems() {
  return (
    <Section id="systems">
      <SectionHeader title="Trade-offs over buzzwords." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Card key={p.title} className="flex flex-col gap-3.5 p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[28px] font-medium text-accent">0{i + 1}</span>
              <RoleBadges roles={p.roles} />
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.01em]">{p.title}</h3>
            <p className="text-[15px] leading-[1.55] text-muted">{p.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: profile.links.linkedin, external: true },
    { label: "GitHub", href: profile.links.github, external: true },
    { label: "LeetCode", href: profile.links.leetcode, external: true },
    { label: "Résumé (PDF)", href: profile.resume, external: true },
  ];
  return (
    <section id="contact" className="mx-auto flex max-w-[1440px] flex-col gap-16 px-5 pt-8 pb-8 md:px-10 lg:gap-24 lg:px-[120px] lg:pt-[120px] lg:pb-12">
      <div className="flex flex-col gap-7 rounded-[22px] bg-accent px-6 py-9 text-ink md:rounded-[28px] md:px-16 md:py-[72px]">
        <h2 className="max-w-[960px] text-[32px] leading-[1.06] font-semibold tracking-[-0.04em] text-balance md:text-[56px]">
          Hiring for backend, AI or forward-deployed engineering? Let’s talk.
        </h2>
        <ul className="flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="inline-flex rounded-full border-[1.5px] border-ink px-5 py-3 text-[15px] font-medium transition-colors hover:bg-ink hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex flex-col justify-between gap-2 font-mono text-[13px] text-subtle md:flex-row">
        <p>© 2026 {profile.name} · Built with Next.js</p>
        <p>{profile.brand}</p>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Section id="role-fit" className="pb-0 lg:pb-0">
          <SectionHeader title="Hiring for something specific? Read this page your way." />
          <RoleLens />
        </Section>
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Systems />
      </main>
      <Contact />
    </>
  );
}
