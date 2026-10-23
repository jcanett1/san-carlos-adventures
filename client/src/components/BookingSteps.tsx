const bookingGroups = [
  {
    id: "apartar-tour",
    heading: "Para apartar tu tour",
    steps: [
      {
        title: "Anticipación y depósito",
        description:
          "Reserva cualquier tour con un mínimo de 48 horas de anticipación y un depósito del 50% del total, mediante transferencia o pago en oficina.",
      },
      {
        title: "Consulta la disponibilidad de guía",
        description:
          "Los tours se realizan de lunes a domingo. Pregunta siempre por la disponibilidad de guía.",
      },
      {
        title: "Mínimo de 2 personas",
        description:
          "Cualquier tour requiere un mínimo de 2 personas para realizarse.",
      },
    ],
  },
  {
    id: "al-reservar-tour",
    heading: "Al reservar el tour",
    steps: [
      {
        title: "Lee las políticas",
        description:
          "Lee las políticas de reservación, cancelación y responsabilidad al apartar tu tour.",
      },
      {
        title: "Envía el comprobante de pago",
        description: "Envía el comprobante de tu pago al equipo.",
      },
      {
        title: "Llena y envía el plan de emergencia",
        description:
          "Cada integrante del tour debe llenar y enviar su propio plan de emergencia.",
      },
    ],
  },
];

export default function BookingSteps() {
  return (
    <div className="booking-steps">
      {bookingGroups.map((group) => (
        <section
          className="booking-step-group"
          aria-labelledby={group.id}
          key={group.id}
        >
          <h3 className="booking-step-heading" id={group.id}>
            {group.heading}
          </h3>
          <ol className="booking-step-list" role="list">
            {group.steps.map((step, index) => (
              <li className="booking-step" key={step.title}>
                <span className="booking-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="booking-step-title">{step.title}</h4>
                  <p className="booking-step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <p className="booking-thanks">¡Gracias por tu preferencia!</p>
    </div>
  );
}
