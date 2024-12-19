import React from 'react';

export default function ScrollingBanner() {
  const text = 'BRANDING • CONTENT • GROWTH • STRATEGY • ANALYTICS • ';
  
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 overflow-hidden py-4 transform -skew-y-3">
      <div className="animate-scroll whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="inline-block text-3xl font-black tracking-wider text-primary-600 mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}