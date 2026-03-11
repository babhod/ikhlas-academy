import { Link } from "react-router";
import { Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="أكاديمية إخلاص" className="h-10 w-10 object-contain" />
              <div>
                <div className="text-lg font-bold text-primary">أكاديمية إخلاص</div>
                <div className="text-xs text-muted-foreground">لتعليم القرآن الكريم</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              أكاديمية متخصصة في تعليم القراءة العربية الصحيحة وتلاوة القرآن الكريم وأحكام التجويد بأسلوب مبسط وفعّال
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                البرامج التعليمية
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                عن الأكاديمية
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">تواصل معنا</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/+963123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+963 123 456 789</span>
              </a>
              <a
                href="mailto:info@ikhlas-academy.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>info@ikhlas-academy.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} أكاديمية إخلاص. جميع الحقوق محفوظة. Powered by Rokinso
          </p>
        </div>
      </div>
    </footer>
  );
}
