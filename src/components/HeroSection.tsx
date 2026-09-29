import React from 'react';
import { 
  Shield, 
  Search, 
  BookOpen, 
  Download, 
  MessageSquare, 
  Phone, 
  Award, 
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { HEAD_DELEGATES } from '../data/hdsData';

interface HeroSectionProps {
  onExploreRules: () => void;
  onExploreDocs: () => void;
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreRules,
  onExploreDocs,
  onOpenChat
}) => {
  return (
    <div className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 border-b border-slate-800">
      {/* Subtle Diplomatic Background Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Diplomatic Header Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-lg shadow-amber-950/30">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Diplomatia MUN Guidelines Group · Official Codification</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Master the Rules of Procedure.<br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
              Lead Committee Debate.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The definitive parliamentary resource for delegates and secretariats. Explore our searchable archive of rules, 
            download authenticated UN draft resolution templates, and join the active deliberation chamber.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onExploreRules}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-950/40 transition-all transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Search Rules of Procedure</span>
            </button>

            <button
              onClick={onExploreDocs}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Documents</span>
            </button>

            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold text-sm border border-amber-500/30 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Parliamentary Chat</span>
            </button>
          </div>
        </div>

        {/* Head Delegates Quick Contact Ticker / Banner */}
        <div className="mt-14 max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Head Delegates (HDs) Direct Contact Helpline
              </span>
            </div>
            <span className="text-xs text-slate-400">
              Immediate consultation for committee disputes, RoP training & crisis arbitration
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {HEAD_DELEGATES.map(hd => (
              <div 
                key={hd.id}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-colors flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-xs font-bold text-white font-display">
                    {hd.name}
                  </div>
                  <div className="text-[10px] text-amber-400 font-medium">
                    {hd.role.split('·')[1]?.trim() || 'Head Delegate'}
                  </div>
                  <a 
                    href={`tel:${hd.phone}`}
                    className="text-xs font-mono font-bold text-slate-200 hover:text-white mt-1 block"
                  >
                    {hd.phoneDisplay}
                  </a>
                </div>

                <a
                  href={hd.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold shrink-0 transition-colors shadow"
                >
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
