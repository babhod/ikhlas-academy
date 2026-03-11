import { BookOpen, BookMarked, Mic, Award, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

// Program data interface
interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
  outcomes: string[];
  level: string;
  image: string;
}

// Images from Unsplash (reliable sources)
const programImages = {
  quran: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
  arabic: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
  tilawa: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
  hifz: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
};

// Program image component with fallback
function ProgramImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg" />
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full" />
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-white/40 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-white/40 rounded-bl-2xl" />
    </div>
  );
}

// Single program block component
function ProgramBlock({
  program,
  index,
}: {
  program: Program;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const isDarkSection = index % 2 === 1;

  return (
    <section className={isDarkSection ? "section-dark" : "section-light"}>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Column 1: Visual/Image */}
          <div className="w-full lg:w-1/2">
            <ProgramImage src={program.image} alt={program.title} />
          </div>

          {/* Column 2: Program Information */}
          <div className="w-full lg:w-1/2">
            <div
              className={`p-8 rounded-3xl backdrop-blur-sm ${
                isDarkSection
                  ? "bg-white/10 border border-white/20"
                  : "bg-white/80 border border-white/40 shadow-xl"
              }`}
            >
              {/* Title */}
              <h2
                className={`text-2xl lg:text-3xl font-bold mb-4 ${
                  isDarkSection ? "text-white" : "text-primary"
                }`}
              >
                {program.title}
              </h2>

              {/* Description */}
              <p
                className={`leading-relaxed mb-6 ${
                  isDarkSection ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {program.description}
              </p>

              {/* Learning Outcomes */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    isDarkSection ? "text-white" : "text-foreground"
                  }`}
                >
                  ماذا ستتعلم:
                </h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome, outcomeIndex) => (
                    <li
                      key={outcomeIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className={`flex-shrink-0 mt-0.5 ${
                          isDarkSection ? "text-amber-400" : "text-primary"
                        }`}
                        size={20}
                      />
                      <span
                        className={
                          isDarkSection ? "text-white/90" : "text-muted-foreground"
                        }
                      >
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Badge and CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/20">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDarkSection
                      ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                      : "bg-primary/10 text-primary border border-primary/20"
                  }`}
                >
                  {program.level}
                </span>
                <a
                  href="https://wa.me/+905464077736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg ${
                    isDarkSection
                      ? "bg-amber-500 text-white hover:bg-amber-400 hover:shadow-amber-500/25"
                      : "bg-primary text-white hover:bg-primary/90 hover:shadow-primary/25"
                  }`}
                >
                  سجل في البرنامج
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramsPage() {
  useEffect(() => {
    document.title = "البرامج التعليمية - أكاديمية إخلاص";
  }, []);

  const programs: Program[] = [
    {
      title: "جزء رشيدي",
      description:
        "برنامج متكامل لتعلم قراءة جزء عمّ بطلاقة وفهم واضح. نبدأ معك من الأساسيات ونصل بك إلى المستوى المتقدم في تلاوة الجزء بشكل صحيح ومتقن.",
      icon: <BookOpen size={40} />,
      outcomes: [
        "تعلم قراءة الحروف العربية بشكل صحيح",
        "فهم مخارج الحروف العربية ومكان النطق",
        "قراءة جزء عمّ بطلاقة وثقة",
        "فهم معاني الكلمات والجمل",
        "تحسين النطق والتلفظ",
        "الحصول على شهادة إتمام البرنامج",
      ],
      level: "مبتدئ - متقدم",
      image: programImages.quran,
    },
    {
      title: "برنامج لغة عربية مستوى أول",
      description:
        "ابدأ رحلتك في تعلم اللغة العربية من الصفر مع منهج متكامل يركز على القراءة والكتابة والفهم. مناسب لجميع الأعمار والجنسيات.",
      icon: <Award size={40} />,
      outcomes: [
        "التعرف على الحروف العربية ومخارجها",
        "تعلم القراءة والكتابة بشكل صحيح",
        "فهم القواعد الأساسية للغة العربية",
        "بناء مفردات عربية جديدة",
        "قراءة نصوص عربية بسيطة",
        "التواصل باللغة العربية الأساسية",
      ],
      level: "مستوى أول - للمبتدئين",
      image: programImages.arabic,
    },
    {
      title: "برنامج تلاوة",
      description:
        "برنامج متخصص في تحسين تلاوة القرآن الكريم وتصحيح الأخطاء الشائعة. مع معلمين متخصصين ستصل إلى تلاوة قرآنية صحيحة ومتقنة.",
      icon: <Mic size={40} />,
      outcomes: [
        "تصحيح مخارج الحروف العربية",
        "تعلم أحكام التجويد الأساسية",
        "معالجة الأخطاء الشائعة في التلاوة",
        "تحسين جودة النطق والوضوح",
        "تلاوة القرآن بشكل صحيح ومتقن",
        "الحصول على شهادة معتمدة",
      ],
      level: "متوسط - متقدم",
      image: programImages.tilawa,
    },
    {
      title: "برنامج حفظ",
      description:
        "خطة منهجية ومنظمة لحفظ القرآن الكريم مع مراجعة دورية لضمان الثبات والحفظ المتقن. مع متابعة مستمرة من المعلمين المتخصصين.",
      icon: <BookMarked size={40} />,
      outcomes: [
        "حفظ القرآن الكريم بشكل متقن",
        "مراجعة دورية للحفاظ على الحفظ",
        "خطة حفظ مخصصة حسب قدراتك",
        "متابعة مستمرة مع المعلم",
        "إتقان التلاوة أثناء الحفظ",
        "تحفيز ودعم مستمر طوال الرحلة",
      ],
      level: "جميع المستويات",
      image: programImages.hifz,
    },
  ];

  return (
    <div>
      {/* Header - Unchanged */}
      <section className="bg-gradient-to-br from-primary to-[color-mix(in_srgb,#2750A9_85%,black)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">البرامج التعليمية</h1>
          <p className="text-xl text-[color-mix(in_srgb,#2750A9_20%,white)] max-w-2xl mx-auto">
            برامج متنوعة ومتخصصة لتعلم القراءة العربية والقرآن الكريم بأفضل الطرق الحديثة
          </p>
        </div>
      </section>

      {/* Programs - Alternating Layout */}
      {programs.map((program, index) => (
        <ProgramBlock key={index} program={program} index={index} />
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
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
              className="inline-block bg-primary text-white px-10 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-primary/25 transform hover:scale-105"
            >
              سجّل الآن للحصول على استشارة مجانية
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

