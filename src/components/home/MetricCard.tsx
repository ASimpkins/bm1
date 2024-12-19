import React from 'react';
import { Metric } from '../../types/metric';

interface MetricCardProps {
  metric: Metric;
  index: number;
}

export function MetricCard({ metric, index }: MetricCardProps) {
  return (
    <div
      className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 group"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <metric.icon className="w-12 h-12 text-primary-500 mb-6 group-hover:animate-bounce-slow" />
      <h3 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
        {metric.value}
      </h3>
      <p className="text-xl font-semibold text-gray-300 mb-2">{metric.label}</p>
      <p className="text-gray-400">{metric.description}</p>
    </div>
  );
}