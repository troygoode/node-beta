var defaultStrategy = require('./default_strategy');

module.exports = function(strategy){
  strategy = strategy || defaultStrategy();
  return {
    check: strategy
  };
};
