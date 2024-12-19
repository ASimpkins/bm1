import React from 'react';

export default function DiagonalBanners() {
  const text = 'BRANDING • CONTENT • GROWTH • STRATEGY • ANALYTICS • ';
  
  return (
    <>
      {/* Top-left to bottom-right banner */}
      <div className="absolute top-32 -left-4 right-0 bg-yellow-400 overflow-hidden py-3 transform -rotate-6 z-10">
        <div className="animate-scroll-fast whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block text-2xl font-black tracking-wider text-primary-600 mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom-right to top-left banner */}
      <div className="absolute top-48 -left-4 right-0 bg-yellow-400 overflow-hidden py-3 transform rotate-6 z-10">
        <div className="animate-scroll-reverse whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block text-2xl font-black tracking-wider text-primary-600 mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}