import './App.css';
import CircularSliderSection from './components/carousel/CircularSliderSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/sidebar/SideBar'
import MapSection from './components/map/MapSection';

const App = () => {
  return (
    <div>
      <Navbar/>
      <CircularSliderSection/>
      <SideBar/>
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;