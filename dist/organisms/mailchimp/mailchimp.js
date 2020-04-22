'use strict';

var slidingForm = document.querySelector('[class*="--sliding"]');
var staticForm = document.querySelector('[class*="--static"]');
var closeButton = document.querySelector('[class*="--sliding"] .js-close-mailchimp-popup');
var timeout = slidingForm.getAttribute('data-timeout');
var timer = void 0;
var throttle = 66; // Trigger event every 66ms
var visibleClass = 'is-visible';
var cookieName = 'internetstiftelsen-mailchimp-form-closed';
var currentProtocol = document.location.protocol;

// Set cookie
function setCookie(name, value, days) {
	var d = new Date();
	d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);

	if (currentProtocol === 'https:') {
		document.cookie = name + '=' + value + ';path=/;SameSite=Strict;Secure;expires=' + d.toGMTString();
	} else {
		document.cookie = name + '=' + value + ';path=/;SameSite=Strict;expires=' + d.toGMTString();
	}
}

// Get cookie
function getCookie(name) {
	var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}

function isInViewport(element) {
	var top = element.offsetTop;
	var height = element.offsetHeight;

	while (element.offsetParent) {
		element = element.offsetParent; // eslint-disable-line
		top += element.offsetTop;
	}

	return top < window.pageYOffset + window.innerHeight && top + height > window.pageYOffset;
}

function slideForm() {
	if (!getCookie(cookieName)) {
		var inViewport = isInViewport(staticForm);
		clearTimeout(timer);

		if (!inViewport) {
			// The static form is not in the viewport, start timeout to show the sliding form
			timer = setTimeout(function () {
				slidingForm.classList.add(visibleClass);
			}, timeout);
		} else {
			slidingForm.classList.remove(visibleClass);
		}
	}
}

var debounce = function debounce(func, delay) {
	var inDebounce = void 0;

	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var context = undefined;
		clearTimeout(inDebounce);
		inDebounce = setTimeout(function () {
			return func.apply(context, args);
		}, delay);
	};
};

var elementIsInViewport = debounce(function () {
	if (slidingForm) {
		slideForm();
	}
}, throttle);

window.addEventListener('scroll', function () {
	elementIsInViewport();
});
function closeForm() {
	setCookie(cookieName, 'YES', 1);
	slidingForm.classList.remove(visibleClass);
	slidingForm.tabIndex = -1;
}

if (closeButton) {
	closeButton.addEventListener('click', function () {
		closeForm();
	});
}