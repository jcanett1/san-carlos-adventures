# San Carlos Adventures — resultados

- [x] Página de inicio en español con presentación clara de San Carlos Adventures y una invitación a explorar sus actividades, siguiendo el estilo aprobado Expedición Náutica (azul oceánico #123B4A, naranja #F28C28 y Barlow Condensed).
- [x] Sección de experiencias con paseos en kayak, recorrido guiado en bus, paseo en yate, pesca deportiva y senderismo. Información comercial no confirmada se consulta en Facebook; no se inventaron precios, horarios ni disponibilidad.
- [ ] Galería visual con imágenes disponibles en la página de fotos de Facebook de San Carlos Adventures, respetando la disponibilidad y permisos de uso de la fuente. Facebook redirige al acceso para abrir o guardar fotografías individuales. La versión actual utiliza fotografías y el logotipo atribuidos a Enrike’s Adventures / San Carlos Adventures en su ficha pública de What's Up San Carlos; se preservaron las fuentes en assets/SOURCES.md. La extracción directa desde el álbum queda pendiente de disponer de las fotos proporcionadas por el cliente o un acceso autorizado.
- [x] Enlace visible y fácil de seleccionar hacia https://www.facebook.com/sancarlos.adventures/photos, que abre la página oficial al seleccionarlo, desde cabecera, portada, cada experiencia, galería y pie.
- [x] Diseño adaptable para celulares, tabletas y computadoras, con navegación sencilla y contenido completamente en español. Menú móvil expandible y preguntas frecuentes desplegables.
- [x] Página disponible en Preview, con servidor activo en el puerto configurado 3000 y manifiesto de ruta / con HTTP 200. TypeScript y compilación estática completos. HTML inicial prerenderizado verificado con los cinco servicios y enlace de Facebook.

El avance está preparado para guardarse como checkpoint de Manus. No se solicitó publicación externa, por lo que no se ha publicado.

## Actualización: servicios con foto y giro

- [x] Cada uno de los cinco servicios — paseo en kayak, recorrido guiado en bus, paseo en yate, pesca deportiva y senderismo — muestra su propia imagen relacionada con la actividad.
- [x] Al dar clic o tocar la tarjeta, esta se voltea para mostrar la descripción del servicio. Un segundo clic o toque permite volver a ver la imagen. También se puede activar con Enter o espacio. Cada tarjeta mantiene su estado independiente mediante useState y el giro 3D se activa por aria-pressed.
- [x] Se conservan los enlaces de Facebook fuera del botón de giro, el estilo visual actual y la adaptación a celular. Las fotos ilustrativas de bus y pesca no se presentan como fotografías verificadas del operador. Las tarjetas usan 5, 3, 2 o 1 columnas según la pantalla y respetan la preferencia de movimiento reducido.

## Actualización: carrusel de portada a pantalla completa

- [x] En la portada, sustituir el único recuadro de imagen por un carrusel de cinco fotos de kayak y senderismo que abarque toda la sección principal, sin quedar limitado al marco pequeño. Dos fotos distintas de kayak y tres de senderismo; el recuadro y su marco redondeado se retiraron del componente de portada.
- [x] Mostrar cada foto completa, sin recortarla, y alternar las imágenes automáticamente cada 5.5 segundos. Los controles permiten pasar a la foto anterior/siguiente, elegir un slide y pausar o reanudar el carrusel. Las fotografías usan object-fit: contain y se completa el fondo con una versión suavizada de la imagen.
- [x] Mantener legible el título y los botones sobre las fotos, adaptar el carrusel a pantallas móviles, proporcionar controles accesibles y respetar la preferencia de movimiento reducido. Comprobado con TypeScript, compilación estática y revisión de la portada en 1460 × 900 y 390 × 844; pausa automática para usuarios que prefieren movimiento reducido.
