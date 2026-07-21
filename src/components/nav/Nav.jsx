import "./Nav.scss";
import { WhatsAppButton, InstargramButton } from "../buttons/Buttons";

export default function Nav() {
  const cellNumber = import.meta.env.VITE_CELL_NUMBER;

  return (
    <nav className="nav">
      <h1 className="nav-title">Mom´s Bakery</h1>
      <ul className="nav-ul">
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#pedidos">Pedidos</a></li>
        <li><a href="#puntosVenta">Puntos de Venta</a></li>
      </ul>
      <div className="nav-div">
        <a
          href="https://www.instagram.com/moms.bakery__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstargramButton />
        </a>
        <a
          href={`https://wa.me/${cellNumber}?text=Hola%20quiero%20información!%20%F0%9F%A7%81}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppButton />
        </a>
      </div>
    </nav>
  );
}
