var $ = module.exports = require('./algorithm');
var animation = require('./animation');
$.cancelAnimationFrame = animation.cancelAnimationFrame;
$.requestAnimationFrame = animation.requestAnimationFrame;