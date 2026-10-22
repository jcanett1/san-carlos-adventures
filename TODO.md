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

## Actualización: Facebook y medios de contacto

- [x] Quitar los enlaces de las dos fotos de la galería «El paisaje cambia. La emoción se queda.» y sus flechas de enlace, conservando las imágenes y sus etiquetas. El HTML generado contiene dos imágenes y ningún enlace ni flecha dentro de ellas.
- [x] Cambiar todos los accesos de Facebook del sitio a https://www.facebook.com/sancarlos.adventures, sin enviar al álbum /photos. Actualizar el botón de la galería para que invite a visitar la página de Facebook. Verificada la URL compartida de todas las anclas de Facebook del HTML generado; reemplaza el destino al álbum registrado en el requisito inicial.
- [x] En «¿Tienes dudas?» añadir iconos y enlaces de contacto: Instagram sancarlos_adventures, X adventures_sc, TikTok sancarlos_adventures, teléfono 622 130 7338, correo sancarlos_adventures@hotmail.com y Messenger San Carlos Adventures. El teléfono permite llamar mediante tel:+526221307338, el correo redactar un mensaje mediante mailto:sancarlos_adventures@hotmail.com y cada red abrir su perfil correspondiente. Verificados los seis enlaces y sus iconos en el HTML generado.
- [x] Conservar el carrusel de cinco fotos, las tarjetas giratorias, las preguntas frecuentes y el diseño adaptable; los contactos son legibles en filas de ancho flexible en celular y accesibles mediante teclado con foco visible. TypeScript y compilación estática completos; se conservan cinco fotos de portada, cinco servicios y cuatro preguntas frecuentes.

## Actualización: WhatsApp en el CTA final

- [x] En «¿Listo para explorar?» quitar el botón de Facebook y reemplazarlo por un botón de WhatsApp al número 622 130 7338. El enlace directo es https://wa.me/526221307338 y el botón muestra el número; conservar los demás enlaces de Facebook del sitio y todos los contenidos actuales. Verificados TypeScript, compilación estática, CTA sin enlace a Facebook y recarga de Home.tsx con HTTP 200.
