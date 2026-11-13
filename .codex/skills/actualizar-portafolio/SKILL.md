---
name: actualizar-portafolio
description: Revisar y actualizar el portafolio local de bel001 a partir de sus repositorios públicos de GitHub, cuando se pida renovar proyectos, enlaces o textos de esta web.
---

# Actualizar el portafolio de bel001

Trabaja en la raíz de este proyecto. Lee `PRODUCT.md`, `DESIGN.md`, `index.html`, `styles.css` y `README.md` antes de editar.

1. Consulta `https://api.github.com/users/bel001/repos?per_page=100` y el README de cada proyecto candidato. Verifica descripción, tecnologías, estado y enlaces públicos en la fuente. Elige proyectos que muestren variedad y evidencia clara; no priorices estrellas o fechas por sí solas.
2. Actualiza los proyectos de `index.html` según su relevancia y evidencia. Resume la función comprobada de cada proyecto en una o dos frases. Distingue prototipos académicos de productos en producción. No atribuyas métricas, clientes, cargos, títulos, correo electrónico o funciones que las fuentes no confirmen.
3. Mantén los enlaces a código y demos correctos. Muestra «Ver sitio» solo si la demo responde y corresponde al proyecto. Si el usuario da datos personales o preferencias nuevas, priorízalos.
4. Conserva la dirección de `DESIGN.md` y el diseño móvil salvo que se solicite un cambio. Usa capturas reales del proyecto, con fuente identificable, en lugar de ilustraciones genéricas. Revisa contraste, teclado, menú móvil, enlaces y tamaños de pantalla antes de cerrar.
5. Actualiza `README.md` si cambian las instrucciones de edición o publicación. Trabaja en local; publica o modifica un sitio remoto solo cuando el usuario lo pida.

El portafolio es un sitio estático sin dependencias de compilación. Para comprobarlo localmente, sirve la raíz con `python -m http.server 8000` y abre `http://localhost:8000`.
