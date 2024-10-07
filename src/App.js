import './App.css';
import CircularSliderSection from './components/carousel/CircularSliderSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Navbar />
      <CircularSliderSection />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;