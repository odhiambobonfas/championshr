import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import WhoWeAre from './components/WhoWeAre';
import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <WhoWeAre />
      <Team />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
