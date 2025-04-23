import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import QuestionLayout from './QuestionLayout';
import { countries } from '../../data/countries';

const CountryQuestion: React.FC = () => {
  const { surveyData, updateSurveyData, nextStep, prevStep } = useSurvey();
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNext = () => {
    if (!surveyData.country) {
      setError('Please predict which country the next Pope might come from');
      return;
    }
    nextStep();
  };

  const handleChange = (value: string) => {
    updateSurveyData('country', value);
    setError('');
  };

  const filteredCountries = searchTerm 
    ? countries.filter(country => 
        country.toLowerCase().includes(searchTerm.toLowerCase()))
    : countries;

  return (
    <QuestionLayout 
      title="From which country do you think the next Pope will come?"
      description="The Pope's origin can influence the Church's global perspective and priorities."
      onNext={handleNext}
      onPrevious={prevStep}
      error={error}
    >
      <div className="mt-6">
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a country..."
            className="input-field"
          />
        </div>
        
        <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-md">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <button
                key={country}
                onClick={() => handleChange(country)}
                className={`w-full py-3 px-4 text-left border-b border-gray-100 last:border-b-0 transition-colors
                  ${surveyData.country === country 
                    ? 'bg-primary-700/5 font-medium' 
                    : 'hover:bg-gray-50'}`}
              >
                {country}
              </button>
            ))
          ) : (
            <div className="p-3 text-gray-500 text-center">No countries found</div>
          )}
        </div>
      </div>
    </QuestionLayout>
  );
};

export default CountryQuestion;