"""
Training Script
Main script to train the DQN agent for robot manipulation
"""
from environment.robot_env import RobotEnvironment
from agents.dqn_agent import DQNAgent
from utils.visualization import Visualizer
from utils.replay_buffer import ReplayBuffer

def train(episodes=1000, max_steps=200):
    # Initialize environment and agent
    env = RobotEnvironment()
    agent = DQNAgent(env.state_dim, env.action_dim)
    visualizer = Visualizer()

    for episode in range(episodes):
        state = env.reset()
        episode_reward = 0
        success = False

        for step in range(max_steps):
            # Select and perform action
            action = agent.act(state)
            next_state, reward, done, _ = env.step(action)
            
            # Store transition in replay buffer
            agent.remember(state, action, reward, next_state, done)
            
            # Train the agent
            agent.replay()
            
            state = next_state
            episode_reward += reward

            if done:
                success = env._is_successful_grasp()
                break

        # Update target network periodically
        if episode % 10 == 0:
            agent.update_target_network()

        # Log progress
        visualizer.log_episode(episode_reward, success)
        
        # Print progress every 100 episodes
        if (episode + 1) % 100 == 0:
            visualizer.plot_training_progress()

if __name__ == "__main__":
    train()