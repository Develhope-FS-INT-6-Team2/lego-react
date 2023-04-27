import React from "react";
import "./CategoryNavbar.css";
//images
import news from "./images/news.jpg";
import exclusives from "./images/exclusives.jpg";
import offers from "./images/offers.jpg";
import easter from "./images/easter.jpg";
import superMario from "./images/superMario.jpg";
import dreamCars from "./images/dreamCars.jpg";
import magazine from "./images/magazine.jpg";
import vip from "./images/vip.jpg";

function CategoryNavbar(){
    return(
    <div class="category-navbar-container">
        <a href="#" class="category-navbar-one-category">
            <img
                src={news}
                alt="new-category"
            />
            <p>New</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={exclusives}
                alt="exclusives-category"
            />
            <p>Exclusives</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={offers}
                alt="offers-category"
            />
            <p>Offers</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={easter}
                alt="easter-category"
            />
            <p>Easter</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={superMario}
                alt="super-mario-category"
            />
            <p>LEGO® Super Mario™</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={dreamCars}
                alt="dream-cars-category"
            />
            <p>Dream Cars</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={magazine}
                alt="magazine-category"
            />
            <p>Magazine</p>
        </a>
        <a href="#" class="category-navbar-one-category">
            <img
                src={vip}
                alt="vip-category"
            />
            <p>VIP</p>
        </a>
    </div>
    )
}
export default CategoryNavbar;