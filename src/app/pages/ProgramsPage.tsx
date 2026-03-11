import { BookOpen, CheckCircle2, GraduationCap, Star } from "lucide-react";
import { useEffect } from "react";

export function ProgramsPage() {
  useEffect(() => {
    document.title = "البرامج التعليمية - أكاديمية إخلاص";
  }, []);

  const programs = [
    {
      title: "برنامج مبادئ القراءة العربية",
      description: "تعلم أساسيات القراءة الصحيحة للحروف والكلمات من البداية",
      icon: <BookOpen className="text-primary" size={48} />,
      forWho: "مناسب للمبتدئين الذين لا يجيدون القراءة أو يواجهون صعوبة في قراءة الحروف العربية",
      outcomes: [
        "التعرف على جميع الحروف العربية ومخارجها",
        "قراءة الكلمات والجمل البسيطة بشكل صحيح",
        "فهم الحركات (الفتحة، الضمة، الكسرة، السكون)",
        "القراءة بطلاقة وثقة",
      ],
      duration: "8 أسابيع - مستوى مبتدئ",
    },
    {
      title: "برنامج تصحيح التلاوة",
      description: "تصحيح الأخطاء الشائعة في قراءة القرآن الكريم",
      icon: <CheckCircle2 className="text-primary" size={48} />,
      forWho: "مناسب لمن يجيد القراءة لكن يرتكب أخطاء في النطق أو يريد تحسين تلاوته للقرآن",
      outcomes: [
        "تصحيح مخارج الحروف",
        "معالجة الأخطاء الشائعة في التلاوة",
        "تحسين جودة النطق والوضوح",
        "القراءة بشكل سليم ومتقن",
      ],
      duration: "6 أسابيع - مستوى متوسط",
    },
    {
      title: "برنامج أحكام التجويد",
      description: "فهم وتطبيق قواعد التجويد الأساسية والمتقدمة",
      icon: <Star className="text-primary" size={48} />,
      forWho: "مناسب لمن يجيد القراءة ويريد إتقان أحكام التجويد لتلاوة القرآن بشكل صحيح",
      outcomes: [
        "إتقان أحكام النون الساكنة والتنوين",
        "فهم المدود وأنواعها",
        "تطبيق أحكام الميم والنون المشددتين",
        "القراءة وفق قواعد التجويد المعتمدة",
      ],
      duration: "10 أسابيع - مستوى متقدم",
    },
    {
      title: "برنامج تحفيظ القرآن الكريم",
      description: "خطة منهجية للحفظ والمراجعة المستمرة",
      icon: <GraduationCap className="text-primary" size={48} />,
      forWho: "مناسب لمن يريد حفظ القرآن الكريم كاملاً أو أجزاء منه مع إتقان التلاوة",
      outcomes: [
        "حفظ متقن مع مراجعة دورية",
        "خطة حفظ مخصصة حسب قدرة الطالب",
        "إتقان التلاوة أثناء الحفظ",
        "متابعة مستمرة ودعم من المعلم",
      ],
      duration: "حسب الخطة الشخصية - جميع المستويات",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">البرامج التعليمية</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            برامج متنوعة ومتخصصة لتعليم القراءة العربية والقرآن الكريم
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className="mb-4">{program.icon}</div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{program.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{program.description}</p>
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                      {program.duration}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* For Who */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">لمن هذا البرنامج؟</h3>
                      <p className="text-muted-foreground leading-relaxed">{program.forWho}</p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        ماذا ستتعلم في هذا البرنامج؟
                      </h3>
                      <ul className="space-y-3">
                        {program.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div>
                      <a
                        href="/#register"
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                      >
                        سجّل الآن في هذا البرنامج
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            غير متأكد من البرنامج المناسب لك؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            سجّل الآن وسنساعدك في تحديد البرنامج الأنسب لمستواك وأهدافك
          </p>
          <a
            href="/#register"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
          >
            سجّل الآن للحصول على استشارة مجانية
          </a>
        </div>
      </section>
    </div>
  );
}