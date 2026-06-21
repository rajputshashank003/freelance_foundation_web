import React, { useEffect, useState, useRef } from "react";
import mammoth from "mammoth";
import {
  Download,
  FileText,
  Loader2,
  AlertTriangle,
  BookOpen,
  ChevronRight,
  Printer,
} from "lucide-react";

export const AnnualReportScreen: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAndConvert = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/Annual Report PPF.docx");
        if (!response.ok) {
          throw new Error(`Failed to load document (HTTP ${response.status})`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml(
          { arrayBuffer },
          {
            styleMap: [
              "p[style-name='Heading 1'] => h1.doc-h1",
              "p[style-name='Heading 2'] => h2.doc-h2",
              "p[style-name='Heading 3'] => h3.doc-h3",
              "b => strong",
              "i => em",
            ],
          }
        );
        setHtmlContent(result.value);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "Failed to load the annual report document."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAndConvert();
  }, []);

  const handlePrint = () => {
    window.print();
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
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-[13px] tracking-wider px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Download size={16} />
              Download Annual Report PDF
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wider px-6 py-3 rounded-xl border border-white/15 transition-all cursor-pointer"
            >
              <Printer size={16} />
              Print / Save as PDF
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
        <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden print:shadow-none print:border-none">

          {/* Document top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#fcfaf7] print:hidden">
            <div className="flex items-center gap-2.5 text-muted text-[13px]">
              <FileText size={16} className="text-accent" />
              <span className="font-bold text-primary">Annual Report PPF.docx</span>
              <span className="text-gray-400">— rendered from Word document</span>
            </div>
            <a
              href="/PPF_Annual_Report_2025-26.pdf"
              download="PPF_Annual_Report_2025-26.pdf"
              className="flex items-center gap-1.5 text-[12px] font-bold text-accent hover:underline"
            >
              <Download size={13} /> Download PDF
            </a>
          </div>

          {/* Content Area */}
          <div className="px-6 sm:px-12 lg:px-20 py-12">
            {loading && (
              <div className="flex flex-col items-center justify-center gap-5 py-24 text-muted">
                <Loader2 size={36} className="animate-spin text-accent" />
                <p className="text-[14px] font-medium">Loading Annual Report document…</p>
              </div>
            )}

            {error && (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <AlertTriangle size={36} className="text-orange-400" />
                <h3 className="text-primary font-bold text-[18px]">Could not load the document</h3>
                <p className="text-muted text-[13.5px] max-w-md">{error}</p>
                <a
                  href="/PPF_Annual_Report_2025-26.pdf"
                  download
                  className="mt-2 inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-[13px] px-5 py-2.5 rounded-xl transition-colors"
                >
                  <Download size={15} />
                  Download PDF instead
                </a>
              </div>
            )}

            {!loading && !error && (
              <div
                ref={contentRef}
                id="annual-report-content"
                className="doc-content prose-custom"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ── Inline styles for mammoth-rendered document content ── */}
      <style>{`
        .doc-content {
          color: #1e293b;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          line-height: 1.8;
        }
        .doc-content h1,
        .doc-content .doc-h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #0d233a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #ff7a45;
          padding-bottom: 0.5rem;
        }
        .doc-content h2,
        .doc-content .doc-h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0d233a;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .doc-content h3,
        .doc-content .doc-h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ff7a45;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .doc-content p {
          margin-bottom: 1rem;
          color: #334155;
        }
        .doc-content strong {
          font-weight: 700;
          color: #0d233a;
        }
        .doc-content em {
          font-style: italic;
          color: #475569;
        }
        .doc-content ul,
        .doc-content ol {
          margin: 0.75rem 0 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .doc-content li {
          color: #334155;
          padding-left: 0.25rem;
        }
        .doc-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.875rem;
        }
        .doc-content table th {
          background: #0d233a;
          color: white;
          font-weight: 700;
          padding: 10px 14px;
          text-align: left;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .doc-content table td {
          padding: 10px 14px;
          border-bottom: 1px solid #e2e8f0;
          color: #334155;
        }
        .doc-content table tr:nth-child(even) td {
          background: #f8fafc;
        }
        .doc-content img {
          max-width: 100%;
          border-radius: 8px;
          margin: 1rem 0;
        }
        .doc-content a {
          color: #ff7a45;
          text-decoration: underline;
        }
        @media print {
          .doc-content { font-size: 12pt; }
          .doc-content h1 { font-size: 18pt; }
          .doc-content h2 { font-size: 14pt; }
          .doc-content h3 { font-size: 12pt; }
        }
      `}</style>
    </div>
  );
};
