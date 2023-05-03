import './App.css';
import Footer from './components/Footer/Footer';
import FanFavourites from './components/fan-favourites/FanFavourites';
import HeroSection from './components/hero-section/HeroSection';
import CategoryNavbar from './components/category-navbar/CategoryNavbar';
import BannerTwo from "./components/banner-2/BannerTwo";
import FeaturedSets from './components/FeaturedSets/FeaturedSets';
import Recommended from './components/Recommended/Recommended';


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <CategoryNavbar/>
      <Recommended/>
      <BannerTwo/>
      <FeaturedSets/>
      <FanFavourites/>
      <Footer/>
    </div>
  );
}

export default App;
