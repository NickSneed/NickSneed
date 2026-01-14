import React, { useEffect } from 'react';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    PCFSoftShadowMap,
    AmbientLight,
    Group,
    SphereGeometry,
    MeshStandardMaterial,
    Mesh
} from 'three';

import * as styles from './Stars.module.css';

const scene = new Scene(),
    camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000),
    distance = 0.001,
    cameraDistance = 300;

let x = 0,
    renderer;

const render = () => {
    // Set camera position
    x = x + distance;
    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);

    // Render scene
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

const setupScene = () => {
    // Create a renderer and add it to the DOM
    renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.querySelector('.stars-3d').appendChild(renderer.domElement);

    // Set up camera
    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);

    // Set lights
    var ambientLight = new AmbientLight(0xffffff, 6);
    scene.add(ambientLight);
};

const addElements = () => {
    let group = new Group(),
        i,
        material,
        particle,
        geometry = new SphereGeometry(0.2, 10, 10),
        color,
        scale;

    // Add group to scene
    scene.add(group);

    // Add particles to group
    for (i = 0; i < 2000; i++) {
        // Set particle color
        if (Math.floor(Math.random() * 10 + 1) > 8) {
            color = 0xff9239;
        } else {
            color = 0x72f5ff;
        }

        // Create particle
        material = new MeshStandardMaterial({
            color: color,
            flatShading: false
        });
        particle = new Mesh(geometry, material);

        // Set particle position and scale
        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        scale = Math.random() * 10;
        if (scale > 8) {
            scale = Math.random() * 20;
        }
        particle.scale.set(scale, scale, scale);

        // Add particle to group
        group.add(particle);
    }
};

const adjustSize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

const addOpacityClass = () => {
    setTimeout(function () {
        const element = document.querySelector('.stars-3d');
        if (element) {
            element.style.opacity = '1';
        }
    }, 500);
};

const initStars = () => {
    setupScene();
    addElements();
    render();
    addOpacityClass();

    // Adjust size on resize
    window.addEventListener('resize', adjustSize);
};

// Stars component
const Stars = () => {
    useEffect(initStars, []);

    // Component HTML
    const html = <div className={`stars-3d ${styles.stars}`}></div>;

    return html;
};

export default Stars;
