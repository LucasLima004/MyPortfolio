import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsx("main", {
		className: "min-h-screen overflow-hidden bg-background text-foreground",
		children: /* @__PURE__ */ jsxs("section", {
			className: "relative flex min-h-[calc(100vh-5rem)] items-center px-5 py-20 md:px-10",
			children: [
				/* @__PURE__ */ jsx("div", { className: "grid-pattern absolute inset-0 opacity-30" }),
				/* @__PURE__ */ jsx("div", { className: "scanline absolute inset-0" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto grid w-full max-w-7xl items-end gap-10 pb-14 pt-16 lg:grid-cols-[1fr_320px] lg:pb-20",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent",
							children: [/* @__PURE__ */ jsx("span", { className: "status-dot" }), " Disponível para novos desafios"]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mb-4 font-mono text-sm text-muted-foreground",
							children: "<developer id=\"lucas-lima\">"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "glitch font-display text-[clamp(3.7rem,13vw,10rem)] font-black uppercase leading-[0.78]",
							"data-text": "LUCAS LIMA",
							children: [
								"LUCAS",
								/* @__PURE__ */ jsx("br", {}),
								"LIMA"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-lg md:text-2xl",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-accent",
									children: "Back-end specialist"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-border",
									children: "/"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Full Stack Developer"
								})
							]
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "border-l border-border pl-6 font-mono text-sm leading-7 text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("p", { children: [
							"Construo sistemas que funcionam",
							/* @__PURE__ */ jsx("br", {}),
							"onde a complexidade acontece."
						] }), /* @__PURE__ */ jsxs(Link, {
							to: "/sobre",
							className: "mt-8 inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent",
							children: ["Conhecer meu trabalho ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { Index as component };
