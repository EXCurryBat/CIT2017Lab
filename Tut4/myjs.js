//variables
var arr = [];
var nameInp = document.getElementById("names");
var display = document.getElementById("display");

//function
function pushArr(){
    arr.push(nameInp.value);
    console.log(arr);
    
    //display it
    display.innerHTML = arr.toString();
}

function shiftArr(){
    arr.shift();
    console.log(arr);
    
    //display it
    display.innerHTML = arr.toString();
}

function popArr(){
    arr.pop();
    console.log(arr);
    
    //display it
    display.innerHTML = arr.toString();
}

function mapArr(){
    var newArr = arr.map((value, index)=>{
        //value is the value inside the array, index is the index of the value
        return "Hi "+value+" at index "+index;
    });
    
    console.log(newArr);
    //display it
    display.innerHTML = newArr.toString();
}

function filterArr(){
    var filterArr = arr.filter((value,index)=>{
        return (value.length >3 && value.length <7);
    });
    
    console.log(filterArr);
    //display it
    display.innerHTML = filterArr.toString();
}

//interaction
document.getElementById("push").addEventListener("click", function(){
    pushArr();
});

document.getElementById("pop").addEventListener("click", function(){
    popArr();
});

document.getElementById("shift").addEventListener("click", function(){
    shiftArr();
});

document.getElementById("map").addEventListener("click", function(){
    mapArr();
});

document.getElementById("filter").addEventListener("click", function(){
    filterArr();
});

