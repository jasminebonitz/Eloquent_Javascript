// Returns an array in reversed order.

function reverseArray(array) {
	let inverse = [];
	for(i = 1; i <= array.length; i++) {
		inverse.unshift(i);
	}
	
	return inverse;
}

// Returns an array with reversed elements.

function reverseArrayInPlace(array) {
	const len = array.length;
	for(i = 0; i <= Math.floor(len / 2); i++) {
		let temp = array[i];
		array[i] = array[len - 1 - i];
		array[len - 1 - i] = temp;
	}

	return array;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));