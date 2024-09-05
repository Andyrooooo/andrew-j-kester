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
				'importantSecond': '#A7F3D0',
			},
			fontFamily: {
				// test: ['psfournier-std', 'sans-serif'], // Add your custom font family here
				// test2: ['pinecone-mvb', 'sans-serif'], 
				// test3: ['pinecone-mvb-rough1', 'sans-serif'], 
				// test4: ['pinecone-mvb-rough2', 'sans-serif'], 
				// test5: ['pinecone-mvb-condensed', 'sans-serif'], 
				// test6: ['pinecone-mvb-rough1-condense', 'sans-serif'], 
				// test7: ['pinecone-mvb-rough2-condense', 'sans-serif'], 
				// test8: ['pinecone-mvb-rough1-wide', 'sans-serif'], 
				// test9: ['pinecone-mvb-rough2-wide', 'sans-serif'], 
				test10: ['pinecone-mvb-wide', 'sans-serif'],
				// test11: ['sofia-pro-soft', 'sans-serif'],
				// test12: ['chippewa-falls', 'sans-serif'],
				// test13: ['scarlet-wood', 'sans-serif'],
				// test14: ['scarlet-wood-script', 'sans-serif'],
				// test15: ['komet', 'sans-serif'],
				test16: ['komet-sc', 'sans-serif'],
				// headers: ['greycliff-cf', 'sans-serif'],
				// You can add more font families if needed
			},
			boxShadow: {
				'loadShad': '0 0 75px 25px rgba(52, 211, 153, 0.25)'
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
