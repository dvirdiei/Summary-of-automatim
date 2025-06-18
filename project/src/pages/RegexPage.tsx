import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Code, Lightbulb } from 'lucide-react';

const RegexPage = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['definition', 'examples']));

  const toggleSection = (sectionId: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  const SectionCard = ({ id, title, icon: Icon, children }: { 
    id: string; 
    title: string; 
    icon: React.ComponentType<any>; 
    children: React.ReactNode 
  }) => {
    const isOpen = openSections.has(id);
    
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-8 py-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white flex items-center justify-between hover:from-pink-700 hover:to-rose-700 transition-all duration-300"
        >
          <div className="flex items-center space-x-4 space-x-reverse">
            <Icon className="h-6 w-6" />
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </button>
        
        {isOpen && (
          <div className="p-8 animate-fade-in">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-8 mb-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center space-x-4 space-x-reverse">
              <Search className="h-12 w-12" />
              <span>ביטויים רגולריים</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              שפה פורמלית לתיאור דפוסים במחרוזות
            </p>
          </div>
        </div>

        {/* Main Concept */}
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 mb-8 border-r-4 border-pink-500 shadow-lg">
          <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">
            ⚡ מהם ביטויים רגולריים?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            ביטוי רגולרי הוא <strong>שפה פורמלית</strong> המתארת קבוצת מחרוזות באמצעות תבנית (pattern). הוא מאפשר לנו לחפש, להתאים ולתפעל טקסט בצורה חזקה וגמישה.
          </p>
          <p className="text-gray-700 italic text-center bg-white p-4 rounded-lg shadow-inner">
            חשבו על זה כמו "מתכון" לבניית מחרוזות: הביטוי הרגולרי מגדיר את הכללים, והמחרוזות שמתאימות לכללים הן השפה שהוא מתאר.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <SectionCard id="definition" title="📜 הגדרה פורמלית" icon={Code}>
            <p className="text-gray-700 mb-4">
              ביטוי רגולרי מוגדר באופן רקורסיבי:
            </p>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-lg mb-6">
              <div className="space-y-2">
                <div>∅ - הקבוצה הריקה</div>
                <div>ε - המחרוזת הריקה</div>
                <div>a - סמל בודד (a ∈ Σ)</div>
                <div>(r₁ + r₂) - איחוד</div>
                <div>(r₁ · r₂) - שרשור</div>
                <div>r* - כוכב קליני</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
                <strong className="text-blue-700">∅:</strong> הביטוי שלא מתאר אף מחרוזת
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-400">
                <strong className="text-green-700">ε:</strong> הביטוי שמתאר רק את המחרוזת הריקה
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-400">
                <strong className="text-purple-700">a:</strong> הביטוי שמתאר רק את המחרוזת "a"
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-r-4 border-orange-400">
                <strong className="text-orange-700">r*:</strong> אפס או יותר חזרות של r
              </div>
            </div>
          </SectionCard>

          <SectionCard id="examples" title="🎯 דוגמאות מעשיות" icon={Lightbulb}>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-4">דוגמאות בסיסיות</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="font-mono text-lg mb-2 text-blue-600">a*</div>
                    <div className="text-gray-700">מתאר: ε, a, aa, aaa, aaaa, ...</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="font-mono text-lg mb-2 text-blue-600">(a+b)*</div>
                    <div className="text-gray-700">מתאר: כל מחרוזת מעל האלפבית {`{a,b}`}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="font-mono text-lg mb-2 text-blue-600">a*b*</div>
                    <div className="text-gray-700">מתאר: מחרוזות שמתחילות באפס או יותר a-ים ומסתיימות באפס או יותר b-ים</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">דוגמאות מתקדמות</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="font-mono text-lg mb-2 text-green-600">(a+b)*abb</div>
                    <div className="text-gray-700">מתאר: כל מחרוזת המסתיימת ב-"abb"</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="font-mono text-lg mb-2 text-green-600">a(a+b)*a</div>
                    <div className="text-gray-700">מתאר: מחרוזות שמתחילות ומסתיימות ב-'a' (באורך לפחות 2)</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="font-mono text-lg mb-2 text-green-600">(aa+bb)*</div>
                    <div className="text-gray-700">מתאר: מחרוזות המורכבות מזוגות של אותיות זהות</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="operations" title="⚙️ פעולות על ביטויים רגולריים" icon={Code}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">פעולות בסיסיות</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
                    <strong className="text-blue-700">איחוד (+):</strong> r₁ + r₂ מתאר מחרוזות שמתאימות ל-r₁ או ל-r₂
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-400">
                    <strong className="text-green-700">שרשור (·):</strong> r₁ · r₂ מתאר מחרוזות שהן שרשור של מחרוזת מ-r₁ ומחרוזת מ-r₂
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-400">
                    <strong className="text-purple-700">כוכב קליני (*):</strong> r* מתאר אפס או יותר חזרות של r
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">חוקי זהות</h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="space-y-1">
                    <div>r + ∅ = r</div>
                    <div>r · ε = r</div>
                    <div>r · ∅ = ∅</div>
                    <div>r* = (r + ε)*</div>
                    <div>(r*)* = r*</div>
                    <div>∅* = ε</div>
                    <div>ε* = ε</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-pink-800 to-rose-800 rounded-2xl p-8 mt-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">🌟 סיכום</h3>
          <p className="text-lg leading-relaxed text-pink-100">
            ביטויים רגולריים הם כלי עוצמתי לתיאור דפוסים במחרוזות. הם מהווים את הבסיס לכלים רבים בעיבוד טקסט, 
            קומפיילרים, ומנועי חיפוש. הבנת הקשר בינם לבין אוטומטים סופיים חיונית להבנת תורת השפות הפורמליות.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegexPage;