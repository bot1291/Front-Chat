import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MessageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	his?: boolean;
	date: string;
}
