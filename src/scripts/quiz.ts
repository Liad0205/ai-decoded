// Quiz interaction logic

export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface QuizState {
  selectedOption: string | null;
  answered: boolean;
  correct: boolean | null;
}

// Initialize quiz functionality
export function initializeQuiz(quizId: string) {
  const quizElement = document.querySelector(`[data-quiz="${quizId}"]`);
  if (!quizElement) return;

  const state: QuizState = {
    selectedOption: null,
    answered: false,
    correct: null
  };

  const options = quizElement.querySelectorAll('[data-quiz-option]');
  const submitButton = quizElement.querySelector('[data-quiz-submit]');
  const feedback = quizElement.querySelector('[data-quiz-feedback]');

  // Handle option selection
  options.forEach(option => {
    option.addEventListener('click', () => {
      if (state.answered) return; // Don't allow changing answer after submission

      // Remove selected state from all options
      options.forEach(opt => opt.classList.remove('selected'));

      // Add selected state to clicked option
      option.classList.add('selected');
      state.selectedOption = option.getAttribute('data-quiz-option');

      // Enable submit button
      if (submitButton) {
        submitButton.removeAttribute('disabled');
      }
    });
  });

  // Handle submit
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      if (!state.selectedOption || state.answered) return;

      state.answered = true;

      // Check if the selected option is correct
      const selectedElement = quizElement.querySelector(
        `[data-quiz-option="${state.selectedOption}"]`
      );

      const isCorrect = selectedElement?.getAttribute('data-correct') === 'true';
      state.correct = isCorrect;

      // Show feedback
      options.forEach(option => {
        const optionCorrect = option.getAttribute('data-correct') === 'true';
        const optionId = option.getAttribute('data-quiz-option');

        if (optionCorrect) {
          option.classList.add('correct');
        } else if (optionId === state.selectedOption) {
          option.classList.add('incorrect');
        }

        option.classList.add('answered');
      });

      // Show explanation
      if (feedback) {
        feedback.classList.remove('hidden');
        feedback.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        const explanationElement = selectedElement?.querySelector('[data-explanation]');
        if (explanationElement) {
          feedback.textContent = explanationElement.textContent || '';
        }
      }

      // Disable submit button
      submitButton.setAttribute('disabled', 'true');
    });
  }
}

// Initialize all quizzes on the page
export function initializeAllQuizzes() {
  if (typeof document === 'undefined') return;

  const quizzes = document.querySelectorAll('[data-quiz]');
  quizzes.forEach(quiz => {
    const quizId = quiz.getAttribute('data-quiz');
    if (quizId) {
      initializeQuiz(quizId);
    }
  });
}
