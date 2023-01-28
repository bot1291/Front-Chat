import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Attachment } from '../../interfaces';

export interface MessageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	his?: boolean;
	date: string;
	isReaded?: boolean;
	attachments?: Attachment[];
	smile?: string;
	isTyping?: boolean;
}
