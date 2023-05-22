document.addEventListener("DOMContentLoaded", function () {
  const mostPopularSections = document.querySelectorAll(
      ".most-popular-section"
  );

  mostPopularSections.forEach((section) => {
      const previousItemButton = section.querySelector(
          "#previous-item-button"
      );
      const nextItemButton = section.querySelector("#next-item-button");
      const carouselMPS = section.querySelector(".carousel-mps");

      function updateScrollbarVisibility() {
          let totalItemsWidth = 0;
          const carouselItems =
              carouselMPS.querySelectorAll(".popular-set-item");

          // Calculate the total width of carousel items
          carouselItems.forEach((item) => {
              totalItemsWidth += item.clientWidth;
          });

          if (totalItemsWidth <= carouselMPS.clientWidth) {
              carouselMPS.classList.add("hide-scrollbar");
              previousItemButton.style.display = "none";
              nextItemButton.style.display = "none";
          } else {
              carouselMPS.classList.remove("hide-scrollbar");
              previousItemButton.style.display = "";
              nextItemButton.style.display = "";
          }
      }

      function checkButtonsVisibility() {
          if (carouselMPS.scrollLeft === 0) {
              previousItemButton.style.display = "none";
          } else {
              previousItemButton.style.display = "block";
          }

          if (
              carouselMPS.scrollLeft + carouselMPS.clientWidth ===
              carouselMPS.scrollWidth
          ) {
              nextItemButton.style.display = "none";
          } else {
              nextItemButton.style.display = "block";
          }
      }
      function scrollToNextItem() {
          const remainingDistance =
              carouselMPS.scrollWidth -
              (carouselMPS.scrollLeft + carouselMPS.clientWidth);
          const scrollAmount = Math.min(
              carouselMPS.clientWidth,
              remainingDistance
          );
          if (scrollAmount > 0) {
              carouselMPS.scrollBy({
                  top: 0,
                  left: scrollAmount,
                  behavior: "smooth",
              });
          }
          checkButtonsVisibility();
      }

      function scrollToPreviousItem() {
          const remainingDistance = carouselMPS.scrollLeft;
          const scrollAmount = Math.min(
              carouselMPS.clientWidth,
              remainingDistance
          );
          carouselMPS.scrollBy({
              top: 0,
              left: -scrollAmount,
              behavior: "smooth",
          });
          checkButtonsVisibility();
      }

      previousItemButton.addEventListener("click", scrollToPreviousItem);
      nextItemButton.addEventListener("click", scrollToNextItem);

      updateScrollbarVisibility();
      checkButtonsVisibility();

      carouselMPS.addEventListener("scroll", checkButtonsVisibility);

      window.addEventListener("resize", () => {
          updateScrollbarVisibility();
          checkButtonsVisibility();
      });
  });
});
