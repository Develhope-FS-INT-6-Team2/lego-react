import './App.css';
import Footer from './components/Footer/Footer';
import FanFavourites from './components/fan-favourites/FanFavourites';
import HeroSection from './components/hero-section/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <FanFavourites/>
      <Footer/>
    </div>
  );
}

export default App;
