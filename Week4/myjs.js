document.getElementById("open").addEventListener("click", function(){
    document.getElementById("control").style.left = "0px";
});

document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage="url(avatar.jpg)";
});

document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage="url(jupiter.jpg)";
});

document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage="url(mars.jpg)";
});

document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage="url(earth.jpg)";
});

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("control").style.left = "-200px";
})