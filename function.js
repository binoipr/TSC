function Sum(num1, num2) {
    return num1 + num2;
}
console.log(Sum(5, 6));
var newSum = function (num1, num2) {
    return num1 + num2;
};
console.log(newSum(6, 4));
function checkSum(num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    return num1 + num2;
}
console.log(checkSum("5", 65));
function getName(firstName, lastName) {
    if (lastName == undefined)
        return firstName;
    return firstName + " " + lastName;
}
console.log(getName("John"));
function myVoid() { } // function myVoid():void { return;}
