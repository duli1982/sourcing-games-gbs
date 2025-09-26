
import React from 'react';
import { useAppContext } from './context/AppContext';
import NameModal from './components/NameModal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import CoachPage from './pages/CoachPage';
import LeaderboardPage from './pages/LeaderboardPage';
import LearningHubPage from './pages/LearningHubPage';
import Toast from './components/Toast';
import { Page } from './types';

const App: React.FC = () => {
  const { player, currentPage, setCurrentPage, toasts } = useAppContext();

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (!player) {
    return <NameModal />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="container mx-auto p-6">
        <div className="relative">
          {/* By applying the 'active' class, we can control visibility and transitions via CSS */}
          <div className={`page ${currentPage === 'home' ? 'active' : ''}`}><HomePage /></div>
          <div className={`page ${currentPage === 'games' ? 'active' : ''}`}><GamesPage /></div>
          <div className={`page ${currentPage === 'coach' ? 'active' : ''}`}><CoachPage /></div>
          <div className={`page ${currentPage === 'leaderboard' ? 'active' : ''}`}><LeaderboardPage /></div>
          <div className={`page ${currentPage === 'learning' ? 'active' : ''}`}><LearningHubPage /></div>
        </div>
      </main>
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} type={toast.type} id={toast.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
