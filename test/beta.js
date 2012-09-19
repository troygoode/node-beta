var should = require('should')
  , Beta = require('../lib');

describe('Beta with custom strategy', function(){
  //arrange
  var strategy = function(flag, cb){
    var on = flag === 'someflag';
    cb(null, on);
  };
  var beta = new Beta({strategy: strategy});

  it('Recognizes "on" flags as on.', function(done){
    //act
    beta.check('someflag', function(err, on){
      //assert
      on.should.equal(true);
      done();
    });
  });

  it('Recognizes unknown flags as off.', function(done){
    //act
    beta.check('someflag2', function(err, on){
      //assert
      on.should.equal(false);
      done();
    });
  });
});

describe('Beta with default strategy', function(){
  //arrange
  var beta = new Beta();

  it('Recognizes unknown flags as off.', function(done){
    //act
    beta.check('someflag', function(err, on){
      //assert
      on.should.equal(false);
      done();
    });
  });
});
