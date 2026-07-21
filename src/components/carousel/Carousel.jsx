import "./Carousel.scss";
import { catalog } from "./catalog";
import { useRef } from "react";

export default function Carousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Cantidad de pixeles a desplazar
      if (direction === "left") {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div id="catalogo">
      <h1>Catálogo</h1>
      <div className="catalog-div">
        <button onClick={() => scroll("left")} className="catalog-button left">
          ◀
        </button>

        <div className="carousel" ref={carouselRef}>
          {catalog.map((item, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-div">
                <img
                  src={item.img}
                  alt={item.name}
                  className="carousel-div-image"
                />
              </div>
              <div className="carousel-description">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="catalog-button right"
        >
          ▶
        </button>
      </div>
    </div>
  );
}