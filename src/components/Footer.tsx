import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUp, FileText, Landmark } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1b2d] text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo & Vision Block */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white/95 p-3.5 rounded-xl inline-block self-start shadow-inner">
              <Logo size={42} />
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm">
              Empowering individuals, strengthening communities, and creating sustainable livelihoods through quality skill development and vocational training since 2024.
            </p>
            <div className="flex gap-4">
              <Link
                to="/annual-report"
                className="flex items-center gap-1.5 text-[13px] bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
              >
                <FileText size={15} className="text-accent" />
                Annual Report
              </Link>
              <Link
                to="/udyam-certificate"
                className="flex items-center gap-1.5 text-[13px] bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
              >
                <Landmark size={15} className="text-accent" />
                Udyam Certificate
              </Link>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-accent text-[15px] font-extrabold tracking-wider uppercase">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: "About Us", target: "about" },
                { label: "Our Approach", target: "approach" },
                { label: "Training Programmes", target: "programmes" },
                { label: "Major Projects", target: "projects" },
                { label: "Impact & Reach", target: "impact" },
                { label: "Success Stories", target: "stories" },
                { label: "Gallery & Events", target: "gallery" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.target);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="text-gray-400 hover:text-white text-[14px] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Card (Matches input_file_1.png) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-accent text-[15px] font-extrabold tracking-wider uppercase">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col gap-5 text-gray-300">
              
              {/* Head Office Address */}
              <div className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-white text-[14px] font-bold">Office Address (Head Office)</h4>
                  <p className="text-[13px] text-gray-400 mt-1 leading-relaxed">
                    94/2, Hanuman Colony, Near Maruti Nexa Service Centre, Sukhpura Chowk, Rohtak — 124001, Haryana
                  </p>
                </div>
              </div>

              {/* Registered Office Address */}
              <div className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-white text-[14px] font-bold">Registered Office</h4>
                  <p className="text-[13px] text-gray-400 mt-1 leading-relaxed">
                    H. No. 108, BLK-G Siraspur, Bhagat Singh Park, Siraspur, North West Delhi — 110042
                  </p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <div>
                  <h4 className="text-white text-[14px] font-bold">Email Addresses</h4>
                  <div className="flex flex-wrap gap-x-4 text-[13px] text-gray-400 mt-0.5">
                    <a href="mailto:progresspathfoundation24@gmail.com" className="hover:text-white transition-colors">
                      progresspathfoundation24@gmail.com
                    </a>
                    <span className="text-gray-600">|</span>
                    <a href="mailto:uavirender@gmail.com" className="hover:text-white transition-colors">
                      uavirender@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <div>
                  <h4 className="text-white text-[14px] font-bold">Phone Numbers</h4>
                  <div className="flex gap-4 text-[13px] text-gray-400 mt-0.5">
                    <a href="tel:+919355350397" className="hover:text-white transition-colors">
                      +91 93553 50397
                    </a>
                    <span className="text-gray-600">|</span>
                    <a href="tel:+919468307157" className="hover:text-white transition-colors">
                      +91 94683 07157
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[12px] text-gray-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Progress Path Foundation. All Rights Reserved. Established in 2024.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span className="text-gray-400 tracking-wider">Measure Skills. Empower Communities. Create Opportunities.</span>
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-2.5 rounded-full transition-all border border-white/5 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
