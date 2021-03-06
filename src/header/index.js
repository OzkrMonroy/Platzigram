var yo = require('yo-yo');
var translate = require('../translate/');
var empty = require('empty-element');

var el = yo`<nav class="header">
			<div class="nav-wrapper">
				<div class="container">
					<div class="row">
						<div class="col s12 m6 offset-m1">
							<a class="brand-logo platzigram" href="/">Platzigram</a>
						</div>
						<div class="col s2 m4 push-s10 offset-m10">
							<a href="#" class="btn btn-large btn-flat dropdown-trigger" data-target="drop-user">
								<i class="fas fa-user"></i>
							</a>
							<ul class="dropdown-content" id="drop-user">
								<li><a href="#">${translate.message('logout')}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>`;

module.exports = function header(ctx, next){
	var container = document.getElementById('header-container')
	empty(container).appendChild(el);
	next();
}