function Helpers() {}

/**
	Check if all arguments that are strings are equal to each other.
*/
Helpers.allStringsEqual = function(firstString, secondString) {
	var argArray = Array.prototype.slice.call(arguments);
	var argumentsEqual = 0;
	var argLength = argArray.length;
	while (argLength--) {
		var arg1 = argArray[argLength];
		var arg2 = argArray[argLength+1];
		if (argArray.length % 2 == 1){
			var arg3 = argArray[argLength+2];
			if (arg1 == arg2 && arg2 == arg3 && arg1 == arg3) {
				argumentsEqual += 3;
				continue;
			}
		}
		else {
			if (arg1 == arg2) {
				argumentsEqual += 2;
				continue;
			}
		}
	}
	if (argumentsEqual >= argArray.length) {
		return true;
	}
	else {
		return false;
	}
}

module.exports = Helpers;