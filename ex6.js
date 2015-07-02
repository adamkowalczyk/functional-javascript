// function countWords(inputWords) {
// 	var wordsObj = {};
// 	inputWords.reduce(function(prevWord, currentWord){
// 		if (!wordsObj.hasOwnProperty(currentWord) ){
// 			return wordsObj[currentWord] = 1;
// 		}
// 		else {
// 			return wordsObj[currentWord]++;
// 		}
// 	}, inputWords[0]);
// 	return wordsObj;
// }

// Official solution - interesting use of inital value, much better!
// inital value becomes prev value (1st arg) as you reduce..

function countWords(inputWords) {
	return inputWords.reduce(function(countObj, word){
		countObj[word] = countObj[word]++ || 1 ;
	}, {});
}


module.exports = countWords;