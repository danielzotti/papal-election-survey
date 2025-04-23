import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';

const AgeQuestion: React.FC = () => {
  const { surveyData, updateSurveyData, nextStep } = useSurvey();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!surveyData.age) {
      setError('Please select the predicted age of the next Pope');
      return;
    }
    nextStep();
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSurveyData('age', event.target.value);
    setError('');
  };

  // Generate age options from 18 to 100
  const ageOptions = Array.from({ length: 83 }, (_, i) => i + 18);

  return (
    <QuestionLayout 
      title="What age do you predict for the next Pope?"
      description="The age of the Pope can influence their leadership style and vision for the Church's future."
      onNext={handleNext}
      error={error}
    >
      <div className="mt-6">
        <select
          value={surveyData.age || ''}
          onChange={handleChange}
          className="input-field text-lg"
        >
          <option value="">Select an age</option>
          {ageOptions.map((age) => (
            <option key={age} value={age.toString()}>
              {age} years old
            </option>
          ))}
        </select>
        
        {surveyData.age && (
          <p className="mt-4 text-gray-600 bg-gray-50 p-4 rounded-lg animate-fadeIn">
            {parseInt(surveyData.age) < 60 && "A relatively young Pope could bring fresh perspectives to the Church."}
            {parseInt(surveyData.age) >= 60 && parseInt(surveyData.age) < 75 && "This age represents a balance of experience and vitality."}
            {parseInt(surveyData.age) >= 75 && "An elder Pope would bring extensive wisdom and experience."}
          </p>
        )}
      </div>
    </QuestionLayout>
  );
};

export default AgeQuestion;