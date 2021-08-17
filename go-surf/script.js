$(function () {

	$('.header_slider').slick({
		fade: true,
		infinite: true,
		speed: 400,
		prevArrow: '<img id="sal" class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt="arrow">',
		nextArrow: '<img id="sar" class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt="arrow">',
		asNavFor: '.slider-dotshead',
		draggable: false
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		asNavFor: '.header_slider',
		focusOnSelect: true,
	});
	$('.surf-slider').slick({
		slidesToShow: 4,
		infinite: true,
		focusOnSelect: true,
		slidesToScroll: 1,
		prevArrow: '<img id="sal_surf-slider" class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt="arrow">',
		nextArrow: '<img id="sar_surf-slider" class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt="arrow">',
		asNavFor: '.slider-map'
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 8,
		infinite: false,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.surf-slider'
	});

	$('.holder_slider').slick({
		fade: true,
		infinite: true,
		speed: 400,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt="arrow">',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt="arrow">',
		// draggable: false
		asNavFor: '.surf-slider'

	})
	$('.sleep_slider, .shop_slider').slick({
		fade: true,
		infinite: true,
		speed: 400,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt="arrow">',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt="arrow">',
		draggable: false

	})
});
let number = 1
$('#north_shore-item').removeClass('animate__animated animate__fadeIn animate__delay-5s')
$('#north_shore-item').css({
	opacity: '0'
})

$(function () {

	$('#sal').click(function () {
		number--;
		if (number == 0) {
			number = 4
		};
		console.log(number);
		slick_control()
	});

	$('#sar').click(function () {
		number++;
		if (number == 5) {
			number = 1;
		};
		console.log(number);
		slick_control()
	});

	$('#north_dots').click(function () {
		number = 1;
		slick_control();
	})
	$('#south_dots').click(function () {
		number = 2;
		slick_control();
	})
	$('#west_dots').click(function () {
		number = 3;
		slick_control();
	})
	$('#east_dots').click(function () {
		number = 4;
		slick_control();
	})
});
function slick_control() {
	if (number == 1) {
		$('#north_shore-road').addClass('line-animation');

		$('#north_shore-road').css({
			opacity: '1'
		});
		$('#north_shore-text').addClass('animate__animated animate__fadeIn');
		$('#north_shore-item').css({
			opacity: '0'
		})
		$('#north_shore-item-big').addClass('animate__animated animate__fadeIn');
	} else {
		$('#north_shore-road').css({
			opacity: '0'
		});
		$('#north_shore-road').removeClass('line-animation--d');
		$('#north_shore-item-big').removeClass('animate__animated animate__fadeIn animate__delay-5s');
		$('#north_shore-item-big').css({
			opacity: '0'
		})
		$('#north_shore-item').css({
			opacity: '1'
		})
		$('#north_shore-text').removeClass('animate__animated animate__fadeIn animate__delay-5s')
		$('#north_shore-text').css({
			opacity: "0"
		});
		$('#north_shore-road').removeClass('line-animation');


	}
	if (number == 2) {
		$('#south_shore-road').addClass('line-animation_south-road')
		$('#south_shore-road').css({
			opacity: '1'
		});
		$('#south_shore-item').css({
			opacity: "0"
		});
		$('#south_shore-item-big').addClass('animate__animated animate__fadeIn');
		$('#south_shore-text').addClass('animate__animated animate__fadeIn');
	} else {
		$('#south_shore-road').css({
			opacity: '0'
		});
		$('#south_shore-item-big').css({
			opacity: '0'
		});
		$('#south_shore-item').css({
			opacity: '1'
		});
		$('#south_shore-item-big').removeClass('animate__animated animate__fadeIn');
		$('#south_shore-text').removeClass('animate__animated animate__fadeIn');
		$('#south_shore-road').removeClass('line-animation_south-road');

	}
	if (number == 3) {
		$('#west_shore-road').addClass('line-animation');

		$('#west_shore-road').css({
			opacity: '1'
		});
		$('#west_shore-item').css({
			opacity: "0"
		});
		$('#west_shore-item-big').addClass('animate__animated animate__fadeIn');
		$('#west_shore-text').addClass('animate__animated animate__fadeIn');
	} else {
		$('#west_shore-road').css({
			opacity: '0'
		});
		$('#west_shore-item-big').css({
			opacity: '0'
		});
		$('#west_shore-item').css({
			opacity: '1'
		});
		$('#west_shore-item-big').removeClass('animate__animated animate__fadeIn');
		$('#west_shore-text').removeClass('animate__animated animate__fadeIn');
		$('#west_shore-road').removeClass('line-animation')
	}
	if (number == 4) {
		$('#east_shore-road').addClass('line-animation_east-road');
		$('#east_shore-road').css({
			opacity: '1'
		});
		$('#east_shore-item').css({
			opacity: "0"
		});
		$('#east_shore-item-big').addClass('animate__animated animate__fadeIn');
		$('#east_shore-text').addClass('animate__animated animate__fadeIn');
	} else {
		$('#east_shore-road').css({
			opacity: '0'
		});
		$('#east_shore-item-big').css({
			opacity: '0'
		});
		$('#east_shore-item').css({
			opacity: '1'
		});
		$('#east_shore-item-big').removeClass('animate__animated animate__fadeIn');
		$('#east_shore-text').removeClass('animate__animated animate__fadeIn');

		$('#east_shore-road').removeClass('line-animation_east-road');
	};
};
let myDate = new Date();
let month = myDate.getMonth();
let year = myDate.getFullYear();
$('#month').text('0' + (month + 2));
$('#year').text(year);


var nights = 5;
let guests = 4;
let price = nights * guests - 1;
$('#minus-nights').click(
	function () {
		if (nights > 1) {
			$('#plus-nights').css({
				'filter': 'none',
				'cursor': 'pointer'
			});
			nights--;
			$('#nights').text(nights);
			priceCalculating()
		}
		if (nights === 1) {
			$('#minus-nights').css({
				'filter': 'grayscale(70%)',
				'cursor': 'not-allowed'
			})
		}
	}
);
$('#plus-nights').click(
	function () {
		if (nights < 10) {
			$('#minus-nights').css({
				'filter': 'none',
				'cursor': 'pointer'
			});
			nights++;
			$('#nights').text(nights);
			priceCalculating()
		}
		if (nights === 10) {
			$('#plus-nights').css({
				'filter': 'grayscale(70%)',
				'cursor': 'not-allowed'
			})
		}
	}
);
$('#minus-guests').click(
	function () {
		if (guests > 1) {
			$('#plus-guests').css({
				'filter': 'none',
				'cursor': 'pointer'
			});
			guests--;
			$('#guests').text(guests);
			priceCalculating()
		}
		if (guests === 1) {
			$('#minus-guests').css({
				'filter': 'grayscale(70%)',
				'cursor': 'not-allowed'
			})
		}
	}
);
$('#plus-guests').click(
	function () {
		if (guests < 10) {
			$('#minus-guests').css({
				'filter': 'none',
				'cursor': 'pointer'
			});
			guests++;
			$('#guests').text(guests);
			priceCalculating()
		}
		if (guests === 10) {
			$('#plus-guests').css({
				'filter': 'grayscale(70%)',
				'cursor': 'not-allowed'
			})
		}
	}
);

function priceCalculating() {
	price = nights * guests * 17.5 - 1;
	$('#price').text(price)
}

$('.surfboard-box_circle').click(function () {
	$(this).toggleClass('active')
})



new WOW().init();
