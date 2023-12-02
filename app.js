function btn(num){
       document.getElementById("inpvalue").value += num
}

function result(){
    var result = document.getElementById("inpvalue")
    result.value = eval(result.value)
}

function alclear(){
    var alclear = document.getElementById("inpvalue")
    alclear.value = (" ")
   
}

function clear1(){
    var currentvalue = document.getElementById("inpvalue")
    var newVariable = currentvalue.value;
    currentvalue.value = newVariable.slice(0,-1);
   
}
