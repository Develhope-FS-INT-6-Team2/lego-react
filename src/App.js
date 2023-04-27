import './App.css';
import Footer from './components/Footer/Footer';
import FanFavourites from './components/fan-favourites/FanFavourites';
import HeroSection from './components/hero-section/HeroSection';
import CategoryNavbar from './components/category-navbar/CategoryNavbar';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <CategoryNavbar/>
      <FanFavourites/>
      <Footer/>
    </div>
  );
}

export default App;
