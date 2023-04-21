import React from "react";
import Debeer from "../../pics/debeer.png";
import StarClass from "../../pics/starClass.png";
import Sunny from "../../pics/sunny-logos.png";
import { useNavigate } from "react-router-dom";
import "./autoPaint.css";

const Products = () => {
  const navigate = useNavigate();

  const category = [
    {
      name: "debeer",
      image: Debeer,
    },
    {
      name: "star class",
      image: StarClass,
    },
    {
      name: "causeway sunny",
      image: Sunny,
    },
  ];

  return (
    <div>
      <h2 className="auto-paint-header">OUR AUTO PAINT BRANDS</h2>

      <div className="auto-paint-grid">
        {category.map((e) => {
          return (
            <div className="auto-paint-card-body">
              <article
                className="auto-paint-card-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/autoPaintProductsCatergory/${e.name}`);
                }}
              >
                {/* <header className="auto-paint-card-header">
                  <h1 className="auto-paint-card-title">{e.name}</h1>
                </header> */}

                <div>
                  <img
                    src={e.image}
                    alt="category-img"
                    className="auto-paint-card-image"
                  />
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
