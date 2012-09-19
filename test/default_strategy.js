var should = require('should')
  , Strategy = require('../lib/default_strategy');

describe('Default Strategy with testing store', function(){
  //arrange
  var testStore = function(flag, account, user, cb){
    cb(null, flag === 'SOMEFLAG');
  };
  var strategy = Strategy({ store: testStore });

  it('recognizes "on" flags as on.', function(done){
    //act
    strategy('SOMEFLAG', function(err, on){
      //assert
      on.should.equal(true);
      done();
    });
  });

  it('recognizes unknown flags as off.', function(done){
    //act
    strategy('SOMEFLAG2', function(err, on){
      //assert
      on.should.equal(false);
      done();
    });
  });
});
