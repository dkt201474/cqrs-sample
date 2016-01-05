module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'salesinvoiceChanged',
  id: 'payload.id'
}, 'update');


/*module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
    // optional, default is file name without extension,
    // if name is '' it will handle all events that matches
    name: 'itemChanged',

    // optional
    aggregate: 'item',

    // optional
    context: 'manufactoring',

    // optional, default is 0
    version: 2,

    // optional, if not defined or not found it will generate a new viewmodel with new id
    id: 'payload.id',

    // optional, suppresses auto-creation of new view model if none matching the id can be found, default is true
    autoCreate: true,

    // optional, if not defined it will pass the whole event...
    payload: 'payload',

    // optional, default Infinity, all view-builders will be sorted by this value
    priority: 1
}, 'update');*/
