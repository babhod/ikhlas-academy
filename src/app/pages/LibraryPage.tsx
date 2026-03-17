import { useState, useEffect } from "react";
import { BookOpen, Video, Clock, ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import type { ArticleData } from "../data/articles";
import { articles } from "../data/articles";

export function LibraryPage() {
  const [activeTab, setActiveTab] = useState<"articles" | "videos">("articles");

  useEffect(() => {
    document.title = "المكتبة التعليمية - أكاديمية إخلاص";
  }, []);

  const libraryArticles: ArticleData[] = articles.slice(0, 7);

  const videos = [
    {
      id: 1,
      title: "مقدمة في علم التجويد",
      description: "شرح مبسط لعلم التجويد وأهميته في تلاوة القرآن الكريم بطريقة صحيحة.",
      thumbnail: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=800&h=600&fit=crop",
      duration: "15:30"
    },
    {
      id: 2,
      title: "كيفية نطق الحروف الهجائية",
      description: "درس عملي لتعليم النطق الصحيح للحروف العربية من مخارجها.",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      duration: "12:45"
    },
    {
      id: 3,
      title: "أحكام المد في التلاوة",
      description: "شرح تفصيلي لأنواع المدود وأحكامها مع أمثلة تطبيقية من القرآن الكريم.",
      thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
      duration: "18:20"
    },
    {
      id: 4,
      title: "نصائح لتحفيظ القرآن للأطفال",
      description: "أساليب مبتكرة وممتعة لتحفيظ الأطفال القرآن الكريم بطريقة تفاعلية.",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      duration: "10:15"
    },
    {
      id: 5,
      title: "تطبيق عملي لأحكام الإدغام",
      description: "أمثلة تطبيقية من القرآن الكريم لتوضيح أحكام الإدغام بأنواعه.",
      thumbnail: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=800&h=600&fit=crop",
      duration: "14:50"
    },
    {
      id: 6,
      title: "كيف تضبط تلاوتك في شهر",
      description: "برنامج مكثف لمدة شهر لتحسين تلاوتك وإتقان أحكام التجويد الأساسية.",
      thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
      duration: "20:00"
    }
  ];

  return (
    <div>
      {/* Hero Section - Matches AboutPage header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            المكتبة التعليمية
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            استكشف مجموعة متنوعة من المقالات والفيديوهات التعليمية التي تساعدك على تحسين تلاوتك وفهم أحكام التجويد والقراءة العربية الصحيحة
          </p>
          <div className="flex justify-center gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">{libraryArticles.length}</div>
              <div className="text-sm text-primary-foreground/80">مقالة تعليمية</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">{videos.length}</div>
              <div className="text-sm text-primary-foreground/80">فيديو تعليمي</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">+50</div>
              <div className="text-sm text-primary-foreground/80">ساعة محتوى</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">مجاناً</div>
              <div className="text-sm text-primary-foreground/80">للجميع</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Navigation Tabs */}
      <section className="bg-white border-b sticky top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-center gap-4 py-6">
            <button
              onClick={() => setActiveTab("articles")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === "articles"
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-foreground hover:bg-gray-200"
              }`}
            >
              <BookOpen size={24} />
              <span>المقالات</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                activeTab === "articles" ? "bg-white/20" : "bg-white"
              }`}>
                {articles.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === "videos"
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-foreground hover:bg-gray-200"
              }`}
            >
              <Video size={24} />
              <span>الفيديوهات</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                activeTab === "videos" ? "bg-white/20" : "bg-white"
              }`}>
                {videos.length}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      {activeTab === "articles" && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  مقالات تعليمية متنوعة
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  مجموعة من المقالات المفيدة لتحسين فهمك وممارستك للقراءة والتلاوة
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {libraryArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/library/article/${article.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        <span className="text-sm font-semibold text-foreground">{article.readTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>اقرأ المزيد</span>
                        <ArrowLeft size={18} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Videos Section */}
      {activeTab === "videos" && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  فيديوهات تعليمية مميزة
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  دروس مرئية مفصلة تساعدك على إتقان التلاوة والتجويد
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative h-56 overflow-hidden bg-gray-200 cursor-pointer">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-5 group-hover:scale-110 transition-transform">
                          <Play size={32} className="text-primary fill-primary" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <span className="text-sm font-semibold text-white">{video.duration}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section - Matches AboutPage CTA style */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ابدأ رحلتك في تعلم القرآن واللغة العربية معنا
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            انضم إلى أكاديمية إخلاص واستفد من برامجنا التعليمية المتميزة مع معلمين متخصصين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#register"
              className="group relative inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>سجّل الآن</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l-5 5 5 5" />
              </svg>
            </a>

            <a
              href="/programs"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-primary-foreground px-10 py-5 rounded-xl font-bold text-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <span>تصفح البرامج</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
