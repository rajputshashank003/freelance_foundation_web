import React from "react";
import {
  Download,
  BookOpen,
  ChevronRight,
  ExternalLink,
  FileText,
} from "lucide-react";

export const AnnualReportScreen: React.FC = () => {
  const handleOpenNewTab = () => {
    window.open("/PPF_Annual_Report_2025-26.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-24 pb-20">
      {/* ── Page Header Banner ── */}
      <div className="bg-[#0b1b2d] py-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/3 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-4">
          <div className="bg-accent/10 border border-accent/20 p-3 rounded-2xl inline-block">
            <BookOpen size={28} className="text-accent" />
          </div>
          <h1 className="text-white font-serif font-bold text-[28px] sm:text-[38px] leading-tight">
            Annual Report 2025–26
          </h1>
          <p className="text-gray-400 text-[14px] sm:text-[15px] max-w-xl leading-relaxed">
            Transparency, accountability, and a full record of Progress Path
            Foundation's year of impact, projects, and learnings.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a
              href="/PPF_Annual_Report_2025-26.pdf"
              download="PPF_Annual_Report_2025-26.pdf"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-[13px] tracking-wider px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Download size={16} />
              Download Annual Report PDF
            </a>
            <button
              onClick={handleOpenNewTab}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wider px-6 py-3 rounded-xl border border-white/15 transition-all cursor-pointer"
            >
              <ExternalLink size={16} />
              Open in New Tab
            </button>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center gap-1.5 text-[12px] text-muted">
        <span className="hover:text-primary cursor-pointer" onClick={() => window.location.href = "/"}>Home</span>
        <ChevronRight size={13} />
        <span className="text-primary font-bold">Annual Report</span>
      </div>

      {/* ── Document Viewer ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
          {/* Document top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#fcfaf7]">
            <div className="flex items-center gap-2.5 text-muted text-[13px]">
              <FileText size={16} className="text-accent" />
              <span className="font-bold text-primary">PPF_Annual_Report_2025-26.pdf</span>
              <span className="text-gray-400">— Official Annual Report PDF</span>
            </div>
            <a
              href="/PPF_Annual_Report_2025-26.pdf"
              download="PPF_Annual_Report_2025-26.pdf"
              className="flex items-center gap-1.5 text-[12px] font-bold text-accent hover:underline"
            >
              <Download size={13} /> Download PDF
            </a>
          </div>

          {/* PDF Viewer Frame */}
          <div className="relative w-full" style={{ height: "800px" }}>
            <iframe
              src="/PPF_Annual_Report_2025-26.pdf#toolbar=0"
              width="100%"
              height="100%"
              className="border-none"
              title="PPF Annual Report 2025-26"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#fcfaf7]">
                <BookOpen size={48} className="text-gray-400 mb-4" />
                <p className="text-primary font-bold text-lg mb-2">
                  PDF Preview Not Available
                </p>
                <p className="text-muted text-sm mb-6 max-w-sm">
                  Your browser does not support inline PDF viewing. Please download
                  the report to view it.
                </p>
                <a
                  href="/PPF_Annual_Report_2025-26.pdf"
                  download="PPF_Annual_Report_2025-26.pdf"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-[13px] px-6 py-3 rounded-xl shadow-lg transition-colors"
                >
                  <Download size={16} />
                  Download PDF Report
                </a>
              </div>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
