import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Compass,
  Facebook,
  Languages,
  Menu,
  X,
} from "lucide-react";
import {
  experiences,
  FACEBOOK_URL,
} from "@/data/experiences";
import { contact } from "@/data/contact";
import HeroCarousel from "@/components/HeroCarousel";
import ExperienceCard from "@/components/ExperienceCard";
import ContactPanel, { SocialIcon } from "@/components/ContactPanel";
import BookingSteps from "@/components/BookingSteps";
import TourPolicies from "@/components/TourPolicies";
import "./Home.css";

const BRAND_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044466363/IGDVYZSYxmtCxITR.jpg";
const galleryPhotoIndexes: Record<string, number[]> = {
  kayak: [0, 3],
  bus: [0, 1, 2],
  yacht: [0, 1, 2],
  fishing: [0],
  hiking: [0, 4],
};
const galleryPhotos = experiences.flatMap((experience) => {
  return galleryPhotoIndexes[experience.id].map((photoIndex, index) => {
    const photo = experience.photoGallery[photoIndex];
    return {
      ...photo,
      key: `${experience.id}-${index}`,
      label: index === 0 ? experience.title : `${experience.title} · ${index + 1}`,
    };
  });
});

const navigation = [
  { href: "#experiencias", label: "Experiencias" },
  { href: "#galeria", label: "Galería" },
  { href: "#preguntas", label: "Reservaciones" },
];

function FacebookAnchor({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="adventure-site">
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="San Carlos Adventures, inicio">
            <span className="brand-emblem">
              <img src={BRAND_IMAGE} alt="" aria-hidden="true" />
            </span>
            <span className="brand-name">
              <strong>San Carlos</strong>
              <span>ADVENTURES · SONORA</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <FacebookAnchor className="header-facebook">
            <Facebook size={16} aria-hidden="true" />
            <span>Facebook</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </FacebookAnchor>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegación móvil">
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <FacebookAnchor className="mobile-facebook" >
              <Facebook size={16} aria-hidden="true" />
              Visitar Facebook
              <ArrowUpRight size={16} aria-hidden="true" />
            </FacebookAnchor>
          </nav>
        )}
      </header>

      <main id="inicio">
        <section className="hero-section" aria-labelledby="hero-title">
          <HeroCarousel />
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-line" />
                San Carlos · Sonora · México
              </p>
              <h1 id="hero-title">
                El mar te llama.
                <span>Tu aventura espera.</span>
              </h1>
              <p className="hero-description">
                Desde el agua hasta la montaña, explora San Carlos a tu manera con
                experiencias para disfrutar mar, ruta y naturaleza.
              </p>
              <div className="hero-actions">
                <a className="button button-orange" href="#experiencias">
                  Explorar experiencias
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
                <FacebookAnchor className="button button-ghost">
                  <Facebook size={17} aria-hidden="true" />
                  Ver Facebook
                </FacebookAnchor>
              </div>
              <div className="hero-coordinate">
                <Compass size={17} aria-hidden="true" />
                <span>MAR Y TIERRA</span>
                <i aria-hidden="true" />
                <span>ELIGE TU RUTA</span>
              </div>
            </div>
          </div>
          <div className="hero-bottomline">
            <span>EXPERIENCIAS AL AIRE LIBRE</span>
            <span className="bottomline-dash" aria-hidden="true" />
            <a href="#experiencias">
              DESLIZA PARA DESCUBRIR
              <ChevronDown size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="route-ribbon" aria-label="Mar, ruta, naturaleza y aventura">
          <div className="route-ribbon-track">
            <span>MAR</span><i>✳</i><span>RUTA</span><i>✳</i><span>NATURALEZA</span><i>✳</i><span>AVENTURA</span><i>✳</i>
            <span>MAR</span><i>✳</i><span>RUTA</span><i>✳</i><span>NATURALEZA</span><i>✳</i><span>AVENTURA</span><i>✳</i>
          </div>
        </div>

        <section className="experiences-section" id="experiencias" aria-labelledby="experiences-title">
          <div className="section-shell">
            <div className="experiences-heading">
              <div>
                <p className="eyebrow eyebrow-dark">
                  <span className="eyebrow-line" />
                  Elige tu siguiente aventura
                </p>
                <h2 id="experiences-title">
                  Cinco rutas.
                  <span>Un mismo espíritu aventurero.</span>
                </h2>
              </div>
              <p className="section-lead">
                ¿Mar o tierra? Encuentra una experiencia para vivir San Carlos
                como más te gusta.
              </p>
            </div>

            <div className="experience-grid">
              {experiences.map((experience) => (
                <ExperienceCard experience={experience} key={experience.id} />
              ))}
            </div>

            <div className="experience-footnote">
              <span className="footnote-symbol" aria-hidden="true">✳</span>
              <p>Consulta directamente con el equipo los detalles y la disponibilidad de cada experiencia.</p>
              <FacebookAnchor className="text-link">
                Pregunta en Facebook <ArrowRight size={16} aria-hidden="true" />
              </FacebookAnchor>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="galeria" aria-labelledby="gallery-title">
          <div className="section-shell gallery-shell">
            <div className="gallery-copy">
              <p className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" />
                Postales de aventura
              </p>
              <h2 id="gallery-title">
                El paisaje cambia.
                <span>La emoción se queda.</span>
              </h2>
              <p>
                Fotos de kayak, recorrido guiado, paseos en yate, pesca deportiva
                y senderismo para mostrarte más de cada aventura en San Carlos.
              </p>
              <p className="gallery-language-note">
                <Languages size={19} aria-hidden="true" />
                También contamos con guías en inglés.
              </p>
              <nav className="gallery-socials" aria-label="Redes sociales de San Carlos Adventures">
                {contact.socials.map((social) => (
                  <a
                    className="gallery-social-button"
                    href={social.href}
                    key={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.platform}: ${social.username}, abrir perfil`}
                  >
                    <span className="gallery-social-icon"><SocialIcon name={social.icon} /></span>
                    <span className="gallery-social-copy">
                      <span>Seguir en {social.platform}</span>
                      <strong>{social.username}</strong>
                    </span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </nav>
              <div className="gallery-note">
                <span className="gallery-note-mark" aria-hidden="true" />
                <span>FOTOS · MAR Y TIERRA · SAN CARLOS, SONORA</span>
              </div>
            </div>

            <div className="gallery-photos" aria-label="Fotos de las experiencias de San Carlos Adventures">
              {galleryPhotos.map((photo) => (
                <figure className="gallery-photo" key={photo.key}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                  {photo.illustrative && (
                    <span className="gallery-photo-note">Imagen ilustrativa</span>
                  )}
                  <figcaption className="gallery-photo-label">{photo.label}</figcaption>
                </figure>
              ))}
              <div className="gallery-coordinate" aria-hidden="true">
                <span>27°57' N</span>
                <span>SONORA · MX</span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="preguntas" aria-labelledby="faq-title">
          <div className="section-shell faq-shell">
            <div className="faq-intro">
              <p className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" />
                Antes de salir
              </p>
              <h2 id="faq-title">Pasos para <span>reservar un tour</span></h2>
              <p>
                Planea tu aventura y completa estos pasos para apartar tu tour
                con San Carlos Adventures.
              </p>
            </div>
            <div className="reservation-guidance">
              <BookingSteps />
              <TourPolicies />
            </div>
            <ContactPanel />
          </div>
        </section>

        <section className="final-cta" aria-labelledby="cta-title">
          <div className="cta-shell">
            <div className="cta-mark" aria-hidden="true"><Compass size={27} strokeWidth={1.5} /></div>
            <p className="eyebrow eyebrow-light">Tu próxima historia empieza aquí</p>
            <h2 id="cta-title">¿Listo para explorar?</h2>
            <p>Elige una experiencia y consulta los detalles con San Carlos Adventures.</p>
            <a
              className="button button-orange"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Escribir por WhatsApp al ${contact.phone}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a9.5 9.5 0 0 1-14.2 8.3L3 21l1.2-3.8A9.5 9.5 0 1 1 21 11.5Z" />
                <path d="M8.6 6.9 7.5 8.4c-.8 1.2.1 3.1 2 5s3.8 2.8 5 2l1.5-1.1-2.6-1.7-1.1 1c-1.4-.6-2.4-1.6-3-3l1-1.1-1.7-2.6Z" />
              </svg>
              WhatsApp · {contact.phone}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-shell">
          <a className="brand-lockup footer-brand" href="#inicio" aria-label="San Carlos Adventures, volver al inicio">
            <span className="brand-emblem">
              <img src={BRAND_IMAGE} alt="" aria-hidden="true" />
            </span>
            <span className="brand-name">
              <strong>San Carlos</strong>
              <span>ADVENTURES · SONORA</span>
            </span>
          </a>
          <p>Mar, tierra y aventuras en San Carlos, Sonora.</p>
          <FacebookAnchor className="footer-facebook">
            <Facebook size={16} aria-hidden="true" />
            Facebook oficial
            <ArrowUpRight size={14} aria-hidden="true" />
          </FacebookAnchor>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} San Carlos Adventures</span>
            <a href="#inicio">Volver al inicio ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
