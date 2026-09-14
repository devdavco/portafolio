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
    └── juan.jpg        # Foto de perfil usada en el hero
```

## Cómo editar

- **Textos y datos** (nombre, contacto, tecnologías): edita `index.html`.
- **Colores y tipografía**: edita las variables al inicio de `css/styles.css`.
- **Comportamiento**: edita `js/main.js`.

## Desarrollo local

Cualquier servidor estático funciona. Por ejemplo:

```bash
npm run dev
```

Luego abre `http://localhost:3000`.
