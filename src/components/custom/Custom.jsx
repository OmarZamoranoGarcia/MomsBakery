import "./Custom.scss";
import { FaCakeCandles } from "react-icons/fa6";
import { BiSolidCake } from "react-icons/bi";
import { GiRingBox } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";

export default function Custom() {
  const cellNumber = import.meta.env.VITE_CELL_NUMBER;

  return (
    <section className="custom" id="pedidos">
      <div className="custom-div">
        <h1 className="custom-div-title">Pedidos personalizados</h1>
        <p className="custom-div-p">
          Contáctanos para crear tus pasteles personalizados, o si prefieres te
          preparamos tus postres favoritos para que estén presentes en tu
          evento.
        </p>
        <ul className="custom-div-list">
          <li>
            <BiSolidCake /> CUMPLEAÑOS
          </li>
          <li>
            <FaCakeCandles /> XV AÑOS
          </li>
          <li>
            <GiRingBox /> BODAS
          </li>
          <li>
            <BiSolidDish /> EVENTOS DE CONVIVENCIA
          </li>
        </ul>
        <button className="custom-div-button">
          <a href={`https://wa.me/${cellNumber}?text=Hola%20quiero%20información!%20%F0%9F%A7%81`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar cotización
          </a>
        </button>
      </div>
    </section>
  );
}
