import React from 'react';

const valores = [
  {
    title: 'Hospitalidad cálida',
    text: 'Cada detalle está pensado para que te sientas como en casa desde el primer momento.',
  },
  {
    title: 'Ambiente relajante',
    text: 'Diseñamos espacios serenos que invitan a descansar y recargar energías.',
  },
  {
    title: 'Atención personalizada',
    text: 'Nuestro equipo te acompaña para hacer tu estadía cómoda, memorable y sin complicaciones.',
  },
];

function Acercade() {
  return (
    <section id="nosotros" className="about">
      <div className="container about__content">
        <div className="about__info">
          <p className="eyebrow">Sobre nosotros</p>
          <h2>Un lugar pensado para desconectar y disfrutar</h2>
          <p>
            En Hotel Sol y Brisa combinamos confort, naturalidad y servicio de calidad para
            ofrecerte una estancia única. Desde nuestras habitaciones hasta el restaurante y
            las áreas comunes, todo está diseñado para brindarte tranquilidad y bienestar.
          </p>
        </div>

        <div className="about__cards">
          {valores.map((valor) => (
            <article key={valor.title} className="about__card">
              <h3>{valor.title}</h3>
              <p>{valor.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Acercade;
