# Robot Manipulation Visualization

A web-based visualization interface for reinforcement learning in robot manipulation tasks. This project provides real-time 3D visualization of robot movements and training statistics.

## Features

- Real-time 3D visualization of robot and target object
- Live training statistics dashboard
- Interactive training progress plots
- Episode-by-episode performance tracking
- Responsive split-screen layout

## Project Structure

```
src/
├── components/           # UI components
│   ├── RobotView/       # 3D visualization
│   └── Stats/           # Training statistics
├── scene/               # Three.js scene setup
│   ├── robot.js         # Robot model
│   ├── environment.js   # Scene environment
│   └── lighting.js      # Scene lighting
├── utils/               # Utility functions
│   ├── stats.js         # Statistics calculations
│   └── visualization.js # Plotting utilities
└── main.js             # Application entry point
```

## Technologies Used

- [Three.js](https://threejs.org/) - 3D graphics library
- [Plotly.js](https://plotly.com/javascript/) - Interactive plotting
- [Vite](https://vitejs.dev/) - Build tool and development server

## Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local server URL (usually http://localhost:5173)

3. **Build**
   ```bash
   npm run build
   ```

## Usage

The interface is split into two main sections:

- **Left Panel**: 3D visualization of the robot and its environment
- **Right Panel**: Training statistics and progress plots

The visualization automatically updates to show:
- Current robot position and movements
- Target object location
- Real-time training metrics
- Success rate and rewards

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Python backend implementation based on OpenAI Gym
- Robot manipulation environment inspired by standard RL benchmarks