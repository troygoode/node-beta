var envVarStrategy = require('./envvar_strategy');

module.exports = function(strategy){
  strategy = strategy || envVarStrategy;
  return {
    check: strategy
  };
};
