"""
Visualization Module
Provides utilities for visualizing training progress and robot behavior
"""
import numpy as np

class Visualizer:
    def __init__(self):
        self.rewards_history = []
        self.success_rate_history = []

    def log_episode(self, episode_reward, success):
        self.rewards_history.append(episode_reward)
        self.success_rate_history.append(float(success))

    def plot_training_progress(self):
        # Placeholder for plotting functionality
        # In practice, use matplotlib or another plotting library
        avg_rewards = np.mean(self.rewards_history[-100:])
        avg_success_rate = np.mean(self.success_rate_history[-100:])
        print(f"Average Reward (last 100 episodes): {avg_rewards:.2f}")
        print(f"Average Success Rate (last 100 episodes): {avg_success_rate:.2%}")