
import React from 'react';
import { useAppContext } from './context/AppContext';
import NameModal from './components/NameModal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import CoachPage from './pages/CoachPage';
import LeaderboardPage from './pages/LeaderboardPage';
import LearningHubPage from './pages/LearningHubPage';
import { Page } from './types';

const App: React.FC = () => {
  const { player, currentPage, setCurrentPage } = useAppContext();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'games':
        return <GamesPage />;
      case 'coach':
        return <CoachPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'learning':
        return <LearningHubPage />;
      default:
        return <HomePage />;
    }
  };
  
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (!player) {
    return <NameModal />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onNavigate={handleNavigate} />
      <main className="container mx-auto p-6">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
