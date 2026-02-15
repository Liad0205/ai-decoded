// Diagram animation triggers

export interface AnimationState {
  playing: boolean;
  currentFrame: number;
}

// Initialize diagram with animation controls
export function initializeDiagram(diagramId: string) {
  const diagramContainer = document.querySelector(`[data-diagram="${diagramId}"]`);
  if (!diagramContainer) return;

  const playButton = diagramContainer.querySelector('[data-diagram-play]');
  const resetButton = diagramContainer.querySelector('[data-diagram-reset]');
  const animatedElements = diagramContainer.querySelectorAll('[data-animate]');

  const state: AnimationState = {
    playing: false,
    currentFrame: 0
  };

  // Play animation
  if (playButton) {
    playButton.addEventListener('click', () => {
      if (state.playing) return;

      state.playing = true;
      playButton.setAttribute('disabled', 'true');

      animatedElements.forEach(element => {
        element.classList.add('animating');
      });

      // Get animation duration from CSS or data attribute
      const duration = parseInt(
        diagramContainer.getAttribute('data-animation-duration') || '3000',
        10
      );

      setTimeout(() => {
        state.playing = false;
        playButton.removeAttribute('disabled');

        animatedElements.forEach(element => {
          element.classList.remove('animating');
          element.classList.add('animated');
        });
      }, duration);
    });
  }

  // Reset animation
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      state.playing = false;
      state.currentFrame = 0;

      animatedElements.forEach(element => {
        element.classList.remove('animating', 'animated');
      });

      if (playButton) {
        playButton.removeAttribute('disabled');
      }
    });
  }
}

// Initialize all diagrams on the page
export function initializeAllDiagrams() {
  if (typeof document === 'undefined') return;

  const diagrams = document.querySelectorAll('[data-diagram]');
  diagrams.forEach(diagram => {
    const diagramId = diagram.getAttribute('data-diagram');
    if (diagramId) {
      initializeDiagram(diagramId);
    }
  });
}

// Intersection Observer for auto-play on scroll into view
export function enableAutoPlay() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const diagramId = entry.target.getAttribute('data-diagram');
          const autoPlay = entry.target.getAttribute('data-autoplay') === 'true';

          if (autoPlay && diagramId) {
            const playButton = entry.target.querySelector('[data-diagram-play]');
            if (playButton && !playButton.hasAttribute('disabled')) {
              (playButton as HTMLElement).click();
            }
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  const diagrams = document.querySelectorAll('[data-diagram][data-autoplay="true"]');
  diagrams.forEach(diagram => observer.observe(diagram));
}
