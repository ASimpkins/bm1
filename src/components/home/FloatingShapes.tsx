import React from 'react';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/5 backdrop-blur-lg rounded-full"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
            animation: `float ${10 + Math.random() * 20}s infinite ease-in-out ${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}