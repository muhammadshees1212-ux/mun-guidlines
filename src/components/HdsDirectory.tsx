import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Shield, 
  Clock, 
  Award, 
  Mail, 
  Calendar,
  Send,
  X
} from 'lucide-react';
import { HEAD_DELEGATES } from '../data/hdsData';
import { HeadDelegate } from '../types/mun';

export const HdsDirectory: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [consultationModalHd, setConsultationModalHd] = useState<HeadDelegate | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Rules of Procedure Consultation');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationModalHd) return;
    
    // Construct pre-filled WhatsApp message
    const formattedText = encodeURIComponent(
      `Hello HD ${consultationModalHd.name},\nMy name is ${inquiryName || 'a Delegate'}.\nTopic: ${inquiryTopic}\nMessage: ${inquiryMessage || 'I would like to schedule a parliamentary consultation session.'}`
    );
    window.open(`https://wa.me/${consultationModalHd.phone.replace(/[^0-9]/g, '')}?text=${formattedText}`, '_blank');
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setConsultationModalHd(null);
      setInquiryName('');
      setInquiryMessage('');
    }, 2000);
  };

  return (
    <section id="hds-directory" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Executive Directorate & Arbitration Council</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Head Delegates (HDs) Directory
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Direct access to the executive arbiters for emergency committee rulings, conference delegation training, 
              amendment disputes, and procedural advisory.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3 text-xs text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All HDs Available for Direct WhatsApp / Call Consultations</span>
          </div>
        </div>

        {/* HD Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEAD_DELEGATES.map((hd) => (
            <div 
              key={hd.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-200 flex flex-col shadow-xl"
            >
              {/* Card Header Strip */}
              <div className="p-6 border-b border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-300 text-lg">
                    {hd.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-xs text-amber-300/80 bg-slate-900/80 px-2.5 py-1 rounded border border-amber-500/20">
                    {hd.conferencesChaired}+ Conferences Chaired
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-display font-bold text-white tracking-wide">
                  {hd.name}
                </h3>
                <p className="text-xs text-amber-400 font-medium mt-1">
                  {hd.role}
                </p>
              </div>

              {/* Direct Phone Highlight Box */}
              <div className="px-6 py-4 bg-slate-950/60 border-b border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold block">
                      Direct Official Line
                    </span>
                    <a 
                      href={`tel:${hd.phone}`}
                      className="text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      {hd.phoneDisplay}
                    </a>
                  </div>

                  <button
                    onClick={() => handleCopyPhone(hd.id, hd.phoneDisplay)}
                    title="Copy phone number"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
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

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {hd.bio}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Specializations & Committees
                    </span>
                    <div className="space-y-1.5">
                      {hd.specialization.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-700/40">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{hd.availableHours}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-700/60 grid grid-cols-2 gap-2.5">
                  <a
                    href={hd.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setConsultationModalHd(hd)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold shadow-sm transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fast Reference Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-slate-300">
              Need urgent RoP arbitration during an active conference session? Contact any HD above or enter the live <strong>#hd-consultation</strong> room in our Chat Chamber.
            </span>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Direct Helpline: +92 323 8874600 · +92 314 3882579 · +92 313 7369696
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {consultationModalHd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setConsultationModalHd(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-display font-bold text-amber-300">
                {consultationModalHd.name[0]}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Consultation with {consultationModalHd.name}
                </h3>
                <p className="text-xs text-amber-400">{consultationModalHd.phoneDisplay}</p>
              </div>
            </div>

            {inquirySent ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-white">Dispatching to WhatsApp...</h4>
                <p className="text-xs text-slate-400 mt-1">Connecting directly with HD {consultationModalHd.name}</p>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name & Delegation / Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delegate of Japan / Alex Turner"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Consultation Subject
                  </label>
                  <select
                    value={inquiryTopic}
                    onChange={(e) => setInquiryTopic(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Rules of Procedure Dispute">Rules of Procedure (RoP) Dispute</option>
                    <option value="Resolution Drafting / Amendments">Draft Resolution / Amendments Review</option>
                    <option value="Crisis Committee Strategy & Directives">Crisis Strategy & Directives</option>
                    <option value="General Speaking & Moderated Caucus Tactics">General Speaking & Caucus Tactics</option>
                    <option value="Conference Delegation Training">Conference Delegation Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Details / Specific Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your committee, current scenario, or question..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultationModalHd(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-emerald-900/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
