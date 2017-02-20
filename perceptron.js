"use strict";

class Perceptron {
	constructor(options) {
		if (!options) {
		options = {};
		}
		this.eta = options.eta || 0.01;
		this.iter = options.iter || 10;
	}

	toString() {
		return `Learning rate: ${this.eta}, Epochs: ${this.iter}`	;
	}
}

module.exports = Perceptron;