/*!
 * relojs
 * Copyright(c) 2018 Franz Ferrufino
 * MIT Licensed
 */

"use strict";

var myVar = setInterval(myTimer, 1000);

function myTime() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  return t;
}
