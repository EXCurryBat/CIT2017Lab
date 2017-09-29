document.getElementById("upImg").addEventListener("click", function(){
    document.getElementById("cen").style.top = "-100px";
});

document.getElementById("down").addEventListener("click", function(){
    document.getElementById("cen").style.top = "100px";
});

document.getElementById("left").addEventListener("click", function(){
    document.getElementById("cen").style.left = "-100px";
});

document.getElementById("right").addEventListener("click", function(){
    document.getElementById("cen").style.left = "100px";
});

document.getElementById("cenImg").addEventListener("click", function(){
    document.getElementById("cen").style.left="0px";
    document.getElementById("cen").style.top="0px";
});