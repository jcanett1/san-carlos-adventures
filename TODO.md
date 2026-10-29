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

## Actualización: redes y distribución de dudas/contacto

- [x] En la sección de dudas/contacto mostrar botones visibles con iconos para Instagram, Facebook, TikTok y X, apuntando a los perfiles ya proporcionados, incluido https://www.facebook.com/sancarlos.adventures. Verificados cuatro enlaces con iconos y sus nombres.
- [x] Reorganizar «¿Tienes dudas?» para evitar la columna larga de contactos debajo del título: encabezado separado y, en escritorio, preguntas frecuentes y panel de contacto alineados en columnas equilibradas. Agrupar redes y contacto directo, conservando usuarios, teléfono, correo y Messenger. En escritorio, preguntas frecuentes y contacto aparecen en columnas alineadas; el panel agrupa cuatro redes y tres canales directos.
- [x] Adaptar el bloque a celular sin desbordamiento, conservar enlaces accesibles y no cambiar el CTA final de WhatsApp, el carrusel ni las tarjetas de servicios. Revisado en las capturas de escritorio y móvil; TypeScript y compilación estática completados; se conservaron WhatsApp, las cinco fotos del carrusel y las cinco tarjetas de servicios.

## Actualización: pasos para reservar un tour

- [x] Sustituir «¿Tienes dudas?» y las preguntas frecuentes por «Pasos para reservar un tour», con instrucciones visibles: reservar cualquier tour con un mínimo de 24–48 horas de anticipación y depósito del 50% del total mediante transferencia o pago en oficina; tours de lunes a domingo preguntando siempre disponibilidad de guía; mínimo de 2 personas para realizar cualquier tour. Verificados los tres pasos visibles y todas las condiciones exactas en el HTML prerenderizado.
- [x] Añadir «Al reservar el tour»: leer políticas de reservación, cancelación y responsabilidad al apartarlo; enviar comprobante de pago; enviar el plan de emergencia lleno, cada integrante debe llenar y enviar el suyo. Incluir «¡Gracias por tu preferencia!». No inventar políticas completas, datos bancarios ni formularios que no se proporcionaron. Verificados los tres pasos de este grupo y el mensaje final; dos listas numeradas accesibles, sin contenido oculto en acordeones.
- [x] Mantener los cuatro perfiles sociales, teléfono, correo y Messenger, el CTA final de WhatsApp y el resto del sitio. Actualizar la navegación a «Reservaciones» conservando el ancla #preguntas y la adaptación a celular. TypeScript y compilación estática completos; Vite resuelve Home.tsx y BookingSteps.tsx con HTTP 200; contactos, carrusel y tarjetas conservados.

## Actualización: políticas de tours en acordeón

- [x] Mostrar reservación con un mínimo de 48 horas de anticipación tanto en los pasos como en las políticas; depósito del 50% del monto total de la actividad y responsabilidad del cliente de proporcionar nombre completo y fecha de nacimiento para alta de seguro. Verificada la anticipación uniforme en el HTML generado.
- [x] Agregar acordeón de cancelación: por clima, reembolso del 70% del total o reprogramación; por cancelación del cliente, sin reembolso; por incumplir el horario estipulado, cancelación del tour sin reembolso. Se conservaron las condiciones suministradas sin reinterpretar porcentajes.
- [x] Agregar acordeón de responsabilidad para kayak/snorkel: inspeccionar equipo e informar inconformidades al guía antes de iniciar; avisar inmediatamente si se siente inseguro al usarlo; devolverlo como se recibió y pagar daños bajo posesión del cliente; pagar valor total por pérdida, robo, incendio o cualquier otra causa mientras esté en posesión del cliente.
- [x] Agregar acordeón de fotografías: publicación en Facebook en 5–7 días; traer USB si no se desean fotos públicas; avisar al guía al inicio del tour grupal para tomar fotos aparte si no quiere publicación; guías certificados en turismo de aventura no fotógrafos, fotos no profesionales.
- [x] Mantener pasos, redes, contacto y CTA WhatsApp, demás contenido y diseño adaptable. Cuatro acordeones nativos details/summary que se abren y cierran al activar sus encabezados y permiten uso mediante teclado. TypeScript, compilación estática y resolución de componentes en Vite correctos; sin datos bancarios ni condiciones inventadas.

## Actualización: pasos de reserva desplegables

- [x] Convertir «Para apartar tu tour» y «Al reservar el tour» en acordeones iguales al estilo de las políticas, con flecha, cerrados inicialmente y desplegables al tocar o activar con teclado; cada uno conserva sus tres pasos, mínimo de 48 horas y demás condiciones. Verificados dos details/summary sin atributo open, flecha y tres instrucciones por grupo en el HTML compilado.
- [x] Conservar las cuatro políticas desplegables, contacto, redes, WhatsApp y diseño adaptable; las flechas cambian de orientación al abrir y cerrar mediante el mismo selector [open] de las políticas. TypeScript, compilación estática y resolución Vite correctos; cuatro políticas, cuatro redes y tres canales directos intactos.


## Actualización: galerías y precios por servicio

- [x] Mostrar varias fotos por servicio con rotación automática en cada tarjeta, usando fotos del usuario o imágenes de servicio ya disponibles. Kayak: 4; recorrido guiado: 3; yate: 4; pesca: 2; senderismo: 5. Se comprobó la rotación de las cinco galerías y la carga de imágenes en el Preview público; transición suave cada 4.2 segundos, detenida mientras se muestra el reverso y con movimiento reducido.
- [x] En el reverso de la tarjeta mostrar opciones y precios por servicio: kayak solo y kayak + snorkel como «Consulta precio» porque el anuncio tiene vigencia a diciembre de 2025; yate «Si no quieres no», $2,500 MXN por hora, capacidad de 1 a 8 personas; senderismo de Cañón de Nacapule y Cerro Tetakawi, recorrido guiado y pesca deportiva como «Consulta precio», al no tener una tarifa confirmada vigente. Se usa el nombre Tour del Desierto y sus fotos para el recorrido en vehículo abierto aportado por el usuario.
- [x] Conservar el giro reversible de tarjetas, el texto descriptivo, las cinco actividades, el acceso de contacto, WhatsApp y comportamiento adaptable. Usar imágenes del material proporcionado o recursos de servicio ya disponibles y no alterar las originales. CSS original restaurado y extendido sin pérdida; comprobados giro, precios sin recorte, cinco columnas de escritorio, TypeScript y compilación. Dos grupos de pasos, cuatro políticas y WhatsApp intactos.


## Actualización: galería de servicios, idioma y redes

- [x] Cambiar «Postales de aventura» para mostrar más fotografías de todos los servicios: kayak, recorrido guiado/Tour del Desierto, yate, pesca deportiva y senderismo, manteniendo pies de foto y una distribución adaptable. La galería muestra 11 fotos con etiquetas: kayak y kayak + snorkel (2); Tour del Desierto en vehículo abierto y ruinas (3); yate (3); pesca ilustrativa (1, etiquetada); Nacapule y Tetakawi (2). Los perfiles fotográficos de los servicios mantienen sus distintas imágenes rotativas.
- [x] Agregar en esa sección el mensaje «También contamos con guías en inglés».
- [x] Agregar en esa sección botones con icono/enlace de Instagram, Facebook, TikTok y X, reutilizando los perfiles y destinos existentes de `contact.socials`.
- [x] Conservar el resto de la página, incluidas las tarifas/precios en tarjetas y contactos. Comprobadas las 11 fotos, etiquetas, enlaces exactos, guías en inglés, adaptación a escritorio/móvil, TypeScript y compilación estática; las cinco tarjetas, dos grupos de pasos, cuatro políticas, redes del panel de contacto y WhatsApp siguen intactos.


## Actualización: iconos de tarjetas y redes en el footer

- [x] Quitar el icono de Facebook repetido junto a «Consultar en Facebook» debajo de las tarjetas de servicios, conservando el enlace de texto a Facebook. Los cinco enlaces conservan solo el texto y la flecha de salida, sin el símbolo de Facebook.
- [x] Reemplazar el acceso único «Facebook oficial» del footer por enlaces con iconos de Instagram, Facebook, TikTok y X a los perfiles registrados. Cuatro enlaces con etiquetas accesibles, título, foco visible y destinos exactos; grupo adaptable de iconos sin desbordamiento observado.
- [x] Mantener los demás enlaces y contenidos del sitio; validar TypeScript y compilación estática. Verificados cinco tarjetas, enlaces de redes en galería, CTA de WhatsApp y cuatro iconos de footer en el HTML y Preview; compilación y TypeScript correctos.


## Actualización: limpiar enlaces bajo servicios y menú móvil

- [x] Quitar los enlaces a Facebook que aparecen debajo de cada tarjeta de servicio y la pregunta «Pregunta en Facebook» bajo la cuadrícula de tarjetas. No queda ningún enlace ni frase de Facebook bajo las cinco tarjetas.
- [x] Quitar el botón/icono de menú hamburguesa y dejar en móvil enlaces de navegación visibles y operables para Experiencias, Galería y Reservaciones; en escritorio permanece la navegación principal.
- [x] Conservar Facebook en el footer y la galería; el acceso del encabezado se retira en la actualización siguiente. Conservar los demás contenidos; verificados las cuatro redes del footer/galería, contactos, políticas, pasos, cinco tarjetas, TypeScript, build y captura móvil.


## Actualización: quitar Facebook del menú superior

- [x] Quitar el acceso a Facebook del menú superior de escritorio, conservando las secciones de Experiencias, Galería y Reservaciones. La navegación superior solo muestra esas tres secciones.
- [x] Conservar los accesos a Facebook del hero, la galería y el footer, además de las redes sociales, contactos y WhatsApp existentes.
- [x] Validar la navegación, TypeScript y compilación estática sin afectar la barra móvil sin hamburguesa; comprobado en HTML, Preview, captura desktop y captura móvil.


## Actualización: navegación transparente sobre la portada

- [x] Hacer transparente la barra del menú y superponerla a la imagen de portada para que la fotografía se vea detrás del header. Header absoluto sobre la portada, sin fondo opaco, borde ni desenfoque propio; la navegación móvil también es transparente.
- [x] Cambiar «Experiencias», «Galería» y «Reservaciones» a naranja, a juego con los acentos naranjas existentes. Enlaces en var(--orange), #f28c28, con sombra de texto para legibilidad y foco visible conservado.
- [x] Conservar el logo, las tres anclas de navegación, la accesibilidad y el menú móvil sin botón de hamburguesa; validar desktop, móvil, TypeScript y build. TypeScript y build:static correctos; capturas de escritorio 1440×900 y móvil 390×844 confirman el header superpuesto y las tres opciones naranjas sin desbordamiento.


## Actualización: centrar la franja de categorías

- [x] Centrar horizontalmente «MAR», «RUTA», «NATURALEZA» y «AVENTURA» con sus separadores dentro de la franja naranja. Fila de ancho completo con justify-content:center y separadores solo entre los cuatro términos.
- [x] Mantener una sola presentación centrada, adaptable a escritorio y móvil, sin contenido recortado ni desplazamiento lateral. Eliminado el segundo grupo duplicado; tamaños y espacios móviles ajustados para que los cuatro términos quepan juntos.
- [x] Conservar el resto de la página y validar TypeScript, build y vistas escritorio/móvil. TypeScript y build:static correctos; capturas 1440×900 y 390×844 confirman una sola fila centrada y completa; header transparente, naranja y demás secciones conservados.
- [ ] Guardar las actualizaciones recientes de la franja y el carrusel como checkpoint de Manus. El transporte Git volvió a funcionar el 27-10-2026 y main aceptó el commit 9338ae5 con todos los cambios pendientes y las fotos nuevas. No apareció una tarjeta de checkpoint en la respuesta; queda pendiente confirmar ese recibo, no el guardado del código. La copia pública de GitHub también está actualizada.

## Actualización: carrusel de portada solo con puntos

- [x] Quitar el contenedor en cápsula, las flechas anterior/siguiente y el botón de pausa del carrusel de portada, dejando únicamente cinco puntos indicadores. Verificados cinco botones accesibles y ausencia de flechas, pausa y cápsula.
- [x] Al seleccionar un punto, mostrar la foto correspondiente y continuar el avance automático cada 5.5 segundos, manteniendo marcado en naranja el indicador de la foto activa. Prueba en Preview y en GitHub Pages: seleccionar el quinto punto activa la foto 5 y el avance automático continúa a la siguiente foto después de 5.7 segundos.
- [x] Conservar las cinco fotos, textos, navegación, franja centrada, diseños de escritorio/móvil, foco accesible y preferencia del sistema de movimiento reducido; guardar la versión pública en GitHub Pages. TypeScript y build:static correctos; capturas desktop/móvil revisadas; Pages actualizado en commit 854084c y comprobado en la URL pública. El checkpoint de Manus queda pendiente por el fallo del transporte Git registrado arriba.


## Actualización: fotos nuevas del carrusel «El mar te llama»

- [x] Reemplazar las cinco imágenes actuales de portada, en el orden recibido: personas en kayak, senderismo, recorrido todoterreno del desierto, cañón con visitantes y sandboarding. Verificados los cinco archivos y su orden en el HTML prerenderizado.
- [x] Usar las imágenes originales proporcionadas, sin alterar los archivos; actualizar descripciones accesibles y leyendas para que correspondan a cada foto. Las cinco copias de Pages coinciden byte por byte con los originales y se subieron igualmente a Storage.
- [x] Conservar los cinco puntos seleccionables, el avance automático cada 5.5 segundos, la preferencia de movimiento reducido, la franja centrada, el header transparente y la adaptación móvil. TypeScript y build correctos; no se alteraron lógica de controles, CSS ni otras secciones; capturas desktop/móvil comprobadas.
- [x] Publicar también las cinco imágenes y la versión actualizada en el repositorio/copia de GitHub Pages conectado; validar Preview, compilación y los cinco recursos públicos. Publicación 40577443470 exitosa, commit 9abb1ce; página y cinco archivos devuelven HTTP 200, orden correcto y hashes de los cinco originales confirmados. Código guardado en main gestionado en 9338ae5; confirmación de tarjeta de checkpoint registrada arriba.


## Actualización: imágenes del hero a cuadro completo

- [x] Las cinco fotos, incluidas las verticales, deben ocupar el 100% del ancho y alto del carrusel como la referencia de kayak, sin verse a la mitad ni sobre una copia desenfocada. Usar encuadre cover y conservar texto legible a la izquierda. Verificadas las cinco imágenes cargadas con marco idéntico de 1265×820 en Preview, object-fit:cover y sin capa duplicada.
- [x] En móvil, llenar igualmente la portada con la foto activa y conservar lectura de título, leyenda y puntos. Revisado el encuadre de portada en 1440×900 y 390×844; texto, navegación y cinco puntos permanecen visibles.
- [x] Mantener sin alteraciones los cinco archivos originales; únicamente se ajusta su encuadre en pantalla para llenar la portada. Solo se modificó presentación CSS y metadatos de orientación; las imágenes se reutilizan sin transformación ni recarga.
- [x] Conservar cinco puntos seleccionables, avance automático cada 5.5 segundos, descripciones, header y franja; comprobar Preview y GitHub Pages y guardar ambos. Puntos y selección verificados en Preview; TypeScript y compilación estática correctos en ambos repositorios. Push gestionado ff0c746 aceptado; copia GitHub ecf7993 publicada mediante workflow 40579306365, terminado con success.


## Actualización: nueva serie de cinco fotos de portada

- [x] Reemplazar nuevamente las cinco imágenes de «El mar te llama», en el orden recibido: mirador desde un arco rocoso, pareja en kayak, recorrido en cuatrimoto, sandboarding en dunas y grupo de senderismo en la cima. El HTML prerenderizado confirma exactamente ese orden.
- [x] Cargar las cinco fotos originales proporcionadas, sin editarlas; actualizar textos alternativos, leyendas y categorías para describir lo que aparece en cada una. Las cinco imágenes se subieron al Storage y las copias de Pages verifican las mismas sumas SHA-256 de los originales.
- [x] Conservar las cinco posiciones, los puntos seleccionables, avance automático de 5.5 segundos, encuadre a cuadro completo, movimiento reducido y lectura del texto. Se mantuvo intacta la lógica/CSS del carrusel, cinco puntos confirmados y TypeScript/build del sitio principal y la copia Pages pasan.
- [x] Sustituir los recursos también en la copia de GitHub Pages, validar ambas compilaciones, archivos e imagen pública, y guardar los cambios en ambos repositorios. Main gestionado aceptó ae7a6c3 y GitHub aceptó 76058bd. Workflow Pages 40643034312 terminó con success; la página pública sirve index-1o9coi49.js y las cinco fotos nuevas responden HTTP 200 con SHA-256 idéntico a los originales. El recibo de checkpoint de Manus permanece sin confirmar según el registro anterior; el código y la publicación pública sí están guardados.


## Actualización: tres rutas nuevas en «Cinco rutas»

- [x] Agregar las rutas «Paseo en cuatrimoto», «Sandboard en las dunas» y «Snorkel» en la sección de experiencias; actualizar el encabezado para reflejar el total de ocho rutas. HTML final de ambas compilaciones confirma ocho tarjetas y los tres títulos nuevos.
- [x] Asignar a cada nueva ruta sus fotos proporcionadas: cuatrimoto en paisaje desértico, sandboard con tablas en las dunas y snorkel con imágenes submarinas. Conservar los archivos originales sin editar y evitar duplicar fotos idénticas. Seis fotos únicas cargadas a Storage y copiadas a Pages con hashes idénticos; dos pares repetidos se deduplicaron sin alterar originales.
- [x] Mantener el estilo y funcionamiento de las tarjetas existentes: galería de fotos, texto y reverso con descripción/opciones; usar «Consulta precio» si no se proporcionó una tarifa y no inventar detalles de rutas. Mostrar las imágenes nuevas también sin romper la galería general. Cada ruta nueva usa dos fotos, la misma rotación y giro; cuatro columnas de escritorio y ajuste responsivo conservado. Galería de 17 fotos con filas completas; revisión independiente confirma tarifas, hero, contactos y políticas intactos.
- [x] Validar TypeScript y la compilación estática, actualizar la copia de GitHub Pages, confirmar fotos públicas y guardar los cambios en ambos repositorios. Ambas validaciones correctas; main gestionado aceptó 47b47f2 y Pages 9b00038. Workflow 40644285290 terminó con success. Página pública HTTP 200 con ocho tarjetas, 17 fotos y bundles index-CO5H9eA4.js/index-B5jy2oKj.css; los seis recursos nuevos responden HTTP 200 y conservan SHA-256 idéntico a los originales. El recibo de checkpoint de Manus no apareció; el guardado del código y la publicación Pages sí se confirmaron.

## Actualización: tres tours de senderismo (28 de octubre de 2026)

- [x] En la tarjeta Senderismo mostrar los tours a Nacapule, La Poza Manantial y Cerro Tetakawi, en ese orden, tanto en el texto descriptivo como en las opciones del reverso. Mantener «Consulta precio», conservar detalles ya confirmados de Nacapule y Tetakawi y no inventar duración o dificultad de La Poza Manantial. Conservar fotos, giro, ocho tarjetas y todo el contenido no relacionado. Validar y sincronizar el repositorio principal y la copia publicada en GitHub Pages. TypeScript y compilaciones de ambas copias correctos; solo se modificó el catálogo de senderismo. Pages 02a2975 publicado mediante workflow 40709255848; HTTP 200 confirma tres opciones en orden, texto frontal actualizado, cinco fotos de senderismo y ocho tarjetas conservadas. Bundle index-B0-FAdQQ.js disponible públicamente.


## Actualización: recorrido guiado, reserva, fotografías y yate (28 de octubre de 2026)

- [x] Quitar la visita a las ruinas del Catch 22 del recorrido guiado, conservando los otros destinos, duración y capacidad ya publicados. La descripción compilada conserva Ojo de Agua, La Manga 2, playa Los Algodones, 2.5–3 horas y máximo 14 personas, sin nombrar Catch 22.
- [x] Cambiar el tiempo de anticipación de la reserva a 24 a 48 horas tanto en los pasos como en la política de reservación, para evitar indicaciones contradictorias. Se validaron las dos menciones tras TypeScript y prerender.
- [x] En «Fotografías de los tours», indicar que tardan de 5 a 7 días en compartirse. La política compilada contiene esta frase y ya no señala la página de Facebook.
- [x] Agregar el yate «Mi Gusto» a la tarjeta de yate con costo de $3,500 MXN por hora y capacidad de 10 a 25 personas como máximo, preservando la opción «Si no quieres no» a $2,500 MXN/hora para 1 a 8 personas. HTML compilado confirma las dos opciones y ambas capacidades.
- [x] Validar, guardar en main y publicar la copia GitHub Pages. TypeScript y builds de ambas copias correctos; main gestionado aceptó 4f4d131 y Pages a75afad. Workflow 40721082894 terminó correctamente. Verificación pública HTTP 200 confirma el recorrido sin Catch 22, anticipación 24–48 h en pasos y política, fotografías en 5–7 días, ambas opciones de yate con precios/capacidades, ocho tarjetas y bundle nuevo cargado.


## Actualización: recorridos en inglés, lo que incluyen los tours y contacto (28 de octubre de 2026)

- [x] En «El paisaje cambia. La emoción se queda.», indicar que hay recorridos en inglés con guías bilingües. El texto del HTML compilado lo confirma.
- [x] En esa sección informar que todos los tours incluyen equipo completo, hidratación, seguro de gastos médicos, fotografías y guías acreditados. Los cinco elementos aparecen en la frase prerenderizada.
- [x] En «Información de contacto», agregar el teléfono 622-142-5010 como opción adicional y seleccionable, conservando el teléfono 622-130-7338 y los demás medios de contacto. HTML confirma los dos enlaces tel: y que el CTA/WhatsApp siguen usando el número principal.
- [x] Validar el contenido y sincronizar ambos repositorios; publicar y confirmar GitHub Pages. TypeScript/build correctos en las dos copias; main gestionado aceptó 7afbb5e y Pages 08a7197. Workflow 40722546468 terminó correctamente. HTTPS público HTTP 200 confirma recorridos en inglés con guías bilingües, equipo completo, hidratación, seguro de gastos médicos, fotografías, guías acreditados, enlaces tel: para 622-130-7338 y 622-142-5010, y WhatsApp principal intacto.


## Actualización: próximos servicios de Punto Náutico (28 de octubre de 2026)

- [x] Agregar una sección propia «Nuestros próximos servicios» para Punto Náutico, con la imagen proporcionada por el usuario y una descripción de lo que ofrecerá próximamente. Se ubica entre galería y reservaciones, marcada como «Próximamente», sin fecha ni precios inventados.
- [x] Resumir las categorías que aparecen en la imagen: embarcaciones/mantenimiento y accesorios; artículos de pesca; audio marino; aventura/snorkel; instalación, equipo eléctrico/electrónico y mantenimiento básico. HTML prerenderizado y revisión independiente confirman las cinco áreas.
- [x] Conservar el volante original sin editar, añadir texto alternativo descriptivo y adaptar la sección a escritorio y móvil. Original en Storage y Pages con SHA-256 idéntico; imagen de alto automático sin recorte, enlace al volante completo, dos columnas en escritorio y una hasta 800 px.
- [x] Validar build y contenido, sincronizar main y la copia GitHub Pages, publicar y comprobar la página y el recurso. TypeScript/build de ambas copias correctos y revisión independiente aprobada. Pages 31154dc publicado mediante workflow 40723905016; comprobación HTTPS pública confirma la sección, cinco áreas, enlaces, ocho tarjetas y ambos teléfonos conservados. Volante HTTP 200 con SHA-256 idéntico al original y bundles index-By2f5IYx.js/index-C0MA-FZX.css disponibles.


## Corrección: imágenes 404 en Netlify (28 de octubre de 2026)

- [x] Configurar Netlify para compilar el código fuente con base en la raíz del dominio y publicar `dist/public`, sin el prefijo `/san-carlos-adventures/` de GitHub Pages. `netlify.toml` selecciona `pnpm run build:static`, `dist/public` y `GITHUB_PAGES=false`.
- [x] Asegurar que la compilación incluya bajo `dist/public/images/site-assets/` todas las imágenes referenciadas de `images/site-assets/`, incluidas las fotos recientes de portada, rutas y Punto Náutico; corregir o evitar el 404 del favicon indicado en consola. El build copia las 36 imágenes con `scripts/copy-site-assets.mjs`; el HTML ofrece un favicon explícito desde el logo existente.
- [x] Validar el HTML/bundle Netlify en base raíz y confirmar que las imágenes solicitadas existen y responden en el despliegue publicado; sincronizar y guardar el arreglo en GitHub y el repositorio gestionado. `https://sancarlosadventures.mx/` respondió HTTP 200 y sirve el bundle desde `/assets/`; las 17 imágenes que faltaban del output anterior respondieron HTTP 200 por `/images/site-assets/` y las 12 rutas revisadas con GET también respondieron 200. El HTML declara `/images/site-assets/brand-logo.jpg` como favicon y ese recurso responde 200. Configuración y código guardados en GitHub (`c5676a6`) y el registro actualizado en el repositorio gestionado. El sitio sigue compilando en GitHub Pages con su prefijo `/san-carlos-adventures/`; el pipeline de Netlify permanece solo en su copia GitHub.
- [x] Añadir y desplegar una regla Netlify para que `/favicon.ico` responda con el logo publicado (`/images/site-assets/brand-logo.jpg`), y verificarla en vivo. Tras el commit GitHub `8727877`, `https://sancarlosadventures.mx/favicon.ico` respondió HTTP 200 con `image/jpeg`.
