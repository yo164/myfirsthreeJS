import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer} from 'three/addons/renderers/CSS3DRenderer.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const renderercss = new CSS3DRenderer();

renderercss.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderercss.domElement);

const div = document.createElement('div');

div.setAttribute("class", "element");

const titulo = document.createElement('h2');
titulo.textContent = '¡Hola Three.js!';

const parrafo = document.createElement('p');
parrafo.textContent = 'Este texto está en el espacio 3D.';

div.appendChild(titulo);
div.appendChild(parrafo);

const texto3D = new CSS3DObject(div);

scene.add(texto3D);

animate();



function animate (time) {
    cube.rotation.x = time /2000;
    cube.rotation.y = time / 1000;
    renderer.render(scene, camera);
}
