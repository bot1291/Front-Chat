import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormRegistrProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isSubmited: boolean;
	setItSubmited: (isSubmited: boolean) => void;
}
