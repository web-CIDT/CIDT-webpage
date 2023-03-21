(function (window) {

	var bodyEl = document.body,
		docElem = window.document.documentElement,
		// 视窗尺寸
		win = { width: window.innerWidth, height: window.innerHeight },
		// some helper vars to disallow scrolling
		lockScroll = false, xscroll, yscroll,
		// scrollContainer = document.querySelector('.container'),
		// the main slider and its items
		sliderEl = document.querySelector('.slider'),
		items = [].slice.call(sliderEl.querySelectorAll('.slide')),
		// total number of items
		itemsTotal = items.length,
		// 控制按钮
		toNext = document.getElementById('flow-to-next'),
		toPrev = document.getElementById('flow-to-prev'),
		showVision = document.getElementById('show-vidio'),
		// 视频容器
		contentEl = document.getElementById('work-vision'),
		// close content control
		// closeContentCtrl = contentEl.querySelector(''),
		// index of current item
		current = 0,
		// check if an item is "open"
		isOpen = false,
		isFirefox = typeof InstallTrigger !== 'undefined',
		// scale body when zooming into the items, if not Firefox (the performance in Firefox is not very good)
		bodyScale = isFirefox ? false : 3,
		timer = setInterval(flow, 5000);

	// some helper functions:
	function scrollX() { return window.pageXOffset || docElem.scrollLeft; }
	function scrollY() { return window.pageYOffset || docElem.scrollTop; }
	// from http://www.sberry.me/articles/javascript-event-throttling-debouncing
	function throttle(fn, delay) {
		var allowSample = true;

		return function (e) {
			if (allowSample) {
				allowSample = false;
				setTimeout(function () { allowSample = true; }, delay);
				fn(e);
			}
		};
	}

	init = () => {
		initEvents();
	}

	// event binding
	initEvents = () => {
		// open items
		showVision.addEventListener('click', () => { showDetail() });

		// close content
		// closeContentCtrl.addEventListener('click', closeContent);

		// navigation
		toNext.addEventListener('click', () => { navigate('right'); resetflow() });
		toPrev.addEventListener('click', () => { navigate('left'); resetflow() });

		// window resize
		window.addEventListener('resize', throttle(function (ev) {
			// reset window sizes
			win = { width: window.innerWidth, height: window.innerHeight };

			// reset transforms for the items (slider items)
			items.forEach(function (item, pos) {
				if (pos === current) return;
				var el = item.querySelector('.slide-mover');
				dynamics.css(el, { translateX: el.offsetWidth });
			});
		}, 10));

		// keyboard navigation events
		document.addEventListener('keydown', function (ev) {
			if (isOpen) return;
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					resetflow();
					break;
				case 39:
					navigate('right');
					resetflow();
					break;
			}
		});
	}

	// flow function
	function flow() {
		navigate('right');
	}

	// reset timer
	resetflow = () => {
		clearflow();
		timer = setInterval(flow, 5000);
	}

	// clear timer
	clearflow = () => {
		clearInterval(timer);
	}

	// show detail
	showDetail = () => {

	}

	// opens one item
	function openItem(item) {
		if (isOpen) return;
		isOpen = true;

		// disallow scroll
		scrollContainer.addEventListener('scroll', noscroll);
		// apply transforms
		applyTransforms(zoomer);
		// also scale the body so it looks the camera moves to the item.
		if (bodyScale) {
			dynamics.animate(bodyEl, { scale: bodyScale }, { type: dynamics.easeInOut, duration: 500 });
		}
		// after the transition is finished:
		onEndTransition(zoomer, function () {
			// reset body transform
			if (bodyScale) {
				dynamics.stop(bodyEl);
				dynamics.css(bodyEl, { scale: 1 });

				// fix for safari (allowing fixed children to keep position)
				bodyEl.style.WebkitTransform = 'none';
				bodyEl.style.transform = 'none';
			}
			// no scrolling
			classie.add(bodyEl, 'noscroll');
			classie.add(contentEl, 'content--open');
			var contentItem = document.getElementById(item.getAttribute('data-content'))
			classie.add(contentItem, 'content__item--current');
			classie.add(contentItem, 'content__item--reset');


			// reset zoomer transform - back to its original position/transform without a transition
			classie.add(zoomer, 'zoomer--notrans');
			zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
			zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
		});
	}

	// closes the item/content
	function closeContent() {
		var contentItem = contentEl.querySelector('.content__item--current'),
			zoomer = items[current].querySelector('.zoomer');

		classie.remove(contentEl, 'content--open');
		classie.remove(contentItem, 'content__item--current');
		classie.remove(bodyEl, 'noscroll');

		if (bodyScale) {
			// reset fix for safari (allowing fixed children to keep position)
			bodyEl.style.WebkitTransform = '';
			bodyEl.style.transform = '';
		}

		/* fix for safari flickering */
		var nobodyscale = true;
		applyTransforms(zoomer, nobodyscale);
		/* fix for safari flickering */

		// wait for the inner content to finish the transition
		onEndTransition(contentItem, function (ev) {
			classie.remove(this, 'content__item--reset');

			// reset scrolling permission
			lockScroll = false;
			scrollContainer.removeEventListener('scroll', noscroll);

			/* fix for safari flickering */
			zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
			zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
			/* fix for safari flickering */

			// scale up - behind the scenes - the item again (without transition)
			applyTransforms(zoomer);

			// animate/scale down the item
			setTimeout(function () {
				classie.remove(zoomer, 'zoomer--notrans');
				classie.remove(zoomer, 'zoomer--active');
				zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
				zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
			}, 25);

			if (bodyScale) {
				dynamics.css(bodyEl, { scale: bodyScale });
				dynamics.animate(bodyEl, { scale: 1 }, {
					type: dynamics.easeInOut,
					duration: 500
				});
			}

			isOpen = false;
		});
	}

	// applies the necessary transform value to scale the item up
	function applyTransforms(el, nobodyscale) {
		// zoomer area and scale value
		var zoomerArea = el.querySelector('.zoomer__area'),
			zoomerAreaSize = { width: zoomerArea.offsetWidth, height: zoomerArea.offsetHeight },
			zoomerOffset = zoomerArea.getBoundingClientRect(),
			scaleVal = zoomerAreaSize.width / zoomerAreaSize.height < win.width / win.height ? win.width / zoomerAreaSize.width : win.height / zoomerAreaSize.height;

		if (bodyScale && !nobodyscale) {
			scaleVal /= bodyScale;
		}

		// apply transform
		el.style.WebkitTransform = 'translate3d(' + Number(win.width / 2 - (zoomerOffset.left + zoomerAreaSize.width / 2)) + 'px,' + Number(win.height / 2 - (zoomerOffset.top + zoomerAreaSize.height / 2)) + 'px,0) scale3d(' + scaleVal + ',' + scaleVal + ',1)';
		el.style.transform = 'translate3d(' + Number(win.width / 2 - (zoomerOffset.left + zoomerAreaSize.width / 2)) + 'px,' + Number(win.height / 2 - (zoomerOffset.top + zoomerAreaSize.height / 2)) + 'px,0) scale3d(' + scaleVal + ',' + scaleVal + ',1)';
	}

	// navigate the slider
	function navigate(dir) {
		var itemCurrent = items[current],
			currentEl = itemCurrent.querySelector('.slide-mover'),
			currentTitleEl = itemCurrent.querySelector('.slider-intro');

		// update new current value
		if (dir === 'right') {
			current = current < itemsTotal - 1 ? current + 1 : 0;
		}
		else {
			current = current > 0 ? current - 1 : itemsTotal - 1;
		}

		var itemNext = items[current],
			nextEl = itemNext.querySelector('.slide-mover'),
			nextTitleEl = itemNext.querySelector('.slider-intro');

		// animate the current element out
		dynamics.animate(currentEl, { opacity: 0, translateX: dir === 'right' ? -1 * currentEl.offsetWidth / 2 : currentEl.offsetWidth / 2, rotateZ: dir === 'right' ? -10 : 10 }, {
			type: dynamics.spring,
			duration: 2000,
			friction: 600,
			complete: function () {
				// dynamics.css(itemCurrent, {opacity: 0, visibility: 'hidden'});
				itemCurrent.style.removeProperty('opacity')
				itemCurrent.style.removeProperty('visibility')
			}
		});

		// animate the current title out
		dynamics.animate(currentTitleEl, { translateX: dir === 'right' ? -250 : 250, opacity: 0 }, {
			type: dynamics.bezier,
			points: [{ "x": 0, "y": 0, "cp": [{ "x": 0.2, "y": 1 }] }, { "x": 1, "y": 1, "cp": [{ "x": 0.3, "y": 1 }] }],
			duration: 450
		});

		// set the right properties for the next element to come in
		dynamics.css(itemNext, { opacity: 1, visibility: 'visible' });
		dynamics.css(nextEl, { opacity: 0, translateX: dir === 'right' ? nextEl.offsetWidth / 2 : -1 * nextEl.offsetWidth / 2, rotateZ: dir === 'right' ? 10 : -10 });

		// animate the next element in
		dynamics.animate(nextEl, { opacity: 1, translateX: 0 }, {
			type: dynamics.spring,
			duration: 2000,
			friction: 600,
			complete: function () {
				items.forEach(function (item) { classie.remove(item, 'slide-showing'); });
				classie.add(itemNext, 'slide-showing');
			}
		});

		// set the right properties for the next title to come in
		dynamics.css(nextTitleEl, { translateX: dir === 'right' ? 250 : -250, opacity: 0 });
		// animate the next title in
		dynamics.animate(nextTitleEl, { translateX: 0, opacity: 1 }, {
			type: dynamics.bezier,
			points: [{ "x": 0, "y": 0, "cp": [{ "x": 0.2, "y": 1 }] }, { "x": 1, "y": 1, "cp": [{ "x": 0.3, "y": 1 }] }],
			duration: 650
		});
	}

	// disallow scrolling (on the scrollContainer)
	function noscroll() {
		if (!lockScroll) {
			lockScroll = true;
			xscroll = scrollContainer.scrollLeft;
			yscroll = scrollContainer.scrollTop;
		}
		scrollContainer.scrollTop = yscroll;
		scrollContainer.scrollLeft = xscroll;
	}

	init();

})(window);