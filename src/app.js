import './molecules/form';

require('./atoms/grid-toggle/grid-toggle');
require('./components');

const Button = require('./atoms/button/Button');
const ButtonWithStates = require('./atoms/button/ButtonWithStates');

const demoButtons = document.querySelectorAll('button.a-button.has-loader');

if (demoButtons.length) {
	demoButtons.forEach((button) => {
		const b = new Button(button);

		button.addEventListener('click', () => {
			if (b.isLoading()) {
				return;
			}

			b.start();

			setTimeout(() => {
				b.stop();
			}, 2000);
		});
	});
}

const demoButtonsMultipleStates = document.querySelectorAll('button.a-button.has-states');

if (demoButtonsMultipleStates.length) {
	demoButtonsMultipleStates.forEach((button) => {
		const b = new ButtonWithStates(button);
		b.init(button);

		// Add example listeners.
		button.addEventListener('activated', () => {
			console.log('Button state is activated');
		});

		button.addEventListener('deactivated', () => {
			console.log('Button state is deactivated');
		});
	});
}
