const missionControl = {
    "jerusalem": { 
        name: "ירושלים", 
        facts: [
            "אחת הערים העתיקות בעולם: ירושלים מיושבת מעל 3,000 שנה.",
            "קדושה לשלוש הדתות: העיר מקודשת ליהדות, לנצרות ולאסלאם.",
            "בירת ישראל: כאן שוכנים הכנסת, בית המשפט העליון ומשכן הנשיא.",
            "אבן ירושלמית: חוק עירוני מחייב ציפוי מבנים באבן ירושלמית."
        ],
        photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/121086-Jerusalem-Mount-of-Olives_%2826988237083%29.jpg/330px-121086-Jerusalem-Mount-of-Olives_%2826988237083%29.jpg"],
        x: 50, y: 39 
    },
    "tel_aviv": { 
        name: "תל אביב-יפו", 
        facts: [
            "העיר הלבנה: אתר מורשת עולמי בזכות ריכוז מבני הבאוהאוס הגדול בעולם.",
            "עיר ללא הפסקה: ידועה בחיי הלילה התוססים, המסעדות והתרבות שלה.",
            "מרכז הכלכלה וההייטק: לב התעשייה הטכנולוגית והפיננסית בישראל.",
            "רצועת החוף: כ-14 קילומטרים של חופי ים המושכים מיליוני תיירים."
        ], 
        photos: ["https://upload.wikimedia.org/wikipedia/he/thumb/b/b4/Tel_aviv22.jpg/500px-Tel_aviv22.jpg"],
        x: 30, y: 30 
    },
    "haifa": { 
        name: "חיפה", 
        facts: [
            "הגנים הבהאיים: אתר מורשת עולמית והמרכז העולמי של הדת הבהאית.",
            "עיר של דו-קיום: חיפה ידועה כסמל לחיים משותפים ושקטים בין יהודים וערבים.",
            "הכרמלית: בחיפה פועלת הרכבת התחתית (פוניקולר) היחידה בישראל.",
            "עיר נמל: נמל חיפה הוא אחד הנמלים המרכזיים והחשובים במזרח התיכון."
        ], 
        photos: ["https://upload.wikimedia.org/wikipedia/commons/9/97/Downtown_Haifa_including_the_port_and_the_sail_tower.jpg"],
        x: 25, y: 20 
    },
    "beersheba": { 
        name: "באר שבע", 
        facts: [
            "בירת הנגב: העיר הגדולה ביותר בדרום ומשמשת כמרכז מנהלי ותרבותי.",
            "בירת הסייבר: העיר מארחת פארק הייטק מתקדם המתמחה באבטחת מידע.",
            "באר אברהם: המקום בו נכרתה הברית המקראית בין אברהם לאבימלך.",
            "אדריכלות ברוטליסטית: העיר ידועה במבני בטון ייחודיים משנות ה-50."
        ], 
        photos: ["https://upload.wikimedia.org/wikipedia/commons/4/4f/BeershebaCityHallDec142022.jpg"],
        x: 45, y: 70 
    },
    // שאר הערים מהקובץ המקורי שלך (נשמרות כאן באובייקט)
    "safed": { name: "צפת", facts: ["עיר הקבלה", "העיר הגבוהה", "רובע האמנים"], photos: [], x: 35, y: 10 },
    "akko": { name: "עכו", facts: ["עיר צלבנית", "חומות עכו", "מורשת עולמית"], photos: [], x: 20, y: 18 },
    "nazareth": { name: "נצרת", facts: ["העיר הערבית הגדולה", "כנסיית הבשורה", "עיר ילדותו של ישו"], photos: [], x: 32, y: 22 },
    "tiberias": { name: "טבריה", facts: ["עיר הכנרת", "קברי צדיקים", "חמי טבריה"], photos: [], x: 38, y: 28 },
    "netanya": { name: "נתניה", facts: ["עיר היהלומים", "רצועת חוף מרהיבה", "הטיילת"], photos: [], x: 28, y: 25 },
    "ashdod": { name: "אשדוד", facts: ["הנמל הגדול", "דיונות החול", "עיר מתוכננת"], photos: [], x: 22, y: 40 },
    "eilat": { name: "אילת", facts: ["עיר הנופש", "סחר חופשי", "שונית האלמוגים"], photos: [], x: 50, y: 95 },
    "metula": { name: "מטולה", facts: ["הנקודה הצפונית", "מרכז קנדה", "מפלי התנור"], photos: [], x: 40, y: 8 },
    "mitzpe_ramon": { name: "מצפה רמון", facts: ["מכתש רמון", "אור כוכבים", "יעלים"], photos: [], x: 52, y: 75 },
    "kiryat_shmona": { name: "קריית שמונה", facts: ["בירת הגליל העליון", "שמונת הגיבורים", "רכבל צוק מנרה"], photos: [], x: 42, y: 12 },
    "raanana": { name: "רעננה", facts: ["פנינת השרון", "פארק רעננה", "הייטק"], photos: [], x: 28, y: 28 },
    "rishon_lezion": { name: "ראשון לציון", facts: ["דגל והמנון", "היקב", "סופרלנד"], photos: [], x: 28, y: 38 },
    "rehovot": { name: "רחובות", facts: ["עיר המדע", "מכון ויצמן", "פרדסנות"], photos: [], x: 32, y: 40 }
    // ... הוסיפי כאן את שאר הערים מהקובץ שלך באותו מבנה ...
};

/**
 * לוגיקה לסידור רשימת הערים עבור ה-Select
 */
function getSortedCities() {
    const mainCitiesKeys = ["jerusalem", "tel_aviv", "haifa", "beersheba"];
    
    // 1. ערים מרכזיות
    const mainCities = mainCitiesKeys.map(key => ({ key, ...missionControl[key] }));
    
    // 2. שאר הערים ממוינות מצפון לדרום (לפי ערך Y קטן לגדול)
    const otherCities = Object.keys(missionControl)
        .filter(key => !mainCitiesKeys.includes(key))
        .map(key => ({ key, ...missionControl[key] }))
        .sort((a, b) => a.y - b.y);

    return [...mainCities, ...otherCities];
}

// ייצוא הפונקציה לשימוש ב-script.js
window.sortedCitiesList = getSortedCities();
