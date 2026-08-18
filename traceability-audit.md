# Auditoría de trazabilidad — belentani.eu

## Propósito

Este documento convierte la documentación histórica en una revisión de producto. La pregunta no es si una regla aparece escrita, sino si existe una decisión observable en la interfaz, una interacción verificable o una comprobación técnica que la respalde. Las matrices completas permanecen intactas en `awards-criteria-2000.csv`, `gestalt-audit-300.csv` y `belentani-universal-200.csv`.

## Inventario de evidencia

| Fuente | Volumen | Qué cubre | Estado de uso |
|---|---:|---|---|
| `awards-criteria-2000.csv` | 2.000 criterios | Marca, color, contenido, diferenciación, hero, accesibilidad, código, interacción, layout, localización, movimiento, narrativa, navegación, rendimiento, proyectos, responsive, búsqueda, submission y trust | La matriz es normativa; se usa como cobertura, no como prueba única |
| `gestalt-audit-300.csv` | 300 criterios | Apertura, color, composición, contacto, contenido, expedientes, hero, interacción, movimiento, navegación, principios Gestalt, rendimiento, responsive y tipografía | La experiencia publicada demuestra la mayor parte de las familias mediante recorrido y estados |
| `belentani-universal-200.csv` | 200 reglas | Identidad, apertura, accesibilidad, composición, color, contenido, expedientes, Gestalt, hero, idiomas, interacción, luz, movimiento, narrativa, navegación, perfil, publicación, rendimiento, responsive y tipografía | Las reglas marcan evidencia por build, visual, structural o manual |
| `Home.tsx` y componentes React | producto | Preloader determinista, máquina consciente, filtros, expedientes, mapa de protocolos, terminal, command palette, timeline, contacto y estados por scroll | Evidencia primaria de comportamiento |
| `index.css` | producto | Tokens, negro profundo, escala tipográfica, líneas, foco, reduced-motion, responsive y transiciones | Evidencia primaria de lenguaje visual |
| `client/public/gestalt/` | 20 escenas | Protocolo visual navegable y ejemplos de señal, contexto, riesgo, ejecución, archivo y cierre | Evidencia secundaria y archivo experimental |
| Superficie publicada | 1 recorrido | Preloader, hero, navegación, filtros, nodos, perfil y contacto visibles | Evidencia de integración; incluye la capa externa `Made with Manus` durante la publicación |

## Familias de 2.000 criterios

Cada familia contiene 100 variantes. El siguiente mapa define la transformación requerida para que la regla no quede atrapada en un CSV.

| Familia | Transformación real en la web | Evidencia | Estado |
|---|---|---|---|
| Brand signal | Wordmark, monograma PB, sello de sistema, metadata y tono profesional | `Home.tsx`, `index.css`, assets persistentes | Aplicado |
| Color | Negro profundo, blanco frío y grises; sin marrón, dorado, azul celeste ni gradientes ornamentales | `index.css`, hero y escenas | Aplicado |
| Content | Copy corto, profesional y técnico; no musical; CTA de trabajo, perfil y canal | Hero, expedientes, perfil, contacto | Aplicado |
| Differentiation | NOIACORE / Silent Machine y narrativa Conscious Machine | Preloader, estados, mapa, sistema vivo | Aplicado |
| Hero | Apertura lenta, línea fina, decodificación, retrato editorial y señal de inspección | Preloader + hero | Aplicado |
| Accessibility | `aria-live`, botón para omitir, foco visible, navegación semántica, reduced-motion y alt text | React/CSS/HTML | Aplicado |
| Code quality | TypeScript, lazy loading, code splitting, timers limpiados y build | CI, `pnpm check`, `pnpm build` | Aplicado |
| Interaction | Filtros, modales de expediente, mapa activo, CLI, command palette y menú móvil | Componentes React | Aplicado |
| Layout | Composición asimétrica, rails editoriales, líneas, módulos y scroll por inspección | `index.css`, Home | Aplicado |
| Localization | Selector de 11 idiomas, nombres nativos y navegación/CTA que cambian sin reiniciar el preloader | `Home.tsx` | Aplicado en interfaz primaria; traducción editorial completa pendiente |
| Motion | Preloader determinista, pulso, ticker, scanline, reveal y estados por scroll | React/CSS | Aplicado |
| Narrative | Señal → contexto → riesgo → ejecución → archivo → canal | Mapa de protocolos y orden de secciones | Aplicado |
| Navigation | Menú numerado, anclas, escape routes, teclado y escenas Gestalt anterior/siguiente | Header, footer, escenas | Aplicado |
| Performance | Carga diferida y vendor chunks; experiencia sin bloqueo con omitir | Vite/build y loader | Aplicado |
| Projects | Cuatro expedientes con taxonomía, status, tags, detalle y enlace GitHub | `ProjectDossierGrid` | Aplicado |
| Responsive | Layout móvil, menú, escala tipográfica y rails adaptativos | CSS + screenshots históricos | Aplicado |
| Search | Command palette y CLI para inspección pública | `Home.tsx` | Aplicado |
| Submission | README, licencia MIT, badges legítimas, metadata y GitHub Actions | `README.md`, `.github/` | Aplicado |
| Trust | Transparencia de sistema, estados visibles, copy de observabilidad y contacto directo | Sistema vivo y canal | Aplicado con una mejora aplicada en esta auditoría |
| Typography | Titulares contenidos, escala fina, monospace técnico y lectura limitada | `index.css`, escenas | Aplicado |

## Hallazgos de la comparación web/repositorio

La experiencia publicada ya transforma la mayor parte de las reglas: la apertura es una secuencia, el hero introduce el concepto, los expedientes permiten inspeccionar, el mapa da estructura y el sistema vivo cambia con el recorrido. Por tanto, no se debe añadir más documentación visible como sustituto de producto.

Se identificaron cuatro patrones latentes que sí merecían una modificación de producto. Primero, varias métricas numéricas parecían cuantificar capacidades sin una fuente visible. Segundo, `PUBLIC ACTIVITY` y la fecha fija de sincronización podían envejecer o parecer una afirmación automática. Tercero, el selector de idiomas exponía once opciones, pero el contenido principal no demostraba traducción completa. Cuarto, las imágenes de expedientes repetían dos assets, lo que debilitaba la lógica de archivo único por caso.

## Transformaciones aplicadas en esta auditoría

La portada ya no presenta las lecturas de sistema como porcentajes con apariencia de medición científica. `SIGNAL INTEGRITY`, `CONTEXT RETENTION` y `RECOVERY CAPACITY` ahora muestran estados semánticos (`OBSERVED`, `STABLE`, `TRACEABLE`, `RECOVERABLE`) y conservan una barra visual como gramática de señal, no como ranking. El panel de perfil reemplaza la actividad numérica por `OPEN SOURCE / ACTIVE` y la fecha congelada por un reloj local `BCN · HH:MM`. El sistema vivo reemplaza `UPTIME 99.2%` por `TRACE VISIBLE / LIVE`, una afirmación comprobable por el visitante.

El selector de idiomas también dejó de ser estático: ahora actualiza el idioma del documento, la navegación desktop/mobile y las dos llamadas principales del hero para las once opciones, sin reiniciar la secuencia de arranque. La traducción editorial completa sigue separada para no fingir cobertura lingüística que aún no está revisada.

Estas modificaciones refuerzan el principio universal de **evidencia antes que promesa**, preservan el lenguaje Silent Machine y evitan inventar actividad, uptime o puntuaciones. No se han eliminado las matrices históricas; se han conectado a decisiones reales.

## Criterios que quedan explícitamente pendientes

| Criterio | Motivo | Próxima transformación segura |
|---|---|---|
| Traducción editorial completa a 11 idiomas | La interfaz primaria ya cambia, pero no existe contenido traducido suficiente para toda la experiencia | Añadir un diccionario editorial por idioma y probar cada ruta antes de activarlo |
| Imagen única por expediente | Los assets disponibles no ofrecen cuatro escenas editoriales distintas | Generar o proporcionar dos imágenes adicionales coherentes, sin reutilización automática |
| Evidencia verificable de proyectos | Algunos expedientes enlazan al perfil general de GitHub | Añadir enlaces a repositorios concretos solo después de verificar que existen y corresponden al dossier |
| Eliminación de `Made with Manus` | Es una capa de publicación externa | Gestionarla desde la configuración de la plataforma, no mediante un hack visual del sitio |

## Regla de cierre

Un criterio se considera transformado únicamente cuando puede señalarse una pieza concreta de UI, una interacción reproducible, un estado dinámico, una comprobación de accesibilidad/performance o una evidencia de publicación. Una línea en una checklist nunca cuenta por sí sola.
