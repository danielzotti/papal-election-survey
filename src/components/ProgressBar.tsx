import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.min(((current - 1) / (total - 1)) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-xs text-gray-500">
        <span>Start</span>
        <span>Complete</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary-700 to-accent-400 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 text-center text-sm text-gray-600 flex justify-between items-center">
        <span className="text-xs">Question {current}</span>
        <div className="inline-flex items-center justify-center">
          {Array.from({ length: total }).map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 mx-0.5 rounded-full transition-all duration-300 ${
                i < current ? 'bg-primary-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-xs">of {total}</span>
      </div>
    </div>
  );
};

export default ProgressBar;