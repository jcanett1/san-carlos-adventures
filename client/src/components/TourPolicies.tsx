import { ChevronDown } from "lucide-react";

const policies = [
  {
    title: "Políticas de reservación",
    points: [
      "El tour debe apartarse con 24 a 48 horas de anticipación.",
      "La reservación se confirma con un depósito del 50% del monto total de la actividad.",
      "Para dar de alta el seguro, es responsabilidad del cliente proporcionar datos como nombre completo y fecha de nacimiento.",
    ],
  },
  {
    title: "Políticas de cancelación",
    points: [
      "En caso de cancelación por cuestiones climatológicas, se reembolsa el 70% del total o se reagenda la actividad.",
      "En caso de cancelación por parte del cliente, no hay reembolso.",
      "Si no se cumple con el horario estipulado, se cancela el tour y no hay reembolso.",
    ],
  },
  {
    title: "Políticas de responsabilidad: uso de kayak y snorkel",
    points: [
      "El cliente debe inspeccionar adecuadamente el equipo. Si presenta alguna inconformidad, debe avisar al guía antes de comenzar la actividad.",
      "Si al comenzar la actividad el cliente se siente inseguro al usar el equipo, debe avisar inmediatamente al guía.",
      "El cliente se compromete a regresar el equipo en buenas condiciones, tal como lo recibió, y a pagar por cualquier daño ocasionado mientras estuvo en su posesión.",
      "En caso de pérdida, robo, incendio o cualquier otra causa mientras el equipo esté en posesión del cliente, este se compromete a pagar el valor total del equipo.",
    ],
  },
  {
    title: "Fotografías de los tours",
    points: [
      "Las fotografías de los tours tardan de 5 a 7 días en compartirse.",
      "Si no quieres que tus fotos sean públicas, trae una memoria USB para compartirlas.",
      "Si te unes a un tour en grupo y no quieres que tus fotos se publiquen, avisa al guía al inicio para que puedan tomarte fotos aparte.",
      "Los guías están certificados en turismo de aventura, no son fotógrafos; por lo tanto, las fotografías no son profesionales.",
    ],
  },
];

export default function TourPolicies() {
  return (
    <section className="tour-policies" aria-labelledby="tour-policies-title">
      <div className="tour-policies-heading">
        <p className="eyebrow eyebrow-dark">
          <span className="eyebrow-line" />
          Información importante
        </p>
        <h3 id="tour-policies-title">Políticas del tour</h3>
      </div>
      <div className="tour-policy-list">
        {policies.map((policy, index) => (
          <details className="tour-policy-item" key={policy.title}>
            <summary>
              <span className="tour-policy-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="tour-policy-title">{policy.title}</span>
              <span className="tour-policy-chevron" aria-hidden="true">
                <ChevronDown size={18} />
              </span>
            </summary>
            <ol className="tour-policy-points" role="list">
              {policy.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </details>
        ))}
      </div>
    </section>
  );
}
