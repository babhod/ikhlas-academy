import { Heart, Target, Users, Award } from "lucide-react";
import logo from "../../assets/logo.png";
import { useEffect } from "react";

export function AboutPage() {
  useEffect(() => {
    document.title = "عن الأكاديمية - أكاديمية إخلاص";
  }, []);

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">عن أكاديمية إخلاص</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              رسالتنا هي نشر العلم وتعليم القرآن الكريم بأسلوب مبسط وفعّال
            </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="أكاديمية إخلاص" className="h-32 w-32 object-contain" />
            </div>
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">من نحن؟</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                أكاديمية إخلاص هي منصة تعليمية متخصصة في تعليم القراءة العربية الصحيحة وتلاوة القرآن
                الكريم عبر الإنترنت. تأسست الأكاديمية بهدف خدمة المسلمين في جميع أنحاء العالم، خصوصاً
                في منطقة الشام، من خلال تقديم برامج تعليمية عالية الجودة ومتاحة للجميع.
              </p>
              <p>
                نؤمن بأن تعلم القرآن الكريم وإتقان تلاوته هو حق لكل مسلم، ولذلك نسعى لتسهيل هذه العملية
                من خلال معلمين متخصصين وأساليب تدريس مبسطة وفعّالة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">قيمنا ومبادئنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="text-primary" size={48} />,
                title: "الإخلاص",
                description: "نعمل بإخلاص لله تعالى في تعليم كتابه الكريم",
              },
              {
                icon: <Target className="text-primary" size={48} />,
                title: "الإتقان",
                description: "نسعى للتميز والإتقان في كل ما نقدمه من برامج",
              },
              {
                icon: <Users className="text-primary" size={48} />,
                title: "التيسير",
                description: "نجعل التعلم سهلاً ومتاحاً للجميع بأسلوب مبسط",
              },
              {
                icon: <Award className="text-primary" size={48} />,
                title: "الجودة",
                description: "نحرص على تقديم أعلى مستويات الجودة التعليمية",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gradient-to-br from-[color-mix(in_srgb,#2750A9_6%,white)] to-white p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نسعى لتمكين المسلمين من إتقان القراءة العربية وتلاوة القرآن الكريم بشكل صحيح، من خلال
                  برامج تعليمية متخصصة ومعلمين أكفاء، مع التركيز على التيسير والجودة.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-500/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون المنصة الرائدة في تعليم القرآن الكريم واللغة العربية عبر الإنترنت في منطقة
                  الشام والعالم العربي، مع الحفاظ على أعلى معايير الجودة والإخلاص.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">منهجنا التعليمي</h2>
            <div className="space-y-6">
              {[
                {
                  title: "التدريس المباشر عبر الإنترنت",
                  description:
                    "دروس مباشرة مع معلمين متخصصين عبر منصات التعلم الإلكتروني، مما يتيح التفاعل المباشر والتصحيح الفوري",
                },
                {
                  title: "برامج مصممة خصيصاً للبالغين",
                  description:
                    "نفهم احتياجات البالغين في التعلم ونقدم برامج تراعي وقتهم ومسؤولياتهم مع أساليب تدريس فعّالة",
                },
                {
                  title: "المتابعة الفردية",
                  description:
                    "نوفر متابعة شخصية لكل طالب لضمان تقدمه وتحقيق أهدافه التعليمية",
                },
                {
                  title: "مرونة في المواعيد",
                  description:
                    "نوفر مرونة في اختيار أوقات الدروس لتناسب جميع الطلاب في مختلف المناطق الزمنية",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-[color-mix(in_srgb,#2750A9_85%,black)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى عائلة أكاديمية إخلاص</h2>
          <p className="text-xl text-[color-mix(in_srgb,#2750A9_20%,white)] mb-8 max-w-2xl mx-auto">
            ابدأ رحلتك التعليمية معنا اليوم
          </p>
          <a
            href="https://wa.me/+905464077736"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            سجّل الآن
          </a>
        </div>
      </section>
    </div>
  );
}
