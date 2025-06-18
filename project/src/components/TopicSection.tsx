import React from 'react';
import TopicCard from './TopicCard';
import { Topic } from '../data/topics';

interface TopicSectionProps {
  title: string;
  description: string;
  topics: Topic[];
  icon: string;
}

const TopicSection: React.FC<TopicSectionProps> = ({ title, description, topics, icon }) => {
  if (topics.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
          <span className="text-4xl">{icon}</span>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <TopicCard key={topic.id} topic={topic} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TopicSection;