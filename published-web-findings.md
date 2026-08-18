# Hallazgos de superficie web publicada

Fecha de revisión: 2026-08-18.

La superficie pública responde en `https://belentanip-qaacxo29.manus.space/` y carga una apertura negra con los estados `SYS/00 · SIGNAL INITIALIZATION`, `PROTOCOL READY`, decodificación progresiva y `BIENVENIDO A LA EXPERIENCIA`. El preloader sí está aplicado como comportamiento visual, pero la extracción durante la espera solo muestra el estado parcial `BELE`, por lo que la auditoría debe validar también el estado final después de la revelación.

La página publicada muestra un overlay técnico de depuración de Manus durante la inspección; no debe confundirse con parte del diseño de Belentani. La HTML visible todavía anuncia `Made with Manus` como capa externa de la plataforma.

El DOM inicial no expone aún el hero y los expedientes porque el preloader sigue activo; la siguiente fase debe comprobar el contenido después de omitir la secuencia o esperar a su finalización, y comparar esa superficie con la portada local.

La captura pública observada en el primer instante mostró un fondo navy, pero el estado estable del preloader se ve negro profundo. Debe revisarse si el fondo navy procede de una versión anterior, del fallback o del estilo externo de carga, y neutralizarlo si pertenece al proyecto.

## Estado estable tras omitir el preloader

La superficie estable sí aplica una narrativa completa: navegación numerada, hero profesional, expedientes filtrables, mapa de protocolos, perfil, timeline, lecturas operativas, sistema vivo y canal de contacto. El sistema visible ya no apunta a auditorías internas; convierte el concepto en interacción y copy.

Criterios todavía observables como oportunidades de transformación: el copy conserva algunos términos amplios o declarativos (`Calm systems under pressure`, `integridad de señal verificada`, `Available for select work`, métricas de integridad y uptime); los expedientes usan imágenes repetidas en al menos dos tarjetas; el selector muestra once idiomas, pero el contenido extraído sigue principalmente en español/inglés y no demuestra traducción completa; `Made with Manus` pertenece a la capa de publicación y no al concepto Belentani.

El DOM estable confirma cuatro expedientes, cinco nodos de protocolo, filtros de trabajo, CTA de GitHub, contacto, LinkedIn, Email y CLI. El contenido tiene una dirección clara; la siguiente fase debe transformar las oportunidades sin inventar datos: sustituir métricas por estados observables si no son medibles, evitar repetición de imágenes cuando sea posible y hacer que las etiquetas reflejen evidencia real.
