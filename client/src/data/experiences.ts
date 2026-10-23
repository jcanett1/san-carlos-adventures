export type ExperiencePhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
  illustrative?: boolean;
};

export type ExperiencePriceOption = {
  name: string;
  price: string;
  note?: string;
};

export type Experience = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: 'Mar' | 'Tierra';
  tagline: string;
  description: string;
  highlights: string[];
  icon: 'kayak' | 'bus' | 'yacht' | 'fish' | 'hike';
  image: string;
  imageAlt: string;
  imagePosition?: string;
  illustrativeImage?: boolean;
  photoGallery: ExperiencePhoto[];
  priceOptions: ExperiencePriceOption[];
};

export const experiences: Experience[] = [
  {
    id: 'kayak',
    number: '01',
    title: 'Paseo en kayak',
    shortTitle: 'Kayak',
    category: 'Mar',
    tagline: 'A remar y disfrutar el mar a tu ritmo.',
    description: 'Descubre San Carlos desde el agua en un paseo en kayak. Rema junto a paisajes costeros y disfruta una experiencia activa para conectar con el mar. Consulta con el equipo la ruta y los detalles de tu salida.',
    highlights: ['Paisajes desde el agua', 'Aventura a remo', 'Momentos para compartir'],
    icon: 'kayak',
    image: '/manus-storage/kayak_054be07b.jpg',
    imageAlt: 'Grupo de kayaks de Enrike’s Adventures frente a un arco rocoso en San Carlos.',
    imagePosition: '50% 53%',
    photoGallery: [
      { src: '/manus-storage/kayak_054be07b.jpg', alt: 'Grupo de kayaks frente a una formación rocosa de San Carlos.', objectPosition: '50% 53%' },
      { src: '/manus-storage/kayak-cove_309e9dee.jpg', alt: 'Visitantes reman por una ensenada entre los arcos de roca.' },
      { src: '/manus-storage/kayak-guia_239a33de.jpg', alt: 'Un guía y sus visitantes disfrutan un paseo en kayak.' },
      { src: '/manus-storage/kayak-snorkel_56da1bd7.jpg', alt: 'Grupo de visitantes en kayaks frente a la costa de San Carlos.' },
    ],
    priceOptions: [
      { name: 'Paseo en kayak', price: 'Consulta precio' },
      { name: 'Kayak + snorkel', price: 'Consulta precio', note: 'Pregunta por precio para grupos y disponibilidad.' },
    ],
  },
  {
    id: 'bus',
    number: '02',
    title: 'Recorrido guiado',
    shortTitle: 'Recorrido guiado',
    category: 'Tierra',
    tagline: 'Una ruta para descubrir y escuchar historias.',
    description: 'Explora el desierto sin necesidad de caminar en un vehículo abierto. Visita las ruinas del Catch 22, Ojo de Agua, La Manga 2 y playa Los Algodones. Duración aproximada: 2.5–3 horas; capacidad máxima de 14 personas.',
    highlights: ['Recorrido acompañado', 'Descubre el destino', 'Disfruta en grupo'],
    icon: 'bus',
    image: '/manus-storage/desierto-tour_4eacfbc7.jpg',
    imageAlt: 'Visitantes a bordo del vehículo abierto del Tour del Desierto.',
    photoGallery: [
      { src: '/manus-storage/desierto-tour_4eacfbc7.jpg', alt: 'Visitantes a bordo del vehículo abierto del Tour del Desierto de San Carlos Adventures.' },
      { src: '/manus-storage/desert-catch_a16dcc11.jpg', alt: 'Visitantes en las ruinas de piedra durante el Tour del Desierto.' },
    ],
    priceOptions: [
      { name: 'Recorrido guiado · Tour del Desierto', price: 'Consulta precio', note: 'Recorrido en vehículo abierto. Consulta la modalidad de tu salida.' },
    ],
  },
  {
    id: 'yacht',
    number: '03',
    title: 'Paseo en yate',
    shortTitle: 'Yate',
    category: 'Mar',
    tagline: 'Una pausa entre el mar y el horizonte.',
    description: 'Vive San Carlos desde el mar a bordo de un yate. Relájate, contempla la costa y comparte un paseo con quienes te acompañan. El equipo te orientará sobre la embarcación, el recorrido y las opciones para tu salida.',
    highlights: ['Vistas de la costa', 'Tiempo para relajarte', 'Una experiencia para compartir'],
    icon: 'yacht',
    image: '/manus-storage/yate_e007c20c.jpg',
    imageAlt: 'Visitantes a bordo de un yate de San Carlos Adventures frente a la costa rocosa.',
    imagePosition: '55% 45%',
    photoGallery: [
      { src: '/manus-storage/yate_e007c20c.jpg', alt: 'Visitantes disfrutan un paseo en yate frente a la costa de San Carlos.', objectPosition: '55% 45%' },
      { src: '/manus-storage/pasted_file_YFrASI_image_4356fb8f.png', alt: 'Embarcación sobre el mar de San Carlos.' },
      { src: '/manus-storage/pasted_file_suOJwZ_image_3d3c184a.png', alt: 'Yate atracado junto al muelle en San Carlos.' },
      { src: '/manus-storage/pasted_file_KMWCh8_image_1d93c696.png', alt: 'Yates y visitantes disfrutan una bahía rodeada de formaciones rocosas.' },
    ],
    priceOptions: [
      { name: 'Yate «Si no quieres no»', price: '$2,500 MXN / hora', note: 'Capacidad de 1 a 8 personas.' },
    ],
  },
  {
    id: 'fishing',
    number: '04',
    title: 'Pesca deportiva',
    shortTitle: 'Pesca',
    category: 'Mar',
    tagline: 'La emoción de una aventura en el mar.',
    description: 'Disfruta una salida de pesca deportiva y vive la emoción de explorar el mar en busca de tu próxima captura. Consulta con el equipo la modalidad de pesca, el equipo necesario y los detalles de la actividad. Las capturas no están garantizadas.',
    highlights: ['Aventura en el mar', 'Emoción de la pesca', 'Orientación para tu salida'],
    icon: 'fish',
    image: '/manus-storage/pesca_8b6abcff.jpg',
    imageAlt: 'Imagen ilustrativa de pesca deportiva en San Carlos, con pescadores y cañas a bordo de una embarcación.',
    imagePosition: '63% 50%',
    illustrativeImage: true,
    photoGallery: [
      { src: '/manus-storage/pesca_8b6abcff.jpg', alt: 'Pescadores participan en una salida de pesca deportiva.', objectPosition: '63% 50%', illustrative: true },
      { src: '/manus-storage/pasted_file_YFrASI_image_4356fb8f.png', alt: 'Embarcación en el mar como imagen ilustrativa de una salida de pesca.', illustrative: true },
    ],
    priceOptions: [
      { name: 'Pesca deportiva', price: 'Consulta precio' },
    ],
  },
  {
    id: 'hiking',
    number: '05',
    title: 'Senderismo',
    shortTitle: 'Senderismo',
    category: 'Tierra',
    tagline: 'La naturaleza se descubre paso a paso.',
    description: 'Explora a pie los paisajes naturales de San Carlos y disfruta de una aventura entre senderos, rocas y vegetación. Antes de salir, consulta la ruta, el nivel de dificultad y las recomendaciones para elegir una experiencia adecuada para ti.',
    highlights: ['Conexión con la naturaleza', 'Paisajes de mar y montaña', 'Exploración al aire libre'],
    icon: 'hike',
    image: '/manus-storage/senderismo_71cdc61e.jpg',
    imageAlt: 'Visitantes de Enrike’s Adventures en una ruta de senderismo entre palmeras y paredes de roca.',
    imagePosition: '47% 50%',
    photoGallery: [
      { src: '/manus-storage/senderismo_71cdc61e.jpg', alt: 'Visitantes caminan entre palmeras y paredes de roca en el cañón.' , objectPosition: '47% 50%' },
      { src: '/manus-storage/hiking_d6a65932.jpg', alt: 'Guía y visitantes contemplan la costa desde una ruta de montaña.' },
      { src: '/manus-storage/senderismo-grupo_be0ec009.jpg', alt: 'Grupo de Enrike’s Adventures celebra su recorrido en la sierra de San Carlos.' },
      { src: '/manus-storage/nacapule-tour_867d24fc.jpg', alt: 'Visitantes junto a las formaciones rocosas del cañón de Nacapule.' },
      { src: '/manus-storage/tetakawi-tour_db5da1dc.jpg', alt: 'Guía contempla la costa desde una ruta del cerro Tetakawi.' },
    ],
    priceOptions: [
      { name: 'Cañón de Nacapule', price: 'Consulta precio', note: '2.5–3 horas · dificultad baja–media.' },
      { name: 'Cerro Tetakawi', price: 'Consulta precio', note: '4–5 horas · dificultad alta · casco obligatorio.' },
    ],
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: '¿Cómo consulto la disponibilidad?',
    answer: 'Escríbele al equipo en Facebook para consultar la disponibilidad de las experiencias.',
  },
  {
    question: '¿Dónde puedo conocer los detalles de cada paseo?',
    answer: 'Consulta los detalles directamente con el equipo de San Carlos Adventures en Facebook.',
  },
  {
    question: '¿Qué debo tener en cuenta antes de elegir una experiencia?',
    answer: 'Cuéntale al equipo qué experiencia te interesa y consulta con ellos los detalles en Facebook.',
  },
  {
    question: '¿Cómo puedo hacer una consulta?',
    answer: 'Envíale tu pregunta al equipo a través de Facebook; con gusto podrán orientarte.',
  },
];

export const FACEBOOK_URL = 'https://www.facebook.com/sancarlos.adventures';
