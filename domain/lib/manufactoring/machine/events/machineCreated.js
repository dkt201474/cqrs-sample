module.exports = require('cqrs-domain').defineEvent({
  name: 'machineCreated'
},
function (data, aggregate) {
  aggregate.set(data);
});