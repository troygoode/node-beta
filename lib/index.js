var defaultStrategy = require('./default_strategy');

module.exports = function(opts){
  opts = opts || {};
  var strategy = opts.strategy || defaultStrategy(opts);
  return {
    check: strategy
  };
};
