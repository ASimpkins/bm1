import React from 'react';
import FormField from './FormField';
import { FormStep as IFormStep, FormData } from '../../types/form';

interface FormStepProps {
  step: IFormStep;
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function FormStep({ step, formData, onChange }: FormStepProps) {
  return (
    <div className="transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6">{step.title}</h2>
      <div className="space-y-4">
        {step.fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}