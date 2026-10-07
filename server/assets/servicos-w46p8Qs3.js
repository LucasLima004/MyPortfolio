import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Box, Code2, Film, MonitorPlay } from "lucide-react";
//#region src/routes/servicos.tsx?tsr-split=component
var services = [
	{
		icon: Code2,
		title: "Desenvolvimento Fullstack",
		tag: "Foco principal",
		description: "APIs robustas, arquitetura limpa e interfaces eficientes. Do banco de dados ao front-end, entrego produtos completos e escaláveis como desenvolvedor fullstack pleno.",
		items: [
			"APIs REST & integrações",
			"Back-end com Spring Boot / Node",
			"Front-end com React & TypeScript",
			"Bancos de dados & cloud"
		]
	},
	{
		icon: Box,
		title: "Modelagem 3D",
		tag: "Serviço reservado",
		description: "Criação de modelos tridimensionais para produtos, jogos, visualização arquitetônica e assets digitais, com topologia limpa e pronta para uso.",
		items: [
			"Hard surface & orgânico",
			"Assets para games",
			"Visualização de produto",
			"Otimização para real-time"
		]
	},
	{
		icon: MonitorPlay,
		title: "Renderização 3D",
		tag: "Serviço reservado",
		description: "Renders fotorrealistas e estilizados para apresentações, marketing e portfólios, com iluminação, materiais e composição de alto nível.",
		items: [
			"Renders fotorrealistas",
			"Materiais & texturização",
			"Iluminação de cena",
			"Pós-produção"
		]
	},
	{
		icon: Film,
		title: "Animação 3D",
		tag: "Serviço reservado",
		description: "Animações para demonstração de produtos, motion graphics e cenas cinematográficas, dando movimento e vida aos seus projetos.",
		items: [
			"Animação de produto",
			"Motion graphics 3D",
			"Câmeras cinematográficas",
			"Loops para web & social"
		]
	}
];
function ServicesPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "page-shell",
		children: [
			/* @__PURE__ */ jsx("div", { className: "grid-pattern absolute inset-0 opacity-20" }),
			/* @__PURE__ */ jsx("div", { className: "scanline absolute inset-0" }),
			/* @__PURE__ */ jsx("div", { className: "geometric-shape geometric-shape-one" }),
			/* @__PURE__ */ jsx("div", { className: "geometric-shape geometric-shape-two" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ jsx("span", { children: "05" }), /* @__PURE__ */ jsx("p", { children: "Serviços" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "page-kicker",
							children: "O que eu entrego"
						}), /* @__PURE__ */ jsxs("h1", {
							className: "mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.85]",
							children: [
								"Código &",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-outline",
									children: "dimensão 3D."
								})
							]
						})] }), /* @__PURE__ */ jsx("p", {
							className: "max-w-md text-base leading-8 text-muted-foreground",
							children: "Desenvolvedor fullstack pleno com foco em back-end — e um espaço dedicado a serviços de modelagem, renderização e animação 3D."
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-16 grid border-l border-t border-border md:grid-cols-2",
						children: services.map(({ icon: Icon, title, tag, description, items }) => /* @__PURE__ */ jsxs("article", {
							className: "skill-panel",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx(Icon, {
										size: 26,
										className: "text-accent"
									}), /* @__PURE__ */ jsx("span", { children: tag })]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-8",
									children: title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-7 text-muted-foreground",
									children: description
								}),
								/* @__PURE__ */ jsx("ul", { children: items.map((item) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "▸" }), item] }, item)) })
							]
						}, title))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-14 flex justify-center",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/contato",
							className: "contact-trigger",
							children: ["Solicitar orçamento ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
