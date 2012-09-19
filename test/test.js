var should = require('should')
  , Beta = require('../lib');

describe('Beta', function(){

  it('Works', function(done){
    //arrange
    var beta = new Beta();

    //act
    beta.check('someflag', function(err, on){
      //assert
      on.should.equal(true);
      done();
    });
  });

});
