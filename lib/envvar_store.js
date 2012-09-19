module.exports = function(flag, cb){
  var key = 'BETAFLAG_' + flag.toUpperCase();
  var on = process.env[key];
  cb(null, on ? true : false);
};
