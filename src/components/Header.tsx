import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Scroll to section from another route after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      // Clear state so it won't scroll again on reload
      navigate(location.pathname, { replace: true, state: {} });
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location, navigate]);

  const navLinks = [
    { label: "ABOUT", action: () => handleNavClick("about") },
    { label: "PROGRAMMES", action: () => handleNavClick("programmes") },
    { label: "IMPACT", action: () => handleNavClick("impact") },
    { label: "STORIES", action: () => handleNavClick("stories") },
    { label: "CAREERS", action: () => handleNavClick("careers") },
    { label: "CONTACT", action: () => handleNavClick("contact") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/70 backdrop-blur-sm py-4 border-b border-[#0d233a]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
              <Logo size={44} />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-[13px] font-bold tracking-wider text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <Link
                to="/annual-report"
                className="text-[13px] font-bold tracking-wider text-primary hover:text-accent transition-colors duration-200"
              >
                ANNUAL REPORT
              </Link>

              <Link
                to="/udyam-certificate"
                className="text-[13px] font-bold tracking-wider text-primary hover:text-accent transition-colors duration-200"
              >
                UDYAM CERTIFICATE
              </Link>

              <button
                onClick={() => handleNavClick("partner")}
                className="bg-primary hover:bg-[#1a3d60] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold tracking-wider transition-all duration-200 transform hover:scale-[1.03] shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer"
              >
                Partner with us
                <ArrowUpRight size={14} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-accent focus:outline-none p-1.5 rounded-md hover:bg-[#0d233a]/5 transition-colors cursor-pointer"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu - PLACED OUTSIDE HEADER TO AVOID BACKDROP-FILTER CONTAINMENT */}
      <div
        className={`xl:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-[999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-6 px-5 justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#0d233a]/10">
              <Logo size={36} />
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary hover:text-accent p-1 cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-5 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-[15px] font-bold text-primary hover:text-accent transition-colors duration-200 text-left py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <Link
                to="/annual-report"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-bold text-primary hover:text-accent transition-colors duration-200 py-1"
              >
                ANNUAL REPORT
              </Link>

              <Link
                to="/udyam-certificate"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-bold text-primary hover:text-accent transition-colors duration-200 py-1"
              >
                UDYAM CERTIFICATE
              </Link>
            </nav>
          </div>

          <div className="mt-auto">
            <button
              onClick={() => handleNavClick("partner")}
              className="w-full bg-primary hover:bg-[#1a3d60] text-white py-3 rounded-xl font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Partner with us
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay background when mobile menu is open - PLACED OUTSIDE HEADER */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs xl:hidden z-[998] transition-opacity"
        />
      )}
    </>
  );
};
