var actimg = document.getElementById("dispimg");
var actitem = document.getElementById("dispitem");
var imgleft = 0;//parseInt(actimg.style.left);
var imgtop = 0;//parseInt(actimg.style.left);
var arr=[];

function moveimg(arg1){
    if(arg1==37){
        imgleft = imgleft -10;
        actimg.style.left = imgleft+"px";
    }else if(arg1==39){
        imgleft = imgleft +10;
        actimg.style.left = imgleft+"px";
    }else if(arg1==38){
        imgtop = imgtop -10;
        actimg.style.top = imgtop+"px";
    }else if(arg1==40){
        imgtop = imgtop +10;
        actimg.style.top = imgtop+"px";
    }
    
}

function sizeimg(arg1){
    if(arg1 == 189){
        var imgh = parseInt(actimg.height);
        var imgw = parseInt(actimg.width);
        imgh = imgh -10;
        imgw = imgw -10;
        actimg.style.height = imgh+"px";
        actimg.style.width = imgw+"px";
    }else if(arg1 == 187){
        var imgh = parseInt(actimg.height);
        var imgw = parseInt(actimg.width);
        imgh = imgh +10;
        imgw = imgw +10;
        actimg.style.height = imgh+"px";
        actimg.style.width = imgw+"px";
    }
}

document.addEventListener("keydown", function(ev){
    moveimg(ev.keyCode);
});

document.getElementById("left").addEventListener("click", function(){
    moveimg(37);
});

document.getElementById("right").addEventListener("click", function(){
    moveimg(39);
});

document.getElementById("up").addEventListener("click", function(){
    moveimg(38);
});

document.getElementById("down").addEventListener("click", function(){
    moveimg(40);
});

document.getElementById("plus").addEventListener("click", function(){
    var imgh = parseInt(actimg.height);
    var imgw = parseInt(actimg.width);
    imgh = imgh +10;
    imgw = imgw +10;
    actimg.style.height = imgh+"px";
    actimg.style.width = imgw+"px";
});

document.addEventListener("keydown", function(ev){
    sizeimg(ev.keyCode);
})

document.getElementById("minus").addEventListener("click", function(){
    var imgh = parseInt(actimg.height);
    var imgw = parseInt(actimg.width);
    imgh = imgh -10;
    imgw = imgw -10;
    actimg.style.height = imgh+"px";
    actimg.style.width = imgw+"px";
});

document.addEventListener("keyup", function(ev){
    if(ev.keyCode==13){
        newurl = document.getElementById("imgurl").value;
        if(newurl.includes("http") && (newurl.includes("jpg") || newurl.includes("gif") || newurl.includes("png"))){
            actimg.src = newurl;
        }else{
            alert("Not a valid image");
        }
    }
});

document.getElementById("newImg").addEventListener("click", function(){
    ndiv = document.createElement("div");
    ndiv.className="thumbdiv";
    nimg = document.createElement("img");
    nimg.className="thumbimg";
    nimg.addEventListener("click", function(){
        alert(this.id)
    })
    ndiv2 = document.createElement("div");
    ndiv2.className="thumbtext";
    nimg.src = actimg.src;
    nimg.style.cssText = actimg.style.cssText;
    console.log(actimg.style.cssText)
    ndiv2.innerHTML = document.getElementById("title").innerHTML;
    ndiv.appendChild(nimg);
    ndiv.appendChild(ndiv2);
    document.getElementById("display").appendChild(ndiv);
    arr.push(nimg);
    console.log(arr)
});

document.getElementById("saveImg").addEventListener("click", function(){
    var arrText = JSON.stringify(arr);
    localStorage.setItem("items",arrText);
    console.log(arrText);
    console.log(Object.assign(arr));
})

document.getElementById("loadImg").addEventListener("click", function(){
    var arrText = localStorage.getItem("items");
    var arr = JSON.parse(arrText);
    actitem = arr;
    console.log(arr);
})

document.getElementById("saveol").addEventListener("click", function(){
    
})