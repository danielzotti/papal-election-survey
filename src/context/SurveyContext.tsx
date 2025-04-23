import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

export type QuestionId =
  | 'age'
  | 'gender'
  | 'country'
  | 'race'
  | 'personality'
  | 'name';

export interface SurveyData {
  age: string;
  gender: string;
  country: string;
  race: string;
  personality: string[];
  name: string;
}

export interface SurveyContextType {
  currentStep: number;
  totalSteps: number;
  surveyData: SurveyData;
  isCompleted: boolean;
  updateSurveyData: (field: keyof SurveyData, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetSurvey: () => void;
  completeSurvey: () => void;
}

const initialData: SurveyData = {
  age: '',
  gender: '',
  country: '',
  race: '',
  personality: [],
  name: '',
};

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState<SurveyData>(initialData);
  const [isCompleted, setIsCompleted] = useState(false);
  const totalSteps = 7; // 6 questions + 1 review

  const updateSurveyData = useCallback(
    (field: keyof SurveyData, value: any) => {
      setSurveyData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    window.scrollTo(0, 0);
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  }, []);

  const resetSurvey = useCallback(() => {
    setCurrentStep(1);
    setSurveyData(initialData);
    setIsCompleted(false);
    window.scrollTo(0, 0);
  }, []);

  const completeSurvey = useCallback(() => {
    setIsCompleted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <SurveyContext.Provider
      value={{
        currentStep,
        totalSteps,
        surveyData,
        isCompleted,
        updateSurveyData,
        nextStep,
        prevStep,
        resetSurvey,
        completeSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (context === undefined) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
};
