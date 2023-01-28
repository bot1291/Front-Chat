import { Attachment } from '.';

export interface IDialogs {
	his: boolean;
	date: string;
	isReaded: boolean;
	isTyping: boolean;
	smile?: string;
	attachments?: Attachment[];
	text?: string;
}
