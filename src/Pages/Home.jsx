import React from 'react';
import HeroSection from '../Components/HeroSection';
import Principles from '../Components/Principles';
import HowItWorks from '../Components/HowItWorks';
import ArticleCard from '../Components/ArticleCard';
import CarouselComponent from '../Components/Carousel';
import ContactSection from '../Components/ContactSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <Principles />
      <HowItWorks />
      <ArticleCard />
      <CarouselComponent />
      <ContactSection />
    </div>
  );
}

export default Home;
 