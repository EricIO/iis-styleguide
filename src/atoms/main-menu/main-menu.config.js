module.exports = {
	status: 'wip',

	context: {
		item: [
			{
				text: 'Kunskap',
				url: '#',
				is_current: false,
				icon: false,
				hide_mobile: true
			},
			{
				text: 'Innovation',
				url: '#',
				is_current: false,
				icon: false,
				hide_mobile: true
			},
			{
				text: 'Domäner',
				url: '#',
				is_current: true,
				icon: false,
				hide_mobile: true
			},
			{
				text: 'Om oss',
				url: '#',
				is_current: false,
				icon: false,
				hide_mobile: true
			},
			{
				text: 'Sök ledig domän',
				url: false,
				is_current: false,
				icon: 'arrow-down',
				extra_class: 'js-toggle-domain-search',
				has_expandable: true,
				controls: 'domain-search',
				hide_mobile: true
			},
			{
				text: 'Sök',
				url: false,
				is_current: false,
				icon: 'search',
				extra_class: 'js-toggle-site-search',
				has_expandable: true,
				controls: 'site-search',
				hide_mobile: false
			},
			{
				text: 'Meny',
				url: false,
				is_current: false,
				icon: 'hamburger',
				extra_class: 'js-toggle-mega-menu',
				has_expandable: true,
				controls: 'mega-menu',
				hide_mobile: false
			}
		]
	}
}
