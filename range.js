function range(start, end) {
	// empty array created to later push the range
	tempArr = [];

	// loops to the value of end as the value of end should be inclusive in the output
	for (let i = 0; i <= end; i++) {
		// increases the value of num by 1 without changing the value of start
		let num = start + i;
		// break the loop if value of num goes above the value of end as the output is inclusive of end but not more than that
		if (num > end) {
			break;
		} else {
			tempArr.push(num); //push the value of num to tempArr which was initially empty
		}
	}
	return tempArr;
}

module.exports = range;
