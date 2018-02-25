"use strict";

const math = require('mathjs');

class Perceptron {
	constructor(options) {
		if (!options) {
		    options = {};
		}
		this.eta = options.eta || 0.01;
		this.iter = options.iter || 10;
		this._weights = [];
	}

	toString() {
		return `Learning rate: ${this.eta}, Epochs: ${this.iter}`;
	}

	train(X, y) {
		const features = X[0].length + 1
		this._weights = Array.apply(null, Array(features)).map(Number.prototype.valueOf, 0);

		X.forEach((v, i, m) => {
		  const predicted = this.predict(v);
		  const update = this.eta * (y[i] - predicted);
		  const updateWithoutBias = math.dotMultiply(update, v);
		  const updateWithBias = [update].concat(updateWithoutBias);
		  this._weights = math.add(this._weights, updateWithBias);
		});

	}

	predict(x) {
		const weightsExceptBias = this._weights.slice(1);
		const netInput = math.prod(x, math.transpose(weightsExceptBias)) + this._weights[0];
		return netInput >= 0 ? 1: -1;
	}

	weights() {
		return this._weights;
	}
}

module.exports = Perceptron;