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
  },
  {
    id: 'bus',
    number: '02',
    title: 'Recorrido guiado en bus',
    shortTitle: 'Recorrido en bus',
    category: 'Tierra',
    tagline: 'Una ruta para descubrir y escuchar historias.',
    description: 'Sube al bus y conoce el entorno de San Carlos en un recorrido acompañado por un guía. Disfruta los paisajes durante el trayecto y descubre más del destino. Consulta con el equipo las paradas y el itinerario disponibles.',
    highlights: ['Recorrido acompañado', 'Descubre el destino', 'Disfruta en grupo'],
    icon: 'bus',
    image: '/manus-storage/bus_01f497ef.jpg',
    imageAlt: 'Imagen ilustrativa de pasajeros en un autobús de la región de San Carlos y Guaymas.',
    illustrativeImage: true,
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

export const FACEBOOK_URL = 'https://www.facebook.com/sancarlos.adventures/photos';
