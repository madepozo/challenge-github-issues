import { AxiosResponse } from 'axios';
import BaseService from './BaseService';

class UserService extends BaseService {
	readonly endpoint = 'search/issues';

	constructor() {
		super('https://api.github.com/');
	}

	getIssues = async (searchValue: string): Promise<AxiosResponse> => {
		const queryString = new URLSearchParams();

		queryString.set('q', `repo:facebook/react is:issue ${searchValue}`);
		queryString.set('per_page', '10');

		const path = `${this.endpoint}?${queryString}`;

		return this.get(path);
	};
}

export default UserService;
