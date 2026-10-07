import { useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
//#region src/internacionalization/skills.tsx
function hardSkills() {
	return [
		{
			title: "Back-end",
			number: "01",
			skills: [
				"Spring Boot",
				"Nest",
				"Kafka",
				"Docker",
				"Microservices"
			]
		},
		{
			title: "Front-end",
			number: "02",
			skills: [
				"Angular",
				"React",
				"Redux",
				"Tailwind CSS",
				"Express",
				"Design Systems"
			]
		},
		{
			title: "Dados",
			number: "03",
			skills: [
				"PostgreSQL",
				"SQL",
				"NoSQL",
				"Oracle",
				"Redshift",
				"SQLServer"
			]
		},
		{
			title: "Infrastructure",
			number: "04",
			skills: [
				"Gulp",
				"WebPack",
				"Ansible",
				"Terraform",
				"AWS/Azure",
				"Git",
				"Cloud",
				"CI/CD",
				"Kubernetes",
				"Jenkins"
			]
		},
		{
			title: "Testes",
			number: "05",
			skills: [
				"JUnit",
				"Jest",
				"Testes de integracao"
			]
		},
		{
			title: "Monitoria",
			number: "06",
			skills: [
				"Prometheus",
				"SonarQube",
				"ELK",
				"Alert Manager",
				"Grafana",
				"Observabilidade"
			]
		},
		{
			title: "Linguagens",
			number: "07",
			skills: [
				"TypeScript",
				"Java",
				"Groovy",
				"Node.js",
				"Kotlin"
			]
		}
	];
}
function softSkills() {
	return [
		"Comunicação clara",
		"Pensamento analítico",
		"Colaboração",
		"Resolução de problemas",
		"Autonomia",
		"Aprendizado contínuo"
	];
}
function skill() {
	return [
		"Spring Boot",
		"Groovy",
		"Nest",
		"Angular",
		"Gulp",
		"WebPack",
		"Ansible",
		"Terraform",
		"Kotlin",
		"Java",
		"React",
		"AWS/Azure",
		"TypeScript",
		"SQL",
		"Kafka",
		"Docker",
		"REST APIs",
		"Git",
		"JUnit",
		"CI/CD",
		"Node.js",
		"Cloud",
		"Junit",
		"Jest",
		"NoSQL",
		"Redux",
		"Express",
		"Kubernetes",
		"Grafana",
		"Oracle",
		"ELK",
		"Alert Manager",
		"Prometheus",
		"SonarQube",
		"Jenkins"
	];
}
//#endregion
//#region src/components/SkillGlobe.tsx
var SKILLS = skill();
function Globe() {
	const globeRef = useRef(null);
	const [activeSkill, setActiveSkill] = useState(null);
	const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.35, 1), []);
	const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
	const vertices = useMemo(() => {
		const positions = geometry.getAttribute("position");
		const unique = /* @__PURE__ */ new Map();
		for (let index = 0; index < positions.count; index += 1) {
			const vertex = new THREE.Vector3().fromBufferAttribute(positions, index);
			unique.set(`${vertex.x.toFixed(2)}-${vertex.y.toFixed(2)}-${vertex.z.toFixed(2)}`, vertex);
		}
		return Array.from(unique.values()).slice(0, SKILLS.length);
	}, [geometry]);
	useFrame((_, rawDelta) => {
		const delta = Math.min(rawDelta, .05);
		if (globeRef.current && !activeSkill) globeRef.current.rotation.y += delta * .12;
	});
	return /* @__PURE__ */ jsxs("group", {
		ref: globeRef,
		rotation: [
			.2,
			-.35,
			.05
		],
		children: [
			/* @__PURE__ */ jsx("lineSegments", {
				geometry: edges,
				children: /* @__PURE__ */ jsx("lineBasicMaterial", {
					color: "#0ab8e6",
					transparent: true,
					opacity: .5
				})
			}),
			/* @__PURE__ */ jsx("mesh", {
				geometry,
				children: /* @__PURE__ */ jsx("meshPhysicalMaterial", {
					color: "#06162e",
					emissive: "#071f3f",
					emissiveIntensity: .32,
					roughness: .32,
					metalness: .62,
					transparent: true,
					opacity: .72
				})
			}),
			vertices.map((position, index) => {
				const skill = SKILLS[index] ?? `Skill ${index + 1}`;
				const isActive = activeSkill === skill;
				return /* @__PURE__ */ jsxs("group", {
					position,
					children: [/* @__PURE__ */ jsxs("mesh", {
						scale: isActive ? 1.65 : 1,
						onPointerEnter: (event) => {
							event.stopPropagation();
							setActiveSkill(skill);
							document.body.style.cursor = "crosshair";
						},
						onPointerLeave: () => {
							setActiveSkill(null);
							document.body.style.cursor = "default";
						},
						children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
							.075,
							12,
							12
						] }), /* @__PURE__ */ jsx("meshBasicMaterial", { color: isActive ? "#93e9ff" : "#17c7f4" })]
					}), isActive && /* @__PURE__ */ jsx(Html, {
						center: true,
						distanceFactor: 7,
						zIndexRange: [30, 0],
						children: /* @__PURE__ */ jsx("div", {
							className: "skill-tooltip",
							children: skill
						})
					})]
				}, skill);
			})
		]
	});
}
function SkillGlobe() {
	return /* @__PURE__ */ jsx("div", {
		className: "h-[420px] w-full md:h-[560px]",
		"aria-label": "Globo 3D interativo de tecnologias",
		children: /* @__PURE__ */ jsxs(Canvas, {
			dpr: [1, 1.5],
			camera: {
				position: [
					0,
					.4,
					7
				],
				fov: 45
			},
			gl: {
				antialias: true,
				alpha: true
			},
			children: [
				/* @__PURE__ */ jsx("ambientLight", {
					intensity: .6,
					color: "#4d9cff"
				}),
				/* @__PURE__ */ jsx("pointLight", {
					position: [
						4,
						3,
						5
					],
					intensity: 18,
					color: "#35d9ff"
				}),
				/* @__PURE__ */ jsx("pointLight", {
					position: [
						-4,
						-2,
						-3
					],
					intensity: 12,
					color: "#1452a4"
				}),
				/* @__PURE__ */ jsx(Globe, {}),
				/* @__PURE__ */ jsx(OrbitControls, {
					enablePan: false,
					enableZoom: false,
					rotateSpeed: .45
				})
			]
		})
	});
}
//#endregion
//#region src/routes/skills.tsx?tsr-split=component
function SkillsPage() {
	return /* @__PURE__ */ jsx("main", {
		className: "page-shell bg-secondary/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsx("p", { children: "Soft & hard skills" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mb-14 grid gap-6 lg:grid-cols-2 lg:items-end",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "page-kicker",
						children: "Stack completa"
					}), /* @__PURE__ */ jsxs("h1", {
						className: "section-title mt-5",
						children: [
							"Do servidor",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: "à interface." })
						]
					})] }), /* @__PURE__ */ jsx("p", {
						className: "max-w-lg text-base leading-8 text-muted-foreground lg:justify-self-end",
						children: "Tecnologias organizadas por especialidade, conectadas por visão de produto, comunicação e resolução de problemas."
					})]
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent",
					children: "Hard skills"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid border-l border-t border-border md:grid-cols-3",
					children: hardSkills().map((group) => /* @__PURE__ */ jsxs("article", {
						className: "skill-panel",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ jsx("h3", { children: group.title }), /* @__PURE__ */ jsx("span", { children: group.number })]
						}), /* @__PURE__ */ jsx("ul", { children: group.skills.map((skill) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "+" }), skill] }, skill)) })]
					}, group.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-20 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "page-kicker",
							children: "Soft skills"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-4 font-display text-4xl font-bold uppercase md:text-6xl",
							children: [
								"Além do",
								/* @__PURE__ */ jsx("br", {}),
								"código."
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 grid border-l border-t border-border sm:grid-cols-2",
							children: softSkills().map((skill, index) => /* @__PURE__ */ jsxs("div", {
								className: "soft-skill",
								children: [/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }), skill]
							}, skill))
						})
					] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-center font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground",
						children: "Arraste para girar · passe pelos vértices"
					}), /* @__PURE__ */ jsx(SkillGlobe, {})] })]
				})
			]
		})
	});
}
//#endregion
export { SkillsPage as component };
