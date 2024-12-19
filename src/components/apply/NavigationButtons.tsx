import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={onPrevious}
          className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
      )}
      
      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ml-auto"
        >
          Next
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      ) : (
        <button
          type="submit"
          onClick={onSubmit}
          className="flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ml-auto"
        >
          Submit Application
          <Check className="w-5 h-5 ml-2" />
        </button>
      )}
    </div>
  );
}