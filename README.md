# Gestión Vinculación - Analíticas

Aplicación web creada con React, Vite y Tailwind CSS que simula un panel de analíticas empresarial con formularios CRUD dinámicos y un sistema de temas corporativos centralizado.

## Requisitos

- Node.js 18+
- npm

## Scripts disponibles

```bash
npm install   # instala las dependencias (requiere acceso a npm)
npm run dev   # levanta el entorno de desarrollo en http://localhost:5173
npm run build # genera la versión de producción
npm run preview # sirve la build generada
```

## Personalización de colores

Los esquemas de color están definidos en `src/theme/palettes.js`. Cada perfil contiene los tokens de color principales en formato `R G B`. Los usuarios pueden seleccionar el tema corporativo deseado desde el selector “Personalizar colores” en el encabezado.

Para crear un nuevo esquema basta con añadir una clave en `colorProfiles` y definir los valores correspondientes:

```js
export const colorProfiles = {
  miTema: {
    name: 'Mi tema',
    primary: '123 45 67',
    secondary: '89 23 45',
    accent: '32 54 76',
    surface: '255 255 255',
    muted: '15 23 42',
    'muted-foreground': '100 116 139',
    border: '226 232 240',
    ring: '123 45 67',
  }
};
```

## Estructura principal

- `src/App.jsx`: configuración de rutas y páginas.
- `src/theme/ThemeContext.jsx`: aplica y expone el tema activo a toda la app.
- `src/pages/`: páginas para panel acumulativo, comparativo, territorial y CRUD.
- `src/components/`: componentes reutilizables (tarjetas, filtros, tablas, formularios dinámicos).
- `src/data/dashboard.js`: datos de ejemplo para alimentar la interfaz.

## Notas

Debido a las restricciones del entorno, la ejecución de `npm install` puede requerir acceso externo al registro de npm.
