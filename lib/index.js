var defaultStrategy = require('./default_strategy');

module.exports = function(opts){
  opts = opts || {};
  var strategy = opts.strategy || defaultStrategy(opts);
  return {
    check: strategy,
    middleware: function(req, res, next){
      req.beta = function(flag, cb){
        strategy(flag, req, cb);
      };
      next();
    }
  };
};
