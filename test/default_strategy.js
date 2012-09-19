var should = require('should')
  , Strategy = require('../lib/default_strategy');

describe('Default Strategy', function(){
  //arrange
  var strategy = Strategy({});

  it('Recognizes unknown flags as off.', function(done){
    //act
    strategy('someflag', function(err, on){
      //assert
      on.should.equal(false);
      done();
    });
  });
});
