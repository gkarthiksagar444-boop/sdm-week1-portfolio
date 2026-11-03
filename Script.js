function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log("Sum:", sumOfArray([10, 20, 30, 40])); // Output: 100
const student = {
    name: "Karthik",
    course: "Full Stack Development",
    week: "Week 1"
};
console.log(`Student Name: ${student.name}, Course: ${student.course}`);
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}
console.log(checkEvenOrOdd(7)); // Output: Odd Number
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed String:", reverseString("Karthik")); // Output: kihtraK
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Max Number:", findMax([12, 45, 7, 89, 23])); // Output: 89
const person = {
    firstName: "Gunti",
    lastName: "Karthik",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log("Full Name:", person.fullName()); // Output: Gunti Karthik
function findFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5:", findFactorial(5)); // Output: 120
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenOnly = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers Array:", evenOnly); // Output: [2, 4, 6, 8, 10]
const multiply = (a, b) => a * b;
console.log("Multiplication Result:", multiply(6, 7)); // Output: 42
// DOM (Document Object Model) allows JavaScript to interact with HTML elements.
// Example to change text of an HTML element dynamically:
// document.getElementById("myHeading").innerText = "Welcome to JavaScript Basics!";
console.log("DOM Manipulation: Used to select and update HTML elements dynamically.");
