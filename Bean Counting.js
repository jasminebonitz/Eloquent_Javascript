// Returns the number of "B" characters that appear in the given string.

function countBs(string) {
	let numberOfUpperBs = 0;
	for(i = 0; i < string.length; i++) {
		if(string[i] == "B") {
			numberOfUpperBs = numberOfUpperBs + 1;
		}
	}
	console.log(numberOfUpperBs);
};

countBs("BaBBcBggSbB");


// Returns a number that indicates how many of the given character appear in the given string.

function countChar(string, char) {
	let numberOfChars = 0;
	for(i = 0; i < string.length; i++) {
		if(string[i] == char) {
			numberOfChars = numberOfChars + 1;
		}
	}
	console.log(numberOfChars);
};

countChar("elephant ears", "e");