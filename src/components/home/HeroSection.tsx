import React from 'react';
import { ArrowRight, Star, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import DiagonalBanners from './DiagonalBanners';
import LightningBolts from './LightningBolts';
import FloatingShapes from './FloatingShapes';

export default function HeroSection() {
  const stats = [
    { icon: Star, text: '500% Average Growth' },
    { icon: Rocket, text: '2M+ Reach' },
    { icon: Zap, text: '$10M+ Generated' }
  ];

  return (
    <section className="relative min-h-screen bg-primary-600 overflow-hidden">
      <FloatingShapes />
      <LightningBolts />
      <DiagonalBanners />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image - Mobile First */}
          <div className="relative lg:hidden mt-24 mb-4">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Creator"
                className="rounded-3xl shadow-2xl transform -rotate-6 w-full max-w-[280px] mx-auto"
              />
              <div className="absolute inset-0 rounded-3xl shadow-neon-yellow opacity-50" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 lg:text-left text-center">
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter hero-text">
                <div className="flex flex-col space-y-1 items-center lg:items-start">
                  <span className="hero-text-white">CREATOR</span>
                  <span className="hero-text-white">GROWTH</span>
                  <span className="neon-text-white">HACKING</span>
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-xl mt-8 mx-auto lg:mx-0">
                Transform your social media presence with data-driven strategies and proven growth techniques
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/apply"
                className="animate-gentle-bounce group relative inline-flex items-center px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon"
              >
                <span className="relative z-10 flex items-center">
                  START GROWING
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm"
                >
                  <stat.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Desktop */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Creator"
                className="rounded-3xl shadow-2xl transform -rotate-6 w-full"
              />
              <div className="absolute inset-0 rounded-3xl shadow-neon-yellow opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}