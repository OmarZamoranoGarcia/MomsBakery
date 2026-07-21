import "./Main.scss";
import cakeImage from "../../assets/cake.webp";
import cakeImage2 from "../../assets/cake2.jpg";

export default function Main() {
  return (
    <main className="main">
      <div className="main-div-images">
        <img src={cakeImage} alt="Cake" className="main-image" />
        <img src={cakeImage2} alt="Cake 2" className="main-image2" />
      </div>

      <h1 className="main-title">
        HORNEADO EN CASA, <br />
        <span className="main-title-span">PENSADO PARA TI</span>
      </h1>

      <p className="main-description">
        Creemos que los mejores momentos comienzan con algo dulce. Por eso
        elaboramos cada postre de manera artesanal, cuidando cada detalle para
        ofrecerte ese sabor casero que reconforta el corazón.
      </p>
    </main>
  );
}