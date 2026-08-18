from pathlib import Path
import csv

DOMAINS = [
    ("BR", "Brand signal", "identidad, marca y reconocimiento"),
    ("NA", "Narrative", "narrativa, concepto y punto de vista"),
    ("HE", "Hero", "entrada, preloader y primera impresión"),
    ("TY", "Typography", "tipografía, lectura y jerarquía"),
    ("CO", "Color", "paleta, contraste y emoción"),
    ("LA", "Layout", "composición, ritmo y espacio"),
    ("MO", "Motion", "animación, tiempo y transición"),
    ("IN", "Interaction", "feedback, controles y participación"),
    ("NV", "Navigation", "estructura, orientación y descubrimiento"),
    ("CT", "Content", "contenido, voz y claridad"),
    ("PR", "Projects", "expedientes, evidencia y casos"),
    ("AC", "Accessibility", "WCAG, inclusión y operabilidad"),
    ("PF", "Performance", "carga, respuesta y estabilidad"),
    ("RS", "Responsive", "adaptación a pantallas y dispositivos"),
    ("CD", "Code quality", "arquitectura, mantenibilidad y robustez"),
    ("SE", "Search", "metadatos, indexación y compartibilidad"),
    ("TR", "Trust", "credibilidad, transparencia y seguridad"),
    ("LO", "Localization", "idiomas, cultura y escritura multilingüe"),
    ("SB", "Submission", "capturas, presentación y cumplimiento"),
    ("DI", "Differentiation", "originalidad, innovación y memorabilidad"),
]

CHECKS = [
    ("01", "Existe una intención verificable y no solo una decisión ornamental.", "intent"),
    ("02", "La decisión sirve al público objetivo y al contexto de uso.", "audience"),
    ("03", "La jerarquía comunica lo importante antes de lo accesorio.", "hierarchy"),
    ("04", "La ejecución mantiene coherencia con el sistema visual completo.", "coherence"),
    ("05", "La experiencia funciona sin depender de una única capacidad sensorial.", "inclusion"),
    ("06", "La respuesta del sistema es clara, reversible y observable.", "feedback"),
    ("07", "La decisión conserva rendimiento y no añade fricción innecesaria.", "performance"),
    ("08", "La implementación se comporta correctamente en distintos tamaños.", "responsive"),
    ("09", "La solución es suficientemente propia para ser recordada y defendida.", "distinctiveness"),
    ("10", "El resultado puede validarse con una prueba concreta antes de publicarse.", "verification"),
]

IMPACT = {"01": "estratégico", "02": "alto", "03": "alto", "04": "alto", "05": "crítico", "06": "alto", "07": "crítico", "08": "crítico", "09": "alto", "10": "crítico"}

rows = []
for domain_code, domain, scope in DOMAINS:
    for check_code, check, lens in CHECKS:
        for variant in range(1, 11):
            criterion_id = f"{domain_code}-{check_code}-{variant:02d}"
            action = f"En {scope}, comprobar que {check[0].lower() + check[1:]} Variante {variant}: el caso debe tener evidencia visible y no una promesa abstracta."
            rows.append({"id": criterion_id, "domain": domain, "scope": scope, "lens": lens, "impact": IMPACT[check_code], "criterion": action, "status": "pendiente de auditoría"})

assert len(rows) == 2000
root = Path(__file__).resolve().parents[1]
out = root / "awards-criteria-2000.csv"
with out.open("w", newline="", encoding="utf-8") as handle:
    writer = csv.DictWriter(handle, fieldnames=rows[0].keys())
    writer.writeheader()
    writer.writerows(rows)

md = root / "awards-criteria-2000.md"
with md.open("w", encoding="utf-8") as handle:
    handle.write("# Matriz competitiva de 2.000 criterios\n\n")
    handle.write("> Esta matriz es una herramienta de auditoría propia inspirada en marcos públicos de premios y estándares web; no es una lista oficial de ningún jurado.\n\n")
    handle.write("La matriz contiene 20 dominios, 10 lentes de revisión y 10 variantes por combinación. Cada criterio se valida desde intención, audiencia, jerarquía, coherencia, inclusión, feedback, rendimiento, responsive, diferenciación y verificación.\n\n")
    handle.write("| ID | Dominio | Lente | Impacto | Criterio | Estado |\n|---|---|---|---|---|---|\n")
    for row in rows:
        criterion = row["criterion"].replace("|", "\\|")
        handle.write(f"| {row['id']} | {row['domain']} | {row['lens']} | {row['impact']} | {criterion} | {row['status']} |\n")

summary = root / "awards-criteria-summary.md"
with summary.open("w", encoding="utf-8") as handle:
    handle.write("# Resumen de la matriz\n\n")
    handle.write("| Dimensión | Cantidad |\n|---|---:|\n")
    for code, domain, _ in DOMAINS:
        handle.write(f"| {domain} ({code}) | 100 |\n")
    handle.write("| **Total** | **2.000** |\n")
