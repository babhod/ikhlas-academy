import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "+963123456789";
  const message = "السلام عليكم، أرغب في الاستفسار عن دورات الأكاديمية";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50 flex items-center gap-2"
      aria-label="راسلنا على واتساب"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline font-medium">راسلنا على واتساب</span>
    </a>
  );
}
