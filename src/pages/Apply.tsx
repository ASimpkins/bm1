import React from 'react';
import ApplicationForm from '../components/apply/ApplicationForm';
import FloatingShapes from '../components/home/FloatingShapes';

export default function Apply() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-20">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Join BME Creators
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Take the first step towards transforming your creator career
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </section>
    </div>
  );
}