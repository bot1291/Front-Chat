import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface SettingProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: JSX.Element;
	color: string;
	name: string;
}
