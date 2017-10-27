var imgEl = document.getElementById("dispImg");
var ageInput = document.getElementById("age");
var gender = "";
var totalAge = 0;

function createUser(){
    totalAge = totalAge + parseInt(ageInput.value);
    
    if(totalAge <= 200){
        
        var ndiv = document.createElement("div");
        var nimg = document.createElement("img");
        var ndiv2 = document.createElement("div");

        ndiv.className="user";
        nimg.className="userImg";
        ndiv2.className="userName";

        ndiv.appendChild(nimg);
        ndiv.appendChild(ndiv2);

        nimg.src = imgEl.src;
        
        //<div>HI</div>
        //div.innerHTML = "HI";
        ndiv2.innerHTML = document.getElementById("name").innerHTML;

        document.getElementById("users").appendChild(ndiv);
    } else {
        totalAge = totalAge - parseInt(ageInput.value);
        alert("game over");
    }
}

function changeImage(){
    var age = parseInt(ageInput.value);
    console.log(age);
    
    if(age > 50){
        
        imgEl.src = "imgs/"+gender+"3.jpg";
    } else if(age > 20){
        imgEl.src = "imgs/"+gender+"2.jpg";
    } else {
        imgEl.src = "imgs/"+gender+"1.jpg";
    }
}

//changeImage();
document.getElementById("male").addEventListener("click", function(){
    //imgEl.src = "imgs/male2.jpg";
    gender = "male";
    changeImage();
});

document.getElementById("female").addEventListener("click", function(){
    gender = "female";
    changeImage();
});

ageInput.addEventListener("keyup", function(ev){
    
    changeImage();
});

document.getElementById("nameInput").addEventListener("keyup", function(ev){
    document.getElementById("name").innerHTML = document.getElementById("nameInput").value + " - " + ageInput.value + "yo";
});

document.getElementById("add").addEventListener("click", function(){
    createUser();
})