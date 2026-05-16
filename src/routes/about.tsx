import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rajesh" },
      { name: "description", content: "Technology leader with deep expertise in AI/ML, database architecture, and engineering leadership across banking, industrial, and HR domains." },
      { property: "og:title", content: "About Rajesh" },
      { property: "og:description", content: "Two decades shaping AI platforms, databases, and high-performing teams." },
    ],
  }),
  component: About,
});

const roles = [
  "Application Architect",
  "Project Manager",
  "Product Manager",
  "AI Engineer",
];

const education = [
  {
    school: "BITS Pilani",
    degree: "M.Tech, Computer Science (WILP)",
    year: "2018",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "B.Tech, Computer Science & Engineering",
    year: "2004",
  },
];

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-narrow pt-20 pb-12 fade-up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">About</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl">
          A career spent at the intersection of <em className="text-gradient-gold not-italic">data, code, and people.</em>
        </h1>
      </section>

      <section className="container-narrow grid md:grid-cols-3 gap-12 pb-24">
        <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm an experienced technology leader with a strong background in
            database management, backend development, and AI/ML solutions. Across
            nearly two decades, I've managed large-scale production databases for
            major financial institutions, led engineering teams delivering
            enterprise automation and AI platforms, and consistently improved
            system performance and operational efficiency.
          </p>
          <p>
            My expertise spans SQL optimization, automation scripting, cloud
            deployment on Google Cloud, and the design of scalable data pipelines
            and APIs. More recently, I've focused on production-grade Generative
            AI — multi-agent systems, RAG pipelines, and conversational platforms
            built on Vertex AI and the Agent Development Kit.
          </p>
          <p>
            I hold degrees in Computer Science from BITS Pilani and Savitribai
            Phule Pune University, and am certified as a Six Sigma Green Belt.
            I'm now seeking new opportunities to lead high-impact technology
            initiatives — wherever ambitious problems need a steady hand.
          </p>
        </div>

        <aside className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-gold mb-4">Open to roles</p>
            <ul className="space-y-2">
              {roles.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gold mb-4">Education</p>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-serif text-lg">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.degree}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{e.year}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gold mb-4">Certification</p>
            <p className="font-serif text-lg">Six Sigma Green Belt</p>
          </div>
        </aside>
      </section>

      <section className="border-t border-border/60 bg-surface/40">
        <div className="container-narrow py-12 sm:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl max-w-xl">
            Let's build something that <em className="text-gold">matters.</em>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:shadow-glow transition-all"
          >
            Start a conversation →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
