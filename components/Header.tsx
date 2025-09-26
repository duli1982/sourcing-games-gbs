
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'games', label: 'The Games' },
    { page: 'coach', label: 'AI Coach' },
    { page: 'leaderboard', label: 'Leaderboard' },
    { page: 'learning', label: 'Learning Hub' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page: Page) => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-gray-800 shadow-lg sticky top-0 z-40">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">AI Sourcing League</h1>
                    <p className="text-sm text-cyan-400">Powered by Randstad & Gemini</p>
                </div>
                <div className="hidden md:flex space-x-2">
                    {navItems.map(item => (
                         <button 
                            key={item.page} 
                            onClick={() => handleNavClick(item.page)} 
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${currentPage === item.page ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div className="md:hidden">
                    <button id="mobileMenuButton" aria-label="Open menu" className="text-white focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                 <div className="md:hidden">
                    {navItems.map(item => (
                        <button 
                            key={item.page} 
                            onClick={() => handleNavClick(item.page)} 
                            className={`block w-full text-left py-2 px-4 text-sm  transition-colors duration-200 ${currentPage === item.page ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
