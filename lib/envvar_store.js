module.exports = function(opts){
  var prefix = (opts.envVarPrefix || 'BETAFLAG').toUpperCase();

  return function(flag, account, user, cb){
    var key = prefix + '_' + flag.toUpperCase();
    var value = process.env[key];

    cb(null, value ? true : false);
  };
};
