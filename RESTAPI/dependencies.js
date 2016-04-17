var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');
var configuration = JSON.parse(fs.readFileSync('config.json', encoding="ascii"));

module.exports = function(wagner) {
  // console.log('inside dependencies function');
// var configuration = JSON.parse(
//   fs.readFileSync(configurationFile)
// );

console.log(configuration.stripeKey);
  // var stripe = configuration.stripeKey;
    var stripe = Stripe(configuration.stripeKey);
  // console.log('stripeKey' + stripe);

  // TODO: Make Stripe depend on the Config service and use its `stripeKey`
  // property to get the Stripe API key.
  wagner.factory('Stripe', function() {
    return stripe;
  });

  wagner.factory('fx', fx);

  wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync('./config.json').toString());
  });
};
