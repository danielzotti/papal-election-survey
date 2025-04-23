import { SurveyProvider } from './context/SurveyContext';
import SurveyContainer from './components/SurveyContainer';
import Header from './components/layout/Header';
import { SharedSurvey } from './components/SharedSurvey';

function App() {
  const searchParams = new URL(window.location.href)?.searchParams;

  const isResult = !!searchParams?.get('survey-result');

  return (
    <SurveyProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
          {isResult ? <SharedSurvey /> : <SurveyContainer />}
        </main>
        <footer className="py-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vatican Survey Commission</p>
        </footer>
      </div>
    </SurveyProvider>
  );
}

export default App;
