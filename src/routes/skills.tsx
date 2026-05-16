import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Rajesh" },
      { name: "description", content: "Expertise across AI/ML, databases, cloud, leadership, and product." },
      { property: "og:title", content: "Skills — Rajesh" },
      { property: "og:description", content: "AI/ML, databases, cloud, and leadership." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "AI / ML & Generative AI",
    items: [
      "Generative AI", "AI Agents", "Conversational AI",
      "Prompt Engineering", "Retrieval Augmented Generation",
      "LangGraph / LangChain", "Vertex AI", "Gemini ADK",
    ],
  },
  {
    title: "Engineering & Backend",
    items: [
      "Python", "C++", "FastAPI", "RESTful APIs",
      "Application Architecture", "CI/CD", "Observability",
      "Performance Optimization",
    ],
  },
  {
    title: "Data & Databases",
    items: [
      "SQL", "PostgreSQL", "DB2", "pgvector",
      "Google BigQuery", "Dataflow", "Pub/Sub",
      "Database Management", "Data Processing",
    ],
  },
  {
    title: "Cloud & Operations",
    items: [
      "Google Cloud Platform", "Cloud Run", "Cloud SQL",
      "Looker Studio", "AIOps", "Production Support",
      "Automation",
    ],
  },
  {
    title: "Leadership & Product",
    items: [
      "Team Management", "Stakeholder Management",
      "Product Management", "Leadership",
      "Six Sigma Green Belt",
    ],
  },
];

function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-narrow pt-20 pb-16 fade-up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Capabilities</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl">
          A toolkit honed across <em className="text-gradient-gold not-italic">banking, industry, and AI.</em>
        </h1>
      </section>

      <section className="container-narrow pb-24 grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-8 rounded-2xl bg-surface/60 border border-border/60 hover:border-gold/40 transition-all"
          >
            <h2 className="font-serif text-2xl mb-6">{g.title}</h2>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full bg-background/60 border border-border/60 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
