const button = document.getElementById("analyze");
button.addEventListener("click", function () {
    const number = Number(document.getElementById("number").value);

    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }

    for (let i = 1; i <= number; i++) {
        console.log(i);
    }

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            console.log("Even:", i);
        }
    }
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            console.log("Odd:", i);
        }
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log("Sum:", sum);
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            console.log("Divisible by 5:", i);
        }
    }

    for (let i = 1; i <= 10; i++) {
        console.log(number + " × " + i + " = " + (number * i));
    }
    for (let i = number; i >= 1; i--) {
        console.log(i);
    }
    console.log("Finished!");
    if (number < 0 || !Number.isInteger(number)) {
        console.log("Factorial requires a non-negative integer.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        console.log("Factorial:", factorial);
    }
    let count = 1;
    while (count <= number) {
        console.log("While:", count);
        count++;
    }
    for (let i = 1; i <= number; i++) {
        if (i === 3) {
            continue;
        }
        console.log("Continue:", i);
    }
    for (let i = 1; i <= number; i++) {
        if (i === 5) {
            break;
        }
        console.log("Break:", i);
    }
});

const secretNumber = 7;
let attempts = 0;
let guess;
while (guess !== secretNumber) {
    const input = prompt("Guess the secret number (1-10):");
    if (input === null || input.trim() === "") {
        break;
    }
    guess = Number(input);
    attempts++;
    if (guess < secretNumber) {
        console.log("Too low");
    } else if (guess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Correct!");
        console.log("Attempts:", attempts);
        break;
    }
}