var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('../title-module/');
var header = require('../header');

page('/user', header, function(ctx, next){
	title('Platzigram - Ozkr Monroy');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})