const defaultTheme = require('tailwindcss/defaultTheme')
const { backgroundImage } = require('./tailwind/backgroundImage.js');
const { colors } = require('./tailwind/colors.js');
const { screens, containers, container } = require('./tailwind/screens.js');
const { zIndex } = require('./tailwind/zindex.js');
const { safelist } = require('./tailwind/safelist.js');
const { spacing } = require('./tailwind/spacing.js');
const { transitionTimingFunction } = require('./tailwind/animation.js');
const { fontSize, fontWeight, lineHeight, letterSpacing } = require('./tailwind/typography.js');

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
				'serif': ['"Suisse Slab"', ...defaultTheme.fontFamily.serif],
				'heading': ['"Suisse"', ...defaultTheme.fontFamily.sans],
				'button': ['"Inter"', ...defaultTheme.fontFamily.sans],
			},
			fontSize,
			zIndex,
			transitionTimingFunction,
			backgroundImage,
			aspectRatio: {
				'video': '16 / 9',
				'landscape': '4 / 3',
				'portrait': '3 / 4'
      },
		},
		spacing,
		screens,
		colors,
		fontWeight,
		lineHeight,
		letterSpacing,
		containers: containers,
		container: container
	},
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
