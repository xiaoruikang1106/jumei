let loadingModule = (function () {
	let $columns = $('.column'),
		$lazyBoxs = null,
		_data = [],
		isRuning = false,
		count = 1;
	let queryData = function queryData() {
		$.ajax({
			url: 'json/data.json',
			method: 'get',
			dataType: 'json',
			async: false,
			success: result => {
				_data = result;
			}
		});
	};
	let bindHTML = function bindHTML() {
		for (let i = 0; i < _data.length; i += 3) {
			let group = _data.slice(i, i + 3);
			$.each(group, (index, item) => {
				let {
					link,
					pic,
					height,
					title,
					price
				} = item;
				$(`<div class="card">
					<a href="${link}">
						<div class="lazyImageBox" 
							style="height:${height}px">
							<img src="" alt="" data-image="${pic}">
							<div class="ground">
							</div>
							<div class="left">
								<p>+加入购物车</p>
							</div>
							<div class="right">
								<p>海外直采</p>
							</div>
						</div>
						<p class="maid">${title}</p>
						<p class="meid">￥${price}</p>
					</a>
				</div>`).appendTo($columns.eq(index));
			});
		}
	};
	let lazyFunc = function lazyFunc() {
		$lazyBoxs = $('.lazyImageBox').filter((index, item) => {
			return $(item).find('img').attr('data-image');
		});
		$lazyBoxs.each((index, item) => {
			let $window = $(window),
				$item = $(item);
			let A = $window.outerHeight() + $window.scrollTop(),
				B = $item.outerHeight() + $item.offset().top;
			if (B <= A) {
				let $img = $item.find('img'),
					dataImage = $img.attr('data-image'),
					tempImage = new Image;
				tempImage.src = dataImage;
				tempImage.onload = () => {
					$img.attr('src', dataImage).css({
						opacity: 1
					});
				};
				tempImage = null;
				$img.removeAttr('data-image');
			}
		});
	};
	let loadMore = function loadMore() {
		let $window = $(window),
			winH = $window.outerHeight(),
			scrollT = $window.scrollTop(),
			scrollH = $('body').outerHeight();
		if (winH + scrollT + winH / 2 >= scrollH) {
			if (isRuning) return; 
			isRuning = true; 
			count++;
			if (count > 5) {
				isRuning = false;
				return;
			}
			queryData();
			bindHTML();
			lazyFunc();
			isRuning = false;
		}
	};
	return {
		init() {
			queryData();
			bindHTML();
			lazyFunc();
			$(window).on('scroll', function () {
				lazyFunc();
				loadMore();
			});
		}
	};
})();
loadingModule.init();