$(document).ready(function () {
//Слайдер	  
	$('.slider').slick({
		arrows: false,
		dots: true
	});
	$('.big-slider').slick({
		arrows: false,
		dots: false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
			slidesToShow: 3
		}
	},
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 4
		}
	},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 3
		}
	},
		{
			breakpoint: 576,
			settings: {
			slidesToShow: 2
		}
	},
		{
			breakpoint: 400,
			settings: {
			slidesToShow: 1
		}
	},
	]
	});

	var firstDiv = $('#firstDiv'), baseHeight = firstDiv.height();


	function handleBoxClick(rootDiv, iconId, answerId) {
		rootDiv.animate({
			height: (rootDiv.height() === baseHeight ? '190px' : '75px')
		});
		var iconElement = $(iconId);
		var clazz = iconElement[0].classList[0];
		if (clazz === 'material-icons-remove_circle') {
			iconElement.removeClass('material-icons-remove_circle');
			iconElement.addClass('material-icons-add_circle');
		}
		else {
			iconElement.removeClass('material-icons-add_circle');
			iconElement.addClass('material-icons-remove_circle');
		}
		$(answerId).toggleClass('visible');
	}

	var div1 = $('#firstDiv');
	var div2 = $('#secondDiv');
	var div3 = $('#thirdDiv');
	var div4 = $('#fourthDiv');
	var div5 = $('#fifthDiv');
	var div6 = $('#sixthDiv');
	var div7 = $('#seventhDiv');
	var div8 = $('#eighthDiv');
	var div9 = $('#ninthDiv');

	$('#firstBox').click(handleBoxClick.bind(this, div1, '#iconId1', '#firstAnswer'));
	$('#secondBox').click(handleBoxClick.bind(this, div2, '#iconId2', '#secondAnswer'));
	$('#thirdBox').click(handleBoxClick.bind(this, div3, '#iconId3', '#thirdAnswer'));
	$('#fourthDiv').click(handleBoxClick.bind(this, div4, '#iconId4', '#fourthAnswer'));
	$('#fifthDiv').click(handleBoxClick.bind(this, div5, '#iconId5', '#fifthAnswer'));
	$('#sixthDiv').click(handleBoxClick.bind(this, div6, '#iconId6', '#sixthAnswer'));
	$('#seventhDiv').click(handleBoxClick.bind(this, div7, '#iconId7', '#seventhAnswer'));
	$('#eighthDiv').click(handleBoxClick.bind(this, div8, '#iconId8', '#eighthAnswer'));
	$('#ninthDiv').click(handleBoxClick.bind(this, div9, '#iconId9', '#ninthAnswer'));

// Анимация
// Добавление класса при наведении курсора
	$('.scroll').hover(function () {
		$(this).toggleClass('pulse');
	});
	$('.media__item').hover(function () {
		$(this).toggleClass('jello');
	});
// Инициализация анимации
	$(window).scroll(function () {
		$('.advantages__item').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 600) {
				$(this).addClass("fadeIn");
			}
		});
	});
	$(window).scroll(function () {
		$('.right').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 600) {
				$(this).addClass("fadeInRightBig");
			}
		});
	});
	$(window).scroll(function () {
		$('.left').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 800) {
				$(this).addClass("fadeInLeftBig");
			}
		});
	});

//Прокрутка
	$('.go_to').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1100);
		}
		return false;
	});

	var topss ;
	$(window).scroll(function(){
		topss =   self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop); 
		if (topss>700){
		$('body').addClass('fix_variant');  
		} else {
		$('body').removeClass('fix_variant');   
	}
	});

// Гамбургер
	$('.menu__open').click(function () {
		$('.menu-collapse').toggleClass('d-none');
		$('.menu-collapse').toggleClass('opened');
	})

	$('.menu__link_open').click(function () {
		$('.open__menu').toggleClass('fadeIn');
	})

	$('.header__btn').click(function () {
		$('.form-box').toggleClass('fadeInUpBig');
		$('.header__btn').addClass('left');
	})
});
