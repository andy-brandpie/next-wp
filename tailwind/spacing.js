const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.spacing = {
	0 : '0',
	'gutter-sm' : pxToRem(12),
	'gutter' : pxToRem(24),
	'gutter-lg': pxToRem(48),
	'notification' : pxToRem(40),
	'banner-social' : pxToRem(265),
	'banner-hero' : pxToRem(650),
	'banner-hero-basic' : pxToRem(400),

	'timeline-t-lg': pxToRem(180),
	'timeline-t-xl': pxToRem(270),

	2: pxToRem(2),
	4: pxToRem(4),
	8: pxToRem(8),
	12: pxToRem(12),
	16: pxToRem(16),
	20: pxToRem(20),
	24: pxToRem(24),
	28: pxToRem(28),
	32: pxToRem(32),
	40: pxToRem(40),
	48: pxToRem(48),
	56: pxToRem(56),
	64: pxToRem(64),
	72: pxToRem(72),
	80: pxToRem(80),
	100: pxToRem(100),
	120: pxToRem(120),
	160: pxToRem(160)
};
