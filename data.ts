/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Reciter, Surah } from './types';

export const INITIAL_RECITERS: Reciter[] = [
  {
    id: 'basit',
    name: 'عبد الباسط عبد الصمد',
    photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
    bio: 'فضيلة الشيخ عبد الباسط محمد عبد الصمد (1927 - 1988)، من أشهر قراء القرآن الكريم في العالم الإسلامي. يلقب بـ "صاحب الحنجرة الذهبية" و"صوت مكة". حظي بشهرة واسعة لجمال صوته وأسلوبه الفريد وتأثيره الروحي الخاشع.',
    surahCount: 114
  },
  {
    id: 'hussary',
    name: 'محمود خليل الحصري',
    photoUrl: 'https://images.unsplash.com/photo-1590076211184-d23240801110?auto=format&fit=crop&q=80&w=400',
    bio: 'فضيلة الشيخ محمود خليل الحصري (1917 - 1980)، من أبرز قراء القرآن الكريم وأول من سجل المصحف المرتل في العالم بروايات مختلفة. كان شيخ عموم المقارئ المصرية، وتميز بحلاوة صوته وإتقانه الشديد لمخارج الحروف والترتيل المحكم.',
    surahCount: 114
  },
  {
    id: 'minshawi',
    name: 'محمد صديق المنشاوي',
    photoUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400',
    bio: 'فضيلة الشيخ محمد صديق المنشاوي (1920 - 1969)، أحد رواد التلاوة المتميزين بصوتهم الخاشع الباكي. يلقب بـ "الصوت الباكي". نشأ في بيت علم وتلاوة بجمهورية مصر العربية، وأصبغت تلاوته هيبة وخشوعاً قل نظيره.',
    surahCount: 114
  },
  {
    id: 'afs',
    name: 'مشاري بن راشد العفاسي',
    photoUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ مشاري بن راشد بن غريب العفاسي، إمام المسجد الكبير بدولة الكويت ومؤسس قناة العفاسي الفضائية. يتميز بصوته العذب المريح وإتقانه للمقامات وعلوم التجويد، وله جماهيرية واسعة وملايين المستمعين لترتيله الخاشع.',
    surahCount: 114
  },
  {
    id: 'maher',
    name: 'ماهر المعيقلي',
    photoUrl: 'https://images.unsplash.com/photo-1609599006353-e629f1d40a4f?auto=format&fit=crop&q=80&w=400',
    bio: 'فضيلة الشيخ ماهر بن حمد المعيقلي، إمام وخطيب المسجد الحرام بمكة المكرمة. حفظ القرآن الكريم ودرس الشريعة والقرآن الكريم وحاصل على الدكتوراه. يتميز بتلاوته المتقنة الخاشعة التي يألفها الملايين حول العالم.',
    surahCount: 114
  },
  {
    id: 's_gmd',
    name: 'سعد الغامدي',
    photoUrl: 'https://images.unsplash.com/photo-1597935258735-e254c1839512?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ سعد بن سعيد الغامدي، إمام وقارئ من المملكة العربية السعودية. يحمل شهادة بكالوريوس في العقيدة والمذاهب المعاصرة. عمل إماماً مشاركاً لوقت في المسجد النبوي الشريف ومؤسس لمشاهد ترتيل متميزة بصوته الخاشع الرصين.',
    surahCount: 114
  },
  {
    id: 'dosari',
    name: 'ياسر الدوسري',
    photoUrl: 'https://images.unsplash.com/photo-1610116306796-6ebd3051c330?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ الدكتور ياسر بن راشد الدوسري، إمام وخطيب المسجد الحرام بمكة المكرمة ومن كبار القراء في العالم الإسلامي. يتميز بطبقات صوته العالية الممتلئة بالإيمان والخاشعة، وتلاوته تحظى بمتابعة ملايين المصلين.',
    surahCount: 114
  },
  {
    id: 'ajmy',
    name: 'أحمد العجمي',
    photoUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ أحمد بن علي العجمي، قارئ معروف من المملكة العربية السعودية ولد في الخبر الحبيبة. يتميز بصوته الرخيم الخاشع الذي يبث الهدوء والسكينة والوقار في نفوس المستمعين، وله إصدارات قرآنية شهيرة متداولة عالمياً.',
    surahCount: 114
  },
  {
    id: 'qatami',
    name: 'ناصر القطامي',
    photoUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d960db?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ ناصر القطامي، خطيب وإمام جامع الحرمين بالرياض ومن أشهر القراء الشباب في الخليج العربي. يتميز بنبرته العاطفية الروحانية وتلاواته المؤثرة التي تجذب آلاف المصلين وخاضة في صلوات القيام والتراويح.',
    surahCount: 114
  },
  {
    id: 'abbad',
    name: 'فارس عباد',
    photoUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ فارس عبد ربّه عبّاد، قارئ يمني متميز وصاحب حنجرة ذهبية فريدة. تميز ترتيله بنظمه المنسق الذي يمزج السكينة بالقوة وله شعبية جارفة وتأثير قوي في النفوس بنبرة صوته الحزينة والمؤثرة في ثنايا القلوب.',
    surahCount: 114
  },
  {
    id: 'abkar',
    name: 'ادريس ابكر',
    photoUrl: 'https://images.unsplash.com/photo-1542281200-c5a32ec45dfc?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ إدريس بن محمد أبكر، من مواليد جدة وتولى إمامة جامع الشيخ زايد الكبير بأبوظبي. يتميز بصوت رقيق مبكٍ جياش بالخشوع وله أدعية مؤثرة مسجلة وتلاوات عذبة هادئة ترقق القلوب وتدعو للتأمل العالي والتدبر.',
    surahCount: 114
  },
  {
    id: 'mustafa',
    name: 'مصطفى اسماعيل',
    photoUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ مصطفى إسماعيل (1905 - 1978)، قارئ الملوك والرؤساء وأحد أعظم المجددين في علم التلاوة والمقامات الموسيقية القرآنية. تميز بقدرته الرهيبة على تصوير معاني الآيات وصوته الواسع الطبقات الذي يأسر الألباب.',
    surahCount: 114
  },
  {
    id: 'hazza',
    name: 'هزاع البلوشى',
    photoUrl: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ هزاع البلوشي، قارئ عماني شاب اشتهر بتلاواته الفريدة الروحانية الخالصة عبر شبكات التواصل الاجتماعي. يتميز بصوته الملائكي العذب المنساب الذي جلب قلوب الشباب وحقق تلاواته ملايين المشاهدات عالمياً.',
    surahCount: 114
  },
  {
    id: 'haitham',
    name: 'هيثم الدخين',
    photoUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=400',
    bio: 'الشيخ هيثم الدخين، قارئ يمني شاب يتميز بصوت رنان شجي يشبه تلاوات كبار قراء الرعيل الأول بمصر. تلاواته تمتلئ بالخشوع الطبيعي المنبثق من نقاء قلبه وسيطرته البارعة على صوته المرموق وخشوعه العالي.',
    surahCount: 114
  },
  {
    id: 'ayyoub',
    name: 'محمد ايوب',
    photoUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400',
    bio: 'فضيلة الشيخ محمد أيوب (1952 - 2016)، إمام المسجد النبوي الشريف لسنوات عديدة وأستاذ في الجامعة الإسلامية بالمدينة المنورة. تميز بتلاوته الحجازية الأصيلة وصوته الندي الذي كان يصدح في محراب مسجد رسول الله.',
    surahCount: 114
  },
  {
    id: 'sudais',
    name: 'عبد الرحمن السديسى',
    photoUrl: 'https://images.unsplash.com/photo-1609599006352-bfbc14b60b73?auto=format&fit=crop&q=80&w=400',
    bio: 'فضيلة الشيخ الدكتور عبد الرحمن السديس، رئيس الشؤون الدينية بالمسجد الحرام والمسجد النبوي وإمام الحرم المكي منذ عام 1984. يتميز بنبرته الرنانة الحماسية الخاشعة ودعواته المؤثرة المشهورة التي يسمعها المسلمون بكل بقاع الأرض.',
    surahCount: 114
  }
];

export const ARABIC_SURAHS_NAMES = [
  "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
  "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
  "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
  "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
  "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
  "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
  "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
  "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
  "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
  "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
  "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
  "المسد", "الإخلاص", "الفلق", "النّاس"
];

// Map of standard durations for Surahs in seconds (for mock/standard representation before loading metadata)
export const SURAH_STANDARD_DURATIONS: { [key: number]: number } = {
  1: 45, // Al-Fatihah
  2: 7200, // Al-Baqarah (approx 2 hours)
  3: 4500, // Ali Imran
  4: 4800,
  5: 3900,
  18: 1800, // Al-Kahf
  36: 600, // Yaseen
  55: 450, // Ar-Rahman
  56: 400, // Al-Waqi'a
  67: 350, // Al-Mulk
  112: 15, // Al-Ikhlas
  113: 20, // Al-Falaq
  114: 25  // An-Nas
};

export const getSurahDuration = (number: number): number => {
  return SURAH_STANDARD_DURATIONS[number] || (7200 / number + 120); // Dynamic interpolation as standard guess
};

export const generateAudioUrl = (reciterId: string, surahNumber: number): string => {
  const numStr = String(surahNumber).padStart(3, '0');
  switch (reciterId) {
    case 'basit':
      return `https://server7.mp3quran.net/basit/${numStr}.mp3`;
    case 'hussary':
      return `https://server13.mp3quran.net/husr/${numStr}.mp3`;
    case 'minshawi':
      return `https://server11.mp3quran.net/minsh/${numStr}.mp3`;
    case 'afs':
      return `https://server8.mp3quran.net/afs/${numStr}.mp3`;
    case 'maher':
      return `https://server12.mp3quran.net/maher/${numStr}.mp3`;
    case 's_gmd':
      return `https://server7.mp3quran.net/s_gmd/${numStr}.mp3`;
    case 'dosari':
      return `https://server11.mp3quran.net/yasser/${numStr}.mp3`;
    case 'ajmy':
      return `https://server10.mp3quran.net/ajm/${numStr}.mp3`;
    case 'qatami':
      return `https://server6.mp3quran.net/qtm/${numStr}.mp3`;
    case 'abbad':
      return `https://server8.mp3quran.net/frs_a/${numStr}.mp3`;
    case 'abkar':
      return `https://server6.mp3quran.net/abkr/${numStr}.mp3`;
    case 'mustafa':
      return `https://server8.mp3quran.net/mustafa/${numStr}.mp3`;
    case 'hazza':
      return `https://server11.mp3quran.net/hazza/${numStr}.mp3`;
    case 'haitham':
      return `https://server14.mp3quran.net/haitham/${numStr}.mp3`;
    case 'ayyoub':
      return `https://server8.mp3quran.net/ayyoub/${numStr}.mp3`;
    case 'sudais':
      return `https://server11.mp3quran.net/sds/${numStr}.mp3`;
    default:
      return `https://server8.mp3quran.net/afs/${numStr}.mp3`;
  }
};

export const getAllSurahsForReciter = (reciterId: string): Surah[] => {
  return ARABIC_SURAHS_NAMES.map((name, index) => {
    const surahNum = index + 1;
    return {
      id: `${reciterId}_${surahNum}`,
      number: surahNum,
      name,
      audioUrl: generateAudioUrl(reciterId, surahNum),
      duration: Math.round(getSurahDuration(surahNum))
    };
  });
};
