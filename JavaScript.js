// script.js

// Change background every 5 seconds
const backgrounds = ['happy-chinese-new-year-2025_1153643-39.jpg', 'happy-chinese-new-year-2025_1153643-39.jpg', 'happy-chinese-new-year-2025_1153643-39.jpg'];
let currentBgIndex = 0;

function changeBackground() {
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;
}

setInterval(changeBackground, 100);

// Prank Button Click
document.getElementById('prank-btn').addEventListener('click', () => {
  // Play scream sound
  const screamSound = document.getElementById('scream-sound');
  screamSound.play();

  // Show surprise section
  const surpriseSection = document.getElementById('surprise-section');
  surpriseSection.classList.remove('hidden');

  // Reset after 13 seconds
  setTimeout(() => {
    surpriseSection.classList.add('hidden');
  }, 13000);
});