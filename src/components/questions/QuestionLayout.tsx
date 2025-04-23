import React, { ReactNode } from 'react';

interface QuestionLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  onNext: () => void;
  onPrevious?: () => void;
  error?: string;
  nextButtonText?: string;
}

const QuestionLayout: React.FC<QuestionLayoutProps> = ({
  title,
  description,
  children,
  onNext,
  onPrevious,
  error,
  nextButtonText = 'Next',
}) => {
  return (
    <div className="animate-scaleIn">
      <h2 className="text-2xl sm:text-3xl font-serif text-tertiary-800 mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-prose">
          {description}
        </p>
      )}

      <div className="max-h-50 overflow-auto">{children}</div>

      {error && (
        <div className="mt-4 text-error-600 text-sm bg-error-50 p-2 rounded border-l-4 border-error-600 animate-fadeIn">
          {error}
        </div>
      )}

      <div className="mt-8 flex justify-between items-center">
        {onPrevious ? (
          <button
            onClick={onPrevious}
            className="btn btn-secondary flex items-center space-x-1"
          >
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        <button onClick={onNext} className="btn btn-primary">
          {nextButtonText}
        </button>
      </div>
    </div>
  );
};

export default QuestionLayout;
