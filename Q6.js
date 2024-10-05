/*# 6. Determine Leap Year
Write a program that determine if a year is a leap year */

let year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log ( year + " is a leap year. ");
} else {
    console.log ( year + " is not a leap year. ");
}