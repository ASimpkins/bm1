import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faqData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-xl font-semibold text-gray-900">{item.question}</span>
            <ChevronDown
              className={`w-6 h-6 text-primary-600 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 transition-all duration-300 ${
              openIndex === index ? 'py-4' : 'py-0 h-0'
            } overflow-hidden`}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}