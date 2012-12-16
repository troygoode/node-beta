node-beta
=========

Beta flags for node.js &amp; express.

### Installation (via [npm](https://npmjs.org/package/beta))

```bash
$ npm install beta
```

### Usage

```javascript
var Beta = require('beta');
var beta = new Beta({
  userIdentifier: function(req){ return req.session.username; }
});

app.use(beta.middleware());

beta.check('MYFLAG', function(err, on){
});

app.get('/', function(req, res){
  req.beta('MYFLAG', function(err, on){
    if(on)
      // blah
  });

  req.beta(['MYFLAG', 'MYFLAG2'], function(err, flags){
    if(flags.MYFLAG || flags.MYFLAG2)
      // blah
  });
});
```
