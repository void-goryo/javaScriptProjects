function add() {
    var answer = 5+9;       //mostly self explanitory. all of these do math
    document.getElementById("add").innerHTML = answer;
}

function subtract() {
    var answer = 5-9;
    document.getElementById("subtract").innerHTML = answer;
}

function multiply() {
    var answer = 5*9;
    document.getElementById("multiply").innerHTML = answer;
}

function divide() {
    var answer = 5/9;
    document.getElementById("divide").innerHTML = answer;
}

function manyMaths() {      //this does a few math equations at the same time
    var answer = 5*9*(2 + 3) - 10;
    document.getElementById("simpleMath").innerHTML = answer;
}

function remain() {
    var answer = 9%5;       //find the remainder
    document.getElementById("remainder").innerHTML = answer;
}

function negitive() {
    var answer = 13;                        //this \|/ adds a "-" in front making it negative
    document.getElementById("minus").innerHTML = -answer;
}

function plus() {
    var x = 10;
    x++;            //incremeant
    document.getElementById("increase").innerHTML = x
}

function minus() {
    var x = 10;
    x--;        //decremeant
    document.getElementById("decrease").innerHTML = x
}

window.alert(Math.round(Math.random()*50))
//makes a popup window that has a random number between 1-50
//Math.round just rounds so you don't get any strange numbers