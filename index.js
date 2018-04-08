'use strict';

module.exports = function(obj, keyStr, defaultValue) {
	try {
		var value = eval('obj' + keyStr);
	}
	catch(err) {
		return defaultValue !== undefined ? defaultValue : null;
	}
	return value;
};

