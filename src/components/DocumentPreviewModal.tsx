import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Shield, 
  ExternalLink 
} from 'lucide-react';
import { DownloadableDocument } from '../types/mun';

interface DocumentPreviewModalProps {
  document: DownloadableDocument | null;
  onClose: () => void;
}

export const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  document,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!document) return null;

  const handleDownload = () => {
    const blob = new Blob([document.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = document.downloadFileName;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(document.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Sticky Top Toolbar */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-display font-bold text-white line-clamp-1">
                {document.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{document.category}</span>
                <span aria-hidden="true">·</span>
                <span>{document.pages} Pages Equivalent</span>
                <span aria-hidden="true">·</span>
                <span>{document.fileSize}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
              title="Copy text content"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
              title="Print document or save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Body (Printable UN Letterhead Paper Look) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/60 printable-document">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 rounded-lg p-8 sm:p-12 shadow-2xl font-document leading-relaxed text-sm selection:bg-amber-200">
            {/* UN Emblem Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-8 text-center">
              <div className="w-12 h-12 mx-auto mb-2 text-blue-700 font-display text-2xl font-bold flex items-center justify-center border-2 border-blue-700 rounded-full">
                UN
              </div>
              <h1 className="font-display font-bold text-lg sm:text-xl tracking-wider uppercase text-slate-900">
                Diplomatia Model United Nations
              </h1>
              <p className="text-xs uppercase tracking-widest text-slate-600 font-sans mt-0.5">
                Secretariat & Executive Directorate Publications Division
              </p>
              <div className="mt-3 text-[11px] font-sans text-slate-500 flex items-center justify-center gap-2">
                <span>Direct Document ID: {document.id.toUpperCase()}</span>
                <span>|</span>
                <span>HD Directorate Review: Approved</span>
              </div>
            </div>

            {/* Document Content */}
            <pre className="font-document text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-slate-800 font-normal">
              {document.content}
            </pre>

            {/* Document Footer */}
            <div className="mt-12 pt-6 border-t border-slate-300 text-center text-[11px] font-sans text-slate-500">
              <p>Official Model United Nations Parliamentary Publication · Diplomatia MUN Guidelines Group</p>
              <p className="mt-1 text-slate-400">Head Delegates: Abdul Rafay (+92 323 8874600) · Abdul Rehman (+92 314 3882579) · Musa Adnan (+92 313 7369696)</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-slate-900 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 no-print">
          <span>Target File: <strong className="text-slate-300 font-mono">{document.downloadFileName}</strong></span>
          <span>Click "Download File" to save as local .txt/.doc file</span>
        </div>
      </div>
    </div>
  );
};
