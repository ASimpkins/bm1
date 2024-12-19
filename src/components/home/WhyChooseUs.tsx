import React from 'react';
import { Zap, Target, BarChart, Users, Shield, Rocket } from 'lucide-react';
import { Feature } from '../../types/features';

const features: Feature[] = [
  {
    icon: Target,
    title: 'Strategic Growth Planning',
    description: 'Custom-tailored strategies to reach your specific audience and goals'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Deep insights into your performance and audience engagement'
  },
  {
    icon: Users,
    title: 'Creator Community',
    description: 'Join a network of successful creators for collaboration and support'
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'Safeguard your content and intellectual property'
  },
  {
    icon: Zap,
    title: 'Rapid Optimization',
    description: 'Quick iterations based on real-time performance data'
  },
  {
    icon: Rocket,
    title: 'Launch Support',
    description: 'Full guidance from ideation to execution of new projects'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-purple-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose BME Creators?
          </h2>
          <p className="text-xl text-gray-600">Empowering your journey to creator success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}