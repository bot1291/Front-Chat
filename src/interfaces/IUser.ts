import { IAvatar } from './IAvatar';
import { IDialog } from './IDialog';

export interface IUser {
	_id: string;
	name: string;
	email: string;
	login: string;
	avatar: IAvatar;
	dialogs?: IDialog[];
}
