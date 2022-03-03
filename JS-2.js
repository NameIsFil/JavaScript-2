//zad 1

function convertToString(value) {
    return String(value)
}

//zad 2 - problem

function yesOrNo(value) {

    if (value) {
        return 'Yes'
    } else {
        return 'No'
    }
}

//zad 3 - w trakcie


const user = {
    name: 'John',
    age: 20
}

function howOldIsUser(user) {
    return user.name + ' is ' + user.age + ' years old'
}


//Zad 4 - w trakcie

function isPalindrome(input) {
    if(typeof(input) === "string") {
        input = input.toLowerCase()
        return input === input.split('').reverse().join('')
    }
    return 'not a string'
}

//przy pomocy:
//https://hellodevworld.com/365-days-of-coding/advanced-palindrome-interview-question-javascript

//Zad 5

function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return 0
    }
    else if (player1 === 'scissors') {
        if (player2 === 'rock') {
            return 2
        } else {
            return 1
        }
    }
    else if (player1 === 'rock') {
        if (player2 === 'paper') {
            return 2
        } else {
            return 1
        }
    }
    else if (player1 === 'scissors') {
        if (player2 === 'paper') {
            return 1
        } else {
            return 2
        }
    }
}

// rockPaperScissors('rock', 'scissors'); // 1
// rockPaperScissors('rock', 'paper'); // 2
// rockPaperScissors('paper','paper'); // 0