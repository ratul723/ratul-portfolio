import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
  Download,
  Code2,
  Cloud,
  Boxes,
  Activity,
  Server,
  Database,
  Workflow,
  Terminal,
  GraduationCap,
  BriefcaseBusiness,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const cvUrl = "/Radwanul-Habib-Ratul-CV.pdf";

const projects = [
  {
    number: "01",
    category: "CLOUD · DEVOPS",
    title: "Containerized Web App on AWS",
    description:
      "Built and deployed a small-scale web application with Docker on an AWS EC2 instance, configuring networking, security groups, and environment settings.",
    stack: ["Docker", "AWS EC2", "Networking"],
    icon: Cloud,
    accent: "blue",
  },
  {
    number: "02",
    category: "AUTOMATION · CI/CD",
    title: "Node.js CI/CD Pipeline",
    description:
      "Automated build, test, and deployment stages for a Node.js application to support repeatable integration and continuous delivery.",
    stack: ["Node.js", "CI/CD", "Git"],
    icon: Workflow,
    accent: "mint",
  },
  {
    number: "03",
    category: "CONTAINERS · DATABASE",
    title: "MongoDB with Docker",
    description:
      "Ran MongoDB in a container with persistent storage and connected it to application services using Docker networking.",
    stack: ["Docker", "MongoDB", "Volumes"],
    icon: Database,
    accent: "violet",
  },
  {
    number: "04",
    category: "ORCHESTRATION",
    title: "Multi-Container App on Minikube",
    description:
      "Deployed multiple interconnected services with Kubernetes manifests and exposed them through Minikube for local testing.",
    stack: ["Kubernetes", "Minikube", "YAML"],
    icon: Boxes,
    accent: "blue",
  },
  {
    number: "05",
    category: "OBSERVABILITY",
    title: "Kubernetes Monitoring",
    description:
      "Set up Prometheus metrics collection and Grafana dashboards to visualize cluster health, performance, and resource trends.",
    stack: ["Prometheus", "Grafana", "Kubernetes"],
    icon: Activity,
    accent: "mint",
  },
  {
    number: "06",
    category: "SALESFORCE · APPLICATION",
    title: "Simple Accounting on Salesforce",
    description:
      "Developed a native accounting application with a unified Lightning Web Component shell, finance dashboard, report center, and multi-workspace navigation.",
    stack: ["Salesforce", "LWC", "Apex"],
    icon: Code2,
    accent: "violet",
  },
  {
    number: "07",
    category: "SALESFORCE · EXPERIENCE CLOUD",
    title: "Event Ticketing Platform",
    description:
      "Built an Experience Cloud event portal with Lead conversion and a secure customer purchase portal, including payment and review workflows.",
    stack: ["Experience Cloud", "Apex", "LWC"],
    icon: BriefcaseBusiness,
    accent: "blue",
  },
  {
    number: "08",
    category: "INTEGRATION · API",
    title: "Salesforce API Integrations",
    description:
      "Worked with third-party integrations including Stripe Checkout with server-side payment verification, Open-Meteo weather, and OpenStreetMap.",
    stack: ["REST APIs", "Stripe", "Apex"],
    icon: Workflow,
    accent: "mint",
  },
];

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "AWS EC2",
      "AWS VPC",
      "AWS S3",
      "AWS IAM",
      "Linux",
      "Windows Server",
    ],
  },
  {
    title: "DevOps & Containers",
    icon: Boxes,
    items: ["Docker", "Kubernetes", "Minikube", "Kind", "Kubeadm", "CI/CD"],
  },
  {
    title: "Automation & Development",
    icon: Terminal,
    items: ["Python", "Bash", "JavaScript", "Apex", "HTML", "CSS"],
  },
  {
    title: "Monitoring & Data",
    icon: Activity,
    items: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "PostgreSQL",
      "MySQL",
      "Git / GitHub",
    ],
  },
  {
    title: "Salesforce Platform",
    icon: Code2,
    items: [
      "Lightning Web Components",
      "Apex",
      "SOQL",
      "Salesforce CLI",
      "Permission Sets",
      "Experience Cloud",
    ],
  },
];

const experiences = [
  {
    period: "AUG 2026 — OCT 2026",
    role: "Software Engineer Intern · Salesforce",
    company: "Twinforce Solution",
    points: [
      "Developed a native accounting application with a finance dashboard, report center, and multi-workspace navigation.",
      "Built an Experience Cloud event-ticketing application with public event discovery, Lead conversion, and a secure purchase portal.",
      "Created Lightning Web Components and bulkified Apex for forms, review flows, and payments; wrote test classes meeting the 75% coverage requirement.",
      "Integrated Stripe Checkout with server-side payment verification, Open-Meteo, and OpenStreetMap, with graceful failure handling.",
      "Applied permission sets, custom permissions, guest-user lockdown, and Sharing Sets; managed releases using Salesforce CLI and Git.",
    ],
    tags: ["Salesforce", "LWC", "Apex", "REST APIs", "Git"],
  },
  {
    period: "FEB 2026 — MAY 2026",
    role: "DevOps Intern · DTI Division",
    company: "UCB Bank PLC",
    points: [
      "Automated infrastructure deployments with custom Shell and Python scripts to reduce manual configuration and human error.",
      "Configured and troubleshot Kubernetes deployments, services, and networking across multiple virtual machines.",
      "Used Minikube and Kind for local development and testing before deploying to Kubeadm-managed multi-node clusters.",
      "Implemented monitoring and alerting with Prometheus, Grafana, and the ELK Stack.",
      "Configured HAProxy, Nginx, and Apache; administered Linux systems, LVM storage, and network settings.",
    ],
    tags: ["Linux", "Kubernetes", "Python", "Bash", "Prometheus"],
  },
];

const education = [
  {
    period: "MAR 2020 — SEP 2025",
    degree: "BSc in Software Engineering",
    school: "Daffodil International University",
    detail: "Dhaka, Bangladesh · CGPA 3.30 / 4.00",
  },
  {
    period: "JUN 2017 — JUL 2019",
    degree: "Higher Secondary Certificate · Science",
    school: "Milestone School",
    detail: "Dhaka, Bangladesh · GPA 4.63 / 5.00",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="muted mt-4 leading-7">{description}</p>}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("ratul-theme");
    return saved ? saved === "dark" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("ratul-theme", dark ? "dark" : "light");
  }, [dark]);

  const navItems = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-page text-main transition-colors duration-300">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <nav className="container-shell flex h-20 items-center justify-between">
          <a href="#home" className="brand" aria-label="Ratul home">
            <span className="brand-mark">R</span>
            <span>RADWANUL HABIB RATUL</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a className="nav-link" href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Toggle color theme"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              className="button button-small hidden sm:inline-flex"
              href={cvUrl}
              download
            >
              Download CV <Download size={15} />
            </a>
            <button
              className="theme-toggle md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section container-shell">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="availability">
                <span className="pulse-dot" /> SOFTWARE ENGINEER · OPEN TO
                OPPORTUNITIES
              </div>
              <h1>
                Building reliable
                <br />
                <span className="gradient-text">software & systems.</span>
              </h1>
              <p className="hero-description">
                I’m <strong>Radwanul Habib Ratul</strong> — a software engineer
                interested in building useful applications, automating
                infrastructure, and delivering dependable cloud-native
                solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="button">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a href="#contact" className="button button-quiet">
                  Let's connect <ArrowRight size={16} />
                </a>
              </div>
              <div className="hero-socials">
                <a
                  href="https://github.com/ratul723"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/radwanul-habib-ratul-75b76b240/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>
                <a href="mailto:ratul32742@gmail.com">
                  <Mail size={17} /> Email
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="hero-code-card">
              <div className="code-top">
                <span />
                <span />
                <span />
                <small>ratul.config.js</small>
              </div>
              <div className="code-content">
                <p>
                  <span className="code-purple">const</span> engineer = {"{"}
                </p>
                <p className="indent">
                  <span className="code-blue">name</span>:{" "}
                  <span className="code-green">'Ratul'</span>,
                </p>
                <p className="indent">
                  <span className="code-blue">focus</span>: [
                </p>
                <p className="indent2">
                  <span className="code-green">'Full-stack'</span>,
                </p>
                <p className="indent2">
                  <span className="code-green">'DevOps'</span>,
                </p>
                <p className="indent2">
                  <span className="code-green">'Cloud'</span>
                </p>
                <p className="indent">],</p>
                <p className="indent">
                  <span className="code-blue">mindset</span>:{" "}
                  <span className="code-green">'Always learning'</span>
                </p>
                <p>{"};"}</p>
                <p className="code-comment">
                  // turning ideas into working systems
                </p>
              </div>
            </div>
            <div className="float-chip chip-top">
              <Cloud size={16} /> Cloud & DevOps
            </div>
            <div className="float-chip chip-bottom">
              <Code2 size={16} /> Software Engineering
            </div>
            <div className="hero-orb">
              <Terminal size={48} strokeWidth={1.2} />
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section id="about" className="section container-shell">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="Curious by nature. Builder by practice."
            description="My experience spans cloud infrastructure, DevOps automation, and Salesforce application development. I enjoy understanding how systems work end to end — from the code and data to deployment, monitoring, and security."
          />
          <div className="about-grid">
            <div className="about-panel">
              <div className="about-icon">
                <Code2 size={22} />
              </div>
              <h3>Engineering with a systems mindset</h3>
              <p className="muted leading-7">
                I bring together software development and infrastructure
                knowledge to build applications that are maintainable,
                observable, and ready to run. I value clear problem-solving,
                collaboration, and continuous learning.
              </p>
              <div className="location-line">
                <MapPin size={16} /> Dhaka, Bangladesh
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">02</span>
                <span className="stat-label">Internship experiences</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">08</span>
                <span className="stat-label">Featured projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">05+</span>
                <span className="stat-label">Technical skill areas</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2025</span>
                <span className="stat-label">
                  Software Engineering graduate
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-tint">
          <div className="container-shell">
            <SectionHeading
              eyebrow="02 / EXPERIENCE"
              title="Where I've put skills into practice."
              description="Hands-on internship experience across enterprise DevOps environments and Salesforce application engineering."
            />
            <div className="timeline">
              {experiences.map((job, i) => (
                <motion.article
                  className="timeline-item"
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="timeline-marker">
                    <span />
                  </div>
                  <div className="experience-card">
                    <div className="experience-meta">
                      <span>{job.period}</span>
                      <span className="experience-type">INTERNSHIP</span>
                    </div>
                    <h3>{job.role}</h3>
                    <p className="company-name">{job.company}</p>
                    <ul className="achievement-list">
                      {job.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={15} /> <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="tag-row">
                      {job.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container-shell">
          <SectionHeading
            eyebrow="03 / TOOLKIT"
            title="Technologies I work with."
            description="A practical toolkit built through project work and internship experience. Skill levels are intentionally not represented as ratings."
          />
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="skill-heading">
                  <div className="skill-icon">
                    <group.icon size={19} />
                  </div>
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-tint">
          <div className="container-shell">
            <SectionHeading
              eyebrow="04 / SELECTED WORK"
              title="Projects that turn concepts into practice."
              description="A selection of DevOps, cloud, monitoring, and Salesforce work described in my CV. Project repository links can be added as they are published."
            />
            <div className="projects-grid">
              {projects.map((project, i) => (
                <motion.article
                  className={`project-card accent-${project.accent}`}
                  key={project.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                >
                  <div className="project-top">
                    <span className="project-number">
                      {project.number} / 08
                    </span>
                    <div className="project-icon">
                      <project.icon size={21} />
                    </div>
                  </div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section container-shell">
          <SectionHeading eyebrow="05 / EDUCATION" title="The foundation." />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>
                <p className="eyebrow">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="company-name">{item.school}</p>
                <p className="muted text-sm">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="activities-note">
            <span className="activity-symbol">✳</span>
            <p>
              <strong>Beyond coursework</strong>
              <br />
              <span className="muted">
                General Member, Software Engineering Club · Executive, Data
                Science Club · OS, DIU Film Society
              </span>
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container-shell">
            <div className="contact-panel">
              <div className="contact-glow" />
              <p className="eyebrow">06 / GET IN TOUCH</p>
              <h2>
                Have a project or opportunity
                <br />
                <span className="gradient-text">in mind?</span>
              </h2>
              <p className="muted contact-copy">
                I’m interested in connecting with teams and people building
                thoughtful software, cloud platforms, and reliable systems.
              </p>
              <a
                className="button"
                href="mailto:ratul32742@gmail.com?subject=Let's%20connect"
              >
                Say hello <ArrowUpRight size={17} />
              </a>
              <div className="contact-links">
                <a href="mailto:ratul32742@gmail.com">
                  <Mail size={17} /> ratul32742@gmail.com
                </a>
                <a
                  href="https://github.com/ratul723"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> github.com/ratul723{" "}
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/in/radwanul-habib-ratul-75b76b240/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn profile{" "}
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container-shell footer">
        <a href="#home" className="brand">
          <span className="brand-mark">R.</span>
          <span>RADWANNUL HABIB RATUL</span>
        </a>
        <p>
          Designed & built with curiosity. © {new Date().getFullYear()} Radwanul
          Habib Ratul.
        </p>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
