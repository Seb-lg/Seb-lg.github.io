import * as THREE from "./three.module";
import {
  OrbitControls
} from "./OrbitControls";


let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.setScalar(10);
let renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x000000);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);

let g1 = GridGeometry(5, 5, 8, 8, [0, 0]);
let m1 = new THREE.LineBasicMaterial({color: "white"});
let grid1 = new THREE.LineSegments(g1, m1);
scene.add(grid1);

let g2 = GridGeometry(5, 5, 8, 8, [0, 0]);
g2.rotateX(Math.PI * 0.5);
let m2 = new THREE.LineBasicMaterial({color: "white"});
let grid2 = new THREE.LineSegments(g2, m2);
scene.add(grid2);

let g3 = GridGeometry(5, 5, 8, 8, [0, 0]);
g3.rotateY(Math.PI * -0.5);
let m3 = new THREE.LineBasicMaterial({color: "white"});
let grid3 = new THREE.LineSegments(g3, m3);
scene.add(grid3);

let g4 = GridGeometry(5, 5, 8, 8, [0, 0]);
g4.rotateY(Math.PI * -0.5);
let m4 = new THREE.LineBasicMaterial({color: "white"});
let grid4 = new THREE.LineSegments(g4, m4);
scene.add(grid4);
grid4.position.set(5,0,0);

let g5 = GridGeometry(5, 5, 8, 8, [0, 0]);
g5.rotateX(Math.PI * 0.5);
let m5 = new THREE.LineBasicMaterial({color: "white"});
let grid5 = new THREE.LineSegments(g5, m5);
scene.add(grid5);
grid5.position.set(0,5,0);

renderer.setAnimationLoop(_ => {
  renderer.render(scene, camera);
})

function GridGeometry(width = 1, height = 1, wSeg = 1, hSeg = 1, lExt = [0, 0]){
	
  let seg = new THREE.Vector2(width / wSeg, height / hSeg);
  let hlfSeg = seg.clone().multiplyScalar(0.5);
  
  let pts = [];
  
  for(let y = 0; y <= hSeg; y++){
  	pts.push(
    	new THREE.Vector2(0, y * seg.y),
      new THREE.Vector2(width + (hlfSeg.x * lExt[0]), y * seg.y)
    )
  }
  
  for(let x = 0; x <= wSeg; x++){
  	pts.push(
    	new THREE.Vector2(x * seg.x, 0),
      new THREE.Vector2(x * seg.x, height + (hlfSeg.y * lExt[1]))
    )
  }
  
  return new THREE.BufferGeometry().setFromPoints(pts);
  
}
