import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';
import { TestimonialCard } from './TestimonialCard';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Tech Content Creator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    quote: 'BME Creators transformed my channel from a hobby into a thriving business. The growth strategies they provided were game-changing.',
    stats: '500K+ Subscribers'
  },
  {
    name: 'Marcus Chen',
    role: 'Lifestyle Influencer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'The community and support system here is unmatched. My engagement rates have tripled since joining.',
    stats: '1M+ Following'
  },
  {
    name: 'Priya Patel',
    role: 'Educational Creator',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
    quote: 'Their analytics-driven approach helped me understand my audience better and create more impactful content.',
    stats: '2M+ Views Monthly'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Quote
            key={i}
            className="absolute text-gray-800/10 transform rotate-12"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Creator Success Stories
          </h2>
          <p className="text-xl text-gray-300">Hear from our community members</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}