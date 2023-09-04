for (let number = 0; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz')
  } else {
      if (number % 3 === 0) {
        console.log('Fizz');
      } else if (number % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(number);
      }
  }
}

/*
// Function that counts the amount of a specific character within a given string.

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
                counted += 1;   
            }
    }
    return counted;
} 

function countBs(string) {
    return countChar(string, 'B');
}

console.log(countBs('BBC'));
console.log(countChar('america', 'a')); 
console.log(countChar("I do not know that much but I would love to tell you more about myself if you're interested", 'o')); 
*/