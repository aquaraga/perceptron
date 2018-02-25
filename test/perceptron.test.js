"use strict";
var Perceptron = require('../src/perceptron');

var assert = require('assert');
var math = require('mathjs');
describe('Perceptron', function() {
  describe('constructor', function() {
    it('should initialize with learning rate and epochs', function() {
    	let perceptron = new Perceptron({eta: 0.1, iter: 6});

    	let desc = perceptron.toString();

    	assert.equal("Learning rate: 0.1, Epochs: 6", desc);
    });

    it('should initialize with default learning rate and epochs', function() {
    	let perceptron = new Perceptron();

    	let desc = perceptron.toString();

    	assert.equal("Learning rate: 0.01, Epochs: 10", desc);
    });

    it('should give an empty weight vector when not trained', () => {
      let perceptron = new Perceptron();
      
      assert.deepEqual([], perceptron.weights());      
    });

    it('should give a weight vector of size one more than the number of features', () => {
      let perceptron = new Perceptron();

      let X = [[1, 2, 3]];
      let y = [1]
      perceptron.train(X, y);
      
      assert.equal(4, perceptron.weights().length);      
    });

    it('should update weight vector as per the perceptron learning rule', () => {
      let perceptron = new Perceptron({eta: 0.5, iter: 1});

      let X = [[1, 2, 3]];
      let y = [-1]
      perceptron.train(X, y);
      
      assert.deepEqual([-1, -1, -2, -3], perceptron.weights());      

    });

    it('should update weight vector, for each observation', () => {
      let perceptron = new Perceptron({eta: 0.5, iter: 1});

      let X = [[2, 1, 2], [1, -1, 3]];
      let y = [1, -1]
      perceptron.train(X, y);
      
      assert.deepEqual([-1, -1, 1, -3], perceptron.weights());      

    });
  });
});