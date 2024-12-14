export function calculateSuccessRate(successes, total) {
    return total > 0 ? successes / total : 0;
}

export function formatReward(reward) {
    return reward.toFixed(2);
}

export function formatSuccessRate(rate) {
    return (rate * 100).toFixed(1) + '%';
}