import { DetailedHTMLProps, HTMLAttributes } from 'react';
import IErrors from '../../interfaces/IErrors';
import ITouched from '../../interfaces/ITouched';
import IValues from '../../interfaces/IValues';

export interface FormLoginProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	values: IValues;
	touched: ITouched;
	errors: IErrors;
	handleChange: (e: React.SyntheticEvent) => void;
	handleBlur: (e: React.SyntheticEvent) => void;
	handleSubmit: (e: React.SyntheticEvent) => void;
}
