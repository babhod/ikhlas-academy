import { RegistrationForm } from "../components/RegistrationForm";
import { BookOpen, Users, GraduationCap, Award, CheckCircle2, Star, User, UserCheck, Clock, Globe, BookMarked, Shield, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import certificateImage from "../../assets/sert.png";
import heroAnimation from "../../assets/animation.json";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export function HomePage() {
  useEffect(() => {
    document.title = "أكاديمية إخلاص - تعليم القرآن الكريم والقراءة العربية";
  }, []);

  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="section-light relative overflow-hidden">

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Right side - Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-right px-4 lg:px-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                نرافقك خطوةً بخطوة لتصبح من أهل القرآن علمًا وعملاً
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
تعليمٌ راسخ للقراءة العربية السليمة، وتحفيظ القرآن الكريم، وضبط التلاوة، في بيئة تعليمية أونلاين تجمع بين الوضوح، والإتقان، ومراعاة الفروق الفردية، للأطفال واليافعين والبالغين.              </p>
              <a
                href="#register"
                className="inline-block bg-primary text-white px-10 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-lg font-bold"
              >
                ابدأ الآن
              </a>
            </div>

            {/* Left side - Lottie Animation */}
            <div className="order-1 lg:order-2 flex justify-center px-4 lg:px-0">
              <div className="relative w-full max-w-md">
                {/* Decorative circles in background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-200/30 rounded-full blur-3xl"></div>
                
                {/* Animation Container */}
                <div className="relative">
                  <Player
                    autoplay
                    loop
                    src={heroAnimation}
                    style={{ height: "100%", width: "100%" }}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section with Registration Form */}
      <section className="section-dark" id="register">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
            {/* Right side - Benefits */}
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
                لماذا نحن
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="text-primary" size={32} />,
                    title: "تعليم مناسب لجميع الأعمار",
                    description: "برامج مصممة بعناية لتناسب الأطفال والبالغين والمبتدئين والمتقدمين"
                  },
                  {
                    icon: <Heart className="text-primary" size={32} />,
                    title: "متابعة فردية مع المعلم",
                    description: "اهتمام شخصي من معلمين مؤهلين لضمان تقدمك المستمر"
                  },
                  {
                    icon: <CheckCircle2 className="text-primary" size={32} />,
                    title: "تصحيح التلاوة خطوة بخطوة",
                    description: "تصحيح دقيق لمخارج الحروف وأحكام التجويد بطريقة علمية"
                  },
                  {
                    icon: <Globe className="text-primary" size={32} />,
                    title: "دروس أونلاين مرنة تناسب مختلف المناطق الزمنية",
                    description: "تعلم من أي مكان في العالم وفي الوقت الذي يناسبك"
                  },
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 items-start bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[color-mix(in_srgb,#2750A9_20%,white)] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left side - Registration Form */}
            <div className="lg:sticky lg:top-24 px-4 lg:px-0">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach Section */}
      <section className="section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ماذا نعلّم في الأكاديمية؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              برامج متنوعة مصممة خصيصاً لتناسب جميع المستويات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="text-primary" size={40} />,
                title: "تعليم مبادئ القراءة العربية",
                description: "تعلم أساسيات القراءة الصحيحة للحروف والكلمات من الصفر",
              },
              {
                icon: <CheckCircle2 className="text-primary" size={40} />,
                title: "تصحيح التلاوة",
                description: "تصحيح الأخطاء الشائعة في قراءة القرآن الكريم",
              },
              {
                icon: <Star className="text-primary" size={40} />,
                title: "أحكام التجويد",
                description: "فهم وتطبيق قواعد التجويد بطريقة مبسطة وعملية",
              },
              {
                icon: <Award className="text-primary" size={40} />,
                title: "تحفيظ القرآن الكريم",
                description: "خطة تدريجية محكمة للحفظ والمراجعة المستمرة",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="mb-4 bg-primary/5 p-4 rounded-lg inline-block">{program.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{program.description}</p>
                <a
                  href="#register"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  سجّل الآن ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Learning Works Section */}
      <section className="section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              كيف تبدأ رحلتك معنا؟
            </h2>
            <p className="text-lg text-[color-mix(in_srgb,#2750A9_20%,white)] max-w-2xl mx-auto">
              خطوات بسيطة لبدء التعلم
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  number: "1",
                  title: "تعبئة نموذج التسجيل",
                  description: "املأ النموذج بمعلوماتك الأساسية",
                },
                {
                  number: "2",
                  title: "التواصل عبر واتساب",
                  description: "تواصل مباشر لتحديد المستوى",
                },
                {
                  number: "3",
                  title: "الانضمام للدروس",
                  description: "ثم الحصول على شهادة إتمام معتمدة",
                },
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/30 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg ring-1 ring-white/35">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[color-mix(in_srgb,#2750A9_20%,white)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Classes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              أنواع الدروس المتاحة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر النوع الذي يناسب احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[color-mix(in_srgb,#2750A9_6%,white)] to-white p-8 rounded-2xl border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-primary" size={32} />
                <h3 className="text-2xl font-bold text-foreground">الدروس الفردية</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">تركيز كامل مع المعلم</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">سرعة تعلم أعلى وتقدم ملحوظ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">مرونة في اختيار الأوقات</span>
                </li>
              </ul>
              <a
                href="#register"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                سجّل الآن
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-500/20 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-green-600" size={32} />
                <h3 className="text-2xl font-bold text-foreground">الدروس الجماعية</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">بيئة تعليمية محفزة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">تكلفة مناسبة للجميع</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">تبادل خبرات مع الزملاء</span>
                </li>
              </ul>
              <a
                href="#register"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                سجّل الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Student Results Section */}
      <section className="section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              نتائج طلاب الأكاديمية
            </h2>
            <p className="text-lg text-[color-mix(in_srgb,#2750A9_20%,white)] max-w-2xl mx-auto">
              قصص نجاح ملهمة من طلابنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "محمد العلي",
                country: "سوريا",
                text: "تحسن واضح في القراءة خلال أسابيع قليلة. المعلمون متمكنون وطريقة التدريس مبسطة جداً.",
              },
              {
                name: "فاطمة حسن",
                country: "الأردن",
                text: "تعلمت أحكام التجويد بطريقة مبسطة وواضحة. الآن أستطيع تلاوة القرآن بشكل صحيح والحمد لله.",
              },
              {
                name: "أحمد خالد",
                country: "لبنان",
                text: "أكاديمية محترمة وأسلوب تعليم مميز. أنصح بها كل من يريد تعلم القراءة الصحيحة للقرآن الكريم.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                شهادة إتمام معتمدة
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                يحصل الطالب بعد إتمام البرنامج واجتياز التقييم على شهادة معتمدة من الأكاديمية
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-accent/30">
              <img
                src={certificateImage}
                alt="شهادة أكاديمية إخلاص"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Majestic Design */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#2750A9", paddingBlock: "clamp(72px, 10vw, 120px)" }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              ابدأ رحلتك الآن
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              انضم الآن إلى مئات الطلاب الذين يتعلمون القراءة الصحيحة وتلاوة القرآن بإتقان في أكاديمية إخلاص
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl">
              <div className="text-center mb-8">
                <div className="bg-white/20 rounded-full p-6 inline-block mb-6 backdrop-blur-sm">
                  <GraduationCap size={64} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">سجّل الآن واحصل على:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mb-8">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="mx-auto mb-3" size={32} />
                    <p className="font-semibold">تقييم مجاني لمستواك</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="mx-auto mb-3" size={32} />
                    <p className="font-semibold">خطة دراسية مخصصة</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="mx-auto mb-3" size={32} />
                    <p className="font-semibold">دروس مع معلمين متخصصين</p>
                  </div>
                </div>
              </div>

              <a
                href="#register"
                className="block w-full bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl text-center shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-[color-mix(in_srgb,#2750A9_6%,white)] hover:scale-105 transform transition-all duration-300"
              >
                سجّل الآن مجاناً
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
