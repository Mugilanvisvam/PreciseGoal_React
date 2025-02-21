import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HowItWorks from './Components/HowItWorks';
import Principles from './Components/Principles'
import ArticleCard from './Components/ArticleCard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Principles />
      <HowItWorks />
      <ArticleCard />
      <Footer />
    </div>
  );
}

export default App;
