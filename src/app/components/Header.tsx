import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/programs", label: "البرامج التعليمية" },
    { path: "/about", label: "عن الأكاديمية" },
    { path: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-[#2750A9]"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="أكاديمية إخلاص"
              className={`h-12 w-12 object-contain transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
            <div className="hidden sm:block">
              <div
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                أكاديمية إخلاص
              </div>
              <div
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? "text-muted-foreground" : "text-blue-100"
                }`}
              >
                لتعليم القرآن الكريم
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? isScrolled
                      ? "text-primary font-semibold"
                      : "text-white font-semibold border-b-2 border-white pb-1"
                    : isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#register"
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-blue-50"
              }`}
            >
              سجّل الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 border-t pt-4 ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? isScrolled
                        ? "text-primary font-semibold"
                        : "text-white font-semibold"
                      : isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-2 rounded-lg transition-all text-center ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-blue-50"
                }`}
              >
                سجّل الآن
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
