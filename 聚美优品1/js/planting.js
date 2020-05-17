$(function () {
	let $container = $('.banner'),
		$slideList = $container.find('.slide'),
		$paginationList = $container.find('.pagination>li');

	let step = 0,
		prev = 0,
		interval = 3000,
		autoTimer = null,
		len = $slideList.length;
	function change() {
		let $cur = $slideList.eq(step),
			$pre = $slideList.eq(prev);
		$cur.css('zIndex', 1);
		$pre.css('zIndex', 0);
		$cur.css({
			transitionDuration: '.3s',
			opacity: 1
		}).one('transitionend', () => {
			$pre.css({
				transitionDuration: '0s',
				opacity: 0
			});
		});
		$paginationList.each((index, item) => {
			if (index === step) {
				$(item).addClass('active');
				return;
			}
			$(item).removeClass('active');
		});
	}
	function autoMove() {
		prev = step;
		step++;
		step > (len - 1) ? step = 0 : null;
		change();
	}
	autoTimer = setInterval(autoMove, interval);
	$container.on('mouseenter', () => clearInterval(autoTimer))
		.on('mouseleave', () => autoTimer = setInterval(autoMove, interval));
	$paginationList.on('click', function () {
		let index = $(this).index();
		if (index === step) return;
		prev = step;
		step = index;
		change();
	});
});