import React, { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import "./HomePage.css";
import Footer from "../../Footer/Footer";
import FanFavourites from "../../fan-favourites/FanFavourites";
import HeroSection from "../../hero-section/HeroSection";
import CategoryNavbar from "../../category-navbar/CategoryNavbar";
import BannerTwo from "../../banner-2/BannerTwo";
import FeaturedSets from "../../FeaturedSets/FeaturedSets";
import Recommended from "../../Recommended/Recommended";
import { CookiePermission } from "../../cookie-permission/CookiePermission";
import MostPopularSection from "../../MostPopularSection/MostPopularSection";
import Header from "../../Header/Header";
import MainMenu from "../../main-menu/MainMenu";

function HomePage() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="home-page">
       <Header isLoggedIn={isLoggedIn} />
      <MainMenu />
      <HeroSection />
      <CategoryNavbar />
      <Recommended />
      <BannerTwo />
      <MostPopularSection />
      <FeaturedSets />
      <CookiePermission />
      <FanFavourites />
      <Footer />
    </div>
  );
}

export default HomePage;
