import { IAvatar } from '.';
import { IMessage } from './IMessage';

export interface IDialog {
	id: string;
	name: string;
	avatar: IAvatar;
	lastMes?: string;
	dateLastMes?: string;
	messages?: IMessage[];
}
