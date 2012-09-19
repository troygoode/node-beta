module.exports = function(opts){
  var prefix = (opts.envVarPrefix || 'BETAFLAG').toUpperCase();

  return function(flag, account, user, cb){
    var key = prefix + '_' + flag.toUpperCase();
    var value = process.env[key];

    //TODO: utilize account & user for flag lookups
    //TODO: support lookups of an array of flags

    cb(null, value ? true : false);
  };
};
