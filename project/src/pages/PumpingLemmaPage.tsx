import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, Target, AlertTriangle, Play } from 'lucide-react';

const PumpingLemmaPage = () => {
  const [showPumping, setShowPumping] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showUnion, setShowUnion] = useState(false);

  const StepCard = ({ number, title, children, color = "blue" }: { 
    number: number; 
    title: string; 
    children: React.ReactNode;
    color?: string;
  }) => {
    const colorClasses = {
      blue: "border-blue-400 bg-blue-50",
      green: "border-green-400 bg-green-50", 
      purple: "border-purple-400 bg-purple-50",
      red: "border-red-400 bg-red-50"
    };

    const numberColors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500", 
      red: "bg-red-500"
    };

    return (
      <div className={`${colorClasses[color as keyof typeof colorClasses]} rounded-xl p-6 border-2 relative transition-all duration-300 hover:shadow-lg`}>
        <div className={`absolute top-4 right-4 w-8 h-8 ${numberColors[color as keyof typeof numberColors]} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
          {number}
        </div>
        <div className="pr-12">
          <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 mb-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center space-x-4 space-x-reverse">
              <Lightbulb className="h-12 w-12" />
              <span>הפרכה פורמלית - למת הנפוח</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              כלי עוצמתי להוכחה ששפה אינה רגולרית
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <StepCard number={1} title="הנחת היפך" color="red">
            <p className="text-gray-700 mb-3">
              <strong>נניח בדרך השלילה</strong> שהשפה L רגולרית.
            </p>
            <div className="bg-yellow-100 border-r-4 border-yellow-500 p-4 rounded-lg">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <span className="font-medium text-yellow-800">
                  זהו השלב הראשון בכל הוכחה בדרך השלילה - אנחנו מניחים את ההפך ממה שאנחנו רוצים להוכיח
                </span>
              </div>
            </div>
          </StepCard>

          {/* Step 2 */}
          <StepCard number={2} title="יישום למת הנפוח" color="blue">
            <p className="text-gray-700 mb-4">
              מכיוון ש-L רגולרית (לפי ההנחה), <strong>חייב</strong> להתקיים:
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-center text-lg mb-4">
              ∃p &gt; 0 : ∀w ∈ L, |w| ≥ p ⟹ ∃x,y,z : w = xyz
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-3">תנאי למת הנפוח:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span><strong className="text-red-600">|xy| ≤ p</strong> - החלקים x+y לא יעברו את אורך הנפוח</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span><strong className="text-green-600">|y| &gt; 0</strong> - החלק y לא ריק (חייב להיות משהו לנפח)</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span><strong className="text-purple-600">∀i ≥ 0 : xy<sup>i</sup>z ∈ L</strong> - כל נפיחה חוקית</span>
                </li>
              </ul>
            </div>
          </StepCard>

          {/* Step 3 */}
          <StepCard number={3} title="בחירת מילה אסטרטגית" color="green">
            <p className="text-gray-700 mb-4">נבחר מילה w ∈ L שתוביל לסתירה:</p>
            <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
              <p className="mb-4"><strong>דוגמה קלאסית:</strong> L = {`{a`}<sup>n</sup>b<sup>n</sup> | n ≥ 0{`}`}</p>
              <p className="mb-4">נבחר: <span className="bg-gray-100 px-2 py-1 rounded font-mono">w = a<sup>p</sup>b<sup>p</sup></span></p>
              
              <div className="text-center text-2xl font-mono py-4 bg-gray-50 rounded-lg mb-4">
                <span className="text-red-600 font-bold">a a a</span>
                <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded mx-2">a a</span>
                <span className="text-blue-600 font-bold">b b b b b</span>
              </div>
              
              <p className="text-center text-gray-600">
                <span className="text-red-600 font-bold">x</span> + 
                <span className="text-green-600 font-bold mx-2">y</span> + 
                <span className="text-blue-600 font-bold">z</span>
              </p>
            </div>
          </StepCard>

          {/* Step 4 */}
          <StepCard number={4} title="ניתוח הפירוק" color="purple">
            <p className="text-gray-700 mb-4">
              בגלל התנאי |xy| ≤ p, החלק y יכול להכיל רק תווי 'a':
            </p>
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <p className="mb-4">אם y = a<sup>k</sup> (כאשר k &gt; 0), אז:</p>
              <button 
                onClick={() => setShowPumping(!showPumping)}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 space-x-reverse"
              >
                <Play className="h-4 w-4" />
                <span>הראה נפיחה אינטראקטיבית</span>
              </button>
              
              {showPumping && (
                <div className="mt-6 bg-teal-50 p-6 rounded-lg border-2 border-teal-200 animate-fade-in">
                  <div className="space-y-3 text-center font-mono text-lg">
                    <div className="p-3 bg-white rounded border">
                      i = 0: <span className="text-red-600">x</span><span className="text-blue-600">z</span> = a<sup>p-k</sup>b<sup>p</sup> ❌
                    </div>
                    <div className="p-3 bg-white rounded border">
                      i = 1: <span className="text-red-600">x</span><span className="text-green-600">y</span><span className="text-blue-600">z</span> = a<sup>p</sup>b<sup>p</sup> ✅
                    </div>
                    <div className="p-3 bg-white rounded border">
                      i = 2: <span className="text-red-600">x</span><span className="text-green-600">yy</span><span className="text-blue-600">z</span> = a<sup>p+k</sup>b<sup>p</sup> ❌
                    </div>
                  </div>
                </div>
              )}
            </div>
          </StepCard>

          {/* Step 5 */}
          <StepCard number={5} title="קבלת הסתירה" color="red">
            <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-2 border-red-300 mb-4">
              <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center space-x-2 space-x-reverse">
                <AlertTriangle className="h-6 w-6" />
                <span>🚫 סתירה!</span>
              </h4>
              <p className="text-red-800 mb-2">
                מצאנו שקיים i (למשל i=2) כך ש-xy<sup>i</sup>z ∉ L
              </p>
              <p className="text-red-800">
                זה סותר את דרישת למת הנפוח שאומרת שכל הנפיחות חייבות להיות בשפה!
              </p>
            </div>
            <div className="bg-green-100 border-r-4 border-green-500 p-4 rounded-lg">
              <p className="text-green-800">
                <strong>מסקנה:</strong> ההנחה שהשפה רגולרית הייתה שגויה.<br/>
                <strong>לכן: השפה אינה רגולרית! 🎯</strong>
              </p>
            </div>
          </StepCard>
        </div>

        {/* Advanced Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-blue-800 flex items-center space-x-3 space-x-reverse">
              <Target className="h-8 w-8" />
              <span>מי בוחר מה? - חוקי המשחק של למת הנפוח</span>
            </h2>
          </div>
          
          <div className="bg-blue-100 border-r-4 border-blue-500 p-4 rounded-lg mb-6">
            <p className="text-blue-800 font-medium">
              <strong>זהו המפתח להבנת למת הנפוח!</strong> צריך לדעת מי שולט בכל פרמטר במשחק.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-700 text-center mb-4">
                🟢 הוכחת קיום הלמה
              </h3>
              <p className="text-center font-bold text-gray-700 mb-4">(כאשר השפה רגולרית)</p>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span><strong>n (קבוע הלמה):</strong></span>
                  <span className="text-green-600 font-bold">✅ אנחנו בוחרים</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>z (המילה):</strong></span>
                  <span className="text-red-600 font-bold">❌ חייב לעבוד לכל z</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>הפירוק xyz:</strong></span>
                  <span className="text-green-600 font-bold">✅ אנחנו בוחרים</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>i (כמות הנפיחה):</strong></span>
                  <span className="text-red-600 font-bold">❌ חייב לעבוד לכל i</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-700 text-center mb-4">
                🔴 הפרכת הלמה
              </h3>
              <p className="text-center font-bold text-gray-700 mb-4">(כאשר רוצים להוכיח שהשפה אינה רגולרית)</p>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span><strong>n (קבוע הלמה):</strong></span>
                  <span className="text-red-600 font-bold">❌ חייב לעבוד לכל n</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>z (המילה):</strong></span>
                  <span className="text-green-600 font-bold">✅ מספיק מילה אחת</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>הפירוק xyz:</strong></span>
                  <span className="text-red-600 font-bold">❌ חייב לא לעבוד לכל פירוק</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>i (כמות הנפיחה):</strong></span>
                  <span className="text-green-600 font-bold">✅ מספיק i אחד</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-orange-300 mt-6">
            <p className="text-orange-800 text-lg">
              <strong>🎮 זה בדיוק כמו משחק אסטרטגיה:</strong><br/>
              • <strong>בהוכחה:</strong> אתה שולט ביתרונות שלך (n, פירוק) וחייב להתמודד עם כל המקרים<br/>
              • <strong>בהפרכה:</strong> אתה מחפש את החולשה (z, i מתאים) בעוד היריב בוחר הגדרה
            </p>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <div className="bg-orange-100 border-r-4 border-orange-500 p-4 rounded-lg mb-6">
            <p className="text-orange-800 font-medium">
              <strong>זהירות:</strong> למת הנפוח היא תנאי הכרחי אבל לא מספיק לרגולריות!
            </p>
          </div>

          <p className="text-lg font-bold mb-4">דוגמה מתקדמת:</p>
          <div className="bg-white p-6 rounded-xl border border-orange-200 mb-6">
            <p className="mb-4"><strong>שפה L₁:</strong> {`{aⁱbʲcᵏ | i ≠ j או j ≠ k}`}</p>
            <p className="mb-4">שפה זו <strong>אינה רגולרית</strong> אבל מקיימת את למת הנפוח!</p>
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 space-x-reverse"
            >
              <Play className="h-4 w-4" />
              <span>הראה למה היא מקיימת את הלמה</span>
            </button>

            {showAdvanced && (
              <div className="mt-6 bg-red-50 p-6 rounded-lg border-2 border-red-200 animate-fade-in">
                <p className="font-bold mb-3">למה L₁ מקיימת את למת הנפוח:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>עבור מילה ארוכה w ∈ L₁, תמיד נוכל לנפח את החלק הראשון</li>
                  <li>הנפיחה תשמור על התכונה שלפחות אחד מהיחסים שונה</li>
                  <li>לכן כל נפיחה תישאר בשפה!</li>
                </ul>
              </div>
            )}
          </div>

          <p className="text-lg font-bold mb-4">אבל... הנה הטריק! 🎯</p>
          <div className="bg-white p-6 rounded-xl border border-red-200">
            <p className="mb-2"><strong>נגדיר:</strong> L₂ = {`{aⁱbⁱcⁱ | i ≥ 0}`} (שפה רגולרית? לא!)</p>
            <p className="mb-2"><strong>נבדוק:</strong> L₁ ∩ L₂ = ∅ (החיתוך ריק)</p>
            <p className="mb-4"><strong>אבל נוסיף:</strong> L₃ = L₁ ∪ {`{aⁿbⁿcⁿ | n ≥ 0}`}</p>
            
            <button 
              onClick={() => setShowUnion(!showUnion)}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 space-x-reverse mb-4"
            >
              <Play className="h-4 w-4" />
              <span>הראה את ההפרכה של האיחוד</span>
            </button>

            {showUnion && (
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200 animate-fade-in">
                <p className="font-bold mb-3">עכשיו L₃ ניתנת להפרכה!</p>
                <div className="text-center font-mono bg-white p-4 rounded mb-4">
                  <p>נבחר w = a<sup>p</sup>b<sup>p</sup>c<sup>p</sup> ∈ L₃</p>
                  <p>כל פירוק xyz עם |xy| ≤ p יביא לנפיחה שמוציאה מהשפה!</p>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-lg border-2 border-red-300">
                  <p className="text-red-800 font-bold">
                    המסקנה: L₃ אינה רגולרית, ומכיוון שהיא איחוד של L₁ עם שפה רגולרית, 
                    זה מוכיח ש-L₁ עצמה אינה רגולרית!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 border border-orange-300">
          <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center space-x-3 space-x-reverse">
            <AlertTriangle className="h-8 w-8" />
            <span>סיכום השלבים</span>
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-lg text-gray-800">
            <li><strong>הנח</strong> שהשפה רגולרית</li>
            <li><strong>קבל</strong> את קיום p מלמת הנפוח</li>
            <li><strong>בחר</strong> מילה חכמה שתוביל לבעיה</li>
            <li><strong>נתח</strong> את כל הפירוקים האפשריים</li>
            <li><strong>מצא</strong> נפיחה שמוציאה מהשפה = סתירה!</li>
          </ol>
          <div className="bg-green-100 border-r-4 border-green-500 p-4 rounded-lg mt-6">
            <p className="text-green-800 font-medium">
              <strong>💡 טיפ מתקדם:</strong> אם שפה מקיימת את למת הנפוח, נסה לאחד אותה עם שפה רגולרית ולהפריך את האיחוד!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpingLemmaPage;