function higherOrder(operation, num) {
	if (num) {
		operation();
		higherOrder(operation, num - 1);
	}
	else {
		return;
	}
}

module.exports = higherOrder;