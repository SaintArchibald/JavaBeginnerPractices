// Practice questions: Beginner

// Q1
function number (num1, num2) {
    return num1 + num2
}
 
console.log(number(3, 2))
console.log(number(-3, -6))
console.log(number(7, 3))
 
// Q2
function hoursIntoSeconds (hours) {
    return hours * 3600
}
console. log(hoursIntoSeconds(2))
console. log(hoursIntoSeconds(10))
console. log(hoursIntoSeconds(24))

// Q3
function calcPerimeter (length, width) {
    return (2 * length) + (2 * width)
}
 
console .log(calcPerimeter(6, 7))
console .log(calcPerimeter(20, 10))
console .log(calcPerimeter(2, 9))


// Q4
function calcTriangleArea (base, height) {
    return 0.5 * base * height
}
 
console. log(calcTriangleArea(3, 2))
console. log(calcTriangleArea(10, 10))
console. log(calcTriangleArea(20, 20))

// Q5
function appendFrontend (name) {
    return (`${name}frontend`)
}
 
console. log(appendFrontend (`Apple`))
console. log(appendFrontend (`Banana`))
console. log(appendFrontend (`Orange`))

// Q6
// function sumGreaterThan100 (num1, num2) {
//     if (num1 + num2 > 100) {
//         return true
//     }
//     else {
//         return false
//     }
// }
 
// console. log(sumGreaterThan100(20, 10))
// console. log(sumGreaterThan100(50, 60))
// console. log(sumGreaterThan100(100, -50))
// Best practice Q6
function sumGreaterThan100 (num1, num2) {
    return num1 + num2 > 100
}
 
console. log(sumGreaterThan100(20, 10))
console. log(sumGreaterThan100(50, 60))
console. log(sumGreaterThan100(100, -50))

// Q7
function lessThanOrEqualToZero (number) {
    return number <= 0
}
 
console. log(lessThanOrEqualToZero(3))
console. log(lessThanOrEqualToZero(0))
console. log(lessThanOrEqualToZero(-2))

// Q8
function oppositeBoolean (boolean) {
   return !boolean
}
 
console. log(oppositeBoolean(false))
console. log(oppositeBoolean(true))

// Q9
// function isNotZero (any) {
//     if ( any !== 0 ) {
//         return true
//     }
//     else {
//         return false
//     }
// }
 
// console. log(isNotZero(5))
// console. log(isNotZero(0))
// console. log(isNotZero(null))
// Best practice Q9
function isNotZero (any) {
    return any !== 0
}
 
console. log(isNotZero(5))
console. log(isNotZero(0))
console. log(isNotZero(null))

// Q10
function calcRemainder (num1, num2) {
    return num1 % num2
}
 
console. log(calcRemainder(4, 2))
console. log(calcRemainder(7, 8))
console. log(calcRemainder(9, 8))

// Q11
function isOdd (num) {
    return num % 2 !== 0
}
 
console. log(isOdd(1))
console. log(isOdd(2))
console. log(isOdd(3))

// Q12
// function booleanInteger (number) {
//     if (number % 2 === 0) {
//         return 1
//     }
//     return -1
// }
 
// console. log(booleanInteger(1))
// console. log(booleanInteger(2))
// console. log(booleanInteger(5))
// Best practice: use ternary operators Q12
function booleanInteger (number) {
    return number % 2 === 0 ? 1 : -1
    }
 
console. log(booleanInteger(1))
console. log(booleanInteger(2))
console. log(booleanInteger(5))

// Q13
function isLoggedInAndSubscribed (value1, value2) {
    return value1 === 'LOGGED_IN' && value2 === 'SUBSCRIBED' ? true : false
}
 
console. log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED'))
console. log(isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED'))
console. log(isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED'))

// Q14
function isLoggedInAndSubscribed (value1, value2) {
    return value1 === 'LOGGED_IN' || value2 === 'SUBSCRIBED' ? true : false
}
 
console. log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED'))
console. log(isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED'))
console. log(isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED'))
