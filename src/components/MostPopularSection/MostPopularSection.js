// MostPopularSection.js

import React, { useRef, useEffect } from "react";
import "./mostpopular.css";

const MostPopularSection = () => {
    const carouselRef = useRef();
    const prevButtonRef = useRef();
    const nextButtonRef = useRef();

    const updateScrollbarVisibility = () => {
        const carousel = carouselRef.current;

        let totalItemsWidth = 0;
        const carouselItems = carousel.querySelectorAll(".popular-set-item");

        carouselItems.forEach((item) => {
            totalItemsWidth += item.clientWidth;
        });

        if (totalItemsWidth <= carousel.clientWidth) {
            carousel.classList.add("hide-scrollbar");
            prevButtonRef.current.style.display = "none";
            nextButtonRef.current.style.display = "none";
        } else {
            carousel.classList.remove("hide-scrollbar");
            prevButtonRef.current.style.display = "";
            nextButtonRef.current.style.display = "";
        }
    };

    const checkButtonsVisibility = () => {
        const carousel = carouselRef.current;

        if (carousel.scrollLeft === 0) {
            prevButtonRef.current.style.display = "none";
        } else {
            prevButtonRef.current.style.display = "block";
        }

        if (
            carousel.scrollLeft + carousel.clientWidth ===
            carousel.scrollWidth
        ) {
            nextButtonRef.current.style.display = "none";
        } else {
            nextButtonRef.current.style.display = "block";
        }
    };

    const scrollToNextItem = () => {
        const carousel = carouselRef.current;

        const remainingDistance =
            carousel.scrollWidth - (carousel.scrollLeft + carousel.clientWidth);
        const scrollAmount = Math.min(carousel.clientWidth, remainingDistance);
        if (scrollAmount > 0) {
            carousel.scrollBy({
                top: 0,
                left: scrollAmount,
                behavior: "smooth",
            });
        }
        checkButtonsVisibility();
    };

    const scrollToPreviousItem = () => {
        const carousel = carouselRef.current;

        const remainingDistance = carousel.scrollLeft;
        const scrollAmount = Math.min(carousel.clientWidth, remainingDistance);
        carousel.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: "smooth",
        });
        checkButtonsVisibility();
    };

    useEffect(() => {
        updateScrollbarVisibility();
        checkButtonsVisibility();

        const carousel = carouselRef.current;
        carousel.addEventListener("scroll", checkButtonsVisibility);

        window.addEventListener("resize", () => {
            updateScrollbarVisibility();
            checkButtonsVisibility();
        });

        return () => {
            window.removeEventListener("resize", () => {
                updateScrollbarVisibility();
                checkButtonsVisibility();
            });
        };
    }, []);

    return (
        <div className="most-popular-section">
            <div className="most-popular-wrapper">
                <i
                    id="previous-item-button"
                    ref={prevButtonRef}
                    onClick={scrollToPreviousItem}
                    className="fas fa-chevron-left"
                ></i>
                <div
                    ref={carouselRef}
                    onScroll={checkButtonsVisibility}
                    className="carousel-mps"
                >
                    {/* Add carousel content here, such as .popular-set-item */}
                </div>
                <i
                    id="next-item-button"
                    ref={nextButtonRef}
                    onClick={scrollToNextItem}
                    className="fas fa-chevron-right"
                ></i>
            </div>
        </div>
    );
};

export default MostPopularSection;
