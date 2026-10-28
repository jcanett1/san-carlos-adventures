import { siteAsset } from "@/lib/siteAsset";
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
  icon: 'kayak' | 'bus' | 'yacht' | 'fish' | 'hike' | 'atv' | 'sandboard' | 'snorkel';
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
    image: siteAsset("images/site-assets/kayak_054be07b.jpg"),
    imageAlt: 'Grupo de kayaks de Enrike’s Adventures frente a un arco rocoso en San Carlos.',
    imagePosition: '50% 53%',
    photoGallery: [
      { src: siteAsset("images/site-assets/kayak_054be07b.jpg"), alt: 'Grupo de kayaks frente a una formación rocosa de San Carlos.', objectPosition: '50% 53%' },
      { src: siteAsset("images/site-assets/kayak-cove_309e9dee.jpg"), alt: 'Visitantes reman por una ensenada entre los arcos de roca.' },
      { src: siteAsset("images/site-assets/kayak-guia_239a33de.jpg"), alt: 'Un guía y sus visitantes disfrutan un paseo en kayak.' },
      { src: siteAsset("images/site-assets/kayak-snorkel_56da1bd7.jpg"), alt: 'Grupo de visitantes en kayaks frente a la costa de San Carlos.' },
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
    image: siteAsset("images/site-assets/desierto-tour_4eacfbc7.jpg"),
    imageAlt: 'Visitantes a bordo del vehículo abierto del Tour del Desierto.',
    photoGallery: [
      { src: siteAsset("images/site-assets/desierto-tour_4eacfbc7.jpg"), alt: 'Visitantes a bordo del vehículo abierto del Tour del Desierto de San Carlos Adventures.' },
      { src: siteAsset("images/site-assets/bus-tour_98740e30.jpg"), alt: 'Pasajeros disfrutan el recorrido guiado en el vehículo abierto de San Carlos Adventures.' },
      { src: siteAsset("images/site-assets/desert-catch_a16dcc11.jpg"), alt: 'Visitantes en las ruinas de piedra durante el Tour del Desierto.' },
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
    image: siteAsset("images/site-assets/yate_e007c20c.jpg"),
    imageAlt: 'Visitantes a bordo de un yate de San Carlos Adventures frente a la costa rocosa.',
    imagePosition: '55% 45%',
    photoGallery: [
      { src: siteAsset("images/site-assets/yate_e007c20c.jpg"), alt: 'Visitantes disfrutan un paseo en yate frente a la costa de San Carlos.', objectPosition: '55% 45%' },
      { src: siteAsset("images/site-assets/pasted_file_YFrASI_image_4356fb8f.png"), alt: 'Embarcación sobre el mar de San Carlos.' },
      { src: siteAsset("images/site-assets/pasted_file_suOJwZ_image_3d3c184a.png"), alt: 'Yate atracado junto al muelle en San Carlos.' },
      { src: siteAsset("images/site-assets/pasted_file_KMWCh8_image_1d93c696.png"), alt: 'Yates y visitantes disfrutan una bahía rodeada de formaciones rocosas.' },
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
    image: siteAsset("images/site-assets/pesca_8b6abcff.jpg"),
    imageAlt: 'Imagen ilustrativa de pesca deportiva en San Carlos, con pescadores y cañas a bordo de una embarcación.',
    imagePosition: '63% 50%',
    illustrativeImage: true,
    photoGallery: [
      { src: siteAsset("images/site-assets/pesca_8b6abcff.jpg"), alt: 'Pescadores participan en una salida de pesca deportiva.', objectPosition: '63% 50%', illustrative: true },
      { src: siteAsset("images/site-assets/pasted_file_YFrASI_image_4356fb8f.png"), alt: 'Embarcación en el mar como imagen ilustrativa de una salida de pesca.', illustrative: true },
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
    tagline: 'Nacapule, La Poza Manantial y Cerro Tetakawi.',
    description: 'Elige tu tour de senderismo a Nacapule, La Poza Manantial o Cerro Tetakawi y explora a pie los paisajes naturales de San Carlos. Consulta con el equipo el nivel de dificultad y las recomendaciones para elegir la ruta adecuada para ti.',
    highlights: ['Conexión con la naturaleza', 'Paisajes de mar y montaña', 'Exploración al aire libre'],
    icon: 'hike',
    image: siteAsset("images/site-assets/senderismo_71cdc61e.jpg"),
    imageAlt: 'Visitantes de Enrike’s Adventures en una ruta de senderismo entre palmeras y paredes de roca.',
    imagePosition: '47% 50%',
    photoGallery: [
      { src: siteAsset("images/site-assets/senderismo_71cdc61e.jpg"), alt: 'Visitantes caminan entre palmeras y paredes de roca en el cañón.' , objectPosition: '47% 50%' },
      { src: siteAsset("images/site-assets/hiking_d6a65932.jpg"), alt: 'Guía y visitantes contemplan la costa desde una ruta de montaña.' },
      { src: siteAsset("images/site-assets/senderismo-grupo_be0ec009.jpg"), alt: 'Grupo de Enrike’s Adventures celebra su recorrido en la sierra de San Carlos.' },
      { src: siteAsset("images/site-assets/nacapule-tour_867d24fc.jpg"), alt: 'Visitantes junto a las formaciones rocosas del cañón de Nacapule.' },
      { src: siteAsset("images/site-assets/tetakawi-tour_db5da1dc.jpg"), alt: 'Guía contempla la costa desde una ruta del cerro Tetakawi.' },
    ],
    priceOptions: [
      { name: 'Cañón de Nacapule', price: 'Consulta precio', note: '2.5–3 horas · dificultad baja–media.' },
      { name: 'La Poza Manantial', price: 'Consulta precio' },
      { name: 'Cerro Tetakawi', price: 'Consulta precio', note: '4–5 horas · dificultad alta · casco obligatorio.' },
    ],
  },
  {
    id: 'atv',
    number: '06',
    title: 'Paseo en cuatrimoto',
    shortTitle: 'Cuatrimoto',
    category: 'Tierra',
    tagline: 'Explora el desierto sobre ruedas.',
    description: 'Disfruta un paseo en cuatrimoto por paisajes del desierto. Consulta al equipo la ruta y los detalles de la experiencia antes de reservar.',
    highlights: ['Paseo todoterreno', 'Paisajes del desierto', 'Aventura para compartir'],
    icon: 'atv',
    image: siteAsset("images/site-assets/route-atv-group.png"),
    imageAlt: 'Un guía conversa con visitantes junto a una cuatrimoto en un paisaje desértico.',
    photoGallery: [
      { src: siteAsset("images/site-assets/route-atv-group.png"), alt: 'Un guía conversa con visitantes junto a una cuatrimoto en un paisaje desértico.' },
      { src: siteAsset("images/site-assets/route-atv-riders.png"), alt: 'Dos visitantes recorren un camino del desierto en una cuatrimoto.' },
    ],
    priceOptions: [{ name: 'Paseo en cuatrimoto', price: 'Consulta precio' }],
  },
  {
    id: 'sandboard',
    number: '07',
    title: 'Sandboard en las dunas',
    shortTitle: 'Sandboard',
    category: 'Tierra',
    tagline: 'Deslízate sobre las dunas de arena.',
    description: 'Vive una experiencia de sandboard en las dunas de arena de San Carlos. Consulta al equipo los detalles de la actividad y la disponibilidad.',
    highlights: ['Dunas de arena', 'Aventura al aire libre', 'Paisajes del desierto'],
    icon: 'sandboard',
    image: siteAsset("images/site-assets/route-sandboard-solo.png"),
    imageAlt: 'Visitante sostiene una tabla de sandboard frente a las dunas.',
    photoGallery: [
      { src: siteAsset("images/site-assets/route-sandboard-solo.png"), alt: 'Visitante sostiene una tabla de sandboard frente a las dunas.' },
      { src: siteAsset("images/site-assets/route-sandboard-pair.png"), alt: 'Dos visitantes muestran sus tablas en un paisaje de arena y montañas.' },
    ],
    priceOptions: [{ name: 'Sandboard en las dunas', price: 'Consulta precio' }],
  },
  {
    id: 'snorkel',
    number: '08',
    title: 'Snorkel',
    shortTitle: 'Snorkel',
    category: 'Mar',
    tagline: 'Descubre el mundo bajo la superficie.',
    description: 'Explora bajo la superficie con una experiencia de snorkel. Consulta al equipo las condiciones del mar, el equipo y los detalles de la salida.',
    highlights: ['Exploración bajo el agua', 'Conoce el entorno marino', 'Consulta condiciones del mar'],
    icon: 'snorkel',
    image: siteAsset("images/site-assets/route-snorkel-coral.png"),
    imageAlt: 'Formación de coral fotografiada bajo el agua.',
    photoGallery: [
      { src: siteAsset("images/site-assets/route-snorkel-coral.png"), alt: 'Formación de coral fotografiada bajo el agua.' },
      { src: siteAsset("images/site-assets/route-snorkelers.png"), alt: 'Dos visitantes con equipo de snorkel exploran el agua juntos.' },
    ],
    priceOptions: [{ name: 'Snorkel', price: 'Consulta precio' }],
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
