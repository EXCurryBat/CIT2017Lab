/*for(var i=0;i<5;i++){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = i;
    document.getElementById("display").appendChild(ndiv);
}
*/
/*setTimeout(function(){
    alert("Hi");
}, 3000);
*/

var allchars = "qwertyuiop[]asdfghjkl;'zxcvbnm,./1234567890-=".split("");
var chars = []

console.log(allchars);
setInterval(function(){
    var ndiv = document.createElement("div");
    var ri = Math.round(Math.random()*(allchars.length-1)),
        rl = Math.round(Math.random()*window.innerWidth),
        rf = Math.round(Math.random()*15+5);
    
    ndiv.innerText = allchars[ri];
    ndiv.style.position = "absolute";
    ndiv.style.top = "0px";
    ndiv.style.left = rl+"px";
    ndiv.style.color="green";
    ndiv.style.fontSize = rf+"pt";
    ndiv.style.opacity = rf/20;
    
    chars.push(ndiv);
    document.getElementById("display").appendChild(ndiv);
    
    /*if(i<100){
        var num1=Math.round(Math.random()*48+1)
        var num2=Math.round(Math.random()*48+1)
        var num3=Math.round(Math.random()*48+1)
        var num4=Math.round(Math.random()*48+1)
        var num5=Math.round(Math.random()*48+1)
        var num6=Math.round(Math.random()*48+1)
        var ndiv = document.createElement("div");
        ndiv.innerHTML = num1+" "+num2+" "+num3+" "+num4+" "+num5+" "+num6;
        document.getElementById("display").appendChild(ndiv);
        i++;
        
        window.scrollTo(0, document.body.scrollHeight);
    }*/
}, 100);

setInterval(function(){
    for(var i in chars){
        var curDiv = chars[i];
        var mtop = parseInt(curDiv.style.top);
        mtop = mtop + 1;
        curDiv.style.top = mtop+"px";
        if(mtop>500){
            document.getElementById("display").removeChild(curDiv);
            chars.shift();
        }
    }
}, 16);

setInterval(function(){
    for(var i in chars){
        var curDiv = char[i];
        var ri = Math.round(Math.random()*(allchars.length-1));
        curDiv.innerText = allchars[ri];
    }
}, 100);