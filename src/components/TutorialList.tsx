import { Tutorial } from '../types/Tutorial';
import DOMPurify from 'dompurify';

interface TutorialListProps {
  tutorials: Tutorial[];
  onSelect: (tutorial: Tutorial) => void;
  selectedId: string;
  containerClassName?: string;
}

export function TutorialList({ tutorials, selectedId, containerClassName }: TutorialListProps) {
  const currentTutorial = tutorials.find(t => t.id === selectedId);

  return (
    <div className={`bg-gray-800 p-4 ${containerClassName}`}>
      <div 
        className="prose prose-invert max-w-none space-y-6" 
        dangerouslySetInnerHTML={{ 
          __html: DOMPurify.sanitize(currentTutorial?.description || '') 
        }}
      />
    </div>
  );
}