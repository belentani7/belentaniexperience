/* Executive Signal: editorial premium, dark graphite surfaces, bone text, phosphor status accents, asymmetric evidence-led layout. */
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight, Command, Github, Globe2, Linkedin, Mail, Menu, X } from "lucide-react";

const heroImage = "/manus-storage/belentani-user-portrait_41eb8863.png";
const signalImage = "/manus-storage/belentani-user-portrait-warm_53112582.webp";
const dataImage = "/manus-storage/belentani-user-portrait_41eb8863.png";
const monogramImage = "/manus-storage/belentani-pb-monogram_ba9c2ab8.png";

const projects = [
  { number: "01", category: "EXPEDIENTE / IA", title: "Meta-Builder Pipeline", description: "Cadena de modelos para comparar, evaluar y convertir respuestas de IA en decisiones trazables.", tags: ["Gemini", "DeepSeek", "Qwen"], tone: "lime", image: dataImage, href: "https://github.com/belentani7" },
  { number: "02", category: "EXPEDIENTE / RIESGO", title: "RELACIÓN.SCAN", description: "Sistema interactivo de análisis conductual basado en datos estructurados, anomalías y patrones de riesgo.", tags: ["Análisis", "Señales", "Privacidad"], tone: "brass", image: signalImage, href: "https://github.com/belentani7" },
  { number: "03", category: "EXPEDIENTE / OPEN SOURCE", title: "OpenClaw", description: "Gateway de comunicación e integración de IA optimizado para arquitecturas ARM64 y entornos móviles.", tags: ["ARM64", "Termux", "CLI"], tone: "cyan", image: signalImage, href: "https://github.com/belentani7" },
  { number: "04", category: "EXPEDIENTE / COMUNIDAD", title: "Manos Abiertas", description: "Iniciativa pública de alfabetización digital, IA y herramientas ofimáticas para ampliar autonomía tecnológica.", tags: ["Educación", "Web", "Acceso"], tone: "lime", image: dataImage, href: "https://github.com/belentani7/manosabiertas" },
];

const languages = [["es", "Español"], ["en", "English"], ["pt", "Português"], ["it", "Italiano"], ["fr", "Français"], ["ca", "Català"], ["fi", "Suomi"], ["zh", "中文"], ["hi", "हिन्दी"], ["ja", "日本語"], ["th", "ไทย"]];
const protocolText = "BELENTANI PROTOCOL ACTIVATED";
const decodeGlyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/░▒▓";

const stack: Array<[string, number]> = [
  ["Trust & Safety", 92], ["AI orchestration", 88], ["Automation / n8n", 86], ["TypeScript / Python", 82], ["Frontend systems", 79], ["Security & audit", 84],
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState(["belentani-cli v1.0.0", "Type 'help' to inspect the public system."]);
  const [loaded, setLoaded] = useState(false);
  const [now, setNow] = useState(new Date());
  const [language, setLanguage] = useState("es");
  const [bootText, setBootText] = useState("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
  const [bootWelcome, setBootWelcome] = useState(false);

  useEffect(() => {
    let reveal = 0;
    const decoder = window.setInterval(() => {
      reveal += 1;
      const output = protocolText.split("").map((character, index) => {
        if (index < reveal - 2) return character;
        if (index < reveal + 3 && character !== " ") return decodeGlyphs[Math.floor(Math.random() * decodeGlyphs.length)];
        return character === " " ? " " : "░";
      }).join("");
      setBootText(output);
      if (reveal > protocolText.length + 4) {
        window.clearInterval(decoder);
        setBootText(protocolText);
        window.setTimeout(() => setBootWelcome(true), 500);
        window.setTimeout(() => setLoaded(true), 1700);
      }
    }, 105);
    const clock = window.setInterval(() => setNow(new Date()), 30000);
    return () => { window.clearInterval(decoder); window.clearInterval(clock); };
  }, []);

  const skipBoot = () => { setBootText(protocolText); setBootWelcome(true); setLoaded(true); };

  const localTime = useMemo(() => now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }), [now]);

  const runCommand = () => {
    const value = command.trim().toLowerCase();
    if (!value) return;
    const responses: Record<string, string> = {
      help: "commands: info · stack · contact · clear",
      info: "Pedro Belentani — Trust & Safety / AI Systems / Automation.",
      stack: "n8n · Ollama · Qwen · TypeScript · Python · Astro · GSAP",
      contact: "contacto@belentani.eu",
    };
    if (value === "clear") setOutput([]);
    else setOutput((current) => [...current, `guest@belentani:~$ ${value}`, responses[value] ?? `command not found: ${value}`]);
    setCommand("");
  };

  return (
    <div className={`site-shell ${loaded ? "is-loaded boot-complete" : ""}`}>
      {!loaded && <div className="protocol-loader" role="status" aria-live="polite"><div className="loader-orbit" aria-hidden="true"><span/><span/><span/></div><div className="loader-line" aria-hidden="true"><span/></div><div className="loader-code">SYS/00 · SIGNAL INITIALIZATION</div><div className="loader-title">{bootText}</div><div className={`loader-welcome ${bootWelcome ? "is-visible" : ""}`}>BIENVENIDO A LA EXPERIENCIA</div><button className="loader-skip" onClick={skipBoot}>OMITIR SECUENCIA</button></div>}
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Belentani, inicio">
          <img src={monogramImage} alt="" className="brand-mark" />
          <span className="brand-wordmark">BELENTANI<span className="brand-dot">.</span>EU</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {[['00','Inicio','top'],['01','Trabajo','work'],['02','Perfil','about'],['03','Contacto','contact']].map(([n, label, href]) => <a key={n} href={`#${href}`}><span>{n}</span>{label}</a>)}
        </nav>
        <div className="header-status"><span className="status-dot" /> AVAILABLE / BCN <span className="status-time">{localTime}</span></div><label className="language-picker"><Globe2 size={13}/><select aria-label="Seleccionar idioma" value={language} onChange={(event) => setLanguage(event.target.value)}>{languages.map(([code, label]) => <option key={code} value={code}>{label}</option>)}</select></label>
        <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      {menuOpen && <div className="mobile-menu"><div className="mobile-menu-inner">{[['00','Inicio','top'],['01','Trabajo','work'],['02','Perfil','about'],['03','Contacto','contact']].map(([n,label,href]) => <a key={n} href={`#${href}`} onClick={() => setMenuOpen(false)}><small>{n}</small>{label}<ArrowUpRight size={18}/></a>)}</div></div>}

      <main id="top">
        <section className="hero section-wrap"><div className="ambient-field" aria-hidden="true"><span className="ambient-ring ring-one"/><span className="ambient-ring ring-two"/><span className="ambient-beam"/><span className="ambient-particle particle-one"/><span className="ambient-particle particle-two"/><span className="ambient-particle particle-three"/></div>
          <div className="hero-gridline" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-pulse" /> SYS/00 — PROFESSIONAL PROFILE</div>
            <h1>Calm systems<br /><em>under pressure.</em></h1>
            <p className="hero-lede">Pedro Belentani es especialista en <strong>Trust & Safety</strong>, arquitecto de sistemas de IA y desarrollador de automatizaciones que mantienen la señal cuando el contexto se degrada.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explorar trabajo <ArrowUpRight size={16}/></a><a className="text-link" href="mailto:contacto@belentani.eu">Abrir canal <span>↗</span></a></div>
            <div className="hero-metadata"><span>Barcelona, ES</span><span>8+ años en operaciones críticas</span><span>Local-first / Open source</span></div>
          </div>
          <div className="hero-media">
            <div className="hero-image-frame"><img src={heroImage} alt="Retrato editorial de Pedro Belentani" /><div className="image-scanline" /><span className="image-index">PB / 2026</span><span className="image-coord">41°21' N<br />2°10' E</span></div>
            <div className="hero-note note-a"><img src={monogramImage} alt="" className="seal-mark" />// integridad de señal<br /><strong>verificada</strong></div><div className="hero-note note-b">EXPEDIENTE<br /><strong>PB—01</strong></div>
          </div>
          <div className="scroll-cue"><span>SCROLL TO INSPECT</span><span className="scroll-line" /></div>
        </section>

        <div className="motion-divider" aria-hidden="true"><span/><span/><span/></div><div className="ticker" aria-label="Áreas de especialización"><div className="ticker-track">TRUST & SAFETY <b>·</b> AI SYSTEMS <b>·</b> AUTOMATION <b>·</b> RISK INTELLIGENCE <b>·</b> CREATIVE TECHNOLOGY <b>·</b> TRUST & SAFETY <b>·</b> AI SYSTEMS <b>·</b> AUTOMATION <b>·</b> RISK INTELLIGENCE <b>·</b></div></div>

        <section id="work" className="section-wrap work-section">
          <div className="section-heading"><SectionLabel index="01" children="Expedientes seleccionados" /><p className="section-intro">Sistemas, experimentos e iniciativas públicas construidas en la intersección de operaciones, inteligencia y código.</p><a className="quiet-link" href="https://github.com/belentani7" target="_blank" rel="noreferrer">Abrir GitHub <ArrowUpRight size={15}/></a></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card tone-${project.tone}`} key={project.number}><div className="project-visual"><img src={project.image} alt="" /><span className="project-number">{project.number}</span><span className="project-open">ABRIR <ArrowUpRight size={15}/></span></div><div className="project-copy"><div className="project-meta"><span>{project.category}</span><span>2023—26</span></div><h2>{project.title}</h2><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="project-link">Abrir expediente <ChevronRight size={16}/></a></div></article>)}</div>
        </section>

        <section id="about" className="section-wrap about-section">
          <div className="section-heading"><SectionLabel index="02" children="Perfil / método" /><p className="section-intro">Un perfil híbrido formado en operaciones críticas, análisis neutral y uso práctico de la IA como multiplicador de capacidad.</p></div>
          <div className="about-layout"><div className="manifesto"><p className="manifesto-kicker">// THE CENTAUR PRINCIPLE</p><blockquote>“No trabajo contra la inteligencia artificial. Diseño el sistema que permite que una persona piense mejor, decida con más claridad y opere con menos fricción.”</blockquote><p>Más de ocho años en entornos corporativos globales de alta responsabilidad. Hoy conecto Trust & Safety, auditoría, automatización y desarrollo para construir sistemas que sean útiles, observables y difíciles de romper.</p><a href="mailto:contacto@belentani.eu" className="button button-outline">Conocer el perfil <ArrowUpRight size={16}/></a></div><div className="facts-panel"><div className="fact-row"><span>LOCATION</span><strong>Barcelona / EU</strong></div><div className="fact-row"><span>FOCUS</span><strong>Risk · AI · Systems</strong></div><div className="fact-row"><span>LANGUAGES</span><strong>ES · PT · CA · EN</strong></div><div className="fact-row"><span>STATUS</span><strong className="signal-text">Available for select work</strong></div><div className="fact-row"><span>PUBLIC ACTIVITY</span><strong>123 repositories / 408 contributions</strong></div><div className="fact-row"><span>LAST SYNC</span><strong>15 AUG 2026 · {localTime}</strong></div></div></div>
        </section>

        <section className="section-wrap stack-section"><div className="section-heading"><SectionLabel index="03" children="Lecturas operativas" /><p className="section-intro">Indicadores de experiencia aplicada: señales de trabajo real, no un ranking decorativo de habilidades.</p></div><div className="stack-layout"><div className="stack-list">{stack.map(([label, value]) => <div className="stack-item" key={label as string}><div><span>{label}</span><b>{value >= 88 ? "CORE" : value >= 82 ? "ACTIVE" : "FIELD"}</b></div><div className="stack-bar"><span style={{ width: `${value}%` }} /></div></div>)}</div><div className="stack-note"><img src={dataImage} alt="" /><div><span className="eyebrow">SYS/03 — ARQUITECTURA</span><p>Desde el despliegue local de LLM hasta la automatización de workflows, construyo la capa entre la intención humana y una ejecución fiable.</p></div></div></div></section>

        <section id="contact" className="section-wrap contact-section"><div className="contact-grid"><div><SectionLabel index="04" children="Abrir canal" /><h2>¿Hay un sistema<br /><em>que necesita pulso?</em></h2><p className="contact-copy">Consultoría, sistemas de IA, operaciones de Trust & Safety y producto cuidadosamente acotado. Cuéntame qué está en riesgo, qué se ha bloqueado o qué debería funcionar mejor.</p><a className="contact-email" href="mailto:contacto@belentani.eu">contacto@belentani.eu <ArrowUpRight size={22}/></a></div><div className="contact-side"><div className="availability-card"><span className="status-dot" /> <div><strong>Disponible actualmente</strong><small>Para consultoría y proyectos de construcción seleccionados</small></div></div><div className="social-links"><a href="https://github.com/belentani7" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/pedro-b-09473598/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={15}/></a><a href="mailto:contacto@belentani.eu"><Mail size={18}/> Email <ArrowUpRight size={15}/></a></div></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><div className="footer-brand"><img src={monogramImage} alt="" className="brand-mark footer-seal" /><span>CONSTRUIDO CON INTENCIÓN</span></div><div className="footer-meta"><span>© 2026 Pedro Belentani</span><span>v1.0 / SIGNAL ONLINE</span><span>Barcelona, ES</span></div></footer>

      <div className="terminal-wrap"><button className="terminal-toggle" onClick={() => setTerminalOpen(!terminalOpen)}><Command size={15}/> {terminalOpen ? "Close CLI" : "Open CLI"}</button>{terminalOpen && <div className="terminal"><div className="terminal-top"><span>belentani-cli</span><span>ESC</span></div><div className="terminal-output">{output.map((line, index) => <div key={index}>{line}</div>)}</div><div className="terminal-input"><span>guest@belentani:~$</span><input value={command} onChange={e => setCommand(e.target.value)} onKeyDown={e => e.key === "Enter" && runCommand()} autoFocus aria-label="Comando de terminal" /></div></div>}</div>
    </div>
  );
}
