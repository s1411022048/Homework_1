class BMI_Calc{
    constructor(Height,Weight){
        this.Height = Height;
        this.Weight = Weight;
    }
    BMI = function(){
        var bmi = (this.Weight / (Math.pow((this.Height / 100),2)));
        return bmi;
    }
}

var A = new BMI_Calc(172,56);
var B = new BMI_Calc(176,50);

console.log(A.BMI());
console.log(B.BMI());