var actimg = document.getElementById("dispimg");
var actitem = document.getElementById("dispitem");
var acttitle = document.getElementById('disptitle');
//var imgleft = 0;//parseInt(actimg.style.left);
//var imgtop = 0;//parseInt(actimg.style.left);
var arr = [];
var tagnum = 0;

function moveimg(arg1){
    imgleft = parseInt(actitem.style.left);
    imgtop = parseInt(actitem.style.top);
    if(arg1==37){
        imgleft = imgleft -10;
        actitem.style.left = imgleft+"px";
    }else if(arg1==39){
        imgleft = imgleft +10;
        actitem.style.left = imgleft+"px";
    }else if(arg1==38){
        imgtop = imgtop -10;
        actitem.style.top = imgtop+"px";
    }else if(arg1==40){
        imgtop = imgtop +10;
        actitem.style.top = imgtop+"px";
    }
    
}

function sizeimg(arg1){
    if(arg1 == 189){
        var imgh = parseInt(actitem.style.height);
        var imgw = parseInt(actitem.style.width);
        imgh = imgh -10;
        imgw = imgw -10;
        actitem.style.height = imgh+"px";
        actitem.style.width = imgw+"px";
    }else if(arg1 == 187){
        var imgh = parseInt(actitem.style.height);
        var imgw = parseInt(actitem.style.width);
        imgh = imgh +10;
        imgw = imgw +10;
        actitem.style.height = imgh+"px";
        actitem.style.width = imgw+"px";
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
    var imgh = parseInt(actitem.style.height);
    var imgw = parseInt(actitem.style.width);
    imgh = imgh +10;
    imgw = imgw +10;
    actimg.style.height = imgh+"px";
    actimg.style.width = imgw+"px";
});

document.addEventListener("keydown", function(ev){
    sizeimg(ev.keyCode);
})

document.getElementById("minus").addEventListener("click", function(){
    var imgh = parseInt(actitem.style.height);
    var imgw = parseInt(actitem.style.width);
    imgh = imgh -10;
    imgw = imgw -10;
    actitem.style.height = imgh+"px";
    actitem.style.width = imgw+"px";
});

document.getElementById('dispitem').addEventListener('click', function(){
    actitem = document.getElementById('dispitem');
    actimg = document.getElementById('dispimg');
    acttitle = document.getElementById('disptitle');
    actitem.style.left='0px';
    actitem.style.top = '0px';
    actitem.style.width = '300px';
    actitem.style.height = '150px';
    
});

document.getElementById('imgurl').addEventListener("keyup", function(ev){
    if(ev.keyCode==13){
        newurl = document.getElementById("imgurl").value;
        if(newurl.includes("http") && (newurl.includes("jpg") || newurl.includes("gif") || newurl.includes("png"))){
            actimg.src = newurl;
        }else{
            alert("Not a valid image");
        }
    }
});

document.getElementById('openctrl').addEventListener('click', function(){
    document.getElementById('controls').style.top = '0px';
});

document.getElementById('title').addEventListener("keyup", function(ev){
    acttitle.innerHTML = document.getElementById("title").value;
});

document.getElementById("newImg").addEventListener("click", function(){
    ndiv = document.createElement("div");
    ndiv.className="thumbdiv";
    ndiv.id = 'thumbdiv'+tagnum;
    ndiv.style.left = '0px';
    ndiv.style.top = '0px';
    ndiv.style.width = '300px';
    ndiv.style.height = '150px';
    nimg = document.createElement("img");
    nimg.className="thumbimg";
    nimg.id = 'thumbimg'+tagnum;
    ndiv2 = document.createElement("div");
    ndiv2.className="thumbtext";
    ndiv2.id = 'thumbtext'+tagnum;
    nimg.src = actimg.src;
    nimg.style.cssText = actimg.style.cssText;
    ndiv2.innerHTML = document.getElementById("disptitle").innerHTML;
    ndiv.appendChild(nimg);
    ndiv.appendChild(ndiv2);
    ndiv.addEventListener("click", function(){
        actid = this.id.match(/\d+/)[0];
        actitem=document.getElementById('thumbdiv'+actid);
        actimg=document.getElementById('thumbimg'+actid);
        acttitle=document.getElementById('thumbtext'+actid);
    });
    document.getElementById("display").appendChild(ndiv);
<<<<<<< HEAD
    arr.push(nimg);
    console.log(arr)
=======
    tagnum+=1;
    var locobj = {
        mtitle:ndiv2.innerHTML,
        msrc:nimg.src,
        mleft:ndiv.style.left,
        mtop:ndiv.style.top,
        mwidth:ndiv.style.width,
        mheight:ndiv.style.height,
    }
    arr.push(locobj);
>>>>>>> d6c2b2104f0b64a427dc3a058631c34c08f7dd53
});

document.getElementById("saveImg").addEventListener("click", function(){
    var arrText = JSON.stringify(arr);
    localStorage.setItem("items",arrText);
<<<<<<< HEAD
    console.log(arrText);
    console.log(Object.assign(arr));
})
=======
    console.log(arr);
});

function loadthumb(sobj){

    ndiv = document.createElement("div");
    ndiv.className="thumbdiv";
    ndiv.id = 'thumbdiv'+tagnum;
    ndiv.style.left = sobj.mleft;
    ndiv.style.top = sobj.mtop;
    ndiv.style.width = sobj.mwidth;
    ndiv.style.height = sobj.mheight;
    nimg = document.createElement("img");
    nimg.className="thumbimg";
    nimg.id = 'thumbimg'+tagnum;
    nimg.src = sobj.msrc;
    ndiv2 = document.createElement("div");
    ndiv2.className="thumbtext";
    ndiv2.id = 'thumbtext'+tagnum;
    ndiv2.innerHTML=sobj.mtitle;
    ndiv.appendChild(nimg);
    ndiv.appendChild(ndiv2);
    ndiv.addEventListener("click", function(){
        actid = this.id.match(/\d+/)[0];
        actitem=document.getElementById('thumbdiv'+actid);
        actimg=document.getElementById('thumbimg'+actid);
        acttitle=document.getElementById('thumbtext'+actid);
    });
    document.getElementById("display").appendChild(ndiv);
    tagnum+=1;
}
>>>>>>> d6c2b2104f0b64a427dc3a058631c34c08f7dd53

document.getElementById("loadImg").addEventListener("click", function(){
    var arrText = localStorage.getItem("items");
    var arr = JSON.parse(arrText);
    document.getElementById('display').innerHTML='';
    tagnum = 0;
    for(var i=0;i<arr.length;i++){
            var sobj = arr[i];
            loadthumb(sobj);      
    }
    console.log(arr);
});

document.getElementById("saveol").addEventListener("click", function(){
    var mdata = new FormData();
    mdata.append("type", "insert");
    mdata.append("mtitle", acttitle.innerHTML);
    mdata.append("msrc", actimg.src);
    mdata.append("mleft", actitem.style.left);
    mdata.append("mtop", actitem.style.top);
    mdata.append("mwidth", actitem.style.width);
    mdata.append("mheight", actitem.style.height);
    
    var mlink = "http://www.bcitdigitalarts.ca/vote/server/image.php";
    
    fetch(mlink, {
        method:"POST",
        body:mdata
    }).then((resp)=>{
        return resp.json();
    }).then((json)=>{
        console.log(json);
    })
});

document.getElementById("fetchol").addEventListener("click", ()=>{
    
    var mdata = new FormData();
    mdata.append("type", "read");
    
    var mlink = "http://www.bcitdigitalarts.ca/vote/server/image.php";
    
    fetch(mlink, {
        method:"POST",
        body:mdata
    }).then((resp)=>{
        return resp.json();
    }).then((json)=>{
        console.log(json);
        var arr = json.data;
        
        document.getElementById("display").innerHTML = '';
        for(var i=0;i<arr.length;i++){
            var sobj = arr[i];
            loadthumb(sobj);
            console.log(sobj);
            
            
        }
    }); 
});