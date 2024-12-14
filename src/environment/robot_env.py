"""
Robot Environment Module
Defines the simulation environment for robot manipulation
"""
import numpy as np

class RobotEnvironment:
    def __init__(self):
        self.state_dim = 10  # Position, orientation, gripper state, object position
        self.action_dim = 4  # x, y, z movement and gripper action
        self.reset()

    def reset(self):
        # Initialize robot and object positions
        self.robot_pos = np.zeros(3)
        self.gripper_state = 0
        self.object_pos = np.random.uniform(-1, 1, 3)
        return self._get_state()

    def step(self, action):
        # Apply action and get new state
        self._apply_action(action)
        
        # Calculate reward based on distance to object and successful grasp
        reward = self._calculate_reward()
        
        # Check if episode is done
        done = self._is_done()
        
        return self._get_state(), reward, done, {}

    def _apply_action(self, action):
        # Update robot position and gripper state
        movement = action[:3] * 0.1  # Scale movement
        self.robot_pos += movement
        self.gripper_state = action[3]

    def _calculate_reward(self):
        distance = np.linalg.norm(self.robot_pos - self.object_pos)
        grasp_reward = 10 if self._is_successful_grasp() else 0
        return -distance + grasp_reward

    def _is_successful_grasp(self):
        distance = np.linalg.norm(self.robot_pos - self.object_pos)
        return distance < 0.1 and self.gripper_state > 0.5

    def _is_done(self):
        return self._is_successful_grasp() or self._is_out_of_bounds()

    def _is_out_of_bounds(self):
        return np.any(np.abs(self.robot_pos) > 2.0)

    def _get_state(self):
        return np.concatenate([
            self.robot_pos,
            [self.gripper_state],
            self.object_pos,
            self.object_pos - self.robot_pos
        ])