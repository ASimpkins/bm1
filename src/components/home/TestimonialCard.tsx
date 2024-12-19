import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mr-4 border-2 border-primary-500"
        />
        <div>
          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
          <p className="text-primary-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-6">{testimonial.quote}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
          ))}
        </div>
        <span className="text-primary-400 font-semibold">{testimonial.stats}</span>
      </div>
    </div>
  );
}