module.exports = require('cqrs-domain').defineEvent({
  name: 'salesinvoiceDeleted'
},
function (data, aggregate) {
  aggregate.destroy();
});