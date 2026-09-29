import { ChatChannel, ChatMessage } from '../types/mun';

export const CHAT_CHANNELS: ChatChannel[] = [
  {
    id: 'parliamentary-chamber',
    name: 'Parliamentary Procedure Chamber',
    slug: 'parliamentary-procedure',
    description: 'Official deliberation hall for members to discuss parliamentary procedure, Points & Motions, resolution drafting, and committee tactics.',
    topic: 'Rules of Procedure (RoP) inquiries, debate tactics, and consultation with Executive Head Delegates.'
  }
];

// All initial / existing chats removed as requested.
export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [];
