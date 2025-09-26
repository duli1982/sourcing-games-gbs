
import React from 'react';
import { useAppContext } from '../context/AppContext';

const LeaderboardPage: React.FC = () => {
    const { leaderboard, player } = useAppContext();

    return (
        <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Leaderboard</h2>
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl overflow-x-auto">
                <table className="w-full text-left min-w-[400px]">
                    <thead className="border-b-2 border-gray-600">
                        <tr>
                            <th className="p-3 text-lg">Rank</th>
                            <th className="p-3 text-lg">Name</th>
                            <th className="p-3 text-lg">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((p, index) => {
                            const isCurrentUser = p.name === player?.name;
                            return (
                                <tr key={index} className={`${isCurrentUser ? 'bg-cyan-900/50 font-bold' : 'border-b border-gray-700 hover:bg-gray-700/50'}`}>
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{p.name} {isCurrentUser ? '(You)' : ''}</td>
                                    <td className="p-3">{p.score}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderboardPage;
