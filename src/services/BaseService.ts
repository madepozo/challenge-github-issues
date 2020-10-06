import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class BaseService {
	service: AxiosInstance;

	constructor(baseURL: string) {
		this.service = axios.create({
			timeout: 30000,
			baseURL,
		});
		this.service.interceptors.response.use(
			this.handleSuccess,
			this.handleError
		);
	}

	handleSuccess = (response: AxiosResponse): AxiosResponse => {
		return response;
	};

	handleError = (error: AxiosError): AxiosError<Error> => {
		throw error;
	};

	async get(path: string): Promise<AxiosResponse> {
		return this.service.get(path);
	}
}

export default BaseService;
