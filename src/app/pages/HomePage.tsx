import { RegistrationForm } from "../components/RegistrationForm";
import { BookOpen, Users, GraduationCap, Award, CheckCircle2, Star, User, UserCheck, Clock, Globe, BookMarked, Shield, Target, Heart, BookText, Languages, Mic } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import certificateImage from "../../assets/sert.png";
import heroAnimation from "../../assets/animation.json";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

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
                href="https://wa.me/+905464077736"
                target="_blank"
                rel="noopener noreferrer"
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
                    icon: <Users className="text-white" size={32} />,
                    title: "تعليم مناسب لجميع الأعمار",
                    description: "برامج مصممة بعناية لتناسب الأطفال والبالغين والمبتدئين والمتقدمين"
                  },
                  {
                    icon: <Heart className="text-white" size={32} />,
                    title: "متابعة فردية مع المعلم",
                    description: "اهتمام شخصي من معلمين مؤهلين لضمان تقدمك المستمر"
                  },
                  {
                    icon: <CheckCircle2 className="text-white" size={32} />,
                    title: "تصحيح التلاوة خطوة بخطوة",
                    description: "تصحيح دقيق لمخارج الحروف وأحكام التجويد بطريقة علمية"
                  },
                  {
                    icon: <Globe className="text-white" size={32} />,
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
                icon: <BookMarked className="text-primary" size={40} />,
                title: "برنامج الحفظ",
                description: "حفظ القرآن الكريم بإتقان وثبات",
              },
              {
                icon: <BookText className="text-primary" size={40} />,
                title: "جزء رشيدي",
                description: "تأسيس القراءة العربية من الصفر",
              },
              {
                icon: <Award className="text-primary" size={40} />,
                title: "برنامج لغة عربية – المستوى الأول",
                description: "تقوية مهارات القراءة والفهم",
              },
              {
                icon: <Mic className="text-primary" size={40} />,
                title: "برنامج التلاوة",
                description: "إتقان تلاوة القرآن الكريم",
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
                  href="https://wa.me/+905464077736"
                  target="_blank"
                  rel="noopener noreferrer"
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
                href="https://wa.me/+905464077736"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://wa.me/+905464077736"
                target="_blank"
                rel="noopener noreferrer"
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

          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-7xl mx-auto"
            dir="ltr"
          >
            <CarouselContent>
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
                {
                  name: "سارة محمد",
                  country: "مصر",
                  text: "بدأت من الصفر وأنا الآن أقرأ القرآن الكريم بطلاقه. شكراً لكل القائمين على الأكاديمية.",
                },
                {
                  name: "عمر الشعار",
                  country: "العراق",
                  text: "تجربة مميزة جداً. المعلمون صبورون ويشرحون بطريقة تناسب كل طالب. أنصح الجميع بالانضمام.",
                },
                {
                  name: "نورة عبدالله",
                  country: "السعودية",
                  text: "أول مرة أتعلم فيها القراءة بشكل صحيح. الآن أقرأ وأفهم القرآن وأنقل ذلك لأطفالي.",
                },
                {
                  name: "خالد إبراهيم",
                  country: "الكويت",
                  text: "ممتاز من جميع النواحي. الجدول مرن والأسعار مناسبة. أنصح بها لكل من يريد تعلم القرآن.",
                },
                {
                  name: "ليلى أحمد",
                  country: "تونس",
                  text: "شكراً خاص للمعلمة فهي تشرح بوضوح وصبر. تحسن مستواي بشكل ملحوظ في وقت قصير.",
                },
              ].map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    dir="rtl"
                    className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all h-full min-h-[200px]"
                  >
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                    <p className="text-white/80 mb-4 leading-relaxed italic text-sm line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <UserCheck className="text-white" size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{testimonial.name}</div>
                        <div className="text-white/60 text-xs">{testimonial.country}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-2 bg-white/20 hover:bg-white/30 border-none text-white h-10 w-10" />
            <CarouselNext className="hidden md:flex -right-2 bg-white/20 hover:bg-white/30 border-none text-white h-10 w-10" />
          </Carousel>
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

      {/* Final CTA Section - Ultra Premium Dynamic Design */}
      <section className="relative py-16 lg:py-22 overflow-hidden">
        {/* Layer 1: Dynamic Gradient Background with Diagonal Split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2744] via-[#2750A9] to-[#1a3d7a]"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/30 via-transparent to-blue-900/30"></div>
        </div>

        {/* Layer 5: Floating Particles/Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Layer 6: Light Rays Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-12"></div>
        </div>

        {/* Main Content Container - Asymmetric Layout */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Right Side - Content Card with 3D Perspective */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative" style={{ perspective: '1500px' }}>
                  {/* 3D Floating Card */}
                  <div 
                    className="bg-white rounded-3xl shadow-2xl p-7 md:p-8 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(37, 80, 169, 0.5)'
                    }}
                  >
                    {/* Gradient Accent Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 rounded-3xl"></div>
                    <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

                    {/* Inner Content */}
                    <div className="relative z-10">
                      {/* Decorative Top Badge */}
                      <div className="flex justify-center -mt-8 mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-xl opacity-50"></div>
                          <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-full p-4 shadow-2xl border-4 border-white">
                            <GraduationCap size={44} className="text-white" />
                          </div>
                        </div>
                      </div>
                      {/* Title with Gradient */}
                      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-4 leading-tight">
                        <span className="bg-gradient-to-l from-[#2750A9] via-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ابدأ رحلتك في تعلم القرآن
                        </span>
                        <br />
                        <span className="text-foreground">والقراءة العربية</span>
                      </h2>

                      {/* Supporting Text */}
                      <p className="text-base md:text-lg text-center text-muted-foreground mb-5 leading-relaxed max-w-2xl mx-auto">
                        انضم إلى <span className="font-bold text-primary">مئات الطلاب</span> حول العالم الذين يتعلمون القراءة الصحيحة وتلاوة القرآن الكريم بإتقان
                      </p>

                      {/* Features in Pills */}
                      <div className="flex flex-wrap justify-center gap-2 mb-5">
                        <div className="flex items-center gap-2 bg-gradient-to-l from-primary/10 to-blue-50 px-5 py-3 rounded-full border border-primary/20">
                          <CheckCircle2 className="text-primary" size={20} />
                          <span className="font-semibold text-foreground">تقييم مجاني</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-l from-purple-500/10 to-purple-50 px-5 py-3 rounded-full border border-purple-500/20">
                          <Target className="text-purple-600" size={20} />
                          <span className="font-semibold text-foreground">خطة مخصصة</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-l from-green-500/10 to-green-50 px-5 py-3 rounded-full border border-green-500/20">
                          <Award className="text-green-600" size={20} />
                          <span className="font-semibold text-foreground">شهادة معتمدة</span>
                        </div>
                      </div>

                      {/* CTA Button with Enhanced Effects */}
                      <div className="flex justify-center mb-4">
                        <a
                          href="https://wa.me/+905464077736"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-lg text-center shadow-[0_0_25px_rgba(255,255,255,0.35)] border border-transparent hover:border-primary hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-[color-mix(in_srgb,#2750A9_6%,white)] hover:scale-105 transform transition-all duration-300 hover:text-primary"
                        >
                          سجّل الآن مجاناً
                        </a>
                      </div>
                      {/* Trust Badge */}
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <div className="flex -space-x-2">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 border-2 border-white flex items-center justify-center">
                              <UserCheck size={14} className="text-white" />
                            </div>
                          ))}
                        </div>
                        <p className="text-muted-foreground">
                          <span className="font-bold text-primary">+500</span> طالب وطالبة يثقون بنا
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Shadow Elements for Depth */}
                  <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/10 rounded-3xl blur-3xl -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-2/4 h-2/4 bg-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
                </div>
              </div>

              {/* Left Side - Floating Benefits Stack */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-7">
                {[
                  {
                    icon: <BookOpen size={32} />,
                    title: "معلمون متخصصون",
                    desc: "نخبة من المعلمين المؤهلين",
                    color: "from-blue-500 to-blue-600",
                    shadow: "shadow-blue-500/50"
                  },
                  {
                    icon: <Globe size={32} />,
                    title: "دروس مرنة أونلاين",
                    desc: "تعلم في أي وقت ومن أي مكان",
                    color: "from-purple-500 to-purple-600",
                    shadow: "shadow-purple-500/50"
                  },
                  {
                    icon: <Clock size={32} />,
                    title: "جدول يناسبك",
                    desc: "اختر الأوقات التي تناسب يومك",
                    color: "from-cyan-500 to-cyan-600",
                    shadow: "shadow-cyan-500/50"
                  }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.6s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-white/50">
                      {/* Gradient Accent */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                      <div className="relative flex items-start gap-4">
                        <div className={`flex-shrink-0 bg-gradient-to-br ${benefit.color} p-4 rounded-xl shadow-lg ${benefit.shadow} text-white`}>
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-foreground mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </div>
  );
}
