var prices = [100, 120, 80, 160, 240, 50];
function calculateTotal(arr) {
    return arr.reduce(function (acc, num) { return (acc += num); });
}
var ans = calculateTotal(prices);
console.log(ans);
function isGreaterThan100(num1, num2) {
    return num1 + num2 > 100 ? "greater than 100" : num1 + num2;
}
var check = isGreaterThan100(40, 80);
console.log(check);
