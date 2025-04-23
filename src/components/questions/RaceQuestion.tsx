import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';

const RaceQuestion: React.FC = () => {
  const { surveyData, updateSurveyData, nextStep, prevStep } = useSurvey();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!surveyData.race) {
      setError('Please predict the ethnicity of the next Pope');
      return;
    }
    nextStep();
  };

  const handleChange = (value: string) => {
    updateSurveyData('race', value);
    setError('');
  };

  const raceOptions = [
    'European/White', 
    'African/Black', 
    'Latin American/Hispanic', 
    'Asian',
    'Middle Eastern',
    'Mixed Heritage'
  ];

  return (
    <QuestionLayout 
      title="What ethnicity do you predict for the next Pope?"
      description="As the Church becomes more global, considering ethnic diversity in papal leadership becomes increasingly relevant."
      onNext={handleNext}
      onPrevious={prevStep}
      error={error}
    >
      <div className="grid grid-cols-1 gap-2 mt-6">
        {raceOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleChange(option)}
            className={`option-btn ${surveyData.race === option ? 'option-btn-selected' : ''}`}
          >
            <span className="block font-medium">{option}</span>
          </button>
        ))}
      </div>
    </QuestionLayout>
  );
};

export default RaceQuestion;