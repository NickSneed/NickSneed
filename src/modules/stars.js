import * as THREE from 'three';

var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000),
    renderer,
    x = 0,
    distance = 0.001,
    cameraDistance = 300;

function render() {
    x = x + distance;
    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function setupScene() {


    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });


    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('viewport').appendChild(renderer.domElement);

    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);


    var ambientLight = new THREE.AmbientLight(0xffffff),
        lights = [];
    scene.add(ambientLight);


    lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    scene.add(lights[0]);
}

function addElements() {
    var group = new THREE.Group(),
        i,
        material,
        particle,
        geometry = new THREE.SphereGeometry(0.2, 10, 10),
        color,
        scale;

    scene.add(group);

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

    render();
}

function init() {
    setupScene();
    addElements();
}

export default init;