# Scorecard competitivo de belentani.eu

Este scorecard no representa un resultado oficial de ningún premio. Es una lectura interna de preparación competitiva, basada en la matriz de 2.000 checks y en los marcos públicos citados en `awards-competition-strategy.md`.

| Área | Peso | Estado actual | Lectura | Prioridad |
|---|---:|---:|---|---|
| Dirección visual | 24 | 8.8/10 | Firma fuerte, reconocible y consistente; debe evitar sobrecarga en la primera pantalla | Alta |
| Usabilidad y estructura | 22 | 8.1/10 | Navegación, filtros, protocolos, dossiers y command palette construyen un modelo mental claro | Alta |
| Creatividad e innovación | 20 | 9.0/10 | Preloader Gestalt, sistema vivo y protocolo conectan concepto y tecnología | Mantener |
| Contenido y voz | 12 | 8.0/10 | Punto de vista claro; conviene profundizar evidencia real de proyectos | Alta |
| Funcionalidad y craft | 10 | 8.4/10 | Interacciones principales y estados de teclado implementados; falta prueba E2E formal | Media |
| Accesibilidad e inclusión | 6 | 7.4/10 | Semántica, labels y reduced motion presentes; falta auditoría con lector de pantalla | Crítica |
| Rendimiento y robustez | 4 | 6.9/10 | Build correcto; chunk principal >500 kB requiere code splitting antes de candidatura | Crítica |
| **Preparación ponderada** | **100** | **8.2/10** | **Candidatura fuerte con dos riesgos técnicos que deben cerrarse** | **Acción** |

## Dos bloqueadores antes de competir

El primero es **rendimiento medible**: el build produce un chunk JavaScript de aproximadamente 595 kB sin comprimir y Vite emite una advertencia de tamaño. La interfaz funciona, pero una candidatura formal debería dividir el bundle, retrasar código no esencial y medir Core Web Vitals en dispositivo móvil real.

El segundo es **accesibilidad validada externamente**: ya existen roles, labels, botones semánticos, Escape y `prefers-reduced-motion`, pero todavía falta probar foco visible, orden de tabulación, lector de pantalla, contraste real y operación completa sin ratón.

## Ventajas defendibles

La ventaja más fuerte es la unión entre **concepto y sistema**: la web no solo tiene una estética sci-fi, sino una gramática de protocolos que organiza la exploración. La segunda es la combinación de **presencia editorial y utilidad práctica**: el visitante puede admirar, inspeccionar, filtrar, abrir evidencia y contactar. La tercera es la **originalidad controlada**: el lenguaje visual se repite con disciplina y no depende de un template genérico.
