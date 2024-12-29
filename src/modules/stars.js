import * as THREE from 'three';

var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000),
    renderer,
    x = 0,
    distance = 0.001,
    cameraDistance = 300;

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
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('viewport').appendChild(renderer.domElement);

    // Set up camera
    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);

    // Set lights
    var ambientLight = new THREE.AmbientLight(0xffffff, 8, 0);
    scene.add(ambientLight);
}

function addElements() {
    var group = new THREE.Group(),
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

        if (Math.floor((Math.random() * 10) + 1) > 9) {
            color = 0xff9239;
        } else {
            color = 0x72f5ff;
        }

        material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });
        particle = new THREE.Mesh(geometry, material);
        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        scale = Math.random() * 10;
        if (scale > 8) {
            scale = Math.random() * 20;
        }
        particle.scale.set(scale, scale, scale);
        group.add(particle);
    }
}

function init() {
    setupScene();
    addElements();
    render();
}

export default init;