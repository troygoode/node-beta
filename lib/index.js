var defaultStrategy = require('./default_strategy');

module.exports = function(options){
  options = options || {};
  var strategy = options.strategy || defaultStrategy(options);
  return {
    check: strategy
  };
};
