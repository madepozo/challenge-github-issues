import {
	FECTH_ISSUES_LOADING,
	FETCH_ISSUES_FAILED,
	FETCH_ISSUES_SUCCESS,
	SELECT_ISSUE,
} from 'actions/issueActions';
import { IssuesReducerState } from 'models/IssuesReducerState';
import { ActionType } from 'models/ActionType';

const initialState: IssuesReducerState = {
	items: [],
	isLoading: false,
	hasError: false,
};

export const issuesReducer = (
	state = initialState,
	action: ActionType
): IssuesReducerState => {
	switch (action.type) {
		case FECTH_ISSUES_LOADING:
		case FETCH_ISSUES_SUCCESS:
		case FETCH_ISSUES_FAILED:
		case SELECT_ISSUE:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
