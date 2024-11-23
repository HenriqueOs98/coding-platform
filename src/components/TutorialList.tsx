import { Tutorial } from '../types/Tutorial';
import DOMPurify from 'dompurify';

interface TutorialListProps {
  tutorials: Tutorial[];
  onSelect: (tutorial: Tutorial) => void;
  selectedId: string;
  completedTutorials: string[];
  onNext: () => void;
  onPrevious: () => void;
  containerClassName?: string;
}

export function TutorialList({ 
  tutorials, 
  selectedId, 
  completedTutorials,
  onNext,
  onPrevious,
  containerClassName 
}: TutorialListProps) {
  const currentTutorial = tutorials.find(t => t.id === selectedId);
  const currentIndex = tutorials.findIndex(t => t.id === selectedId);
  const isFirstTutorial = currentIndex === 0;
  const isLastTutorial = currentIndex === tutorials.length - 1;
  const isCurrentTutorialCompleted = completedTutorials.includes(selectedId);

  return (
    <div className={`bg-gray-800 p-4 flex flex-col h-[500px] lg:h-full ${containerClassName}`}>
      {/* Tutorial Progress - Show at top on mobile, hidden on desktop */}
      <div className="lg:hidden mb-4 text-gray-400 text-center">
        Tutorial {currentIndex + 1} of {tutorials.length}
      </div>

      {/* Navigation Buttons - Horizontal on mobile */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <button
          onClick={onPrevious}
          disabled={isFirstTutorial}
          className={`px-4 py-2 rounded-md ${
            isFirstTutorial 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          Previous
        </button>
        
        <button
          onClick={onNext}
          disabled={!isCurrentTutorialCompleted || isLastTutorial}
          className={`px-4 py-2 rounded-md ${
            !isCurrentTutorialCompleted || isLastTutorial
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          } text-white`}
        >
          Next
        </button>
      </div>

      {/* Tutorial Content */}
      <div 
        className="prose prose-invert max-w-none space-y-6 flex-grow overflow-y-auto" 
        dangerouslySetInnerHTML={{ 
          __html: DOMPurify.sanitize(currentTutorial?.description || '') 
        }}
      />
      
      {/* Desktop Navigation - Show at bottom */}
      <div className="hidden lg:flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
        <button
          onClick={onPrevious}
          disabled={isFirstTutorial}
          className={`px-4 py-2 rounded-md ${
            isFirstTutorial 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          Previous
        </button>
        
        <span className="text-gray-400">
          Tutorial {currentIndex + 1} of {tutorials.length}
        </span>
        
        <button
          onClick={onNext}
          disabled={!isCurrentTutorialCompleted || isLastTutorial}
          className={`px-4 py-2 rounded-md ${
            !isCurrentTutorialCompleted || isLastTutorial
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          } text-white`}
        >
          Next
        </button>
      </div>
    </div>
  );
}