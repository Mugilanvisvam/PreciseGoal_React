import React from 'react';
import TopBar from './Components/TopBar'
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HowItWorks from './Components/HowItWorks';
import Principles from './Components/Principles'
import ArticleCard from './Components/ArticleCard';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <HeroSection />
      <Principles />
      <HowItWorks />
      <ArticleCard />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
