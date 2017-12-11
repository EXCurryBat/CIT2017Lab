var dlcindex =1;
var winx = window.innerWidth/2;
var winy = window.innerHeight/2;
var acttext =document.getElementById('enginfo');
var actEle = document.getElementById('freemap');
var imgleft = 0;
var imgtop = 0;
var opcl = 1;
var tbox = document.getElementById('curtext');
var actsect = document.getElementById('homepage');
var pagecount =0;
var chars = [];
var snowcount = 0;
var enlcount=0;
var dlcarr={
    exploration:['ed','cop'],
    colonization:['cop','ed'],
    trade:['won','rrp','ed'],
    religion:['coc','won','cs','ed','tc','rom'],
    government:['rrp','cs','rom','moh','coc'],
    diplomacy:['mn','aow','moh','coc'],
    war:['aow','mn','rom','coc'],
    development:['cs','tc','coc'],
    espionage:['tc','mn'],
    nomad:['tc'],
    asia:['moh'],
    russia:['tr'],
    persia:['coc'],
    fun:['aow','ed']
}
var dlcprice={
    cop:16.99,
    won:10.99,
    rrp:5.49,
    aow:21.99,
    ed:16.99,
    cs:16.99,
    tc:21.99,
    mn:16.99,
    rom:21.99,
    moh:21.99,
    tr:10.99,
    coc:21.99
}
var savelist={exploration:0,colonization:0,trade:0,religion:0,government:0,diplomacy:0,war:0,development:0,espionage:0,nomad:0,asia:0,russia:0,persia:0,fun:0};
var dictcount=0;



showdlc(dlcindex);

//functions
function replacedlc(mylist){
    mystr = mylist.join(', ');
    mystr = mystr.replace("cop", "Conquest of Paradise");
    mystr = mystr.replace("won", "Wealth of Nations");
    mystr = mystr.replace("rrp", "Res Republica");
    mystr = mystr.replace("aow", "Art of War");
    mystr = mystr.replace("ed", "El Dorado");
    mystr = mystr.replace("cs", "Common Sense");
    mystr = mystr.replace("tc", "The Cossacks");
    mystr = mystr.replace("mn", "Mare Nostrum");
    mystr = mystr.replace("rom", "Rights of Man");
    mystr = mystr.replace("moh", "Mandate of Heaven");
    mystr = mystr.replace("tr", "Third Rome");
    mystr = mystr.replace("coc", "Cradle of Civilization");
    console.log(mystr);
    return mystr;
}

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
    actdlc = document.getElementsByClassName('dlcs');
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
        imgleft = imgleft +50;
        actEle.style.backgroundPositionX = imgleft+"px";
    }else if(arg1==39){
        imgleft = imgleft -50;
        actEle.style.backgroundPositionX = imgleft+"px";
    }else if(arg1==38){
        imgtop = imgtop +50;
        actEle.style.backgroundPositionY = imgtop+"px";
    }else if(arg1==40){
        imgtop = imgtop -50;
        actEle.style.backgroundPositionY = imgtop+"px";
    }
}

function openhyw(){
    actsect.style.display='none';
    actsect=document.getElementById('intro');
    actsect.style.display='block';
    tbox.innerHTML=document.getElementById('maine').innerHTML;
    callopcl(0);
    pagecount=3;
}

function openaoe(){
    actsect.style.display='none';
    actsect = document.getElementById('map');
    var x = winx - 2500;
    var y = winy - 850;
    actsect.style.display = 'block';
    actsect.style.backgroundPosition = x+'px '+y+'px';
    var santa = document.getElementById('santa');
    santa.style.left = winx+'px';
    santa.style.top = winy+'px';
    tbox.innerHTML=document.getElementById('firstvoyage').innerHTML;
    callopcl(0);
    pagecount=4;
}

function openenl(){
    actsect.style.display='none';
    actsect = document.getElementById('enldiv');
    actsect.style.display = 'block';
    tbox.innerHTML = document.getElementById('enltext').innerHTML;
    callopcl(0);
    pagecount=5;
}

function sendenl(arg1, arg2){
    var x = arg1 -15;
    var y = arg2 -30;
    ndiv = document.createElement('div');
    enlmap.appendChild(ndiv);
    ndiv.className='enlthumb';
    ndiv.style.left= x+'px';
    ndiv.style.top= y+'px';
    enlcount+=1;
    document.getElementById('nenclo').style.display='block';
    document.getElementById('nenclo').innerHTML='You have distributed '+enlcount+' encyclopedias!';
    if(enlcount>10){
        document.getElementById('nenclo').innerHTML='You have distributed '+enlcount+' encyclopedias!  Great!';
    }if(enlcount>20){
        document.getElementById('nenclo').innerHTML='You have distributed '+enlcount+' encyclopedias!  Amazing!';
    }if(enlcount>50){
        document.getElementById('nenclo').innerHTML='You have distributed '+enlcount+' encyclopedias!  ...really...';
    }if(enlcount>100){
        document.getElementById('nenclo').innerHTML='You have distributed '+enlcount+' encyclopedias!  Perhaps it is time to find a new hobby...';
    }
}

function openrus(){
    actsect.style.display='none';
    actsect = document.getElementById('ruscamp');
    actsect.style.display ='block';
    tbox.innerHTML=document.getElementById('rustext').innerHTML;
    callopcl(0);
    pagecount=6;
}

function snowing(){
    snowint = setInterval(function(){
        var nimg = document.createElement("div");
        var rl = Math.round(Math.random()*180),
            rf = Math.round(Math.random()*10+5);

        nimg.className='snowflake';
        nimg.style.position = "absolute";
        nimg.style.top = "150px";
        nimg.style.left = rl+"px";
        nimg.style.width = rf+'px';
        nimg.style.height = rf+'px';

        chars.push(nimg);
        document.getElementById("snowcloud").appendChild(nimg);

    }, 300);

}

setInterval(function(){
        for(var i in chars){
            var curDiv = chars[i];
            var mtop = parseInt(curDiv.style.top);
            mtop = mtop + 3;
            curDiv.style.top = mtop+"px";
            if(mtop>300){
                document.getElementById("snowcloud").removeChild(curDiv);
                chars.shift();
            }
        }
}, 50);

function opendlc(){
    actsect.style.display='none';
    actsect = document.getElementById('dlcsect');
    actsect.style.display='block';
    tbox.innerHTML = document.getElementById('dlctext').innerHTML;
    callopcl(0);
    pagecount=7;
}

function recomdlc(){
    var kw = document.getElementById('kwbox').value.toLowerCase().split(' ');
    var dlclist = []
    var total = 43.99;
    var limit = 400;
    if(document.getElementById('pricelimit').value>43.99){
        limit = document.getElementById('pricelimit').value;
    }
    for(var i=0;i<kw.length;i++){
        for(var key in dlcarr){
            if(key == kw[i]){
                savelist[kw[i]]+=1;
                for(var x=0;x<dlcarr[key].length;x++){
                    if(dlclist.indexOf(dlcarr[key][x])>-1){
                        
                    }else{
                        if(total+dlcprice[dlcarr[key][x]] <= limit){
                            dlclist.push(dlcarr[key][x]);
                            total +=dlcprice[dlcarr[key][x]];
                        }
                    }
                }
            }
        }
    }
    
    var dlcstr = replacedlc(dlclist);
    document.getElementById('result').style.display='block';
    document.getElementById('resulttext').innerHTML= 'You have entered:<br><br>'+kw.join(', ')+'<br><br>These are the recommended purchase:<br><br>Base game, '+dlcstr+'<br><br>The base game and recommended DLCs will cost $'+parseFloat(total).toFixed(2);
    
    
}

function openstats(){
    actsect.style.display ='none';
    actsect=document.getElementById('kwstats');
    actsect.style.display='block';
    callopcl(0);
    tbox.innerHTML=document.getElementById('statistics').innerHTML;
    var statlist =[];
    for(var key in savelist){
        statlist.push(key+' '+savelist[key]+'<br>');
    }
    document.getElementById('stattext').innerHTML='Keyword Popularity<br><br>'+statlist.join(' ');
    pagecount=8;
}

function savestats(){
    var arrText = JSON.stringify(savelist);
    localStorage.setItem("items",arrText);
}

function loadstats(){
    var arrText = localStorage.getItem("items");
    savelist = JSON.parse(arrText);
    openstats();
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
        document.getElementById('napoleon').style.display = 'none';
        document.getElementById('freemap').style.display = 'block';
        tbox.innerHTML = document.getElementById('freemaptext').innerHTML;
        pagecount+=1;
    }else if(pagecount==2){
        openaoe();
    }else if(pagecount==3){
        openaoe();
    }else if(pagecount==4){
        openenl();
    }else if(pagecount==5){
        openrus();
    }else if(pagecount==6){
        opendlc();
    }else if(pagecount==7){
        openstats();
    }else if(pagecount==8){}
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

document.getElementById('enlightenment').addEventListener('click', function(){
    openenl();
});

document.getElementById('enlmap').addEventListener('click', function(e){
    var x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("enlmap").offsetLeft;
	var y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("enlmap").offsetTop;
    sendenl(x, y);
});

document.getElementById('russian').addEventListener('click', function(){
    openrus();
});

document.getElementById('snowcloud').addEventListener('click', function(){
    if(snowcount==0){
        snowing();
        snowcount=1;
    }else if(snowcount==1){
        clearInterval(snowint);
        snowcount=0;
    }
});

document.getElementById('dlcbut').addEventListener('click', function(){
    opendlc();
});

document.getElementById('kwbox').addEventListener('keyup', function(ev){
    if(ev.keyCode==13){
        recomdlc();
    }
});

document.getElementById('pricelimit').addEventListener('keyup', function(ev){
    if(ev.keyCode==13){
        recomdlc();
    }
});

document.getElementById('ret').addEventListener('click', function(){
    document.getElementById('result').style.display='none';
});

document.getElementById('stats').addEventListener('click', function(){
    openstats();
});

document.getElementById('saveloc').addEventListener('click', function(){
    savestats();
});

document.getElementById('loadloc').addEventListener('click', function(){
    loadstats();
});