var cenImg = document.getElementById("center");
var xposition = 0;
var yposition = 0;
var sliderwidth;
var imgadd;
var addImg;

document.getElementById("empty").addEventListener("click", function(){
    document.getElementById("pics").innerHTML='';
})

function createImg(){
    addImg = cenImg.style.backgroundImage.url;
    
    var ndiv=document.createElement("div");
    var nimg=document.createElement("img");
    
    ndiv.className="thumbDiv";
    /*nimg.className="thumbImg";
    
    ndiv.appendChild(nimg);*/
    ndiv.style.backgroundImage = "url("+imgadd+")";
    
    document.getElementById("pics").appendChild(ndiv);
    
}

document.getElementById("add").addEventListener("click", function(){
    createImg();
})

document.getElementById("textinput").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        imgadd = document.getElementById("textinput").value;
        cenImg.style.backgroundImage = "url("+imgadd+")";
    };
    
})

document.getElementById("rangeinput").addEventListener("change", function(){
    sliderwidth = document.getElementById("rangeinput").value;
    document.getElementById("center").style.width =sliderwidth + "vw";
})

document.getElementById("ctrlbut").addEventListener("click", function () {
    document.getElementById("panel").style.top = "0px";
});

document.getElementById("bg1").addEventListener("click", function () {
    resetImg()
    cenImg.style.backgroundImage = "url(1.jpg)";
});

document.getElementById("bg2").addEventListener("click", function () {
    resetImg()
    cenImg.style.backgroundImage = "url(2.jpg)";
});

document.getElementById("bg3").addEventListener("click", function () {
    resetImg()
    cenImg.style.backgroundImage = "url(3.jpg)";
});

function resetImg() {
    xposition = 0;
    yposition = 0;
    cenImg.style.backgroundPosition = "0px 0px";
}

function moveImgx(xnum) {
    xposition = xposition + xnum;
    cenImg.style.backgroundPosition = xposition + "px" + " " + yposition + "px";
}

function moveImgy(ynum) {
    yposition = yposition + ynum;
    cenImg.style.backgroundPosition = xposition + "px" + " " + yposition + "px";
}

document.body.addEventListener("keyup", function(ev) {
    if(ev.keyCode == 37){
        moveImgx(-10);
    } else if(ev.keyCode == 39){
        moveImgx(10);
    } else if(ev.keyCode == 38){
        moveImgy(-10);
    } else if(ev.keyCode == 40){
        moveImgy(10);
    }
    
});