import { FormStep } from '../types/form';

export const formSteps: FormStep[] = [
  {
    title: 'Personal Information',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        required: true
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'tel'
      }
    ]
  },
  {
    title: 'Social Media Presence',
    fields: [
      {
        name: 'youtube',
        label: 'YouTube Handle',
        type: 'text',
        placeholder: '@username or channel URL'
      },
      {
        name: 'instagram',
        label: 'Instagram Handle',
        type: 'text',
        placeholder: '@username'
      },
      {
        name: 'tiktok',
        label: 'TikTok Handle',
        type: 'text',
        placeholder: '@username'
      },
      {
        name: 'twitch',
        label: 'Twitch Handle',
        type: 'text',
        placeholder: '@username'
      },
      {
        name: 'twitter',
        label: 'Twitter Handle',
        type: 'text',
        placeholder: '@username'
      }
    ]
  },
  {
    title: 'Channel Information',
    fields: [
      {
        name: 'primaryPlatform',
        label: 'Primary Platform',
        type: 'select',
        options: [
          { value: 'youtube', label: 'YouTube' },
          { value: 'instagram', label: 'Instagram' },
          { value: 'tiktok', label: 'TikTok' },
          { value: 'twitch', label: 'Twitch' }
        ],
        required: true
      },
      {
        name: 'niche',
        label: 'Content Niche',
        type: 'text',
        placeholder: 'e.g., Tech Reviews, Gaming, Fitness',
        required: true
      },
      {
        name: 'currentFollowers',
        label: 'Current Followers',
        type: 'text',
        placeholder: 'e.g., 10K',
        required: true
      },
      {
        name: 'monthlyViews',
        label: 'Monthly Views',
        type: 'text',
        placeholder: 'e.g., 100K',
        required: true
      }
    ]
  },
  {
    title: 'Goals & Experience',
    fields: [
      {
        name: 'goals',
        label: 'What are your main goals?',
        type: 'textarea',
        required: true
      },
      {
        name: 'challenges',
        label: 'Current Challenges',
        type: 'textarea',
        required: true
      },
      {
        name: 'experience',
        label: 'Content Creation Experience',
        type: 'textarea',
        required: true
      }
    ]
  }
];