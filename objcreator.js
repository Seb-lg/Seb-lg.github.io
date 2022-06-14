import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.141.0/build/three.module.js";
import { OBJLoader } from './OBJLoader.js'

function grid_pannel(width, height, cube_size, position, rotation, scene) {
    const geometry = new THREE.PlaneGeometry();
    const edges = new THREE.EdgesGeometry( geometry );
    const [px,py,pz] = position;
    const group = new THREE.Group();
    for (var x =-width/2; x <width/2; x++) {
        for (var y =-height/2; y <height/2; y++) {
            const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
            // line.position.set(position)
            // line.rotatio'n.set(rotation)
            line.position.x = px + x*cube_size + 0.5;
            line.position.y = py + y*cube_size + 0.5;
            line.position.z = pz;
            line.scale.x = cube_size;
            line.scale.y = cube_size;
            console.log("Plane: ",x, " ",  y )
            group.add(line);
        }
    }
    const [rx,ry,rz] = rotation;
    group.rotation.x = rx;
    group.rotation.y = ry;
    group.rotation.z = rz;
    scene.add(group);
}

export {grid_pannel}