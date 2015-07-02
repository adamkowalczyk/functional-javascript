// function reduce(arr, fn, init) {
// 	var result = init;
// 	var count = 0;
// 	while (count < arr.length) {
// 		fn(result, arr[count], count, arr);
// 		count++;
// 	}
// 	return result;
// }

// Key points:
// 1) function 'step' is declared and alled immediately 
//- parens around function are convention to show it is being called on creation
// 2) 'value' is initially init, then becomes return value of fn 
//- perfect example of passing a func as an arg. Not just passing func, but *calling* it with specified args.

function reduce(arr, fn, init) {
	return (function step(index, value){
		if (index > arr.length - 1) {
			return value;
		}
		else {
			return step(index+1, fn(value, arr[index], index, arr));
		}
	})(0, init);
}

module.exports = reduce;
