var envvarStore = require('./envvar_store');

module.exports = function(opts){
  opts = opts || {};
  var store = opts.store || envvarStore;

  return store;
};
