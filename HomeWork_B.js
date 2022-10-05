var Readline = require("readline-sync");
while (true){
while (true){
    var Height = Readline.question("Your Height(cm):");

    if(isNaN(Height)||Height < 0 || Height > 220){
        console.log("Please Enter A Number Between 0 to 220");
        continue;
    }
    else{
        break;
    }
}
console.log("Your Height is :" + Height + " cm!")

while (true){
    var Weight = Readline.question("Your Weight(kg):");

    if(isNaN(Weight)||Weight < 0 || Weight > 220){
        console.log("Please Enter A Number Between 0 to 200");
        continue;
    }
    else{
        break;
    }
}
console.log("Your Weight is :" + Weight + " kg!")


var BMI = Weight/Math.pow((Height/100),2);
console.log("BMI = " + BMI.toFixed(2));
console.log("-------------------------------");
continue;
}