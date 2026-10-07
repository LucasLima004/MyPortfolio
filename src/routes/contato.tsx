import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "+5581992160054";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", detail: "Conversa direta", link: "https://wa.me/+5581992160054?text=Ola Lucas, queria conversar sobre seus servicos." },
  { icon: Mail, label: "E-mail", detail: "Projetos e oportunidades", link: "mailto:lucaslimasl004@gmail.com" },
  { icon: Instagram, label: "Instagram", detail: "Conteúdo e bastidores", link: "https://www.instagram.com/llima004/" },
  { icon: Linkedin, label: "LinkedIn", detail: "Rede profissional", link: "www.linkedin.com/in/lucas-lima-786999291" },
  { icon: Github, label: "GitHub", detail: "Código e projetos", link: "https://github.com/LucasLima004" },
];

const serviceOptions = [
  "Desenvolvimento fullstack",
  "Modelagem 3D",
  "Renderização 3D",
  "Animação 3D",
  "Outro projeto",
];

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Entre em contato — Lucas Lima" },
      { name: "description", content: "Fale com Lucas Lima sobre projetos, oportunidades e colaborações." },
      { property: "og:title", content: "Entre em contato com Lucas Lima" },
      { property: "og:description", content: "Canais para conversar sobre back-end, full stack e novos projetos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", service: serviceOptions[0], budget: "", message: "" });

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const text = [
        `Olá, Lucas! Meu nome é ${form.name}.`,
        `Serviço: ${form.service}`,
        form.budget ? `Orçamento: ${form.budget}` : null,
        `Contato: ${form.contact}`,
        "",
        form.message,
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      toast.success("Mensagem registrada! Abrindo o WhatsApp para você enviar.");
      setForm({ name: "", contact: "", service: serviceOptions[0], budget: "", message: "" });
    } catch {
      toast.error("Não foi possível enviar. Verifique os campos e tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="page-shell">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="scanline absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <div className="section-heading"><span>04</span><p>Entre em contato</p></div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="page-kicker">Tem um projeto em mente?</p><h1 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.85]">Vamos construir<br /><span className="text-outline">algo sólido.</span></h1></div>
          <p className="max-w-md text-base leading-8 text-muted-foreground">Preencha o formulário e sua mensagem chega direto no meu WhatsApp. Estou aberto a oportunidades, colaborações e projetos full stack e 3D.</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Formulário → WhatsApp</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Nome *</span>
                <input required maxLength={100} value={form.name} onChange={update("name")} className="border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent" placeholder="Seu nome" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">E-mail ou telefone *</span>
                <input required maxLength={255} value={form.contact} onChange={update("contact")} className="border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent" placeholder="como te respondo?" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Serviço *</span>
                <select value={form.service} onChange={update("service")} className="border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent">
                  {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Orçamento (opcional)</span>
                <input maxLength={100} value={form.budget} onChange={update("budget")} className="border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent" placeholder="Ex: R$ 5.000" />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Mensagem *</span>
                <textarea required minLength={10} maxLength={1500} rows={5} value={form.message} onChange={update("message")} className="resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent" placeholder="Conte sobre o projeto..." />
              </label>
            </div>
            <button type="submit" disabled={sending} className="contact-trigger mt-8 w-full justify-center disabled:opacity-50">
              {sending ? "Enviando..." : "Enviar pelo WhatsApp"} <Send size={15} />
            </button>
          </form>

          <div className="grid content-start border-l border-t border-border sm:grid-cols-2 lg:grid-cols-1">
            {channels.map(({ icon: Icon, label, detail, link }) => (
              <article key={label} className="contact-card !min-h-32" onClick={() => window.open(link, "_blank")}>
                <div className="flex items-center justify-between"><Icon size={22} /><ArrowUpRight size={15} /></div>
                <h2 className="!mt-6">{label}</h2><p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
