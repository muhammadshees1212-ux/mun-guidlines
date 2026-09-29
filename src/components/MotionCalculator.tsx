import React, { useState, useMemo } from 'react';
import { Calculator, Copy, Check, AlertCircle, Sparkles, Gavel } from 'lucide-react';

export const MotionCalculator: React.FC = () => {
  const [motionType, setMotionType] = useState<'moderated' | 'unmoderated' | 'extension' | 'gsl'>('moderated');
  const [country, setCountry] = useState('Germany');
  const [totalMinutes, setTotalMinutes] = useState(9);
  const [speakingSeconds, setSpeakingSeconds] = useState(45);
  const [topic, setTopic] = useState('Establishing Maritime Verification Corridors in the Red Sea');
  const [copied, setCopied] = useState(false);

  // Calculation
  const totalSeconds = totalMinutes * 60;
  const isMathValid = totalSeconds % speakingSeconds === 0;
  const speakersCount = isMathValid ? totalSeconds / speakingSeconds : Math.floor(totalSeconds / speakingSeconds);
  const remainderSeconds = totalSeconds % speakingSeconds;

  // Verbatim Script Generation
  const generatedScript = useMemo(() => {
    if (motionType === 'moderated') {
      return `The Delegate of ${country || '[Country]'} moves for a Moderated Caucus with a total duration of ${totalMinutes} minute${totalMinutes > 1 ? 's' : ''}, and an individual speaking time of ${speakingSeconds} seconds, on the topic of: "${topic || '[Specify Sub-Topic]'}"."`;
    } else if (motionType === 'unmoderated') {
      return `The Delegate of ${country || '[Country]'} moves for an Unmoderated Caucus for a duration of ${totalMinutes} minute${totalMinutes > 1 ? 's' : ''} for the purpose of: "${topic || 'bloc consultation and resolution drafting'}."`;
    } else if (motionType === 'extension') {
      return `The Delegate of ${country || '[Country]'} moves to extend the current Moderated Caucus by ${totalMinutes} minute${totalMinutes > 1 ? 's' : ''}, with the same individual speaking time of ${speakingSeconds} seconds.`;
    } else {
      return `The Delegate of ${country || '[Country]'} moves to adjust the individual speaking time on the General Speakers List to ${speakingSeconds} seconds.`;
    }
  }, [motionType, country, totalMinutes, speakingSeconds, topic]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="motion-calculator" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Delegate Speech Utility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Interactive Motion & Caucus Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Never propose an invalid caucus time to the Dais. Verify timing arithmetic, calculate total recognized speakers, 
            and generate the verbatim motion script ready to deliver to the Chair.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-5">
            {/* Motion Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Motion Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'moderated', label: 'Moderated Caucus' },
                  { id: 'unmoderated', label: 'Unmoderated' },
                  { id: 'extension', label: 'Caucus Extension' },
                  { id: 'gsl', label: 'GSL Speaking Time' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setMotionType(item.id as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors text-center border ${
                      motionType === item.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Placard */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Member State / Placard
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Germany, Japan, United Kingdom"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Time Adjusters */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Total Duration (Minutes)
                </label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={totalMinutes}
                  onChange={(e) => setTotalMinutes(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {motionType !== 'unmoderated' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Individual Speaking Time
                  </label>
                  <select
                    value={speakingSeconds}
                    onChange={(e) => setSpeakingSeconds(parseInt(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value={30}>30 Seconds</option>
                    <option value={45}>45 Seconds</option>
                    <option value={60}>60 Seconds (1 Min)</option>
                    <option value={90}>90 Seconds (1.5 Min)</option>
                    <option value={120}>120 Seconds (2 Min)</option>
                  </select>
                </div>
              )}
            </div>

            {/* Sub-Topic */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Specific Sub-Topic / Purpose
              </label>
              <textarea
                rows={2}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Specific substantive issue (e.g. Humanitarian supply corridors)..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Results & Verbatim Script Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-slate-950/80 rounded-xl p-6 border border-slate-700/80">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Dais Mathematical Validation
                </span>
                {motionType !== 'unmoderated' && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isMathValid
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-red-500/20 text-red-400 border border-red-500/40'
                  }`}>
                    {isMathValid ? 'Mathematically Sound' : 'Invalid Timing Math'}
                  </span>
                )}
              </div>

              {/* Math Breakdown */}
              {motionType !== 'unmoderated' && (
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">Total Floor Time:</span>
                    <strong className="text-white text-base font-mono">{totalMinutes * 60} seconds</strong>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">Recognized Speakers:</span>
                    <strong className="text-amber-400 text-base font-mono">
                      {isMathValid ? speakersCount : `~${speakersCount} speakers`}
                    </strong>
                  </div>
                </div>
              )}

              {!isMathValid && motionType !== 'unmoderated' && (
                <div className="mt-3 p-3 rounded-lg bg-red-950/30 border border-red-900/50 flex items-start gap-2 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    Warning: {totalMinutes} minutes ({totalSeconds}s) leaves an unallocated remainder of {remainderSeconds} seconds. 
                    Try adjusting to <strong>{Math.ceil(totalSeconds / speakingSeconds) * speakingSeconds / 60} minutes</strong>.
                  </span>
                </div>
              )}

              {/* Script Result */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5 text-amber-400" />
                    Deliver this Speech to the Chair:
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-200 font-serif italic text-sm leading-relaxed">
                  "{generatedScript}"
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Proposing delegate traditionally chooses to speak 1st or last</span>
              <span className="font-mono text-slate-300">Simple Majority Needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
