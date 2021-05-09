function Sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(Sum(5, 6));

let newSum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(newSum(6, 4));

function checkSum(num1: any, num2: number): any {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  return num1 + num2;
}

console.log(checkSum("5", 65));

function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) return firstName;
  return firstName + " " + lastName;
}

console.log(getName("John"));

function myVoid(): void {} // function myVoid():void { return;}
