
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { Player, Page, Toast, ToastType } from '../types';

interface AppContextType {
  player: Player | null;
  setPlayer: (player: Player) => void;
  leaderboard: Player[];
  updateScore: (gameScore: number) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  toasts: Toast[];
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
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
  const [player, setPlayerState] = useState<Player | null>(() => {
      try {
          const item = window.localStorage.getItem('player');
          return item ? JSON.parse(item) : null;
      } catch (error) {
          console.error("Failed to parse player from localStorage", error);
          return null;
      }
  });
  const [leaderboard, setLeaderboard] = useState<Player[]>(() => {
    try {
        const item = window.localStorage.getItem('leaderboard');
        return item ? JSON.parse(item) : initialLeaderboard;
    } catch (error) {
        console.error("Failed to parse leaderboard from localStorage", error);
        return initialLeaderboard;
    }
  });
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
        if(player) {
            window.localStorage.setItem('player', JSON.stringify(player));
        } else {
            window.localStorage.removeItem('player');
        }
    } catch (error) {
        console.error("Failed to save player to localStorage", error);
    }
  }, [player]);

  useEffect(() => {
    try {
        window.localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    } catch (error) {
        console.error("Failed to save leaderboard to localStorage", error);
    }
  }, [leaderboard]);


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

    let newTotalScore = 0;
    setLeaderboard(prev => {
        const updatedLeaderboard = prev.map(p => {
            if (p.name === player.name) {
                newTotalScore = p.score + gameScore;
                return { ...p, score: newTotalScore };
            }
            return p;
        });
        return updatedLeaderboard.sort((a, b) => b.score - a.score);
    });

    setPlayerState(prevPlayer => {
      if(!prevPlayer) return null;
      return { ...prevPlayer, score: newTotalScore };
    });
  }, [player]);

  const addToast = (message: string, type: ToastType) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const value = { player, setPlayer, leaderboard, updateScore, currentPage, setCurrentPage, toasts, addToast, removeToast };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
