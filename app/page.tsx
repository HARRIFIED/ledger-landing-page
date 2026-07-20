import { LogoMark, Wordmark } from "@/components/Logo";
import { site } from "@/lib/site";

/* ---------- Small inline icons ---------- */
function Icon({ path, size = 22 }: { path: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cross = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

/* ---------- Content ---------- */
const features = [
  {
    icon: "M4 6h16M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6M9 11h6M9 15h6",
    title: "Books that always balance",
    body: "Debits always equal credits — guaranteed. Every posting is validated and committed as one atomic transaction, so your ledger can never end up unbalanced or half-written.",
  },
  {
    icon: "M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8",
    title: "Full point-in-time history",
    body: "Know exactly what every balance was at any moment. Each change is captured as an immutable event, giving you replayable history and audit trails that reconcile by design.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Multi-currency & FX",
    body: "Hold and move value across any number of currencies. Built-in rate tables, quotes, and configurable spreads settle every cross-currency transfer cleanly as a single balanced entry.",
  },
  {
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    title: "Grows with your volume",
    body: "Handle more transactions by adding capacity, not re-architecting. The ledger scales out horizontally, so throughput keeps pace as your business grows.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4",
    title: "Bring your own identity",
    body: "Plug in your existing identity provider and keep full ownership of your users — Harrified Ledger authenticates against your IdP and never stores their credentials. No IdP yet? An optional IAM module is bundled in.",
  },
  {
    icon: "M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M4 12h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7zM8 16h.01",
    title: "Self-hosted, your data",
    body: "Run Harrified Ledger in your own environment on your own database. Your ledger data never leaves your infrastructure — we never host or touch it.",
  },
];

const services = [
  { name: "ledger-core", core: true },
  { name: "party-service" },
  { name: "account-service" },
  { name: "transaction-service" },
  { name: "transfer-service" },
  { name: "hold-service" },
  { name: "fx-service" },
  { name: "scheduler-service" },
  { name: "audit-service" },
  { name: "notification-service" },
  { name: "webhook-service" },
  { name: "reporting-service" },
  { name: "iam-service" },
  { name: "api-gateway" },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" aria-label="Harrified Ledger home">
            <Wordmark size={30} />
          </a>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#open-source">Open source</a>
            <a href="#architecture">Architecture</a>
            <a href={site.docs} target="_blank" rel="noreferrer">
              Docs
            </a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div>
            <span className="badge">
              <span className="dot" /> Open source · AGPL-3.0 · Self-hosted
            </span>
            <h1>
              The open-source <span className="accent-text">core ledger engine</span> for fintechs
            </h1>
            <p className="hero-sub">
              Harrified Ledger is a double-entry, event-sourced ledger you license and run in your own
              environment — your instance, your database, your rules. Build your product around a
              financial core that always balances.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={site.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> Star on GitHub
              </a>
              <a className="btn btn-ghost" href={site.docs} target="_blank" rel="noreferrer">
                Read the docs →
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <span className="tick">✓</span> Java 21 · Spring Boot 4
              </span>
              <span>
                <span className="tick">✓</span> gRPC + Kafka
              </span>
              <span>
                <span className="tick">✓</span> Deploy anywhere
              </span>
            </div>
          </div>

          {/* Hero code card — a balanced journal entry */}
          <div className="code-card" aria-label="Example API request posting a balanced journal entry">
            <div className="code-head">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="path">POST /api/v1/ledger/entries</span>
            </div>
            <div className="code-body">
              <pre>
                <span className="c-punc">{"{"}</span>
                {"\n  "}
                <span className="c-key">&quot;idempotencyKey&quot;</span>
                <span className="c-punc">: </span>
                <span className="c-str">&quot;pay_9f2a...&quot;</span>
                <span className="c-punc">,</span>
                {"\n  "}
                <span className="c-key">&quot;lines&quot;</span>
                <span className="c-punc">: [</span>
                {"\n    "}
                <span className="c-punc">{"{ "}</span>
                <span className="c-key">&quot;account&quot;</span>
                <span className="c-punc">: </span>
                <span className="c-str">&quot;cash&quot;</span>
                <span className="c-punc">, </span>
                <span className="c-key">&quot;debit&quot;</span>
                <span className="c-punc">: </span>
                <span className="c-num">10000</span>
                <span className="c-punc">{" },"}</span>
                {"\n    "}
                <span className="c-punc">{"{ "}</span>
                <span className="c-key">&quot;account&quot;</span>
                <span className="c-punc">: </span>
                <span className="c-str">&quot;revenue&quot;</span>
                <span className="c-punc">, </span>
                <span className="c-key">&quot;credit&quot;</span>
                <span className="c-punc">: </span>
                <span className="c-num">10000</span>
                <span className="c-punc">{" }"}</span>
                {"\n  "}
                <span className="c-punc">]</span>
                {"\n"}
                <span className="c-punc">{"}"}</span>
              </pre>
              <div className="code-ok">
                <span className="pill-ok">
                  <Check /> 201
                </span>
                <span className="c-dim">balanced · debits == credits · committed atomically</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="strip">
        <div className="container strip-inner">
          <span>
            <span className="tick">◆</span> Double-entry accounting
          </span>
          <span>
            <span className="tick">◆</span> Event sourcing + snapshots
          </span>
          <span>
            <span className="tick">◆</span> Multi-currency
          </span>
          <span>
            <span className="tick">◆</span> Idempotent postings
          </span>
          <span>
            <span className="tick">◆</span> Transactional outbox
          </span>
          <span>
            <span className="tick">◆</span> Audit-ready
          </span>
        </div>
      </div>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Harrified Ledger</div>
            <h2>A financial core you can trust and own</h2>
            <p>
              Everything a modern fintech needs from its ledger — correctness guarantees, a full
              audit history, and the freedom to run it yourself.
            </p>
          </div>
          <div className="grid">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="card-icon">
                  <Icon path={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* OPEN SOURCE / EDITIONS */}
      <section className="section" id="open-source">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Open source</div>
            <h2>Free for the community. Fair for business.</h2>
            <p>
              Harrified Ledger is dual-licensed. The full engine is open source under the AGPL-3.0 — same
              code, same source tree. A commercial license is available when the AGPL doesn&apos;t
              fit your product.
            </p>
          </div>

          <div className="editions">
            <div className="edition featured">
              <span className="edition-tag free">Community Edition</span>
              <h3>Open source</h3>
              <div className="lic">AGPL-3.0-only · Free forever</div>
              <ul className="feature-list">
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Full source available — the complete engine, no crippled &quot;open core&quot;
                </li>
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Run and self-host unmodified Harrified Ledger internally, at any scale
                </li>
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Modify it — improvements stay free for everyone (copyleft)
                </li>
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Community support via GitHub issues &amp; discussions
                </li>
                <li>
                  <span className="cross">
                    <Cross />
                  </span>
                  Embedding in a closed-source product requires the commercial edition
                </li>
              </ul>
              <a className="btn btn-primary" href={site.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> Get started on GitHub
              </a>
            </div>

            <div className="edition">
              <span className="edition-tag paid">Commercial Edition</span>
              <h3>For proprietary use</h3>
              <div className="lic paid-lic">Commercial license · Paid</div>
              <ul className="feature-list">
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Embed Harrified Ledger in closed-source or proprietary products
                </li>
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Run a modified hosted/SaaS service without AGPL §13 source disclosure
                </li>
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  Warranty, indemnification, and support SLAs as negotiated
                </li>
                <li>
                  <span className="tick">
                    <Check />
                  </span>
                  A compliant path for organizations with AGPL policy restrictions
                </li>
              </ul>
              <a className="btn btn-ghost" href={site.commercialLicense} target="_blank" rel="noreferrer">
                Compare licenses →
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ARCHITECTURE */}
      <section className="section" id="architecture">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Architecture</div>
            <h2>Independently deployable microservices</h2>
            <p>
              A gRPC service mesh behind a single API gateway. The ledger-core is the leaf authority —
              it calls no one, so every posting is one local ACID transaction. Events flow outward via
              a transactional outbox to Kafka.
            </p>
          </div>
          <div className="arch">
            <strong>Service topology</strong>
            <p style={{ color: "var(--text-dim)", marginTop: 6, fontSize: "0.96rem" }}>
              Each service owns its own database. The core is highlighted.
            </p>
            <div className="arch-services">
              {services.map((s) => (
                <span className={`chip${s.core ? " core" : ""}`} key={s.name}>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact">
            <h2>Get in touch</h2>
            <p>
              Building on Harrified Ledger, evaluating it for your stack, or need a commercial license? We&apos;d
              love to hear from you.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Email us
              </a>
              <a className="btn btn-ghost" href={site.issues} target="_blank" rel="noreferrer">
                Open a GitHub issue
              </a>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <h4>General &amp; support</h4>
                <p>Questions, evaluations, partnerships.</p>
                <p style={{ marginTop: 8 }}>
                  <a className="link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </div>
              <div className="contact-card">
                <h4>Commercial licensing</h4>
                <p>Embed, proprietary, or SLA needs.</p>
                <p style={{ marginTop: 8 }}>
                  <a
                    className="link"
                    href={`mailto:${site.email}?subject=Harrified%20Ledger%20commercial%20license`}
                  >
                    Request a quote →
                  </a>
                </p>
              </div>
              <div className="contact-card">
                <h4>Contribute</h4>
                <p>Issues, PRs, and discussions welcome.</p>
                <p style={{ marginTop: 8 }}>
                  <a className="link" href={site.github} target="_blank" rel="noreferrer">
                    github.com/HARRIFIED →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a href="#top" aria-label="Harrified Ledger home" style={{ display: "inline-block", marginBottom: 12 }}>
              <Wordmark size={26} />
            </a>
            <p className="footer-legal">
              © {site.company}. Harrified Ledger is dual-licensed under the{" "}
              <a href={site.license} target="_blank" rel="noreferrer">
                AGPL-3.0
              </a>{" "}
              (community) and a{" "}
              <a href={site.commercialLicense} target="_blank" rel="noreferrer">
                commercial license
              </a>
              . &quot;Harrified Ledger&quot; and &quot;{site.company}&quot; are trademarks of their owner.
            </p>
          </div>
          <nav className="footer-links">
            <a href="#features">Features</a>
            <a href="#open-source">Open source</a>
            <a href={site.docs} target="_blank" rel="noreferrer">
              Docs
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.license} target="_blank" rel="noreferrer">
              License
            </a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
