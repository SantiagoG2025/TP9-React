import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="brand">
          <span className="brand__icon">H</span>
          <span>Hotel Sol y Brisa</span>
        </div>

        <nav className="nav" aria-label="Menú principal">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#reservas">Reservas</a>
        </nav>

        <a href="#reservas" className="button button--primary">
          Reservar ahora
        </a>
      </div>
    </header>
  );
}

export default Header;
