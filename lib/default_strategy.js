var envvarStore = require('./envvar_store');

module.exports = function(opts){
  opts = opts || {};
  var store = opts.store || envvarStore(opts);
  var accountIdentifier = opts.accountIdentifier || function(req, cb){
    cb(); // null
  };
  var userIdentifier = opts.userIdentifier || function(req, cb){
    cb(); // null
  };

  return function(flag, req, cb){
    if(typeof(req) === 'function') cb = req;
    accountIdentifier(req, function(err, account){
      if(err) return cb(err);
      userIdentifier(req, function(err, user){
        if(err) return cb(err);
        store(flag, account, user, cb);
      });
    });
  };
};
