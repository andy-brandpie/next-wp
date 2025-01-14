'use client';

import { getOptions } from '@/lib/wordpress';
import React, { useEffect, useState } from 'react';

function ThemeStyles() {
const [styles, setStyles] = useState('');


const getColour = (property: { colour: string; custom_colour?: string }) => {
	if(!property) return;

	if(property.colour === 'custom') {
		return property.custom_colour
	}
	else {
		return `var(--${property.colour})`
	}
}

const createStyleTag = (options: any) => {
	const styles = `
		:root {
			--background_colour: ${options.background_colour};
			--primary_colour: ${options.primary_colour};
			--secondary_colour: ${options.secondary_colour};
			--dark_colour: ${options.dark_colour};
			--light_colour: ${options.light_colour};
		}

		.site-masthead {
			background-color: ${getColour(options.masthead_background)};
		}

		.site-masthead a {
			color: ${getColour(options.masthead_link_colour)};
		}
	`;
	return styles;
}

useEffect(() => {
	async function fetchOptions() {
		try {
			const optionsData = await getOptions()
			await setStyles(createStyleTag(optionsData))
		} catch (error) {
			console.error('Error fetching options:', error)
		}
	}
	fetchOptions()

}, [])


return (
	<style id="theme-options">
		{styles}
	</style>
);
}

export default ThemeStyles