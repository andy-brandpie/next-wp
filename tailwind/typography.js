const { pxToRem } = require('@captaincss/captaincss/helpers');

let base = 16;

/*
Fluid type generated with this tool :
@link https://utopia.fyi/type/calculator?c=375,36,1.25,1280,70,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
*/

exports.fontSize = {
	'sm': pxToRem(14, base),
	'md': pxToRem(20, base),
	'lg': pxToRem(32, base),
	'base': `${base}Px`,
  'page-title' : 'clamp(4rem, 3rem + 5cqi, 7.5rem)',
  'h1' : 'clamp(3rem, 2.4286rem + 2.8571cqi, 5rem)',
  'h2' : 'clamp(2rem, 1.7143rem + 1.4286cqi, 3rem)',
  'h3' : 'clamp(1.5rem, 1.3571rem + 0.7143cqi, 2rem)',
  'h4' : 'clamp(1.125rem, 1.0179rem + 0.5357cqi, 1.5rem)',
  'h5' : pxToRem(20, base),
  'h6' : pxToRem(20, base),
};

exports.fontWeight = {
  light: '300',
  normal: '300',
  medium: '400',
  semibold: '500',
  bold: '500',
  black: '500',
};

exports.lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

exports.letterSpacing = {
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
};
