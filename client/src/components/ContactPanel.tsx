import { ArrowUpRight, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { contact } from "@/data/contact";
import "./ContactPanel.css";

export function SocialIcon({ name }: { name: "instagram" | "facebook" | "x" | "tiktok" }) {
  if (name === "instagram") return <Instagram size={20} aria-hidden="true" />;
  if (name === "facebook") return <Facebook size={20} aria-hidden="true" />;
  if (name === "x") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L5.6 22H2.4l7.2-8.3L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 1.5h-3.9v13.4a2.9 2.9 0 1 1-2.5-2.9V8a6.9 6.9 0 1 0 6.4 6.9V8.1a9.7 9.7 0 0 0 5.7 1.8V6a5.7 5.7 0 0 1-5.7-4.5Z" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.1 2 11.16c0 2.9 1.47 5.49 3.77 7.17V22l3.44-1.89c.9.25 1.83.38 2.79.38 5.52 0 10-4.1 10-9.33S17.52 2 12 2Zm.99 12.33-2.55-2.71-4.98 2.71 5.47-5.83 2.62 2.71 4.92-2.71-5.48 5.83Z" />
    </svg>
  );
}

export default function ContactPanel() {
  return (
    <section className="contact-panel" aria-labelledby="contact-panel-title">
      <h3 className="contact-panel-heading" id="contact-panel-title">Información de contacto</h3>
      <p className="contact-social-heading">Síguenos y comparte la aventura.</p>
      <div className="contact-socials" aria-label="Redes sociales">
        {contact.socials.map((social) => (
          <a
            className="contact-social"
            href={social.href}
            key={social.platform}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.platform}: ${social.username}, abrir perfil`}
          >
            <span className="contact-social-icon"><SocialIcon name={social.icon} /></span>
            <span className="contact-social-copy">
              <span className="contact-label">{social.platform}</span>
              <strong>{social.username}</strong>
            </span>
            <ArrowUpRight className="contact-external-icon" size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="contact-direct">
        <a className="contact-method" href={contact.phoneHref} aria-label={`Llamar al ${contact.phone}`}>
          <span className="contact-method-icon"><Phone size={20} aria-hidden="true" /></span>
          <span className="contact-method-copy">
            <span className="contact-label">Teléfono</span>
            <strong>{contact.phone}</strong>
          </span>
        </a>
        <a className="contact-method" href={contact.additionalPhoneHref} aria-label={`Llamar al ${contact.additionalPhone}`}>
          <span className="contact-method-icon"><Phone size={20} aria-hidden="true" /></span>
          <span className="contact-method-copy">
            <span className="contact-label">Teléfono adicional</span>
            <strong>{contact.additionalPhone}</strong>
          </span>
        </a>
        <a className="contact-method" href={contact.emailHref} aria-label={`Enviar correo a ${contact.email}`}>
          <span className="contact-method-icon"><Mail size={20} aria-hidden="true" /></span>
          <span className="contact-method-copy">
            <span className="contact-label">Correo electrónico</span>
            <strong>{contact.email}</strong>
          </span>
        </a>
        <a
          className="contact-method"
          href={contact.messengerHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribir a ${contact.messengerName} en Messenger`}
        >
          <span className="contact-method-icon"><MessengerIcon /></span>
          <span className="contact-method-copy">
            <span className="contact-label">Messenger</span>
            <strong>{contact.messengerName}</strong>
          </span>
          <ArrowUpRight className="contact-external-icon" size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
