import { Tutorial } from '../types/Tutorial';

interface TutorialListProps {
  tutorials: Tutorial[];
  onSelect: (tutorial: Tutorial) => void;
  selectedId: string | null;
}

export function TutorialList({ tutorials, onSelect, selectedId }: TutorialListProps) {
  return (
    <div className="w-64 bg-gray-800 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-white">JavaScript Tutorials</h2>
      <div className="space-y-2">
        {tutorials.map((tutorial) => (
          <button
            key={tutorial.id}
            onClick={() => onSelect(tutorial)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedId === tutorial.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            <h3 className="font-semibold">{tutorial.title}</h3>
            <p className="text-sm opacity-80">{tutorial.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
} 