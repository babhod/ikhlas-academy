// Types defined inline

export interface ArticleData {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  fullContent: string;
  author: string;
  date: string;
  category: string;
}

export const articles: ArticleData[] = [
{
    id: 1,
    title: "كيف تحفظ القرآن بطريقة فعالة: دليل شامل للحفظ والمراجعة",
    excerpt: "اكتشف أفضل طرق حفظ القرآن الكريم بفعالية. خطوات عملية، جدول مراجعة يومي، ونصائح لاختيار الوقت الذهبي لضمان ثبات الحفظ.",
    image: "https://images.unsplash.com/photo-1551006917-3e0021adf687?w=800&h=600&fit=crop",
    readTime: "7 دقائق",
    author: "د. محمد الأحمد",
    date: "20 مارس 2026",
    category: "الحفظ والمراجعة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      الحفظ الناجح لا يعتمد على قوة الذاكرة فحسب، بل على الخطة الواضحة والاستمرارية. إذا كنت تبحث عن طريقة تضمن بها ثبات الآيات وعدم نسيانها، فهذا الدليل يقدم لك خطوات مجربة تجمع بين الحفظ المتقن والمراجعة الذكية.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      1. اختيار الوقت الذهبي (Focus Window)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      أفضل وقت للحفظ هو حين يكون الذهن في أعلى مستويات صفائه. ننصح بالأوقات التالية:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>بعد صلاة الفجر: حيث البركة والهدوء التام.</li>
      <li>بعد صلاة العشاء: مباشرة قبل النوم، مما يساعد العقل الباطن على تثبيت المعلومات أثناء الراحة.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      2. استراتيجية "المقطع الصغير" للإتقان
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      تشتيت الذهن في صفحة كاملة قد يقلل التركيز. السر يكمن في تقسيم الصفحة إلى مقاطع (3-5 أسطر):
    </p>
    <ol class="list-decimal pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>القراءة البصرية: اقرأ المقطع 5 مرات بتركيز شديد من المصحف.</li>
      <li>التكرار الغيبي: ردد المقطع 5 مرات دون النظر للمصحف.</li>
      <li>الربط: لا تنتقل للمقطع التالي إلا بعد ربط المقطع الحالي بما قبله.</li>
    </ol>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      نصيحة إضافية (خارج الصندوق): استخدم الاستماع النشط. استمع للقارئ المفضل لديك للمقطع الذي تنوي حفظه أثناء تنقلاتك أو قبل البدء بجلسة الحفظ؛ هذا يسهل عليك النطق الصحيح ويوفر عليك نصف مجهود الحفظ.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      3. جدول المراجعة الذكي (Daily vs Weekly)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      المراجعة هي "عمود الحفظ". بدلاً من الحفظ الجديد المكثف، ركز على تثبيت القديم عبر هذا الجدول:
    </p>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">نوع المراجعة</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">المحتوى المطلوب</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">مراجعة يومية</td>
            <td class="px-6 py-4 text-muted-foreground">مراجعة آخر وجه تم حفظه + وجهين سابقين على الأقل.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">مراجعة أسبوعية</td>
            <td class="px-6 py-4 text-muted-foreground">تخصيص يوم (مثل الجمعة) لمراجعة كل ما تم حفظه خلال الأسبوع.</td>
          </tr>
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">المراجعة التراكمية</td>
            <td class="px-6 py-4 text-muted-foreground">قراءة المحفظ في الصلاة (النوافل والسنن) لضمان أقصى درجات التثبيت.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      قليل دائم خير من كثير منقطع. ابدأ اليوم بخطة بسيطة، وستجد النتائج مبهرة بإذن الله.
    </p>
  </div>
</div>
    `
  },
  // Add similar for id 3-6
  {
    id: 2,
    title: "مخارج الحروف العربية: ركيزة الإتقان في علم التجويد",
    excerpt: "تعرف على مخارج الحروف العربية الخمسة الكبرى. دليل عملي لضبط مخارج الحلق واللسان والشفتين لتحسين النطق وتلاوة القرآن الكريم بوضوح وإتقان.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
    readTime: "6 دقائق",
    author: "الشيخ أحمد السيد",
    date: "25 مارس 2026",
    category: "مخارج الحروف",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      إتقان تلاوة القرآن الكريم يبدأ من فهم مخارج الحروف؛ وهي الأماكن التي يخرج منها صوت كل حرف ليميزه عن غيره. ضبط هذه المخارج هو الخطوة الأولى للمبتدئين في رحلة تعلم التجويد، لضمان القراءة الصحيحة كما أُنزلت.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      المخارج الخمسة الكبرى (The Primary Articulation Points)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      اتفق علماء التجويد على تقسيم مخارج الحروف إلى خمس مناطق رئيسية، ينبثق منها سبعة عشر مخرجاً تفصيلياً:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>الجوف: هو التجويف الممتد من الحلق إلى الفم، وتخرج منه حروف المد الثلاثة (أ، و، ي).</li>
      <li>الحلق: مخرج لستة حروف موزعة بين أقصى الحلق (ء، هـ)، وسط الحلق (ع، ح)، وأدنى الحلق (غ، خ).</li>
      <li>اللسان: هو المخرج الأوسع ويشمل أغلب الحروف (18 حرفاً)، وينقسم إلى مناطق دقيقة (أقصى، وسط، طرف، وحافة اللسان).</li>
      <li>الشفتان: يخرج منهما أربعة حروف رئيسية (ب، م، و، ف).</li>
      <li>الخيشوم: هو التجويف الأنفي، وهو مخرج "الغنة" المصاحبة لحرفي النون والميم.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      جدول توضيحي للمخارج والأمثلة
    </h2>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">المخرج الرئيسي</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">الحروف المرتبطة</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">مثال تطبيقي</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">الحلق</td>
            <td class="px-6 py-4 text-muted-foreground">ء - هـ - ع - ح - غ - خ</td>
            <td class="px-6 py-4 text-muted-foreground">أعمال - خـبير</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">الشفتان</td>
            <td class="px-6 py-4 text-muted-foreground">ب - م - و - ف</td>
            <td class="px-6 py-4 text-muted-foreground">بـصير - مـؤمن</td>
          </tr>
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">الخيشوم</td>
            <td class="px-6 py-4 text-muted-foreground">الغنة (النون والميم المشددتين)</td>
            <td class="px-6 py-4 text-muted-foreground">إنَّ - عمَّ</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      تمرين عملي: الفرق بين المخرج والصفة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      كثير من المبتدئين يخلطون بين الحروف المتقاربة في المخرج. لتطوير مهاراتك، جرب التمرين التالي أمام المرآة:
    </p>
    <ol class="list-decimal pr-6 text-muted-foreground text-lg leading-relaxed mb-6">
      <li>انطق حرف (س) ثم حرف (ص).</li>
      <li>لاحظ كيف أن اللسان يظل منبسطاً مع السين، بينما يرتفع أقصاه مع الصاد (الاستعلاء).</li>
      <li>هذا التمرين يساعدك على استشعار نقطة التماس الدقيقة للهواء مع مخرج الحرف.</li>
    </ol>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      المعرفة النظرية هي المفتاح، لكن التلقي والمشافهة على يد معلم متقن هو الطريق الأضمن لضبط المخارج. ابدأ بالتركيز على مخرج واحد يومياً وطبقه في صلاتك لتلاحظ التحسن السريع.
    </p>
  </div>
</div>
    `
  },
  {
    id: 3,
    title: "فوائد تعلم القراءة العربية للأطفال: استثمار في الفكر والهوية",
    excerpt: "اكتشف أهم فوائد تعليم اللغة العربية للأطفال في سن مبكرة. نصائح عملية، أساليب تعليمية مبتكرة، وكيفية تحويل القراءة إلى عادة يومية ممتعة لطفلك.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    readTime: "5 دقائق",
    author: "أستاذة فاطمة محمد",
    date: "30 مارس 2026",
    category: "تعليم الأطفال",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      تعليم الطفل القراءة باللغة العربية ليس مجرد مهارة أكاديمية، بل هو جسر يربطه بهويته وفهمه للقرآن الكريم. يبدأ النجاح في هذه الرحلة حين نمزج بين المنهجية العلمية والأسلوب الترفيهي الذي يناسب طبيعة الطفل.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      1. المكتسبات المعرفية واللغوية
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      تتجاوز فوائد القراءة حدود التعرف على الحروف لتشمل:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>تنمية الذكاء اللغوي: القراءة تزيد من حصيلة المفردات وتجعل الطفل أكثر قدرة على التعبير عن نفسه.</li>
      <li>تقوية الذاكرة: محاولة الربط بين الحروف والكلمات تنشط الخلايا الذهنية وتعزز التركيز.</li>
      <li>تحسين النطق: القراءة الجهرية تساعد في تقويم مخارج الحروف العربية الصعبة منذ الصغر.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      2. أساليب تعليمية مبتكرة (التعلم باللعب)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      لضمان استمرارية الطفل دون ملل، يفضل اتباع الاستراتيجيات التالية:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>القصص البصرية: استخدم القصص التي تعتمد على صور جذابة وألوان زاهية لربط الكلمة بالصورة ذهنياً.</li>
      <li>نظام البطاقات: حول الحروف إلى بطاقات ملونة أو ألعاب تركيب (Puzzles) ليلمس الطفل الحرف بيديه.</li>
      <li>المكافآت الفورية: شجع الطفل عند نطق كلمة صحيحة أو إنهاء جملة، فالثناء يعزز الثقة بالنفس.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      3. جدول تنظيم وقت القراءة المنزلي
    </h2>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">الخطوة</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">المدة الزمنية</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">الهدف من النشاط</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">القراءة الصامتة</td>
            <td class="px-6 py-4 text-muted-foreground">5 دقائق</td>
            <td class="px-6 py-4 text-muted-foreground">تصفح الصور وإثارة الفضول.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">القراءة التفاعلية</td>
            <td class="px-6 py-4 text-muted-foreground">10 دقائق</td>
            <td class="px-6 py-4 text-muted-foreground">قراءة مشتركة بين المربي والطفل مع تمثيل الأدوار.</td>
          </tr>
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">لعبة الحروف</td>
            <td class="px-6 py-4 text-muted-foreground">5 دقائق</td>
            <td class="px-6 py-4 text-muted-foreground">استخراج حروف معينة من النص المكتوب.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      نصيحة ذهبية لاستدامة التعلم: اجعل القراءة عادة يومية وليست "واجباً مدرسياً". 15 دقيقة يومياً بانتظام أفضل بكثير من ساعات طويلة متقطعة. الهدف هو بناء علاقة حب بين الطفل والكتاب، وليس مجرد إنهاء المنهج.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      عندما يقترن التعلم بالمتعة، يتحول الطفل إلى قارئ شغوف يمتلك أدوات الفهم والبيان بطلاقة.
    </p>
  </div>
</div>
    `
  },
  {
    id: 4,
    title: "فن الاستمرارية: كيف تحول التعلم إلى عادة يومية ثابتة؟",
    excerpt: "الاستمرارية هي سر النجاح في أي رحلة تعليمية. اكتشف نصائح عملية حول ربط العادات، التخطيط المرن، وكيفية الحفاظ على حماسك للتعلم لفترات طويلة.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    readTime: "4 دقائق",
    author: "الشيخ أحمد السيد",
    date: "10 أبريل 2026",
    category: "النصائح والإرشاد",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      البدايات دائماً ما تكون مليئة بالحماس، لكن التحدي الحقيقي يكمن في الاستمرارية. النجاح في طلب العلم أو اكتساب مهارة جديدة لا يتطلب مجهوداً ضخماً لمرة واحدة، بل يتطلب خطوات صغيرة تتراكم بمرور الوقت لتصنع فارقاً كبيراً.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      1. التخطيط المرن (قاعدة الـ 15 دقيقة)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      الخطأ الشائع هو البدء بجلسات دراسية طويلة تؤدي سريعاً إلى الاحتراق النفسي.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>ابدأ صغيراً: التزم بـ 15 دقيقة فقط يومياً.</li>
      <li>التدرج: لا تزد الوقت إلا بعد مرور أسبوعين من الالتزام التام بالخطة المصغرة.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      2. ربط العادات (Habit Stacking)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      أسهل طريقة لتبني عادة تعليمية جديدة هي ربطها بعادة قائمة بالفعل في يومك.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>أمثلة: "سأقرأ صفحتين بعد صلاة الفجر مباشرة"، أو "سأستمع لدرس تعليمي أثناء ممارسة رياضة المشي".</li>
      <li>هذا الربط يجعل العقل يستدعي المهمة تلقائياً دون الحاجة لقوة إرادة كبيرة.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      3. قياس وتحليل التقدم
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      العقل يحتاج إلى "محفز بصري" ليشعر بالإنجاز.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>استخدم مفكرة بسيطة أو تطبيقاً على هاتفك لتسجيل الأيام التي أنجزت فيها وردك التعليمي.</li>
      <li>مراجعة إنجازك الأسبوعي تعطيك دفعة معنوية للاستمرار في الأسبوع التالي.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      4. بيئة التعلم المحفزة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      الاستمرار يصبح أسهل حين تشارك رحلتك مع الآخرين.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>رفيق الدرب: ابحث عن صديق يشاركك نفس الاهتمامات التعليمية.</li>
      <li>المساءلة: التنافس المحمود يرفع من مستوى الالتزام ويقلل من فرص التكاسل.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      ملخص خطة الالتزام الأسبوعية
    </h2>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">اليوم</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">نوع النشاط</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">الهدف</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">السبت - الخميس</td>
            <td class="px-6 py-4 text-muted-foreground">تعلم مركز (15-30 دقيقة)</td>
            <td class="px-6 py-4 text-muted-foreground">بناء العادة اليومية وتراكم المعرفة.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">الجمعة</td>
            <td class="px-6 py-4 text-muted-foreground">مراجعة وتقييم</td>
            <td class="px-6 py-4 text-muted-foreground">قياس ما تم إنجازه وتعديل الخطة للأسبوع القادم.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      الاستمرارية لا تعني المثالية؛ فقد تمر بأيام يقل فيها نشاطك، لكن السر يكمن في العودة سريعاً. تذكر دائماً أن القليل الدائم يفتح لك أبواباً من العلم لا يفتحها الكثير المنقطع.
    </p>
  </div>
</div>
    `
  },
  {
    id: 5,
    title: "تعلم القراءة العربية من الصفر: رحلة الخطوات الأولى الواثقة",
    excerpt: "اكتشف أسهل طريقة لتعلم القراءة العربية من الصفر. خطة أسبوعية لتعلم أشكال الحروف، الحركات الأساسية، وبناء الكلمات بأسلوب عملي يضمن لك نتائج سريعة.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    readTime: "6 دقائق",
    author: "أستاذة فاطمة محمد",
    date: "12 أبريل 2026",
    category: "القراءة العربية",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      البداية الصحيحة هي التي تضمن لك الوصول للنهاية بنجاح. تعلم اللغة العربية ليس بالأمر المعقد إذا اتبعت منهجية "التفكيك والتركيب". في هذا الدليل، نضع بين يديك خارطة طريق واضحة للانتقال من عدم معرفة الحروف إلى قراءة الجمل البسيطة في وقت قياسي.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      المرحلة الأولى: بناء الأساس الصوتي والبصري
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      قبل البدء بقراءة الكلمات، يجب أن تتقن "وحدات البناء" الأساسية:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>أشكال الحروف: تعلم كيف يتغير شكل الحرف حسب موقعه (أول، وسط، آخر الكلمة).</li>
      <li>الحركات القصيرة: اتقان الفتحة والضمة والكسرة باعتبارها محركات الصوت لكل حرف.</li>
      <li>الاستماع النشط: خصص 15 دقيقة يومياً لسماع نطق الحروف من مخارجها الصحيحة لترسيخ الربط بين الشكل والصوت.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      المرحلة الثانية: دمج المقاطع وبناء الكلمات
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      بمجرد تمييزك للحرف وحركته، ابدأ في عملية "الدمج":
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>المقاطع الثنائية: مثل (بَـ + رَ = بَرَ).</li>
      <li>الكلمات الشائعة: ابدأ بالكلمات ثلاثية الحروف التي لا تحتوي على قواعد معقدة.</li>
      <li>القراءة الجهرية: القراءة بصوت مسموع تساعد في تصحيح الأخطاء ذاتياً وتزيد من ثقتك في النطق.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خطة الأسبوعين المقترحة (Learning Roadmap)
    </h2>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">الفترة الزمنية</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">التركيز الأساسي</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">المخرج المتوقع</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">الأسبوع الأول</td>
            <td class="px-6 py-4 text-muted-foreground">الحروف والحركات الأساسية</td>
            <td class="px-6 py-4 text-muted-foreground">تمييز جميع الحروف بأشكالها المختلفة.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">الأسبوع الثاني</td>
            <td class="px-6 py-4 text-muted-foreground">المقاطع والكلمات الثلاثية</td>
            <td class="px-6 py-4 text-muted-foreground">القدرة على قراءة جمل بسيطة من كلمتين.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      نصيحة تقنية لزيادة الفعالية: استخدم نظام البطاقات التعليمية (Flashcards). هذه الطريقة تحفز الذاكرة البصرية وتجعل عملية الحفظ أسرع. يمكنك تخصيص وقت "ميت" خلال يومك (مثل وقت المواصلات) لمراجعة 5-10 بطاقات جديدة.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      الثبات والالتزام اليومي ولو لعشر دقائق هو السر الحقيقي. ابدأ بخطوات صغيرة، وستجد نفسك قادراً على قراءة نصوص كاملة في وقت أقصر مما تتخيل.
    </p>
  </div>
</div>
    `
  },
  {
    id: 6,
    title: "تمارين يومية لتحسين النطق واللفظ: طريقك نحو تلاوة متقنة",
    excerpt: "حسن نطقك ومخارج حروفك بتمارين يومية بسيطة لا تتجاوز 10 دقائق. تعلم تمارين الإحماء الصوتي، التمييز بين الحروف المتقاربة، وتقنيات التسجيل الذاتي للاتقان.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    readTime: "5 دقائق",
    author: "الشيخ أحمد السيد",
    date: "16 أبريل 2026",
    category: "النطق والتلاوة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      النطق السليم ليس مجرد موهبة، بل هو مهارة مكتسبة تتطور بالتدريب المستمر. تماماً كما يحتاج الرياضي للإحماء، يحتاج القارئ لتمارين دورية لضبط مخارج الحروف وضمان سلاسة التعبير والبيان. إليك خطة تدريبية يومية مكثفة لا تتجاوز 10 دقائق.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      1. تمرين الإحماء الصوتي (Vocal Warm-up)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      ابدأ بتنشيط عضلات النطق من خلال:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>التدرج الصوتي: ابدأ بنطق حروف "الاستعلاء" (خص ضغط قظ) بصوت واضح، ثم انتقل لحروف "الاستفال" (بقية الحروف).</li>
      <li>الثبات: حافظ على نبرة ثابتة وهادئة أثناء التدريب لضمان عدم إجهاد الأحبال الصوتية.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      2. تمييز المخارج المتقاربة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      الخطأ الأكثر شيوعاً هو الخلط بين الحروف التي تخرج من أماكن قريبة. خصص دقيقتين يومياً لنطق هذه الأزواج والتركيز على الفارق الدقيق بينها:
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>(س) مقابل (ص): ركز على ترقيق السين وتفخيم الصاد.</li>
      <li>(ت) مقابل (ط): انتبه لنقطة تماس اللسان مع الحنك الأعلى.</li>
      <li>(ذ) مقابل (ز): ميز بين مخرج اللسان (ذ) ومخرج الشفتين/الأسنان (ز).</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      3. تقنية "التسجيل والمراجعة"
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      التكنولوجيا هي أفضل معلم صامت. اتبع هذه الخطوات:
    </p>
    <ol class="list-decimal pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>سجل لنفسك مقطعاً قصيراً لمدة دقيقة واحدة.</li>
      <li>استمع بتركيز عالٍ وحاول اكتشاف أي "انزلاق" في مخارج الحروف.</li>
      <li>صحح الخطأ في التسجيل التالي حتى تصل للنتيجة المطلوبة.</li>
    </ol>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      4. تمرين السرعة المتدرجة (Pacing)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      يساعد هذا التمرين على التحكم في النفس وتوزيع الجهد:
    </p>
    <ol class="list-decimal pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>اقرأ فقرة ببطء شديد مع المبالغة في توضيح كل حرف.</li>
      <li>أعد قراءتها بسرعة متوسطة مع الحفاظ على نفس الدقة.</li>
      <li>عد للقراءة الهادئة (الترتيل) وستلاحظ فرقاً في سلاسة الانتقال بين الحروف.</li>
    </ol>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      جدول التمرين اليومي المقترح
    </h2>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">التمرين</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">المدة</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">الهدف</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">الإحماء</td>
            <td class="px-6 py-4 text-muted-foreground">دقيقتان</td>
            <td class="px-6 py-4 text-muted-foreground">تهيئة جهاز النطق.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">التمييز</td>
            <td class="px-6 py-4 text-muted-foreground">3 دقائق</td>
            <td class="px-6 py-4 text-muted-foreground">ضبط المخارج المتقاربة.</td>
          </tr>
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">التسجيل</td>
            <td class="px-6 py-4 text-muted-foreground">3 دقائق</td>
            <td class="px-6 py-4 text-muted-foreground">التقييم الذاتي والتصحيح.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">السرعة</td>
            <td class="px-6 py-4 text-muted-foreground">دقيقتان</td>
            <td class="px-6 py-4 text-muted-foreground">مرونة اللسان وتوزيع النفس.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      عشر دقائق من التركيز اليومي أفضل من ساعات من القراءة غير المنضبطة. الاستمرارية هي المحرك الحقيقي للتغيير؛ التزم بهذا الجدول لمدة شهر واحد وستلاحظ فرقاً جوهرياً في جودة تلاوتك ونطقك.
    </p>
  </div>
</div>
    `
  },
  {
    id: 7,
    title: "أخطاء شائعة في التلاوة: دليل التقييم الذاتي والتصحيح",
    excerpt: "تعلم كيفية تجنب أخطاء التلاوة الشائعة مثل السرعة الزائدة، إهمال الغنة، وترقيق المفخم. نصائح عملية وحلول فعالة لتحسين أداءك في قراءة القرآن الكريم.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    readTime: "7 دقائق",
    author: "أستاذة فاطمة محمد",
    date: "20 أبريل 2026",
    category: "تحسين التلاوة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      الوصول إلى تلاوة متقنة لا يخلو من عثرات في البداية. كثير من الأخطاء التي يقع فيها المبتدئون تبدو بسيطة، لكن تراكمها يؤثر على جودة الأداء وأحكام التجويد. في هذا المقال، نسلط الضوء على أبرز هذه الأخطاء ونقدم حلولاً عملية لتجاوزها بذكاء.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      1. تحدي السرعة الزائدة (Haste in Recitation)
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      السرعة المفرطة تؤدي غالباً إلى "دمج" الحروف وضياع مخارجها الصحيحة.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-4">
      <li>الأثر: فقدان التوازن في المدود وضياع صفات الحروف.</li>
      <li>الحل العملي: التزم بمرتبة "التحقيق" (القراءة ببطء واطمئنان) مع التركيز التام على مواضع الوقف والابتداء. تذكر أن القراءة المتأنية تساعدك على التدبر أيضاً.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      2. إهمال زمن الغنة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      الغنة صفة لازمة لحرفي النون والميم، وهي ركن أساسي في أحكام مثل الإدغام والإخفاء.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-4">
      <li>الأثر: تصبح التلاوة "جافة" وفاقدة لجمالها الصوتي واللحني.</li>
      <li>الحل العملي: تدرب على مقدار زمن الغنة (حركتان) من خلال الاستماع لقراء مشهورين بجمال الغنة، وحاول محاكاة طول النفس لديهم.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      3. ترقيق الحروف المفخمة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      يقع الكثيرون في خطأ ترقيق حروف الاستعلاء (ص، ض، ط، ظ، ق، غ، خ).
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed mb-4">
      <li>الأثر: تغيير جرس الحرف وقد يؤدي أحياناً لتغيير المعنى.</li>
      <li>الحل العملي: تمرن على رفع أقصى اللسان عند نطق هذه الحروف. جرب نطقها في كلمات مختلفة (مفتوحة، مضمومة، ومكسورة) لتعتاد عضلة اللسان على وضعية التفخيم.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خارطة طريق لتصحيح الأداء الذاتي
    </h2>
    <ol class="list-decimal pr-6 text-muted-foreground text-lg leading-relaxed mb-12">
      <li>المحاكاة (Modeling): استمع لقارئ متقن يقرأ نفس الآية التي تتدرب عليها.</li>
      <li>التسجيل والمقارنة: سجل تلاوتك ثم استمع إليها جنباً إلى جنب مع تسجيل القارئ المتقن.</li>
      <li>العزل: إذا وجدت خطأ في مخرج حرف معين، اعزل هذا الحرف وتدرب عليه منفرداً قبل إعادته للسياق.</li>
    </ol>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      جدول الأخطاء والحلول السريعة
    </h2>
    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-right font-bold text-foreground">الخطأ الشائع</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">السبب المحتمل</th>
            <th class="px-6 py-4 text-right font-bold text-foreground">الحل السريع</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">ضياع المدود</td>
            <td class="px-6 py-4 text-muted-foreground">عدم التنفس بشكل صحيح</td>
            <td class="px-6 py-4 text-muted-foreground">تقسيم الآيات الطويلة لمقاطع.</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 text-muted-foreground font-semibold">قلقلة غير صحيحة</td>
            <td class="px-6 py-4 text-muted-foreground">شدة الضغط على الحرف</td>
            <td class="px-6 py-4 text-muted-foreground">تخفيف الضغط مع الحفاظ على مخرج الحرف.</td>
          </tr>
          <tr>
            <td class="px-6 py-4 text-muted-foreground font-semibold">خلط السين بالصاد</td>
            <td class="px-6 py-4 text-muted-foreground">وضعية اللسان</td>
            <td class="px-6 py-4 text-muted-foreground">خفض اللسان للسين ورفعه للصاد.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-primary p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      تحديد الخطأ هو أولى خطوات الإتقان. لا تجعل الخوف من الخطأ يمنعك من القراءة؛ فالهدف هو التحسن المستمر. التدريب اليومي والمشافهة هما الضمان الوحيد للوصول إلى تلاوة صافية ودقيقة.
    </p>
  </div>
</div>
    `
  }
];

export const getArticleById = (id: number): ArticleData | undefined => {
  return articles.find(article => article.id === id);
};

export const getRelatedArticles = (currentId: number, count = 3): ArticleData[] => {
  return articles
    .filter(a => a.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
