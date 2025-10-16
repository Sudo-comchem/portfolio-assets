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

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const toggle = document.getElementById('music-toggle');

    // 🎵 Your playlist (add your own file paths here)
    const playlist = [
        'music/OST 1.wav',
        'music/settings.mp3',
        'music/night full.mp3'
    ];

    let currentTrack = 0;
    music.src = playlist[currentTrack];
    music.volume = 0.5; // optional, adjust volume

    // 🔁 When a song ends, go to the next one
    music.addEventListener('ended', () => {
        currentTrack = (currentTrack + 1) % playlist.length; // loop back to start
        music.src = playlist[currentTrack];
        music.play();
    });

    // 🎚️ Toggle play/pause
    toggle.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggle.classList.remove('paused');
        } else {
            music.pause();
            toggle.classList.add('paused');
        }
    });
});

