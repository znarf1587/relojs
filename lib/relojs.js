/*!
 * relojs
 * Copyright(c) 2018 Franz Ferrufino
 * MIT Licensed
 */

"use strict";

/**
 * Expose `myTimer()`.
 */

exports = module.exports = myTimer();

/**
 * @return {Function}
 * @api public
 */

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  return t;
}
