var myBox = document.getElementById('center');
var myTop = 0;
var myLeft = 0;
var red = 0;
var blue = 0;
var green = 0;
var myBut = document.getElementsByClassName('but');
//red = Math.round(Math.random()*255);

document.getElementsById("center").addEventListener("mousemove", function(){
    red = red+1;
    green = green +2;
    blue = blue+3;
    document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    
});

document.getElementById("up").addEventListener("click", function(){
    myTop = myTop - 10;
    myBox.style.top = myTop+"px";

    //myBox.style.top = "-100px";
});

document.getElementById("down").addEventListener("click", function(){
    myTop = myTop +10;
    myBox.style.top = myTop+"px";
    //myBox.style.top = "100px";
});

document.getElementById("left").addEventListener("click", function(){
    myLeft = myLeft - 10;
    myBox.style.left = myLeft+"px";
    //myBox.style.left = "-100px";
});

document.getElementById("right").addEventListener("click", function(){
    myLeft = myLeft + 10;
    myBox.style.left = myLeft+"px";
    //myBox.style.left = "100px";
});

document.getElementById("cenImg").addEventListener("click", function(){
    myTop = 0;
    myLeft = 0;
    
    myBox.style.left=myLeft+"px";
    myBox.style.top=myTop+"px";
});