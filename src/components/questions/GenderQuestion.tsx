import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';
import { genderIdentities } from '../../data/genders';

const GenderQuestion: React.FC = () => {
  const { surveyData, updateSurveyData, nextStep, prevStep } = useSurvey();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!surveyData.gender) {
      setError('Please predict the gender of the next Pope');
      return;
    }
    nextStep();
  };

  const handleChange = (value: string) => {
    updateSurveyData('gender', value);
    setError('');
  };

  // Historically, only males have been elected as Pope
  // const genderOptions = ['Male'];

  return (
    <QuestionLayout
      title="What gender do you predict for the next Pope?"
      description="Historically, the Catholic Church has maintained a tradition of male Popes."
      onNext={handleNext}
      onPrevious={prevStep}
      error={error}
    >
      <div className="grid grid-cols-1 gap-3 mt-6">
        {genderIdentities.map(({ name, description }) => (
          <button
            key={name}
            onClick={() => handleChange(name)}
            className={`option-btn ${
              surveyData.gender === name ? 'option-btn-selected' : ''
            }`}
          >
            <span>{name}</span>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </button>
        ))}
      </div>
    </QuestionLayout>
  );
};

export default GenderQuestion;
