'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function update(element, value) {
	var effect = element.getAttribute('data-if-effect') || 'toggle';

	var _element$getAttribute = element.getAttribute('data-if').split(':'),
	    _element$getAttribute2 = _slicedToArray(_element$getAttribute, 2),
	    match = _element$getAttribute2[1];

	var conditionMet = !match && value || match === value;

	if (effect === 'disable') {
		element.disabled = !conditionMet;
	} else if (effect === 'toggle') {
		element.style.display = conditionMet ? null : 'none';
	} else if (effect === 'text') {
		if (!element.hasAttribute('data-if-default')) {
			element.setAttribute('data-if-default', element.innerText);
		}

		var values = element.getAttribute('data-if-values').split('|');
		var text = values.map(function (item) {
			return item.split(':');
		}).find(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 1),
			    m = _ref2[0];

			return m === value;
		});

		element.innerText = text ? text[1] : element.getAttribute('data-if-default');
	}

	// If element is option and it was selected, we need to reset the value
	if (element.tagName.toLowerCase() === 'option' && element.selected) {
		element.closest('select').value = '';
	}
}

function delegate(_ref3) {
	var target = _ref3.target;
	var name = target.name;


	if (!name) {
		return;
	}

	var elements = document.querySelectorAll('[data-if^="' + name + '"]');

	if (!elements.length) {
		return;
	}

	[].forEach.call(elements, function (element) {
		return update(element, target.value);
	});
}

function init() {
	var elements = document.querySelectorAll('[data-if]');

	[].forEach.call(elements, function (element) {
		var _element$getAttribute3 = element.getAttribute('data-if').split(':'),
		    _element$getAttribute4 = _slicedToArray(_element$getAttribute3, 1),
		    name = _element$getAttribute4[0];

		var form = element.closest('form');

		if (!form) {
			throw new Error('Conditionals must be inside a form to avoid conflicts');
		}

		var related = form.querySelector('[name="' + name + '"]');

		if (related) {
			update(element, related.value);
		}
	});
}

init();
document.body.addEventListener('change', delegate);