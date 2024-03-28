import { config } from '@config';
import { httpService } from '@src/http.service';

export const app = async (): Promise<void> => {
	await httpService.start(config);
};
