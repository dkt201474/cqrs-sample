module.exports = require('cqrs-domain').defineCommand({
  name: 'createSalesinvoice'
}, function (data, aggregate) {
  aggregate.apply('salesinvoiceCreated', data);
});