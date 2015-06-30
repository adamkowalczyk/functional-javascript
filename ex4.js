function messages(array) {

	return array.filter(function(elem){
		return elem.message.length <= 50;
	})
	.map(function(elem){
		return elem.message;
	});
}

module.exports = messages;