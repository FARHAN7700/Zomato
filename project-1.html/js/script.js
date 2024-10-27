// GSAP Animation Library
// Include GSAP in your HTML before this script

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetElement.offsetTop, autoKill: false },
            });
        }
    });
});

// Feature Section Animation on Scroll
const features = document.querySelectorAll('.feature');

// Observer for triggering animations when features enter the viewport
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.fromTo(entry.target, 
                    { opacity: 0, scale: 0.8 }, 
                    { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" });
                observer.unobserve(entry.target); // Unobserve after animation
            }
        });
    },
    {
        threshold: 0.5 // Trigger when 50% of the element is visible
    }
);

// Apply the observer to each feature card
features.forEach(feature => observer.observe(feature));

// Play sound effect on hover
features.forEach((feature) => {
    feature.addEventListener('mouseenter', () => playSound('hover'));
});

// Function to play hover sound
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}

