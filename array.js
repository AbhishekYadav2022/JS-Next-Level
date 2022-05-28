var colors;
colors = ['white', 'black', 'green', 'blue']

var el = document.getElementById('box2');
el.innerHTML = 'I like ' + '<span>' + colors[3] + '</span>' + ' color.';

var divArr = [];

var thirdBox2 = document.getElementById('thirdBox2');
var fourthBox2 = document.getElementById('fourthBox2');
var fifthBox2 = document.getElementById('fifthBox2');

divArr[0] = thirdBox2;
divArr[1] = fourthBox2;
divArr[2] = fifthBox2;
console.log(divArr[0].textContent);