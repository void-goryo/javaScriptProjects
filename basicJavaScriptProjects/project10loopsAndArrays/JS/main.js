function callLoop() {
    var x = 0;                          //number
    var number = "";                    //string
    while(x < 21){                      //stop when x hits 21
        number += "<br>" + x;           //addes <br> + x to number
        x++;                            //x + 1
    }
    document.getElementById("loop").innerHTML = number;
}

let string = "this is a sentance";
string = string.length;     //counts letters
const friends = ["Celia", " Kaylee", " Emily", " Tyler"];   //array
let numberFriends = friends.length;             //counts items in array
friends.length = 4;                             //will display array from 1 - 4

document.getElementById("words").innerHTML = string;
document.getElementById("friends").innerHTML = friends;
document.getElementById("length").innerHTML = numberFriends;