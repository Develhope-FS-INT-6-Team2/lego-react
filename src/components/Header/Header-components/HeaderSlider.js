import React from "react";
import Header from "../Header";
import { useState } from "react";
import data from "./SliderTitles.json";

function HeaderSlider() {
  const data = [
    { id: 1, title: "A gift with LEGO® purchases of £95 or more*" },
    { id: 2, title: "Get a Children's Amusement Park gift*" },
    { id: 3, title: "What's on sale now?" },
    { id: 4, title: "FREE delivery on orders above £50!*" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="top-header-slider">
      <button onClick={handlePrevious} className="top-header-prev-btn">
        <img src="../assets/icons/header/angel-left-icon.png" width="20" />
      </button>
      <p>{data[currentIndex].title}</p>
      <button onClick={handleNext} className="top-header-next-btn">
        <img src="../assets/icons/header/angel-right-icon.png" width="20" />
      </button>
    </div>
  );
}

export default HeaderSlider;
