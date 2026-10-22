import { useState } from "react";
import {
  ArrowUpRight,
  BusFront,
  Check,
  Facebook,
  Fish,
  Mountain,
  RotateCcw,
  RotateCw,
  Ship,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { FACEBOOK_URL, type Experience } from "@/data/experiences";
import "./ExperienceCard.css";

const icons: Record<Experience["icon"], LucideIcon> = {
  kayak: Waves,
  bus: BusFront,
  yacht: Ship,
  fish: Fish,
  hike: Mountain,
};

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = icons[experience.icon];
  const descriptionId = `service-description-${experience.id}`;

  return (
    <article className="service-card">
      <button
        type="button"
        className="service-flip-button"
        aria-pressed={flipped}
        aria-controls={descriptionId}
        aria-describedby={flipped ? descriptionId : undefined}
        aria-label={flipped
          ? `Volver a la imagen de ${experience.title}`
          : `Ver descripción de ${experience.title}`}
        onClick={() => setFlipped((current) => !current)}
      >
        <span className="service-card-rotor">
          <span className="service-card-face service-card-front" aria-hidden={flipped}>
            <img
              className="service-card-photo"
              src={experience.image}
              alt={experience.imageAlt}
              loading="lazy"
              style={{ objectPosition: experience.imagePosition ?? "center" }}
            />
            <span className="service-card-overlay" aria-hidden="true" />
            <span className="service-card-top">
              <span className="service-number">{experience.number}</span>
              <span className="service-symbol"><Icon size={22} aria-hidden="true" /></span>
            </span>
            {experience.illustrativeImage && (
              <span className="service-photo-note">Imagen ilustrativa</span>
            )}
            <span className="service-card-front-copy">
              <span className="service-category">{experience.category}</span>
              <span className="service-title">{experience.title}</span>
              <span className="service-tagline">{experience.tagline}</span>
              <span className="service-flip-hint">
                <RotateCw size={15} aria-hidden="true" />
                Toca para descubrir
              </span>
            </span>
          </span>
          <span
            className="service-card-face service-card-back"
            id={descriptionId}
            aria-hidden={!flipped}
          >
            <span className="service-card-top">
              <span className="service-number">{experience.number}</span>
              <span className="service-symbol"><Icon size={22} aria-hidden="true" /></span>
            </span>
            <span className="service-category">{experience.category}</span>
            <span className="service-title">{experience.title}</span>
            <span className="service-description">{experience.description}</span>
            <span className="service-highlights">
              {experience.highlights.map((highlight) => (
                <span className="service-highlight" key={highlight}>
                  <Check size={13} aria-hidden="true" />
                  <span>{highlight}</span>
                </span>
              ))}
            </span>
            <span className="service-flip-hint">
              <RotateCcw size={15} aria-hidden="true" />
              Volver a la imagen
            </span>
          </span>
        </span>
      </button>
      <a
        className="service-facebook-link"
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar ${experience.title} en Facebook`}
      >
        <Facebook size={13} aria-hidden="true" />
        Consultar en Facebook
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}
