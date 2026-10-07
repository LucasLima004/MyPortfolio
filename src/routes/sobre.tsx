import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre mim — Lucas Lima" },
      { name: "description", content: "Conheça Lucas Lima, desenvolvedor com foco em back-end, Spring Boot e visão full stack." },
      { property: "og:title", content: "Sobre Lucas Lima" },
      { property: "og:description", content: "Back-end especialista, visão full stack e engenharia orientada a impacto." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="page-shell">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="section-heading"><span>01</span><p>Sobre mim</p></div>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="page-kicker">Quem está por trás do código</p>
            <h1 className="section-title mt-5">Código limpo.<br /><span>Impacto real.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">Desenvolvedor com foco em back-end e visão de produto de ponta a ponta. Transformo requisitos complexos em arquiteturas claras, APIs confiáveis e experiências digitais consistentes.</p>
            <div className="mt-10 grid grid-cols-2 border-l border-t border-border font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              <div className="border-b border-r border-border p-5"><span className="mb-2 block text-accent">Foco</span>Back-end</div>
              <div className="border-b border-r border-border p-5"><span className="mb-2 block text-accent">Visão</span>Full stack</div>
              <div className="border-b border-r border-border p-5"><span className="mb-2 block text-accent">Especialidade</span>Spring Boot</div>
              <div className="border-b border-r border-border p-5"><span className="mb-2 block text-accent">Interface</span>React</div>
            </div>
          </div>
          <div className="code-window self-start">
            <div className="code-bar"><span /><span /><span /><p>about.ts</p></div>
            <pre aria-label="Sobre Lucas Lima em TypeScript">
              <code>
                  <span className="code-pink">interface</span>{" "}
                  <span className="code-blue">Developer</span> {"{"}
                  {"\n"}  name: <span className="code-blue">string</span>;
                  {"\n"}  role: <span className="code-blue">string</span>;
                  {"\n"}  focus: <span className="code-blue">string</span>[];
                  {"\n"}  mindset: <span className="code-blue">string</span>;
                  {"\n"}  principles: <span className="code-blue">string</span>[];
                  {"\n"}  hobbies: <span className="code-blue">string</span>[];
                  {"\n"}  formation: <span className="code-blue">string</span>[];
                  {"\n"}{"}"}
                  {"\n\n"}
                  <span className="code-pink">const</span>{" "}
                  lucas: <span className="code-blue">Developer</span> = {"{"}
                  {"\n"}  name: <span className="code-green">&quot;Lucas Lima&quot;</span>,
                  {"\n"}  role: <span className="code-green">&quot;Full Stack Developer&quot;</span>,
                  {"\n"}  focus: [
                  {"\n"}    <span className="code-green">&quot;Spring Boot&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;React&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;TypeScript&quot;</span>
                  {"\n"}  ],
                  {"\n"}  mindset: <span className="code-green">&quot;solve, learn, evolve&quot;</span>,
                  {"\n"}  principles: [
                  {"\n"}    <span className="code-green">&quot;clarity&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;quality&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;impact&quot;</span>
                  {"\n"}  ],
                  {"\n"}  hobbies: [
                  {"\n"}    <span className="code-green">&quot;Robotics&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;FPS games&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;Reading books&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;Playing the Guitar&quot;</span>
                  {"\n"}    <span className="code-green">&quot;Graphic design&quot;</span>
                  {"\n"}  ],
                  {"\n"}  formation: [
                  {"\n"}    <span className="code-green">&quot;Information Systems&quot;</span>,
                  {"\n"}    <span className="code-green">&quot;Industrial automation&quot;</span>
                  {"\n"}  ],
                  {"\n"}{"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}