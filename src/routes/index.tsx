import { createFileRoute } from "@tanstack/react-router";
import bannerAsset from "@/assets/lala-banner.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const GITHUB_URL = "https://github.com/dipghoshraj";

function Dots() {
  return (
    <>
      <div className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-border)]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-border)]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-border)]" />
    </>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-5 px-7 py-4">
        <a href="#top" className="font-mono font-semibold text-sage no-underline">
          lala.ai
        </a>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#what" className="hidden font-mono text-[13px] text-muted-foreground hover:text-foreground sm:inline">
            What it is
          </a>
          <a href="#projects" className="hidden font-mono text-[13px] text-muted-foreground hover:text-foreground sm:inline">
            Projects + Plan
          </a>
          <a href="#ships" className="hidden font-mono text-[13px] text-muted-foreground hover:text-foreground md:inline">
            v1 scope
          </a>
          <a href="#start" className="hidden font-mono text-[13px] text-muted-foreground hover:text-foreground md:inline">
            Get started
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-sage-dim px-3.5 py-2 font-mono text-[13px] text-sage hover:text-sage"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="border-b border-border pb-14 pt-[72px]">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-sage">
        Local reasoning for your notes, docs, and research
      </p>
      <h1 className="mb-[18px] max-w-[12ch] text-[clamp(34px,5vw,60px)] font-bold leading-[1.03] tracking-[-0.03em]">
        A project-scoped reasoning layer that runs on your machine.
      </h1>
      <p className="mb-[26px] max-w-[64ch] text-lg text-muted-foreground">
        lala ingests documents into named projects, answers from that project's context, and gives
        you a dedicated <strong className="text-foreground">Plan:</strong> mode for turning grounded
        context into action. It runs locally through <code className="font-mono text-[0.95em]">lala serve</code>, which requires Docker to be
        installed and running, plus an <code className="font-mono">ai-config.yml</code> and locally
        available GGUF models.
      </p>

      <div className="mb-7 flex flex-wrap gap-3">
        <span className="rounded-full border border-sage-dim px-2.5 py-[7px] font-mono text-xs text-sage">
          Windows available now
        </span>
        <span className="rounded-full border border-amber-dim px-2.5 py-[7px] font-mono text-xs text-amber">
          macOS next
        </span>
        <span className="rounded-full border border-border px-2.5 py-[7px] font-mono text-xs text-muted-foreground">
          Docker required (Docker Desktop recommended)
        </span>
        <span className="rounded-full border border-border px-2.5 py-[7px] font-mono text-xs text-muted-foreground">
          BM25 / PostgreSQL FTS in v1
        </span>
      </div>

      <div className="mb-[34px] flex flex-wrap gap-3.5">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[5px] bg-primary px-[18px] py-3 font-mono text-sm font-semibold text-primary-foreground no-underline hover:opacity-90"
        >
          Download for Windows
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[5px] border border-border px-[18px] py-3 font-mono text-sm font-semibold text-foreground no-underline hover:border-sage-dim"
        >
          View on GitHub
        </a>
      </div>

      <div className="grid items-start gap-[22px] lg:grid-cols-[1.1fr_0.9fr]">
        {/* terminal */}
        <div className="overflow-hidden rounded-[10px] border border-border bg-terminal">
          <div className="flex items-center gap-2 border-b border-border bg-card px-3.5 py-[11px]">
            <Dots />
            <span className="ml-2 font-mono text-xs text-faint">
              lala serve → local runtime bootstrap
            </span>
          </div>
          <div className="p-5 pb-[22px] font-mono text-[13px]">
            <img
              src={bannerAsset.url}
              alt="lala.ai CLI banner — Intelligent · Local first · Reasoning"
              className="mb-4 block max-w-full rounded"
            />
            <p className="mb-1 whitespace-pre-wrap">
              <span className="text-sage">1.</span> Install{" "}
              <span className="text-amber">Docker Desktop</span> and make sure Docker is running
            </p>
            <p className="mb-1 whitespace-pre-wrap">
              <span className="text-sage">2.</span> Download the{" "}
              <span className="text-amber">lala.exe</span> release
            </p>
            <p className="mb-1 whitespace-pre-wrap">
              <span className="text-sage">3.</span> Run <span className="text-amber">lala serve</span>{" "}
              to start LLML + PostgreSQL locally
            </p>
            <p className="whitespace-pre-wrap">
              <span className="text-sage">4.</span> Run <span className="text-amber">lala</span> and
              work inside a project
            </p>
          </div>
        </div>

        {/* product shape panel */}
        <div className="overflow-hidden rounded-[10px] border border-border bg-terminal">
          <div className="flex items-center gap-2 border-b border-border bg-card px-3.5 py-[11px]">
            <Dots />
            <span className="ml-2 font-mono text-xs text-faint">Product shape at launch</span>
          </div>
          <div className="grid gap-3.5 p-5 pb-[22px]">
            <div className="rounded-lg border border-border bg-background p-3.5">
              <h3 className="mb-2 font-mono text-sm font-semibold text-sage">lala serve</h3>
              <p className="text-sm text-muted-foreground">
                Bootstraps the local runtime. Requires Docker to be installed and running, then
                starts the inference layer and PostgreSQL and prints the connection details.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-3.5">
              <h3 className="mb-2 font-mono text-sm font-semibold text-sage">lala</h3>
              <p className="text-sm text-muted-foreground">
                The actual reasoning CLI: create/select projects, ingest files or feeds, search, ask
                grounded questions, and run <strong className="text-foreground">Plan:</strong>.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-3.5">
              <h3 className="mb-2 font-mono text-sm font-semibold text-sage">Launch promise</h3>
              <p className="text-sm text-muted-foreground">
                Download a binary, bring up the local stack, and start reasoning over
                project-bounded knowledge. No GUI fiction, no cloud-first detour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.08em] text-sage-dim">{children}</p>
  );
}

function WhatItIs() {
  const features = [
    {
      title: "Project-scoped reasoning",
      body: "Create a project, ingest notes or docs into it, and keep retrieval bounded to that project. No silent cross-project bleed.",
    },
    {
      title: "Grounded in your material",
      body: "v1 uses PostgreSQL full-text search over files, folders, and RSS content you ingest. It answers from what you gave it, not from the open web.",
    },
    {
      title: "Local by construction",
      body: "Inference runs through your local LLML runtime. Your machine, your model, your data path.",
    },
  ];
  return (
    <section id="what" className="border-b border-border py-[68px]">
      <SectionLabel>What lala actually is</SectionLabel>
      <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em]">
        Not a code editor with a chatbot bolted on.
      </h2>
      <p className="mb-8 max-w-[68ch] text-muted-foreground">
        lala is a local reasoning layer over knowledge you explicitly ingest. The model runs
        locally, retrieval is project-scoped, and answers are grounded in the active project instead
        of a vague global memory pool.
      </p>
      <div className="grid gap-[18px] md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-[10px] border border-border bg-card p-[22px]">
            <h3 className="mb-2.5 text-lg font-semibold">{f.title}</h3>
            <p className="text-[15px] text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsPlan() {
  return (
    <section id="projects" className="border-b border-border py-[68px]">
      <SectionLabel>Projects + Plan mode</SectionLabel>
      <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em]">
        The core product is not "chat." It's bounded reasoning inside a project.
      </h2>
      <p className="mb-8 max-w-[68ch] text-muted-foreground">
        A project is the unit of memory, retrieval, and planning. That matters because it turns lala
        from a generic local chatbot into a workspace that can stay grounded in one body of
        knowledge at a time.
      </p>
      <div className="grid gap-[18px] lg:grid-cols-2">
        <div className="rounded-[10px] border border-border bg-terminal p-5 font-mono text-[13px]">
          <div className="mb-2">
            <span className="text-sage">(onboarding-notes) &gt;&gt;</span> /ingest ./docs
          </div>
          <div className="mb-2 text-muted-foreground">Ingested: 14 files · 118 chunks</div>
          <div className="mb-2">
            <span className="text-sage">(onboarding-notes) &gt;&gt;</span> what should a new backend
            engineer read first?
          </div>
          <div className="mb-2 text-muted-foreground">
            Start with service topology, auth model, deployment flow, and on-call runbooks. Here's
            the order…
          </div>
          <div className="mb-2">
            <span className="text-sage">(onboarding-notes) &gt;&gt;</span>{" "}
            <span className="text-amber">Plan:</span> create a 5-day onboarding plan
          </div>
          <div className="text-muted-foreground">
            Day 1: repo access + local setup. Day 2: architecture walkthrough. Day 3: shadow
            incident review…
          </div>
        </div>
        <div className="rounded-[10px] border border-border bg-card p-[22px]">
          <h3 className="mb-3 text-lg font-semibold">Why this matters</h3>
          <ul className="list-disc space-y-2 pl-[18px] text-muted-foreground">
            <li>
              <strong className="text-foreground">Project context is visible</strong> — the active
              project should be part of the prompt, not hidden state.
            </li>
            <li>
              <strong className="text-foreground">Plan is a named mode</strong> — it should render
              differently from normal chat because it's a different workflow.
            </li>
            <li>
              <strong className="text-foreground">Ingestion/search are scoped</strong> — users
              should know exactly what knowledge base the answer came from.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ReasoningModel() {
  return (
    <section className="border-b border-border py-[68px]">
      <SectionLabel>Reasoning model</SectionLabel>
      <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em]">
        Fast when it can be. Deliberate when it needs to be.
      </h2>
      <p className="mb-8 max-w-[68ch] text-muted-foreground">
        v1 uses a single work model. Simple queries can return directly; comparative or
        planning-style prompts can route through a deeper reasoning pass. The product should expose
        the result, not make users care about routing internals.
      </p>
      <div className="grid gap-[18px] lg:grid-cols-2">
        <div className="rounded-[10px] border border-border bg-card p-[22px]">
          <h3 className="mb-3 text-lg font-semibold">Direct path</h3>
          <ul className="list-disc space-y-2 pl-[18px] text-muted-foreground">
            <li>"What files are in this project?"</li>
            <li>"Summarize the latest design note."</li>
            <li>"What does the infra doc say about auth?"</li>
          </ul>
        </div>
        <div className="rounded-[10px] border border-border bg-card p-[22px]">
          <h3 className="mb-3 text-lg font-semibold">Reasoning / Plan path</h3>
          <ul className="list-disc space-y-2 pl-[18px] text-muted-foreground">
            <li>"Compare the two approaches in my research notes."</li>
            <li>"Plan a migration based on the design docs."</li>
            <li>"What tradeoffs do these three RFCs imply?"</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function V1Scope() {
  return (
    <section id="ships" className="border-b border-border py-[68px]">
      <SectionLabel>Launch scope honesty</SectionLabel>
      <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em]">
        What ships in v1, and what does not.
      </h2>
      <p className="mb-8 max-w-[68ch] text-muted-foreground">
        The landing page should not get ahead of the product. If a feature is not in the retrieval
        path at launch, say so plainly.
      </p>
      <div className="grid gap-[18px] lg:grid-cols-2">
        <div className="rounded-[10px] border border-sage-dim bg-card p-[22px]">
          <h3 className="mb-3 text-lg font-semibold">Shipped in v1</h3>
          <ul className="list-disc space-y-2 pl-[18px] text-muted-foreground">
            <li>Windows CLI release</li>
            <li>
              <code className="font-mono text-[0.95em]">lala serve</code> local runtime bootstrap
            </li>
            <li>Single-model direct / reasoning flow</li>
            <li>
              Projects + <code className="font-mono text-[0.95em]">Plan:</code> mode
            </li>
            <li>File, folder, and RSS ingestion</li>
            <li>BM25 / PostgreSQL full-text retrieval</li>
          </ul>
        </div>
        <div className="rounded-[10px] border border-dashed border-border bg-card p-[22px]">
          <h3 className="mb-3 text-lg font-semibold">Next up</h3>
          <ul className="list-disc space-y-2 pl-[18px] text-muted-foreground">
            <li>macOS release</li>
            <li>Real structured memory extraction</li>
            <li>Semantic / vector retrieval and hybrid reranking</li>
            <li>CLI onboarding polish and doctor/init flow</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <code className="block w-max max-w-full whitespace-pre-wrap rounded-md border border-border bg-terminal px-3 py-2.5 font-mono text-[13px] text-sage">
      {children}
    </code>
  );
}

function GetStarted() {
  const steps = [
    {
      num: "00",
      title: "Install Docker Desktop",
      body: (
        <>
          <code className="font-mono text-[0.95em]">lala serve</code> depends on Docker being available
          locally. For Windows and macOS users, Docker Desktop is the intended setup path and should
          be running before the user starts lala.
        </>
      ),
      code: "Install Docker Desktop and verify Docker is running",
    },
    {
      num: "01",
      title: "Create a working directory with ai-config.yml",
      body: (
        <>
          <code className="font-mono text-[0.95em]">lala</code> expects <code className="font-mono">ai-config.yml</code>
          in the same directory where the CLI is launched. The file defines the model directory,
          default work model, and local GGUF model file names.
        </>
      ),
      code: "C:\\lala\\my-project\\ai-config.yml",
    },
    {
      num: "02",
      title: "Download GGUF models and point the config at them",
      body: (
        <>
          Users must download their own GGUF models. <code className="font-mono">model_dir</code> should
          point to the folder containing those files, and each <code className="font-mono">model_path</code>
          entry must match a real file name on disk.
        </>
      ),
      code: `model_dir: "D:\\models"
default_work_model: "qwen-work"

work_models:
  - name: "qwen-work"
    model_path: "qwen2.5-3b-instruct-q4_k_m.gguf"

embedding_model:
  name: "bge-embedding"
  model_path: "bge-small-en-v1.5-q4_k_m.gguf"`,
    },
    {
      num: "03",
      title: "Download the Windows binary",
      body: (
        <>
          Use GitHub Releases as the distribution channel, but don’t make “browse the repo” the
          primary action. The page should point directly to the binary release.
        </>
      ),
      code: "lala-v1.x.x-windows-amd64.exe",
    },
    {
      num: "04",
      title: "Bring up the local runtime",
      body: (
        <>
          <code className="font-mono text-[0.95em]">lala serve</code> should be the canonical path.
          It starts the local inference layer and PostgreSQL, then prints or persists the connection
          info.
        </>
      ),
      code: "lala serve",
    },
    {
      num: "05",
      title: "Run lala from the same directory",
      body: (
        <>
          Launch <code className="font-mono">lala</code> from the directory containing
          <code className="font-mono">ai-config.yml</code>. The CLI should fail fast with readable
          errors if the config is missing or if the configured GGUF files do not exist.
        </>
      ),
      code: "lala\n/project create --name my-notes\n/ingest ./docs",
    },
  ];

  return (
    <section id="start" className="py-[68px]">
      <SectionLabel>Get started</SectionLabel>
      <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em]">
        Ship the install story you actually support.
      </h2>
      <p className="mb-8 max-w-[68ch] text-muted-foreground">
        The landing page should mirror the real release flow. For end users, that means Docker
        first, then the lala binary. If the binary path is the launch story, the CLI output and docs
        need to reflect that exactly.
      </p>
      <div className="grid gap-4">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`grid gap-[18px] py-[18px] sm:grid-cols-[56px_1fr] ${i > 0 ? "border-t border-border" : ""}`}
          >
            <div className="font-mono text-2xl font-semibold text-sage-dim">{s.num}</div>
            <div>
              <h4 className="mb-2 text-[17px] font-semibold">{s.title}</h4>
              <p className="mb-3 text-muted-foreground">{s.body}</p>
              <CodeBlock>{s.code}</CodeBlock>
              {s.note && <p className="mt-3.5 font-mono text-[13px] text-amber">{s.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pb-12 pt-[34px]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-4 px-7">
        <div className="font-mono text-[13px] text-muted-foreground">
          lala.ai — local reasoning over project-bounded knowledge.
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] text-muted-foreground no-underline hover:text-foreground"
        >
          Docs / Releases / GitHub
        </a>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div id="top">
      <Nav />
      <main className="mx-auto max-w-[1120px] px-7">
        <Hero />
        <WhatItIs />
        <ProjectsPlan />
        <ReasoningModel />
        <V1Scope />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
