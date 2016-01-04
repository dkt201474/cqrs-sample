module.exports = require('cqrs-domain').defineEvent({
  name: 'machineDeleted'
},
function (data, aggregate) {
  aggregate.destroy();
});