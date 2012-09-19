var should = require('should')
  , Store = require('../lib/envvar_store');

describe('EnvVarStore', function(){
  //arrange
  process.env.BETAFLAG_SOMEFLAG = '*';
  process.env.BETAFLAG_SOMEFLAG2 = 'false';
  var store = Store({});
  var account = null;
  var user = null;

  it('recognizes "on" flags as on.', function(done){
    //act
    store('SOMEFLAG', account, user, function(err, on){
      //assert
      on.should.equal(true);
      done();
    });
  });

  it('recognizes unknown flags as off.', function(done){
    //act
    store('SOMEFLAG2', account, user, function(err, on){
      //assert
      on.should.equal(false);
      done();
    });
  });

  it('supports lookups on an array of flags.', function(done){
    //act
    store(['SOMEFLAG', 'SOMEFLAG2'], account, user, function(err, flags){
      //assert
      flags.SOMEFLAG.should.equal(true);
      flags.SOMEFLAG2.should.equal(false);
      done();
    });
  });
});
