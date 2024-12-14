import * as THREE from 'three';

export class Robot {
    constructor() {
        this.geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        this.material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    getMesh() {
        return this.mesh;
    }

    update() {
        // Update robot position and rotation
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}

export function createTargetObject() {
    const geometry = new THREE.SphereGeometry(0.2);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    return new THREE.Mesh(geometry, material);
}