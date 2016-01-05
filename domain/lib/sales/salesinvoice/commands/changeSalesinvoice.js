module.exports = require('cqrs-domain').defineCommand({
  name: 'changeSalesinvoice'
}, function (data, aggregate) {
  aggregate.apply('salesinvoiceChanged', data);
});