var divArr = [];

var firstBox3 = document.getElementById('firstBox3');
var secondBox3 = document.getElementById('secondBox3');
var thirdBox3 = document.getElementById('thirdBox3');
var fourthBox3 = document.getElementById('fourthBox3');
var fifthBox3 = document.getElementById('fifthBox3');

divArr[0] = firstBox3;
divArr[1] = secondBox3;
divArr[2] = thirdBox3;
divArr[3] = fourthBox3;
divArr[4] = fifthBox3;

function printArr(num){
    console.log(divArr[num].textContent);
}

printArr(1);
