module.exports = function(opts){
  var prefix = (opts.envVarPrefix || 'BETAFLAG').toUpperCase();

  return function(flags, account, user, cb){
    //TODO: support lookups of an array of flags
    var flag = typeof(flags) === 'string' ? flags : flags[0]; // we only support a single flag right now

    var key = prefix + '_' + flag.toUpperCase();
    var value = process.env[key];

    if(value === undefined || value === null || !value.length || /^(false|0|off|no)$/i.test(value.toString())){
      cb(null, false);
    }else if(/^(\*|true|1|on|yes)$/i.test(value.toString())){
      cb(null, true);
    }else{
      //TODO: utilize account & user for flag lookups
      cb(null, false);
    };
  };
};
