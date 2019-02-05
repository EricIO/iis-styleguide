require('./atoms/grid-toggle/grid-toggle');
require('./globals');

const Button = require('./atoms/button/button');

const demoButtons = document.querySelectorAll('button.a-button');

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
