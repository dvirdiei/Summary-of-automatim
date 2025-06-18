import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings, BookOpen, Palette, HelpCircle } from 'lucide-react';

const NFAPage = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['definition', 'example']));

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
          className="w-full px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 mb-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center space-x-4 space-x-reverse">
              <Settings className="h-12 w-12" />
              <span>אוטומט סופי אי-דטרמיניסטי (NFA)</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              הרחבה עוצמתית למודל החישוב הבסיסי
            </p>
          </div>
        </div>

        {/* Main Concept */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 mb-8 border-r-4 border-purple-500 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
            ⚡ מהו אוטומט סופי אי-דטרמיניסטי?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            אוטומט סופי אי-דטרמיניסטי (NFA) הוא וריאציה של אוטומט סופי שבו, עבור מצב מסוים וסמל קלט נתון, ייתכן שיהיו <strong>אפס, אחד או יותר</strong> מעברים למצבים הבאים. בנוסף, אוטומט סופי אי-דטרמיניסטי יכול לכלול <strong>מעברי אפסילון (ε-מעברים)</strong>, המאפשרים מעבר בין מצבים ללא קריאת סמל קלט כלל.
          </p>
          <p className="text-gray-700 italic bg-white p-4 rounded-lg shadow-inner">
            בניגוד לאוטומט סופי דטרמיניסטי (DFA), שבו המסלול בכל שלב מוגדר באופן חד-משמעי, באוטומט סופי אי-דטרמיניסטי המכונה יכולה "לבחור" בין מספר מסלולים אפשריים או לעבור מצב באופן ספונטני (על ידי ε-מעבר). אם לפחות אחד מהמסלולים האפשריים מוביל למצב מקבל בסוף קריאת המילה, אזי המילה מתקבלת.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <SectionCard id="definition" title="📜 ההגדרה הפורמלית" icon={BookOpen}>
            <p className="text-gray-700 mb-4">
              באופן פורמלי, אוטומט סופי אי-דטרמיניסטי (NFA) מוגדר על ידי חמישייה A = (Q, Σ, δ, q₀, F):
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
                  <strong className="text-purple-700">δ: Q × (Σ ∪ {`{ε}`}) → 2<sup>Q</sup>:</strong> <strong>פונקציית המעברים</strong>. מחזירה <strong>קבוצה של מצבים</strong>!
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
            <div className="bg-yellow-100 border-r-4 border-yellow-500 p-4 rounded-lg mt-6">
              <p className="text-yellow-800 font-medium">
                <strong>שימו לב:</strong> בניגוד לאוטומט סופי דטרמיניסטי, פונקציית המעברים של אוטומט סופי אי-דטרמיניסטי מחזירה <strong>קבוצה של מצבים</strong>, ולא מצב יחיד.
              </p>
            </div>
          </SectionCard>

          <SectionCard id="example" title="🎨 דוגמה וייצוג" icon={Palette}>
            <p className="text-gray-700 mb-6">
              נדגים אוטומט סופי אי-דטרמיניסטי פשוט המקבל את כל המילים מעל האלפבית Σ={`{a,b}`} המכילות את התת-מילה "ab":
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">דיאגרמת מצבים של NFA</h3>
                <p className="text-center text-gray-600 mb-4">אוטומט המזהה את התת-מילה "ab"</p>
                
                <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
                  <svg viewBox="0 0 350 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrowheadNFA" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="black" />
                      </marker>
                    </defs>
                    
                    {/* States */}
                    <circle cx="50" cy="60" r="20" stroke="black" strokeWidth="2" fill="#e3f2fd"/>
                    <text x="50" y="60" fontSize="12" textAnchor="middle" dominantBaseline="middle">q₀</text>

                    <circle cx="175" cy="60" r="20" stroke="black" strokeWidth="2" fill="#e3f2fd"/>
                    <text x="175" y="60" fontSize="12" textAnchor="middle" dominantBaseline="middle">q₁</text>

                    <circle cx="300" cy="60" r="20" stroke="black" strokeWidth="2" fill="#c8e6c9"/>
                    <circle cx="300" cy="60" r="16" stroke="black" strokeWidth="1" fill="none"/>
                    <text x="300" y="60" fontSize="12" textAnchor="middle" dominantBaseline="middle">q₂</text>
                    
                    {/* Initial arrow */}
                    <line x1="10" y1="60" x2="30" y2="60" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowheadNFA)"/>

                    {/* Self loop q0 */}
                    <path d="M 50 40 C 20 20, 80 20, 50 40" stroke="black" fill="none" strokeWidth="1.5" markerEnd="url(#arrowheadNFA)"/>
                    <text x="50" y="15" fontSize="12" textAnchor="middle">a,b</text>

                    {/* q0 to q1 */}
                    <path d="M 70 60 L 155 60" stroke="black" fill="none" strokeWidth="1.5" markerEnd="url(#arrowheadNFA)"/>
                    <text x="112.5" y="50" fontSize="12" textAnchor="middle">a</text>

                    {/* q1 to q2 */}
                    <path d="M 195 60 L 280 60" stroke="black" fill="none" strokeWidth="1.5" markerEnd="url(#arrowheadNFA)"/>
                    <text x="237.5" y="50" fontSize="12" textAnchor="middle">b</text>

                    {/* Self loop q2 */}
                    <path d="M 300 40 C 270 20, 330 20, 300 40" stroke="black" fill="none" strokeWidth="1.5" markerEnd="url(#arrowheadNFA)"/>
                    <text x="300" y="15" fontSize="12" textAnchor="middle">a,b</text>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  <strong>מקרא:</strong> מצב התחלתי מסומן בחץ נכנס, מצב מקבל מסומן במעגל כפול.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4 text-center">טבלת מעברים</h3>
                <p className="text-center text-gray-600 mb-4">פונקציית מעברים שמחזירה קבוצת מצבים</p>
                
                <div className="bg-white rounded-lg shadow-inner p-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-600 text-white">
                        <th className="border border-gray-300 p-3 text-center">δ</th>
                        <th className="border border-gray-300 p-3 text-center">a</th>
                        <th className="border border-gray-300 p-3 text-center">b</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-bold">→ q₀</td>
                        <td className="border border-gray-300 p-3 text-center">{`{q₀, q₁}`}</td>
                        <td className="border border-gray-300 p-3 text-center">{`{q₀}`}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-bold">q₁</td>
                        <td className="border border-gray-300 p-3 text-center">∅</td>
                        <td className="border border-gray-300 p-3 text-center">{`{q₂}`}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-bold">* q₂</td>
                        <td className="border border-gray-300 p-3 text-center">{`{q₂}`}</td>
                        <td className="border border-gray-300 p-3 text-center">{`{q₂}`}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    <strong>מקרא:</strong> → מסמן מצב התחלתי, * מסמן מצב מקבל
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 border-r-4 border-cyan-500 mt-6">
              <h4 className="text-xl font-bold text-cyan-700 mb-4">הסבר לדוגמה:</h4>
              <p className="text-gray-800 mb-4">
                האוטומט הסופי האי-דטרמיניסטי המוצג לעיל מזהה מילים המכילות את התת-מילה "ab".
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-r-4 border-blue-400">
                  <strong className="text-blue-700">מצב q₀ (התחלתי):</strong> מייצג את המצב שבו עדיין לא זיהינו את תחילת התת-מילה "ab". כל אות שנקראת (a או b) תחזיר אותנו ל-q₀. עם זאת, אם נקרא 'a', יש גם אפשרות (אי-דטרמיניסטית) לעבור למצב q₁, ב"ציפייה" לאות 'b'.
                </div>
                <div className="bg-white p-4 rounded-lg border-r-4 border-green-400">
                  <strong className="text-green-700">מצב q₁:</strong> הגענו לכאן כשקראנו 'a' מ-q₀ ו"החלטנו" שזה אולי תחילת ה-"ab". אם כעת נקרא 'b', נעבור למצב המקבל q₂. אם נקרא 'a' שוב, זה אומר ש"הניחוש" שלנו היה שגוי, ואין מעבר חוקי מ-q₁ על 'a'.
                </div>
                <div className="bg-white p-4 rounded-lg border-r-4 border-purple-400">
                  <strong className="text-purple-700">מצב q₂ (מקבל):</strong> הגענו לכאן לאחר שזיהינו בהצלחה את התת-מילה "ab". כל אות שנקרא מעתה ואילך (a או b) תחזיר אותנו ל-q₂, מכיוון שהמילה כבר התקבלה.
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-400 mt-4">
                <h5 className="font-bold text-yellow-700 mb-2">דוגמה לעבודת האוטומט עבור המילה "baab":</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li>מתחילים ב-q₀. קוראים 'b', נשארים ב-q₀.</li>
                  <li>קוראים 'a' מ-q₀: יכולים להישאר ב-q₀ <strong>או</strong> לעבור ל-q₁.</li>
                  <li>אם היינו ב-q₀: קוראים 'a', נשארים ב-q₀ או עוברים ל-q₁.</li>
                  <li>אם היינו ב-q₁: קוראים 'a', אין מעבר, המסלול נחסם.</li>
                  <li>נמשיך במסלול שבו עברנו ל-q₁ בקריאת 'a' הראשונה: מ-q₁ קוראים 'b', ועוברים ל-q₂.</li>
                  <li>המילה "baab" מתקבלת, כי לפחות מסלול אחד הוביל למצב מקבל (q₂).</li>
                </ol>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="why-nfa" title="🤔 למה אוטומט סופי אי-דטרמיניסטי?" icon={HelpCircle}>
            <p className="text-gray-700 mb-6">
              למרות שאוטומטים סופיים אי-דטרמיניסטיים נראים מורכבים יותר מאוטומטים סופיים דטרמיניסטיים בגלל האי-דטרמיניזם ומעברי האפסילון, הם למעשה <strong>שווי כוח חישובי</strong> לאוטומטים סופיים דטרמיניסטיים. כלומר, לכל אוטומט סופי אי-דטרמיניסטי קיים אוטומט סופי דטרמיניסטי שקול שמקבל את אותה שפה, ולהפך. עם זאת, לאוטומטים סופיים אי-דטרמיניסטיים יש מספר יתרונות:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-green-700 mb-3 text-center">קלות בנייה</h4>
                <p className="text-gray-700 text-sm">
                  לעיתים קרובות קל ופשוט יותר לתכנן אוטומט סופי אי-דטרמיניסטי עבור שפה נתונה מאשר אוטומט סופי דטרמיניסטי. האי-דטרמיניזם מאפשר לנו לדחות הכרעות לגבי מעבר למצב הבא.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-blue-700 mb-3 text-center">קומפקטיות</h4>
                <p className="text-gray-700 text-sm">
                  אוטומט סופי אי-דטרמיניסטי יכול להיות קטן באופן משמעותי מאוטומט סופי דטרמיניסטי שקול. לפעמים אוטומט סופי דטרמיניסטי שקול דורש מספר מצבים אקספוננציאלי.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-purple-700 mb-3 text-center">התאמה לביטויים רגולריים</h4>
                <p className="text-gray-700 text-sm">
                  קיים קשר ישיר ואינטואיטיבי בין ביטויים רגולריים לאוטומטים סופיים אי-דטרמיניסטיים, מה שהופך אותם לכלי נוח להוכחות בתורת השפות הפורמליות.
                </p>
              </div>
            </div>

            <div className="bg-indigo-100 border-r-4 border-indigo-500 p-6 rounded-lg mt-6">
              <p className="text-indigo-800 font-medium">
                ההבנה של אוטומטים סופיים אי-דטרמיניסטיים היא קריטית בתורת החישוב, במיוחד כבסיס להוכחה שכל שפה רגולרית ניתנת לייצוג על ידי אוטומט סופי אי-דטרמיניסטי (ולכן גם אוטומט סופי דטרמיניסטי).
              </p>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 mt-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">🌟 סיכום</h3>
          <p className="text-lg leading-relaxed text-purple-100">
            סיכום זה מבוסס על עקרונות שהוצגו במצגת "אוטומטים ושפות פורמליות - הרצאה 3".
            הבנת אוטומטים סופיים אי-דטרמיניסטיים היא שלב חשוב בהבנת מודלי חישוב והמעבר בין ייצוגים שונים של שפות רגולריות.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFAPage;