function getDependencies(mod, result) {
	// defualt value for result
	result = result || [];
	// && returns *first* operand if it is *falsy*,
	// || returns *second* operand if *first* is falsy
	// order of operations is && -> ||
	// so 0 && 1 || 2 === (0 && 1) || 2 === 0 || 2  => 2
	var dependencies = mod && mod.dependencies || {};
	// if !mod => {}
	// if mod => mod.dependencies
	// thus we always have an (empty) object to pass to Object.keys. No errors thrown.
	// so we can recurse by passing each dependency to getDependencies, even is it has no dependencies
	Object.keys(dependencies).forEach(function(dep) {
		var key = dep + '@' + mod.dependencies[dep].version;
		if (result.indexOf(key) === -1) {
			result.push(key);
		}
		getDependencies(mod.dependencies[dep], result);
	});
	return result.sort();
}

module.exports = getDependencies;