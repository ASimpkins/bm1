import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SuccessMetrics from '../components/home/SuccessMetrics';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <SuccessMetrics />
      <Testimonials />
      <WhyChooseUs />
    </div>
  );
}