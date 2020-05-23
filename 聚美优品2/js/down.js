let $in = $('.header_middle_car_in');
let $middleList = $('.header_middle')
let $cun = $middleList.find('.header_middle_car');
$cun.click(function (ev) {
	let target = ev.target,
		$target = $(target);
	if ($target.hasClass('#cun')) {
		$in.slideToggle(300);
		return;
	}
	$in.slideToggle(300);
});
$cun.click(function (ev) {
	ev.stopPropagation();
});
window.onscroll = function () {
	let sT = document.documentElement.scrollTop,
		cH = document.documentElement.clientHeight;
	if (sT >= cH) {
		coom.style.display = 'block';
	} else {
		coom.style.display = 'none';
	}
};
cood.onclick = function () {
	document.documentElement.scrollTop = 0;
};
cool.onclick = function () {
	document.documentElement.scrollTop = 600;
};
coos.onclick = function () {
	document.documentElement.scrollTop = 650;
};
