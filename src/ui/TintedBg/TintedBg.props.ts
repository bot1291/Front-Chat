import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { TypeClickedItem } from '../../interfaces/TypeClickedItem';

export interface TintedBgProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	state: TypeClickedItem;
}
