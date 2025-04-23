import React, { useEffect, useState } from 'react';
import { useSurvey } from '../context/SurveyContext';
import ProgressBar from './ProgressBar';
import AgeQuestion from './questions/AgeQuestion';
import GenderQuestion from './questions/GenderQuestion';
import CountryQuestion from './questions/CountryQuestion';
import RaceQuestion from './questions/RaceQuestion';
import PersonalityQuestion from './questions/PersonalityQuestion';
import ReviewStep from './questions/ReviewStep';
import ThankYou from './ThankYou';
import NameQuestion from './questions/NameQuestion';
import { SharedSurvey } from './SharedSurvey';

const SurveyContainer: React.FC = () => {
  const { currentStep, totalSteps, isCompleted } = useSurvey();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  if (isCompleted) {
    return <ThankYou />;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AgeQuestion />;
      case 2:
        return <CountryQuestion />;
      case 3:
        return <RaceQuestion />;
      case 4:
        return <PersonalityQuestion />;
      case 5:
        return <GenderQuestion />;
      case 6:
        return <NameQuestion />;
      case 7:
        return <ReviewStep />;
      default:
        return <SharedSurvey />;
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <ProgressBar current={currentStep} total={totalSteps} />
      <div
        className={`bg-white rounded-lg shadow-lg p-6 sm:p-8 mt-4 transition-all duration-300 transform ${
          animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        {renderStep()}
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 italic">
          "The Church's future depends on your insights."
        </p>
      </div>
    </div>
  );
};

export default SurveyContainer;
