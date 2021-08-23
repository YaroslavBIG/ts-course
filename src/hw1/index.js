"use strict";
exports.__esModule = true;
var source_1 = require("./source");
var c = new source_1.Currency(5.54);
console.log(c.dollars());
console.log(c.cents());
console.log(c.toJSON());
