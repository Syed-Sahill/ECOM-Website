
//REPLACE CHILD

var newElement = document.createElement("li");

var newText = document.createTextNode("Mango");

newElement.appendChild(newText);

var target = document.getElementById("list");

var oldElement = target.children[1];

console.log(oldElement);

target.replaceChild(newElement , oldElement);

console.log(oldElement);


// REMOVE CHILD
var target = document.getElementById("list");

var oldElement = target.children[1];


target.removeChild(oldElement);
