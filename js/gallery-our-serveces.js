document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '.splide', {
	type  : 'fade',
            rewind: true,
            // autoplay: true,
    width: '960px'
} ).mount();
	new Splide('.splide.splide-two', {
	type   : 'loop',
	perPage: 3,
	focus  : 'center',
		}).mount();
	new Splide( '.splide.splide-three', {
	type   : 'loop',
			perPage: 3,
	focus  : 'center',
}).mount();
});
