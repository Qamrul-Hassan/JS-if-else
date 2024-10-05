/* # 7. Shopping Disscount
Write a program that calculates a discount based on the purchse amount */

let purchaseAmount = 120 ;
let discount;
if ( purchaseAmount >= 100) {
    discount = 20 ;
} else if ( purchaseAmount >= 80 ) {
    discount = 10 ;
}else {
    discount = 0;
}
console.log ("Discount: " + discount + "%" );