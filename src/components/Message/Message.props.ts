import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Attachments } from '../../interfaces';

export interface MessageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	his?: boolean;
	date: string;
	isReaded?: boolean;
	attachments?: Attachments[];
	smile?: string[];
}
