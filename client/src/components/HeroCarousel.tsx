import { siteAsset } from "@/lib/siteAsset";
import { useEffect, useState } from "react";
import "./HeroCarousel.css";

type HeroSlide = {
  src: string;
  alt: string;
  category: "Kayak" | "Senderismo" | "Tour guiado" | "Aventura";
  caption: string;
  orientation: "landscape" | "portrait" | "portrait-tall";
};

const slides: HeroSlide[] = [
  {
    src: siteAsset("images/site-assets/hero-kayak-arch.png"),
    alt: "Dos visitantes en un kayak amarillo frente a la costa rocosa de San Carlos.",
    category: "Kayak",
    caption: "Rema entre mar y montaña",
    orientation: "landscape",
  },
  {
    src: siteAsset("images/site-assets/hero-senderismo.png"),
    alt: "Dos visitantes recorren un sendero rocoso con vistas a la costa de San Carlos.",
    category: "Senderismo",
    caption: "Sube por los senderos de la sierra",
    orientation: "portrait",
  },
  {
    src: siteAsset("images/site-assets/hero-tour-desierto.png"),
    alt: "Persona en una cuatrimoto junto a la costa de San Carlos.",
    category: "Tour guiado",
    caption: "Explora el desierto junto al mar",
    orientation: "portrait",
  },
  {
    src: siteAsset("images/site-assets/hero-canon-nacapule.png"),
    alt: "Dos personas descansan entre palmeras y paredes de roca en un cañón.",
    category: "Senderismo",
    caption: "Descubre el cañón de Nacapule",
    orientation: "portrait",
  },
  {
    src: siteAsset("images/site-assets/hero-sandboard.png"),
    alt: "Visitante prepara una tabla de sandboarding en las dunas de arena.",
    category: "Aventura",
    caption: "Deslízate entre arena y mar",
    orientation: "portrait-tall",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(reduceMotion.matches);

    const handlePreference = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    reduceMotion.addEventListener?.("change", handlePreference);
    return () => reduceMotion.removeEventListener?.("change", handlePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearTimeout(timer);
  }, [activeIndex, prefersReducedMotion]);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Cinco fotos de kayak, senderismo y aventura en el desierto"
    >
      <div className="hero-carousel-slides" aria-live="off">
        {slides.map((slide, index) => (
          <img
            className={`hero-carousel-image is-${slide.orientation}${index === activeIndex ? " is-active" : ""}`}
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            draggable={false}
          />
        ))}
      </div>
      <div className="hero-carousel-wash" aria-hidden="true" />

      <div className="hero-carousel-caption" aria-live={prefersReducedMotion ? "polite" : "off"} aria-atomic="true">
        <span>{activeSlide.category} · {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <strong>{activeSlide.caption}</strong>
      </div>

      <div className="hero-carousel-dots" role="group" aria-label="Elegir una foto">
        {slides.map((slide, index) => (
          <button
            className={`hero-carousel-dot${index === activeIndex ? " is-active" : ""}`}
            key={slide.src}
            type="button"
            aria-label={`Mostrar foto ${index + 1} de ${slides.length}: ${slide.category}`}
            aria-pressed={index === activeIndex}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
