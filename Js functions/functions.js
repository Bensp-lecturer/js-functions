// Question 1:
// Create a function named "multiplyAndCheck"
// the function would accept an argument "num" of type number
// multiply it by 2 and console.log it 

// return and console the number outside the function

// check if the result is odd or even

function multiplyAndCheck(num = 3) {
    let multiplied = num * num

    if (multiplied % 2 === 0) {
        return "even"
    } else if (multiplied % 2 !== 0 && multiplied === 9) {
        return "fizz buzz"
    } else {
        return "odd"
    }

    // add multiple conditions - condition1 && condition2 && condition3
    // add multiple excluding conditions - condition1 || condition2 || condition3
}


// fizz buzz game
// create a function fizzBuzz
// it will accept an argument num
// if num is divisible by 3 console.log "fizz"
// if num is divisible by 5 console.log "buzz"
// if num is divisible by 5 and 3 console.log "fizz buzz"
// else if it is not divisible by 5 or 3, print the number itself

function fizzBuzz(num) {

    if (num % 5 === 0 && num % 3 === 0) {
        console.log("Fizz Buzz")
    } else if (num % 5 === 0) {
        console.log("Buzz")
    } else if (num % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(num)
    }

}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(277)
fizzBuzz(7)



