module.exports = function(opts){
  var prefix = (opts.envVarPrefix || 'BETAFLAG').toUpperCase();

  var lookup = function(flag, account, user){
    var key = prefix + '_' + flag.toUpperCase();
    var value = process.env[key];

    if(value === undefined || value === null || !value.length || /^(false|0|off|no)$/i.test(value.toString())){
      return false;
    }else if(/^(\*|true|1|on|yes)$/i.test(value.toString())){
      return true;
    }else{
      //TODO: utilize account & user for flag lookups
      return false;
    };
  };

  return function(flags, account, user, cb){
    if(flags instanceof Array){
      var retval = {};
      flags.forEach(function(f){
        retval[f] = lookup(f, account, user);
      });
      cb(null, retval);
    }else{
      cb(null, lookup(flags, account, user));
    }
  };
};
