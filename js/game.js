// 画像をキャンバスに追加

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "./img/girl-g982ec7f56_640.jpg";

img.onload = function(){
    ctx.drawImage(img, 10, 10);
}

const cvs = document.getElementById("canvas");
cvs.addEventListener("click",e=>{
const rect = e.target.getBoundingClientRect();

const   viewX = e.clientX - rect.left;
const   viewY = e.clientY - rect.top;
// 表示サイズとキャンバスの実サイズの比率を求める
const   scaleWidth =  cvs.clientWidth / cvs.width;
const scaleHeight =  cvs.clientHeight / cvs.height;

// ブラウザ上でのクリック座標をキャンバス上に変換
const canvasX = Math.floor( viewX / scaleWidth );
const canvasY = Math.floor( viewY / scaleHeight );

function clickcan(){
    const canvasX = Math.floor( viewX / scaleWidth );
    const canvasY = Math.floor( viewY / scaleHeight );

}

console.log( canvasX,canvasY );

seikai = {
    canvasX: 130 <= canvasX <= 160,
    canvasY: 180 <= canvasY <= 230
}


if(canvasX == seikai.canvasX && canvasY == seikai.canvasY){
    console.log("正解");
}


});




