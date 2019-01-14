const createFocusTrap = require('focus-trap');

const megaMenuButton = document.querySelector('.js-toggle-mega-menu');
const targetContainer = megaMenuButton.getAttribute('data-a11y-toggle');
const containerElement = document.getElementById(targetContainer);
const focusTrap = createFocusTrap(`#${targetContainer}`, { clickOutsideDeactivates: true });

function myFocusTrap() {
	setTimeout(() => {
		if (megaMenuButton.getAttribute('aria-expanded') === 'true') {
			containerElement.tabIndex = 0;
			focusTrap.activate();
		} else {
			focusTrap.deactivate();
			containerElement.addEventListener('transitionend', () => {
				containerElement.tabIndex = -1;
			}, { once: true });
		}
	}, 10);
}

function closeMenu(e) {
	if (e.target !== containerElement
		&& e.target.parentNode !== containerElement
		&& e.target !== megaMenuButton) {
		window.a11yToggle(containerElement);
	}
}

if (megaMenuButton) {
	megaMenuButton.addEventListener('click', myFocusTrap);
	window.addEventListener('mouseup', closeMenu);
}

if (megaMenuButton.getAttribute('aria-expanded') !== 'true') {
	document.addEventListener('keydown', (e) => {
		if (e.keyCode === 9) {
			containerElement.tabIndex = -1;
		}
	}, { once: true });
}
