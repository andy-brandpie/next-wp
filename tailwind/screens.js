const { pxToRem } = require('@captaincss/captaincss/helpers');

// Content Container
exports.container = {
	center: true,
	padding: {
		DEFAULT: pxToRem(12),
		sm: pxToRem(16),
		lg: pxToRem(24),
	},
};

// Content container queries
exports.containers = {
	'xs': pxToRem(320),
	'sm': pxToRem(440),
	'md': pxToRem(680),
	'lg': pxToRem(920)
};

// Media Queries
exports.screens = {
	'sm': '500px',
	'md-down': {'max': '768px'},
	'md': '768px',
	'lg-down': {'max': '1020px'},
	'lg': '1020px',
	'xl': '1280px',
	'2xl': '1440px',
}
