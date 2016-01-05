module.exports = require('cqrs-domain').defineEvent({
  name: 'salesinvoiceCreated'
},
function (data, aggregate) {
  aggregate.set(data);
});