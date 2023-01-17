import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	avatar: string;
	lastMes: string;
}
