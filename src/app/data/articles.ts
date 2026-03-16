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
    title: "أهمية تعلم التجويد للمبتدئين",
    excerpt: "تعرف على الأساسيات التي يجب أن يبدأ بها كل مبتدئ في رحلته لتعلم أحكام التجويد وتطبيقها بشكل صحيح.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop",
    readTime: "5 دقائق",
    author: "د. محمد الأحمد",
    date: "15 مارس 2026",
    category: "أحكام التجويد",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <!-- Introduction -->
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      التجويد هو علم يُعنى بإتقان قراءة القرآن الكريم وتلاوته كما أُنزل، وهو من أهم العلوم التي يجب على كل مسلم تعلمها. في هذا المقال، نستعرض أهمية تعلم التجويد للمبتدئين والخطوات الأولى في هذه الرحلة المباركة.
    </p>
  </div>

  <!-- Section 1 -->
  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      ما هو علم التجويد؟
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      التجويد لغةً هو الإتقان والإحسان، واصطلاحاً هو إخراج كل حرف من مخرجه الصحيح وإعطاؤه حقه ومستحقه من الصفات.
    </p>
  </div>

  <!-- Add more sections similar to original -->
  <p>... (full content structure from ArticlePage for id=1)</p>
</div>
    `
  },
  {
    id: 2,
    title: "كيف تحفظ القرآن بطريقة فعالة",
    excerpt: "استراتيجيات مجربة وأساليب عملية لحفظ القرآن الكريم بإتقان ومراجعته بشكل منتظم.",
    image: "https://images.unsplash.com/photo-1551006917-3e0021adf687?w=800&h=600&fit=crop",
    readTime: "7 دقائق",
    author: "د. محمد الأحمد",
    date: "20 مارس 2026",
    category: "الحفظ والمراجعة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-r-4 border-emerald-500 p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      الحفظ الناجح يعتمد على خطة واضحة وثبات يومي. هذا الدليل يجمع لك خطوات عملية تساعدك على الحفظ والمراجعة بثبات.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-emerald-500 rounded-full"></span>
      اختر وقتك الذهبي
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      أفضل وقت للحفظ هو الوقت الذي يكون فيه الذهن صافياً مثل الفجر أو بعد صلاة العشاء مباشرة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-emerald-500 rounded-full"></span>
      قاعدة المقطع الصغير
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      قسّم الصفحة إلى مقاطع قصيرة واحفظ كل مقطع بإتقان قبل الانتقال للذي يليه.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>اقرأ المقطع 5 مرات نظراً.</li>
      <li>ردد المقطع 5 مرات غيباً.</li>
      <li>اربط المقاطع معاً في نهاية الجلسة.</li>
    </ul>
  </div>

  <div class="bg-white border-r-4 border-emerald-500 p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      المراجعة اليومية أهم من كمية الحفظ الجديدة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-emerald-500 rounded-full"></span>
      جدول مراجعة بسيط
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="p-6 rounded-xl bg-gray-50 border">
        <h3 class="text-xl font-bold mb-3">يومياً</h3>
        <p class="text-muted-foreground">راجع آخر صفحة محفوظة + صفحة سابقة.</p>
      </div>
      <div class="p-6 rounded-xl bg-gray-50 border">
        <h3 class="text-xl font-bold mb-3">أسبوعياً</h3>
        <p class="text-muted-foreground">مراجعة شاملة لما تم حفظه خلال الأسبوع.</p>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      اجمع بين حفظ قليل ومراجعة كثيرة، وستلاحظ ثباتاً سريعاً بإذن الله.
    </p>
  </div>
</div>
    `
  },
  // Add similar for id 3-6
  {
    id: 3,
    title: "مخارج الحروف العربية الصحيحة",
    excerpt: "شرح مفصل لمخارج الحروف العربية وكيفية نطقها بشكل صحيح لتحسين قراءة القرآن الكريم.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
    readTime: "6 دقائق",
    author: "الشيخ أحمد السيد",
    date: "25 مارس 2026",
    category: "مخارج الحروف",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      ضبط المخارج هو أساس التلاوة الصحيحة. هنا نعرّفك على المخارج الرئيسية مع أمثلة مبسطة للتطبيق.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      المخارج الخمسة الكبرى
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      تنقسم المخارج إلى: الجوف، الحلق، اللسان، الشفتان، والخيشوم. كل مخرج له حروفه الخاصة.
    </p>
  </div>

  <div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="p-6 rounded-xl bg-gray-50 border">
      <h3 class="text-xl font-bold mb-3">الجوف والحلق</h3>
      <p class="text-muted-foreground">حروف المد الثلاثة من الجوف، وحروف الحلق من أقصى الحلق إلى أدناه.</p>
    </div>
    <div class="p-6 rounded-xl bg-gray-50 border">
      <h3 class="text-xl font-bold mb-3">اللسان والشفتان</h3>
      <p class="text-muted-foreground">أكثر الحروف خروجاً من اللسان، والباء والميم والواو من الشفتين.</p>
    </div>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      تمرين سريع: قارن بين حرفي (س) و(ص) أمام المرآة لتلاحظ اختلاف المخرج.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      معرفة المخارج ثم التدريب العملي هو الطريق الأسرع لتصحيح النطق.
    </p>
  </div>
</div>
    `
  },
  {
    id: 4,
    title: "فوائد تعلم القراءة العربية للأطفال",
    excerpt: "اكتشف الفوائد المتعددة لتعليم الأطفال القراءة العربية وأفضل الطرق لجعل التعلم ممتعاً.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    readTime: "5 دقائق",
    author: "أستاذة فاطمة محمد",
    date: "30 مارس 2026",
    category: "تعليم الأطفال",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      تعليم الطفل القراءة العربية يفتح له أبواب الفهم اللغوي والقرآني. إليك أهم الفوائد وأفضل أساليب التعليم.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      فوائد معرفية ولغوية
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      القراءة تقوي الذاكرة وتوسّع المفردات، وتُحسن النطق والاستيعاب منذ الصغر.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      أساليب تعليم ممتعة
    </h2>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>استخدم القصص المصورة والكلمات الملونة.</li>
      <li>حوّل الحروف إلى ألعاب وبطاقات.</li>
      <li>كافئ الطفل عند التقدم ولو بخطوات صغيرة.</li>
    </ul>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      اجعل القراءة عادة يومية قصيرة بدل جلسات طويلة متقطعة.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      عندما يقترن التعلم بالمتعة، يتحول الطفل إلى قارئ صغير يحب اللغة ويثق بنفسه.
    </p>
  </div>
</div>
    `
  },
  {
    id: 5,
    title: "أحكام النون الساكنة والتنوين",
    excerpt: "دليل شامل لفهم وتطبيق أحكام النون الساكنة والتنوين الأربعة: الإظهار والإدغام والإقلاب والإخفاء.",
    image: "https://images.unsplash.com/photo-1585508889524-eb5a0d8c30af?w=800&h=600&fit=crop",
    readTime: "8 دقائق",
    author: "د. محمد الأحمد",
    date: "5 أبريل 2026",
    category: "أحكام التجويد",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      أحكام النون الساكنة والتنوين من أكثر الأبواب استخداماً في التلاوة. تعرّف هنا على القواعد الأربعة مع أمثلة مبسطة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      الإظهار
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      يظهر صوت النون أو التنوين عند لقاء حروف الحلق الستة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      الإدغام والإقلاب والإخفاء
    </h2>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>الإدغام: إدخال النون في الحرف التالي مع غنة أو بدونها.</li>
      <li>الإقلاب: قلب النون ميماً قبل الباء مع غنة.</li>
      <li>الإخفاء: بين الإظهار والإدغام مع غنة.</li>
    </ul>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      تمرين: اختر آية وحدد مواضع النون الساكنة والتنوين ثم طبّق الحكم المناسب.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      ضبط هذه الأحكام يرفع جودة التلاوة ويزيد وضوح الأداء.
    </p>
  </div>
</div>
    `
  },
  {
    id: 6,
    title: "نصائح للحفاظ على استمرارية التعلم",
    excerpt: "خطوات عملية للبقاء ملتزماً برحلتك التعليمية وتحقيق التقدم المستمر في تعلم القرآن.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    readTime: "4 دقائق",
    author: "الشيخ أحمد السيد",
    date: "10 أبريل 2026",
    category: "النصائح والإرشاد",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      الاستمرارية هي التحدي الأكبر بعد البداية. هذه النصائح العملية تساعدك على الحفاظ على عادتك التعليمية.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خطط صغيرة قابلة للالتزام
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      لا تبدأ بوقت طويل. ابدأ بـ 10-15 دقيقة يومياً ثم زد تدريجياً عند ثبات العادة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      اربط التعلم بعادة ثابتة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      اجعل التعلم بعد صلاة محددة أو قبل النوم، حتى يصبح جزءاً من روتينك اليومي.
    </p>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      سجّل تقدّمك أسبوعياً، فمشاهدة التطور تشجّع على الاستمرار.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      شارك الرحلة مع صديق
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      وجود شريك تعلّم يرفع الالتزام ويضيف روح الحماس.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      الاستمرارية تصنع الفرق الحقيقي. خطوات صغيرة يومية تؤدي لنتائج كبيرة.
    </p>
  </div>
</div>
    `
  },
  {
    id: 7,
    title: "كيف تبدأ بتعلم القراءة العربية من الصفر",
    excerpt: "دليل عملي للمبتدئين لتعلم الحروف والحركات وبناء عادة قراءة يومية بثقة.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    readTime: "6 دقائق",
    author: "أستاذة فاطمة محمد",
    date: "12 أبريل 2026",
    category: "القراءة العربية",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      البداية الصحيحة هي نصف الطريق. في هذا المقال نضع لك خطة واضحة لتعلم القراءة العربية من الصفر مع خطوات يومية بسيطة تضمن تقدماً ثابتاً دون تعقيد.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      الخطوة الأولى: بناء الأساس
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      ابدأ بتعلم أشكال الحروف في أول الكلمة ووسطها وآخرها، ثم انتقل للحركات الأساسية: الفتحة والضمة والكسرة.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>خصص 15 دقيقة يومياً لمراجعة أشكال الحروف.</li>
      <li>استخدم بطاقات أو جداول لتثبيت المعرفة.</li>
      <li>اقرأ بصوت مسموع لتقوية الربط بين الشكل والصوت.</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      الخطوة الثانية: الانتقال للمقاطع
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      بعد إتقان الحروف والحركات، ابدأ بدمجها لتكوين مقاطع قصيرة ثم كلمات بسيطة شائعة.
    </p>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      نصيحة ذهبية: الثبات أهم من الكثرة. 10 دقائق يومياً أفضل من ساعة متقطعة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خطة أسبوعين مختصرة
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="p-6 rounded-xl bg-gray-50 border">
        <h3 class="text-xl font-bold mb-3">الأسبوع الأول</h3>
        <p class="text-muted-foreground">حروف + حركات + قراءة مقاطع قصيرة.</p>
      </div>
      <div class="p-6 rounded-xl bg-gray-50 border">
        <h3 class="text-xl font-bold mb-3">الأسبوع الثاني</h3>
        <p class="text-muted-foreground">كلمات شائعة + جمل بسيطة + مراجعة يومية.</p>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      ابدأ بخطوات صغيرة، وحافظ على الاستمرارية، وستلاحظ خلال أسابيع قليلة تقدماً ملحوظاً في القراءة.
    </p>
  </div>
</div>
    `
  },
  {
    id: 8,
    title: "أساسيات أحكام المد للمبتدئين",
    excerpt: "شرح مبسط لأنواع المدود مع أمثلة عملية تساعدك على تحسين التلاوة.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    readTime: "7 دقائق",
    author: "د. محمد الأحمد",
    date: "14 أبريل 2026",
    category: "أحكام التجويد",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      المدود من أهم أبواب التجويد لأنها تضبط زمن الحروف وتُحسن جمال التلاوة. هذا الدليل يوضح الأنواع الأساسية بأبسط صورة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      ما هو المد؟
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      المد هو إطالة الصوت بحرف من حروف المد (الألف، الواو، الياء) بقدرٍ محدد.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      المد الطبيعي
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      قدره حركتان فقط، ولا يتوقف على سبب. مثل: قال، يقول، قيل.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      المد الفرعي
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      يزداد عن الطبيعي بسبب همز أو سكون، مثل المد المتصل والمد المنفصل والمد اللازم.
    </p>
    <ul class="list-disc pr-6 text-muted-foreground text-lg leading-relaxed">
      <li>المد المتصل: همز بعد حرف المد في كلمة واحدة.</li>
      <li>المد المنفصل: همز بعد حرف المد في كلمتين.</li>
      <li>المد اللازم: سكون أصلي بعد حرف المد.</li>
    </ul>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      تمرين سريع: اختر آية قصيرة وحدد مواضع المد الطبيعي والمد الفرعي.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      فهم أنواع المدود يساعدك على ضبط زمن التلاوة وجمال الصوت. ابدأ بالمد الطبيعي ثم توسع تدريجياً.
    </p>
  </div>
</div>
    `
  },
  {
    id: 9,
    title: "تمارين يومية لتحسين النطق واللفظ",
    excerpt: "مجموعة تمارين قصيرة تساعدك على تقوية المخارج وضبط اللسان في القراءة.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    readTime: "5 دقائق",
    author: "الشيخ أحمد السيد",
    date: "16 أبريل 2026",
    category: "النطق والتلاوة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      النطق السليم يحتاج تدريباً مستمراً. هنا مجموعة تمارين يومية بسيطة لا تتجاوز 10 دقائق تساعدك على تحسين مخارج الحروف.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      تمرين الإحماء
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      ابدأ بقراءة حروف الاستعلاء ثم الاستفال بصوت واضح وبسرعة بطيئة.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      تمرين المخارج المتقاربة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      كرر أزواج الحروف المتقاربة مثل: (س/ص) و(ت/ط) و(ذ/ز) للتمييز الدقيق.
    </p>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      جرب تسجيل صوتك لمدة دقيقة ثم استمع بتركيز لتحديد مواضع التحسين.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      تمرين السرعة المتدرجة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      اقرأ فقرة قصيرة ببطء، ثم بسرعة متوسطة، ثم ارجع للبطء مع نفس الدقة.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      الاستمرارية أهم من طول التمرين. عشر دقائق يومياً ستصنع فرقاً كبيراً خلال شهر واحد.
    </p>
  </div>
</div>
    `
  },
  {
    id: 10,
    title: "برنامج أسبوعي لمراجعة الحفظ",
    excerpt: "خطة عملية لمراجعة القرآن على مدار الأسبوع لضمان التثبيت وعدم النسيان.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    readTime: "6 دقائق",
    author: "د. محمد الأحمد",
    date: "18 أبريل 2026",
    category: "الحفظ والمراجعة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      المراجعة المنتظمة تحافظ على الحفظ وتزيد الإتقان. إليك برنامجاً أسبوعياً واضحاً يمكنك تعديله حسب وقتك.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      توزيع المراجعة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      قسّم محفوظك إلى وحدات صغيرة، وخصص لكل يوم وحدة محددة مع مراجعة سريعة لليوم السابق.
    </p>
  </div>

  <div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="p-6 rounded-xl bg-gray-50 border">
      <h3 class="text-xl font-bold mb-3">من السبت إلى الأربعاء</h3>
      <p class="text-muted-foreground">مراجعة وحدات صغيرة مع تثبيت النقاط الصعبة.</p>
    </div>
    <div class="p-6 rounded-xl bg-gray-50 border">
      <h3 class="text-xl font-bold mb-3">الخميس والجمعة</h3>
      <p class="text-muted-foreground">مراجعة شاملة للأسبوع مع اختبار ذاتي.</p>
    </div>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      خصص 5 دقائق لاختبار نفسك قبل النوم لتثبيت الحفظ.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      انتظامك في المراجعة الأسبوعية هو سر الاستمرارية وثبات الحفظ على المدى الطويل.
    </p>
  </div>
</div>
    `
  },
  {
    id: 11,
    title: "أخطاء شائعة في التلاوة وكيف تتجنبها",
    excerpt: "تعرف على أشهر الأخطاء في التلاوة وخطوات عملية لتصحيحها بسرعة.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    readTime: "7 دقائق",
    author: "أستاذة فاطمة محمد",
    date: "20 أبريل 2026",
    category: "تحسين التلاوة",
    fullContent: `
<div class="prose prose-lg max-w-none">
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-primary p-8 rounded-2xl mb-12">
    <p class="text-xl leading-relaxed text-foreground">
      كثير من الأخطاء في التلاوة تكون بسيطة لكنها تؤثر على الأداء. هنا نلخصها مع حلول عملية لتجنبها.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خطأ السرعة الزائدة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      السرعة تُضعف مخارج الحروف. الحل: اقرأ ببطء مع الالتزام بمواضع الوقف.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خطأ إهمال الغنة
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      الغنة جزء أساسي في بعض الأحكام مثل الإدغام والإخفاء. الحل: تدرب على طول الغنة الصحيح.
    </p>
  </div>

  <div class="bg-white border-r-4 border-primary p-6 rounded-xl mb-12 shadow-sm">
    <p class="text-lg text-foreground font-semibold">
      استمع لقارئ متقن وقلد الأداء ثم قارن تسجيلك معه.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span class="w-2 h-8 bg-primary rounded-full"></span>
      خطأ ترقيق المفخم
    </h2>
    <p class="text-lg leading-relaxed text-muted-foreground mb-6">
      بعض الحروف يجب تفخيمها دائماً مثل ص، ض، ط، ظ. الحل: تمرن على مواضعها في كلمات مختلفة.
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-foreground mb-4">الخلاصة</h3>
    <p class="text-lg leading-relaxed text-muted-foreground">
      تحديد الخطأ خطوة أولى، ومع التدريب اليومي ستصبح التلاوة أكثر صفاء ودقة.
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

