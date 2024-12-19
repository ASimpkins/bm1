export interface FormData {
  // Personal Info
  name: string;
  email: string;
  phone: string;
  
  // Social Media Handles
  youtube: string;
  instagram: string;
  tiktok: string;
  twitch: string;
  twitter: string;
  
  // Channel Info
  primaryPlatform: string;
  niche: string;
  currentFollowers: string;
  monthlyViews: string;
  
  // Goals & Background
  goals: string;
  challenges: string;
  experience: string;
}

export interface FormStep {
  title: string;
  fields: FormField[];
}

export interface FormField {
  name: keyof FormData;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  options?: { value: string; label: string; }[];
  required?: boolean;
}