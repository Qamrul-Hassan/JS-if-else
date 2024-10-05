/*# 5. Ticket pricing
Write a program that calculates the ticket priced based on age:*/

let age =25;
let TicketPrice;

if (age < 12) {
    TicketPrice = 5;
}else if (age >= 12 && age <18) {
    TicketPrice = 10 ;
}else if (age >= 18 && age <60) {
    TicketPrice = 20;
}else {
    TicketPrice =15 ;
}
console.log ("Ticket Price: $ " + TicketPrice);