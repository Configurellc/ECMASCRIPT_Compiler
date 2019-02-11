"use strict";

var hellWorld = function hellWorld() {
  return 'hello';
};

var heyWorld = function heyWorld() {
  return 'hello';
};

var templateLiteral = "".concat(hellWorld(), " I'm using template literals to make all this happen");
alert(templateLiteral);