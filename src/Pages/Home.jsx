import React from 'react';
import HeroSection from '../Components/HeroSection';
import Principles from '../Components/Principles';
import HowItWorks from '../Components/HowItWorks';
import ArticleCard from '../Components/ArticleCard';
import CarouselComponent from '../Components/Carousel';
import ContactSection from '../Components/ContactSection';
import FundAdvisorSection from '../Components/FundAdvisorSection';
function Home() {
  return (
    <div>
      <HeroSection />
      <Principles />
      <FundAdvisorSection />
      <HowItWorks />
      <ArticleCard />
      <CarouselComponent />
      <ContactSection />
    </div>
  );
}

export default Home;
 