module.exports = function(opts){
  return function(flag, account, user, cb){
    var key = 'BETAFLAG_' + flag.toUpperCase();
    var on = process.env[key];
    cb(null, on ? true : false);
  };
};
