import React from 'react';
import { Rocket, Heart, Users, Globe } from 'lucide-react';
import FloatingShapes from '../components/home/FloatingShapes';

export default function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Pushing boundaries in the creator economy with cutting-edge strategies"
    },
    {
      icon: Heart,
      title: "Creator Success",
      description: "Your growth is our mission - we succeed when you succeed"
    },
    {
      icon: Users,
      title: "Diverse Voices",
      description: "Empowering creators from all backgrounds to share their stories"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building a worldwide community of influential creators"
    }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-20">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Empowering the Next Generation of Creators
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're on a mission to democratize the creator economy and help talented individuals turn their passion into prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-600 to-purple-600 p-8 rounded-3xl text-white transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                To provide creators with the tools, strategies, and support they need to build sustainable businesses and meaningful communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-white transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                A world where creative individuals can thrive independently, sharing their unique perspectives and talents with global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <value.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Strategy",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Priya Patel",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary-300">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}