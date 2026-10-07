import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-DeE8Jpzg.css";
//#endregion
//#region src/assets/Logo_AS.svg
var Logo_AS_default = "/assets/Logo_AS-D6Fsc-zZ.svg";
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lucas Lima — Developer" },
			{
				name: "description",
				content: "Portfólio de desenvolvimento back-end e full stack."
			},
			{
				name: "author",
				content: "Lucas Lima"
			},
			{
				property: "og:title",
				content: "Lucas Lima — Developer"
			},
			{
				property: "og:description",
				content: "Portfólio de desenvolvimento back-end e full stack."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "sticky inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "flex items-center gap-3",
							"aria-label": "Lucas Lima — início",
							children: [/* @__PURE__ */ jsx("img", {
								src: Logo_AS_default,
								alt: "Logo de lobo de Lucas Lima",
								width: 1024,
								height: 1024,
								className: "h-10 w-10 object-contain brightness-0 invert"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-display text-sm font-bold uppercase tracking-[0.18em]",
								children: "Lucas Lima"
							})]
						}),
						/* @__PURE__ */ jsxs("nav", {
							className: "hidden items-center gap-8 md:flex",
							"aria-label": "Navegação principal",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/sobre",
									className: "nav-link",
									activeProps: { className: "nav-link text-accent" },
									children: "Sobre"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/portfolio",
									className: "nav-link",
									activeProps: { className: "nav-link text-accent" },
									children: "Portfólio"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/skills",
									className: "nav-link",
									activeProps: { className: "nav-link text-accent" },
									children: "Skills"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/servicos",
									className: "nav-link",
									activeProps: { className: "nav-link text-accent" },
									children: "Serviços"
								})
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contato",
							className: "contact-trigger",
							children: ["Vamos conversar ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
						})
					]
				}), /* @__PURE__ */ jsxs("nav", {
					className: "flex h-11 items-center justify-center gap-6 border-t border-border/60 px-4 md:hidden",
					"aria-label": "Navegação móvel",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/sobre",
							className: "mobile-nav-link",
							children: "Sobre"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/portfolio",
							className: "mobile-nav-link",
							children: "Portfólio"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/skills",
							className: "mobile-nav-link",
							children: "Skills"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/servicos",
							className: "mobile-nav-link",
							children: "Serviços"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contato",
							className: "mobile-nav-link",
							children: "Contato"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-border px-5 py-8 md:px-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-3 font-mono text-xs text-muted-foreground md:flex-row md:justify-between",
					children: [/* @__PURE__ */ jsx("p", { children: "© 2026 Lucas Lima" }), /* @__PURE__ */ jsx("p", { children: "DESIGNED & ENGINEERED WITH INTENTION" })]
				})
			}),
			/* @__PURE__ */ jsx(Toaster, {})
		]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-Ec42C_aG.js");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Lucas Lima — Desenvolvedor Back-end & Full Stack" },
		{
			name: "description",
			content: "Portfólio de Lucas Lima, desenvolvedor especialista em Spring Boot, React e soluções full stack."
		},
		{
			property: "og:title",
			content: "Lucas Lima — Desenvolvedor Back-end & Full Stack"
		},
		{
			property: "og:description",
			content: "APIs robustas, interfaces eficientes e produtos digitais completos."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/contato.tsx
var $$splitComponentImporter$4 = () => import("./contato-OlzaZkbV.js");
var Route$4 = createFileRoute("/contato")({
	head: () => ({ meta: [
		{ title: "Entre em contato — Lucas Lima" },
		{
			name: "description",
			content: "Fale com Lucas Lima sobre projetos, oportunidades e colaborações."
		},
		{
			property: "og:title",
			content: "Entre em contato com Lucas Lima"
		},
		{
			property: "og:description",
			content: "Canais para conversar sobre back-end, full stack e novos projetos."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/portfolio.tsx
var $$splitComponentImporter$3 = () => import("./portfolio-B9kksWbX.js");
var Route$3 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Portfólio — Lucas Lima" },
		{
			name: "description",
			content: "Projetos de back-end e full stack desenvolvidos por Lucas Lima."
		},
		{
			property: "og:title",
			content: "Portfólio de Lucas Lima"
		},
		{
			property: "og:description",
			content: "Uma linha do tempo de APIs, plataformas e automações."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/servicos.tsx
var $$splitComponentImporter$2 = () => import("./servicos-w46p8Qs3.js");
var Route$2 = createFileRoute("/servicos")({
	head: () => ({ meta: [
		{ title: "Serviços — Lucas Lima" },
		{
			name: "description",
			content: "Desenvolvimento fullstack, modelagem 3D, renderização e animação 3D por Lucas Lima."
		},
		{
			property: "og:title",
			content: "Serviços — Lucas Lima"
		},
		{
			property: "og:description",
			content: "Fullstack pleno, modelagem 3D, renderização e animação 3D."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/skills.tsx
var $$splitComponentImporter$1 = () => import("./skills-CJtPCIlO.js");
var Route$1 = createFileRoute("/skills")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Soft & Hard Skills — Lucas Lima" },
		{
			name: "description",
			content: "Tecnologias, competências técnicas e habilidades humanas de Lucas Lima."
		},
		{
			property: "og:title",
			content: "Soft & Hard Skills — Lucas Lima"
		},
		{
			property: "og:description",
			content: "Spring Boot, React, arquitetura, colaboração e resolução de problemas."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/sobre.tsx
var $$splitComponentImporter = () => import("./sobre-D3LuupZS.js");
var Route = createFileRoute("/sobre")({
	head: () => ({ meta: [
		{ title: "Sobre mim — Lucas Lima" },
		{
			name: "description",
			content: "Conheça Lucas Lima, desenvolvedor com foco em back-end, Spring Boot e visão full stack."
		},
		{
			property: "og:title",
			content: "Sobre Lucas Lima"
		},
		{
			property: "og:description",
			content: "Back-end especialista, visão full stack e engenharia orientada a impacto."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ContatoRoute: Route$4.update({
		id: "/contato",
		path: "/contato",
		getParentRoute: () => Route$6
	}),
	PortfolioRoute: Route$3.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$6
	}),
	ServicosRoute: Route$2.update({
		id: "/servicos",
		path: "/servicos",
		getParentRoute: () => Route$6
	}),
	SkillsRoute: Route$1.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$6
	}),
	SobreRoute: Route.update({
		id: "/sobre",
		path: "/sobre",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
