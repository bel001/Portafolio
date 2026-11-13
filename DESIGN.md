# Dirección visual del portafolio

Una carpeta editorial de proyectos: fondo blanco, tinta oscura y un acento naranja rojizo. El visitante ve una aplicación real desde el primer pantallazo. No se usan ilustraciones generadas, vidrio decorativo, degradados, cifras ficticias, píldoras de habilidades ni lemas abstractos.

La tipografía Bricolage Grotesque se sirve en WOFF2 desde `assets/fonts`. El sistema usa títulos compactos y expresivos, texto de lectura sobrio, líneas finas y grandes áreas blancas. Las capturas conservan su aspecto real y van acompañadas de contexto breve y enlaces claros. La lista restante usa filas abiertas en vez de tarjetas repetidas.

En móvil, el contenido se presenta en una sola columna y las imágenes mantienen una relación de aspecto legible. El menú conserva el comportamiento de `script.js`, con estados de foco visibles y objetivos táctiles amplios.

Las dos capturas principales pueden abrirse en un diálogo para inspeccionarlas; en móvil el visor permite desplazarse por la imagen ampliada. La página termina con un contacto concreto por LinkedIn y un enlace al código de Rodrigo en GitHub. La imagen social es una captura del propio primer pantallazo y su URL pública apunta al futuro alojamiento en GitHub Pages.

El modo oscuro conserva la misma composición: fondo verde carbón (`#111917`), superficies en verde profundo (`#1d2925`), tinta clara (`#f2f4ef`) y acento coral (`#ff9278`). La elección manual se guarda en el navegador; sin elección previa se respeta la preferencia del sistema. El interruptor usa iconos SVG de luna y sol y anuncia su estado con `aria-pressed`.

El movimiento principal descubre la captura de Horatriz como una lámina al entrar. Los enlaces responden con un pequeño desplazamiento de la flecha, las filas con una rotación breve y el tema cambia de color sin alterar la composición. `prefers-reduced-motion` elimina el movimiento espacial y conserva el estado final visible.
