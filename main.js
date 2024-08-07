import './style.css';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.ConeGeometry(8, 16, 15);
const material = new THREE.MeshStandardMaterial( {color: 0xFF6347} );
const obunga = new THREE.Mesh( geometry, material );

scene.add(obunga);

renderer.render( scene, camera );

const light = new THREE.PointLight(0xFFFFFF);

light.position.set(5,5,5)

const ambient = new THREE.AmbientLight(0xFFFFFF);

scene.add(light, ambient);

const controls = new OrbitControls(camera, renderer.domElement);

const bgTexture = new THREE.TextureLoader().load('bg.jfif');

scene.background = bgTexture;

function animate(){
    requestAnimationFrame(animate);

    obunga.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();