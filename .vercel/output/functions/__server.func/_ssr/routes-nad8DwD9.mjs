import { i as __toESM } from "../__23tanstack-start-server-fn-resolver-CrHL9HDt.mjs";
import { t as defaultProfile } from "./defaults-D_ukbZTg.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as getProjects, c as useAdmin, i as getProfile, n as addProject, o as updateProfile, r as deleteProject, s as updateProject } from "./admin-context-BueZHICK.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as ChevronRight, D as CodeXml, E as Sparkles, S as ExternalLink, T as ArrowUpRight, _ as Linkedin, a as Trash2, b as Github, c as Settings2, d as Pencil, f as Moon, g as Lock, h as LogOut, i as Twitter, l as Plus, m as Mail, n as Users, o as Sun, p as MapPin, r as Upload, s as ShieldCheck, t as X, u as Phone, v as KeyRound, w as Calendar, x as FolderOpen, y as GraduationCap } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-nad8DwD9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useLocalProjects() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		getProjects().then((data) => {
			if (data) setProjects(data);
		}).catch(console.error).finally(() => setLoading(false));
	}, []);
	return {
		projects,
		addProject: (0, import_react.useCallback)(async (project) => {
			const newProject = await addProject({ data: project });
			setProjects((prev) => [newProject, ...prev]);
		}, []),
		updateProject: (0, import_react.useCallback)(async (id, updates) => {
			await updateProject({ data: {
				id,
				updates
			} });
			setProjects((prev) => prev.map((p) => p.id === id ? {
				...p,
				...updates
			} : p));
		}, []),
		deleteProject: (0, import_react.useCallback)(async (id) => {
			await deleteProject({ data: id });
			setProjects((prev) => prev.filter((p) => p.id !== id));
		}, []),
		loading
	};
}
var AVATAR_KEY = "portfolio_avatar";
function useProfile() {
	const [profile, setProfile] = (0, import_react.useState)(defaultProfile);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		getProfile().then((data) => {
			if (data) {
				const savedAvatar = localStorage.getItem(AVATAR_KEY);
				if (savedAvatar) data.avatar = savedAvatar;
				setProfile(data);
			}
		}).catch(console.error).finally(() => setLoading(false));
	}, []);
	return {
		profile,
		update: (0, import_react.useCallback)(async (patch) => {
			setProfile((p) => ({
				...p,
				...patch
			}));
			try {
				if (patch.avatar !== void 0) localStorage.setItem(AVATAR_KEY, patch.avatar);
				const { avatar: _, ...rest } = patch;
				if (Object.keys(rest).length > 0) await updateProfile({ data: rest });
			} catch (err) {
				console.error("Failed to save profile to Google Sheets:", err);
			}
		}, []),
		reset: (0, import_react.useCallback)(() => {
			localStorage.removeItem(AVATAR_KEY);
			setProfile(defaultProfile);
		}, []),
		loading
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
function ProjectForm({ initial, onSubmit, onCancel }) {
	const [title, setTitle] = (0, import_react.useState)(initial?.title ?? "");
	const [description, setDescription] = (0, import_react.useState)(initial?.description ?? "");
	const [link, setLink] = (0, import_react.useState)(initial?.link ?? "");
	const [techInput, setTechInput] = (0, import_react.useState)(initial?.technologies?.join(", ") ?? "");
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			title,
			description,
			technologies: techInput.split(",").map((t) => t.trim()).filter(Boolean),
			link: link || void 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "title",
					children: "Project Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "title",
					value: title,
					onChange: (e) => setTitle(e.target.value),
					placeholder: "e.g. IoT Smart Home System",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "description",
					children: "Description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "description",
					value: description,
					onChange: (e) => setDescription(e.target.value),
					placeholder: "Describe what the project does...",
					rows: 3,
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
					htmlFor: "technologies",
					children: ["Technologies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground text-xs",
						children: "(comma separated)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "technologies",
					value: techInput,
					onChange: (e) => setTechInput(e.target.value),
					placeholder: "Vue.js, PHP, MySQL, IoT",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "link",
					children: "Project Link"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "link",
					value: link,
					onChange: (e) => setLink(e.target.value),
					placeholder: "https://..."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 justify-end pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: onCancel,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					children: [initial?.title ? "Update" : "Add", " Project"]
				})]
			})
		]
	});
}
function ProjectManager({ projects, onAdd, onUpdate, onDelete, canEdit = false }) {
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const editingProject = projects.find((p) => p.id === editingId);
	const handleAdd = (data) => {
		onAdd(data);
		setDialogOpen(false);
	};
	const handleUpdate = (data) => {
		if (editingId) {
			onUpdate(editingId, data);
			setEditingId(null);
			setDialogOpen(false);
		}
	};
	const startEdit = (project) => {
		setEditingId(project.id);
		setDialogOpen(true);
	};
	const startAdd = () => {
		setEditingId(null);
		setDialogOpen(true);
	};
	const handleCancel = () => {
		setEditingId(null);
		setDialogOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4 flex-wrap mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-2 animate-fade-in",
				children: "06 — Projects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl sm:text-4xl font-bold tracking-tight text-gradient animate-fade-up",
				children: "Things I've built"
			})] }), canEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: startAdd,
						size: "sm",
						className: "rounded-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1" }), "Add Project"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingProject ? "Edit Project" : "Add New Project" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectForm, {
						initial: editingProject,
						onSubmit: editingProject ? handleUpdate : handleAdd,
						onCancel: handleCancel
					}, editingProject?.id ?? "new")]
				})]
			})]
		}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-dashed border-border/60 p-12 text-center bg-card/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "mx-auto h-10 w-10 text-muted-foreground mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: canEdit ? "No projects yet. Click Add Project to get started." : "No projects to show yet."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "group flex flex-col hover-glow border-border/60 overflow-hidden animate-fade-up",
				style: { animationDelay: `${.05 + i * .08}s` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					className: "pb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
						className: "text-lg leading-tight flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line-clamp-2",
							children: project.title
						}), canEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-7 w-7",
								onClick: () => startEdit(project),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Edit"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-7 w-7 text-destructive hover:text-destructive",
								onClick: () => onDelete(project.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Delete"
								})]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex-1 flex flex-col gap-3 pt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground line-clamp-3",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5 mt-auto",
							children: project.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "text-xs",
								children: tech
							}, tech))
						}),
						project.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.link,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1",
							children: ["View Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
						})
					]
				})]
			}, project.id))
		})]
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function uid(prefix) {
	return `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
}
function SkillsEditor({ label, values, onChange }) {
	const [input, setInput] = (0, import_react.useState)("");
	const add = () => {
		const v = input.trim();
		if (!v) return;
		if (values.includes(v)) return;
		onChange([...values, v]);
		setInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5 rounded-md border bg-muted/30 p-2 min-h-12",
				children: values.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "secondary",
					className: "gap-1",
					children: [s, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onChange(values.filter((x) => x !== s)),
						className: "hover:text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
					})]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: input,
					onChange: (e) => setInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							add();
						}
					},
					placeholder: "Type and press Enter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: add,
					variant: "outline",
					children: "Add"
				})]
			})
		]
	});
}
function ProfileEditor({ profile, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const handleAvatar = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 2 * 1024 * 1024) {
			toast.error("Image is too large (max 2MB)");
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			onChange({ avatar: String(reader.result) });
			toast.success("Profile picture updated");
		};
		reader.readAsDataURL(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "outline",
				className: "gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-3.5 w-3.5" }), "Edit Profile"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-2xl max-h-[90vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Profile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Changes are saved automatically to your browser." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "basic",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "grid w-full grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "basic",
								children: "Basic"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "about",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "skills",
								children: "Skills"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "exp",
								children: "Experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "edu",
								children: "Education"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "basic",
						className: "space-y-4 pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-20 w-20 rounded-full overflow-hidden border bg-muted flex items-center justify-center text-xl font-bold",
									children: profile.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: profile.avatar,
										alt: "",
										className: "h-full w-full object-cover"
									}) : profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: fileRef,
											type: "file",
											accept: "image/*",
											hidden: true,
											onChange: handleAvatar
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											size: "sm",
											variant: "outline",
											onClick: () => fileRef.current?.click(),
											className: "gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }), "Upload picture"]
										}),
										profile.avatar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											size: "sm",
											variant: "ghost",
											onClick: () => onChange({ avatar: "" }),
											className: "gap-1.5 text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), "Remove"]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: profile.name,
										onChange: (e) => onChange({ name: e.target.value })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title / Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: profile.title,
										onChange: (e) => onChange({ title: e.target.value })
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tagline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 2,
									value: profile.tagline,
									onChange: (e) => onChange({ tagline: e.target.value })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: profile.email,
											onChange: (e) => onChange({ email: e.target.value })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: profile.phone,
											onChange: (e) => onChange({ phone: e.target.value })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: profile.location,
											onChange: (e) => onChange({ location: e.target.value })
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "about",
						className: "space-y-3 pt-4",
						children: [
							"gender",
							"nationality",
							"dob",
							"address",
							"languages"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "capitalize",
								children: k === "dob" ? "Date of Birth" : k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: profile.about[k],
								onChange: (e) => onChange({ about: {
									...profile.about,
									[k]: e.target.value
								} })
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "skills",
						className: "space-y-5 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsEditor, {
							label: "Hard Skills",
							values: profile.hardSkills,
							onChange: (v) => onChange({ hardSkills: v })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsEditor, {
							label: "Soft Skills",
							values: profile.softSkills,
							onChange: (v) => onChange({ softSkills: v })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "exp",
						className: "space-y-3 pt-4",
						children: [profile.experiences.map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "p-4 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-medium text-muted-foreground",
										children: ["Experience #", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "icon",
										variant: "ghost",
										className: "h-7 w-7 text-destructive",
										onClick: () => onChange({ experiences: profile.experiences.filter((e) => e.id !== exp.id) }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Period",
											value: exp.period,
											onChange: (e) => onChange({ experiences: profile.experiences.map((x) => x.id === exp.id ? {
												...x,
												period: e.target.value
											} : x) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Title",
											value: exp.title,
											onChange: (e) => onChange({ experiences: profile.experiences.map((x) => x.id === exp.id ? {
												...x,
												title: e.target.value
											} : x) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Company",
											value: exp.company,
											onChange: (e) => onChange({ experiences: profile.experiences.map((x) => x.id === exp.id ? {
												...x,
												company: e.target.value
											} : x) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Location",
											value: exp.location,
											onChange: (e) => onChange({ experiences: profile.experiences.map((x) => x.id === exp.id ? {
												...x,
												location: e.target.value
											} : x) })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 3,
									placeholder: "One bullet per line",
									value: exp.bullets.join("\n"),
									onChange: (e) => onChange({ experiences: profile.experiences.map((x) => x.id === exp.id ? {
										...x,
										bullets: e.target.value.split("\n")
									} : x) })
								})
							]
						}) }, exp.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "w-full gap-1.5",
							onClick: () => {
								onChange({ experiences: [{
									id: uid("exp"),
									period: "",
									title: "",
									company: "",
									location: "",
									bullets: []
								}, ...profile.experiences] });
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Add Experience"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "edu",
						className: "space-y-5 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold",
									children: "Education"
								}),
								profile.education.map((edu, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-medium text-muted-foreground",
											children: ["#", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											size: "icon",
											variant: "ghost",
											className: "h-7 w-7 text-destructive",
											onClick: () => onChange({ education: profile.education.filter((e) => e.id !== edu.id) }),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"period",
											"degree",
											"school",
											"location"
										].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: k,
											value: edu[k],
											onChange: (e) => onChange({ education: profile.education.map((x) => x.id === edu.id ? {
												...x,
												[k]: e.target.value
											} : x) })
										}, k))
									})]
								}) }, edu.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									className: "w-full gap-1.5",
									onClick: () => {
										onChange({ education: [{
											id: uid("edu"),
											period: "",
											degree: "",
											school: "",
											location: ""
										}, ...profile.education] });
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Add Education"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 pt-2 border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold pt-3",
									children: "References"
								}),
								profile.references.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-medium text-muted-foreground",
											children: ["#", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											size: "icon",
											variant: "ghost",
											className: "h-7 w-7 text-destructive",
											onClick: () => onChange({ references: profile.references.filter((x) => x.id !== r.id) }),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid sm:grid-cols-2 gap-2",
										children: [
											"name",
											"position",
											"tel",
											"email"
										].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: k,
											value: r[k],
											onChange: (e) => onChange({ references: profile.references.map((x) => x.id === r.id ? {
												...x,
												[k]: e.target.value
											} : x) })
										}, k))
									})]
								}) }, r.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									className: "w-full gap-1.5",
									onClick: () => {
										onChange({ references: [{
											id: uid("ref"),
											name: "",
											position: "",
											tel: "",
											email: ""
										}, ...profile.references] });
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Add Reference"]
								})
							]
						})]
					})
				]
			})]
		})]
	});
}
function AdminBar() {
	const { isAdmin, hasPassword, setPassword, login, logout } = useAdmin();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [pwd, setPwd] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setBusy(true);
		try {
			if (!hasPassword) {
				if (pwd.length < 4) {
					toast.error("Password must be at least 4 characters");
					return;
				}
				if (pwd !== confirm) {
					toast.error("Passwords don't match");
					return;
				}
				await setPassword(pwd);
				toast.success("Admin password set — you're in edit mode");
				setOpen(false);
			} else if (await login(pwd)) {
				toast.success("Welcome back, edit mode enabled");
				setOpen(false);
			} else toast.error("Incorrect password");
			setPwd("");
			setConfirm("");
		} finally {
			setBusy(false);
		}
	};
	if (isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "outline",
		size: "sm",
		onClick: () => {
			logout();
			toast.success("Logged out of edit mode");
		},
		className: "gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-emerald-500" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Editing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5 opacity-60" })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		onClick: () => setOpen(true),
		className: "gap-1.5 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: "Admin"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4" }), hasPassword ? "Admin Login" : "Set Admin Password"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: hasPassword ? "Enter your password to unlock edit mode." : "Create a password to protect your profile from edits." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "pwd",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pwd",
							type: "password",
							value: pwd,
							onChange: (e) => setPwd(e.target.value),
							autoFocus: true,
							required: true
						})]
					}),
					!hasPassword && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "confirm",
							children: "Confirm password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "confirm",
							type: "password",
							value: confirm,
							onChange: (e) => setConfirm(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: busy,
						children: hasPassword ? "Unlock" : "Set password & unlock"
					})
				]
			})]
		})
	})] });
}
function useScrollReveal() {
	const ref = (0, import_react.useRef)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setRevealed(true);
				observer.unobserve(el);
			}
		}, { threshold: .1 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return {
		ref,
		revealed
	};
}
function RevealSection({ children, className = "" }) {
	const { ref, revealed } = useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `section-reveal ${revealed ? "revealed" : ""} ${className}`,
		children
	});
}
function useScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return progress;
}
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("portfolio-theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initial = stored || (prefersDark ? "dark" : "light");
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const toggle = () => {
		const next = theme === "light" ? "dark" : "light";
		setTheme(next);
		localStorage.setItem("portfolio-theme", next);
		document.documentElement.classList.toggle("dark", next === "dark");
	};
	return {
		theme,
		toggle
	};
}
var aboutFields = [
	{
		label: "Name",
		icon: "👤"
	},
	{
		label: "Gender",
		icon: "⚧"
	},
	{
		label: "Nationality",
		icon: "🌍"
	},
	{
		label: "Date of Birth",
		icon: "🎂"
	},
	{
		label: "Address",
		icon: "📍"
	},
	{
		label: "Languages",
		icon: "🗣"
	}
];
function NavLink({ href, children }) {
	const handleClick = (e) => {
		e.preventDefault();
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		onClick: handleClick,
		className: "relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full",
		children
	});
}
function SectionHeader({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between mb-8 gap-4 flex-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.25em] mb-2 animate-fade-in",
			style: { color: "var(--primary)" },
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl sm:text-4xl font-bold tracking-tight text-gradient animate-fade-up",
			children: title
		})] }), children]
	});
}
function DecorativeOrbs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-grid absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl animate-float",
				style: { background: "var(--primary)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl animate-float",
				style: {
					background: "var(--primary)",
					animationDelay: "2s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-3xl animate-float",
				style: {
					background: "var(--primary)",
					animationDelay: "4s"
				}
			})
		]
	});
}
function TypingText({ text, delay = 0 }) {
	const [displayed, setDisplayed] = (0, import_react.useState)("");
	const [started, setStarted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setStarted(true), delay * 1e3);
		return () => clearTimeout(timer);
	}, [delay]);
	(0, import_react.useEffect)(() => {
		if (!started) return;
		let i = 0;
		const interval = setInterval(() => {
			setDisplayed(text.slice(0, i + 1));
			i++;
			if (i >= text.length) clearInterval(interval);
		}, 40);
		return () => clearInterval(interval);
	}, [started, text]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [displayed, displayed.length < text.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block w-[2px] h-[1em] ml-0.5 animate-pulse",
		style: { background: "var(--primary)" }
	})] });
}
function Index() {
	const { projects, addProject, updateProject, deleteProject } = useLocalProjects();
	const { profile, update } = useProfile();
	const { isAdmin } = useAdmin();
	const { theme, toggle } = useTheme();
	const scrollProgress = useScrollProgress();
	const initials = profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
	const fieldValue = (label) => {
		switch (label) {
			case "Name": return profile.name;
			case "Gender": return profile.about.gender;
			case "Nationality": return profile.about.nationality;
			case "Date of Birth": return profile.about.dob;
			case "Address": return profile.about.address;
			case "Languages": return profile.about.languages;
			default: return "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scroll-progress-bar",
					style: { width: `${scrollProgress * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeOrbs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "sticky top-0 z-40 w-full border-b border-border/40 glass-strong animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "flex items-center gap-2 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground text-xs font-bold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform",
								children: initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-tight",
								children: profile.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
									href: "#about",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
									href: "#skills",
									children: "Skills"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
									href: "#experience",
									children: "Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
									href: "#education",
									children: "Education"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
									href: "#projects",
									children: "Projects"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
									href: "#contact",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggle,
								className: "h-8 w-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground hover:text-foreground transition-all",
								"aria-label": "Toggle theme",
								children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBar, {})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-[1fr_auto] items-center gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "animate-fade-up inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2 w-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
										}), "Available for opportunities"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up",
										style: { animationDelay: "0.1s" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: profile.name
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl sm:text-2xl font-medium text-muted-foreground animate-fade-up min-h-[2rem]",
										style: { animationDelay: "0.2s" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingText, {
											text: profile.title,
											delay: .5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base text-muted-foreground max-w-xl leading-relaxed animate-fade-up",
										style: { animationDelay: "0.3s" },
										children: profile.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-3 pt-2 animate-fade-up",
										style: { animationDelay: "0.4s" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `mailto:${profile.email}`,
												className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all",
												children: ["Get in touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#projects",
												className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium hover:bg-accent transition-colors",
												children: "View projects"
											}),
											isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileEditor, {
												profile,
												onChange: update
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 pt-2 animate-fade-up",
										style: { animationDelay: "0.5s" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												className: "text-muted-foreground hover:text-foreground transition-colors",
												"aria-label": "GitHub",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												className: "text-muted-foreground hover:text-foreground transition-colors",
												"aria-label": "LinkedIn",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												className: "text-muted-foreground hover:text-foreground transition-colors",
												"aria-label": "Twitter",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-5 w-5" })
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative animate-scale-in justify-self-center",
								style: { animationDelay: "0.2s" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "avatar-ring",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-2xl animate-gradient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-56 w-56 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-4 ring-background shadow-2xl shadow-primary/20",
										children: profile.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: profile.avatar,
											alt: profile.name,
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full w-full grid place-items-center bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-7xl font-bold",
											children: initials
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-2 -right-2 rounded-2xl border border-border/60 bg-card px-4 py-2 shadow-lg flex items-center gap-2 text-xs animate-fade-up",
									style: { animationDelay: "0.6s" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "Open to work"
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 animate-fade-up",
									style: { animationDelay: "0.4s" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), profile.location]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 animate-fade-up",
									style: { animationDelay: "0.45s" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), profile.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${profile.email}`,
									className: "inline-flex items-center gap-2 hover:text-foreground transition-colors animate-fade-up",
									style: { animationDelay: "0.5s" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), profile.email]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center mt-20 animate-fade-up",
							style: { animationDelay: "0.8s" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-2 text-muted-foreground/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-widest uppercase",
									children: "Scroll"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "about",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "01 — About",
							title: "A bit about me"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "card-border-hover overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "p-8 grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm",
								children: aboutFields.map(({ label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 border-b border-border/40 py-3 animate-fade-up",
									style: { animationDelay: `${.1 + i * .08}s` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center text-lg shrink-0",
										children: aboutFields[i].icon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-wider text-muted-foreground",
											children: label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium truncate",
											children: fieldValue(label)
										})]
									})]
								}, label))
							})
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "skills",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "02 — Skills",
							title: "What I work with"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "card-border-hover overflow-hidden relative animate-fade-in-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 space-y-4 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-lg font-semibold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid place-items-center h-9 w-9 rounded-xl bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-4 w-4" })
										}), "Hard Skills"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: profile.hardSkills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "text-xs py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-default badge-hover animate-scale-in skill-tag",
											style: { animationDelay: `${.1 + i * .04}s` },
											children: skill
										}, skill))
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "card-border-hover overflow-hidden relative animate-fade-in-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 space-y-4 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-lg font-semibold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid place-items-center h-9 w-9 rounded-xl bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
										}), "Soft Skills"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5 text-sm",
										children: profile.softSkills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2 group animate-fade-up",
											style: { animationDelay: `${.1 + i * .08}s` },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-6 w-6 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })
											}), skill]
										}, skill))
									})]
								})]
							})]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "experience",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "03 — Experience",
							title: "Where I've worked"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border",
							children: profile.experiences.map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative group animate-fade-up",
								style: { animationDelay: `${.1 + i * .15}s` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-6 sm:-left-8 top-7 h-3 w-3 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/40 group-hover:scale-125 transition-transform timeline-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									className: "card-border-hover",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap items-center gap-2 mb-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), exp.period]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-lg",
												children: exp.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-muted-foreground mb-3",
												children: [exp.company, exp.location && ` — ${exp.location}`]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1.5",
												children: exp.bullets.filter(Boolean).map((bullet, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "text-sm text-muted-foreground flex items-start gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" }), bullet]
												}, j))
											})
										]
									})
								})]
							}, exp.id))
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "education",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "04 — Education",
							title: "Academic background"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: profile.education.map((edu, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "card-border-hover animate-fade-up",
								style: { animationDelay: `${.1 + i * .12}s` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-5 flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary mb-2",
												children: edu.period
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm leading-tight",
												children: edu.degree
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-muted-foreground mt-1",
												children: [edu.school, edu.location && `, ${edu.location}`]
											})
										]
									})]
								})
							}, edu.id))
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "projects",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectManager, {
							projects,
							onAdd: addProject,
							onUpdate: updateProject,
							onDelete: deleteProject,
							canEdit: isAdmin
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "contact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "05 — References",
							title: "People who know my work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: profile.references.map((ref, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "card-border-hover animate-fade-up",
								style: { animationDelay: `${.1 + i * .12}s` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6 space-y-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-base",
											children: ref.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: ref.position
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2 space-y-1.5 text-xs text-muted-foreground border-t border-border/40 mt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "pt-2 flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3 text-primary shrink-0" }), ref.tel]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `mailto:${ref.email}`,
													className: "text-primary hover:underline",
													children: ref.email
												})]
											})]
										})
									]
								})
							}, ref.id))
						})]
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground text-[10px] font-bold",
										children: initials
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: profile.name
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed",
									children: profile.tagline
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground mb-2",
									children: "Quick links"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-1.5",
									children: [
										"About",
										"Skills",
										"Experience",
										"Education",
										"Projects",
										"Contact"
									].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `#${link.toLowerCase()}`,
										className: "hover:text-foreground transition-colors",
										children: link
									}, link))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground mb-2",
									children: "Connect"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "h-9 w-9 rounded-lg border border-border grid place-items-center hover:bg-accent hover:text-foreground transition-all",
											"aria-label": "GitHub",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "h-9 w-9 rounded-lg border border-border grid place-items-center hover:bg-accent hover:text-foreground transition-all",
											"aria-label": "LinkedIn",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "h-9 w-9 rounded-lg border border-border grid place-items-center hover:bg-accent hover:text-foreground transition-all",
											"aria-label": "Twitter",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-4 w-4" })
										})
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border/40 mt-8 pt-8 text-center text-xs text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							profile.name,
							". All rights reserved."
						] })
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
