import { BookOpen, BookMarked, Mic, Award, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export function ProgramsPage() {
  useEffect(() => {
    document.title = "البرامج التعليمية - أكاديمية إخلاص";
  }, []);

  const programs = [
    {
      title: "جزء رشيدي",
      description: "برنامج متكامل لتعلم قراءة جزء عمّ بطلاقة وفهم واضح. نبدأ معك من الأساسيات ونصل بك إلى المستوى المتقدم في تلاوة الجزء بشكل صحيح ومتقن.",
      icon: <BookOpen className="text-primary" size={40} />,
      outcomes: [
        "تعلم قراءة الحروف العربية بشكل صحيح",
        "فهم مخارج الحروف العربية ومكان النطق",
        "قراءة جزء عمّ بطلاقة وثقة",
        "فهم معاني الكلمات والجمل",
        "تحسين النطق والتلفظ",
        "الحصول على شهادة إتمام البرنامج",
      ],
      level: "مبتدئ - متقدم",
    },
    {
      title: "برنامج لغة عربية مستوى أول",
      description: "ابدأ رحلتك في تعلم اللغة العربية من الصفر مع منهج متكامل يركز على القراءة والكتابة والفهم. مناسب لجميع الأعمار والجنسيات.",
      icon: <Award className="text-primary" size={40} />,
      outcomes: [
        "التعرف على الحروف العربية ومخارجها",
        "تعلم القراءة والكتابة بشكل صحيح",
        "فهم القواعد الأساسية للغة العربية",
        "بناء مفردات عربية جديدة",
        "قراءة نصوص عربية بسيطة",
        "التواصل باللغة العربية الأساسية",
      ],
      level: "مستوى أول - للمبتدئين",
    },
    {
      title: "برنامج تلاوة",
      description: "برنامج متخصص في تحسين تلاوة القرآن الكريم وتصحيح الأخطاء الشائعة. مع معلمين متخصصين ستصل إلى تلاوة قرآنية صحيحة ومتقنة.",
      icon: <Mic className="text-primary" size={40} />,
      outcomes: [
        "تصحيح مخارج الحروف العربية",
        "تعلم أحكام التجويد الأساسية",
        "معالجة الأخطاء الشائعة في التلاوة",
        "تحسين جودة النطق والوضوح",
        "تلاوة القرآن بشكل صحيح ومتقن",
        "الحصول على شهادة معتمدة",
      ],
      level: "متوسط - متقدم",
    },
    {
      title: "برنامج حفظ",
      description: "خطة منهجية ومنظمة لحفظ القرآن الكريم مع مراجعة دورية لضمان الثبات والحفظ المتقن. مع متابعة مستمرة من المعلمين المتخصصين.",
      icon: <BookMarked className="text-primary" size={40} />,
      outcomes: [
        "حفظ القرآن الكريم بشكل متقن",
        "مراجعة دورية للحفاظ على الحفظ",
        "خطة حفظ مخصصة حسب قدراتك",
        "متابعة مستمرة مع المعلم",
        "إتقان التلاوة أثناء الحفظ",
        "تحفيز ودعم مستمر طوال الرحلة",
      ],
      level: "جميع المستويات",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-[color-mix(in_srgb,#2750A9_85%,black)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">البرامج التعليمية</h1>
          <p className="text-xl text-[color-mix(in_srgb,#2750A9_20%,white)] max-w-2xl mx-auto">
            برامج متنوعة ومتخصصة لتعلم القراءة العربية والقرآن الكريم بأفضل الطرق الحديثة
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-[0_0_30px_rgba(39,80,169,0.2)] hover:scale-[1.02] transition-all duration-300"
              >
                {/* Top: Icon and Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {program.icon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{program.title}</h2>
                </div>

                {/* Middle: Description */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Learning Outcomes */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-foreground mb-3">ماذا ستتعلم:</h3>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-muted-foreground text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Badge and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                  <a
                    href="https://wa.me/+905464077736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary transition-colors duration-300"
                  >
                    سجل الآن
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            غير متأكد من البرنامج المناسب لك؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            سجّل الآن وسنساعدك في تحديد البرنامج الأنسب لمستواك وأهدافك
          </p>
          <a
            href="https://wa.me/+905464077736"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
          >
            سجّل الآن للحصول على استشارة مجانية
          </a>
        </div>
      </section>
    </div>
  );
}
