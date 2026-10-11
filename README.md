# Portafolio - David Corrales

Portafolio de una sola página hecho con HTML, CSS y JavaScript puro. Sin frameworks ni build.

## Estructura por capas

```
.
├── index.html        # Estructura y contenido
├── css/
│   └── styles.css     # Presentación (tokens de tema al inicio)
├── js/
│   └── main.js        # Comportamiento (año del footer, reveal-on-scroll)
└── img/
    ├── Juan_Corrales_Dev_FullStack_Java_SpringBoot_Backend.jpg  # Foto del hero
    ├── coworking-dashboard.webp                                 # Captura del proyecto
    └── icons/                                                   # Iconos SVG del stack
```

## Cómo editar

- **Textos y datos** (nombre, contacto, tecnologías): edita `index.html`.
- **Nueva tecnología en el stack**: agrega su SVG en `img/icons/` y un `<li>` en el bloque correspondiente de `index.html`.
- **Colores y tipografía**: edita las variables al inicio de `css/styles.css`.
- **Comportamiento**: edita `js/main.js`.

## Desarrollo local

Cualquier servidor estático funciona. Por ejemplo:

```bash
npm run dev
```

Luego abre `http://localhost:3000`.
