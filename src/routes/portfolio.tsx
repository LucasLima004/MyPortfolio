import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { year: "2022", title: "Flappy Bird", type: "FRONT-END", description: "Jogo do flappy bird feito com manipulacao da DOM.", link: "https://github.com/LucasLima004/Flappy_Bird_Game" },
  { year: "2022", title: "SPA E-Commerce", type: "BACK-END", description: "Single page application para e-commerce.", link: "https://github.com/LucasLima004/SPA_E-commerce" },
  { year: "2022", title: "Gerenciador de tarefas", type: "BACK-END", description: "Servico com arquitetura MVC completo usado java.", link: "https://github.com/LucasLima004/Project_and_Task_Manager" },
  { year: "2023", title: "Gerenciamento de usuario", type: "FULLSTACK", description: "Servicos integrados de front-end, bff e back-end.", link: "https://github.com/LucasLima004/university_project" },
  { year: "2024", title: "Big Data", type: "DATA", description: "Projeto de analise com mapeamento de grande base de dados.", link: "https://github.com/LucasLima004/BigDataWithPython" },
  { year: "2024", title: "Vector Mobile App", type: "MOBILE", description: "Aplicativo mobile para percurso e locomocao.", link: "https://github.com/LucasLima004/Vector_mobile_app" },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Lucas Lima" },
      { name: "description", content: "Projetos de back-end e full stack desenvolvidos por Lucas Lima." },
      { property: "og:title", content: "Portfólio de Lucas Lima" },
      { property: "og:description", content: "Uma linha do tempo de APIs, plataformas e automações." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="page-shell">
      <div className="geometric-shape geometric-shape-one" />
      <div className="geometric-shape geometric-shape-two" />
      <div className="relative mx-auto max-w-7xl">
        <div className="section-heading"><span>02</span><p>Portfólio</p></div>
        <p className="page-kicker">Projetos & evolução</p>
        <h1 className="section-title mb-16 mt-5">Construindo em<br /><span>movimento.</span></h1>
        <div className="timeline">
          {projects.map((project, index) => (
            <article key={project.year} className="timeline-item group" onClick={() => window.open(project.link, "_blank")}>
              <div className="timeline-node"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="font-mono text-sm text-accent">{project.year}</div>
              <div>
                <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground">{project.type}</p>
                <h2>{project.title}</h2>
              </div>
              <p className="max-w-md leading-7 text-muted-foreground">{project.description}</p>
              <ArrowUpRight className="text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}