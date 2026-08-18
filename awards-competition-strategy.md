# Estrategia de competición para belentani.eu

## Alcance

Esta estrategia convierte una matriz propia de 2.000 checks en decisiones prácticas. No existe una lista oficial única de 2.000 criterios: la matriz funciona como una auditoría de cobertura. Los pesos base se inspiran en Awwwards, que publica Design 40%, Usability 30%, Creativity 20% y Content 10% [1]. CSS Design Awards añade UI, UX e Innovation y exige una obra completa y original [2] [3]. The Webby Awards organiza la evaluación web alrededor de Content, Structure and Navigation, Visual Design, Functionality, Interactivity, Innovation y Overall Experience [4]. WCAG 2.2 y Core Web Vitals se incorporan como condición de calidad, aunque no sustituyen al juicio creativo [5] [6].

## Scorecard competitivo

| Capa | Peso interno | Qué debe demostrar belentani.eu | Aplicación actual |
|---|---:|---|---|
| Dirección visual | 24% | Una firma visual identificable en segundos, sin parecer una plantilla | Agua negra interestelar, línea fina, señal navy, sello PB, retrato hero y sistema de expedientes |
| Usabilidad y estructura | 22% | Modelo mental claro y acceso rápido a trabajo, perfil y contacto | Navegación numerada, filtros, mapa de protocolos, command palette y dossiers modales |
| Creatividad e innovación | 20% | Una idea propia donde la tecnología sirva a la narrativa | Preloader Gestalt, sistema vivo, estados de señal y revelación progresiva |
| Contenido y voz | 12% | Punto de vista profesional, concreto y defendible | Copy editorial sobre Trust & Safety, IA, operaciones y automatización |
| Funcionalidad y craft | 10% | Interacciones completas, reversibles y sin errores visibles | TypeScript, build, estados de teclado, Escape, modal, filtros y terminal |
| Accesibilidad e inclusión | 6% | Operabilidad, contraste, foco y reducción de movimiento | `role=dialog`, `aria-live`, labels, botones semánticos y `prefers-reduced-motion` |
| Rendimiento y robustez | 4% | Carga, estabilidad y compatibilidad como parte de la experiencia | Build verificado; queda como prioridad dividir el bundle JS mayor de 500 kB |
| **Total** | **100%** | **Memorable, útil, original y técnicamente defendible** | **Sistema competitivo en iteración continua** |

## Cómo competiría para ganar

La primera batalla es la **firma reconocible**. El jurado debe identificar que la experiencia solo puede pertenecer a Belentani: el protocolo, la línea afinada, el agua negra, la luz fría, el sello PB y la taxonomía de expedientes deben repetirse con variación, no como decoración aleatoria. El hero no debe explicar todo; debe establecer una promesa fuerte y hacer que el visitante quiera inspeccionar.

La segunda batalla es convertir la estética en **método navegable**. Los premios valoran la interactividad cuando el usuario participa, recibe feedback y percibe que la web aprovecha el medio [4]. Por eso cada gesto debe devolver información: filtrar expedientes modifica el conjunto, abrir un expediente revela evidencia, cambiar de protocolo modifica el readout, `Cmd/Ctrl+K` permite inspección rápida y el sistema vivo muestra estado sin fingir datos de negocio.

La tercera batalla es **innovación con integridad**. La IA, la animación y la atmósfera no deben ser un fin. La web compite mejor si demuestra que la misma lógica visual representa el trabajo profesional: detectar señales, contextualizar, identificar riesgo, ejecutar y archivar. Esa conexión hace que la estética sea defendible ante un jurado de creatividad y ante un usuario que necesita claridad.

La cuarta batalla es **craft invisible**. CSSDA exige obra completa, original y sin errores [2] [3]. La versión aplicada incorpora metadatos SEO, datos estructurados de persona, canonical, Open Graph, Twitter Card, estados de teclado, `Escape`, responsive, reduced motion, TypeScript y build. El siguiente límite medible es el chunk JavaScript de producción: debe dividirse o cargarse de forma diferida antes de una candidatura formal.

La quinta batalla es **contenido con punto de vista**. The Webby Awards considera que el contenido debe tener voz, relevancia y posición [4]. El texto existente ya es una ventaja: no se sustituye por claims genéricos. La estrategia es presentarlo como evidencia organizada, con una ruta rápida para el jurado y una ruta profunda para quien quiera inspeccionar.

## Reglas aplicadas en esta iteración

| Regla | Implementación |
|---|---|
| La primera pantalla debe tener una idea | Preloader Gestalt y protocolo de activación antes del hero |
| La interacción debe explicar el producto | Protocol map, filtros, modal dossier, CLI y command palette |
| La identidad debe repetirse con disciplina | Sello PB, nomenclatura SYS, números de sección, señales y expedientes |
| El movimiento debe tener propósito | Decodificación, pulso, órbita y feedback; reduced motion disponible |
| La accesibilidad debe existir en el componente | Roles, labels, botones reales, foco nativo, Escape y contraste controlado |
| El SEO no debe ser un añadido tardío | Description, canonical, Open Graph, Twitter Card y JSON-LD |
| La web debe ser defendible | Matriz de 2.000 checks, estrategia, fuentes y estado de verificación |

## Decisiones que no aplicaría

No añadiría ruido, efectos 3D o animación continua solo para parecer más premiable. No inventaría clientes, premios, métricas, testimonios ni resultados de negocio. No ocultaría la navegación detrás de una experiencia cinematográfica. No sacrificaría legibilidad por una captura de pantalla espectacular. La mejor candidatura sería una web que el jurado recuerde por su atmósfera, pero que un usuario pueda entender, navegar y compartir sin fricción.

## Referencias

[1]: https://www.awwwards.com/about-evaluation/ "Awwwards — Evaluation System"
[2]: https://www.cssdesignawards.com/about "CSS Design Awards — About"
[3]: https://www.cssdesignawards.com/submit "CSS Design Awards — Submit a Site"
[4]: https://www.webbyawards.com/judging-criteria/ "The Webby Awards — Judging Criteria"
[5]: https://www.w3.org/WAI/WCAG22/quickref/ "W3C — WCAG 2.2 Quick Reference"
[6]: https://web.dev/articles/vitals "web.dev — Web Vitals"
