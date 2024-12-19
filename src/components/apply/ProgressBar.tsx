import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {[...Array(totalSteps)].map((_, index) => {
          const stepNumber = index + 1;
          return (
            <div
              key={stepNumber}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stepNumber === currentStep
                  ? 'bg-primary-600 text-white'
                  : stepNumber < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {stepNumber < currentStep ? <Check size={16} /> : stepNumber}
            </div>
          );
        })}
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-primary-600 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}