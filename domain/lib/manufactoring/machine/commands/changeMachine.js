module.exports = require('cqrs-domain').defineCommand({
  name: 'changeMachine'
}, function (data, aggregate) {
  aggregate.apply('machineChanged', data);
});