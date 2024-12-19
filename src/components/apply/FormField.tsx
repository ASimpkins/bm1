import React from 'react';
import { FormField as IFormField, FormData } from '../../types/form';

interface FormFieldProps {
  field: IFormField;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function FormField({ field, value, onChange }: FormFieldProps) {
  const baseInputClasses = "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={value}
            onChange={onChange}
            className={baseInputClasses}
            placeholder={field.placeholder}
            required={field.required}
            rows={3}
          />
        );

      case 'select':
        return (
          <select
            name={field.name}
            value={value}
            onChange={onChange}
            className={baseInputClasses}
            required={field.required}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={value}
            onChange={onChange}
            className={baseInputClasses}
            placeholder={field.placeholder}
            required={field.required}
          />
        );
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
      </label>
      {renderField()}
    </div>
  );
}