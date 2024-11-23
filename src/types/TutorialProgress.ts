export interface TutorialProgress {
  userId: string;
  completedTutorials: string[]; // Array of tutorial IDs
  currentTutorialId: string;
} 