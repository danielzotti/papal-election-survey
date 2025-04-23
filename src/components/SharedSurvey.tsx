import { Clipboard } from 'lucide-react';
import { genderIdentities } from '../data/genders';
import { personalityTraits } from '../data/personality-traits';

export const SharedSurvey: React.FC = () => {
  const searchParams = new URL(window.location.href).searchParams;

  const resetSurvey = () => {
    window.location.href = window.location.origin;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Sharing link copied to clipboard!');
  };

  return (
    <div className="animate-scaleIn">
      <h2 className="text-2xl sm:text-3xl font-serif text-tertiary-800 mb-3">
        Your prediction for the next Pope
      </h2>
      <div className="mt-6 space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Name</h3>
          <p className="mt-1 font-bold text-2xl pt-2">
            {searchParams.get('name')}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Age</h3>
          <p className="mt-1">{searchParams.get('age')} years old</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Gender</h3>
          <p className="mt-1">{searchParams.get('gender')}</p>
          <p className="text-sm text-gray-600 mt-1">
            {
              genderIdentities.find(
                (g) => g.name === searchParams.get('gender')
              )?.description
            }
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">
            Predicted Country of Origin
          </h3>
          <p className="mt-1">{searchParams.get('country')}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">Predicted Ethnicity</h3>
          <p className="mt-1">{searchParams.get('race')}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-tertiary-800">
            Predicted Personality Traits
          </h3>
          <div className="mt-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-2">
            {searchParams.get('personality') &&
              searchParams
                .get('personality')
                ?.split(',')
                .map((name) => (
                  <div key={name} className={`option-btn`}>
                    <span className="block font-medium">{name}</span>
                    <span className="text-sm text-gray-600 block mt-1">
                      {
                        personalityTraits.find((p) => p.name === name)
                          ?.description
                      }
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <hr className="my-12" />

      <div className="bg-gray-50 rounded-md mb-8 p-2">
        <h3 className="font-bold text-tertiary-800">Sharing link</h3>
        <div className="flex flex-nowrap flex-row gap-2 justify-center items-center mt-2">
          <Clipboard
            className="cursor-pointer"
            size={24}
            onClick={copyToClipboard}
          />
          <input className="w-full" value={window.location.href} />
        </div>
      </div>

      <button
        onClick={resetSurvey}
        className="px-6 py-3 bg-tertiary-800 text-white rounded-full hover:bg-tertiary-900 transition-colors block w-full"
      >
        Take Survey
      </button>
    </div>
  );
};
