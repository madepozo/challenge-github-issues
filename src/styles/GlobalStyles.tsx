import React, { ReactElement } from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { Theme } from 'models/Theme';

export default (): ReactElement => {
	const { color }: Theme = useTheme();
	const { black } = color;

	return (
		<Global
			styles={css`
				html {
					line-height: 1.15;
				}

				body {
					margin: 0;
					font-family: Arial, Helvetica, sans-serif;
					font-weight: normal;
				}

				article,
				aside,
				footer,
				header,
				nav,
				section {
					display: block;
				}

				h1 {
					font-size: 2em;
					margin: 0.67em 0;
				}

				figcaption,
				figure,
				main {
					/* 1 */
					display: block;
				}

				figure {
					margin: 1em 40px;
				}

				hr {
					box-sizing: content-box; /* 1 */
					height: 0; /* 1 */
					overflow: visible; /* 2 */
				}

				a {
					background-color: transparent; /* 1 */
					-webkit-text-decoration-skip: objects; /* 2 */
					text-decoration: none;
				}

				audio,
				video {
					display: inline-block;
				}

				audio:not([controls]) {
					display: none;
					height: 0;
				}

				img {
					border-style: none;
				}

				svg:not(:root) {
					overflow: hidden;
				}

				button,
				input,
				optgroup,
				select,
				textarea {
					font-family: sans-serif; /* 1 */
					font-size: 100%; /* 1 */
					line-height: 1.15; /* 1 */
					margin: 0; /* 2 */
				}

				button,
				input {
					/* 1 */
					overflow: visible;
				}

				button,
				select {
					/* 1 */
					text-transform: none;
				}

				button,
				html [type="button"],
					/* 1 */
				[type="reset"],
				[type="submit"] {
					-webkit-appearance: button; /* 2 */
				}

				button::-moz-focus-inner,
				[type='button']::-moz-focus-inner,
				[type='reset']::-moz-focus-inner,
				[type='submit']::-moz-focus-inner {
					border-style: none;
					padding: 0;
				}

				button:-moz-focusring,
				[type='button']:-moz-focusring,
				[type='reset']:-moz-focusring,
				[type='submit']:-moz-focusring {
					outline: 1px dotted ButtonText;
				}

				fieldset {
					padding: 0.35em 0.75em 0.625em;
				}

				legend {
					box-sizing: border-box; /* 1 */
					color: inherit; /* 2 */
					display: table; /* 1 */
					max-width: 100%; /* 1 */
					padding: 0; /* 3 */
					white-space: normal; /* 1 */
				}

				progress {
					display: inline-block; /* 1 */
					vertical-align: baseline; /* 2 */
				}

				textarea {
					overflow: auto;
				}

				[type='checkbox'],
				[type='radio'] {
					box-sizing: border-box; /* 1 */
					padding: 0; /* 2 */
				}

				[type='number']::-webkit-inner-spin-button,
				[type='number']::-webkit-outer-spin-button {
					height: auto;
				}

				[hidden] {
					display: none;
				}

				html {
					box-sizing: border-box; /* 1 */
					font-family: sans-serif; /* 2 */
				}

				*,
				*::before,
				*::after {
					box-sizing: inherit;
				}

				blockquote,
				dl,
				dd,
				h1,
				h2,
				h3,
				h4,
				h5,
				h6,
				figure,
				p,
				pre {
					margin: 0;
				}

				button {
					background: transparent;
					padding: 0;
				}

				input:focus,
				button:focus {
					outline: none;
				}

				fieldset {
					margin: 0;
					padding: 0;
				}

				ol,
				ul {
					margin: 0;
					padding: 0;
				}

				[tabindex='-1']:focus {
					outline: none !important;
				}

				*,
				*::before,
				*::after {
					border-width: 0;
					border-style: solid;
					border-color: currentColor;
				}

				img {
					border-style: solid;
				}

				button,
				[type='button'],
				[type='reset'],
				[type='submit'] {
					border-radius: 0;
				}

				textarea {
					resize: vertical;
				}

				img {
					max-width: 100%;
				}

				button,
				input,
				optgroup,
				select,
				textarea {
					font-family: inherit;
				}

				input::-webkit-input-placeholder,
				textarea::-webkit-input-placeholder {
					color: inherit;
					opacity: 0.5;
				}

				input::-moz-placeholder,
				textarea::-moz-placeholder {
					color: inherit;
					opacity: 0.5;
				}

				input::-ms-input-placeholder,
				textarea::-ms-input-placeholder {
					color: inherit;
					opacity: 0.5;
				}

				input::placeholder,
				textarea::placeholder {
					color: inherit;
					opacity: 0.5;
				}

				button,
				[role='button'] {
					cursor: pointer;
				}

				.loader {
					position: relative;
					height: 16px;
					width: 16px;
					display: inline-block;
					animation: around 5.4s infinite;
				}

				@keyframes around {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				.loader::after,
				.loader::before {
					content: '';
					background: white;
					position: absolute;
					display: inline-block;
					width: 100%;
					height: 100%;
					border-width: 2px;
					border-color: ${`${black} ${black} transparent transparent`};
					border-style: solid;
					border-radius: 20px;
					box-sizing: border-box;
					top: 0;
					left: 0;
					animation: around 0.7s ease-in-out infinite;
				}

				.loader::after {
					animation: around 0.7s ease-in-out 0.1s infinite;
					background: transparent;
				}
			`}
		/>
	);
};
