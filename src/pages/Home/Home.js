import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import car from "../../pics/car-paint.jpg";
import wood from "../../pics/wood-paint.jpg";
import wax from "../../pics/wax.jpg";
import causeway from "../../pics/causeway.png";
import debeer from "../../pics/Debeer-L.png";
import sunny from "../../pics/sunny-logos.png";
import starclass from "../../pics/starClass.png";
import TellAboutUs from "../TellAboutUs/TellAboutUs";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import { RightCircleFilled } from "@ant-design/icons";
import Marquee from "react-fast-marquee";
import "./home.css";

const Home = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const category = [
    {
      name: "Auto Paint",
      path: "categoryAutoPaint",
      image: car,
    },
    {
      name: "Wood and Furniture",
      path: "categoryWoodPaint",
      image: wood,
    },
    {
      name: "Wax",
      path: "categoryWax",
      image: wax,
    },
  ];

  const latitude = 6.938516795386115;
  const longitude = 79.96222114725961;

  return (
    <div>
      <div>
        <Carousel />
      </div>

      <Marquee
        className="marq"
        direction="right"
        speed={20}
        gradientColor={[0, 0, 0]}
        gradientWidth={0}
        style={{ width: "90%" }}
      >
        <img src={causeway} className="marq-img" alt="causeway-logo" />
        <img src={starclass} className="marq-img" alt="starclass-logo" />
        <img src={debeer} className="marq-img" alt="debeer-logo" />
        <img src={sunny} className="marq-img" alt="causewaysunny-logo" />
        <img src={causeway} className="marq-img" alt="causeway-logo" />
        <img src={starclass} className="marq-img" alt="starclass-logo" />
        <img src={debeer} className="marq-img" alt="debeer-logo" />
        <img src={sunny} className="marq-img" alt="causewaysunny-logo" />
      </Marquee>

      <h2 className="home-header">FEATURED CATEGORIES</h2>

      <div className="home-grid">
        {category.map((e) => {
          return (
            <div className="home-card-body">
              <article className="home-card-item">
                <header className="home-card-header">
                  <h1 className="home-card-title">{e.name} </h1>
                </header>

                <div class="home-card-img-wrapper">
                  <img
                    src={e.image}
                    alt="category-img"
                    className="home-card-img"
                  />

                  <Link
                    className="home-card-see-all"
                    to={`/${e.path}/${e.name}`}
                    onClick={handleClick}
                  >
                    See All Items <RightCircleFilled />
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
      <div className="map-container">
        <h3>Where to find us</h3>
        <div className="map">
          <Map
            latitude={latitude}
            longitude={longitude}
            title="Colour Studio"
          />
        </div>
      </div>
      <div>
        <TellAboutUs />
      </div>
    </div>
  );
};
export default Home;
