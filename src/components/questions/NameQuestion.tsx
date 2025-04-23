import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';

const NameQuestion: React.FC = () => {
  const { surveyData, updateSurveyData, nextStep, prevStep } = useSurvey();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!surveyData.name || surveyData.name.length === 0) {
      setError('Please select at least one name you predict for the next Pope');
      return;
    }
    nextStep();
  };

  const handleChange = (value: string) => {
    updateSurveyData('name', value);
    setError('');
  };

  return (
    <QuestionLayout
      title="What name do you predict for the next Pope?"
      description="The chosen name is important to understand who the next Pope will be inspired by"
      onNext={handleNext}
      onPrevious={prevStep}
      error={error}
    >
      <div>
        <input
          onChange={(event) => handleChange(event.target.value)}
          className="flex w-full border block font-bold text-2xl py-2 px-4"
        />
      </div>
    </QuestionLayout>
  );
};

export default NameQuestion;
