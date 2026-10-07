import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Lima — Desenvolvedor Back-end & Full Stack" },
      { name: "description", content: "Portfólio de Lucas Lima, desenvolvedor especialista em Spring Boot, React e soluções full stack." },
      { property: "og:title", content: "Lucas Lima — Desenvolvedor Back-end & Full Stack" },
      { property: "og:description", content: "APIs robustas, interfaces eficientes e produtos digitais completos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center px-5 py-20 md:px-10">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="scanline absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 pb-14 pt-16 lg:grid-cols-[1fr_320px] lg:pb-20">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="status-dot" /> Disponível para novos desafios
            </div>
            <p className="mb-4 font-mono text-sm text-muted-foreground">&lt;developer id=&quot;lucas-lima&quot;&gt;</p>
            <h1 className="glitch font-display text-[clamp(3.7rem,13vw,10rem)] font-black uppercase leading-[0.78]" data-text="LUCAS LIMA">
              LUCAS<br />LIMA
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-lg md:text-2xl">
              <span className="font-semibold text-accent">Back-end specialist</span>
              <span className="text-border">/</span>
              <span className="text-muted-foreground">Full Stack Developer</span>
            </div>
          </div>
          <div className="border-l border-border pl-6 font-mono text-sm leading-7 text-muted-foreground">
            <p>Construo sistemas que funcionam<br />onde a complexidade acontece.</p>
            <Link to="/sobre" className="mt-8 inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent">Conhecer meu trabalho <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
