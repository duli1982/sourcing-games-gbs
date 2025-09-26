import React from 'react';
import GameCard from '../components/GameCard';
import { games } from '../data/games';

const getNextFriday = (): Date => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + (daysUntilFriday === 0 ? 7 : daysUntilFriday));
    nextFriday.setHours(9, 0, 0, 0); // Set to 9 AM for clarity
    return nextFriday;
};

const GamesPage: React.FC = () => {
    // Determine which game to show based on the week number
    // This creates a stable rotation that changes each week
    const startDate = new Date('2024-01-05T00:00:00Z'); // A known past Friday
    const now = new Date();
    const weeksPassed = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
    const gameIndex = weeksPassed % games.length;
    const currentGame = games[gameIndex];

    const nextFriday = getNextFriday();
    const nextChallengeDate = nextFriday.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div>
            <div className="mb-6 border-b border-gray-700 pb-4">
                 <h2 className="text-3xl font-bold text-cyan-400">This Week's Challenge</h2>
                 <p className="text-gray-400 mt-1">A new sourcing game unlocks every Friday. Good luck!</p>
            </div>
            <div className="space-y-8">
                <GameCard key={currentGame.id} game={currentGame} />
            </div>
            <div className="mt-8 text-center bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">The next challenge will be available on <span className="font-bold text-cyan-400">{nextChallengeDate}</span>.</p>
            </div>
        </div>
    );
};

export default GamesPage;