module.exports = require('cqrs-domain').defineCommand({
  name: 'deleteSalesinvoice'
}, function (data, aggregate) {
  aggregate.apply('salesinvoiceDeleted', data);
});