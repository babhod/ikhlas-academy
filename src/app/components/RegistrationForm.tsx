import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface RegistrationFormProps {
  variant?: "default" | "compact";
}

export function RegistrationForm({ variant = "default" }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    country: "",
    whatsapp: "",
    level: "",
    goal: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success message
    setSubmitted(true);

    // Prepare WhatsApp message
    const message = `
مرحباً، أنا ${formData.fullName}
العمر: ${formData.age}
البلد: ${formData.country}
المستوى في القراءة: ${formData.level}
الهدف من الدراسة: ${formData.goal}

أرغب في التسجيل في الأكاديمية
    `.trim();

    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      const whatsappNumber = "+963123456789";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="text-green-600" size={40} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-3">تم استلام طلبك بنجاح</h3>
        <p className="text-muted-foreground">
          سيتم تحويلك الآن إلى واتساب للتواصل مع إدارة الأكاديمية
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-primary mb-2">سجّل الآن للانضمام إلى الدروس</h2>
      <p className="text-sm text-muted-foreground mb-6">املأ النموذج وسنتواصل معك فوراً</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            الاسم الكامل <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="أدخل اسمك الكامل"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              العمر <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="18"
              max="100"
              className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="مثال: 25"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-2">
              البلد <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">اختر البلد</option>
              <option value="سوريا">سوريا</option>
              <option value="لبنان">لبنان</option>
              <option value="الأردن">الأردن</option>
              <option value="فلسطين">فلسطين</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
            رقم واتساب <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="+963 xxx xxx xxx"
          />
        </div>

        <div>
          <label htmlFor="level" className="block text-sm font-medium mb-2">
            المستوى في القراءة <span className="text-red-500">*</span>
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">اختر المستوى</option>
            <option value="مبتدئ">مبتدئ</option>
            <option value="متوسط">متوسط</option>
            <option value="جيد">جيد</option>
          </select>
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-medium mb-2">
            الهدف من الدراسة <span className="text-red-500">*</span>
          </label>
          <textarea
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            placeholder="مثال: تعلم القراءة الصحيحة وتحسين التلاوة"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
        >
          إرسال الطلب
        </button>
      </form>
    </div>
  );
}
