var Readline = require("readline-sync");

var Height = Readline.question("Your Height(cm):");
console.log("Your Height is :" + Height + " cm!")
var Weight = Readline.question("Your Weight(kg):");
console.log("Your Weight is :" + Weight + " kg!")
var BMI = Weight/((Height/100)^2);
console.log("BMI =" + BMI)