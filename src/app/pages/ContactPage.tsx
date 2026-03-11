import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function ContactPage() {
  useEffect(() => {
    document.title = "تواصل معنا - أكاديمية إخلاص";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success message
    setSubmitted(true);

    // Prepare WhatsApp message
    const whatsappMessage = `
مرحباً، أنا ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}

رسالتي:
${formData.message}
    `.trim();

    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      const whatsappNumber = "+963123456789";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك التعليمية
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">معلومات التواصل</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  يمكنك التواصل معنا عبر أي من الوسائل التالية، ونحن سعداء بالرد على استفساراتك
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/+963123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-green-50 border border-green-200 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="bg-green-500 p-3 rounded-lg">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">واتساب</h3>
                    <p className="text-muted-foreground">+963 123 456 789</p>
                    <p className="text-sm text-green-600 mt-1">متاح 24/7</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">الهاتف</h3>
                    <p className="text-muted-foreground" dir="ltr">+963 123 456 789</p>
                    <p className="text-sm text-muted-foreground mt-1">السبت - الخميس: 9 صباحاً - 9 مساءً</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="bg-accent p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">info@ikhlas-academy.com</p>
                    <p className="text-sm text-muted-foreground mt-1">سنرد خلال 24 ساعة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="bg-secondary p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">المنطقة</h3>
                    <p className="text-muted-foreground">نخدم طلاباً من سوريا، لبنان، الأردن، وفلسطين</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={32} />
                  <h3 className="text-xl font-bold">ساعات العمل</h3>
                </div>
                <div className="space-y-2 text-blue-100">
                  <div className="flex justify-between">
                    <span>السبت - الخميس:</span>
                    <span className="font-semibold text-white">9:00 ص - 9:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة:</span>
                    <span className="font-semibold text-white">عطلة أسبوعية</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-2">أرسل لنا رسالة</h2>
                <p className="text-muted-foreground mb-6">املأ النموذج وسنتواصل معك في أقرب وقت</p>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">تم إرسال رسالتك بنجاح</h3>
                    <p className="text-muted-foreground">سيتم تحويلك إلى واتساب للتواصل المباشر</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        الاسم <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="أدخل اسمك"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="+963 xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        رسالتك <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        placeholder="اكتب رسالتك أو استفسارك هنا..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
                    >
                      إرسال الرسالة
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
            <p className="text-lg text-muted-foreground mb-8">
              قبل التواصل معنا، قد تجد إجابتك في الأسئلة الشائعة
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl text-right border border-gray-200">
                <h3 className="font-bold text-foreground mb-2">كيف تتم الدروس؟</h3>
                <p className="text-muted-foreground text-sm">
                  الدروس تتم عبر الإنترنت بشكل مباشر مع المعلم عبر منصات التعليم الإلكتروني
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-right border border-gray-200">
                <h3 className="font-bold text-foreground mb-2">هل الدروس مناسبة للمبتدئين؟</h3>
                <p className="text-muted-foreground text-sm">
                  نعم، لدينا برامج خاصة للمبتدئين تبدأ من الأساسيات
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-right border border-gray-200">
                <h3 className="font-bold text-foreground mb-2">كم مدة البرنامج؟</h3>
                <p className="text-muted-foreground text-sm">
                  تختلف المدة حسب البرنامج ومستوى الطالب، من 6 إلى 12 أسبوعاً عادة
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-right border border-gray-200">
                <h3 className="font-bold text-foreground mb-2">هل يمكن اختيار وقت الدرس؟</h3>
                <p className="text-muted-foreground text-sm">
                  نعم، نوفر مرونة في اختيار أوقات الدروس لتناسب جدولك
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}