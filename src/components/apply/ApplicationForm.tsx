import React, { useState } from 'react';
import { FormData } from '../../types/form';
import { formSteps } from '../../constants/formSteps';
import FormStep from './FormStep';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  youtube: '',
  instagram: '',
  tiktok: '',
  twitch: '',
  twitter: '',
  primaryPlatform: '',
  niche: '',
  currentFollowers: '',
  monthlyViews: '',
  goals: '',
  challenges: '',
  experience: ''
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <ProgressBar currentStep={step} totalSteps={formSteps.length} />

      <form onSubmit={handleSubmit}>
        <FormStep
          step={formSteps[step - 1]}
          formData={formData}
          onChange={updateFormData}
        />

        <NavigationButtons
          currentStep={step}
          totalSteps={formSteps.length}
          onPrevious={() => setStep(step - 1)}
          onNext={() => setStep(step + 1)}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}