import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';
import FloatingShapes from '../components/home/FloatingShapes';

const successStories = [
  {
    name: "Emily Chen",
    platform: "YouTube",
    niche: "Tech Reviews",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    metrics: {
      growth: "850%",
      revenue: "$2.5M",
      followers: "2.1M"
    },
    quote: "BME Creators transformed my channel from a hobby into a thriving business. Their strategies helped me grow from 10K to over 2M subscribers in just 18 months.",
    tags: ["Tech", "Reviews", "Education"]
  },
  {
    name: "Marcus Thompson",
    platform: "Instagram & TikTok",
    niche: "Fitness & Wellness",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    metrics: {
      growth: "1200%",
      revenue: "$1.8M",
      followers: "3.5M"
    },
    quote: "The team's holistic approach to content strategy and community building helped me create a genuine connection with my audience while maximizing growth.",
    tags: ["Fitness", "Lifestyle", "Wellness"]
  },
  {
    name: "Sofia Rodriguez",
    platform: "YouTube & Twitch",
    niche: "Gaming",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    metrics: {
      growth: "600%",
      revenue: "$900K",
      followers: "1.2M"
    },
    quote: "Their expertise in gaming content and community management was invaluable. They helped me turn my passion into a sustainable career.",
    tags: ["Gaming", "Entertainment", "Live Streaming"]
  }
];

export default function SuccessStories() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-20">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Creator Success Stories
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Real results from real creators who transformed their platforms with our help
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-purple-600/80 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <h3 className="text-3xl font-bold mb-2">{story.name}</h3>
                        <p className="text-xl text-primary-100">{story.platform}</p>
                        <p className="text-lg text-primary-200">{story.niche}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{story.metrics.growth}</div>
                          <div className="text-sm text-gray-600">Growth</div>
                        </div>
                        <div className="text-center">
                          <Star className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{story.metrics.revenue}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{story.metrics.followers}</div>
                          <div className="text-sm text-gray-600">Followers</div>
                        </div>
                      </div>

                      <blockquote className="text-gray-600 italic mb-6">
                        "{story.quote}"
                      </blockquote>

                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="mt-6 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                      Read Full Story
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
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