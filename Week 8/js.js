var cenImg = document.getElementById("imgD");
var ageInput = document.getElementById("numInput");
var gender;
var totalAge=0;

function createUser(){
    totalAge = totalAge +parseInt(numInput.value);
    
    if(totalAge <=200){

        var ndiv = document.createElement("div");
        var nimg = document.createElement("img");
        var ndiv2 = document.createElement("div");

        ndiv.className="user";
        nimg.className="userImg";
        ndiv2.className="userName";

        ndiv.appendChild(nimg);
        ndiv.appendChild(ndiv2);

        nimg.src = imgD.src;
        ndiv2.innerHTML = document.getElementById("textInput").value;

        document.getElementById("users").appendChild(ndiv);
    } else {
        
    }
};

function changeImg(){
    var age = parseInt(ageInput.value);
    
    if(age < 20){
        if(gender == 1){
            cenImg.src = "img/male1.png";
        } else if(gender ==2){
            cenImg.src = "img/female1.png";
        }
    } else if(age < 40){
        if(gender == 1){
            cenImg.src = "img/male2.png";
        } else if(gender ==2){
            cenImg.src = "img/female2.png";
        }
    } else {
        if(gender == 1){
            cenImg.src = "img/male3.png";
        } else if(gender ==2){
            cenImg.src = "img/female3.png";
        }
    }
};

ageInput.addEventListener("keyup", function(ev){
    changeImg();
});

document.getElementById("textInput").addEventListener("keyup", function(ev){
    document.getElementById("name").innerHTML = document.getElementById("textInput").value + " - " + ageInput.value+ "yo";
});
                                                      
document.getElementById("male").addEventListener("click", function(){
    gender = 1;
    changeImg();
});

document.getElementById("female").addEventListener("click", function(){
    gender = 2;
    changeImg();
});

document.getElementById("add").addEventListener("click", function(){
    createUser();
});