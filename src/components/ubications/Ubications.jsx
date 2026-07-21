import "./Ubications.scss";
import { InstargramButton, FacebookButton } from "../buttons/Buttons";
import { LuMapPin } from "react-icons/lu";

export default function Ubications() {
  return (
    <section className="ubications" id="puntosVenta">
      <h1 className="ubications-h1">Puntos de venta</h1>
      <p className="ubications-p">
        También nos encontramos en colectivos para hacer llegar nuestros
        productos a más personas como tu.
      </p>
      <div id="ubicationsFlex">
        <div className="ubications-div">
          <h2>
            <LuMapPin /> Angely Showroom & Cofee
          </h2>
          <div className="ubications-div-networks">
            <a
              href="https://www.instagram.com/angelyshowroom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstargramButton />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100046370574479#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookButton />
            </a>
          </div>
          <div className="ubications-div-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.32442120149!2d-116.9655678345708!3d32.50881353877993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9394505b0f55f%3A0xf6ba91748b550b3!2sANGELY%20SHOWROOM%20%26%20COFFEE!5e0!3m2!1ses!2smx!4v1775799512415!5m2!1ses!2smx"
              width="100%"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}