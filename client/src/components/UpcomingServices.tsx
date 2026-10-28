import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/contact";
import "./UpcomingServices.css";

const upcomingServices = [
  {
    title: "Embarcaciones y mantenimiento",
    description: "Aceites, lubricantes, filtros, baterías, partes de motor, refacciones, productos de limpieza y accesorios para tu embarcación.",
  },
  {
    title: "Pesca",
    description: "Cañas, carretes, señuelos, líneas, anzuelos, plomos y accesorios para equipar tu próxima salida de pesca.",
  },
  {
    title: "Audio marino",
    description: "Estéreos, bocinas, amplificadores, subwoofers, cables y paneles de control para disfrutar del sonido a bordo.",
  },
  {
    title: "Aventura y snorkel",
    description: "Máscaras, snorkels, aletas, chalecos, ropa acuática y accesorios para disfrutar del agua.",
  },
  {
    title: "Instalación y servicios",
    description: "Instalación de estéreos, bocinas y equipos electrónicos; sistemas eléctricos, iluminación LED, soportes, accesorios marinos y mantenimiento básico.",
  },
];

export default function UpcomingServices({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="upcoming-section" id="proximos-servicios" aria-labelledby="upcoming-title">
      <div className="section-shell upcoming-shell">
        <div className="upcoming-copy">
          <p className="upcoming-eyebrow">Próximamente · Punto Náutico</p>
          <h2 id="upcoming-title">Nuestros <span>próximos servicios</span></h2>
          <p className="upcoming-intro">
            La aventura también comienza al preparar tu embarcación. Próximamente,
            con Punto Náutico, ampliaremos nuestra oferta con productos, accesorios
            y servicios para el mar, la pesca y la aventura.
          </p>
          <div className="upcoming-list">
            {upcomingServices.map((service, index) => (
              <div className="upcoming-service" key={service.title}>
                <span className="upcoming-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="upcoming-contact" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            Pregunta por las próximas novedades <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <figure className="upcoming-poster">
          <a href={imageSrc} target="_blank" rel="noopener noreferrer" aria-label="Ver el volante completo de los próximos servicios de Punto Náutico">
            <img
              src={imageSrc}
              alt="Volante de Punto Náutico: productos para embarcaciones y mantenimiento, pesca, audio marino, aventura y snorkel, e instalación y servicios."
              width={506}
              height={800}
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>Todo para tu embarcación. Tu aventura empieza aquí. <span>Ver volante completo</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
