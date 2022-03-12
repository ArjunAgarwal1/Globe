import './style.css'

import * as THREE from 'three';

import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
var controls;
const scene = new THREE.Scene();
const loader = new GLTFLoader()
loader.load('earth2.gltf')
scene.add(loader)
const rotatespeed = 0.1;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
});
var earth = new THREE.TextureLoader().load('earth.jpg');
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
const geometry = new THREE.SphereGeometry( 15, 1000, 1000 );
const material = new THREE.MeshBasicMaterial( { map: earth } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
controls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.005;
}
animate()

