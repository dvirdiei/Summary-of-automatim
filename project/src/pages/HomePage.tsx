import React from 'react';
import { BookOpen, Lightbulb, Cpu } from 'lucide-react';
import TopicSection from '../components/TopicSection';
import { getTopicsByCategory } from '../data/topics';

const HomePage = () => {
  const mainTopics = getTopicsByCategory('main');
  const advancedTopics = getTopicsByCategory('advanced');
  const algorithmTopics = getTopicsByCategory('algorithms');
  const applicationTopics = getTopicsByCategory('applications');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              אוטומטים ושפות פורמליות
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              מדריך מקיף וחכם לתורת האוטומטים, עם הסברים ברורים, דוגמאות אינטראקטיביות ודיאגרמות מתקדמות
            </p>
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/30">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">{mainTopics.length + advancedTopics.length + algorithmTopics.length + applicationTopics.length} נושאים מקיפים</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TopicSection
          title="נושאים יסודיים"
          description="המושגים הבסיסיים והחשובים ביותר בתורת האוטומטים"
          topics={mainTopics}
          icon="🎯"
        />

        <TopicSection
          title="נושאים מתקדמים"
          description="מודלים חישוביים מורכבים ותורת השפות הפורמליות"
          topics={advancedTopics}
          icon="🚀"
        />

        <TopicSection
          title="אלגוריתמים"
          description="אלגוריתמים חשובים לעיבוד ומניפולציה של אוטומטים"
          topics={algorithmTopics}
          icon="⚡"
        />

        <TopicSection
          title="יישומים מעשיים"
          description="שימושים של תורת האוטומטים בעולם האמיתי"
          topics={applicationTopics}
          icon="🛠️"
        />
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              למה ללמוד כאן?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">הסברים ברורים</h3>
              <p className="text-gray-600">
                כל מושג מוסבר בצורה פשוטה וברורה, עם דוגמאות מעשיות
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">דוגמאות אינטראקטיביות</h3>
              <p className="text-gray-600">
                כלים אינטראקטיביים שמאפשרים להבין את החומר בפועל
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">עיצוב מתקדם</h3>
              <p className="text-gray-600">
                ממשק משתמש מודרני ונוח לעין, המותאם למכשירים ניידים
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;