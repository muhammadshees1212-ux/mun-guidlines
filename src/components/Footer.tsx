import React from 'react';
import { Shield, Phone, Mail, BookOpen, MessageSquare, FolderDown } from 'lucide-react';
import { HEAD_DELEGATES } from '../data/hdsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base">
                DIPLOMATIA MUN
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Independent parliamentary codification and delegate guidelines group dedicated to advancing Model United Nations diplomacy, procedural rigour, and caucus excellence.
            </p>
          </div>

          {/* Col 2: Head Delegates Directory */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-3">
              Executive Head Delegates (HDs) Directory
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HEAD_DELEGATES.map(hd => (
                <div key={hd.id} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-xs">{hd.name}</div>
                  <div className="text-[10px] text-amber-400">{hd.role.split('·')[0]}</div>
                  <a 
                    href={`tel:${hd.phone}`} 
                    className="mt-1 font-mono text-[11px] text-slate-300 hover:text-white block"
                  >
                    {hd.phoneDisplay}
                  </a>
                  <a
                    href={hd.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-[10px] text-emerald-400 hover:underline block"
                  >
                    Direct WhatsApp →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-3">
              Portal Resources
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#rules-archive" className="hover:text-amber-300 transition-colors">
                  Searchable Archive of Rules (RoP)
                </a>
              </li>
              <li>
                <a href="#documents-library" className="hover:text-amber-300 transition-colors">
                  Downloadable Resolutions & Templates
                </a>
              </li>
              <li>
                <a href="#parliamentary-chat" className="hover:text-amber-300 transition-colors">
                  Parliamentary Procedure Chat Chamber
                </a>
              </li>
              <li>
                <a href="#motion-calculator" className="hover:text-amber-300 transition-colors">
                  Caucus Motion Script Calculator
                </a>
              </li>
              <li>
                <a href="#precedence-matrix" className="hover:text-amber-300 transition-colors">
                  Order of Precedence Matrix
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Diplomatia MUN Guidelines Group. All rights reserved. 
            Compliant with UNA-USA, HMUN, and THIMUN parliamentary conventions.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Abdul Rafay (+92 323 8874600)</span>
            <span>·</span>
            <span>Abdul Rehman (+92 314 3882579)</span>
            <span>·</span>
            <span>Musa Adnan (+92 313 7369696)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
