function bgColor() {
    var getBackground = document.getElementById("background");
    var bg_colors = [ "red", "black", "yellow"];
    getBackground.style.background = bg_colors[Math.round(Math.random()*2)];
    setTimeout(bgColor, 3000);
}
bgColor();

var spaceW;
var spaceH;
var picture;

var picture1
var picture2;
var bodyy=document.getElementById("sky")

function init(){
    picture=document.getElementById("fg")
    picture.style.transform=
    
    picture=document.getElementById("fg")
    spaceH =bodyy.height -picture.height;
    spaceW =bodyy.width -picture.width;



    setInterval(moveIt,600);

}

function moveIt(){

  picture1.style.top = Math.round(Math.random() * spaceH)+"px";
  picture1.style.left = Math.round(Math.random() * spaceW)+"px";


}