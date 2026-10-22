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
};

export const experiences: Experience[] = [
  {
    id: 'kayak',
    number: '01',
    title: 'Paseo en kayak',
    shortTitle: 'Kayak',
    category: 'Mar',
    tagline: 'A remar y disfrutar el mar a tu ritmo.',
    description: 'Conecta con el entorno desde el agua y disfruta una aventura sencilla, activa y diferente.',
    highlights: ['Una forma activa de explorar', 'Disfruta el paisaje desde el agua', 'Una experiencia para compartir'],
    icon: 'kayak',
  },
  {
    id: 'bus',
    number: '02',
    title: 'Recorrido guiado en bus',
    shortTitle: 'Recorrido en bus',
    category: 'Tierra',
    tagline: 'Descubre el entorno en un recorrido acompañado.',
    description: 'Sube a bordo y disfruta un paseo guiado para conocer más del entorno de una manera cómoda y amena.',
    highlights: ['Recorrido con guía', 'Conoce el entorno durante el trayecto', 'Ideal para disfrutar en grupo'],
    icon: 'bus',
  },
  {
    id: 'yacht',
    number: '03',
    title: 'Paseo en yate',
    shortTitle: 'Yate',
    category: 'Mar',
    tagline: 'Vive el mar con una experiencia especial.',
    description: 'Disfruta un paseo en yate y regálate un momento para relajarte y apreciar el paisaje marino.',
    highlights: ['Un paseo para desconectarte', 'Disfruta el paisaje desde el mar', 'Una experiencia para recordar'],
    icon: 'yacht',
  },
  {
    id: 'fishing',
    number: '04',
    title: 'Pesca deportiva',
    shortTitle: 'Pesca',
    category: 'Mar',
    tagline: 'Pon a prueba tu pasión por la pesca.',
    description: 'Anímate a vivir una jornada de pesca deportiva y disfruta la emoción de la aventura en el mar.',
    highlights: ['Una actividad para amantes de la pesca', 'Disfruta el tiempo en el mar', 'Emoción y aventura en cada jornada'],
    icon: 'fish',
  },
  {
    id: 'hiking',
    number: '05',
    title: 'Senderismo',
    shortTitle: 'Senderismo',
    category: 'Tierra',
    tagline: 'Explora a pie y conecta con la naturaleza.',
    description: 'Recorre senderos a tu paso y disfruta una aventura al aire libre rodeado de naturaleza.',
    highlights: ['Aventura al aire libre', 'Explora a tu propio ritmo', 'Una pausa para conectar con la naturaleza'],
    icon: 'hike',
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
