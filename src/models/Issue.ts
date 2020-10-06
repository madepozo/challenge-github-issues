interface IssueLabel {
	id: number;
	name: string;
	color: string;
}

export interface Issue {
	id: number;
	title: string;
	labels?: IssueLabel[];
	html_url: string;
}
