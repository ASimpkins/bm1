import React from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { Metric } from '../../types/metric';
import { MetricCard } from './MetricCard';

const metrics: Metric[] = [
  {
    icon: TrendingUp,
    value: '500%',
    label: 'Average Growth',
    description: 'Revenue increase for our creators'
  },
  {
    icon: Users,
    value: '2M+',
    label: 'Total Reach',
    description: 'Combined audience growth'
  },
  {
    icon: DollarSign,
    value: '$10M+',
    label: 'Creator Earnings',
    description: 'Generated through our network'
  },
  {
    icon: Award,
    value: '150+',
    label: 'Success Stories',
    description: 'Transformed creator careers'
  }
];

export default function SuccessMetrics() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Driving Real Results
          </h2>
          <p className="text-xl text-gray-400">Our numbers speak for themselves</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}