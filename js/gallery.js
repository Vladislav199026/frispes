// document.addEventListener( 'DOMContentLoaded', function () {
// 		new Splide( '.splide', {
// 	type  : 'fade',
//             rewind: true,
//             // autoplay: true,
//     width: '960px'
// } ).mount();
// });
document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '.splide', {
	type  : 'fade',
            rewind: true,
            // autoplay: true,
    width: '960px'
		}).mount();
	
	
	var a = 750;
	var b = 1100;
	// new Splide('.splide.splide-two', {
	// 	type: 'loop',
	// 	perPage: 3,
	// 	focus: 'center',
	// }).mount()
	if (window.innerWidth < a) {
			new Splide('.splide.splide-two', {
				type: 'loop',
				perPage: 1,
				focus: 'center',
				width: '100%',
			}).mount()
	}
	if (window.innerWidth > a && window.innerWidth < b) {
			new Splide('.splide.splide-two', {
				type: 'loop',
				perPage: 2,
				focus: 'center',
				width: '100%',
			}).mount()
	}
	if (window.innerWidth > b) {
			new Splide('.splide.splide-two', {
				type: 'loop',
				perPage: 3,
				focus: 'center',
				width: '100%',
			}).mount()
	};



	// new Splide( '.splide.splide-three', {
	// 		type   : 'loop',
	// 		perPage: 3,
	// 		focus  : 'center',
	// }).mount();
	

	if (window.innerWidth < a) {
			new Splide('.splide.splide-three', {
				type: 'loop',
				perPage: 1,
				focus: 'center',
				width: '100%',
			}).mount()
	}
	if (window.innerWidth > a && window.innerWidth < b) {
			new Splide('.splide.splide-three', {
				type: 'loop',
				perPage: 2,
				focus: 'center',
				width: '100%',
			}).mount()
	}
	if (window.innerWidth > b) {
			new Splide('.splide.splide-three', {
				type: 'loop',
				perPage: 3,
				focus: 'center',
				width: '100%',
			}).mount()
	};


});

    