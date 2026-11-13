# Portafolio de Rodrigo (bel001)

Portafolio personal, estático y adaptable a móvil. Los proyectos destacados se basan en repositorios públicos de [bel001](https://github.com/bel001).

## Ver en local

En esta carpeta, ejecuta:

```powershell
python -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000). Si no tienes Python, puedes usar `npx serve .`.

## Editar

- `index.html`: textos, proyectos y enlaces.
- `styles.css`: colores, tipografía y diseño adaptable.
- `script.js`: menú móvil, modo oscuro, ampliación de capturas y año del pie de página.
- `assets/horatriz-schedule.png` y `assets/codevibe-screen.png`: capturas reales de proyectos públicos. La primera muestra un horario generado con los datos de ejemplo de Horatriz; la segunda procede del README de CodeVibe.
- `assets/fonts/`: tipografía local Bricolage Grotesque en WOFF2 (licencia OFL incluida).
- `assets/social-preview.png`: vista previa para compartir, capturada del propio portafolio.
- `PRODUCT.md` y `DESIGN.md`: hechos y decisiones de diseño del portafolio.

La skill local [`.codex/skills/actualizar-portafolio/SKILL.md`](.codex/skills/actualizar-portafolio/SKILL.md) explica cómo revisar GitHub y actualizar los proyectos sin inventar datos.

El tema sigue la preferencia del sistema hasta que el visitante elige uno con el botón del encabezado. Esa elección se recuerda en el navegador. La entrada visual y las respuestas de los controles respetan `prefers-reduced-motion`.

## Publicar gratis en GitHub Pages

El sitio ya está preparado para `https://bel001.github.io/`: incluye URL canónica, `og:url`, `robots.txt`, `sitemap.xml`, una página `404.html` y `.nojekyll` (sirve los archivos tal cual, sin procesarlos con Jekyll).

1. En GitHub, crea un repositorio **público** llamado exactamente `bel001.github.io`, sin README ni `.gitignore` para que empiece vacío.
2. En esta carpeta (ya es un repositorio git con la rama `main`), ejecuta:

   ```powershell
   git remote add origin https://github.com/bel001/bel001.github.io.git
   git push -u origin main
   ```

3. En el repositorio, abre **Settings → Pages → Build and deployment**, elige **Deploy from a branch** y selecciona **main** y **/ (root)**.
4. Pasados uno o dos minutos, el sitio estará en `https://bel001.github.io/`.

Para actualizarlo más adelante: `git add -A`, `git commit -m "mensaje"` y `git push`.

La [documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) confirma el alojamiento de sitios estáticos en repositorios públicos con GitHub Free. Si más adelante agregas un framework o funciones de servidor, [Vercel Hobby](https://vercel.com/docs/plans/hobby) puede ser conveniente para proyectos personales, sujeto a sus límites y condiciones.

El nombre visible es Rodrigo y el contacto público usa el LinkedIn que proporcionaste. Antes de publicar, revisa la selección de proyectos. Si eliges una dirección distinta de `bel001.github.io`, actualiza también la URL absoluta de `og:image` en `index.html` para que la vista previa funcione al compartir.
