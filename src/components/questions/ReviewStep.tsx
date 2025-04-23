import React from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';

const ReviewStep: React.FC = () => {
  const { surveyData, prevStep, completeSurvey } = useSurvey();

  const handleSubmit = () => {
    // In a real application, you would send the data to a server here
    console.log('Submitting predictions:', surveyData);
    completeSurvey();
  };

  return (
    <QuestionLayout
      title="Review Your Predictions"
      description="Please review your predictions for the next Pope before submitting."
      onNext={handleSubmit}
      onPrevious={prevStep}
      nextButtonText="Submit"
    >
      <div className="mt-6 space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Age</h3>
          <p className="mt-1">{surveyData.age} years old</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">
            Predicted Country of Origin
          </h3>
          <p className="mt-1">{surveyData.country}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Ethnicity</h3>
          <p className="mt-1">{surveyData.race}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">
            Predicted Personality Traits
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {surveyData.personality &&
              surveyData.personality.map((trait) => (
                <span
                  key={trait}
                  className="bg-primary-700/10 text-primary-700 px-3 py-1 rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Gender</h3>
          <p className="mt-1">{surveyData.gender}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Name</h3>
          <p className="mt-1 font-bold text-2xl py-2">{surveyData.name}</p>
        </div>

        <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
          <p>
            By submitting these predictions, you acknowledge that your responses
            will be used for nothing but fun.
          </p>
        </div>
      </div>
    </QuestionLayout>
  );
};

export default ReviewStep;
