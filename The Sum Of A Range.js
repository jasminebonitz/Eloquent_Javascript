/*
 Returns an array containing all numbers from the first given number up to the second. If an 
increment argument is given, it increases or decreases by that number until it reaches the end.
*/

function range(start, end, increment) {
	let arrayOfNumbers = [];
	if(increment > 1) {
		for(i = start; i <= end; i += increment) {
			arrayOfNumbers.push(i);
		}
	}
	else if(increment < 1) {
		for(i = start; i >= end; i += increment) {
			arrayOfNumbers.push(i);
		}
	}
	else {
		for(i = start; i <= end; i++) {
			arrayOfNumbers.push(i);
		}
	}
	return arrayOfNumbers;
};

const test = range(1, 10);
const testIncrement = range(50, 100, 5);
const testNegativeIncrement = range(5, -1, -1);

// Returns the sum of an array.

function sum(array) {
	let total = 0;
	for(i = 0; i < array.length; i++) {
		total = total + array[i];
	}
	return total;
};

console.log(JSON.stringify(test));
console.log(JSON.stringify(testIncrement));
console.log(JSON.stringify(testNegativeIncrement));
console.log(sum([5, 15, 30, 50]));
console.log(sum(range(1, 10)));							// Returns the sum of a range.