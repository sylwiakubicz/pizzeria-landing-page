import './App.css';
import CircularSliderSection from './components/carousel/CircularSliderSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/sidebar/SideBar'
import MapSection from './components/map/MapSection';
import MenuSection from './components/menu/MenuSection'
import { useDispatch } from 'react-redux';
import {setMenuData} from './redux/menu/menuSlice'
import { useEffect } from 'react';
import menuData from './api/menu.json';
import SpecialsSection from './components/specials/SpecialsSection';
import Banner from './components/banner/Banner';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuData(menuData.menu));
  }, [dispatch]);

  return (
    <div>
      <Navbar/>
      <SideBar/>
      <Banner />
      <CircularSliderSection/>
      <MenuSection />
      <SpecialsSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;