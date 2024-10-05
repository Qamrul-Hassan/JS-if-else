/* # 9. BMI Calculator
Write a program that calculates the body mass index (BMI) and categorizes it */

let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
    category = "Under Weight";
} else if ( bmi < 24.9) {
    category = " Normal Weight"
} else if (bmi < 29.9 ) {
    category = "Over Weight"
} else {
    category = "Obese";
}
console.log ("BMI: " + bmi.toFixed(2));
console.log ("Category: " + category);