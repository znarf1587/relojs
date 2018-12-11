/*!
 * relojs
 * Copyright(c) 2018 Franz Ferrufino
 * MIT Licensed
 */

"use strict";

/**
 * @returns {string}
 */

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  return t;
}

module.exports = {
  myTimer
};
