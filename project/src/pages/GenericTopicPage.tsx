import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getTopicById } from '../data/topics';

const GenericTopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? getTopicById(topicId) : null;

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`bg-gradient-to-r ${topic.color} rounded-3xl p-8 mb-8 shadow-2xl`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center space-x-4 space-x-reverse">
              <span className="text-5xl">{topic.icon}</span>
              <span>{topic.title}</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {topic.description}
            </p>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-12 text-center shadow-lg">
          <div className="text-6xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">בקרוב!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            התוכן עבור נושא זה נמצא בפיתוח. בינתיים, תוכלו לחזור לדף הבית ולבחור נושא אחר.
          </p>
          <a
            href="/"
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${topic.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
          >
            חזרה לדף הבית
          </a>
        </div>

        {/* Topic Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2">רמת קושי</h3>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              topic.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
              topic.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {topic.difficulty === 'beginner' ? 'מתחילים' :
               topic.difficulty === 'intermediate' ? 'בינוני' : 'מתקדם'}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2">קטגוריה</h3>
            <div className="text-gray-600">
              {topic.category === 'main' ? 'נושאים יסודיים' :
               topic.category === 'advanced' ? 'נושאים מתקדמים' :
               topic.category === 'algorithms' ? 'אלגוריתמים' : 'יישומים מעשיים'}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2">סטטוס</h3>
            <div className="text-orange-600 font-medium">בפיתוח</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericTopicPage;