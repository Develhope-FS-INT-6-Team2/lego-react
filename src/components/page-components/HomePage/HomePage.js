import './HomePage.css';
import Footer from '../../Footer/Footer';
import FanFavourites from '../../fan-favourites/FanFavourites';
import HeroSection from '../../hero-section/HeroSection';
import CategoryNavbar from '../../category-navbar/CategoryNavbar';
import BannerTwo from "../../banner-2/BannerTwo";
import FeaturedSets from '../../FeaturedSets/FeaturedSets';
import Recommended from "../../Recommended/Recommended"
import { CookiePermission } from '../../cookie-permission/CookiePermission';
import MostPopularSection from '../../MostPopularSection/MostPopularSection';


function HomePage() {
  return (
    <div className="home-page">
      <HeroSection/>
      <CategoryNavbar/>
      <Recommended/>
      <BannerTwo/>
      <MostPopularSection/>
      <FeaturedSets/>
      <CookiePermission/>
      <FanFavourites/>
      <Footer/>
    </div>
  );
}

export default HomePage;