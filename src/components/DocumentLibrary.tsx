import React, { useState, useMemo } from 'react';
import { 
  Download, 
  FileText, 
  Search, 
  ExternalLink, 
  Eye, 
  Copy, 
  Check, 
  Sparkles, 
  FolderDown, 
  BookMarked,
  Printer
} from 'lucide-react';
import { DOWNLOADABLE_DOCUMENTS } from '../data/documentsData';
import { DownloadableDocument } from '../types/mun';
import { DocumentPreviewModal } from './DocumentPreviewModal';

const CATEGORIES = [
  'All',
  'Rulebooks',
  'Templates',
  'Clauses & Lexicon',
  'Cheat Sheets',
  'Crisis Kit'
] as const;

export const DocumentLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewDoc, setPreviewDoc] = useState<DownloadableDocument | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleDownload = (doc: DownloadableDocument, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const blob = new Blob([doc.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = doc.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (doc: DownloadableDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(doc.content);
    setCopiedId(doc.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredDocs = useMemo(() => {
    return DOWNLOADABLE_DOCUMENTS.filter(doc => {
      if (selectedCategory !== 'All' && doc.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          doc.title.toLowerCase().includes(q) ||
          doc.description.toLowerCase().includes(q) ||
          doc.recommendedFor.toLowerCase().includes(q) ||
          doc.highlights.some(h => h.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="documents-library" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <FolderDown className="w-4 h-4 text-amber-400" />
              <span>Official Delegate Materials & Toolkits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Downloadable Documents & Templates
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Download authenticated resolution formats, UN clause lexicons, crisis directives, 
              and pocket rulebooks vetted by the Executive Head Delegates.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3 text-xs text-slate-400">
            <span className="text-white font-bold">{DOWNLOADABLE_DOCUMENTS.length}</span>
            <span>Official Directorate Templates Available</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search templates, resolution formats, clause lexicons, crisis guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-700/60'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between shadow-xl"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span>{doc.pages} Pages</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-300">{doc.fileSize}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-display font-bold text-white tracking-wide leading-snug">
                  {doc.title}
                </h3>

                {/* Metadata */}
                <div className="mt-2 text-xs text-slate-400">
                  <span>{doc.category}</span>
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  <span className="text-amber-400 font-medium">{doc.format}</span>
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {doc.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Contents & Provisions
                  </span>
                  <ul className="space-y-1.5">
                    {doc.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-700/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Preview & Print</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleCopy(doc, e)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
                    title="Copy full document text"
                  >
                    {copiedId === doc.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    onClick={(e) => handleDownload(doc, e)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <DocumentPreviewModal
          document={previewDoc}
          onClose={() => setPreviewDoc(null)}
        />
      )}
    </section>
  );
};
