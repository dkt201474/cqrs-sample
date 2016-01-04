module.exports = require('cqrs-domain').defineEvent({
  name: 'machineChanged'
},
function (data, aggregate) {
  aggregate.set(data);
});