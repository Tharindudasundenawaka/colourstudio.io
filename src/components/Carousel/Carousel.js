import React, { useState, useEffect } from "react";
import image1 from "../../pics/vehicle.jpg";
import image2 from "../../pics/delivery.jpg";
import image3 from "../../pics/vehiclePaint.png";
import image4 from "../../pics/colorful_house.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: image1,
      alt: "auto paint",
    },
    {
      url: image2,
      alt: "delicery",
    },
    {
      url: image3,
      alt: "vehicle paint",
    },
    {
      url: image4,
      alt: "house paint",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const lastIndex = images.length - 1;
      const shouldResetIndex = currentIndex === lastIndex;
      const index = shouldResetIndex ? 0 : currentIndex + 1;

      setCurrentIndex(index);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  //
  const handleNextClick = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <img src={images[currentIndex].url} alt={images[currentIndex].alt} />

      <div className="buttons">
        <button className="prev-button" onClick={handlePrevClick}>
          <ArrowLeftOutlined />
        </button>
        <button className="next-button" onClick={handleNextClick}>
          <ArrowRightOutlined />
        </button>
      </div>

      <div className="dots">
        {images.map((image, index) => (
          <span
            key={image.alt}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
