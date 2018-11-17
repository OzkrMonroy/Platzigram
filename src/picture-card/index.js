var yo = require('yo-yo');
// var moment = require('moment');
var translate = require('../translate/');

module.exports = function pictureCard(pic){
	var el;

	function render(picture){
		return yo`<div class="card ${picture.liked ? 'liked' : ''}">
	<div class="card-image">
		<img src="${picture.url}">
	</div>
	<div class="card-content">
		<a href="/user/${picture.user.username}" class="card-title">
			<img src="${picture.user.avatar}" class="avatar">
			<span class="username">${picture.user.username}</span>
			<small class="right time">${translate.date.format(picture.createdAt)}</small>
		</a>		
		<p>
			<a class="left" href="#" onclick=${like.bind(null, true)}><i class="far fa-heart heart"></i></a>
			<a class="left" href="#" onclick=${like.bind(null, false)}><i class="fas fa-heart heart-all"></i></a>
			<span class="left likes">${translate.message('likes', { likes: picture.likes})}</span>
		</p>
	</div>
</div>`
	}

	function like(liked){
		pic.liked = liked;
		pic.likes += liked ? 1 : -1;
		var newElement = render(pic);
		yo.update(el, newElement);
		return false;
	}

	el = render(pic);

	return el;
}