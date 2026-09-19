import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { FiAperture, FiBookOpen, FiCode, FiCpu, FiDownload, FiFileText, FiLayers, FiMessageCircle, FiMonitor, FiMoon, FiSun } from 'react-icons/fi'
import { FaEnvelope, FaFileExcel, FaFilePowerpoint, FaFileWord, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { SiBootstrap, SiCss, SiFigma, SiGithub, SiHtml5, SiJavascript, SiPostgresql, SiReact, SiTypescript, SiVite } from 'react-icons/si'
import type { IconType } from 'react-icons'

type Project = { number: string; label: string; title: string; description: string; stack: string[]; url: string; thumbnail: string; role: string; outcome: string; details: string }

const EMAIL = 'mobodymo6@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/abdelrahman-sabry-b36500275/'
const WHATSAPP = 'https://wa.me/201553258929'
const X_PROFILE = 'https://x.com/abosabrynbo'
const CV_URL = '/documents/Abdelrahman-Sabry-CV.pdf'

const projects: Project[] = [
  {
    number: '01', label: 'HEALTHCARE / PLATFORM', title: 'MediDash',
    description: 'A digital healthcare platform that brings patient care into one clear flow: doctor discovery, bookings, records, and an AI assistant for support.',
    stack: ['React', 'TypeScript', 'Bootstrap', 'SQL', 'AI chatbot'], url: 'https://la-phi.vercel.app/',
    thumbnail: '/medidash.png',
    role: 'Front-end development · Product structure',
    outcome: 'A clearer patient journey from finding a doctor to taking the next action.',
    details: 'I shaped the interface around the real healthcare journey: discovery, booking, records, and support. The result is a focused system that keeps complex information readable and the next step obvious.',
  },
  {
    number: '02', label: 'EDUCATION / INFORMATION SITE', title: 'Mostafa Teacher Hub',
    description: 'A focused website for finding the teacher’s schedule, class address, and timing, with an AI quiz bot that makes revision more interactive.',
    stack: ['TypeScript', 'JavaScript', 'Bootstrap', 'AI quiz bot'], url: 'https://mrmostafamashaly.vercel.app/',
    thumbnail: '/mostafa-teacher-hub.png',
    role: 'Front-end development · Information design',
    outcome: 'A direct Arabic-first landing page for schedule, location, contact, and revision support.',
    details: 'I organized the teacher’s essential information into a fast, readable homepage. The AI quiz assistant adds an interactive revision layer without taking attention away from the practical details students need first.',
  },
]

const tools: Array<{ name: string; category: string; Icon: IconType }> = [
  { name: 'TypeScript', category: 'Language', Icon: SiTypescript }, { name: 'JavaScript', category: 'Language', Icon: SiJavascript },
  { name: 'React', category: 'Framework', Icon: SiReact }, { name: 'HTML5', category: 'Markup', Icon: SiHtml5 },
  { name: 'CSS3', category: 'Styling', Icon: SiCss }, { name: 'Bootstrap', category: 'Framework', Icon: SiBootstrap },
  { name: 'Vite', category: 'Tooling', Icon: SiVite }, { name: 'GitHub', category: 'Workflow', Icon: SiGithub },
  { name: 'Figma', category: 'Design', Icon: SiFigma }, { name: 'MS Excel', category: 'Office', Icon: FaFileExcel },
  { name: 'PowerPoint', category: 'Office', Icon: FaFilePowerpoint }, { name: 'Word', category: 'Office', Icon: FaFileWord },
  { name: 'SQL', category: 'Data', Icon: SiPostgresql }, { name: 'AI tools', category: 'Productivity', Icon: FiCpu },
]

const services: Array<{ title: string; text: string; Icon: IconType }> = [
  { title: 'Front-end engineering', text: 'Responsive websites and web applications built with React, TypeScript, clean components, and a sharp eye for interaction.', Icon: FiCode },
  { title: 'Data cleaning & structure', text: 'Messy spreadsheets and raw information turned into clear, consistent, usable data with careful validation.', Icon: FiLayers },
  { title: 'Technical content', text: 'Arabic ↔ English translation, proofreading, and post-editing that keeps technical meaning accurate and natural.', Icon: FiFileText },
  { title: 'Presentations & docs', text: 'Clear PowerPoint decks and structured documentation that help people understand the work and act on it.', Icon: FiBookOpen },
]

function Brand() {
  return <a className="brand" href="#top" aria-label="Abdelrahman Sabry home"><span className="brand-sigil"><FiAperture /></span><span className="brand-name">ABDELRAHMAN<br /><b>SABRY</b></span></a>
}

function Nav({ light, onTheme }: { light: boolean; onTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const links = [['about', 'About'], ['work', 'Work'], ['tools', 'Tools'], ['services', 'Services'], ['resume', 'Resume'], ['contact', 'Contact']]
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return <header className="site-header"><div className="nav-shell"><Brand /><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label="Toggle navigation"><span /><span /></button><nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">{links.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}</nav><button className="theme-toggle" onClick={onTheme} aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}>{light ? <FiMoon /> : <FiSun />}<span>{light ? 'DARK' : 'LIGHT'}</span></button></div></header>
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>
}

function StackOrbit() {
  const orbitTools = tools.slice(0, 8)
  return <div className="stack-orbit" aria-label="Animated front-end stack"><div className="orbit-grid" /><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-center"><span>STACK</span><strong>FRONT-END</strong><small>ENGINEER</small></div><div className="orbit-wheel">{orbitTools.map(({ name, Icon }, index) => <span className="orbit-item" key={name} style={{ '--i': index } as CSSProperties} title={name}><Icon /></span>)}</div></div>
}

function Hero() {
  return <section className="hero page-shell" id="top"><div className="hero-copy"><p className="hello">Hello, I am</p><h1>Abdelrahman<br /><em>Sabry</em></h1><p className="hero-role"><span>Front-end</span> Engineer <i>/</i> Data-minded builder</p><p className="hero-intro">I build clear, responsive interfaces for people who need digital work to feel simple, useful, and considered.</p><div className="hero-actions"><a className="button" href="#work">Explore my work</a><a className="button button-dark" href="#contact"><FiMessageCircle /> Let’s talk</a><a className="button button-quiet" href={CV_URL} download><FiDownload /> Download CV</a></div></div><div className="hero-aside"><StackOrbit /><p className="hero-note">React · TypeScript · UI systems</p></div><span className="hero-index">01 / 06</span></section>
}

function About() {
  return <section className="about-section page-shell section-space" id="about"><SectionLabel index="01">About the engineer</SectionLabel><div className="about-grid"><h2>Interfaces that<br /><em>make things clear.</em></h2><div className="about-copy"><p>I’m Abdelrahman Sabry, a Computer Science graduate and front-end engineer in training. I use React, TypeScript, and modern web tools to turn ideas into responsive experiences with structure behind the polish.</p><p>I have C1-level English and practical experience working as an English teacher’s assistant, supporting lessons and post-editing educational work. Alongside that, I’m training in data engineering through DEPI.</p></div></div><div className="facts-grid"><div><span>EDUCATION</span><strong>B.Sc. Computer Science & Information Systems<small>El Shorouk Academy · 2022—2026</small></strong></div><div><span>CORE FOCUS</span><strong>Front-end engineering<small>React · TypeScript · Responsive UI</small></strong></div><div><span>ENGLISH</span><strong>C1 proficiency<small>Teacher assistant · Educational post-editing</small></strong></div></div></section>
}

function ProjectCard({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)
  const [expanded, setExpanded] = useState(false)
  return <article className={`project-card ${project.number === '02' ? 'teacher-project' : ''}`}><a className="project-shot" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live website`}>{failed ? <div className="shot-unavailable"><FiMonitor /><span>LIVE SCREENSHOT<br />UNAVAILABLE</span></div> : <img src={project.thumbnail} alt={`${project.title} landing page screenshot`} loading="lazy" decoding="async" onError={() => setFailed(true)} />}<span className="shot-badge">LIVE SCREENSHOT</span></a><div className="project-copy"><div className="project-head"><span className="project-number">{project.number}</span><div><span className="eyebrow">{project.label}</span><h3>{project.title}</h3></div></div><p>{project.description}</p><div className="project-foot"><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-actions"><a className="project-open" href={project.url} target="_blank" rel="noreferrer">View live project</a><button className="case-study-toggle" type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>{expanded ? 'Close case study' : 'Read case study'}</button></div></div>{expanded && <div className="case-study-panel"><div><span>ROLE</span><strong>{project.role}</strong></div><div><span>OUTCOME</span><strong>{project.outcome}</strong></div><p>{project.details}</p><div className="case-study-tech"><span>TECHNOLOGY DETAILS</span><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div>}</div></article>
}

function Work() {
  return <section className="work-section page-shell section-space" id="work"><div className="section-head"><SectionLabel index="02">Selected work</SectionLabel><span className="section-aside">02 live builds</span></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>
}

function Tools() {
  return <section className="tools-section section-space" id="tools"><div className="page-shell"><SectionLabel index="03">Stack & tools</SectionLabel><div className="tools-intro"><h2>Tools that<br /><em>move the work.</em></h2><p>Real tools, real practice. This is the stack I use to design, build, organize, and present digital work.</p></div><div className="tools-marquee" aria-label="Technologies I use"><div className="tools-track">{[...tools, ...tools].map(({ name, Icon }, index) => <div className="marquee-tool" key={`${name}-${index}`}><Icon /><span>{name}</span></div>)}</div></div><div className="tools-grid">{tools.map(({ name, category, Icon }) => <div className="tool-card" key={name}><Icon className="tool-logo" /><div><strong>{name}</strong><span>{category}</span></div></div>)}</div></div></section>
}

function Services() {
  return <section className="services-section page-shell section-space" id="services"><SectionLabel index="04">What I can help with</SectionLabel><div className="services-intro"><h2>From first idea<br /><em>to finished detail.</em></h2><p>Choose the kind of support you need and take it straight to the conversation. Every service starts with understanding the real problem.</p></div><div className="services-list">{services.map(({ title, text, Icon }) => <a className="service-row" href="#contact" key={title}><Icon className="service-icon" /><div><h3>{title}</h3><span>DISCUSS THIS SERVICE</span></div><p>{text}</p></a>)}</div></section>
}

function Resume() {
  return <section className="resume-section page-shell section-space" id="resume"><div className="resume-head"><SectionLabel index="05">One-page resume</SectionLabel><a className="resume-download" href={CV_URL} download><FiDownload /> Download CV</a></div><div className="resume-layout"><div className="resume-intro"><h2>Front-end engineer<br /><em>with a data mindset.</em></h2><p>Computer Science graduate building responsive interfaces, structured workflows, and useful digital systems.</p></div><div className="resume-content"><div className="resume-block"><span>PROFILE</span><p>Front-end developer with a foundation in React, TypeScript, JavaScript, Bootstrap, and responsive UI. C1-level English with practical experience supporting an English teacher and post-editing educational content.</p></div><div className="resume-block"><span>EXPERIENCE</span><div><strong>Microsoft Data Engineer Track Trainee</strong><small>Digital Egypt Pioneers Initiative · 2026—Present</small><p>Training in database administration, data pipelines, data cleaning, and modern processing workflows.</p></div></div><div className="resume-block"><span>EDUCATION</span><div><strong>B.Sc. Computer Science & Information Systems</strong><small>El Shorouk Academy · 2022—2026</small></div></div><div className="resume-block"><span>CAPABILITIES</span><div className="resume-tags">{['React', 'TypeScript', 'JavaScript', 'Bootstrap', 'Responsive UI', 'Data cleaning', 'Excel', 'PowerPoint', 'Technical documentation'].map((item) => <span key={item}>{item}</span>)}</div></div></div></div></section>
}

function Contact() {
  return <section className="contact-section page-shell section-space" id="contact"><div className="contact-panel"><div><SectionLabel index="06">Start a conversation</SectionLabel><h2>Have something<br /><em>worth building?</em></h2><p>Send the idea, the question, or the messy first version. I’m open to full-time roles, freelance projects, and good collaborations.</p></div><div className="contact-details"><a className="contact-email" href={`mailto:${EMAIL}`}><FaEnvelope /> {EMAIL}</a><a href={WHATSAPP} target="_blank" rel="noreferrer"><FaWhatsapp /><span>WhatsApp</span><strong>015 5325 8929</strong></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><FaLinkedinIn /><span>LinkedIn</span><strong>Connect with me</strong></a></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="page-shell"><div className="footer-top"><Brand /><span>Front-end engineer<br />with a data mindset.</span><div className="footer-links" aria-label="Social and contact links"><a className="footer-social-link" href={`mailto:${EMAIL}`} aria-label="Email Abdelrahman" title="Email"><FaEnvelope /></a><a className="footer-social-link" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Message Abdelrahman on WhatsApp" title="WhatsApp"><FaWhatsapp /></a><a className="footer-social-link" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="Abdelrahman on LinkedIn" title="LinkedIn"><FaLinkedinIn /></a><a className="footer-social-link" href={X_PROFILE} target="_blank" rel="noreferrer" aria-label="Abdelrahman on X" title="X"><FaXTwitter /></a></div></div><div className="footer-bottom"><span>© 2026 Abdelrahman Sabry</span><a href="#top">Back to top</a><span>Built with React + TypeScript</span></div></div></footer>
}

function App() {
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light')
  useEffect(() => { document.body.classList.toggle('light-mode', light); localStorage.setItem('theme', light ? 'light' : 'dark') }, [light])
  return <div className={light ? 'app theme-light' : 'app'}><a className="skip-link" href="#main-content">Skip to main content</a><Nav light={light} onTheme={() => setLight(!light)} /><main id="main-content"><Hero /><div className="marquee"><div className="marquee-track" aria-hidden="true">FRONT-END ENGINEERING <b>✳</b> REACT + TYPESCRIPT <b>✳</b> USEFUL DIGITAL SYSTEMS <b>✳</b> FRONT-END ENGINEERING <b>✳</b> REACT + TYPESCRIPT <b>✳</b> USEFUL DIGITAL SYSTEMS <b>✳</b></div></div><About /><Work /><Tools /><Services /><Resume /><Contact /></main><Footer /></div>
}

export default App
