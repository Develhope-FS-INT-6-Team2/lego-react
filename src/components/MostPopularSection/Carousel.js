import React, { useRef, useEffect, useState, Children, cloneElement } from "react";
import ArrowButton from "./ArrowButton";

const Carousel = ({ children }) => {
  const carouselRef = useRef();
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();
  const [isLeftmost, setIsLeftmost] = useState(true);
  const [isRightmost, setIsRightmost] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

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
    const tolerance = 5; // You can adjust this value if needed
  
    if (carousel) {
      setIsLeftmost(carousel.scrollLeft === 0);
      setIsRightmost(Math.abs(carousel.scrollWidth - carousel.scrollLeft - carousel.clientWidth) <= tolerance);
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
    e.currentTarget.style.cursor = "grabbing";
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const carousel = carouselRef.current;
    carousel.scrollLeft = carousel.scrollLeft - (e.clientX - startPosition);
    setStartPosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const carousel = carouselRef.current;
    carousel.scrollLeft = carousel.scrollLeft - (e.touches[0].clientX - startPosition);
    setStartPosition(e.touches[0].clientX);
  };

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
      <div
        ref={carouselRef}
        className={`carousel-mps${isDragging ? " dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
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
