interface SubscriptionPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export function SubscriptionPrompt({ isOpen, onClose, onSubscribe }: SubscriptionPromptProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-white mb-4">Unlock All Tutorials</h2>
        
        <div className="space-y-4 text-gray-300 mb-6">
          <p>Great job completing your first tutorial! 🎉</p>
          <p>Subscribe now to unlock:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access to all tutorials</li>
            <li>New tutorials every week</li>
            <li>Premium support</li>
            <li>Download code examples</li>
          </ul>
          <p className="font-semibold text-white">Only $9.99/month</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onSubscribe}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Subscribe Now
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
} 