var yo = require('yo-yo');
var landing = require('../landing/');
var translate = require('../translate/');

var formSignup = yo`<div class="col s12 m7">	
				<!-- Signup Form-->
					<div class="row">
						<div class="signup-box">
							<h1 class="platzigram">Platzigram</h1>
							<form class="signup-form">
								<h2>${translate.message('signup.subheading')}</h2>
								<div class="section">
									<a class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
									<a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook-f fb"></i>${translate.message('signup.text')}</a>
								</div>
								<div class="divider"></div>
								<div class="section">
									<input type="email" name="email" placeholder="${translate.message('email')}">
									<input type="text" name="name" placeholder="${translate.message('fullname')}">
									<input type="text" name="userName" placeholder="${translate.message('username')}">
									<input type="password" name="password" placeholder="${translate.message('password')}">
									<button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.call-to-action')}</button>
								</div>
							</form>							
						</div>
					</div>
				<!-- /Signup Form-->
				<!-- Enter to Signin -->
				<div class="row center">
					${translate.message('signup.have-account')} <a href="/signin">${translate.message('signin')}</a>
				</div>
				<!-- /Enter to Signin -->
				</div>`;

module.exports = landing(formSignup);