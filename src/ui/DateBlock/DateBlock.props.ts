import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DateBlockProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	date: string;
	his: boolean | undefined;
	isReaded: boolean | undefined;
}
