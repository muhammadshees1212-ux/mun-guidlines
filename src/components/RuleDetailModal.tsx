import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  AlertTriangle, 
  Gavel, 
  MessageSquare,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { RuleOfProcedure } from '../types/mun';

interface RuleDetailModalProps {
  rule: RuleOfProcedure | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenChatWithCitation?: (ruleId: string) => void;
}

export const RuleDetailModal: React.FC<RuleDetailModalProps> = ({
  rule,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenChatWithCitation
}) => {
  const [copiedScript, setCopiedScript] = useState(false);

  if (!rule) return null;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(rule.verbatimScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-amber-400">
              {rule.ruleNumber}
            </span>
            <div className="h-4 w-[1px] bg-slate-700"></div>
            <span className="text-xs text-slate-400">
              {rule.category} · {rule.framework}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(rule.id)}
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Rule'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-amber-400" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Title & Core Meta */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white tracking-wide">
              {rule.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>Precedence Rank: <strong>#{rule.precedenceRank}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Vote: <strong className="text-slate-200">{rule.voteRequired}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Interrupts: <strong className={rule.interruptsSpeaker ? 'text-amber-400' : 'text-slate-400'}>{rule.interruptsSpeaker ? 'YES' : 'NO'}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Debatable: <strong className="text-slate-200">{rule.debatable ? 'YES' : 'NO'}</strong></span>
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
              Official Summary
            </span>
            <p className="text-sm text-slate-200 leading-relaxed">
              {rule.summary}
            </p>
          </div>

          {/* Verbatim Delegate Script */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Gavel className="w-3.5 h-3.5 text-amber-400" />
                Verbatim Delegate Speech Script
              </span>
              <button
                onClick={handleCopyScript}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium transition-colors"
              >
                {copiedScript ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied Script</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Script</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-200/90 font-serif italic text-sm leading-relaxed">
              {rule.verbatimScript}
            </div>
          </div>

          {/* Chair Protocol & Response */}
          <div>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
              Standard Dais Ruling & Chair Protocol
            </span>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 text-xs font-mono leading-relaxed">
              {rule.chairRuling}
            </div>
          </div>

          {/* In-Depth Explanation */}
          <div>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
              Parliamentary Rationale & Operational Mechanics
            </span>
            <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
              {rule.fullExplanation}
            </p>
          </div>

          {/* Common Pitfalls */}
          {rule.commonPitfalls.length > 0 && (
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>Common Delegate Pitfalls & Disqualifications</span>
              </div>
              <ul className="space-y-1.5">
                {rule.commonPitfalls.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Authenticated under UNA-USA & THIMUN 2026 Standards
          </div>
          <div className="flex items-center gap-2">
            {onOpenChatWithCitation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenChatWithCitation(rule.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Discuss in Chat</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
