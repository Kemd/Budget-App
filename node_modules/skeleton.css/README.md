# skeleton.css

A `require()`able version of [Skeleton](http://getskeleton.com/).

## Example

``` javascript
var skeleton = require('skeleton.css');
var defaultcss = require('defaultcss');

defaultcss('skeleton', skeleton);
```

``` javascript
var skeleton = require('skeleton.css');
var insertCSS = require('insert-css');

insertCSS(skeleton);
```

## Installation

``` bash
$ npm install skeleton.css
```

## API

``` javascript
var skeleton = require('skeleton.css');
```

### `skeleton`

The entire Skeleton stylesheet as a _String_.