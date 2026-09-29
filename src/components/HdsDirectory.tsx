import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  UserCheck
} from 'lucide-react';
import { HEAD_DELEGATES } from '../data/hdsData';

export const HdsDirectory: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="hds-directory" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Contact Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Head Delegates (HDs)
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Direct phone numbers and WhatsApp contact for all Head Delegates.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Available on WhatsApp and Direct Call</span>
          </div>
        </div>

        {/* HD Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEAD_DELEGATES.map((hd) => (
            <div 
              key={hd.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between shadow-xl p-6"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-300 text-lg">
                    {hd.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
                    Head Delegate (HD)
                  </span>
                </div>

                {/* Name */}
                <h3 className="mt-5 text-2xl font-display font-bold text-white tracking-wide">
                  {hd.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Head Delegate (HD)
                </p>

                {/* Phone Box */}
                <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700/70 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${hd.phone}`}
                      className="text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors flex items-center gap-2 mt-0.5"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      {hd.phoneDisplay}
                    </a>
                  </div>

                  <button
                    onClick={() => handleCopyPhone(hd.id, hd.phoneDisplay)}
                    title="Copy phone number"
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                  >
                    {copiedId === hd.id ? (
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                        <Check className="w-3.5 h-3.5" />
                        Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 grid grid-cols-2 gap-3">
                <a
                  href={hd.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${hd.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-sm transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call HD</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
