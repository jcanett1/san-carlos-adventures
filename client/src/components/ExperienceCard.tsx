import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BusFront,
  Check,
  Fish,
  Mountain,
  RotateCcw,
  RotateCw,
  Ship,
  Waves,
  type LucideIcon,
} from "lucide-react";
import type { Experience } from "@/data/experiences";
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
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photoGallery = experience.photoGallery.length > 0
    ? experience.photoGallery
    : [{ src: experience.image, alt: experience.imageAlt, objectPosition: experience.imagePosition, illustrative: experience.illustrativeImage }];
  const activePhoto = photoGallery[activePhotoIndex] ?? photoGallery[0];
  const Icon = icons[experience.icon];
  const descriptionId = `service-description-${experience.id}`;

  useEffect(() => {
    if (flipped || photoGallery.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActivePhotoIndex((current) => (current + 1) % photoGallery.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [experience.id, flipped, photoGallery.length]);

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
          : `Ver precios y descripción de ${experience.title}. Foto ${activePhotoIndex + 1} de ${photoGallery.length}: ${activePhoto.alt}`}
        onClick={() => setFlipped((current) => !current)}
      >
          <span className="service-card-rotor">
            <span className="service-card-face service-card-front" aria-hidden={flipped}>
            {photoGallery.map((photo, index) => (
              <img
                className={`service-card-photo${index === activePhotoIndex ? " is-active" : ""}`}
                key={photo.src}
                src={photo.src}
                alt={index === activePhotoIndex ? photo.alt : ""}
                aria-hidden={index !== activePhotoIndex}
                loading={index === activePhotoIndex ? "eager" : "lazy"}
                decoding="async"
                style={{ objectPosition: photo.objectPosition ?? experience.imagePosition ?? "center" }}
              />
            ))}
            <span className="service-card-overlay" aria-hidden="true" />
            <span className="service-card-top">
              <span className="service-number">{experience.number}</span>
              <span className="service-symbol"><Icon size={22} aria-hidden="true" /></span>
            </span>
            {photoGallery.length > 1 && (
              <span className="service-photo-dots" aria-hidden="true">
                {photoGallery.map((photo, index) => (
                  <span className={index === activePhotoIndex ? "is-active" : ""} key={photo.src} />
                ))}
              </span>
            )}
            {activePhoto.illustrative && (
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
            <span className="service-prices" aria-label="Opciones y precios">
              <span className="service-prices-heading">Opciones y precios</span>
              {experience.priceOptions.map((option) => (
                <span className="service-price-option" key={option.name}>
                  <span className="service-price-row">
                    <span className="service-price-name">{option.name}</span>
                    <span className="service-price-amount">{option.price}</span>
                  </span>
                  {option.note && <span className="service-price-note">{option.note}</span>}
                </span>
              ))}
            </span>
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
    </article>
  );
}
