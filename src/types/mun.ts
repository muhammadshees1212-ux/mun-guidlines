export interface HeadDelegate {
  id: string;
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsappLink: string;
  email?: string;
  specialization?: string[];
  bio?: string;
  delegationRole?: string;
  availableHours?: string;
}

export type RoPCategory = 
  | 'General Debate' 
  | 'Caucuses' 
  | 'Points & Inquiries' 
  | 'Procedural Motions' 
  | 'Draft Resolutions & Amendments' 
  | 'Voting Procedure' 
  | 'Crisis & Directives';

export type RoPFramework = 'Universal / UNA-USA' | 'THIMUN' | 'Crisis Committee';

export interface RuleOfProcedure {
  id: string;
  ruleNumber: string;
  title: string;
  category: RoPCategory;
  framework: RoPFramework;
  precedenceRank: number; // 1 = highest priority (e.g. Point of Personal Privilege), 10 = lowest
  voteRequired: 
    | 'None (Dais Discretion)' 
    | 'Simple Majority (50% + 1)' 
    | 'Two-Thirds Majority (66.7%)' 
    | 'Consensus / Acclamation' 
    | 'Chair Discretion Only'
    | 'None (Unanimous Sponsor Consent)'
    | 'None (Automatic upon Request or 1/5th Support)'
    | 'None (Crisis Director / Backroom Approval)'
    | string;
  interruptsSpeaker: boolean;
  debatable: boolean;
  summary: string;
  fullExplanation: string;
  verbatimScript: string;
  chairRuling: string;
  commonPitfalls: string[];
  tags: string[];
}

export interface DownloadableDocument {
  id: string;
  title: string;
  category: 'Rulebooks' | 'Templates' | 'Clauses & Lexicon' | 'Cheat Sheets' | 'Crisis Kit';
  format: 'DOCX / TXT' | 'PDF / Print' | 'Markdown';
  fileSize: string;
  pages: number;
  description: string;
  recommendedFor: string;
  downloadFileName: string;
  content: string;
  highlights: string[];
}

export interface ChatMessage {
  id: string;
  channelId: string;
  senderName: string;
  senderRole: string; // e.g., "HD / Directorate", "Delegate", "Secretariat", "Chair"
  senderCountry?: string;
  avatarBg: string;
  timestamp: string;
  content: string;
  ruleCitationId?: string;
  likes: number;
  isPinned?: boolean;
}

export interface ChatChannel {
  id: string;
  name: string;
  slug: string;
  description: string;
  topic: string;
  unreadCount?: number;
}
