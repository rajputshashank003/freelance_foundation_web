import React, { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Layers,
  Heart,
  ChevronRight,
  Cpu,
  Smartphone,
  PhoneCall,
  Scissors,
  Zap,
  BookOpen,
  UserCheck,
  Building,
  Target,
  Sparkles,
  CheckCircle,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertTriangle
} from "lucide-react";
import heroImage from "../../assets/hero_technician.png";
import successApparel from "../../assets/success_apparel.png";
import successElectrician from "../../assets/success_electrician.png";
import successRetail from "../../assets/success_retail.png";
import galleryClassroom from "../../assets/gallery_classroom.png";
import galleryGraduation from "../../assets/gallery_graduation.png";

export const HomeScreen: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [showToast, setShowToast] = useState(false);
  const formSubmitted = false;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // Smooth Scroll Helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#fbf9f4] via-[#f7f4ec] to-[#ebf3f7] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left animate-slide-up">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff2eb] border border-accent/20 text-accent font-bold tracking-wider text-[11px] uppercase mb-6">
                <Sparkles size={13} />
                Empowering India Since 2024
              </span>
              <h1 className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold tracking-tight text-primary font-serif leading-[1.12] mb-6">
                Empowering <span className="italic font-normal">individuals</span> through skills & livelihoods.
              </h1>
              <p className="text-[15px] sm:text-[17px] text-muted leading-relaxed max-w-xl mb-8">
                We build a skilled, employable, and future-ready workforce through industry-aligned training, strategic partnerships, and community-centric action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("programmes")}
                  className="bg-primary hover:bg-[#1a3d60] text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore programmes
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white hover:bg-gray-50 text-primary border border-gray-200 hover:border-gray-300 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wider shadow-sm transition-all flex items-center justify-center cursor-pointer"
                >
                  Our story
                </button>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Decorative border frames */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60 -z-10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#ff7a45] rounded-2xl -z-10 opacity-15" />
                
                {/* Main Hero Image */}
                <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={heroImage}
                    alt="Indian female technician working in vocational training electronics lab"
                    className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square md:aspect-[4/3] scale-100 hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* Micro stat Badge inside Hero */}
                <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 animate-bounce-slow max-w-[190px]">
                  <div className="bg-[#fff2eb] p-2 rounded-xl text-accent">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <div className="text-[20px] font-extrabold text-primary leading-none">1,520+</div>
                    <div className="text-[11px] font-bold text-muted mt-1 leading-tight">Individuals Skilled</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NUMBERS STRIP SECTION (Matches input_file_3.png) */}
      <section id="impact" className="bg-[#0b1b2d] py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { num: "1,520+", label: "Individuals skilled", icon: <Users size={22} /> },
              { num: "355+", label: "Successful placements", icon: <Briefcase size={22} /> },
              { num: "300+", label: "Women empowered", icon: <Heart size={22} /> },
              { num: "400", label: "Electricians certified", icon: <Award size={22} /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start text-center sm:text-left border-r last:border-r-0 border-white/10 pl-0 sm:pl-6 first:pl-0"
              >
                <div className="text-[#ff7a45] mb-2">{stat.icon}</div>
                <div className="text-white text-[32px] sm:text-[40px] font-serif font-bold leading-none">
                  {stat.num}
                </div>
                <div className="text-gray-400 text-[13px] sm:text-[14px] font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATIONS SECTION */}
      <section className="py-14 bg-white border-b border-[#0d233a]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
            OUR COLLABORATIONS
          </span>
          <h2 className="text-[24px] sm:text-[28px] text-primary font-serif font-bold mt-2 mb-8">
            Trusted by & Collaborating with Leading Institutions
          </h2>
          <div className="flex justify-center items-center px-4">
            <img
              src="/all_logos_combined.png"
              alt="Our Collaborations and Partnerships"
              className="max-w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 max-h-[140px] sm:max-h-[180px]"
            />
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Who We Are block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5">
              <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
                WHO WE ARE
              </span>
              <h2 className="text-[30px] sm:text-[38px] text-primary font-serif font-bold leading-tight mt-2">
                Bridging the gap between industry and workforce.
              </h2>
            </div>
            <div className="lg:col-span-7 border-l-4 border-accent pl-6 py-2">
              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
                Progress Path Foundation is a social impact organization committed to advancing skill development, vocational education, and livelihood promotion across India. Established in 2024, we bridge the gap between industry requirements and workforce capabilities by delivering practical, market-oriented training aligned with evolving economic needs.
              </p>
            </div>
          </div>

          {/* Vision & Mission grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Vision card */}
            <div className="bg-[#fcfaf7] p-8 sm:p-10 rounded-2xl border border-[#0d233a]/5 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="bg-[#fff2eb] p-3 rounded-xl inline-block text-accent mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-primary text-[20px] font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed">
                To create a future where every individual has access to quality skills, meaningful employment, and opportunities for lifelong growth, laying down the building blocks for an inclusive and prosperous India.
              </p>
            </div>

            {/* Mission card */}
            <div className="bg-[#ebf3f7]/40 p-8 sm:p-10 rounded-2xl border border-[#0d233a]/5 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="bg-primary/5 p-3 rounded-xl inline-block text-primary mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-primary text-[20px] font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed">
                To improve business productivity and youth employability by delivering industry-aligned skill training programmes that empower individuals, strengthen communities, and contribute to sustainable socio-economic development.
              </p>
            </div>

          </div>

          {/* Values Section */}
          <div className="border-t border-[#0d233a]/10 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
                GUIDING PILLARS
              </span>
              <h3 className="text-[28px] text-primary font-serif font-bold mt-2">
                Our Core Values
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted mt-3">
                These core principles define our culture, dictate our decisions, and drive our execution framework.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Excellence",
                  desc: "Committed to quality, professionalism, and continuous improvement in all training delivery.",
                  icon: <Award size={20} />
                },
                {
                  title: "Innovation",
                  desc: "Encouraging creative thinking and embracing modern technologies for future-oriented learning.",
                  icon: <Cpu size={20} />
                },
                {
                  title: "Collaboration",
                  desc: "Building meaningful, long-term partnerships with industry, government, and communities.",
                  icon: <Users size={20} />
                },
                {
                  title: "Adaptability",
                  desc: "Remaining agile and responsive to shifting industry requirements and educational trends.",
                  icon: <Layers size={20} />
                },
                {
                  title: "Social Responsibility",
                  desc: "Promoting education, inclusion, and community well-being for sustainable social development.",
                  icon: <Heart size={20} />
                }
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 p-6 rounded-xl hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-[#fcfaf7] text-accent p-2.5 rounded-lg inline-block mb-4 border border-gray-100">
                    {value.icon}
                  </div>
                  <h4 className="text-primary font-bold text-[16px] mb-2">{value.title}</h4>
                  <p className="text-muted text-[13px] leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH SECTION (Matches input_file_3.png) */}
      <section id="approach" className="py-20 bg-[#fcfaf7] border-y border-[#0d233a]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left intro panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
                OUR APPROACH
              </span>
              <h2 className="text-[32px] sm:text-[40px] text-primary font-serif font-bold leading-tight mt-2">
                A pathway from aspiration to self-reliance.
              </h2>
              <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed mt-4">
                Our integrated, outcome-oriented model aligns community ambition with evolving industry needs to generate sustainable socio-economic growth.
              </p>
              
              {/* Decorative graphic list */}
              <div className="mt-8 hidden lg:block">
                <div className="flex flex-col gap-3">
                  {["Identify Needs", "Experiential Training", "Recognized Credentials", "Livelihood Placement", "Sustained Livelihoods"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[10px] font-extrabold">
                        {idx + 1}
                      </div>
                      <span className="text-[13px] font-bold text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right steps timeline panel */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Identify",
                  desc: "Understanding community aspirations, industry requirements, and emerging skill gaps. We conduct regional diagnostics to map actual demand."
                },
                {
                  step: "02",
                  title: "Train",
                  desc: "Delivering quality and industry-aligned learning experiences through practical, hands-on, and experiential training methods inside customized labs."
                },
                {
                  step: "03",
                  title: "Certify",
                  desc: "Facilitating standardized assessments and recognized certifications through national councils, ensuring validation of competencies."
                },
                {
                  step: "04",
                  title: "Employ",
                  desc: "Supporting active access to livelihoods and career employment opportunities through dedicated job fairs, placement linkages, and industry networks."
                },
                {
                  step: "05",
                  title: "Empower",
                  desc: "Enabling individuals and families to build self-reliance, promote community leadership, and achieve sustainable long-term economic development."
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex items-start gap-5 relative group"
                >
                  <span className="font-serif font-bold text-accent text-[26px] leading-none shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-primary font-bold text-[18px] mb-2">{step.title}</h3>
                    <p className="text-muted text-[13.5px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. TRAINING PROGRAMMES SECTION */}
      <section id="programmes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
              SECTORAL EXPERTISE
            </span>
            <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
              Skill Development & Vocational Training
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted mt-3">
              We deliver high-quality, practical training initiatives designed to enhance employability, promote self-employment, and strengthen workforce capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics System Design & Manufacturing",
                icon: <Cpu className="text-accent" size={24} />,
                bullets: ["PCB design & assembly", "SMT operator training", "Quality check inspection", "Embedded systems basic"]
              },
              {
                title: "Telecom & Retail Skills",
                icon: <Smartphone className="text-accent" size={24} />,
                bullets: ["Customer care executive", "In-store promoter training", "Retail sales representative", "Inventory & cashier operations"]
              },
              {
                title: "Mobile Handset Repair & Services",
                icon: <PhoneCall className="text-accent" size={24} />,
                bullets: ["Hardware fault debugging", "Software flashing & repairs", "Component-level soldering", "Diagnostic check tools"]
              },
              {
                title: "Textile & Apparel Skills",
                icon: <Scissors className="text-accent" size={24} />,
                bullets: ["Industrial sewing machine", "Garment fabrication & styling", "Pattern making basics", "Quality control in textiles"]
              },
              {
                title: "Electrical & Allied Trades",
                icon: <Zap className="text-accent" size={24} />,
                bullets: ["Domestic house wiring", "Industrial motor wiring", "Panel maintenance & safety", "Equipment electrical checking"]
              },
              {
                title: "Women Livelihood Programmes",
                icon: <Heart className="text-accent" size={24} />,
                bullets: ["Apparel & tailoring crafts", "Handicrafts & micro-business", "Financial literacy workshops", "Group entrepreneurship models"]
              },
              {
                title: "Employability & Soft Skills",
                icon: <BookOpen className="text-accent" size={24} />,
                bullets: ["Spoken English & communication", "Interview prep & mock sessions", "Resume creation guidance", "Digital literacy foundations"]
              },
              {
                title: "Community Capacity Building",
                icon: <Users className="text-accent" size={24} />,
                bullets: ["Leadership development programs", "Vocation counseling drives", "Health & hygiene awareness", "Sustainable farming workshops"]
              },
              {
                title: "Self-Employment & Entrepreneurship",
                icon: <UserCheck className="text-accent" size={24} />,
                bullets: ["Business plan creation", "Micro-finance orientation", "Digital market listing", "Regulatory registration helper"]
              }
            ].map((prog, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-xs hover:shadow-xl hover:border-accent/20 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-accent/0 group-hover:bg-accent transition-all duration-300" />
                <div className="bg-[#fff2eb] p-3 rounded-lg inline-block text-accent self-start mb-6">
                  {prog.icon}
                </div>
                <h3 className="text-primary font-bold text-[18px] mb-4 group-hover:text-accent transition-colors duration-200">
                  {prog.title}
                </h3>
                <ul className="flex flex-col gap-2 mt-auto">
                  {prog.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-muted text-[13px]">
                      <ChevronRight size={14} className="text-accent shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. MAJOR PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-[#fcfaf7] border-y border-[#0d233a]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
              DELIVERING IMPACT
            </span>
            <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
              Our Major Projects
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted mt-3">
              Through strategic corporate partnerships and CSR projects, we deliver scalable training systems across multiple locations in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#ebf3f7] text-primary text-[11px] font-extrabold tracking-wider uppercase">
                    Electronics (ESDM)
                  </span>
                  <h3 className="text-primary font-bold text-[18px] mt-4 mb-3">
                    Electronics System Design and Manufacturing
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Successfully trained 120 individuals in Electronics System Design and Manufacturing, equipping them with industry-relevant technical competencies in PCB assembly and device handling.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="text-[28px] font-serif font-bold text-primary">120</div>
                  <div className="text-[11px] font-bold text-muted uppercase mt-0.5 tracking-wider">
                    Beneficiaries Trained
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#fff2eb] text-accent text-[11px] font-extrabold tracking-wider uppercase">
                    PMKVY 2.0
                  </span>
                  <h3 className="text-primary font-bold text-[18px] mt-4 mb-3">
                    Pradhan Mantri Kaushal Vikas Yojana
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Trained 570 candidates across Telecom and Retail sectors, linking rural youth with modern sales and customer care avenues, facilitating direct livelihood placements.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-8 flex justify-between gap-4">
                  <div>
                    <div className="text-[24px] font-serif font-bold text-primary">570</div>
                    <div className="text-[10px] font-bold text-muted uppercase mt-0.5 tracking-wider">
                      Trained
                    </div>
                  </div>
                  <div className="border-l border-gray-100 pl-4">
                    <div className="text-[24px] font-serif font-bold text-accent">225</div>
                    <div className="text-[10px] font-bold text-muted uppercase mt-0.5 tracking-wider">
                      Placed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#ebf3f7] text-primary text-[11px] font-extrabold tracking-wider uppercase">
                    BOCW Chandigarh
                  </span>
                  <h3 className="text-primary font-bold text-[18px] mt-4 mb-3">
                    Mobile Handset Repair Engineer Project
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Implemented intensive Mobile Handset Repair Engineer training programmes aimed at improving technical repair skills and livelihood opportunities for construction workers' families.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="text-[13px] font-bold text-[#ff7a45] flex items-center gap-1.5">
                    <CheckCircle size={15} />
                    Project Fully Delivered
                  </div>
                  <div className="text-[10px] font-bold text-muted uppercase mt-1 tracking-wider">
                    TECHNICAL & LIVELIHOOD ALIGNMENT
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#fff2eb] text-accent text-[11px] font-extrabold tracking-wider uppercase">
                    SAMARTH PROGRAMME
                  </span>
                  <h3 className="text-primary font-bold text-[18px] mt-4 mb-3">
                    Samarth Apparel Industry Linkage
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Successfully trained and placed 130 candidates directly in the textile and apparel sector, contributing directly to sustainable employee generation and industry productivity.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="text-[28px] font-serif font-bold text-primary">130</div>
                  <div className="text-[11px] font-bold text-muted uppercase mt-0.5 tracking-wider">
                    Candidates Trained & Placed
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#ebf3f7] text-primary text-[11px] font-extrabold tracking-wider uppercase">
                    SPMCIL CSR Initiative
                  </span>
                  <h3 className="text-primary font-bold text-[18px] mt-4 mb-3">
                    Women Empowerment Apparel Training
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Empowered 300 women in Noida through apparel designing and sewing machine training programmes, increasing local household income and promoting women self-reliance.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="text-[28px] font-serif font-bold text-primary">300</div>
                  <div className="text-[11px] font-bold text-muted uppercase mt-0.5 tracking-wider">
                    Women Benefitted in Noida
                  </div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#fff2eb] text-accent text-[11px] font-extrabold tracking-wider uppercase">
                    Crompton CSR Initiative
                  </span>
                  <h3 className="text-primary font-bold text-[18px] mt-4 mb-3">
                    Electricians Safety and Certification
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Certified 400 electricians across multiple locations under national standards, covering safety protocols, modern wiring designs, and device management.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="text-[28px] font-serif font-bold text-primary">400</div>
                  <div className="text-[11px] font-bold text-muted uppercase mt-0.5 tracking-wider">
                    Electricians Certified
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CERTIFICATIONS & QUALITY ASSURANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* QA Panel */}
            <div className="flex flex-col gap-6">
              <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
                EXCELLENCE IN DELIVERY
              </span>
              <h2 className="text-[30px] sm:text-[36px] text-primary font-serif font-bold leading-tight">
                Quality Assurance Protocols
              </h2>
              <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed">
                Progress Path Foundation follows robust planning, implementation, monitoring, and evaluation processes to ensure effective, clean, and transparent programme delivery.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                  "Competency-based learning",
                  "Industry-aligned curriculum",
                  "Practical & experiential training",
                  "Continuous evaluations",
                  "Data-driven management",
                  "Placement & livelihood support",
                  "Continuous tutor training",
                  "Technology-enabled logs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FileCheck size={16} className="text-accent shrink-0" />
                    <span className="text-[13.5px] font-bold text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Panel */}
            <div className="bg-[#fcfaf7] p-8 sm:p-10 rounded-2xl border border-gray-100">
              <h3 className="text-primary font-serif font-bold text-[22px] mb-6">
                Certifications & Affiliations
              </h3>
              <p className="text-muted text-[13.5px] leading-relaxed mb-8">
                Our vocational training programmes align with national frameworks and councils, guaranteeing standardized outcomes for learners and recruiting employers.
              </p>

              <div className="flex flex-col gap-6">
                <div className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4 hover:border-accent/40 transition-colors">
                  <div className="bg-primary/5 text-primary p-2.5 rounded-lg shrink-0">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-[15px]">
                      Electronics Sector Skill Council of India (ESSCI)
                    </h4>
                    <p className="text-muted text-[12.5px] mt-1">
                      Collaborative support for testing, skill certification, and hands-on laboratory structures in ESDM sectors.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4 hover:border-accent/40 transition-colors">
                  <div className="bg-[#fff2eb] text-accent p-2.5 rounded-lg shrink-0">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-[15px]">
                      Telecom Sector Skill Council (TSSC)
                    </h4>
                    <p className="text-muted text-[12.5px] mt-1">
                      Strengthening technical capabilities, mobile servicing skills, and retail promoter standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SUCCESS STORIES SECTION */}
      <section id="stories" className="py-20 bg-[#fcfaf7] border-t border-[#0d233a]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
              TRANSFORMING LIVES
            </span>
            <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
              Stories of Transformation
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted mt-3">
              Every individual trained represents a story of aspiration, determination, and socio-economic hope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Story 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-150 transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={successApparel}
                  alt="Anisha sewing garment"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-white font-extrabold tracking-wider text-[10px] px-2.5 py-1 rounded-sm uppercase">
                  SPMCIL Program
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-primary font-bold text-[18px] mb-2">Anisha from Noida</h3>
                <p className="text-accent text-[12px] font-bold uppercase tracking-wider mb-4">
                  Apparel Sewing Professional
                </p>
                <p className="text-muted text-[13px] leading-relaxed">
                  "After completing my 3-month apparel design course, I secured a job at an apparel manufacturing firm in Noida. For the first time, I am financially self-reliant and contributing to my family's savings."
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-150 transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={successElectrician}
                  alt="Amit electrician"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-white font-extrabold tracking-wider text-[10px] px-2.5 py-1 rounded-sm uppercase">
                  Crompton Program
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-primary font-bold text-[18px] mb-2">Amit from Haryana</h3>
                <p className="text-accent text-[12px] font-bold uppercase tracking-wider mb-4">
                  Certified Safety Electrician
                </p>
                <p className="text-muted text-[13px] leading-relaxed">
                  "The certification training changed how I approach electrical panel safety. I am now working on commercial construction projects as a supervisor, commanding higher pay and safer working conditions."
                </p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-150 transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={successRetail}
                  alt="Ramesh sales associate"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-white font-extrabold tracking-wider text-[10px] px-2.5 py-1 rounded-sm uppercase">
                  PMKVY 2.0
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-primary font-bold text-[18px] mb-2">Ramesh from Rohtak</h3>
                <p className="text-accent text-[12px] font-bold uppercase tracking-wider mb-4">
                  Retail Customer Representative
                </p>
                <p className="text-muted text-[13px] leading-relaxed">
                  "The telecom/retail skill course gave me mock-interviews and communication prep. Today I work inside a leading electronics store at Rohtak. The skills I learned help me meet customer needs daily."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
              MEDIA GALLERY
            </span>
            <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
              Moments of Learning & Impact
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted mt-3">
              Explore snapshots reflecting our commitment to training sessions, certification distribution ceremonies, and field activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gallery Item 1 */}
            <div className="relative overflow-hidden rounded-2xl group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={galleryClassroom}
                  alt="Students learning on computers inside Progress Path training center"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-accent text-[11px] font-extrabold tracking-wider uppercase mb-1">
                  Active Learning
                </span>
                <h3 className="font-bold text-[16px] sm:text-[18px]">
                  Technical Skill Training Session
                </h3>
                <p className="text-gray-300 text-[12.5px] mt-1.5 leading-relaxed max-w-lg">
                  Trainees collaborating inside computer laboratories developing soft skills, digital literacy, and logic.
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative overflow-hidden rounded-2xl group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={galleryGraduation}
                  alt="Student receiving skill certificate at a graduation ceremony"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-accent text-[11px] font-extrabold tracking-wider uppercase mb-1">
                  Certification
                </span>
                <h3 className="font-bold text-[16px] sm:text-[18px]">
                  Certificate Distribution Ceremony
                </h3>
                <p className="text-gray-300 text-[12.5px] mt-1.5 leading-relaxed max-w-lg">
                  Celebrating trainees who completed coursework, qualifying for direct recruitment.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. PARTNER WITH US SECTION */}
      <section id="partner" className="py-20 bg-[#fcfaf7] border-y border-[#0d233a]/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
                CSR & COLLABORATIONS
              </span>
              <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold leading-tight">
                Partner with us for greater societal impact
              </h2>
              <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed">
                Progress Path Foundation believes that sustainable development is achieved through structured collaboration. We welcome joint partnerships with corporations, public departments, and philanthropic networks to scale skills.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  "Corporate CSR Foundations",
                  "Public Sector Enterprises",
                  "Government Departments",
                  "Development Agencies",
                  "Educational Institutions",
                  "Philanthropic Trusts"
                ].map((partner, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Building size={16} className="text-accent shrink-0" />
                    <span className="text-[13px] font-bold text-primary">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-gray-150 shadow-sm">
              <h3 className="text-primary font-serif font-bold text-[22px] mb-2">
                Partnership Queries
              </h3>
              <p className="text-muted text-[13px] mb-6">
                Fill details below and our team will get in touch with you.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl text-center">
                  <CheckCircle size={32} className="mx-auto text-emerald-600 mb-3" />
                  <h4 className="font-bold text-[15px] mb-1">Thank you for getting in touch!</h4>
                  <p className="text-[12.5px]">Your query has been logged. We will reach back within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[12px] font-bold text-primary block mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-gray-50 border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[12px] font-bold text-primary block mb-1">Corporate Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@company.org"
                        className="w-full bg-gray-50 border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[12px] font-bold text-primary block mb-1">Contact Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full bg-gray-50 border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-primary block mb-1">Message / Proposal</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your proposal or sector of interest..."
                      className="w-full bg-gray-50 border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent focus:bg-white transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#1a3d60] text-white py-3 rounded-lg font-bold text-[13px] tracking-wider transition-colors mt-2 cursor-pointer"
                  >
                    Submit Proposal Request
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 11. CAREERS SECTION */}
      <section id="careers" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
            WE ARE HIRING
          </span>
          <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
            Join Our Mission
          </h2>
          <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mt-4">
            We are always looking for passionate professionals, skilled technical trainers, and development practitioners who share our vision of building a skilled, independent, and inclusive India.
          </p>
          <div className="bg-[#fcfaf7] border border-gray-150 p-6 sm:p-8 rounded-xl max-w-lg mt-8 flex flex-col items-center gap-4">
            <div className="bg-[#fff2eb] p-3 rounded-full text-accent">
              <Mail size={24} />
            </div>
            <h3 className="text-primary font-bold text-[16px]">Send your CV / Resume</h3>
            <p className="text-muted text-[13px] leading-relaxed">
              If you are motivated to teach electricals, retail, textile, soft-skills, or manage operations, send your resume to:
            </p>
            <a
              href="mailto:uavirender@gmail.com"
              className="text-[17px] font-bold text-primary hover:text-accent border-b border-primary hover:border-accent pb-0.5 transition-colors"
            >
              uavirender@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* 12. NEWS & EVENTS SECTION */}
      <section className="py-20 bg-[#fcfaf7] border-t border-[#0d233a]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
              UPDATES
            </span>
            <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
              Stay Updated
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted mt-3">
              Keep track of our latest initiatives, partnerships, achievements, and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "June 15, 2026",
                title: "Launch of New Batch for Crompton CSR Electricians Program",
                desc: "We initialized a new training batch in Rohtak centering on automated panel wiring and workplace safety configurations."
              },
              {
                date: "May 22, 2026",
                title: "Apparel Training Ceremony Empowers 120 Women in Noida",
                desc: "Completion certificates were distributed to candidates in local tailoring modules, with placements provided by domestic garment exporters."
              },
              {
                date: "April 10, 2026",
                title: "Strategic Alliance Formed with Industrial Technology Council",
                desc: "Progress Path Foundation entered into an agreement to deliver specialized IoT sensor design training modules starting Q3."
              }
            ].map((news, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-150 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-accent text-[11px] font-bold">
                    <Clock size={13} />
                    {news.date}
                  </div>
                  <h3 className="text-primary font-bold text-[16px] mt-3 mb-2 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">
                    {news.desc}
                  </p>
                </div>
                <div className="text-accent text-[12px] font-bold flex items-center gap-1 mt-6 cursor-pointer hover:underline">
                  Read article
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. CONTACT US SECTION (Matches input_file_1.png detail cards) */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-[12px] font-extrabold tracking-wider uppercase">
              CONTACT US
            </span>
            <h2 className="text-[32px] sm:text-[38px] text-primary font-serif font-bold mt-2">
              Get In Touch
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted mt-3">
              We look forward to answering questions and exploring collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Cards Column (Matches input_file_1.png layout exactly) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-[#0b1b2d] text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
                
                <h3 className="text-[#ff7a45] text-[14px] font-extrabold tracking-wider uppercase">
                  GET IN TOUCH
                </h3>

                <div className="flex flex-col gap-7">
                  
                  {/* Office detail card */}
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent shrink-0 mt-1" size={20} />
                    <div className="flex flex-col">
                      <span className="text-[15px] sm:text-[16px] font-bold text-white">Office</span>
                      <span className="text-[13.5px] text-gray-300 mt-1.5 leading-relaxed">
                        94/2, Hanuman Colony, Near Maruti Nexa Service Centre, Sukhpura Chowk, Rohtak — 124001, Haryana
                      </span>
                    </div>
                  </div>

                  {/* Registered detail card */}
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent shrink-0 mt-1" size={20} />
                    <div className="flex flex-col">
                      <span className="text-[15px] sm:text-[16px] font-bold text-white">Registered</span>
                      <span className="text-[13.5px] text-gray-300 mt-1.5 leading-relaxed">
                        H. No. 108, BLK-G Siraspur, Bhagat Singh Park, Siraspur, North West Delhi — 110042
                      </span>
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="flex items-center gap-4">
                    <Mail className="text-accent shrink-0" size={20} />
                    <div className="flex flex-col">
                      <a href="mailto:progresspathfoundation24@gmail.com" className="text-[14px] sm:text-[15px] text-white hover:text-[#ff7a45] transition-colors break-all">
                        progresspathfoundation24@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <Phone className="text-accent shrink-0" size={20} />
                    <div className="flex flex-col">
                      <a href="tel:+919355350397" className="text-[14px] sm:text-[15px] text-white hover:text-[#ff7a45] transition-colors">
                        +91 93553 50397
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right map or message form column */}
            <div className="lg:col-span-7 bg-[#fcfaf7] p-8 sm:p-10 rounded-2xl border border-gray-150">
              <h3 className="text-primary font-serif font-bold text-[22px] mb-2">Send us a direct message</h3>
              <p className="text-muted text-[13px] mb-6">Have a general question, query, or feedback? Drop us a note.</p>
              
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-bold text-primary block mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Amit Sharma"
                      required
                      className="w-full bg-white border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-primary block mb-1">Your Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] font-bold text-primary block mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. amit@gmail.com"
                    required
                    className="w-full bg-white border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-primary block mb-1">Message Content</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    required
                    className="w-full bg-white border border-gray-250 rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-[#1a3d60] text-white py-3 px-6 rounded-lg font-bold text-[13px] tracking-wider self-start transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* Feature Under Maintenance Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-[#0b1b2d] border-l-4 border-accent text-white px-5 py-4 rounded-xl shadow-2xl animate-fade-in flex items-start gap-3.5 max-w-sm">
          <div className="bg-accent/10 border border-accent/20 p-2 rounded-lg text-accent mt-0.5">
            <AlertTriangle size={18} />
          </div>
          <div>
            <h4 className="font-bold text-[14px] text-white">Feature Under Maintenance</h4>
            <p className="text-gray-400 text-[12px] mt-1 leading-relaxed">
              Our contact form system is currently undergoing scheduled updates. Please feel free to call or email us directly instead!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
