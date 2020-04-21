// Returns "True" or "False" according to the value passed to the function.

function isEven(value) {
	if (value == 0) {
		console.log("True");
	}
	else if(value == 1) {
		console.log("False");
	}
	else if(value < 0) {
		return isEven(value * -1);
	}
	else {
		return isEven(value - 2);
	}
};

isEven(10);
isEven(15);
isEven(-50);