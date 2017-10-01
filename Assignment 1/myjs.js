var onetop = 100;
var oneleft = 0;
var twotop = 0;
var twoleft = 100;
var tribot = 100;
var trileft = 0;
var quatop = 0;
var quaright = 100;
var img = document.getElementById('img1');
var imgW = img.clientWidth;
var imgH = img.clientHeight;
var imgtop = onetop;
var imgleft = oneleft;
var imgbot = tribot;
var imgright = quaright;

document.getElementById("reset").addEventListener("click", function () {
    if (img == document.getElementById("img1")) {
        img.style.left = "0px";
        img.style.top = "100px";
    }
    if (img == document.getElementById("img2")) {
        img.style.left = "100px";
        img.style.top = "0px";
    }
    if (img == document.getElementById("img3")) {
        img.style.left = "0px";
        img.style.bot = "100px";
    }
    if (img == document.getElementById("img4")) {
        img.style.right = "100px";
        img.style.top = "0px";
    }
    img.style.height = "200px";
    img.style.width = "auto";
    imgW = img.clientWidth;
    imgH = img.clientHeight;
});

document.getElementById("open").addEventListener("click", function () {
    document.getElementById("control").style.top = "0px";
});

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("control").style.top = "-40px";
});

document.getElementById("imgA").addEventListener("click", function () {
    if (img == document.getElementById('img1')) {
        img.src = "1.jpg";
    }
    if (img == document.getElementById('img2')) {
        img.src = "4.jpg";
    }
    if (img == document.getElementById('img3')) {
        img.src = "7.jpg";
    }
    if (img == document.getElementById('img4')) {
        img.src = "10.jpg";
    }
});

document.getElementById("imgB").addEventListener("click", function () {
    if (img == document.getElementById('img1')) {
        img.src = "2.jpg";
    }
    if (img == document.getElementById('img2')) {
        img.src = "5.jpg";
    }
    if (img == document.getElementById('img3')) {
        img.src = "8.jpg";
    }
    if (img == document.getElementById('img4')) {
        img.src = "11.jpg";
    }
});

document.getElementById("imgC").addEventListener("click", function () {
    if (img == document.getElementById('img1')) {
        img.src = "3.jpg";
    }
    if (img == document.getElementById('img2')) {
        img.src = "6.jpg";
    }
    if (img == document.getElementById('img3')) {
        img.src = "9.jpg";
    }
    if (img == document.getElementById('img4')) {
        img.src = "12.jpg";
    }
});

document.getElementById("left").addEventListener("click", function () {
    if (img != document.getElementById('img4')) {
        imgleft=imgleft-5;
        img.style.left = imgleft+"px";
    }
    else {
        imgright=imgright+5;
        img.style.right = imgright+"px";
    }
});

document.getElementById("right").addEventListener("click", function () {
    if (img != document.getElementById('img4')) {
        imgleft=imgleft+5;
        img.style.left = imgleft+"px";
    }
    else {
        imgright=imgright-5;
        img.style.right = imgright+"px";
    }
});

document.getElementById("up").addEventListener("click", function () {
    if (img != document.getElementById("img3")) {
        imgtop=imgtop-5;
        img.style.top = imgtop+"px";
    }
    else {
        imgbot=imgbot+5;
        img.style.bottom = imgbot+"px";
    }
});

document.getElementById("down").addEventListener("click", function () {
    if (img != document.getElementById("img3")) {
        imgtop=imgtop+5;
        img.style.top = imgtop+"px";
    }
    else {
        imgbot=imgbot-5;
        img.style.bottom = imgbot+"px";
    }
});

document.getElementById("bigger").addEventListener("click", function(){
    imgW=imgW+5;
    imgH=imgH+(imgH/imgW)*5;
    img.style.width = imgW+"px";
    img.style.height = imgH+"px";
});

document.getElementById("smaller").addEventListener("click", function(){
    imgW=imgW-5;
    imgH=imgH-(imgH/imgW)*5;
    img.style.width = imgW+"px";
    img.style.height = imgH+"px";
});

document.getElementById("img1").addEventListener("click", function(){
    img = document.getElementById("img1");
    imgW = img.clientWidth;
    imgH = img.clientHeight;
    imgtop = onetop;
    imgleft = oneleft;
    document.getElementById("background").style.backgroundImage = "url( bg1.jpg)";
    document.getElementById("imgA").src = "1.jpg";
    document.getElementById("imgB").src = "2.jpg";
    document.getElementById("imgC").src = "3.jpg";
});

document.getElementById("img2").addEventListener("click", function(){
    img = document.getElementById("img2");
    imgW = img.clientWidth;
    imgH = img.clientHeight;
    imgtop = twotop;
    imgleft = twoleft;
    document.getElementById("background").style.backgroundImage = "url( bg2.jpg)";
    document.getElementById("imgA").src = "4.jpg";
    document.getElementById("imgB").src = "5.jpg";
    document.getElementById("imgC").src = "6.jpg";
});

document.getElementById("img3").addEventListener("click", function(){
    img = document.getElementById("img3");
    imgW = img.clientWidth;
    imgH = img.clientHeight;
    imgbot = tribot;
    imgleft = trileft;
    document.getElementById("background").style.backgroundImage = "url( bg3.jpg)";
    document.getElementById("imgA").src = "7.jpg";
    document.getElementById("imgB").src = "8.jpg";
    document.getElementById("imgC").src = "9.jpg";
});

document.getElementById("img4").addEventListener("click", function(){
    img = document.getElementById("img4");
    imgW = img.clientWidth;
    imgH = img.clientHeight;
    imgtop = quatop;
    imgright = quaright;
    document.getElementById("background").style.backgroundImage = "url( bg4.jpg)";
    document.getElementById("imgA").src = "10.jpg";
    document.getElementById("imgB").src = "11.jpg";
    document.getElementById("imgC").src = "12.jpg";
});