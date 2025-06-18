import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Topic } from '../data/topics';

interface TopicCardProps {
  topic: Topic;
  index?: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, index = 0 }) => {
  const getDifficultyColor = (difficulty: Topic['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyText = (difficulty: Topic['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'מתחילים';
      case 'intermediate': return 'בינוני';
      case 'advanced': return 'מתקדם';
      default: return '';
    }
  };

  return (
    <Link
      to={topic.path}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`${topic.bgColor} rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-100 relative overflow-hidden`}>
        {/* Difficulty Badge */}
        <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
          {getDifficultyText(topic.difficulty)}
        </div>

        <div className="flex items-start space-x-4 space-x-reverse mb-6 mt-6">
          <div className={`p-4 rounded-xl bg-gradient-to-r ${topic.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            <span className="text-2xl">{topic.icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {topic.title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {topic.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center space-x-2 space-x-reverse text-sm font-medium bg-gradient-to-r ${topic.color} bg-clip-text text-transparent`}>
            <span>למד עכשיו</span>
            <ArrowLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;