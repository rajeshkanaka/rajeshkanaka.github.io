import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajesh — Technology Leader · AI/ML · Database Architecture" },
      { name: "description", content: "Technology leader with 19+ years across AI/ML, database architecture, and enterprise engineering. Building scalable, intelligent systems." },
      { property: "og:title", content: "Rajesh — Technology Leader" },
      { property: "og:description", content: "AI/ML platforms, database architecture, and enterprise engineering leadership." },
    ],
  }),
  component: Home,
});

const highlights = [
  { value: "19+", label: "Years in technology" },
  { value: "85%", label: "Operational efficiency gain" },
  { value: "25", label: "Engineers led" },
  { value: "1000+", label: "DB2 instances managed" },
];

const featured = [
  {
    title: "TalentPulse360",
    tag: "Generative AI Platform",
    body: "Production-grade multi-agent platform on Gemini ADK that compressed HR cycles from 7 days to 30 minutes.",
  },
  {
    title: "RAG on Vertex AI",
    tag: "Retrieval Augmented Generation",
    body: "pgvector + fine-tuned embeddings with LangGraph orchestration for stateful, low-latency agent workflows.",
  },
  {
    title: "Opteon Release Mgmt",
    tag: "Reliability",
    body: "Led incident response and root cause analysis, achieving a 30% reduction in production downtime nationwide.",
  },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="container-narrow pt-24 pb-32">
        <div className="fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">
            ◆ Technology Leader · Pune, India
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
            Architecting <em className="text-gradient-gold not-italic">intelligent</em>
            <br />
            systems that scale
            <br />
            with <em className="italic text-muted-foreground">intention.</em>
          </h1>
          <p className="mt-8 sm:mt-10 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm Rajesh — a technology leader with nearly two decades of experience
            building AI/ML platforms, optimizing mission-critical databases for global
            banks, and leading engineering teams that ship enterprise software with
            craft and accountability.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:shadow-glow transition-all"
            >
              View experience →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm hover:border-gold/60 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`py-8 sm:py-10 px-4 sm:px-6 ${i !== highlights.length - 1 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-border/60`}
            >
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-gradient-gold">{h.value}</p>
              <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="container-narrow py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Selected work</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">Recent initiatives</h2>
          </div>
          <Link to="/experience" className="text-sm text-muted-foreground hover:text-gold">
            All experience →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((f) => (
            <article
              key={f.title}
              className="group relative p-8 rounded-2xl bg-surface/60 border border-border/60 hover:border-gold/40 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <p className="text-xs uppercase tracking-wider text-gold mb-4">{f.tag}</p>
              <h3 className="font-serif text-2xl mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="container-narrow py-16 sm:py-24">
        <blockquote className="max-w-3xl">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug">
            "The best systems feel inevitable — they balance{" "}
            <em className="text-gold">technical depth</em> with the kind of clarity
            that lets teams move fast without breaking trust."
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">— Rajesh</footer>
        </blockquote>
      </section>

      {/* Contact Section */}
      <section className="container-narrow py-16 sm:py-24">
        <div className="grid md:grid-cols-5 gap-10 sm:gap-12 md:gap-16 items-start">
          {/* Left: Heading + Links */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Contact</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
                Let's build what's <em className="text-gradient-gold not-italic">next.</em>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Open to architect, product, AI engineering, and leadership roles. Whether you're scaling a platform or building a team — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:pandharerajesh@gmail.com"
                className="flex items-center gap-4 group p-4 -mx-4 rounded-xl hover:bg-surface/60 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-surface/80 border border-border/60 flex items-center justify-center text-gold group-hover:shadow-glow transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">pandharerajesh@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+91-8390820380"
                className="flex items-center gap-4 group p-4 -mx-4 rounded-xl hover:bg-surface/60 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-surface/80 border border-border/60 flex items-center justify-center text-gold group-hover:shadow-glow transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">+91-8390820380</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rajeshpandhare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 -mx-4 rounded-xl hover:bg-surface/60 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-surface/80 border border-border/60 flex items-center justify-center text-gold group-hover:shadow-glow transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">linkedin.com/in/rajeshpandhare</p>
                </div>
              </a>

              <a
                href="https://github.com/rajeshkanaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 -mx-4 rounded-xl hover:bg-surface/60 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-surface/80 border border-border/60 flex items-center justify-center text-gold group-hover:shadow-glow transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">github.com/rajeshkanaka</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const name = data.get("name");
                const email = data.get("email");
                const message = data.get("message");
                const subject = encodeURIComponent(`Message from ${name}`);
                const body = encodeURIComponent(
                  `From: ${name}\nEmail: ${email}\n\n${message}`
                );
                window.location.href = `mailto:pandharerajesh@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="p-5 sm:p-8 md:p-10 rounded-3xl bg-surface/60 border border-border/60 shadow-elegant space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold/40 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold/40 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity, project, or idea you'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold/40 transition-all resize-none"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:shadow-glow transition-all"
                >
                  Send message →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
