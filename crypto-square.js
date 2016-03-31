var Crypto = function(message) {
	this.message = message;
}

Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[^a-zA-Z0-9]/ig, "").toLowerCase();
}

Crypto.prototype.getCount = function() {
	return this.normalizePlaintext().length;
}

Crypto.prototype.size = function() {
	return Math.ceil(Math.sqrt(this.getCount()));	
};

Crypto.prototype.plaintextSegments = function() {
	var pattern = ".{1," + this.size() + "}";
	return this.normalizePlaintext().match(new RegExp(pattern, 'g'));
};

Crypto.prototype.ciphertext = function() {
	var cipherArray = [];
	for (var i = 0; i < this.size(); i++) { 								// for each column
		for (var x = 0; x < this.plaintextSegments().length; x++) { 		// go through the array of segments
			cipherArray.push(this.plaintextSegments()[x].charAt(i));		// push into array
		}
	}
	return cipherArray.join("");
}

module.exports = Crypto;