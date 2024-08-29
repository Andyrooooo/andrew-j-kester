import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { ak } from './src/ak'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			borderWidth: {
				'1/2': '.5px'
			},
			fontSize: {
				'2xs': '.625rem',
			},
			colors: {
				'uvu': '#2B5B3C',
				'uvuSecond': '#DDDDDD',
				'uvuGray': '#FFF',
				'important': '#34D399',
			},
			keyframes: {
                hover: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                'hover-sm-1': {
                    '0%, 100%': { transform: 'translateY(-1px)' },
                    '50%': { transform: 'translateY(2px)' },
                },
				'hover-sm-2': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(2px)' },
                },
				'hover-sm-3': {
                    '0%, 100%': { transform: 'translateY(-1px)' },
                    '50%': { transform: 'translateY(2px)' },
                },
            },
            animation: {
                hover: 'hover 2s ease-in-out infinite',
                'hover-sm-1': 'hover-sm-1 2s ease-in-out infinite',
				'hover-sm-2': 'hover-sm-2 3s ease-in-out infinite',
				'hover-sm-3': 'hover-sm-3 4s ease-in-out infinite',
            },
			
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					{
						name: 'wintry',
						enhancements: true,
					},
					{
						name: 'modern',
						enhancements: true,
					},
					{
						name: 'hamlindigo',
						enhancements: true,
					},
					{
						name: 'rocket',
						enhancements: true,
					},
					{
						name: 'sahara',
						enhancements: true,
					},
					{
						name: 'gold-nouveau',
						enhancements: true,
					},
					{
						name: 'vintage',
						enhancements: true,
					},
					{
						name: 'seafoam',
						enhancements: true,
					},
					{
						name: 'crimson',
						enhancements: true,
					},
				],
				custom: [
					ak,
				],
			},
		}),
	],
} satisfies Config;
