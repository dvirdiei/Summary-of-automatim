export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  path: string;
  category: 'main' | 'advanced' | 'algorithms' | 'applications';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const topics: Topic[] = [
  // נושאים ראשיים
  {
    id: 'nerode',
    title: 'משפט נרוד',
    description: 'כלי אלגברי חזק המאפיין שפות רגולריות באמצעות יחסי שקילות, ומשמש להוכחה או הפרכה של רגולריות.',
    icon: '🎯',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    path: '/nerode',
    category: 'main',
    difficulty: 'intermediate'
  },
  {
    id: 'pumping',
    title: 'למת הניפוח',
    description: 'משפט מרכזי המאפשר להוכיח ששפה אינה רגולרית, על ידי הדגמת תכונת "הניפוח" שקיימת בכל שפה רגולרית.',
    icon: '💡',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-orange-50',
    path: '/pumping',
    category: 'main',
    difficulty: 'intermediate'
  },
  {
    id: 'dfa',
    title: 'אוטומט סופי דטרמיניסטי',
    description: 'מודל חישוב בסיסי המהווה את אבן הפינה בתורת האוטומטים והשפות הפורמליות.',
    icon: '🤖',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    path: '/dfa',
    category: 'main',
    difficulty: 'beginner'
  },
  {
    id: 'nfa',
    title: 'אוטומט סופי אי-דטרמיניסטי',
    description: 'הרחבה עוצמתית של אוטומט דטרמיניסטי המאפשרת אי-דטרמיניזם ומעברי אפסילון.',
    icon: '⚙️',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    path: '/nfa',
    category: 'main',
    difficulty: 'intermediate'
  },
  
  // נושאים מתקדמים
  {
    id: 'regex',
    title: 'ביטויים רגולריים',
    description: 'שפה פורמלית לתיאור דפוסים במחרוזות, עם קשר ישיר לאוטומטים סופיים.',
    icon: '🔤',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    path: '/regex',
    category: 'main',
    difficulty: 'beginner'
  },
  {
    id: 'cfg',
    title: 'דקדוק חופשי הקשר',
    description: 'מודל דקדוקי עוצמתי יותר מביטויים רגולריים, המתאר שפות חופשיות הקשר.',
    icon: '📝',
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
    path: '/cfg',
    category: 'advanced',
    difficulty: 'intermediate'
  },
  {
    id: 'pda',
    title: 'אוטומט מחסנית',
    description: 'אוטומט עם זיכרון מחסנית המזהה שפות חופשיות הקשר.',
    icon: '📚',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    path: '/pda',
    category: 'advanced',
    difficulty: 'advanced'
  },
  {
    id: 'turing',
    title: 'מכונת טיורינג',
    description: 'המודל החישובי החזק ביותר, המגדיר את גבולות החישוב האלגוריתמי.',
    icon: '🧮',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    path: '/turing',
    category: 'advanced',
    difficulty: 'advanced'
  },
  
  // אלגוריתמים
  {
    id: 'subset-construction',
    title: 'אלגוריתם בניית תת-קבוצות',
    description: 'המרת NFA ל-DFA באמצעות בניית מצבים מורכבים.',
    icon: '🔄',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
    path: '/subset-construction',
    category: 'algorithms',
    difficulty: 'intermediate'
  },
  {
    id: 'minimization',
    title: 'מזעור אוטומטים',
    description: 'אלגוריתמים למציאת האוטומט הקטן ביותר השקול לאוטומט נתון.',
    icon: '📉',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    path: '/minimization',
    category: 'algorithms',
    difficulty: 'advanced'
  },
  {
    id: 'cyk',
    title: 'אלגוריתם CYK',
    description: 'אלגוריתם יעיל לבדיקת שייכות מילה לשפה חופשית הקשר.',
    icon: '🎲',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50',
    path: '/cyk',
    category: 'algorithms',
    difficulty: 'advanced'
  },
  
  // יישומים
  {
    id: 'lexical-analysis',
    title: 'ניתוח לקסיקלי',
    description: 'שימוש באוטומטים סופיים לזיהוי טוקנים בקומפיילרים.',
    icon: '🔍',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50',
    path: '/lexical-analysis',
    category: 'applications',
    difficulty: 'intermediate'
  },
  {
    id: 'pattern-matching',
    title: 'התאמת דפוסים',
    description: 'שימוש בביטויים רגולריים לחיפוש וזיהוי דפוסים בטקסט.',
    icon: '🔎',
    color: 'from-lime-500 to-green-600',
    bgColor: 'bg-lime-50',
    path: '/pattern-matching',
    category: 'applications',
    difficulty: 'beginner'
  },
  {
    id: 'protocol-verification',
    title: 'אימות פרוטוקולים',
    description: 'שימוש באוטומטים לאימות נכונות פרוטוקולי תקשורת.',
    icon: '🛡️',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    path: '/protocol-verification',
    category: 'applications',
    difficulty: 'advanced'
  }
];

export const getTopicsByCategory = (category: Topic['category']) => {
  return topics.filter(topic => topic.category === category);
};

export const getTopicsByDifficulty = (difficulty: Topic['difficulty']) => {
  return topics.filter(topic => topic.difficulty === difficulty);
};

export const getTopicById = (id: string) => {
  return topics.find(topic => topic.id === id);
};