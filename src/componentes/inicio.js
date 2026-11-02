import React from 'react';

const servicios = [
  'Desayuno incluido',
  'Wi‑Fi gratis',
  'Piscina y spa',
  'Traslados privados',
];

function Inicio() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="eyebrow">Bienvenidos a Hotel Sol y Brisa</p>
          <h1>Vive una experiencia de descanso inolvidable</h1>
          <p className="hero__description">
            Un refugio frente al mar pensado para desconectar, relajarse y disfrutar
            de cada momento con comodidad, atención personalizada y vistas únicas.
          </p>

          <div className="hero__actions">
            <a href="#reservas" className="button button--primary">
              Ver habitaciones
            </a>
            <a href="#nosotros" className="button button--secondary">
              Conocenos
            </a>
          </div>

          <ul className="servicios">
            {servicios.map((servicio) => (
              <li key={servicio}>{servicio}</li>
            ))}
          </ul>
        </div>

        <div className="hero__card" aria-label="Información del hotel">
          <div className="hero__card-top">
            <span>Calificación</span>
            <strong>4.9/5</strong>
          </div>
          <h2>Experiencia premium</h2>
          <p>
            Ubicado en una zona tranquila con acceso directo a la playa y servicios
            de lujo para familias, parejas y viajeros de negocios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
