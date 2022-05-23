window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = 960;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
    alpha: true,
    antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
    );
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.SphereGeometry(250, 50, 50);
    const material = new THREE.MeshPhongMaterial({color: '#020826'});
    material.alphaToCoverage = true;
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 平行光源
    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2; // 光の強さを倍に
    light.position.set(1, 1, 1);
    // シーンに追加
    scene.add(light);

    // 初回実行
    tick();

    function tick() {
    requestAnimationFrame(tick);

      // 箱を回転させる
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

      // レンダリング
    renderer.render(scene, camera);
    }
}

