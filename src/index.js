
function stringToNumber(str) {
	if(str.match(/^[a-z][a-z][a-z]/)) {
		return 0;
	} else {
		let numb = str.match(/^[^\d]*(\d+)/);
		if(numb.length) {
			return +numb[0];
		}
		return 0;
	}
}

module.exports = stringToNumber;