import React from 'react';
import { Zap } from 'lucide-react';

export default function LightningBolts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <Zap
          key={i}
          className="absolute text-yellow-400 animate-lightning"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
}