# San Carlos Adventures

Sitio publicado: [https://jcanett1.github.io/san-carlos-adventures/](https://jcanett1.github.io/san-carlos-adventures/)

Este repositorio contiene una copia del sitio informativo de San Carlos Adventures. Presenta experiencias de kayak, recorrido guiado/Tour del Desierto, paseo en yate, pesca deportiva y senderismo, junto con información de reservaciones y contacto.

## Publicación en GitHub Pages

GitHub Pages está configurado para publicar desde la rama `main`, carpeta raíz. El `index.html` de esa raíz y sus recursos son la compilación estática de Vite; el código fuente de la app vive en `client/`.

Para volver a generar el sitio después de editar el código:

```bash
pnpm install --frozen-lockfile
GITHUB_PAGES=true pnpm build:static
cp -a dist/public/. .
touch .nojekyll
git add .
git commit -m "Actualizar el sitio publicado"
git push origin main
```

Las fotos del sitio están incluidas en `client/public/images/site-assets/`. La compilación usa el prefijo `/san-carlos-adventures/` para que funcionen en la dirección de Pages de este repositorio.
