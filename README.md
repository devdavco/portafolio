# Portafolio - David Corrales

Portafolio hecho con HTML, CSS y JavaScript puro. Sin frameworks ni build. Incluye una página principal y un blog.

## Estructura por capas

```
.
├── index.html                  # Página principal: estructura y contenido
├── David_Corrales_CV.pdf       # CV descargable (enlace "CV" del hero)
├── blog/
│   ├── index.html              # Listado de artículos
│   ├── articulo-ejemplo.html   # Artículo de ejemplo (estructura con TODO)
│   └── plantilla-articulo.html # Plantilla para artículos nuevos (sin enlazar)
├── css/
│   └── styles.css              # Presentación (tokens de tema al inicio)
├── js/
│   └── main.js                 # Comportamiento (tema, año del footer, reveal-on-scroll)
├── img/
│   ├── Juan_Corrales_Dev_FullStack_Java_SpringBoot_Backend.jpg  # Foto del hero
│   ├── coworking-dashboard.webp                                 # Captura de Coworking
│   ├── hotkey-translate.webp                                    # Captura de Hotkey Translate
│   ├── technopet.webp                                           # Captura de TechnoPet
│   └── icons/                                                   # Iconos SVG del stack
├── vercel.json                 # cleanUrls: /blog/ y /blog/articulo resuelven sin .html
└── .kiro/specs/auditoria-pf1/  # Auditoría de la rúbrica PF1 (requisitos, diseño y tareas)
```

## Cómo editar

- **Textos y datos** (nombre, contacto, tecnologías): edita `index.html`.
- **Nueva tecnología en el stack**: agrega su SVG en `img/icons/` y un `<li>` en el bloque correspondiente de `index.html`.
- **Colores y tipografía**: edita las variables al inicio de `css/styles.css`.
- **Comportamiento**: edita `js/main.js`.
- **Contenido pendiente**: busca los marcadores con `grep -rn "TODO(David)" .` y reemplázalos por contenido real.

### Reemplazar el CV

Sustituye `David_Corrales_CV.pdf` en la raíz conservando el nombre. El enlace "CV" del hero descarga ese archivo.

### Agregar una captura a un proyecto

1. Guarda la imagen en `img/` en formato `.webp` de 1400x560.
2. En la tarjeta del proyecto en `index.html`, agrega un bloque `project-media` como el de Coworking o Hotkey Translate.
3. Para convertir una captura PNG: `cwebp -q 82 captura.png -o img/proyecto.webp`.

### Blog oculto por ahora

El blog existe en `blog/`, pero no es visible en el sitio. Para publicarlo:

1. En `index.html`, descomenta el enlace "Blog" del nav y el bloque `#blog` (vista previa).
2. En `vercel.json`, elimina las dos reglas de `redirects` hacia `/`.
3. En `blog/index.html`, quita la línea `<meta name="robots" content="noindex">`.

### Publicar un artículo del blog

1. Copia `blog/plantilla-articulo.html` a `blog/<nombre-corto>.html` (sin tildes ni espacios).
2. Cambia el título, la descripción, la fecha, las etiquetas y el cuerpo, y quita la línea `noindex`.
3. Agrega el artículo a `blog/index.html` y a la vista previa `#blog` de `index.html`, del más reciente al más antiguo.

## Desarrollo local

```bash
pnpm install
npm run dev
```

Luego abre `http://localhost:3000`. El blog está en `http://localhost:3000/blog/` y el CV en `http://localhost:3000/David_Corrales_CV.pdf`.
