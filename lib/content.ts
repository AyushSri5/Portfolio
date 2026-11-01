export type Role = "SDE" | "AI" | "FDE";

export const profile = {
  name: "Ayush Srivastava",
  handle: "ayush.srivastava",
  title: "Software & AI Engineer",
  brand: "Software Engineer | Backend & Distributed Systems | AI/RAG Applications",
  location: "Noida, India",
  email: "ayushsri5201@gmail.com",
  resume: "/Ayush-Srivastava-Resume.pdf",
  links: {
    github: "https://github.com/AyushSri5",
    linkedin: "https://www.linkedin.com/in/ayush-srivastava-540b24217/",
    leetcode: "https://leetcode.com/u/ayushsri5201/",
  },
};

export const nav = [
  { label: "Role fit", href: "#role-fit" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Systems", href: "#systems" },
];

export const hero = {
  status: "Open to SDE · AI Engineer · Forward Deployed roles",
  headline: "I build backend systems that scale — and AI products that actually ship.",
  intro:
    "Nearly 3 years building backend, distributed and AI systems — currently at Sinch on enterprise messaging (RCS, SMS, WhatsApp), previously at Compro Technologies. I build LLM/RAG applications end to end.",
};

export const stats = [
  { value: "~3 yrs", label: "Backend, distributed & AI systems" },
  { value: "60%", label: "API load cut with Kafka & RabbitMQ" },
  { value: "60→90%", label: "Payment success rate after workflow redesign" },
  { value: "10k+", label: "Active users served in production" },
];

type ConsoleLine = { ts: string; svc: string; msg: string; status: string; tone?: "warn" };
export const consoleLog: { group: string; lines: ConsoleLine[] }[] = [
  {
    group: "# messaging · event-driven",
    lines: [
      { ts: "01.204", svc: "rcs.inbound", msg: "→ kafka msg.ingest", status: "ok" },
      { ts: "01.209", svc: "whatsapp.out", msg: "→ rabbitmq dispatch", status: "ok" },
      { ts: "01.231", svc: "sms.dlr", msg: "→ mongodb delivery", status: "ok" },
      { ts: "01.240", svc: "grafana", msg: "p95 panel updated", status: "◉", tone: "warn" },
    ],
  },
  {
    group: "# rag-chatbot · query",
    lines: [
      { ts: "02.010", svc: "hyde.expand", msg: "hypothetical doc", status: "ok" },
      { ts: "02.118", svc: "qdrant.search", msg: "top_k=8 · rerank", status: "ok" },
      { ts: "02.402", svc: "guardrails", msg: "in-domain ✓", status: "ok" },
    ],
  },
];

export const roleLens: Record<
  Role,
  { tab: string; short: string; label: string; pitch: string; proofs: [string, string][]; keywords: string[] }
> = {
  SDE: {
    tab: "SDE",
    short: "SDE",
    label: "For SDE / backend teams",
    pitch:
      "A backend engineer who ships and operates production services — event-driven, fast and well documented.",
    proofs: [
      ["Event-driven backends", "Kafka and RabbitMQ architecture at Sinch that cut API load by 60%."],
      [
        "Performance & reliability",
        "Query tuning cut latency 30% at Sinch and 40% at Compro; payment success went from 60% to 90%.",
      ],
      ["Strong fundamentals", "600+ DSA problems on LeetCode; now deep in LLD/HLD and distributed systems."],
    ],
    keywords: ["System design", "Microservices", "Event-driven", "Databases"],
  },
  AI: {
    tab: "AI Engineer",
    short: "AI Eng",
    label: "For AI / LLM teams",
    pitch: "Builds LLM applications end to end — grounded retrieval, precise ranking and guard-railed answers.",
    proofs: [
      [
        "RAG pipelines",
        "Ingestion of PDFs, websites and transcripts into embeddings; semantic search on QdrantDB and Pinecone.",
      ],
      ["Retrieval & ranking", "HyDE query expansion and a Gemini-integrated ranking engine for more precise answers."],
      ["Guardrails & agents", "Domain-restricted LLM guardrails; LangChain, CrewAI and OpenAI SDK workflows."],
    ],
    keywords: ["RAG", "LangChain", "Vector search", "Python · FastAPI"],
  },
  FDE: {
    tab: "Forward Deployed",
    short: "FDE",
    label: "For forward deployed teams",
    pitch:
      "Takes a backend or AI solution from prototype into a real enterprise environment — and explains it clearly along the way.",
    proofs: [
      ["Production delivery", "Docker and Kubernetes (Rancher) deployments; collapsed 5 release cycles into one."],
      ["Enterprise-ready", "Keycloak auth with MFA, plus onboarding and billing flows that lifted activation 35%."],
      ["Clear communication", "Streamlined API documentation that cut delivery timelines by 20%."],
    ],
    keywords: ["Deployment", "Integration", "Security", "Documentation"],
  },
};

export const about = {
  title: "Software engineer building scalable backend systems and AI-powered applications.",
  lead: "I like the part of engineering where things get real: messages that have to arrive, payments that have to go through, and AI features that have to give grounded answers instead of confident guesses.",
  body: "Day to day I build AI-ready backend systems for high-throughput enterprise platforms at Sinch — designing event-driven flows, tuning databases, and shipping through Docker and Kubernetes. Outside of that I build LLM applications — RAG pipelines, ranking and guardrails — with the same production mindset.",
  education: "B.Tech, Information Technology — JSS Academy of Technical Education, 2019–2023",
  sharpening: [
    "System design — LLD + HLD",
    "Scalability & distributed systems",
    "Caching & async processing",
    "Event-driven architecture",
    "Database selection & access patterns",
    "AI system design",
  ],
};

export const experience = [
  {
    role: "Software Developer",
    company: "Sinch",
    meta: "Sep 2024 — Present · Noida",
    context: "Enterprise multi-channel communications (RCS · SMS · WhatsApp)",
    current: true,
    roles: ["SDE", "FDE"] as Role[],
    flow: [
      ["channels", "RCS · SMS · WhatsApp"],
      ["queue", "Kafka · RabbitMQ"],
      ["services", "Node.js · Microservices"],
      ["data", "MongoDB · SQL"],
      ["run", "Kubernetes · Grafana"],
    ],
    highlights: [
      "Designed event-driven architecture with Kafka and RabbitMQ that reduced API load by 60%.",
      "Built onboarding and billing systems — activation up 35%, onboarding time down 40%.",
      "Optimized the payment workflow, improving success rate from 60% to 90%.",
      "Implemented a microfrontend architecture, reducing release dependencies by 45%.",
      "Reduced deployments from 5 cycles to a single release, eliminating rework.",
      "Optimized MongoDB and SQL queries, reducing latency by 30%.",
      "Strengthened access control with Keycloak and MFA; managed Docker and Kubernetes deployments.",
    ],
    stack: ["Node.js", "TypeScript", "Kafka", "RabbitMQ", "MongoDB", "SQL", "Keycloak", "Docker", "Kubernetes", "Grafana"],
  },
  {
    role: "Software Developer",
    company: "Compro Technologies",
    meta: "Sep 2023 — Sep 2024 · New Delhi",
    context: "Full-stack product engineering",
    current: false,
    roles: ["SDE"] as Role[],
    flow: null,
    highlights: [
      "Developed full-stack systems supporting 10,000+ active users in production.",
      "Reduced production issues by 30% through backend optimization and refactoring.",
      "Optimized database queries, cutting system latency and bugs by 40%.",
      "Automated workflows — efficiency up 70%, manual errors down 20%.",
      "Streamlined API documentation, reducing delivery timelines by 20%.",
    ],
    stack: ["JavaScript", "Node.js", "Vue.js", "Nuxt 3", "SQL", "REST APIs"],
  },
];

export const featured = {
  tag: "Featured · Generative AI + RAG system · 2026",
  title: "AI-Powered Chatbot Platform",
  summary:
    "Contextual question answering over PDFs, websites and transcripts. Built the whole pipeline: multi-source ingestion into structured embeddings, semantic search on QdrantDB, a Gemini-integrated ranking engine for precision, and LLM guardrails that keep answers in-domain.",
  roles: ["AI", "FDE"] as Role[],
  meta: [
    ["role", "Design → build → ship, solo"],
    ["sources", "PDFs · Websites · Transcripts"],
    ["retrieval", "Semantic search + ranking"],
    ["safety", "Domain-restricted guardrails"],
  ],
  pipeline: [
    ["Ingest", "PDFs, websites, transcripts"],
    ["Chunk + embed", "Structured embeddings"],
    ["Store", "QdrantDB · MongoDB"],
    ["Retrieve", "HyDE → semantic search"],
    ["Rank + generate", "Gemini · OpenAI SDK"],
    ["Guard", "Domain-restricted output"],
  ],
  highlightStep: 3,
  stack: ["LangChain", "OpenAI SDK", "Gemini API", "QdrantDB", "MongoDB"],
};

export const moreWork = [
  {
    tag: "Work · Sinch",
    title: "Event-driven platform",
    body: "Kafka + RabbitMQ architecture that cut API load 60%, and a Module Federation microfrontend setup that reduced release dependencies 45%.",
    roles: ["SDE", "FDE"] as Role[],
    stack: ["Kafka", "RabbitMQ", "Module Federation"],
  },
  {
    tag: "Work · Sinch",
    title: "Onboarding, billing & payments",
    body: "Activation up 35%, onboarding time down 40%, payment success from 60% to 90% — secured with Keycloak and MFA.",
    roles: ["SDE", "FDE"] as Role[],
    stack: ["Node.js", "Keycloak", "MongoDB"],
  },
  {
    tag: "Work · Compro",
    title: "Full-stack at 10k+ users",
    body: "Backend refactors cut production issues 30%; query tuning cut latency and bugs 40%; workflow automation lifted efficiency 70%.",
    roles: ["SDE"] as Role[],
    stack: ["Node.js", "Vue.js", "SQL"],
  },
];

export const stack: { group: string; items: string[]; ai?: boolean }[] = [
  { group: "languages", items: ["Python", "TypeScript", "JavaScript", "Java"] },
  { group: "frontend", items: ["React", "Next.js", "Vue.js", "Nuxt 3", "Tailwind CSS"] },
  { group: "backend", items: ["Node.js", "FastAPI", "REST APIs", "Microservices", "Module Federation"] },
  { group: "data & messaging", items: ["MongoDB", "SQL", "Kafka", "RabbitMQ", "QdrantDB", "Pinecone"] },
  { group: "infra & security", items: ["Docker", "Kubernetes (Rancher)", "Grafana", "Keycloak", "BentoML", "Evidently.ai"] },
  {
    group: "ai",
    items: ["LangChain", "CrewAI", "OpenAI SDK", "Gemini API", "PyTorch", "Scikit-learn", "Prompt engineering"],
    ai: true,
  },
];

export const principles: { title: string; body: string; roles: Role[] }[] = [
  {
    title: "Async by default",
    body: "Queues absorb spikes and decouple producers from slow consumers. Kafka when replay and ordering matter, RabbitMQ for routing and work queues.",
    roles: ["SDE"],
  },
  {
    title: "Data shapes the store",
    body: "Choose the database from access patterns, not habit — relational for integrity, documents for flexible shapes, vectors for semantic recall.",
    roles: ["SDE"],
  },
  {
    title: "Observable or it didn’t ship",
    body: "Every deploy should be answerable in Grafana: is it up, is it slow, is it dropping messages?",
    roles: ["FDE"],
  },
  {
    title: "Grounded AI",
    body: "Retrieval quality beats prompt tricks. Good chunking, ranking and guardrails do more than a bigger model.",
    roles: ["AI"],
  },
];
