import * as THREE from 'three';

var webgltest = true;



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
    //keep camera rotation
    //camera.rotation.y -= distance;

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function setupScene() {

    if (webgltest) {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } else {
        renderer = new THREE.CanvasRenderer();
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('viewport').appendChild(renderer.domElement);

    camera.position.x = cameraDistance * Math.cos(x);
    camera.position.z = cameraDistance * Math.sin(x);
    //facing out
    //camera.rotation.y = 4.7;

    //facing in
    //camera.rotation.y = 20.5;

    //camera.rotation.y = 15;

    if (webgltest) {
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
        //scene.add(lights[1]);
        //scene.add(lights[2]);

    }

}

function addElements() {
    var PI2 = Math.PI * 2,
        program = function (context) {
            context.beginPath();
            context.arc(0, 0, 0.2, 0, PI2, true);
            context.fill();
        },
        group = new THREE.Group(),
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

        //color = Math.random() * 0x808008 + 0x808080;

        if (webgltest) {

            material = new THREE.MeshPhongMaterial({
                color: color,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            });
            //material = new THREE.MeshBasicMaterial({color: color});
            particle = new THREE.Mesh(geometry, material);
        } else {
            material = new THREE.SpriteCanvasMaterial({
                color: color,
                program: program
            });
            particle = new THREE.Sprite(material);
        }

        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        scale = Math.random() * 10;
        if (scale > 8) {
            scale = Math.random() * 20;
        }
        if (webgltest) {
            particle.scale.set(scale, scale, scale);
        } else {
            particle.scale.x = particle.scale.y = scale;
        }
        group.add(particle);
    }
    /*
    var material2 = new THREE.MeshPhongMaterial({
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });
    var particle2 = new THREE.Mesh(geometry, material2);
    particle2.position.x = 0;
    particle2.position.y = 0;
    particle2.position.z = 0;
    particle2.scale.set(200,200,200);
    
    scene.add(particle2);
    */

    render();

    //setTimeout(function () {
    //$('#viewport').animate({ opacity: 0.8 }, 3000);
    //}, 3000);
    //$('#viewport').animate({ opacity: 0.8 }, 3000);

    //$('.arrow-ani').animate({ opacity: 1 }, 500);
}

function init() {
    setupScene();
    addElements();
}

export default init;