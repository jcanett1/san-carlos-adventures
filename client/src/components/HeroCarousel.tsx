import { siteAsset } from "@/lib/siteAsset";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import "./HeroCarousel.css";

type HeroSlide = {
  src: string;
  alt: string;
  category: "Kayak" | "Senderismo";
  caption: string;
};

const slides: HeroSlide[] = [
  {
    src: siteAsset("images/site-assets/kayak-cove_309e9dee.jpg"),
    alt: "Visitantes recorren en kayak el agua junto a una formación rocosa de San Carlos.",
    category: "Kayak",
    caption: "Explora la costa desde el agua",
  },
  {
    src: siteAsset("images/site-assets/kayak-guia_239a33de.jpg"),
    alt: "Guía de Enrike’s Adventures remando en kayak entre las rocas junto al mar.",
    category: "Kayak",
    caption: "Rema al encuentro del paisaje",
  },
  {
    src: siteAsset("images/site-assets/senderismo_71cdc61e.jpg"),
    alt: "Grupo de senderistas de Enrike’s Adventures junto a las palmeras y rocas de Nacapule.",
    category: "Senderismo",
    caption: "Descubre los caminos de Nacapule",
  },
  {
    src: siteAsset("images/site-assets/hiking_d6a65932.jpg"),
    alt: "Guía y visitantes disfrutan una caminata con vistas a la costa de San Carlos.",
    category: "Senderismo",
    caption: "Camina entre mar y montaña",
  },
  {
    src: siteAsset("images/site-assets/senderismo-grupo_be0ec009.jpg"),
    alt: "Grupo de Enrike’s Adventures celebra una caminata en la sierra de San Carlos.",
    category: "Senderismo",
    caption: "Cada ruta deja una historia",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) setIsPaused(true);

    const handlePreference = (event: MediaQueryListEvent) => {
      if (event.matches) setIsPaused(true);
    };
    reduceMotion.addEventListener?.("change", handlePreference);
    return () => reduceMotion.removeEventListener?.("change", handlePreference);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Cinco fotos de kayak y senderismo"
    >
      <div
        className="hero-carousel-backdrop"
        style={{ backgroundImage: `url("${activeSlide.src}")` }}
        aria-hidden="true"
      />
      <div className="hero-carousel-slides" aria-live="off">
        {slides.map((slide, index) => (
          <img
            className={`hero-carousel-image${index === activeIndex ? " is-active" : ""}`}
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

      <div className="hero-carousel-caption" aria-live={isPaused ? "polite" : "off"} aria-atomic="true">
        <span>{activeSlide.category} · {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <strong>{activeSlide.caption}</strong>
      </div>

      <div className="hero-carousel-controls" role="group" aria-label="Controles del carrusel">
        <button
          className="hero-carousel-arrow"
          type="button"
          aria-label="Ver foto anterior"
          onClick={() => showSlide(activeIndex - 1)}
        >
          <ChevronLeft size={19} aria-hidden="true" />
        </button>

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

        <button
          className="hero-carousel-arrow"
          type="button"
          aria-label="Ver foto siguiente"
          onClick={() => showSlide(activeIndex + 1)}
        >
          <ChevronRight size={19} aria-hidden="true" />
        </button>
        <button
          className="hero-carousel-arrow hero-carousel-toggle"
          type="button"
          aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          {isPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
