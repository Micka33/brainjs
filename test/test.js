var assert = require("assert");

describe('Brain', function() {
  var brain = null;
  it('should require the brain library', function () {
    brain = require('brain');
    assert.equal(typeof(brain), 'object');
  });
  describe('#NeuralNetwork()', function () {
    var net = null;
    it('should create a neural network', function () {
      net = new brain.NeuralNetwork();
      assert.equal(typeof(net), 'object');
    });
    describe('#train()', function () {
      it('should give a kebab formated output', function () {
        // first we train on a very small dataset
        net.train([{input:{a: 0, b: 1}, output:{kebab: 0}}]);
        // then we ask the network
        var output = net.run({a:1, b:0});
        assert.equal(typeof(output.kebab), 'number');
      });
    });
  });
});
