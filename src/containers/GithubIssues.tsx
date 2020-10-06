/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	ReactElement,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { findIssues, updateIssueList } from 'actions/issueActions';
import { getColor } from 'styles/utils';
import { InputSearch } from 'components/InputSearch';
import { ReduxState } from 'models/ReduxState';
import { SearchSuggestion } from 'components/SearchSuggestion';

const GithubIssues = (): ReactElement => {
	const searchBoxRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const [
		{ items: issues, isLoading, selectedIssue },
	] = useSelector((state: ReduxState) => [state.issues]);
	const [searchValuve, setSearchValue] = useState<string>('');
	const [focused, setFocused] = useState<boolean>(false);

	const handleChange = useCallback((text: string) => {
		setSearchValue(text);
	}, []);

	useEffect(() => {
		const getIssues = async (filter: string): Promise<any> => {
			dispatch(findIssues(filter));
		};

		if (searchValuve.length > 2) {
			getIssues(searchValuve);
		} else {
			dispatch(updateIssueList([]));
		}
	}, [searchValuve, dispatch]);

	useEffect(() => {
		const handleClickOutside = (evt): void => {
			if (
				searchBoxRef.current !== null &&
				!searchBoxRef.current.contains(evt.target)
			) {
				setFocused(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return (): void => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<GithubIssuesWrapper>
			<SearchLabel>Search React Issues</SearchLabel>
			<SearchBox ref={searchBoxRef}>
				<InputSearch
					value={searchValuve}
					changeHandler={handleChange}
					isLoading={isLoading}
					setFocused={setFocused}
				/>
				{issues.length && focused ? (
					<>
						<Separator />
						<SearchSuggestion
							suggestions={issues}
							setFocused={setFocused}
						/>
					</>
				) : null}
			</SearchBox>
			{selectedIssue && (
				<SelectedIssue>
					<p className="issue-detail">The selected issue:</p>
					<p>
						<span>[{selectedIssue.id}]</span>
						{selectedIssue.title}
						<a
							href={selectedIssue.html_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							Go to issue
						</a>
					</p>
				</SelectedIssue>
			)}
		</GithubIssuesWrapper>
	);
};

const GithubIssuesWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	margin: 20px auto;
	max-width: 580px;
	padding: 10px;
	position: relative;
	width: 94%;
`;

const SearchBox = styled('div')`
	background: ${getColor('white')};
	border-radius: 24px;
	border: 1px solid #dfe1e5;
	display: flex;
	flex-direction: column;
	padding: 6px 8px;
	position: absolute;
	top: 60px;
	transition: all 0.25s linear;
	width: 100%;
	z-index: 5;

	&:hover {
		box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
	}
`;

const SearchLabel = styled('label')`
	font-weight: 600;
	margin: 12px 6px;
`;

const Separator = styled('div')`
	align-self: center;
	background: #e8eaed;
	height: 1px;
	margin-bottom: 4px;
	width: 96%;
`;

const SelectedIssue = styled('span')`
	color: ${getColor('black')};
	font-size: 16px;
	margin: 60px 8px 8px;
	padding: 4px;

	a {
		color: ${getColor('blue')};
		font-size: 12px;
		margin-left: 6px;
		text-decoration: none;
	}

	span {
		font-weight: 600;
		margin-right: 4px;
	}

	.issue-detail {
		font-size: 16px;
		margin: 20px 0 10px;
		text-decoration: underline;
	}
`;

export default GithubIssues;
