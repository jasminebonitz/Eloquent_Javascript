// Creates a grid with either a space or "#" in each position that forms a chessboard of the given size.

function chessboard(size) {
	for (i = 1; i <= size; i++){
		console.log(i % 2 ? " #".repeat(size/2) : "# ".repeat(size/2));
	}
};

chessboard(8);