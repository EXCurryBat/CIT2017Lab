var dlcindex =1;
var winx = window.innerWidth/2;
var winy = window.innerHeight/2;
var acttext =document.getElementById('enginfo');
var imgleft = 0;
var imgtop = 0;
var opcl = 1;
var tbox = document.getElementById('curtext');
var actsect = document.getElementById('homepage');
var pagecount =0;

showdlc(dlcindex);

//functions
function callopcl(n){
    if(n==1){
        document.getElementById('textbox').style.right = '-312px';
        opcl=0
    }else if(n==0){
        document.getElementById('textbox').style.right = '0px';
        opcl=1
    }
}

function changedlc(n) {
    showdlc(dlcindex +=n);
}

function showdlc(n){
    var actdlc = document.getElementsByClassName('dlcs');
    if (n > actdlc.length){
        dlcindex = 1;
    }else if(n<1) {
        dlcindex = actdlc.length;
    }
    
    for (var i=0;i<actdlc.length;i++){
        actdlc[i].style.display = 'none';
    }
    actdlc[dlcindex-1].style.display = 'inline';
}

setInterval(function(){
    changedlc(+1)
}, 5000)

function moveimg(arg1){
    if(arg1==37){
        imgleft = imgleft -10;
        actEle.style.backgroundPositionX = imgleft+"px";
    }else if(arg1==39){
        imgleft = imgleft +10;
        actEle.style.backgroundPositionX = imgleft+"px";
    }else if(arg1==38){
        imgtop = imgtop -10;
        actEle.style.backgroundPositionY = imgtop+"px";
    }else if(arg1==40){
        imgtop = imgtop +10;
        actEle.style.backgroundPositionY = imgtop+"px";
    }
}

function openhyw(){
    actsect.style.display='none';
    actsect=document.getElementById('intro');
    actsect.style.display='block';
    tbox.innerHTML=document.getElementById('maine').innerHTML;
    callopcl(0);
    pagecount=2;
}

function openaoe(){
    actsect.style.display='none';
    actsect = document.getElementById('map');
    var x = winx - 2500;
    var y = winy - 850;
    document.getElementById('intro').style.display = "none";
    actsect.style.display = 'block';
    actsect.style.backgroundPosition = x+'px '+y+'px';
    var santa = document.getElementById('santa');
    santa.style.left = winx+'px';
    santa.style.top = winy+'px';
    tbox.innerHTML=document.getElementById('firstvoyage').innerHTML;
    callopcl(0);
    pagecount=3;
}

function openrus(){
    actsect.style.display='none';
    actsect = document.getElementById('ruscamp');
    actsect.style.display ='block';
    tbox.innerHTML=document.getElementById('rustext').innerHTML;
    callopcl(0);
    pagecount=4;
}

//event listeners
document.getElementById('ldlc').addEventListener('click', function(){
    changedlc(-1);
});

document.getElementById('rdlc').addEventListener('click', function(){
    changedlc(+1);
});

document.getElementById('continue').addEventListener('click', function(){
    if(pagecount==0){
        document.getElementById('varna').style.display = 'none';
        document.getElementById('napoleon').style.display = 'block';
        tbox.innerHTML = document.getElementById('hometext').innerHTML;
        pagecount+=1;
    }else if(pagecount==1){
        openhyw();
    }else if(pagecount==2){
        openaoe();
    }
});

document.getElementById('seleng').addEventListener('click', function(e){
    acttext=document.getElementById('enginfo');
    acttext.style.display='block';
    e.stopPropagation();
});

document.getElementById('selfra').addEventListener('click', function(e){
    acttext=document.getElementById('frainfo');
    acttext.style.display='block';
    e.stopPropagation();
});

window.onload = function(e){
    document.onclick = function(e){
        if(e.target.id !== acttext){
        acttext.style.display = 'none';
        }    
    };
};

document.getElementById('openclose').addEventListener('click', function(){
    callopcl(opcl);
});

document.getElementById('hyw').addEventListener('click', function(){
    openhyw();
});

document.getElementById('aoexp').addEventListener('click', function(){
    openaoe();
});

document.getElementById('santa').addEventListener('click', function(e){
    var x = winx - 1580;
    var y = winy - 750;
    document.getElementById('map').style.backgroundPosition = x+'px '+y+'px';
    setTimeout(function(){
        document.getElementById('chriscol').style.display='block';
    }, 5000);
    acttext=document.getElementById('chriscol')
    e.stopPropagation();
});

document.body.addEventListener('keydown', function(ev){
    moveimg(ev.keyCode);
});

document.getElementById('russian').addEventListener('click', function(){
    openrus();
});