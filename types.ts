
export interface Player {
  name: string;
  score: number;
}

export type Page = 'home' | 'games' | 'coach' | 'leaderboard' | 'learning';

export interface ChatMessage {
  sender: 'user' | 'coach';
  text: string;
  isTyping?: boolean;
}

export interface Game {
    id: string;
    title: string;
    description: string;
    task: string;
    context?: string;
    placeholder: string;
    promptGenerator: (submission: string) => string;
}
