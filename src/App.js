import './App.css';
import CircularSliderSection from './components/carousel/CircularSliderSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {

  const [showSideBar, setShowSideBar] = useState(false)

  const handleShowSideBar = () => {
    setShowSideBar(prev => !prev)
  }
  return (
    <div>
      <Navbar handleShowSideBar={handleShowSideBar}/>
      <CircularSliderSection />
      <SideBar showSideBar={showSideBar}/>
      <Footer />
    </div>
  );
}

export default App;