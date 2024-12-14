import Plotly from 'plotly.js-dist';

export function initializePlot(containerId) {
    const trace = {
        y: [],
        type: 'scatter',
        name: 'Reward'
    };

    const layout = {
        title: 'Training Progress',
        xaxis: { title: 'Episode' },
        yaxis: { title: 'Reward' }
    };

    Plotly.newPlot(containerId, [trace], layout);
}

export function updatePlot(containerId, reward) {
    Plotly.extendTraces(containerId, { y: [[reward]] }, [0]);
}