import React, { useMemo, useState } from 'react';

const habitaciones = [
  {
    id: 'deluxe',
    nombre: 'Habitación Deluxe',
    precio: 180,
    detalle: 'Vista al jardín',
    descripcion: 'Amplia, luminosa y con terraza privada para disfrutar del atardecer.',
  },
  {
    id: 'junior',
    nombre: 'Suite Junior',
    precio: 240,
    detalle: 'Cama King',
    descripcion: 'Espacio elegante con lounge, baño spa y vistas panorámicas.',
  },
  {
    id: 'familia',
    nombre: 'Habitación Familiar',
    precio: 210,
    detalle: '2 camas dobles',
    descripcion: 'Ideal para viajes en familia con amplio espacio y comodidades extra.',
  },
  {
    id: 'premium',
    nombre: 'Suite Premium',
    precio: 320,
    detalle: 'Jacuzzi privado',
    descripcion: 'Experiencia exclusiva con ambiente íntimo y servicios premium.',
  },
];

function getDateValue(date) {
  return new Date(date).toISOString().split('T')[0];
}

function Reservas() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(habitaciones[0].id);
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [mensaje, setMensaje] = useState('');

  const habitacionActual = useMemo(
    () => habitaciones.find((habitacion) => habitacion.id === habitacionSeleccionada) || habitaciones[0],
    [habitacionSeleccionada]
  );

  const noches = useMemo(() => {
    if (!fechaIngreso || !fechaSalida) return 0;
    const entrada = new Date(fechaIngreso);
    const salida = new Date(fechaSalida);
    const diferencia = salida - entrada;
    return diferencia > 0 ? Math.ceil(diferencia / (1000 * 60 * 60 * 24)) : 0;
  }, [fechaIngreso, fechaSalida]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fechaIngreso || !fechaSalida) {
      setMensaje('Selecciona ambas fechas para continuar.');
      return;
    }

    if (new Date(fechaSalida) <= new Date(fechaIngreso)) {
      setMensaje('La fecha de salida debe ser posterior a la de ingreso.');
      return;
    }

    const total = noches * habitacionActual.precio;
    setMensaje(
      `Reserva confirmada para ${habitacionActual.nombre}: ${noches} noches, total estimado $${total}.`
    );
  };

  return (
    <section id="reservas" className="reservations">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Reservas</p>
          <h2>Elegí la habitación ideal para tu estadía</h2>
        </div>

        <div className="rooms-grid">
          {habitaciones.map((habitacion) => (
            <article
              key={habitacion.id}
              className={`room-card ${habitacionSeleccionada === habitacion.id ? 'room-card--active' : ''}`}
              onClick={() => setHabitacionSeleccionada(habitacion.id)}
            >
              <div className="room-card__image" aria-hidden="true" />
              <div className="room-card__content">
                <div className="room-card__header">
                  <h3>{habitacion.nombre}</h3>
                  <span>${habitacion.precio}/noche</span>
                </div>
                <p>{habitacion.detalle}</p>
                <small>{habitacion.descripcion}</small>
              </div>
            </article>
          ))}
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-form__field">
            <label htmlFor="checkin">Fecha de ingreso</label>
            <input
              id="checkin"
              type="date"
              value={fechaIngreso}
              min={getDateValue(new Date())}
              onChange={(event) => setFechaIngreso(event.target.value)}
            />
          </div>

          <div className="booking-form__field">
            <label htmlFor="checkout">Fecha de salida</label>
            <input
              id="checkout"
              type="date"
              value={fechaSalida}
              min={fechaIngreso || getDateValue(new Date())}
              onChange={(event) => setFechaSalida(event.target.value)}
            />
          </div>

          <div className="booking-form__summary">
            <span>Habitación seleccionada</span>
            <strong>{habitacionActual.nombre}</strong>
            <span>{noches > 0 ? `${noches} noches` : 'Selecciona fechas'}</span>
          </div>

          <button type="submit" className="button button--primary booking-form__button">
            Confirmar reserva
          </button>
        </form>

        {mensaje && <p className="booking-message">{mensaje}</p>}
      </div>
    </section>
  );
}

export default Reservas;
