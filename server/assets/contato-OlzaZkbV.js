import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/contato.tsx?tsr-split=component
var WHATSAPP_NUMBER = "+5581992160054";
var channels = [
	{
		icon: MessageCircle,
		label: "WhatsApp",
		detail: "Conversa direta",
		link: "https://wa.me/+5581992160054?text=Ola Lucas, queria conversar sobre seus servicos."
	},
	{
		icon: Mail,
		label: "E-mail",
		detail: "Projetos e oportunidades",
		link: "mailto:lucaslimasl004@gmail.com"
	},
	{
		icon: Instagram,
		label: "Instagram",
		detail: "Conteúdo e bastidores",
		link: "https://www.instagram.com/llima004/"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		detail: "Rede profissional",
		link: "www.linkedin.com/in/lucas-lima-786999291"
	},
	{
		icon: Github,
		label: "GitHub",
		detail: "Código e projetos",
		link: "https://github.com/LucasLima004"
	}
];
var serviceOptions = [
	"Desenvolvimento fullstack",
	"Modelagem 3D",
	"Renderização 3D",
	"Animação 3D",
	"Outro projeto"
];
function ContactPage() {
	const [sending, setSending] = useState(false);
	const [form, setForm] = useState({
		name: "",
		contact: "",
		service: serviceOptions[0],
		budget: "",
		message: ""
	});
	const update = (field) => (e) => setForm((prev) => ({
		...prev,
		[field]: e.target.value
	}));
	async function handleSubmit(e) {
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
				form.message
			].filter(Boolean).join("\n");
			window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
			toast.success("Mensagem registrada! Abrindo o WhatsApp para você enviar.");
			setForm({
				name: "",
				contact: "",
				service: serviceOptions[0],
				budget: "",
				message: ""
			});
		} catch {
			toast.error("Não foi possível enviar. Verifique os campos e tente novamente.");
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "page-shell",
		children: [
			/* @__PURE__ */ jsx("div", { className: "grid-pattern absolute inset-0 opacity-20" }),
			/* @__PURE__ */ jsx("div", { className: "scanline absolute inset-0" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ jsx("span", { children: "04" }), /* @__PURE__ */ jsx("p", { children: "Entre em contato" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "page-kicker",
							children: "Tem um projeto em mente?"
						}), /* @__PURE__ */ jsxs("h1", {
							className: "mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.85]",
							children: [
								"Vamos construir",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-outline",
									children: "algo sólido."
								})
							]
						})] }), /* @__PURE__ */ jsx("p", {
							className: "max-w-md text-base leading-8 text-muted-foreground",
							children: "Preencha o formulário e sua mensagem chega direto no meu WhatsApp. Estou aberto a oportunidades, colaborações e projetos full stack e 3D."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
						children: [/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "border border-border bg-card p-6 md:p-10",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-mono text-xs uppercase tracking-[0.2em] text-accent",
									children: "// Formulário → WhatsApp"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 grid gap-6 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ jsxs("label", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
												children: "Nome *"
											}), /* @__PURE__ */ jsx("input", {
												required: true,
												maxLength: 100,
												value: form.name,
												onChange: update("name"),
												className: "border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent",
												placeholder: "Seu nome"
											})]
										}),
										/* @__PURE__ */ jsxs("label", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
												children: "E-mail ou telefone *"
											}), /* @__PURE__ */ jsx("input", {
												required: true,
												maxLength: 255,
												value: form.contact,
												onChange: update("contact"),
												className: "border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent",
												placeholder: "como te respondo?"
											})]
										}),
										/* @__PURE__ */ jsxs("label", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
												children: "Serviço *"
											}), /* @__PURE__ */ jsx("select", {
												value: form.service,
												onChange: update("service"),
												className: "border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent",
												children: serviceOptions.map((option) => /* @__PURE__ */ jsx("option", {
													value: option,
													children: option
												}, option))
											})]
										}),
										/* @__PURE__ */ jsxs("label", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
												children: "Orçamento (opcional)"
											}), /* @__PURE__ */ jsx("input", {
												maxLength: 100,
												value: form.budget,
												onChange: update("budget"),
												className: "border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent",
												placeholder: "Ex: R$ 5.000"
											})]
										}),
										/* @__PURE__ */ jsxs("label", {
											className: "flex flex-col gap-2 sm:col-span-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
												children: "Mensagem *"
											}), /* @__PURE__ */ jsx("textarea", {
												required: true,
												minLength: 10,
												maxLength: 1500,
												rows: 5,
												value: form.message,
												onChange: update("message"),
												className: "resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent",
												placeholder: "Conte sobre o projeto..."
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("button", {
									type: "submit",
									disabled: sending,
									className: "contact-trigger mt-8 w-full justify-center disabled:opacity-50",
									children: [
										sending ? "Enviando..." : "Enviar pelo WhatsApp",
										" ",
										/* @__PURE__ */ jsx(Send, { size: 15 })
									]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid content-start border-l border-t border-border sm:grid-cols-2 lg:grid-cols-1",
							children: channels.map(({ icon: Icon, label, detail, link }) => /* @__PURE__ */ jsxs("article", {
								className: "contact-card !min-h-32",
								onClick: () => window.open(link, "_blank"),
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx(Icon, { size: 22 }), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "!mt-6",
										children: label
									}),
									/* @__PURE__ */ jsx("p", { children: detail })
								]
							}, label))
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
