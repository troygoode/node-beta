var should = require('should')
  , store = require('../lib/envvar_store');

describe('EnvVarStore', function(){
  //arrange
  it('recognizes "on" flags as on.', function(done){
    //act
    store('SOMEFLAG', function(err, on){
      //assert
      on.should.equal(true);
      done();
    });
  });

  it('recognizes unknown flags as off.', function(done){
    //act
    store('SOMEFLAG2', function(err, on){
      //assert
      on.should.equal(false);
      done();
    });
  });
});
