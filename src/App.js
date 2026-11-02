import './App.css';
import Header from './componentes/Header';
import Inicio from './componentes/inicio';
import AcercaDeNosotros from './componentes/AcercaDeNosotros';
import Reservas from './componentes/Reservas';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Inicio />
        <AcercaDeNosotros />
        <Reservas />
      </main>
    </div>
  );
}

export default App;
