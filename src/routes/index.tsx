import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Users,
  ChevronRight,
  GraduationCap,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import { useLocalProjects } from "@/hooks/use-local-projects";
import { useProfile } from "@/hooks/use-profile";
import { useAdmin } from "@/lib/admin-context";
import { ProjectManager } from "@/components/ProjectManager";
import { ProfileEditor } from "@/components/ProfileEditor";
import { AdminBar } from "@/components/AdminBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, revealed };
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div ref={ref} className={`section-reveal ${revealed ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
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
  return { theme, toggle };
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chan Piseth | IT Support Specialist & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Chan Piseth — IT Support Specialist, Full-Stack Developer, and IoT enthusiast based in Cambodia.",
      },
    ],
  }),
  component: Index,
});

const aboutFields = [
  { label: "Name", icon: "👤" },
  { label: "Gender", icon: "⚧" },
  { label: "Nationality", icon: "🌍" },
  { label: "Date of Birth", icon: "🎂" },
  { label: "Address", icon: "📍" },
  { label: "Languages", icon: "🗣" },
] as const;

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-2 animate-fade-in"
           style={{ color: "var(--primary)" }}>
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient animate-fade-up">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function DecorativeOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-noise">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl animate-float"
           style={{ background: "var(--primary)" }} />
      <div
        className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl animate-float"
        style={{ background: "var(--primary)", animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-3xl animate-float"
        style={{ background: "var(--primary)", animationDelay: "4s" }}
      />
    </div>
  );
}

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] ml-0.5 animate-pulse"
              style={{ background: "var(--primary)" }} />
      )}
    </span>
  );
}

function Index() {
  const { projects, addProject, updateProject, deleteProject } = useLocalProjects();
  const { profile, update } = useProfile();
  const { isAdmin } = useAdmin();
  const { theme, toggle } = useTheme();
  const scrollProgress = useScrollProgress();

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const fieldValue = (label: string) => {
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

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      <DecorativeOrbs />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b border-border/40 glass-strong animate-fade-in">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground text-xs font-bold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              {initials}
            </div>
            <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="h-8 w-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground hover:text-foreground transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <AdminBar />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div className="space-y-7">
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <span className="text-gradient">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground animate-fade-up min-h-[2rem]" style={{ animationDelay: "0.2s" }}>
                <TypingText text={profile.title} delay={0.5} />
              </p>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
                {profile.tagline}
              </p>
              <div className="flex flex-wrap gap-3 pt-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
                >
                  View projects
                </a>
                {isAdmin && <ProfileEditor profile={profile} onChange={update} />}
              </div>
              <div className="flex items-center gap-4 pt-2 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div
              className="relative animate-scale-in justify-self-center"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="avatar-ring">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-2xl animate-gradient" />
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-4 ring-background shadow-2xl shadow-primary/20">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-7xl font-bold">
                      {initials}
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-2xl border border-border/60 bg-card px-4 py-2 shadow-lg flex items-center gap-2 text-xs animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium">Open to work</span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <Phone className="h-4 w-4 text-primary" />
              {profile.phone}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-20 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {/* About */}
        <RevealSection>
          <section id="about">
            <SectionHeader eyebrow="01 — About" title="A bit about me" />
            <Card className="card-border-hover overflow-hidden">
              <CardContent className="p-8 grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                {aboutFields.map(({ label }, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 border-b border-border/40 py-3 animate-fade-up"
                    style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                  >
                    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center text-lg shrink-0">
                      {aboutFields[i].icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="font-medium truncate">{fieldValue(label)}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </RevealSection>

        {/* Skills */}
        <RevealSection>
          <section id="skills">
            <SectionHeader eyebrow="02 — Skills" title="What I work with" />
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="card-border-hover overflow-hidden relative animate-fade-in-left">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <CardContent className="p-6 space-y-4 relative">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary/10 text-primary">
                      <Code2 className="h-4 w-4" />
                    </span>
                    Hard Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.hardSkills.map((skill, i) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-default badge-hover animate-scale-in skill-tag"
                        style={{ animationDelay: `${0.1 + i * 0.04}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="card-border-hover overflow-hidden relative animate-fade-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <CardContent className="p-6 space-y-4 relative">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary/10 text-primary">
                      <Users className="h-4 w-4" />
                    </span>
                    Soft Skills
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    {profile.softSkills.map((skill, i) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 group animate-fade-up"
                        style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                      >
                        <span className="h-6 w-6 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ChevronRight className="h-3 w-3" />
                        </span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </RevealSection>

        {/* Experience */}
        <RevealSection>
          <section id="experience">
            <SectionHeader eyebrow="03 — Experience" title="Where I've worked" />
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
              {profile.experiences.map((exp, i) => (
                <div key={exp.id} className="relative group animate-fade-up" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
                  <div className="absolute -left-6 sm:-left-8 top-7 h-3 w-3 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/40 group-hover:scale-125 transition-transform timeline-dot" />
                  <Card className="card-border-hover">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.company}{exp.location && ` — ${exp.location}`}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.bullets.filter(Boolean).map((bullet, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <ChevronRight className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* Education */}
        <RevealSection>
          <section id="education">
            <SectionHeader eyebrow="04 — Education" title="Academic background" />
            <div className="grid gap-5 sm:grid-cols-2">
              {profile.education.map((edu, i) => (
                <Card
                  key={edu.id}
                  className="card-border-hover animate-fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                >
                  <CardContent className="p-5 flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-flex text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary mb-2">
                        {edu.period}
                      </span>
                      <h3 className="font-semibold text-sm leading-tight">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.school}{edu.location && `, ${edu.location}`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* Projects */}
        <RevealSection>
          <section id="projects">
            <ProjectManager
              projects={projects}
              onAdd={addProject}
              onUpdate={updateProject}
              onDelete={deleteProject}
              canEdit={isAdmin}
            />
          </section>
        </RevealSection>

        {/* References / Contact */}
        <RevealSection>
          <section id="contact">
            <SectionHeader eyebrow="05 — References" title="People who know my work" />
            <div className="grid gap-5 sm:grid-cols-2">
              {profile.references.map((ref, i) => (
                <Card
                  key={ref.id}
                  className="card-border-hover animate-fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                >
                  <CardContent className="p-6 space-y-2 text-sm">
                    <h3 className="font-semibold text-base">{ref.name}</h3>
                    <p className="text-muted-foreground">{ref.position}</p>
                    <div className="pt-2 space-y-1.5 text-xs text-muted-foreground border-t border-border/40 mt-3">
                      <p className="pt-2 flex items-center gap-2">
                        <Phone className="h-3 w-3 text-primary shrink-0" />
                        {ref.tel}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-primary shrink-0" />
                        <a
                          href={`mailto:${ref.email}`}
                          className="text-primary hover:underline"
                        >
                          {ref.email}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </RevealSection>
      </main>

      <footer className="border-t border-border/40 mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground text-[10px] font-bold">
                  {initials}
                </div>
                <span className="font-semibold text-foreground">{profile.name}</span>
              </div>
              <p className="text-xs leading-relaxed">{profile.tagline}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground mb-2">Quick links</p>
              <div className="flex flex-col gap-1.5">
                {["About", "Skills", "Experience", "Education", "Projects", "Contact"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground mb-2">Connect</p>
              <div className="flex gap-3">
                <a href="#" className="h-9 w-9 rounded-lg border border-border grid place-items-center hover:bg-accent hover:text-foreground transition-all" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-lg border border-border grid place-items-center hover:bg-accent hover:text-foreground transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-lg border border-border grid place-items-center hover:bg-accent hover:text-foreground transition-all" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
