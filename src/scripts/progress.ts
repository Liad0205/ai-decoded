// Client-side progress tracking using localStorage

export interface LessonProgress {
  moduleId: string;
  lessonId: string;
  completed: boolean;
  completedAt?: string;
}

const STORAGE_KEY = 'ai-decoded-progress';

// Get all progress data
export function getProgress(): LessonProgress[] {
  if (typeof window === 'undefined') return [];

  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to parse progress data:', e);
    return [];
  }
}

// Save progress data
function saveProgress(progress: LessonProgress[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

  // Dispatch custom event for UI updates
  window.dispatchEvent(new CustomEvent('progressUpdated', { detail: progress }));
}

// Check if a specific lesson is completed
export function isLessonCompleted(moduleId: string, lessonId: string): boolean {
  const progress = getProgress();
  return progress.some(
    p => p.moduleId === moduleId && p.lessonId === lessonId && p.completed
  );
}

// Mark a lesson as completed
export function markLessonComplete(moduleId: string, lessonId: string): void {
  const progress = getProgress();
  const existingIndex = progress.findIndex(
    p => p.moduleId === moduleId && p.lessonId === lessonId
  );

  const lessonProgress: LessonProgress = {
    moduleId,
    lessonId,
    completed: true,
    completedAt: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    progress[existingIndex] = lessonProgress;
  } else {
    progress.push(lessonProgress);
  }

  saveProgress(progress);
}

// Mark a lesson as incomplete
export function markLessonIncomplete(moduleId: string, lessonId: string): void {
  const progress = getProgress();
  const filtered = progress.filter(
    p => !(p.moduleId === moduleId && p.lessonId === lessonId)
  );
  saveProgress(filtered);
}

// Get module completion percentage
export function getModuleProgress(moduleId: string, totalLessons: number): number {
  const progress = getProgress();
  const completedCount = progress.filter(
    p => p.moduleId === moduleId && p.completed
  ).length;

  return totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
}

// Get overall course completion percentage
export function getCourseProgress(totalLessons: number): number {
  const progress = getProgress();
  const completedCount = progress.filter(p => p.completed).length;

  return totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
}

// Reset all progress
export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('progressUpdated', { detail: [] }));
}
