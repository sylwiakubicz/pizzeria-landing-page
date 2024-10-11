import './App.css';
import CircularSliderSection from './components/carousel/CircularSliderSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/sidebar/SideBar'
import MapSection from './components/map/MapSection';
import MenuSection from './components/menu/MenuSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <CircularSliderSection/>
      <MenuSection />
      <SideBar/>
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;