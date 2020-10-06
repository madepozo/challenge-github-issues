/* eslint-disable @typescript-eslint/no-explicit-any */

import { ActionType } from 'models/ActionType';
import { Issue } from 'models/Issue';
import IssueService from 'services/IssueService';

export const FECTH_ISSUES_LOADING = 'FECTH_ISSUES_LOADING';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCESS';
export const FETCH_ISSUES_FAILED = 'FETCH_ISSUES_FAILED';
export const SELECT_ISSUE = 'SELECT_ISSUE';

const issueService = new IssueService();

export const updateIssueList = (issues: Issue[]): ActionType => {
	return {
		type: FETCH_ISSUES_SUCCESS,
		payload: {
			items: issues,
			isLoading: false,
		},
	};
};

export const findIssues = (serachValue: string) => async (
	dispatch
): Promise<any> => {
	dispatch({ type: FECTH_ISSUES_LOADING, payload: { isLoading: true } });

	try {
		const { data } = await issueService.getIssues(serachValue.trim());

		dispatch(updateIssueList(data.items));
	} catch (error) {
		dispatch({
			type: FETCH_ISSUES_FAILED,
			payload: {
				isLoading: false,
				hasError: true,
			},
		});
	}
};

export const selectIssue = (issue: Issue): ActionType => {
	return {
		type: SELECT_ISSUE,
		payload: {
			selectedIssue: issue,
		},
	};
};
