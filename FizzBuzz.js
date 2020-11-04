/* 
 ** Write a program that prints the numbers from 1 to 100. 
 ** But for multiples of three print "Fizz" instead of the number, 
 ** and for the multiples of five print "Buzz." 
 ** For multiples of both three and five print "FizzBuzz."
 */

function fizzBuzz() {
    for (let step = 0; step < 101; step++) {
        if (step % 3 === 0 && step % 5 === 0) {
            console.log('FizzBuzz')
        } else if (step % 3 === 0) {
            console.log('Fizz')
        } else if (step % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(step)
        }
    }
}

fizzBuzz()