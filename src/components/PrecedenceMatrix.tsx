import React, { useState } from 'react';
import { Layers, ArrowUpDown, Shield, Check, HelpCircle, CheckCircle2, AlertOctagon } from 'lucide-react';
import { RULES_OF_PROCEDURE } from '../data/rulesData';

export const PrecedenceMatrix: React.FC = () => {
  const [motionA, setMotionA] = useState<string>('rop-pop-privilege');
  const [motionB, setMotionB] = useState<string>('rop-mod-caucus');

  const ruleA = RULES_OF_PROCEDURE.find(r => r.id === motionA) || RULES_OF_PROCEDURE[0];
  const ruleB = RULES_OF_PROCEDURE.find(r => r.id === motionB) || RULES_OF_PROCEDURE[1];

  const aWins = ruleA.precedenceRank < ruleB.precedenceRank;
  const tie = ruleA.precedenceRank === ruleB.precedenceRank;

  return (
    <section id="precedence-matrix" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Parliamentary Hierarchy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Order of Precedence Matrix
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            When multiple points and motions compete on the committee floor simultaneously, 
            the Dais must entertain them strictly in order of precedence.
          </p>
        </div>

        {/* Interactive Comparator Tool */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <ArrowUpDown className="w-4 h-4 text-amber-400" />
            <span>Interactive Floor Precedence Comparator</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Motion A Select */}
            <div className="md:col-span-5 bg-slate-900/90 border border-slate-700 rounded-xl p-4">
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Raised Motion / Point A:
              </label>
              <select
                value={motionA}
                onChange={(e) => setMotionA(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              >
                {RULES_OF_PROCEDURE.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.ruleNumber} · {r.title} (Rank #{r.precedenceRank})
                  </option>
                ))}
              </select>
              <div className="mt-3 text-xs text-slate-300 space-y-1">
                <div>Vote: <span className="font-semibold text-white">{ruleA.voteRequired}</span></div>
                <div>Interrupts: <span className={ruleA.interruptsSpeaker ? 'text-amber-400 font-bold' : 'text-slate-400'}>{ruleA.interruptsSpeaker ? 'YES (Audibility)' : 'NO'}</span></div>
              </div>
            </div>

            {/* VS Symbol */}
            <div className="md:col-span-1 text-center font-display font-bold text-slate-500 text-sm">
              VS
            </div>

            {/* Motion B Select */}
            <div className="md:col-span-5 bg-slate-900/90 border border-slate-700 rounded-xl p-4">
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Compromising Motion / Point B:
              </label>
              <select
                value={motionB}
                onChange={(e) => setMotionB(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              >
                {RULES_OF_PROCEDURE.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.ruleNumber} · {r.title} (Rank #{r.precedenceRank})
                  </option>
                ))}
              </select>
              <div className="mt-3 text-xs text-slate-300 space-y-1">
                <div>Vote: <span className="font-semibold text-white">{ruleB.voteRequired}</span></div>
                <div>Interrupts: <span className={ruleB.interruptsSpeaker ? 'text-amber-400 font-bold' : 'text-slate-400'}>{ruleB.interruptsSpeaker ? 'YES (Audibility)' : 'NO'}</span></div>
              </div>
            </div>
          </div>

          {/* Ruling Banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 block">
                  Official Dais Ruling
                </span>
                <p className="text-sm text-white font-medium">
                  {tie ? (
                    `Both share identical parliamentary rank (#${ruleA.precedenceRank}). The Dais will consider them based on timing or most disruptive.`
                  ) : aWins ? (
                    <>
                      <strong>{ruleA.title}</strong> takes higher parliamentary precedence over <strong>{ruleB.title}</strong> (Rank #{ruleA.precedenceRank} vs #{ruleB.precedenceRank}). The Chair must recognize/vote on {ruleA.title} first.
                    </>
                  ) : (
                    <>
                      <strong>{ruleB.title}</strong> takes higher parliamentary precedence over <strong>{ruleA.title}</strong> (Rank #{ruleB.precedenceRank} vs #{ruleA.precedenceRank}). The Chair must recognize/vote on {ruleB.title} first.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Master Precedence Table */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-4 border-b border-slate-700 bg-slate-900/80 flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-white">
              Official United Nations Hierarchy Table (Highest to Lowest)
            </h3>
            <span className="text-xs text-slate-400 font-mono">Rank 1 = Highest Priority</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/60 text-slate-400 uppercase tracking-wider text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 font-semibold">Rank</th>
                  <th className="py-3 px-4 font-semibold">Point / Motion</th>
                  <th className="py-3 px-4 font-semibold">Category</th>
                  <th className="py-3 px-4 font-semibold">Interrupts?</th>
                  <th className="py-3 px-4 font-semibold">Required Vote</th>
                  <th className="py-3 px-4 font-semibold">Debatable?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { rank: 1, name: 'Point of Personal Privilege', cat: 'Points & Inquiries', interrupt: 'YES (Audibility only)', vote: 'None (Dais Discretion)', deb: 'NO' },
                  { rank: 1, name: 'Motion to Suspend the Meeting (Recess)', cat: 'Procedural Motions', interrupt: 'NO', vote: 'Simple Majority', deb: 'NO' },
                  { rank: 2, name: 'Point of Order (Procedural Error)', cat: 'Points & Inquiries', interrupt: 'NO', vote: 'None (Chair Ruling)', deb: 'NO' },
                  { rank: 2, name: 'Motion for Roll Call Vote', cat: 'Voting Procedure', interrupt: 'NO', vote: 'None (Automatic or 1/5th)', deb: 'NO' },
                  { rank: 3, name: 'Point of Parliamentary Inquiry', cat: 'Points & Inquiries', interrupt: 'NO', vote: 'None (Dais Clarification)', deb: 'NO' },
                  { rank: 3, name: 'Motion for Division of the Question', cat: 'Voting Procedure', interrupt: 'NO', vote: 'Simple Majority (2 for / 2 against)', deb: 'YES' },
                  { rank: 4, name: 'Motion to Close Debate', cat: 'Procedural Motions', interrupt: 'NO', vote: 'Two-Thirds Majority (66.7%)', deb: 'YES (2 against)' },
                  { rank: 5, name: 'Motion for an Unmoderated Caucus', cat: 'Caucuses', interrupt: 'NO', vote: 'Simple Majority', deb: 'NO' },
                  { rank: 6, name: 'Motion for a Moderated Caucus', cat: 'Caucuses', interrupt: 'NO', vote: 'Simple Majority', deb: 'NO' },
                  { rank: 8, name: 'Motion to Introduce Draft Resolution', cat: 'Draft Resolutions', interrupt: 'NO', vote: 'None (Dais Approval)', deb: 'NO' },
                  { rank: 9, name: 'General Speakers List (Default Continuous)', cat: 'General Debate', interrupt: 'NO', vote: 'None (Standing Order)', deb: 'NO' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-amber-400">#{row.rank}</td>
                    <td className="py-3 px-4 font-medium text-white">{row.name}</td>
                    <td className="py-3 px-4 text-slate-400">{row.cat}</td>
                    <td className={`py-3 px-4 font-semibold ${row.interrupt.includes('YES') ? 'text-amber-400' : 'text-slate-400'}`}>
                      {row.interrupt}
                    </td>
                    <td className="py-3 px-4 text-slate-300">{row.vote}</td>
                    <td className="py-3 px-4 text-slate-400">{row.deb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
