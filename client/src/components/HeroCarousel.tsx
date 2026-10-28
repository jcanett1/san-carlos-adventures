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
    src: siteAsset("images/site-assets/hero-canyon-arch-2026.png"),
    alt: "Dos excursionistas descansan bajo un arco rocoso con vistas al mar.",
    category: "Senderismo",
    caption: "Contempla el mar desde la roca",
    orientation: "landscape",
  },
  {
    src: siteAsset("images/site-assets/hero-kayak-pair-2026.png"),
    alt: "Dos visitantes reman en un kayak amarillo frente a una formación rocosa.",
    category: "Kayak",
    caption: "Rema entre mar y montaña",
    orientation: "landscape",
  },
  {
    src: siteAsset("images/site-assets/hero-atv-desert-2026.png"),
    alt: "Grupo de visitantes realiza una ruta en cuatrimoto por el desierto acompañado por un guía.",
    category: "Tour guiado",
    caption: "Explora el desierto sobre ruedas",
    orientation: "landscape",
  },
  {
    src: siteAsset("images/site-assets/hero-sandboarding-2026.png"),
    alt: "Visitante se prepara para deslizarse en una tabla por las dunas de arena.",
    category: "Aventura",
    caption: "Descubre la aventura en las dunas",
    orientation: "portrait-tall",
  },
  {
    src: siteAsset("images/site-assets/hero-hiking-group-2026.png"),
    alt: "Grupo de excursionistas posa en la cima de una montaña rocosa con vistas al mar.",
    category: "Senderismo",
    caption: "Comparte la ruta hasta la cima",
    orientation: "landscape",
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
      aria-label="Cinco fotos de kayak, senderismo, recorrido en cuatrimoto y aventuras en las dunas"
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
