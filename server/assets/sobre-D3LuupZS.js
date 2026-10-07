import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/sobre.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "page-shell",
		children: [/* @__PURE__ */ jsx("div", { className: "grid-pattern absolute inset-0 opacity-20" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsx("p", { children: "Sobre mim" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "page-kicker",
						children: "Quem está por trás do código"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "section-title mt-5",
						children: [
							"Código limpo.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: "Impacto real." })
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-xl text-base leading-8 text-muted-foreground",
						children: "Desenvolvedor com foco em back-end e visão de produto de ponta a ponta. Transformo requisitos complexos em arquiteturas claras, APIs confiáveis e experiências digitais consistentes."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 grid grid-cols-2 border-l border-t border-border font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "border-b border-r border-border p-5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-2 block text-accent",
									children: "Foco"
								}), "Back-end"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-b border-r border-border p-5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-2 block text-accent",
									children: "Visão"
								}), "Full stack"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-b border-r border-border p-5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-2 block text-accent",
									children: "Especialidade"
								}), "Spring Boot"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-b border-r border-border p-5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-2 block text-accent",
									children: "Interface"
								}), "React"]
							})
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "code-window self-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "code-bar",
						children: [
							/* @__PURE__ */ jsx("span", {}),
							/* @__PURE__ */ jsx("span", {}),
							/* @__PURE__ */ jsx("span", {}),
							/* @__PURE__ */ jsx("p", { children: "about.ts" })
						]
					}), /* @__PURE__ */ jsx("pre", {
						"aria-label": "Sobre Lucas Lima em TypeScript",
						children: /* @__PURE__ */ jsxs("code", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "code-pink",
								children: "interface"
							}),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "Developer"
							}),
							" ",
							"{",
							"\n",
							"  name: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							";",
							"\n",
							"  role: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							";",
							"\n",
							"  focus: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							"[];",
							"\n",
							"  mindset: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							";",
							"\n",
							"  principles: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							"[];",
							"\n",
							"  hobbies: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							"[];",
							"\n",
							"  formation: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "string"
							}),
							"[];",
							"\n",
							"}",
							"\n\n",
							/* @__PURE__ */ jsx("span", {
								className: "code-pink",
								children: "const"
							}),
							" ",
							"lucas: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-blue",
								children: "Developer"
							}),
							" = ",
							"{",
							"\n",
							"  name: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Lucas Lima\""
							}),
							",",
							"\n",
							"  role: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Full Stack Developer\""
							}),
							",",
							"\n",
							"  focus: [",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Spring Boot\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"React\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"TypeScript\""
							}),
							"\n",
							"  ],",
							"\n",
							"  mindset: ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"solve, learn, evolve\""
							}),
							",",
							"\n",
							"  principles: [",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"clarity\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"quality\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"impact\""
							}),
							"\n",
							"  ],",
							"\n",
							"  hobbies: [",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Robotics\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"FPS games\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Reading books\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Playing the Guitar\""
							}),
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Graphic design\""
							}),
							"\n",
							"  ],",
							"\n",
							"  formation: [",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Information Systems\""
							}),
							",",
							"\n",
							"    ",
							/* @__PURE__ */ jsx("span", {
								className: "code-green",
								children: "\"Industrial automation\""
							}),
							"\n",
							"  ],",
							"\n",
							"}",
							";"
						] })
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { AboutPage as component };
