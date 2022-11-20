<template>
    <div id="container">
        <div id="myCanvas"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        init1();
    }
}

var camera, scene, renderer, renderer2;
var isUserInteracting = false,
lon = 0, lat = 0,
phi = 0, theta = 0;

var onPointerDownPointerX, onPointerDownPointerY, onPointerDownLat, onPointerDownLon;

function init1() {
    var container, mesh;

    container = document.getElementById('myCanvas');

    camera = new THREE.PerspectiveCamera(
        100, window.innerWidth / window.innerHeight, 1, 1100
    )
    
    camera.target = new THREE.Vector3(0, 0, 0);

    scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry(800, 500, 500);
    geometry.scale(-1, 1, 1);

    var material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('/panorama/room1.jpeg')
    });

    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // window.addEventListener()
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    animate();
};

function onDocumentTouchStart( event ) {
    /**
     * cameraのlatitude / longitudeを、マウスの移動具合に応じて変更
     */
    // event.preventDefault();

    isUserInteracting = true;

    onPointerDownPointerX = event.changedTouches[0].clientX;
    onPointerDownPointerY = event.changedTouches[0].clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;
}

function onDocumentTouchMove(event){
    if(event.touches.length > 1){
        event.preventDefault();
    }

    if(isUserInteracting === true){
        lon = (onPointerDownPointerX - event.changedTouches[0].clientX) * 0.15 + onPointerDownLon;
        lat = (event.changedTouches[0].clientY - onPointerDownPointerY ) * 0.15 + onPointerDownLat;
    }
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

function update() {
    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90, -lat);
    theta = THREE.Math.degToRad(lon);

    camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
    camera.target.y = 500 * Math.cos(phi);
    camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

    camera.lookAt(camera.target);

    renderer.render(scene, camera);
}

</script>

<style>
#container {
    position: 'fixed';
}
</style>