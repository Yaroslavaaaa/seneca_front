import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import HeadBanner from './components/HeadBanner';
import Place from './components/Place';
import About from './components/About';
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <HeadBanner />
      <Place />
      <About />
      {/* <Hero />
      <InfoSection />
      <Footer /> */}
    </div>
  );
};

export default App;