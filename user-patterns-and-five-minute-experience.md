# Síntesis de preferencias y experiencia Belentani

## Alcance y cautela

Este documento analiza únicamente decisiones expresadas en el chat y su traducción a diseño. No es un diagnóstico psicológico ni permite inferir rasgos clínicos. Las conclusiones describen preferencias de producto, sensibilidad estética y objetivos narrativos observables.

## Peticiones persistentes

La petición constante es construir una presencia digital premium, personal y profesional, no musical, con foco en Trust & Safety, IA, automatización, ingeniería de software, open source y creative tech. Se pidió conservar el contenido factual, trabajar en español como idioma principal pero preparar once idiomas, usar GitHub como fuente verificable, revisar el sitio con cientos o miles de criterios, generar 20 escenas HTML, publicar cada avance y mantener una revisión rigurosa.

La estética evolucionó desde Executive Signal hacia NOIACORE, luz líquida, agua negra interestelar y finalmente Máquina Silenciosa. Las restricciones visuales que permanecen son negro profundo, ausencia de textura en la apertura, luz mínima, línea fina, tipografía ligera, ritmo lento, ausencia de glitch decorativo, sensación de máquina real y una narrativa Gestalt continua.

## Patrones observables

| Patrón | Evidencia en las peticiones | Implicación de diseño |
|---|---|---|
| Refinamiento iterativo | Se pidió ajustar muchas veces ritmo, peso tipográfico y apertura | La interfaz debe admitir calibración fina y no depender de una sola gran animación |
| Rechazo del artificio | Se criticó el inicio por parecer simulado | Cada animación debe comunicar un estado funcional, no solo ornamentar |
| Preferencia por precisión | Se solicitaron 200, 300 y 2.000 criterios | El sistema necesita señales de estado, evidencia y jerarquía, no claims vagos |
| Sensibilidad a la suciedad visual | Se rechazaron palabras grandes, largas y colores celestes | El copy debe ser breve y el color debe tener una función clara |
| Búsqueda de inmersión | Se pidió una experiencia lenta de cinco minutos | La web debe revelar capas progresivas sin bloquear ni cansar |
| Control de identidad | Se aportaron muchas fotos y referencias | El hero debe mostrar presencia, no una imagen genérica |
| Coherencia total | Se pidió que cada decisión tuviera en cuenta las demás | Los tokens, estados, texto y movimiento deben compartir una gramática |

## Modelo psicológico de experiencia — no clínico

La experiencia debe transmitir **control sin frialdad hostil**. El negro reduce la competencia visual; la línea aporta orientación; los estados deterministas generan confianza; el texto corto reduce carga cognitiva; la evidencia de proyectos sustituye la autopromoción; el contacto final transforma observación en acción. La máquina no debe fingir conciencia. Debe comportarse como un sistema que observa señales de interfaz, procesa el contexto, confirma el estado, recuerda el recorrido y responde a la intención del visitante.

## Guion de cinco minutos

| Tiempo | Estado | Contenido | Acción esperada |
|---|---|---|---|
| 0:00–0:20 | Inicialización | Negro absoluto, línea fina, estados `SIGNAL CHECK` y `READY` | El visitante entiende que la interfaz está arrancando; puede omitir |
| 0:20–1:00 | Presencia | Hero breve, una frase de valor y una evidencia profesional | Decide si la persona y el método son relevantes |
| 1:00–2:00 | Inspección | Expedientes filtrables y mapa de protocolos | Abre un caso y observa cómo se trabaja |
| 2:00–3:10 | Contexto | Perfil, timeline y stack como señales de experiencia | Comprende continuidad, no solo herramientas |
| 3:10–4:20 | Sistema vivo | Pulso, latencia, modo, estado y CLI opcional | Prueba si la interfaz responde sin ruido |
| 4:20–5:00 | Canal | Contacto corto, disponibilidad y enlaces verificables | Pasa de inspeccionar a abrir conversación |

## Reglas de limpieza inmediata

El color azul/cian celeste debe dejar de funcionar como atmósfera general. Se conserva solo como señal escasa de estado activo o foco. La base será negro absoluto, gris neutro y blanco frío. El movimiento ambiental decorativo debe reducirse; el movimiento permitido será el que explique carga, lectura, selección, procesamiento o transición. Los titulares deben ocupar menos superficie, las frases deben tener una sola idea y cada tarjeta debe tener un único foco de acción.

## Plugins y stack actual

El proyecto ya tiene React, Framer Motion, Lucide, `cmdk`, Wouter y CSS suficiente para crear una máquina de interfaz ligera. No se necesita añadir un plugin de animación pesado de inmediato. La estrategia recomendada es usar CSS para estados repetitivos, React para estados de sistema y Framer Motion únicamente para transiciones discretas. El objetivo es reducir peso, evitar dependencia innecesaria y conservar respuesta inmediata.

## Dirección de aplicación

La próxima versión debe sentirse menos como una exhibición de efectos y más como un instrumento de inspección. La web debe hablar consigo misma mediante estados pequeños: `OBSERVING`, `CONTEXT READY`, `EVIDENCE OPEN`, `MEMORY UPDATED`, `CHANNEL AVAILABLE`. Cada estado debe estar conectado a una acción real o a una transición visible. Si un elemento no mejora comprensión, orientación o respuesta, se elimina.
