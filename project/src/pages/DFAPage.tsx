import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cpu, BookOpen, Palette, Database } from 'lucide-react';

const DFAPage = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['definition', 'representation']));

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
          className="w-full px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 text-white flex items-center justify-between hover:from-green-700 hover:to-blue-700 transition-all duration-300"
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 mb-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center space-x-4 space-x-reverse">
              <Cpu className="h-12 w-12" />
              <span>אוטומט סופי דטרמיניסטי (DFA)</span>
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              היסודות של מודלי חישוב והשפות שהם מזהים
            </p>
          </div>
        </div>

        {/* Main Concept */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 mb-8 border-r-4 border-green-500 shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            ⚡ מהו אוטומט סופי דטרמיניסטי?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            אוטומט סופי הוא <strong>מודל חישוב מופשט</strong> שפועל כמו מכונה פשוטה. הוא קורא סדרת סמלים (מילת קלט) מההתחלה ועד הסוף, אות אחר אות, ובכל שלב משנה את מצבו בהתאם לחוקים קבועים מראש. בסוף התהליך, אם המכונה נמצאת ב"מצב מקבל", המילה מתקבלת. אחרת, היא נדחית.
          </p>
          <p className="text-gray-700 italic text-center bg-white p-4 rounded-lg shadow-inner">
            חשבו על זה כמו משחק לוח: אתם מתחילים במשבצת ההתחלה, וכל קלף שאתם שולפים (אות מהקלט) אומר לכם לאיזו משבצת לעבור. אם סיימתם את הקלפים במשבצת מסומנת כ"סיום מוצלח" – ניצחתם!
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <SectionCard id="definition" title="📜 ההגדרה הפורמלית" icon={BookOpen}>
            <p className="text-gray-700 mb-4">
              באופן פורמלי, אוטומט סופי דטרמיניסטי (DFA) מוגדר על ידי חמישייה A = (Q, Σ, δ, q₀, F):
            </p>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-xl text-center mb-6">
              A = (Q, Σ, δ, q₀, F)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
                  <strong className="text-blue-700">Q:</strong> קבוצה <strong>סופית</strong> של מצבים.
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-400">
                  <strong className="text-green-700">Σ:</strong> קבוצת סמלי קלט סופית (ה<strong>אלפבית</strong>).
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-400">
                  <strong className="text-purple-700">δ: Q × Σ → Q:</strong> <strong>פונקציית המעברים</strong>, ה"מוח\" של האוטומט.
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border-r-4 border-orange-400">
                  <strong className="text-orange-700">q₀ ∈ Q:</strong> <strong>המצב ההתחלתי</strong>, נקודת הפתיחה.
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-400">
                  <strong className="text-red-700">F ⊆ Q:</strong> קבוצת ה<strong>מצבים המקבלים</strong>.
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="representation" title="🎨 דרכי ייצוג" icon={Palette}>
            <p className="text-gray-700 mb-6">
              ניתן לייצג את אותו אוטומט בשתי דרכים ויזואליות עיקריות. ניקח לדוגמה אוטומט המקבל כל מילה המסתיימת באות 'c', מעל האלפבית Σ={`{a,b,c}`}.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">דיאגרמת מצבים</h3>
                <p className="text-center text-gray-600 mb-4">ייצוג גרפי אינטואיטיבי</p>
                
                <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
                  <svg viewBox="0 0 300 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="black" />
                      </marker>
                    </defs>
                    
                    {/* States */}
                    <circle cx="60" cy="60" r="25" stroke="black" strokeWidth="2" fill="#e3f2fd"/>
                    <text x="60" y="60" fontSize="12" textAnchor="middle" dominantBaseline="middle">q₀</text>
                    
                    <circle cx="220" cy="60" r="25" stroke="black" strokeWidth="2" fill="#c8e6c9"/>
                    <circle cx="220" cy="60" r="20" stroke="black" strokeWidth="1" fill="none"/>
                    <text x="220" y="60" fontSize="12" textAnchor="middle" dominantBaseline="middle">q₁</text>

                    {/* Initial arrow */}
                    <line x1="15" y1="60" x2="35" y2="60" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Transitions */}
                    <path d="M 85 60 C 125 35, 175 35, 195 60" stroke="black" fill="none" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    <text x="140" y="40" fontSize="12" textAnchor="middle">c</text>

                    <path d="M 195 60 C 175 85, 125 85, 85 60" stroke="black" fill="none" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    <text x="140" y="95" fontSize="12" textAnchor="middle">a, b</text>

                    <path d="M 50 35 C 25 15, 95 15, 70 35" stroke="black" fill="none" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    <text x="60" y="12" fontSize="12" textAnchor="middle">a, b</text>

                    <path d="M 230 35 C 255 15, 185 15, 210 35" stroke="black" fill="none" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    <text x="220" y="12" fontSize="12" textAnchor="middle">c</text>
                  </svg>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4 text-center">טבלת מעברים</h3>
                <p className="text-center text-gray-600 mb-4">ייצוג מדויק ונוח למימוש</p>
                
                <div className="bg-white rounded-lg shadow-inner p-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="border border-gray-300 p-3 text-center">δ</th>
                        <th className="border border-gray-300 p-3 text-center">a</th>
                        <th className="border border-gray-300 p-3 text-center">b</th>
                        <th className="border border-gray-300 p-3 text-center">c</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-bold">→ q₀</td>
                        <td className="border border-gray-300 p-3 text-center">q₀</td>
                        <td className="border border-gray-300 p-3 text-center">q₀</td>
                        <td className="border border-gray-300 p-3 text-center">q₁</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-bold">* q₁</td>
                        <td className="border border-gray-300 p-3 text-center">q₀</td>
                        <td className="border border-gray-300 p-3 text-center">q₀</td>
                        <td className="border border-gray-300 p-3 text-center">q₁</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    <strong>מקרא:</strong> → מסמן מצב התחלתי, * מסמן מצב מקבל
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="language" title="📚 השפה של אוטומט" icon={Database}>
            <p className="text-gray-700 mb-4">
              השפה שמתקבלת על ידי אוטומט A, המסומנת כ-<strong>L(A)</strong>, היא פשוט <strong>קבוצת כל המילים שהאוטומט מקבל</strong>. כלומר, כל המילים שכאשר קוראים אותן מההתחלה ועד הסוף, האוטומט מסיים באחד מהמצבים המקבלים.
            </p>
            
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-center text-lg mb-6">
              L(A) = {`{ w ∈ Σ* | δ̂(q₀, w) ∈ F }`}
            </div>
            
            <p className="text-gray-700 mb-6">
              כאשר δ̂ היא פונקציית המעברים המורחבת, שיודעת לקבל מילים שלמות ולא רק אותיות בודדות.
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-r-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-700 mb-4">דוגמה: אוטומט למילים באורך זוגי</h4>
              <p className="text-gray-700 mb-4">
                נבנה אוטומט פשוט מעל Σ={`{a,b}`} שמקבל רק מילים שאורכן זוגי (כולל המילה הריקה).
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-inner">
                  <svg viewBox="0 0 300 100" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrowhead2" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="black" />
                      </marker>
                    </defs>
                    
                    <circle cx="60" cy="50" r="28" stroke="black" strokeWidth="2" fill="#c8e6c9"/>
                    <circle cx="60" cy="50" r="23" stroke="black" strokeWidth="1" fill="none"/>
                    <text x="60" y="50" fontSize="10" textAnchor="middle" dominantBaseline="middle">q_even</text>
                    
                    <circle cx="220" cy="50" r="28" stroke="black" strokeWidth="2" fill="#e3f2fd"/>
                    <text x="220" y="50" fontSize="10" textAnchor="middle" dominantBaseline="middle">q_odd</text>

                    <line x1="15" y1="50" x2="32" y2="50" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead2)"/>

                    <path d="M 88 50 C 125 25, 175 25, 192 50" stroke="black" fill="none" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
                    <text x="140" y="30" fontSize="12" textAnchor="middle">a, b</text>
                    
                    <path d="M 192 50 C 175 75, 125 75, 88 50" stroke="black" fill="none" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
                    <text x="140" y="80" fontSize="12" textAnchor="middle">a, b</text>
                  </svg>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border-r-4 border-green-400">
                    <strong>מצב התחלתי (q_even):</strong> הוא גם מקבל, כי המילה הריקה (אורך 0) היא באורך זוגי.
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-r-4 border-blue-400">
                    <strong>מעבר ראשון:</strong> קריאת אות אחת (למשל 'a') מעבירה למצב האי-זוגי (q_odd).
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border-r-4 border-purple-400">
                    <strong>מעבר שני:</strong> קריאת אות נוספת ('aa') מחזירה למצב הזוגי והמקבל.
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border-r-4 border-orange-400">
                    <strong>השפה L(A) היא:</strong> {`{ε, aa, ab, ba, bb, aaaa, ...}`}
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-green-800 to-blue-800 rounded-2xl p-8 mt-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">🌟 סיכום</h3>
          <p className="text-lg leading-relaxed text-green-100">
            סיכום זה מבוסס על עקרונות שהוצגו במצגת "אוטומטים ושפות פורמליות - הרצאה 2".
            הבנת אוטומטים סופיים דטרמיניסטיים היא אבן היסוד להבנת מודלי חישוב מורכבים יותר 
            ותורת השפות הפורמליות כולה.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DFAPage;