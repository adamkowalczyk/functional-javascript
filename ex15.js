function loadUsers(userIds, load, done) {
	var users = [];
	userIds.forEach(function(elem, index){
		var user = load(elem);
		// explicitly preserver array order, don't rely on push
		users[index] = user;
		// no need for 'count' var, just compare lengths..
		if (users.length === userIds.length) {
			return done(users);
		}
	});
}

module.exports = loadUsers;