import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
//#region src/routes/portfolio.tsx?tsr-split=component
var projects = [
	{
		year: "2022",
		title: "Flappy Bird",
		type: "FRONT-END",
		description: "Jogo do flappy bird feito com manipulacao da DOM.",
		link: "https://github.com/LucasLima004/Flappy_Bird_Game"
	},
	{
		year: "2022",
		title: "SPA E-Commerce",
		type: "BACK-END",
		description: "Single page application para e-commerce.",
		link: "https://github.com/LucasLima004/SPA_E-commerce"
	},
	{
		year: "2022",
		title: "Gerenciador de tarefas",
		type: "BACK-END",
		description: "Servico com arquitetura MVC completo usado java.",
		link: "https://github.com/LucasLima004/Project_and_Task_Manager"
	},
	{
		year: "2023",
		title: "Gerenciamento de usuario",
		type: "FULLSTACK",
		description: "Servicos integrados de front-end, bff e back-end.",
		link: "https://github.com/LucasLima004/university_project"
	},
	{
		year: "2024",
		title: "Big Data",
		type: "DATA",
		description: "Projeto de analise com mapeamento de grande base de dados.",
		link: "https://github.com/LucasLima004/BigDataWithPython"
	},
	{
		year: "2024",
		title: "Vector Mobile App",
		type: "MOBILE",
		description: "Aplicativo mobile para percurso e locomocao.",
		link: "https://github.com/LucasLima004/Vector_mobile_app"
	}
];
function PortfolioPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "page-shell",
		children: [
			/* @__PURE__ */ jsx("div", { className: "geometric-shape geometric-shape-one" }),
			/* @__PURE__ */ jsx("div", { className: "geometric-shape geometric-shape-two" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsx("p", { children: "Portfólio" })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "page-kicker",
						children: "Projetos & evolução"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "section-title mb-16 mt-5",
						children: [
							"Construindo em",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: "movimento." })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "timeline",
						children: projects.map((project, index) => /* @__PURE__ */ jsxs("article", {
							className: "timeline-item group",
							onClick: () => window.open(project.link, "_blank"),
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "timeline-node",
									children: /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") })
								}),
								/* @__PURE__ */ jsx("div", {
									className: "font-mono text-sm text-accent",
									children: project.year
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground",
									children: project.type
								}), /* @__PURE__ */ jsx("h2", { children: project.title })] }),
								/* @__PURE__ */ jsx("p", {
									className: "max-w-md leading-7 text-muted-foreground",
									children: project.description
								}),
								/* @__PURE__ */ jsx(ArrowUpRight, { className: "text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" })
							]
						}, project.year))
					})
				]
			})
		]
	});
}
//#endregion
export { PortfolioPage as component };
