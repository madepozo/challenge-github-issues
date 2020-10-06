import { Issue } from './Issue';

export interface IssuesReducerState {
	hasError: boolean;
	isLoading: boolean;
	items: Issue[];
	selectedIssue?: Issue;
}
