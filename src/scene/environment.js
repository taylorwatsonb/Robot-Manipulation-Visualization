import * as THREE from 'three';
import { Robot, createTargetObject } from './robot';
import { setupLighting } from './lighting';

export class Environment {
    constructor(container) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        // Setup scene elements
        this.robot = new Robot();
        this.targetObject = createTargetObject();
        this.lighting = setupLighting(this.scene);

        // Add elements to scene
        this.scene.add(this.robot.getMesh());
        this.scene.add(this.targetObject);

        // Position camera
        this.camera.position.z = 5;
    }

    animate() {
        this.robot.update();
        this.renderer.render(this.scene, this.camera);
    }

    resize(width, height) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}