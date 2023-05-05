import React, { useRef, useEffect, useState, Children, cloneElement } from "react";
import ArrowButton from "./ArrowButton";

const Carousel = ({ children }) => {
  const carouselRef = useRef();
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();
  const [isLeftmost, setIsLeftmost] = useState(true);
  const [isRightmost, setIsRightmost] = useState(false);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.clientWidth;
    carousel.scrollBy({
      top: 0,
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const updateArrowsVisibility = () => {
    const carousel = carouselRef.current;

    if (carousel) {
      setIsLeftmost(carousel.scrollLeft === 0);
      setIsRightmost(carousel.scrollWidth - carousel.scrollLeft === carousel.clientWidth);
    }
  };

  useEffect(() => {
    updateArrowsVisibility();
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", updateArrowsVisibility);
    window.addEventListener("resize", updateArrowsVisibility);

    return () => {
      carousel.removeEventListener("scroll", updateArrowsVisibility);
      window.removeEventListener("resize", updateArrowsVisibility);
    };
  }, []);

  const childrenWithProps = Children.map(children, (child) => {
    return cloneElement(child, { className: "popular-set-item" });
  });

  return (
    <div className="most-popular-wrapper">
      <ArrowButton
        direction="left"
        onClick={() => handleScroll("left")}
        ref={prevButtonRef}
        hidden={isLeftmost}
      />
      <div ref={carouselRef} className="carousel-mps">
        {childrenWithProps}
      </div>
      <ArrowButton
        direction="right"
        onClick={() => handleScroll("right")}
        ref={nextButtonRef}
        hidden={isRightmost}
      />
    </div>
  );
};

export default Carousel;
