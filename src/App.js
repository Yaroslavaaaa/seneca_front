import React from 'react';
import Header from './components/Header';
import HeadBanner from './components/HeadBanner';
import Place from './components/Place';
import About from './components/About';
import Objects from './components/Objects';
import Description from './components/Description';
import Actions from './components/Actions';
import PlanSelector from './components/PlanSelector';
import VideoFilter from './components/VideoFilter';
import PhotoCarousel from './components/PhotoCarousel';
import PhotoCarousel2 from './components/PhotoCarousel2';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import "./App.css"

import 'react-phone-input-2/lib/style.css';
import 'flag-icons/css/flag-icons.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeadBanner />
      <Place />
      <About />
      <Objects />
      <Description />
      <Actions />
      <PlanSelector />
      <Calculator />
      <VideoFilter />
      <PhotoCarousel />
      <PhotoCarousel2 />
      <Footer />
    </div>
  );
};

export default App;