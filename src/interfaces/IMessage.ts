import { Attachment } from '.';

export interface IMessage {
	id: string;
	his: boolean;
	date: string;
	isReaded?: boolean;
	isTyping: boolean;
	smile?: string;
	attachments?: Attachment[];
	text?: string;
}
