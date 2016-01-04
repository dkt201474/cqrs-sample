module.exports = require('cqrs-domain').defineCommand({
  name: 'createMachine'
}, function (data, aggregate) {
  aggregate.apply('machineCreated', data);
});