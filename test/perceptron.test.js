"use strict";
var Perceptron = require('../src/perceptron');

var assert = require('assert');
describe('Perceptron', function() {
  describe('constructor', function() {
    it('should initialize with learning rate and epochs', function() {
    	let perceptron = new Perceptron({eta: 0.1, iter: 10});

    	let desc = perceptron.toString();

    	assert.equal("Learning rate: 0.1, Epochs: 10", desc);
    });
  });
});