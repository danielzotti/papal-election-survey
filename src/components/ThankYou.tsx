import React, { useEffect, useState } from 'react';
import { CheckCircle, Share2 } from 'lucide-react';
import { useSurvey } from '../context/SurveyContext';

const ThankYou: React.FC = () => {
  const { resetSurvey, surveyData } = useSurvey();
  const [showAnimation, setShowAnimation] = useState(false);

  const share = () => {
    const url = `${window.location.origin}?${new URLSearchParams({
      ...surveyData,
      'survey-result': '1',
    } as any).toString()}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-lg mx-auto">
      <div
        className={`transform transition-all duration-1000 ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="inline-flex items-center justify-center bg-primary-700/10 h-24 w-24 rounded-full mb-6">
          <CheckCircle size={48} className="text-primary-700" />
        </div>
      </div>

      <h2 className="text-3xl font-serif text-tertiary-800 mb-4">Thank You!</h2>

      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Your response has been recorded. Your input is valuable in the process
        of selecting the next Pope.
      </p>

      <div className="w-16 h-1 bg-accent-400 mx-auto my-6 rounded-full"></div>

      <p className="text-gray-500 italic mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
        "Habemus Papam" - The announcement when a new Pope is elected
      </p>

      <div className="space-y-4">
        <button
          onClick={share}
          className="px-5 py-2 text-primary-700 border border-primary-700 rounded-full hover:bg-primary-50 transition-colors inline-flex items-center justify-center space-x-2"
        >
          <Share2 size={18} />
          <span>Share This Survey</span>
        </button>

        <button
          onClick={resetSurvey}
          className="px-6 py-3 bg-tertiary-800 text-white rounded-full hover:bg-tertiary-900 transition-colors block w-full"
        >
          Take Survey Again
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
