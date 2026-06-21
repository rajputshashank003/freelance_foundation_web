import React from "react";
import {
  Download,
  FileCheck,
  ChevronRight,
  Printer,
  ExternalLink,
} from "lucide-react";

export const UdyamCertificateScreen: React.FC = () => {
  const handlePrint = () => {
    // Open standard printing for the PDF directly, or open in new tab
    window.open("/Udyam Registration Certificate.pdf", "_blank");
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
            <FileCheck size={28} className="text-accent" />
          </div>
          <h1 className="text-white font-serif font-bold text-[28px] sm:text-[38px] leading-tight">
            Udyam Registration Certificate
          </h1>
          <p className="text-gray-400 text-[14px] sm:text-[15px] max-w-xl leading-relaxed">
            Official registration of Progress Path Foundation as an enterprise under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a
              href="/Udyam Registration Certificate.pdf"
              download="Udyam_Registration_Certificate_PPF.pdf"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-[13px] tracking-wider px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Download size={16} />
              Download Certificate PDF
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wider px-6 py-3 rounded-xl border border-white/15 transition-all cursor-pointer"
            >
              <Printer size={16} />
              Open in New Tab
            </button>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center gap-1.5 text-[12px] text-muted">
        <span
          className="hover:text-primary cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </span>
        <ChevronRight size={13} />
        <span className="text-primary font-bold">Udyam Registration</span>
      </div>

      {/* ── Certificate Viewer ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
          {/* Document top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#fcfaf7]">
            <div className="flex items-center gap-2.5 text-muted text-[13px]">
              <FileCheck size={16} className="text-accent" />
              <span className="font-bold text-primary">
                Udyam Registration Certificate.pdf
              </span>
              <span className="text-gray-400">— Official MSME Certificate</span>
            </div>
            <a
              href="/Udyam Registration Certificate.pdf"
              download="Udyam_Registration_Certificate_PPF.pdf"
              className="flex items-center gap-1.5 text-[12px] font-bold text-accent hover:underline"
            >
              <Download size={13} /> Download PDF
            </a>
          </div>

          {/* PDF Viewer Frame */}
          <div className="relative w-full" style={{ height: "700px" }}>
            <iframe
              src="/Udyam Registration Certificate.pdf#toolbar=0"
              width="100%"
              height="100%"
              className="border-none"
              title="Udyam Registration Certificate"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <FileCheck size={48} className="text-gray-400 mb-4" />
                <p className="text-primary font-bold text-lg mb-2">
                  PDF Preview Not Available
                </p>
                <p className="text-muted text-sm mb-6 max-w-sm">
                  Your browser does not support inline PDF viewing. Please download
                  the certificate to view it.
                </p>
                <a
                  href="/Udyam Registration Certificate.pdf"
                  download="Udyam_Registration_Certificate_PPF.pdf"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-[13px] px-6 py-3 rounded-xl shadow-lg transition-colors"
                >
                  <Download size={16} />
                  Download Certificate
                </a>
              </div>
            </iframe>
          </div>
        </div>

        {/* Certificate Details Metadata Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-serif font-bold text-[18px] text-primary mb-4 border-b border-[#0d233a]/5 pb-2">
              Registration details
            </h3>
            <table className="w-full text-[13.5px]">
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-2.5 font-semibold text-primary">Enterprise Name</td>
                  <td className="py-2.5 text-muted text-right">PROGRESS PATH FOUNDATION</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-2.5 font-semibold text-primary">Organisation Type</td>
                  <td className="py-2.5 text-muted text-right">Section 8 Company</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-2.5 font-semibold text-primary">Date of Incorporation</td>
                  <td className="py-2.5 text-muted text-right">24/04/2024</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-semibold text-primary">National Industry Classification</td>
                  <td className="py-2.5 text-muted text-right">8549 - Vocational Education</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-[18px] text-primary mb-3 border-b border-[#0d233a]/5 pb-2">
                Enterprise Classification
              </h3>
              <p className="text-[13.5px] text-muted leading-relaxed mb-4">
                Progress Path Foundation is officially registered under the Micro enterprise category.
                This classification enables us to participate in government procurement policies, priority sector lending, and MSME support schemes.
              </p>
            </div>
            <a
              href="https://udyamregistration.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-accent hover:underline mt-2 self-start"
            >
              Verify on Udyam Portal
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
