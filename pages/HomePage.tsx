
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';

const HomePage: React.FC = () => {
    const { player, setCurrentPage } = useAppContext();
    
    const handleNavigate = (page: Page) => {
      setCurrentPage(page);
    };

    return (
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Welcome, {player?.name}!</h2>
            <p className="text-gray-300 mb-6">You are now part of a global competition for top tech recruiters. Compete in sourcing games, learn from our AI Coach, and climb the leaderboard to prove you're the best.</p>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 text-white">Compete & Win</h3>
                    <p className="text-gray-400">Tackle real-world sourcing challenges and earn points for your precision and creativity.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 text-white">Learn with AI</h3>
                    <p className="text-gray-400">Get personalized feedback and strategies from your dedicated AI Coach, powered by Gemini.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 text-white">Climb the Ranks</h3>
                    <p className="text-gray-400">See how you stack up against your peers on a live, global leaderboard.</p>
                </div>
            </div>
             <button onClick={() => handleNavigate('games')} className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Go to The Games
            </button>
        </div>
    );
};

export default HomePage;
