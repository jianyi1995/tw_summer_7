module.exports = function main(email, suffixes) {
	var name = email.split('@')[1]
	return suffixes.indexOf(name) != -1
};
