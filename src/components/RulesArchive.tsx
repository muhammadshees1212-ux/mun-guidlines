import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  BookmarkCheck, 
  Copy, 
  Check, 
  ArrowRight, 
  BookOpen, 
  Gavel, 
  ShieldCheck, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import { RULES_OF_PROCEDURE } from '../data/rulesData';
import { RuleOfProcedure, RoPCategory, RoPFramework } from '../types/mun';
import { RuleDetailModal } from './RuleDetailModal';

interface RulesArchiveProps {
  onOpenChatWithCitation?: (ruleId: string) => void;
}

const CATEGORIES: ('All' | RoPCategory)[] = [
  'All',
  'General Debate',
  'Caucuses',
  'Points & Inquiries',
  'Procedural Motions',
  'Draft Resolutions & Amendments',
  'Voting Procedure',
  'Crisis & Directives'
];

export const RulesArchive: React.FC<RulesArchiveProps> = ({ onOpenChatWithCitation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | RoPCategory>('All');
  const [selectedFramework, setSelectedFramework] = useState<'All' | RoPFramework>('All');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mun_bookmarked_rules');
      return saved ? JSON.parse(saved) : ['rop-pop-privilege', 'rop-point-of-order', 'rop-mod-caucus'];
    } catch {
      return ['rop-pop-privilege', 'rop-point-of-order'];
    }
  });

  const [activeModalRule, setActiveModalRule] = useState<RuleOfProcedure | null>(null);
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('mun_bookmarked_rules', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleCopyScript = (rule: RuleOfProcedure, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(rule.verbatimScript);
    setCopiedScriptId(rule.id);
    setTimeout(() => setCopiedScriptId(null), 2000);
  };

  // Filtered Rules
  const filteredRules = useMemo(() => {
    return RULES_OF_PROCEDURE.filter(rule => {
      // Category filter
      if (selectedCategory !== 'All' && rule.category !== selectedCategory) {
        return false;
      }
      // Framework filter
      if (selectedFramework !== 'All' && rule.framework !== selectedFramework) {
        return false;
      }
      // Bookmark filter
      if (showBookmarkedOnly && !bookmarkedIds.includes(rule.id)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = rule.title.toLowerCase().includes(query);
        const matchesNumber = rule.ruleNumber.toLowerCase().includes(query);
        const matchesSummary = rule.summary.toLowerCase().includes(query);
        const matchesScript = rule.verbatimScript.toLowerCase().includes(query);
        const matchesTags = rule.tags.some(tag => tag.toLowerCase().includes(query));
        return matchesTitle || matchesNumber || matchesSummary || matchesScript || matchesTags;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedFramework, showBookmarkedOnly, bookmarkedIds]);

  return (
    <section id="rules-archive" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Parliamentary Lexicon & Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Searchable Archive of Rules
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Searchable codex of official Model United Nations Rules of Procedure (RoP), parliamentary precedents, 
              voting thresholds, and verbatim speech scripts for committee debate.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-6 md:mt-0 flex items-center gap-4 text-xs text-slate-400">
            <div>
              <span className="font-mono text-lg font-bold text-white block">
                {RULES_OF_PROCEDURE.length}
              </span>
              <span>Total Rules</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-800"></div>
            <div>
              <span className="font-mono text-lg font-bold text-amber-400 block">
                {bookmarkedIds.length}
              </span>
              <span>Saved in Bench</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by rule code (e.g. RoP 5.1), title, motion script, keyword, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Framework & Saved Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-700/70">
                {(['All', 'Universal / UNA-USA', 'THIMUN', 'Crisis Committee'] as const).map(fw => (
                  <button
                    key={fw}
                    onClick={() => setSelectedFramework(fw)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      selectedFramework === fw
                        ? 'bg-amber-500 text-slate-950 font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {fw === 'Universal / UNA-USA' ? 'UNA-USA' : fw === 'Crisis Committee' ? 'Crisis' : fw}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  showBookmarkedOnly
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-slate-900 border-slate-700/70 text-slate-300 hover:text-white'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Saved ({bookmarkedIds.length})</span>
              </button>
            </div>
          </div>

          {/* Category Filter Buttons (Segmented Controls) */}
          <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-slate-700 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>
            Showing <strong className="text-white">{filteredRules.length}</strong> of {RULES_OF_PROCEDURE.length} rules
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          {filteredRules.length > 0 && (
            <span className="hidden sm:inline">Click any rule to review verbatim speech and Dais ruling</span>
          )}
        </div>

        {/* Rules Grid */}
        {filteredRules.length === 0 ? (
          <div className="py-16 text-center bg-slate-800/40 rounded-2xl border border-slate-800">
            <Gavel className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-display font-bold text-white">No rules matched your criteria</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or reset the category filters to browse all procedural codices.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedFramework('All');
                setShowBookmarkedOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRules.map(rule => {
              const isBookmarked = bookmarkedIds.includes(rule.id);
              return (
                <div
                  key={rule.id}
                  onClick={() => setActiveModalRule(rule)}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-5 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Header: Rule Code & Bookmark */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                          {rule.ruleNumber}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {rule.category}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(rule.id);
                        }}
                        className="p-1 text-slate-400 hover:text-amber-400 rounded transition-colors"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark rule'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-amber-400" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Rule Title */}
                    <h3 className="mt-3 text-base font-display font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {rule.title}
                    </h3>

                    {/* Metadata line (Zero-pill text separators) */}
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                      <span>Rank #{rule.precedenceRank}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-300">{rule.voteRequired}</span>
                      {rule.interruptsSpeaker && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-400 font-medium">Interrupts Speaker</span>
                        </>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {rule.summary}
                    </p>

                    {/* Verbatim Script Box Preview */}
                    <div className="mt-4 p-3 rounded-lg bg-slate-950/70 border border-slate-700/60 flex items-start justify-between gap-2">
                      <p className="text-[11px] text-amber-200/90 font-serif italic line-clamp-2">
                        {rule.verbatimScript}
                      </p>
                      <button
                        onClick={(e) => handleCopyScript(rule, e)}
                        className="p-1 rounded text-slate-400 hover:text-amber-300 shrink-0"
                        title="Copy verbatim script"
                      >
                        {copiedScriptId === rule.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="mt-5 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      {rule.framework}
                    </span>
                    <span className="text-amber-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Inspect Rule <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalRule && (
        <RuleDetailModal
          rule={activeModalRule}
          onClose={() => setActiveModalRule(null)}
          isBookmarked={bookmarkedIds.includes(activeModalRule.id)}
          onToggleBookmark={toggleBookmark}
          onOpenChatWithCitation={onOpenChatWithCitation}
        />
      )}
    </section>
  );
};
