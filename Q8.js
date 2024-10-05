/* # 8. Time of Day Greetings
Write a program that greets the users based on the time of day. */

let currentTime = new Date();
let currentHour = currentTime.getHours();
let greeting;
if (currentHour < 12) {
    greeting = "Good Morning !";
} else if (currentHour < 18) {
    greeting = "Good Afternoon ! ";
} else {
   greeting = "Good Evening !";
}
console.log(greeting);