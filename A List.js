// Takes an array and returns a list.

function arrayToList(array) {
	let list = null;
	for(i = array.length - 1; i >= 0; i--) {
		list = {value: array[i], rest: list};
	}

	return list;
}

console.log(arrayToList([1, 2, 3]));

// Takes a list and returns an array.

function listToArray(list) {
	let array = [];
	for(node = list; node; node = node.rest) {
		array.push(node.value);
	}

	return array;
};

console.log(listToArray(arrayToList([1, 2, 3])));

// Takes an element and adds it to the given list.

function prepend(element, list) {
	return JSON.stringify({value: element, rest: list});
};

console.log(prepend(0, arrayToList([1, 2, 3])));

// Returns the Nth position in a list.

function nth(list, pos) {
	for(node = list; node; node = node.rest) {
		if(!list) {
			return undefined;
		}
		else if(pos == 0) {
			return list.value;
		}
		else {
			return nth(list.rest, pos - 1);
		}
	}
};

console.log(nth(arrayToList([1, 2, 3, 4]), 1));