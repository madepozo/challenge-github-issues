import styled from '@emotion/styled';

import { getColor } from 'styles/utils';

export const InputSearchWrapper = styled('div')`
	position: relative;
	width: 100%;

	.loader {
		right: 0px;
		top: 5px;
	}
`;

export const Input = styled('input')`
	background-color: ${getColor('white')};
	border: none;
	color: #586069;
	font-size: 14px;
	line-height: 20px;
	outline: none;
	padding: 5px 12px;
	vertical-align: middle;
	width: 94%;
`;
