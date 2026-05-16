import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Rajesh" },
      { name: "description", content: "19+ years across AI/ML leadership, enterprise automation, and database engineering at Kanaka, Honeywell, Tieto, TCS, and ACI Worldwide." },
      { property: "og:title", content: "Experience — Rajesh" },
      { property: "og:description", content: "A timeline of leadership across AI/ML, automation, and databases." },
    ],
  }),
  component: Experience,
});

type Job = {
  company: string;
  title: string;
  location?: string;
  period: string;
  bullets: string[];
  tags: string[];
};

const jobs: Job[] = [
  {
    company: "Kanaka Software",
    title: "Technology Lead (AI/ML)",
    location: "Pune, India",
    period: "Oct 2020 — Present · 5y 7m",
    tags: ["Python", "Generative AI", "RAG", "Vertex AI", "FastAPI", "PostgreSQL", "BigQuery", "CI/CD"],
    bullets: [
      "Directed engineering teams of up to 25, owning recruitment, performance and career development for 9 direct reports — driving a 20% improvement in retention and productivity.",
      "Designed and launched TalentPulse360, a production Generative AI platform on Python, FastAPI and Google's Agent Development Kit, orchestrating multi-agent workflows on Gemini — reducing HR process time from 7 days to 30 minutes.",
      "Engineered RAG pipelines on Vertex AI integrated with pgvector and fine-tuned embeddings; explored LangGraph / LangChain for stateful multi-turn agents.",
      "Built prompt-engineering frameworks for automated reporting, competitor analysis, and network intelligence — improving accuracy and turnaround by 40%.",
      "Led release management and incident response for Opteon, a nationwide property evaluation platform — achieving a 30% reduction in downtime.",
      "Deployed AI services on Cloud Run and Cloud SQL with full CI/CD and AIOps observability; built data pipelines using BigQuery, Dataflow, Pub/Sub and Looker Studio.",
    ],
  },
  {
    company: "Honeywell Process Solutions",
    title: "Lead Application Engineer",
    period: "Oct 2017 — Oct 2020 · 3y",
    tags: ["Stakeholder Management", "Leadership", "Production Support"],
    bullets: [
      "Directed end-to-end delivery of enterprise automation solutions for global clients including Saudi Aramco, Pertamina and KOTC — improving operational efficiency by up to 30%.",
      "Negotiated and secured a pivotal 10-year service contract with Pertamina in Jakarta.",
      "Orchestrated multi-site teams across geographies for deployment, integration, and production support — improving system uptime by 25%.",
    ],
  },
  {
    company: "Tieto",
    title: "Database Consultant Lead",
    location: "Pune, India",
    period: "Nov 2016 — Sep 2017 · 10m",
    tags: ["SQL", "Database Management", "Automation"],
    bullets: [
      "Managed mission-critical banking databases for Westpac and Bank of America Merrill Lynch.",
      "Improved application performance by 70% via SQL optimization, index redesign, and query tuning — earning company-wide recognition.",
      "Built automation scripts that reduced manual DBA intervention by 50% across production environments.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Associate Consultant",
    period: "Apr 2016 — Nov 2016 · 7m",
    tags: ["DB2", "Team Management"],
    bullets: [
      "Led a team of 30 DBAs administering 1,000+ production IBM DB2 instances for Morgan Stanley.",
      "Established standardized procedures for provisioning, backup/recovery, and capacity planning.",
    ],
  },
  {
    company: "Tieto",
    title: "Senior DBA Consultant",
    period: "Mar 2014 — Apr 2016 · 2y 1m",
    tags: ["SQL", "Performance Optimization", "Automation"],
    bullets: [
      "Managed production databases for Westpac and BAML in regulated financial environments.",
      "Achieved 70% application performance improvement through deep SQL optimization (company award).",
      "Built automation improving reliability across production banking environments.",
    ],
  },
  {
    company: "ACI Worldwide Solutions",
    title: "Database Developer",
    period: "Apr 2008 — Mar 2014 · 5y 11m",
    tags: ["SQL", "Data Processing"],
    bullets: [
      "Built SQL, stored procedures, and data processing logic for high-volume payment systems serving DBS Singapore, Standard Chartered, and KBank Thailand.",
      "Delivered backend solutions for transaction platforms with onsite deployment in Singapore and Thailand.",
    ],
  },
  {
    company: "Honeywell Process Solutions",
    title: "C++ Developer",
    period: "Sep 2005 — Apr 2008 · 2y 7m",
    tags: ["C++", "SQL"],
    bullets: [
      "Developed backend services and database interfaces for industrial data-acquisition systems in C++ and SQL.",
    ],
  },
];

function Experience() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-narrow pt-20 pb-16 fade-up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Experience</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl">
          Two decades of building, leading, and <em className="text-gradient-gold not-italic">shipping.</em>
        </h1>
      </section>

      <section className="container-narrow pb-24 px-4 sm:px-0">
        <ol className="relative border-l border-border/60 ml-2 sm:ml-3">
          {jobs.map((job, i) => (
            <li key={i} className="relative mb-12 sm:mb-16 ml-6 sm:ml-8 last:mb-0">
              <span className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+8px)] top-1.5 sm:top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gold ring-4 ring-background" />
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">
                  {job.title}
                  <span className="text-muted-foreground"> · {job.company}</span>
                </h2>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                  {job.period}
                </p>
              </div>
              {job.location && (
                <p className="text-sm text-muted-foreground mb-4">{job.location}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-5">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-3">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                    <span className="text-gold mt-1.5 flex-shrink-0 text-xs">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </div>
  );
}
