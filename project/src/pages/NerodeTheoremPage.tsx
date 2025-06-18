import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Target, AlertTriangle, Lightbulb } from 'lucide-react';

const NerodeTheoremPage = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['definition', 'proof-regular']));

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
          className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 mb-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center space-x-4 space-x-reverse">
              <Target className="h-12 w-12" />
              <span>משפט נרוד</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              המדריך המלא לאפיון אלגברי של שפות רגולריות
            </p>
          </div>
        </div>

        {/* Theorem Summary */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-8 border-r-4 border-pink-500 shadow-lg">
          <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">
            ⚡ משפט נרוד - תמצית הרעיון
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            <strong>שפה L היא רגולרית אם ורק אם</strong> מספר מחלקות השקילות של יחס R<sub>L</sub> הוא סופי.
          </p>
          <div className="bg-white p-4 rounded-lg font-mono text-center text-lg border shadow-inner">
            L רגולרית ⇔ index(R<sub>L</sub>) &lt; ∞
          </div>
          <p className="text-gray-700 mt-4 italic text-center">
            יחס R<sub>L</sub> מוגדר כך: שתי מילים x ו-y הן שקולות אם לכל סיומת (סייפא) z, 
            שתי המילים החדשות xz ו-yz שתיהן בשפה L או שתיהן מחוץ לשפה L.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <SectionCard id="proof-regular" title="🏗️ הוכחה ששפה היא רגולרית" icon={BookOpen}>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 mb-6 border-r-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center space-x-2 space-x-reverse">
                <Target className="h-5 w-5" />
                <span>האסטרטגיה</span>
              </h3>
              <p className="text-gray-800">
                כדי להוכיח ששפה L היא רגולרית באמצעות משפט נרוד, עלינו להראות שיחס R<sub>L</sub> מחלק את כל המילים האפשריות (Σ*) למספר <strong>סופי</strong> של קבוצות (מחלקות שקילות). אם נצליח, השפה רגולרית.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-green-700 mb-3">דוגמה: L = {`{a, aa, aaa}`}</h4>
                <p className="text-gray-700 mb-4">
                  <strong>ניתוח:</strong> זוהי שפה סופית. נחלק את כל המילים בעולם לקבוצות לפי "העתיד" שלהן ביחס לשפה:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li><strong>קבוצה 1: {`{ε}`}</strong> - אם נוסיף לה 'a', נגיע למילה בשפה.</li>
                  <li><strong>קבוצה 2: {`{a}`}</strong> - המילה עצמה בשפה. אם נוסיף 'a', נגיע ל-'aa' שגם בשפה.</li>
                  <li><strong>קבוצה 3: {`{aa}`}</strong> - המילה עצמה בשפה. אם נוסיף 'a', נגיע ל-'aaa' שגם בשפה.</li>
                  <li><strong>קבוצה 4: {`{aaa}`}</strong> - המילה עצמה בשפה. כל תוספת תוציא אותנו מהשפה.</li>
                  <li><strong>קבוצה 5: כל שאר המילים</strong> - כל מילה שכבר לא יכולה להגיע למילה בשפה.</li>
                </ul>
                <div className="bg-white p-3 rounded-lg font-mono text-center mt-4 border">
                  index(R<sub>L</sub>) = 5 &lt; ∞ ⟹ רגולרית!
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-blue-700 mb-3">דוגמה: L = {`{x | אורך x זוגי}`}</h4>
                <p className="text-gray-700 mb-4">
                  <strong>ניתוח:</strong> כאן, "העתיד" של מילה תלוי רק בזוגיות אורכה. כל מה שחשוב לזכור הוא האם עד כה ראינו מספר זוגי או אי-זוגי של אותיות.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li><strong>קבוצה 1: מילים באורך זוגי</strong> - מילים אלו נמצאות בשפה.</li>
                  <li><strong>קבוצה 2: מילים באורך אי-זוגי</strong> - מילים אלו אינן בשפה.</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  לא משנה כמה ארוכה המילה, היא תמיד תיפול לאחת משתי הקבוצות האלו.
                </p>
                <div className="bg-white p-3 rounded-lg font-mono text-center mt-4 border">
                  index(R<sub>L</sub>) = 2 &lt; ∞ ⟹ רגולרית!
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="proof-non-regular" title="🚫 הפרכת רגולריות של שפה" icon={AlertTriangle}>
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-6 mb-6 border-r-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center space-x-2 space-x-reverse">
                <AlertTriangle className="h-5 w-5" />
                <span>שיטת ההפרכה</span>
              </h3>
              <p className="text-gray-800 mb-4">
                כדי להוכיח ששפה <strong>אינה</strong> רגולרית, עלינו להראות שיש לה מספר <strong>אינסופי</strong> של מחלקות שקילות. נעשה זאת בשלבים:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-r-4 border-blue-400 relative pl-12">
                  <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <h4 className="font-bold text-gray-800 mb-2">מציאת משפחה אינסופית</h4>
                  <p className="text-gray-700 text-sm">
                    נמצא קבוצה אינסופית של מילים, למשל {`{w₁, w₂, w₃, ...}`}, שאנו חושדים שכל אחת מהן מתנהגת אחרת.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-r-4 border-green-400 relative pl-12">
                  <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <h4 className="font-bold text-gray-800 mb-2">הוכחת הפרדה</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    נוכיח שעבור <strong>כל זוג</strong> מילים שונות מהקבוצה, w<sub>i</sub> ו-w<sub>j</sub>, קיימת סיומת 'z' (נקראת "סייפא מפרידה") כך שהוספתה למילים תוביל לתוצאה שונה:
                  </p>
                  <div className="bg-gray-100 p-2 rounded font-mono text-center text-sm">
                    w<sub>i</sub>z ∈ L   אבל   w<sub>j</sub>z ∉ L
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-r-4 border-purple-400 relative pl-12">
                  <div className="absolute top-4 right-4 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <h4 className="font-bold text-gray-800 mb-2">מסקנה</h4>
                  <p className="text-gray-700 text-sm">
                    אם כל מילה במשפחה האינסופית ניתנת להפרדה מכל מילה אחרת, אז כל אחת מהן חייבת להיות במחלקת שקילות נפרדת. מכאן שיש אינסוף מחלקות, והשפה אינה רגולרית!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-red-700 mb-3">דוגמה: L = {`{aⁿbⁿ | n ≥ 0}`}</h4>
                <p className="text-gray-700 mb-4 text-sm">
                  שפה זו דורשת "לזכור" את מספר ה-a-ים כדי להתאים לו מספר זהה של b-ים. זהו רמז לאי-רגולריות.
                </p>
                <div className="space-y-3">
                  <p className="text-sm"><strong>משפחה אינסופית:</strong> S = {`{a⁰, a¹, a², a³, ...}`}</p>
                  <p className="text-sm"><strong>הפרדה:</strong> ניקח x = a<sup>i</sup> ו-y = a<sup>j</sup> (כאשר i ≠ j). נבחר סייפא מפרידה z = b<sup>i</sup>.</p>
                  <ul className="list-disc list-inside text-xs space-y-1 text-gray-600">
                    <li><strong>בדיקה עבור x:</strong> xz = a<sup>i</sup>b<sup>i</sup>. מילה זו שייכת ל-L. ✓</li>
                    <li><strong>בדיקה עבור y:</strong> yz = a<sup>j</sup>b<sup>i</sup>. מכיוון ש-j ≠ i, מילה זו אינה שייכת ל-L. ✗</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg font-mono text-center mt-4 border">
                  index(R<sub>L</sub>) = ∞ ⟹ לא רגולרית!
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-red-700 mb-3">דוגמה: L = {`{x | #ₐ(x) = #ᵦ(x)}`}</h4>
                <p className="text-gray-700 mb-4 text-sm">
                  שפה זו דורשת "מונה" שיכול לגדול ללא הגבלה.
                </p>
                <div className="space-y-3">
                  <p className="text-sm"><strong>משפחה אינסופית:</strong> S = {`{a⁰, a¹, a², a³, ...}`}</p>
                  <p className="text-sm"><strong>הפרדה:</strong> ניקח x = a<sup>i</sup> ו-y = a<sup>j</sup> (כאשר i ≠ j). נבחר סייפא z = b<sup>i</sup>.</p>
                  <ul className="list-disc list-inside text-xs space-y-1 text-gray-600">
                    <li><strong>בדיקה עבור x:</strong> xz = a<sup>i</sup>b<sup>i</sup>. כאן #<sub>a</sub>(xz) = #<sub>b</sub>(xz), ולכן המילה שייכת ל-L. ✓</li>
                    <li><strong>בדיקה עבור y:</strong> yz = a<sup>j</sup>b<sup>i</sup>. כאן #<sub>a</sub>(yz) ≠ #<sub>b</sub>(yz), ולכן המילה אינה שייכת ל-L. ✗</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg font-mono text-center mt-4 border">
                  index(R<sub>L</sub>) = ∞ ⟹ לא רגולרית!
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="tips" title="💡 טיפים וטריקים" icon={Lightbulb}>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 border-r-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center space-x-2 space-x-reverse">
                  <Target className="h-5 w-5" />
                  <span>איך למצוא משפחה מפרידה?</span>
                </h3>
                <p className="text-gray-800 mb-4">
                  חפשו את "נקודת התורפה" של השפה – מה היא דורשת "לזכור" באופן אינסופי?
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>ספירה והשוואה:</strong> כמו ב-a<sup>n</sup>b<sup>n</sup>, השפה דורשת לספור a-ים ולהשוות ל-b-ים. קחו את a<sup>n</sup> כמשפחה מפרידה.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>מבנים מתמטיים:</strong> בשפות כמו a<sup>n²</sup>, השפה דורשת לבדוק תכונה מתמטית. קחו את a<sup>n²</sup> כמשפחה מפרידה.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>שכפול:</strong> בשפות כמו ww, השפה דורשת לזכור חצי מילה שלם. קחו משפחה כמו a<sup>n</sup>b והפרידו עם a<sup>n</sup>b.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>הרעיון המרכזי:</strong> בנו את המשפחה המפרידה מהחלק במילה שצריך "לזכור" (החלק הגדל באופן לא מוגבל).
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6 border-r-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center space-x-2 space-x-reverse">
                  <AlertTriangle className="h-5 w-5" />
                  <span>טעויות נפוצות</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>בחירת סייפא לא נכונה:</strong> ודאו שהסייפא המפרידה z באמת עובדת <strong>לכל</strong> זוג i ≠ j, ולא רק למקרה פרטי.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>בחירת משפחה סופית:</strong> השיטה עובדת רק אם אתם מראים קיום של <strong>אינסוף</strong> מחלקות.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>שכחה להראות הפרדה לכיוונים:</strong> חשוב להראות שמילה אחת נכנסת לשפה (∈ L) והשנייה נשארת בחוץ (∉ L).
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl p-8 mt-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">🌟 מידע נוסף ומשאבים</h3>
          <p className="text-lg leading-relaxed text-blue-100">
            סיכום זה מבוסס על עקרונות שהוצגו במצגת "אוטומטים ושפות פורמליות - הרצאה 8: אפיון אלגברי של השפות הרגולריות". 
            המצגת מספקת הסברים מתמטיים מפורטים, הוכחות מלאות ודוגמאות נוספות שיעזרו לך להעמיק את הבנתך. 
            זכור, תרגול הוא המפתח לשליטה בחומר!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NerodeTheoremPage;