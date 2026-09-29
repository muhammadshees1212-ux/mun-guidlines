import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Hash, 
  MessageSquare, 
  Pin, 
  ThumbsUp, 
  BookOpen, 
  User, 
  Shield, 
  Check, 
  HelpCircle, 
  Sparkles, 
  Phone, 
  Flame, 
  ArrowRight, 
  Trash2,
  AlertCircle
} from 'lucide-react';
import { CHAT_CHANNELS, INITIAL_CHAT_MESSAGES } from '../data/chatData';
import { HEAD_DELEGATES } from '../data/hdsData';
import { RULES_OF_PROCEDURE } from '../data/rulesData';
import { ChatMessage, RuleOfProcedure } from '../types/mun';
import { RuleDetailModal } from './RuleDetailModal';

interface ParliamentaryChatProps {
  initialRuleCitation?: string | null;
  onClearInitialCitation?: () => void;
}

export const ParliamentaryChat: React.FC<ParliamentaryChatProps> = ({
  initialRuleCitation,
  onClearInitialCitation
}) => {
  const currentChannel = CHAT_CHANNELS[0];
  const STORAGE_KEY = 'mun_single_channel_chat_v2';

  // Clear legacy chats and load current channel messages
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      // Clear legacy multiple-channel storage
      localStorage.removeItem('mun_chat_messages_v1');
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_CHAT_MESSAGES;
    } catch {
      return INITIAL_CHAT_MESSAGES;
    }
  });

  // Current user persona
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('mun_delegate_name') || 'Delegate of Japan';
  });
  const [userCountry, setUserCountry] = useState<string>(() => {
    return localStorage.getItem('mun_delegate_country') || 'DISEC Committee';
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // New message state
  const [inputText, setInputText] = useState('');
  const [selectedCitationRuleId, setSelectedCitationRuleId] = useState<string | null>(initialRuleCitation || null);
  const [showCitationDropdown, setShowCitationDropdown] = useState(false);
  const [isSimulatingResponse, setIsSimulatingResponse] = useState(false);

  // Active rule modal
  const [inspectedRule, setInspectedRule] = useState<RuleOfProcedure | null>(null);

  // Active view tab (Chat vs Practice Drill)
  const [activeTab, setActiveTab] = useState<'chat' | 'quiz'>('chat');
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync initial citation prop
  useEffect(() => {
    if (initialRuleCitation) {
      setSelectedCitationRuleId(initialRuleCitation);
      if (onClearInitialCitation) onClearInitialCitation();
    }
  }, [initialRuleCitation, onClearInitialCitation]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab]);

  // Save messages to local storage
  const saveMessages = (newMessages: ChatMessage[]) => {
    setMessages(newMessages);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearAllChats = () => {
    if (window.confirm('Are you sure you want to clear all messages in the chamber?')) {
      saveMessages([]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      channelId: currentChannel.id,
      senderName: userName || 'Delegate',
      senderRole: 'Delegate',
      senderCountry: userCountry || 'Member State',
      avatarBg: 'bg-amber-600',
      timestamp: 'Just now',
      content: inputText.trim(),
      ruleCitationId: selectedCitationRuleId || undefined,
      likes: 0
    };

    const updated = [...messages, newMsg];
    saveMessages(updated);
    const sentText = inputText;
    setInputText('');
    setSelectedCitationRuleId(null);

    // Check if user tagged an HD or asked a parliamentary question
    const mentionsRafay = sentText.toLowerCase().includes('rafay') || sentText.toLowerCase().includes('@abdul rafay');
    const mentionsRehman = sentText.toLowerCase().includes('rehman') || sentText.toLowerCase().includes('@abdul rehman');
    const mentionsMusa = sentText.toLowerCase().includes('musa') || sentText.toLowerCase().includes('@musa adnan');
    const isQuestion = sentText.includes('?') || mentionsRafay || mentionsRehman || mentionsMusa;

    if (isQuestion) {
      setIsSimulatingResponse(true);
      setTimeout(() => {
        let responderName = 'Abdul Rehman';
        let responderRole = 'Head Delegate (HD) · Secretariat Chief';
        let responderAvatar = 'bg-amber-600';
        let replyContent = '';
        let citationId: string | undefined = undefined;

        if (mentionsMusa) {
          responderName = 'Musa Adnan';
          responderRole = 'Head Delegate (HD) · Parliamentary Affairs & Crisis Master';
          responderAvatar = 'bg-red-700';
          replyContent = `Excellent point, ${userName}! In high-tempo debate and continuous crisis, procedural agility is paramount. Keep your directives concise and well-scoped. Reach out on WhatsApp (+92 313 7369696) anytime for crisis directives review!`;
          citationId = 'rop-crisis-directive';
        } else if (mentionsRafay) {
          responderName = 'Abdul Rafay';
          responderRole = 'Head Delegate (HD) · Strategy & Directorate';
          responderAvatar = 'bg-cyan-700';
          replyContent = `Strategic observation, ${userName}. Keep control of the General Speakers List and use unmoderated caucuses to consolidate sponsors. Feel free to call or WhatsApp me at +92 323 8874600 for strategy consultation!`;
          citationId = 'rop-mod-caucus';
        } else {
          responderName = 'Abdul Rehman';
          responderRole = 'Head Delegate (HD) · Secretariat Chief';
          responderAvatar = 'bg-amber-600';
          replyContent = `Insightful inquiry, ${userName}! Under codified Rules of Procedure, procedural points take strict precedence over substantive business. Always state the rule number clearly to the Dais. Feel free to reach me at +92 314 3882579 for any procedural clarification!`;
          citationId = 'rop-point-of-order';
        }

        const replyMsg: ChatMessage = {
          id: `msg-${Date.now() + 1}`,
          channelId: currentChannel.id,
          senderName: responderName,
          senderRole: responderRole,
          senderCountry: 'Executive Board',
          avatarBg: responderAvatar,
          timestamp: 'Just now',
          content: replyContent,
          ruleCitationId: citationId,
          likes: 1
        };

        setMessages(prev => {
          const next = [...prev, replyMsg];
          saveMessages(next);
          return next;
        });
        setIsSimulatingResponse(false);
      }, 1500);
    }
  };

  const handleLikeMessage = (msgId: string) => {
    setMessages(prev => {
      const next = prev.map(m => m.id === msgId ? { ...m, likes: m.likes + 1 } : m);
      saveMessages(next);
      return next;
    });
  };

  // Parliamentary procedure drill scenarios
  const QUIZ_SCENARIOS = [
    {
      question: 'A delegate has 20 seconds remaining on their speech during a Moderated Caucus. They declare: "The delegate yields the remaining time to the Chair." How should the Chair rule?',
      options: [
        'A. Well-taken; the Chair absorbs the 20 seconds.',
        'B. Out of order; yields do not exist during Moderated Caucuses.',
        'C. In order; the Chair must immediately open the floor to Points of Information.',
        'D. Well-taken; remaining time is transferred to the next speaker on the GSL.'
      ],
      correctIndex: 1,
      explanation: 'Under RoP Rule 2.4, yields ONLY apply to speeches from the General Speakers List (GSL). Yields do not exist in Moderated Caucuses; when a delegate concludes speaking early during a caucus, the Chair simply recognizes the next speaker!'
    },
    {
      question: 'Which of the following points is the ONLY parliamentary motion or point permitted to interrupt a speaker while they are speaking?',
      options: [
        'A. Point of Order (Procedural infraction)',
        'B. Point of Parliamentary Inquiry (Question to the Chair)',
        'C. Point of Personal Privilege (Strictly for inaudibility)',
        'D. Right of Reply'
      ],
      correctIndex: 2,
      explanation: 'Under RoP Rule 5.1, Point of Personal Privilege is the highest-ranking point and the ONLY point that may interrupt a speaker, and strictly only if the speaker cannot be heard (inaudibility).'
    },
    {
      question: 'During formal voting on a substantive Draft Resolution, what threshold is required to pass a "Motion to Divide the Question"?',
      options: [
        'A. Two-Thirds Majority (66.7%)',
        'B. Simple Majority (50% + 1)',
        'C. Unanimous consent of all sponsors',
        'D. Chair Discretion only'
      ],
      correctIndex: 1,
      explanation: 'Under RoP Rule 7.3, a Motion for Division of the Question requires two speakers in favor, two against, and passes with a Simple Majority (50% + 1) of member states present and voting.'
    },
    {
      question: 'A delegate who answered "Present and Voting" at the opening Roll Call wishes to abstain during the final roll call vote on Draft Resolution 1.1. Can they do so?',
      options: [
        'A. Yes, any delegate can abstain at their sovereign discretion.',
        'B. Yes, provided they send a note to the Director.',
        'C. No, declaring "Present and Voting" legally waives the right to abstain.',
        'D. Yes, but only if they vote "Abstain with Rights".'
      ],
      correctIndex: 2,
      explanation: 'Under RoP Rule 1.1, delegates declaring "Present and Voting" explicitly surrender the right to abstain on substantive draft resolutions and MUST cast a vote of "Yes" or "No".'
    }
  ];

  const handleSelectQuizOption = (index: number) => {
    if (quizAnswered) return;
    setSelectedQuizOption(index);
    setQuizAnswered(true);
    if (index === QUIZ_SCENARIOS[currentQuizIndex].correctIndex) {
      setQuizScore(s => s + 1);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < QUIZ_SCENARIOS.length - 1) {
      setCurrentQuizIndex(i => i + 1);
      setSelectedQuizOption(null);
      setQuizAnswered(false);
    } else {
      setCurrentQuizIndex(0);
      setSelectedQuizOption(null);
      setQuizAnswered(false);
    }
  };

  return (
    <section id="parliamentary-chat" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Delegate Deliberation & Procedure Forum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Parliamentary Procedure Discussion Chamber
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Live discussion channel for members to discuss parliamentary procedure, 
              clarify rules of procedure, debate motions, and seek direct guidance from the Executive Head Delegates.
            </p>
          </div>

          {/* Tab Selector (Chat vs Drill) */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1 bg-slate-800 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'chat'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Live Discussion</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'quiz'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>RoP Knowledge Drill</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Discussion Chamber (Single Channel) */}
        {activeTab === 'chat' ? (
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[620px] max-h-[780px]">
            {/* Left Sidebar: Delegation Profile & HD Direct Hotline */}
            <div className="w-full md:w-72 bg-slate-950/70 border-r border-slate-700/70 flex flex-col justify-between shrink-0">
              <div>
                {/* Active Channel Info */}
                <div className="p-4 border-b border-slate-800 bg-slate-900/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    <Hash className="w-4 h-4 text-amber-400" />
                    <span>Official Channel</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white">
                    {currentChannel.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {currentChannel.description}
                  </p>
                </div>

                {/* User Persona Placard Box */}
                <div className="p-4 border-b border-slate-800 bg-slate-900/40">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Your Placard Identification
                    </span>
                    <button
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                      className="text-[11px] text-amber-400 hover:underline"
                    >
                      {isEditingProfile ? 'Save' : 'Edit'}
                    </button>
                  </div>

                  {isEditingProfile ? (
                    <div className="mt-2 space-y-2">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                          localStorage.setItem('mun_delegate_name', e.target.value);
                        }}
                        placeholder="Delegate Name / Placard"
                        className="w-full bg-slate-800 text-xs px-2.5 py-1.5 rounded border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                      />
                      <input
                        type="text"
                        value={userCountry}
                        onChange={(e) => {
                          setUserCountry(e.target.value);
                          localStorage.setItem('mun_delegate_country', e.target.value);
                        }}
                        placeholder="Committee / Delegation"
                        className="w-full bg-slate-800 text-xs px-2.5 py-1.5 rounded border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
                        {userName[0]}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white truncate">{userName}</div>
                        <div className="text-[10px] text-slate-400 truncate">{userCountry}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Instructions */}
                <div className="p-4 text-xs text-slate-400 leading-relaxed space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Chamber Protocol:
                  </div>
                  <p className="text-[11px]">
                    Discuss parliamentary procedure, Points of Order, caucuses, and resolution drafting.
                  </p>
                  <p className="text-[11px]">
                    Use <strong>"Cite RoP"</strong> to link specific rules. Mention <strong>@Abdul Rafay</strong>, <strong>@Abdul Rehman</strong>, or <strong>@Musa Adnan</strong> for procedural advice.
                  </p>
                </div>
              </div>

              {/* Head Delegates Fast Contacts Widget in Sidebar */}
              <div className="p-3 m-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div className="flex items-center justify-between text-amber-400 font-semibold mb-2">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Head Delegates Hotline</span>
                  </div>
                  {messages.length > 0 && (
                    <button
                      onClick={handleClearAllChats}
                      title="Clear chamber messages"
                      className="text-slate-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="space-y-2 text-[11px] text-slate-300">
                  {HEAD_DELEGATES.map(hd => (
                    <div key={hd.id} className="flex items-center justify-between">
                      <span className="truncate">{hd.name}</span>
                      <a
                        href={hd.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-emerald-400 hover:underline shrink-0 font-mono"
                      >
                        {hd.phoneDisplay.slice(-10)}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Message Stream & Composer */}
            <div className="flex-1 flex flex-col justify-between bg-slate-900/60">
              {/* Channel Header Banner */}
              <div className="px-6 py-3.5 border-b border-slate-700/60 bg-slate-900/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-display font-bold text-white">
                    <Hash className="w-4 h-4 text-amber-400" />
                    <span>{currentChannel.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {currentChannel.topic}
                  </p>
                </div>

                {/* Quick Rule Citation Helper button */}
                <div className="relative">
                  <button
                    onClick={() => setShowCitationDropdown(!showCitationDropdown)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cite RoP Rule</span>
                  </button>

                  {/* Citation Dropdown */}
                  {showCitationDropdown && (
                    <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-30 max-h-64 overflow-y-auto">
                      <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">
                        Select Rule to Cite in Message
                      </div>
                      {RULES_OF_PROCEDURE.map(r => (
                        <button
                          key={r.id}
                          onClick={() => {
                            setSelectedCitationRuleId(r.id);
                            setShowCitationDropdown(false);
                          }}
                          className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-800 text-xs text-slate-200 flex items-center justify-between transition-colors"
                        >
                          <span className="font-mono text-amber-400 font-semibold">{r.ruleNumber}</span>
                          <span className="truncate ml-2 text-slate-300">{r.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                      <MessageSquare className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Parliamentary Discussion Chamber
                    </h3>
                    <p className="text-xs text-slate-400 max-w-md mt-1 mb-6 leading-relaxed">
                      All previous chats have been cleared. Be the first to start the parliamentary debate! 
                      Ask any question regarding Rules of Procedure, motion precedence, or consult the Head Delegates.
                    </p>

                    {/* Quick Starters */}
                    <div className="w-full max-w-lg space-y-2 text-left">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2">
                        Suggested Discussion Starters:
                      </div>
                      {[
                        'Can a delegate yield remaining time during a Moderated Caucus?',
                        'When is a Motion for Division of the Question in order?',
                        '@Abdul Rehman How should the Chair rule if a delegate calls a Point of Order on substantive facts?',
                        '@Abdul Rafay What is the best strategy for locking sponsors on our Draft Resolution?'
                      ].map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => setInputText(prompt)}
                          className="w-full p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-amber-500/50 text-xs text-slate-300 hover:text-white transition-all text-left flex items-center justify-between group"
                        >
                          <span className="truncate">{prompt}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  messages.map(msg => {
                    const isHd = msg.senderRole.includes('HD') || msg.senderRole.includes('Head Delegate');
                    const citationRule = msg.ruleCitationId 
                      ? RULES_OF_PROCEDURE.find(r => r.id === msg.ruleCitationId)
                      : null;

                    return (
                      <div 
                        key={msg.id}
                        className={`p-4 rounded-xl border transition-all ${
                          msg.isPinned
                            ? 'bg-amber-950/20 border-amber-500/40'
                            : isHd
                            ? 'bg-slate-800/80 border-slate-700/80'
                            : 'bg-slate-900/70 border-slate-800'
                        }`}
                      >
                        {/* Top Message Meta */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-7 h-7 rounded-full ${msg.avatarBg} text-white flex items-center justify-center font-bold text-xs shadow`}>
                              {msg.senderName[0]}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white">
                                  {msg.senderName}
                                </span>
                                {isHd && (
                                  <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded">
                                    HD Directorate
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {msg.senderCountry || msg.senderRole} · {msg.timestamp}
                              </div>
                            </div>
                          </div>

                          {msg.isPinned && (
                            <div className="flex items-center gap-1 text-[10px] text-amber-400 font-semibold">
                              <Pin className="w-3 h-3" />
                              <span>Pinned Ruling</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-9">
                          {msg.content}
                        </p>

                        {/* Rule Citation Pill */}
                        {citationRule && (
                          <div className="ml-9 mt-2.5">
                            <button
                              onClick={() => setInspectedRule(citationRule)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 text-amber-400 hover:text-amber-300 text-[11px] font-mono border border-amber-500/30 transition-colors"
                            >
                              <BookOpen className="w-3 h-3 text-amber-400" />
                              <span>Cited: {citationRule.ruleNumber} · {citationRule.title} (Click to inspect)</span>
                            </button>
                          </div>
                        )}

                        {/* Footer Actions */}
                        <div className="ml-9 mt-3 pt-2 border-t border-slate-700/40 flex items-center gap-4 text-xs text-slate-400">
                          <button
                            onClick={() => handleLikeMessage(msg.id)}
                            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>{msg.likes}</span>
                          </button>

                          <button
                            onClick={() => {
                              setInputText(`@${msg.senderName} `);
                            }}
                            className="hover:text-slate-200 transition-colors text-[11px]"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}

                {/* Simulated Response Spinner */}
                {isSimulatingResponse && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700 text-xs text-amber-300 animate-pulse">
                    <Shield className="w-4 h-4 text-amber-400 animate-spin" />
                    <span>Executive Head Delegate is drafting procedural response...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Message Composer */}
              <div className="p-4 border-t border-slate-700/70 bg-slate-900/90">
                {/* Active Citation Badge */}
                {selectedCitationRuleId && (
                  <div className="mb-2 flex items-center justify-between px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Attaching Citation: {RULES_OF_PROCEDURE.find(r => r.id === selectedCitationRuleId)?.ruleNumber} - {RULES_OF_PROCEDURE.find(r => r.id === selectedCitationRuleId)?.title}
                    </span>
                    <button
                      onClick={() => setSelectedCitationRuleId(null)}
                      className="text-slate-400 hover:text-white text-xs ml-2 font-bold"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* Quick Mention Pills */}
                <div className="flex items-center gap-1.5 mb-2 overflow-x-auto text-[11px] text-slate-400">
                  <span className="shrink-0">Tag Arbiter:</span>
                  <button
                    type="button"
                    onClick={() => setInputText(prev => `${prev} @Abdul Rafay `)}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                  >
                    @Abdul Rafay
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputText(prev => `${prev} @Abdul Rehman `)}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                  >
                    @Abdul Rehman
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputText(prev => `${prev} @Musa Adnan `)}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                  >
                    @Musa Adnan
                  </button>
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discuss parliamentary procedure or ask a rules question (e.g. Can the Chair deny an unmoderated caucus?)..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:hover:bg-amber-500 text-slate-950 text-xs font-bold transition-all shadow flex items-center gap-1.5"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: RoP Knowledge Drill */
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
            <div className="flex items-center justify-between pb-6 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span className="font-display font-bold text-lg text-white">
                  Parliamentary Procedure Practice Drill
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Scenario {currentQuizIndex + 1} of {QUIZ_SCENARIOS.length} · Score: <strong className="text-amber-400">{quizScore}</strong>
              </div>
            </div>

            <div className="py-6">
              <h3 className="text-base sm:text-lg font-medium text-white leading-relaxed mb-6">
                {QUIZ_SCENARIOS[currentQuizIndex].question}
              </h3>

              <div className="space-y-3">
                {QUIZ_SCENARIOS[currentQuizIndex].options.map((option, idx) => {
                  let buttonStyle = 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500';
                  if (quizAnswered) {
                    if (idx === QUIZ_SCENARIOS[currentQuizIndex].correctIndex) {
                      buttonStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold';
                    } else if (idx === selectedQuizOption) {
                      buttonStyle = 'bg-red-950/60 border-red-500 text-red-200';
                    } else {
                      buttonStyle = 'bg-slate-900/40 border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={quizAnswered}
                      onClick={() => handleSelectQuizOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all ${buttonStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-700 animate-in fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase mb-1">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span>Dais Rationale & Official Rule Analysis</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {QUIZ_SCENARIOS[currentQuizIndex].explanation}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={handleNextQuiz}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
                    >
                      <span>{currentQuizIndex < QUIZ_SCENARIOS.length - 1 ? 'Next Scenario' : 'Restart Drill'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Inspect Rule Modal */}
      {inspectedRule && (
        <RuleDetailModal
          rule={inspectedRule}
          onClose={() => setInspectedRule(null)}
          isBookmarked={false}
          onToggleBookmark={() => {}}
        />
      )}
    </section>
  );
};
