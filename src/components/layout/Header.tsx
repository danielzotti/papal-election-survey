import React from 'react';
import { Cross } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-md">
      <div className="container mx-auto py-6 px-6 flex items-center justify-center relative flex-col">
        <div className="flex items-center space-x-2">
          <Cross className="h-6 w-6 text-accent-400" />
          <span className="text-sm font-serif italic text-white/80">
            Vatican Survey
          </span>
        </div>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-wide">
            Papal Election Survey
          </h1>
          <p className="text-sm opacity-80 mt-1 max-w-md mx-auto">
            Share your voice in selecting the next Holy Father
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
