import { Attachments } from '.';

export interface IDialogs {
	his: boolean;
	date: string;
	isReaded: boolean;
	isTyping: boolean;
	smile?: string;
	attachments?: Attachments[];
	text?: string;
}
