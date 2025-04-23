import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';
import { personalityTraits } from '../../data/personality-traits';

const PersonalityQuestion: React.FC = () => {
  const { surveyData, updateSurveyData, nextStep, prevStep } = useSurvey();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!surveyData.personality || surveyData.personality.length === 0) {
      setError(
        'Please select at least one personality trait you predict for the next Pope'
      );
      return;
    }
    nextStep();
  };

  const handleChange = (value: string) => {
    let updatedTraits: string[];

    if (surveyData.personality.includes(value)) {
      updatedTraits = surveyData.personality.filter((trait) => trait !== value);
    } else {
      updatedTraits = [...(surveyData.personality || []), value];
    }

    updateSurveyData('personality', updatedTraits);
    setError('');
  };

  return (
    <QuestionLayout
      title="What personality traits do you predict for the next Pope?"
      description="Select the characteristics you believe the next Pope will embody."
      onNext={handleNext}
      onPrevious={prevStep}
      error={error}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {personalityTraits.map(({ name, description }) => (
          <button
            key={name}
            onClick={() => handleChange(name)}
            className={`option-btn ${
              surveyData.personality && surveyData.personality.includes(name)
                ? 'option-btn-selected'
                : ''
            }`}
          >
            <span className="block font-medium">{name}</span>
            <span className="text-sm text-gray-600 block mt-1">
              {description}
            </span>
          </button>
        ))}
      </div>
    </QuestionLayout>
  );
};

export default PersonalityQuestion;
