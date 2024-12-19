import React from 'react';
import { BarChart2, Megaphone, PenTool, Target, Users, Zap } from 'lucide-react';
import FloatingShapes from '../components/home/FloatingShapes';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Growth Strategy",
      description: "Data-driven approach to expand your reach and engagement",
      features: ["Audience Analysis", "Content Calendar", "Growth Roadmap"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-impact content that resonates with your audience",
      features: ["Visual Design", "Script Writing", "Video Production"]
    },
    {
      icon: Megaphone,
      title: "Brand Development",
      description: "Build a memorable and authentic creator brand",
      features: ["Brand Strategy", "Visual Identity", "Voice & Tone"]
    },
    {
      icon: BarChart2,
      title: "Analytics & Insights",
      description: "Deep dive into your performance metrics",
      features: ["Performance Tracking", "Competitor Analysis", "Trend Reports"]
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster an engaged and loyal community",
      features: ["Engagement Strategy", "Community Management", "Event Planning"]
    },
    {
      icon: Zap,
      title: "Monetization",
      description: "Transform your influence into sustainable revenue",
      features: ["Revenue Strategy", "Partnership Development", "Product Launch"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-20">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Supercharge Your Growth
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive services designed to take your creator journey to the next level
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-primary-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Growth Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who have transformed their online presence with our services
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}