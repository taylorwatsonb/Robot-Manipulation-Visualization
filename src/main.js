import { Environment } from './scene/environment';
import { initializePlot, updatePlot } from './utils/visualization';
import { formatReward, formatSuccessRate } from './utils/stats';

// Initialize environment
const container = document.getElementById('robot-view');
const environment = new Environment(container);

// Initialize plot
initializePlot('training-plot');

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    environment.animate();
}

// Start animation
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const container = document.getElementById('robot-view');
    environment.resize(container.clientWidth, container.clientHeight);
});

// Update training statistics
function updateStats(episode, reward, successRate) {
    document.getElementById('episode-number').textContent = episode;
    document.getElementById('episode-reward').textContent = formatReward(reward);
    document.getElementById('success-rate').textContent = formatSuccessRate(successRate);
    
    updatePlot('training-plot', reward);
}

// Example update (in production, this would be connected to the Python backend)
let episode = 0;
setInterval(() => {
    episode++;
    const reward = Math.random() * 10 - 5;
    const successRate = Math.random();
    updateStats(episode, reward, successRate);
}, 1000);