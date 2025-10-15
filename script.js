document.addEventListener('DOMContentLoaded', () => {
    const horizontalContainer = document.querySelector('.horizontal-scroll-container');

    // Smooth scroll for internal navigation links (bubbles)
    document.querySelectorAll('.nav-bubble').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href'); // e.g., "#digital-art-section"
            const targetElement = document.querySelector(targetId);

            if (targetElement && horizontalContainer) {
                // Calculate the scroll position for the target element within the horizontal container
                const scrollLeftAmount = targetElement.offsetLeft;

                horizontalContainer.scrollTo({
                    left: scrollLeftAmount,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle home button click
    const homeButtons = document.querySelectorAll('.home-button');
    homeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (horizontalContainer) {
                horizontalContainer.scrollTo({
                    left: 0, // Scroll to the very beginning (leftmost)
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add keyboard navigation for left/right arrows
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const currentScroll = horizontalContainer.scrollLeft;
            const sectionWidth = window.innerWidth; // Assuming each section is 100vw

            if (e.key === 'ArrowRight') {
                horizontalContainer.scrollTo({
                    left: currentScroll + sectionWidth,
                    behavior: 'smooth'
                });
            } else if (e.key === 'ArrowLeft') {
                horizontalContainer.scrollTo({
                    left: currentScroll - sectionWidth,
                    behavior: 'smooth'
                });
            }
        }
    });
});
