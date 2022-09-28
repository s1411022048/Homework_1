var Readline = require("readline-sync");

var Height = Readline.question("Your Height(cm):");
console.log("Your Height is :" + Height + " cm!");
var Weight_Low = 18.5*(Math.pow(Height/100,2));
var Weight_High = 24*(Math.pow(Height/100,2));
console.log("Your Ideal Weight is between:" + Weight_Low +  " to " + Weight_High + " kg!");