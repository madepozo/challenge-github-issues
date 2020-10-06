import React, { memo, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Issue } from 'models/Issue';
import { selectIssue } from 'actions/issueActions';
import {
	SearchSuggestionItem,
	SearchSuggestionItemLabel,
	SearchSuggestionList,
	SearchSuggestionWrapper,
} from './SearchSuggestion.styles';

const Keyboard = {
	UP: 'ArrowUp',
	DOWN: 'ArrowDown',
	ENTER: 'Enter',
};

type Props = {
	suggestions: Issue[];
	setFocused: (status: boolean) => void;
};

const SearchSuggestion = ({ suggestions, setFocused }: Props): ReactElement => {
	const dispatch = useDispatch();
	const [index, setIndex] = useState<number>(-1);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const dispatchSelecteAction = (issue: Issue): void => {
		dispatch(selectIssue(issue));
		setFocused(false);
		const input: HTMLElement | null = document.querySelector(
			'input[type="search"]'
		);

		if (input) {
			input.blur();
		}
	};

	const handleHover = (evt: React.MouseEvent): void => {
		const idx = evt.currentTarget.getAttribute('data-index');

		if (idx) {
			setIndex(+idx);
		}
	};

	const handleSelectIssue = (evt: React.MouseEvent): void => {
		const idx = evt.currentTarget.getAttribute('data-index');

		if (idx) {
			dispatchSelecteAction(suggestions[idx]);
		}
	};

	useEffect(() => {
		const handleKeyDown = ({ key }: KeyboardEvent): void => {
			if (key === Keyboard.ENTER) {
				dispatchSelecteAction(suggestions[index]);
			} else if (key === Keyboard.DOWN) {
				setIndex(index < suggestions.length - 1 ? index + 1 : 0);
			} else if (key === Keyboard.UP) {
				setIndex(index ? index - 1 : suggestions.length - 1);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return (): void => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [index, suggestions, dispatchSelecteAction]);

	return (
		<SearchSuggestionWrapper>
			<SearchSuggestionList onMouseLeave={handleHover} data-index={-1}>
				{suggestions.map((issue: Issue, idx: number) => (
					<SearchSuggestionItem
						key={`SearchSuggestionWrapper-list-item-${issue.id}`}
						className={`${index === idx ? 'active' : ''}`}
						data-index={idx}
						onClick={handleSelectIssue}
						onMouseOver={handleHover}
						onFocus={(): void => undefined}
					>
						<p>{issue.title}</p>
						{issue.labels &&
							issue.labels.map((label) => (
								<SearchSuggestionItemLabel
									key={`SearchSuggestionWrapper-list-item-label-${label.id}`}
									color={`#${label.color}`}
								>
									{label.name}
								</SearchSuggestionItemLabel>
							))}
					</SearchSuggestionItem>
				))}
			</SearchSuggestionList>
		</SearchSuggestionWrapper>
	);
};

export default memo(SearchSuggestion);
