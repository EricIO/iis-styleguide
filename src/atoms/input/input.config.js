module.exports = {
	status: 'wip',

	context: {
		label: 'Namn',
		labelClasses: 'is-required',
		type: 'text',
		id: 'name',
		value: false,
		placeholder: 'Förnamn',
		autocomplete: 'off',
		has_icon: true,
		required: false,
		disabled: false
	},
	variants: [
		{
			name: 'Help text',
			context: {
				required: false,
				has_help: true
			}
		},
		{
			name: 'Invalid',
			context: {
				is_invalid: true,
				required: true
			}
		}
	]
}
