// Progressive reveal logic for step-by-step walkthroughs

export interface RevealStep {
  id: string;
  revealed: boolean;
}

// Initialize reveal section
export function initializeReveal(revealId: string) {
  const revealContainer = document.querySelector(`[data-reveal="${revealId}"]`);
  if (!revealContainer) return;

  const steps = revealContainer.querySelectorAll('[data-reveal-step]');
  const buttons = revealContainer.querySelectorAll('[data-reveal-button]');

  let currentStep = 0;

  // Initially hide all steps except the first
  steps.forEach((step, index) => {
    if (index === 0) {
      step.classList.remove('hidden');
      step.classList.add('revealed');
    } else {
      step.classList.add('hidden');
      step.classList.remove('revealed');
    }
  });

  // Handle reveal button clicks
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const stepIndex = parseInt(button.getAttribute('data-reveal-button') || '0', 10);

      if (stepIndex > currentStep && stepIndex < steps.length) {
        currentStep = stepIndex;
        const step = steps[stepIndex];

        // Slide down animation
        step.classList.remove('hidden');

        // Trigger reflow for animation
        void step.clientHeight;

        step.classList.add('revealed');

        // Scroll the revealed step into view
        setTimeout(() => {
          step.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

        // Hide the button that was clicked
        button.classList.add('hidden');
      }
    });
  });

  // Add "Reveal All" functionality if button exists
  const revealAllButton = revealContainer.querySelector('[data-reveal-all]');
  if (revealAllButton) {
    revealAllButton.addEventListener('click', () => {
      steps.forEach(step => {
        step.classList.remove('hidden');
        step.classList.add('revealed');
      });

      buttons.forEach(button => {
        button.classList.add('hidden');
      });

      revealAllButton.classList.add('hidden');
    });
  }
}

// Initialize all reveal sections on the page
export function initializeAllReveals() {
  if (typeof document === 'undefined') return;

  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach(reveal => {
    const revealId = reveal.getAttribute('data-reveal');
    if (revealId) {
      initializeReveal(revealId);
    }
  });
}
