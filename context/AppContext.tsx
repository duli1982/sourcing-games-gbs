
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { Player, Page } from '../types';

interface AppContextType {
  player: Player | null;
  setPlayer: (player: Player) => void;
  leaderboard: Player[];
  updateScore: (gameScore: number) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialLeaderboard: Player[] = [
    { name: 'Alex Johnson', score: 150 },
    { name: 'Maria Garcia', score: 135 },
    { name: 'Chen Wei', score: 110 },
    { name: 'Fatima Al-Sayed', score: 95 },
    { name: 'John Smith', score: 80 }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [player, setPlayerState] = useState<Player | null>(null);
  const [leaderboard, setLeaderboard] = useState<Player[]>(initialLeaderboard);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const setPlayer = (newPlayer: Player) => {
    setPlayerState(newPlayer);
    setLeaderboard(prev => {
        const existingPlayer = prev.find(p => p.name.toLowerCase() === newPlayer.name.toLowerCase());
        if (!existingPlayer) {
            return [...prev, newPlayer].sort((a, b) => b.score - a.score);
        }
        return prev;
    });
  };
  
  const updateScore = useCallback((gameScore: number) => {
    if (!player) return;

    setLeaderboard(prev => {
        const updatedLeaderboard = prev.map(p => 
            p.name === player.name ? { ...p, score: p.score + gameScore } : p
        );
        return updatedLeaderboard.sort((a, b) => b.score - a.score);
    });

    setPlayerState(prevPlayer => {
      if(!prevPlayer) return null;
      const newScore = prevPlayer.score + gameScore;
      return { ...prevPlayer, score: newScore };
    });
  }, [player]);
  

  const value = { player, setPlayer, leaderboard, updateScore, currentPage, setCurrentPage };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
