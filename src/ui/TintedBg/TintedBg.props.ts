import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface TintedBgProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	state: unknown;
}
