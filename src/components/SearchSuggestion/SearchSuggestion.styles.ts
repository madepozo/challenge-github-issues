import styled from '@emotion/styled';

import { getColor } from 'styles/utils';

export const SearchSuggestionWrapper = styled('div')`
	display: flex;
	flex-direction: row;
`;

export const SearchSuggestionList = styled('ul')`
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
`;

export const SearchSuggestionItem = styled('li')`
	cursor: pointer;
	font-size: 13px;
	font-weight: 500;
	margin-bottom: 4px;
	padding: 6px 8px;
	width: 100%;
	transition: all 0.25s linear;

	p {
		margin: 4px 0;
	}

	&.active {
		background: #eee;
	}
`;

type SearchSuggestionItemLabelProps = {
	color: string;
};

export const SearchSuggestionItemLabel = styled('span')<
	SearchSuggestionItemLabelProps
>`
	border-radius: 8px;
	font-size: 10px;
	padding: 3px 6px;
	margin: 3px;
	background: ${(props: SearchSuggestionItemLabelProps): string =>
		props.color};
	color: ${getColor('black')};

	&:first-of-type {
		margin-left: 0;
	}
`;

SearchSuggestionItemLabel.defaultProps = {
	color: '#f2f2f2',
};
