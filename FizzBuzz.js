/* 
Outputs numbers 1 to 100, replacing numbers divisible by 3 with "Fizz", numbers 
divisible by 5 with "Buzz", and numbers divisible by both 3 and 5 with "FizzBuzz".
*/

for(let number = 1; number <= 100; number++) {
	if (number % 3 === 0 && number % 5 === 0) {
		console.log("FizzBuzz");
	}
	else if (number % 3 === 0) {
		console.log("Fizz");
	}
	else if (number % 5 === 0) {
		console.log("Buzz");
	}
	else {
		console.log(number);
	}
};