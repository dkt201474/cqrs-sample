module.exports = require('cqrs-domain').defineCommand({
  name: 'deleteMachine'
}, function (data, aggregate) {
  aggregate.apply('machineDeleted', data);
});