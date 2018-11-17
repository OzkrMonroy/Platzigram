var page = require('page');
var empty = require('empty-element');
var templateSignup = require('./template');
var title = require('../title-module/');

page('/signup', function(ctx, next){
	title('Platzigram - Signup');
	var main = document.getElementById('main-container');	
		empty(main).appendChild(templateSignup);
})