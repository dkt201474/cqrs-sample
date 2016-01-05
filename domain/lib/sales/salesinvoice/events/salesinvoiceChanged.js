module.exports = require('cqrs-domain').defineEvent({
  name: 'salesinvoiceChanged'
},
function (data, aggregate) {
  aggregate.set(data);
});