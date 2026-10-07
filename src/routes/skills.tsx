import { createFileRoute } from "@tanstack/react-router";
import { SkillGlobe } from "../components/SkillGlobe";
import { hardSkills, softSkills } from "@/internacionalization/skills";


export const Route = createFileRoute("/skills")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Soft & Hard Skills — Lucas Lima" },
      { name: "description", content: "Tecnologias, competências técnicas e habilidades humanas de Lucas Lima." },
      { property: "og:title", content: "Soft & Hard Skills — Lucas Lima" },
      { property: "og:description", content: "Spring Boot, React, arquitetura, colaboração e resolução de problemas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <main className="page-shell bg-secondary/30">
      <div className="relative mx-auto max-w-7xl">
        <div className="section-heading"><span>03</span><p>Soft & hard skills</p></div>
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="page-kicker">Stack completa</p><h1 className="section-title mt-5">Do servidor<br /><span>à interface.</span></h1></div>
          <p className="max-w-lg text-base leading-8 text-muted-foreground lg:justify-self-end">Tecnologias organizadas por especialidade, conectadas por visão de produto, comunicação e resolução de problemas.</p>
        </div>
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">Hard skills</h2>
        <div className="grid border-l border-t border-border md:grid-cols-3">
          {hardSkills().map((group) => (
            <article key={group.title} className="skill-panel">
              <div className="flex items-start justify-between"><h3>{group.title}</h3><span>{group.number}</span></div>
              <ul>{group.skills.map((skill) => <li key={skill}><span>+</span>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="mt-20 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="page-kicker">Soft skills</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase md:text-6xl">Além do<br />código.</h2>
            <div className="mt-8 grid border-l border-t border-border sm:grid-cols-2">
              {softSkills().map((skill, index) => <div key={skill} className="soft-skill"><span>{String(index + 1).padStart(2, "0")}</span>{skill}</div>)}
            </div>
          </div>
          <div>
            <p className="text-center font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Arraste para girar · passe pelos vértices</p>
            <SkillGlobe />
          </div>
        </div>
      </div>
    </main>
  );
}