import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FloatingShapes from '../components/home/FloatingShapes';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-20">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ready to take your creator journey to the next level? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}