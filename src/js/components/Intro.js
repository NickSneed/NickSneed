
import React, { useEffect } from 'react';
import logo from '../../img/svg/ns-logo.svg'
import * as THREE from 'three';

const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000),
    distance = 0.001,
    cameraDistance = 300;

let x = 0,
    renderer;

function render() {
    // Set camera position
    x = x + distance;
    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);

    // Render scene
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function setupScene() {

    // Create a renderer and add it to the DOM
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.querySelector('.stars-3d').appendChild(renderer.domElement);

    // Set up camera
    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);

    // Set lights
    var ambientLight = new THREE.AmbientLight(0xffffff, 6);
    scene.add(ambientLight);
}

function addElements() {
    let group = new THREE.Group(),
        i,
        material,
        particle,
        geometry = new THREE.SphereGeometry(0.2, 10, 10),
        color,
        scale;

    // Add group to scene
    scene.add(group);

    // Add particles to group
    for (i = 0; i < 2000; i++) {

        // Set particle color
        if (Math.floor((Math.random() * 10) + 1) > 8) {
            color = 0xff9239;
        } else {
            color = 0x72f5ff;
        }

        // Create particle
        material = new THREE.MeshStandardMaterial({
            color: color,
            flatShading: false
        });
        particle = new THREE.Mesh(geometry, material);

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
}

function adjustSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function init() {
    setupScene();
    addElements();
    render();

    // Adjust size on resize
    window.addEventListener("resize", adjustSize);
}

function Intro() {
    useEffect(() => {
        init();
    }, []);
    const html = (
        <>
            <div className="intro">
                <img src={logo} alt="Nick Sneed Logo"/>
                <h1>Hello &amp; <br />welcome.</h1>
                <div className="stars-3d"></div>
            </div>
        </>
    )
    return html;
}

export default Intro;