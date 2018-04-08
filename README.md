# safeval
Quickly get your value from any nested object.

## Installation
```npm install safeval --save```

## Usage
```
var safeval = require('safeval');
var obj = { test: { one: 1, two: 2, three: 3 } };
var value = safeval(obj, '.test.two'); // 2
var valueFail = safeval(obj, '.test.four'); // null
var valueWithDefault = safeval(obj, '.test.four', 0); // 0
```
