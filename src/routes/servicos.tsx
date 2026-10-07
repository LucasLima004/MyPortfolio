import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Box, Code2, Film, MonitorPlay } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Fullstack",
    tag: "Foco principal",
    description:
      "APIs robustas, arquitetura limpa e interfaces eficientes. Do banco de dados ao front-end, entrego produtos completos e escaláveis como desenvolvedor fullstack pleno.",
    items: ["APIs REST & integrações", "Back-end com Spring Boot / Node", "Front-end com React & TypeScript", "Bancos de dados & cloud"],
  },
  {
    icon: Box,
    title: "Modelagem 3D",
    tag: "Serviço reservado",
    description:
      "Criação de modelos tridimensionais para produtos, jogos, visualização arquitetônica e assets digitais, com topologia limpa e pronta para uso.",
    items: ["Hard surface & orgânico", "Assets para games", "Visualização de produto", "Otimização para real-time"],
  },
  {
    icon: MonitorPlay,
    title: "Renderização 3D",
    tag: "Serviço reservado",
    description:
      "Renders fotorrealistas e estilizados para apresentações, marketing e portfólios, com iluminação, materiais e composição de alto nível.",
    items: ["Renders fotorrealistas", "Materiais & texturização", "Iluminação de cena", "Pós-produção"],
  },
  {
    icon: Film,
    title: "Animação 3D",
    tag: "Serviço reservado",
    description:
      "Animações para demonstração de produtos, motion graphics e cenas cinematográficas, dando movimento e vida aos seus projetos.",
    items: ["Animação de produto", "Motion graphics 3D", "Câmeras cinematográficas", "Loops para web & social"],
  },
];

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Lucas Lima" },
      { name: "description", content: "Desenvolvimento fullstack, modelagem 3D, renderização e animação 3D por Lucas Lima." },
      { property: "og:title", content: "Serviços — Lucas Lima" },
      { property: "og:description", content: "Fullstack pleno, modelagem 3D, renderização e animação 3D." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="page-shell">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="scanline absolute inset-0" />
      <div className="geometric-shape geometric-shape-one" />
      <div className="geometric-shape geometric-shape-two" />
      <div className="relative mx-auto max-w-7xl">
        <div className="section-heading"><span>05</span><p>Serviços</p></div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="page-kicker">O que eu entrego</p>
            <h1 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.85]">
              Código &<br /><span className="text-outline">dimensão 3D.</span>
            </h1>
          </div>
          <p className="max-w-md text-base leading-8 text-muted-foreground">
            Desenvolvedor fullstack pleno com foco em back-end — e um espaço dedicado a serviços de modelagem, renderização e animação 3D.
          </p>
        </div>
        <div className="mt-16 grid border-l border-t border-border md:grid-cols-2">
          {services.map(({ icon: Icon, title, tag, description, items }) => (
            <article key={title} className="skill-panel">
              <div className="flex items-center justify-between">
                <Icon size={26} className="text-accent" />
                <span>{tag}</span>
              </div>
              <h3 className="mt-8">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}><span>▸</span>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/contato" className="contact-trigger">Solicitar orçamento <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </main>
  );
}
