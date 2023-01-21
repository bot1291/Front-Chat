import IErrors from '../../interfaces/IErrors';
import ITouched from '../../interfaces/ITouched';

export const checkForError = (
	errors: IErrors,
	touched: ITouched,
	field: string
): string | boolean | undefined => touched[field] && errors[field];
