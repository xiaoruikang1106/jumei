let $detail = $('.header_top_right_bottom1');
let $header = $('.header_top_right');
let $cur = $header.find('#cur');
$cur.click(function (ev) {
	let target = ev.target,
		$target = $(target);
	if ($target.hasClass('#cur')) {
		$detail.slideToggle(300);
		return;
	}
		$detail.slideToggle(300);
});
$cur.click(function (ev) {
	ev.stopPropagation();
});
let $more = $('.header_top_right_bottom2');
let $cue = $header.find('#cue');
$cue.click(function (ev) {
	let target = ev.target,
		$target = $(target);
	if ($target.hasClass('#cue')) {
		$more.slideToggle(300);
		return;
	}
	$more.slideToggle(300);
});
$cue.click(function (ev) {
	ev.stopPropagation();
});
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
